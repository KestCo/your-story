const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1.5";
const IMAGE_SIZE = process.env.OPENAI_IMAGE_SIZE || "1024x1024";
const IMAGE_QUALITY = process.env.OPENAI_IMAGE_QUALITY || "low";

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function normalize(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch (_error) {
      return {};
    }
  }
  return req.body;
}

async function openaiJson(path, payload) {
  const response = await fetch(`https://api.openai.com/v1${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  let json = {};

  try {
    json = text ? JSON.parse(text) : {};
  } catch (_error) {
    json = { raw: text };
  }

  if (!response.ok) {
    const message = json.error?.message || "The OpenAI request could not be completed.";
    const error = new Error(message);
    error.statusCode = response.status;
    error.details = json;
    throw error;
  }

  return json;
}

function buildModerationInput(body) {
  const details = Object.entries(body.details || {})
    .map(([key, value]) => `${key}: ${normalize(value)}`)
    .join("\n");

  return [
    `Story title: ${normalize(body.template?.title)}`,
    `Story: ${normalize(body.story)}`,
    `Player details:\n${details}`,
    `Movie prompt: ${normalize(body.moviePrompt)}`
  ].join("\n\n");
}

function buildImagePrompt(body) {
  const story = normalize(body.story);
  const prompt = normalize(body.moviePrompt);
  const title = normalize(body.template?.title) || "Your Story";
  const tone = normalize(body.template?.tone) || "wonder";

  return [
    "Create one polished cinematic story poster frame for a family-friendly ad-lib story game.",
    "No text, letters, captions, logos, subtitles, watermarks, or UI.",
    "The image should feel like elegant storybook realism with cinematic light, depth, and motion.",
    `Story title: ${title}.`,
    `Tone: ${tone}.`,
    `Finished story: ${story}.`,
    `Scene direction: ${prompt}.`
  ].join(" ");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { ok: false, message: "Use POST to build a world." });
  }

  if (!OPENAI_API_KEY) {
    return sendJson(res, 200, {
      ok: true,
      configured: false,
      mode: "local-preview",
      message: "AI image generation is ready to connect. Add OPENAI_API_KEY in Vercel to render posters."
    });
  }

  const body = parseBody(req);
  const story = normalize(body.story);
  const moviePrompt = normalize(body.moviePrompt);

  if (!story || !moviePrompt) {
    return sendJson(res, 400, {
      ok: false,
      message: "The story needs both finished text and a movie prompt before it can become a world."
    });
  }

  if (story.length > 1800 || moviePrompt.length > 2400) {
    return sendJson(res, 400, {
      ok: false,
      message: "That story is a little too large to render right now. Try a shorter version."
    });
  }

  try {
    const moderation = await openaiJson("/moderations", {
      model: "omni-moderation-latest",
      input: buildModerationInput(body)
    });

    const flagged = moderation.results?.some((result) => result.flagged);
    if (flagged) {
      return sendJson(res, 400, {
        ok: false,
        blocked: true,
        message: "One story detail needs a cleaner rewrite before we build the world."
      });
    }

    const image = await openaiJson("/images/generations", {
      model: IMAGE_MODEL,
      prompt: buildImagePrompt(body),
      size: IMAGE_SIZE,
      quality: IMAGE_QUALITY
    });

    const firstImage = image.data?.[0];
    const base64 = firstImage?.b64_json;
    const imageUrl = firstImage?.url;

    if (!base64 && !imageUrl) {
      return sendJson(res, 502, {
        ok: false,
        message: "The image service answered, but no poster image came back."
      });
    }

    return sendJson(res, 200, {
      ok: true,
      configured: true,
      mode: "generated-image",
      imageUrl: base64 ? `data:image/png;base64,${base64}` : imageUrl,
      message: "Your world poster is ready."
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message =
      statusCode === 401
        ? "OpenAI key rejected"
        : error.message || "The world could not be rendered yet.";

    return sendJson(res, statusCode, {
      ok: false,
      configured: true,
      upstreamStatus: statusCode,
      message
    });
  }
};
