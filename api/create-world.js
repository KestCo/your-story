const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1.5";
const IMAGE_SIZE = process.env.OPENAI_IMAGE_SIZE || "1024x1024";
const IMAGE_QUALITY = process.env.OPENAI_IMAGE_QUALITY || "low";
const CONFIGURED_SCENE_LIMIT = Number.parseInt(process.env.OPENAI_POSTER_SCENE_LIMIT || "5", 10);
const POSTER_SCENE_LIMIT = Math.min(5, Math.max(1, Number.isFinite(CONFIGURED_SCENE_LIMIT) ? CONFIGURED_SCENE_LIMIT : 5));

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

function buildSceneList(body) {
  const scenes = Array.isArray(body.scenes) ? body.scenes : [];
  const usableScenes = scenes
    .slice(0, POSTER_SCENE_LIMIT)
    .map((scene, index) => ({
      index: Number.isFinite(scene.index) ? scene.index : index,
      title: normalize(scene.title) || `Scene ${index + 1}`,
      line: normalize(scene.line),
      focus: Array.isArray(scene.focus) ? scene.focus : []
    }))
    .filter((scene) => scene.line);

  if (usableScenes.length) {
    return usableScenes;
  }

  return [
    {
      index: 0,
      title: normalize(body.template?.title) || "Your Story",
      line: normalize(body.story),
      focus: []
    }
  ];
}

function buildDetailLines(details = {}) {
  return Object.entries(details)
    .map(([key, value]) => `${key}: ${normalize(value)}`)
    .filter((line) => !line.endsWith(": "))
    .join("; ");
}

function buildFocusLine(scene) {
  return scene.focus
    .map((item) => `${normalize(item.label || item.id)}: ${normalize(item.value)}`)
    .filter((line) => !line.endsWith(": "))
    .join("; ");
}

function buildModerationInput(body, scenes) {
  const details = Object.entries(body.details || {})
    .map(([key, value]) => `${key}: ${normalize(value)}`)
    .join("\n");

  const sceneText = scenes
    .map((scene) => `${scene.title}: ${scene.line}`)
    .join("\n");

  return [
    `Story title: ${normalize(body.template?.title)}`,
    `Story: ${normalize(body.story)}`,
    `Scene posters:\n${sceneText}`,
    `Player details:\n${details}`,
    `Movie prompt: ${normalize(body.moviePrompt)}`
  ].join("\n\n");
}

function buildSceneImagePrompt(body, scene) {
  const story = normalize(body.story);
  const title = normalize(body.template?.title) || "Your Story";
  const tone = normalize(body.template?.tone) || "wonder";
  const details = buildDetailLines(body.details);
  const focus = buildFocusLine(scene);

  return [
    "Create one polished cinematic poster frame for one scene in a family-friendly ad-lib story reel.",
    "No text, letters, captions, logos, subtitles, watermarks, or UI.",
    "Make it elegant storybook realism with cinematic light, depth, atmosphere, and a clear subject.",
    "Keep the world, character, setting, and visual style consistent with the overall story.",
    `Story title: ${title}.`,
    `Tone: ${tone}.`,
    `Overall finished story: ${story}.`,
    `This frame illustrates scene ${scene.index + 1}, titled ${scene.title}: ${scene.line}.`,
    focus ? `Scene focus details: ${focus}.` : "",
    details ? `All player details for continuity: ${details}.` : "",
    "Compose the frame like a still from a beautiful animated short, not a poster with words."
  ]
    .filter(Boolean)
    .join(" ");
}

async function generatePoster(body, scene) {
  const image = await openaiJson("/images/generations", {
    model: IMAGE_MODEL,
    prompt: buildSceneImagePrompt(body, scene),
    size: IMAGE_SIZE,
    quality: IMAGE_QUALITY
  });

  const firstImage = image.data?.[0];
  const base64 = firstImage?.b64_json;
  const imageUrl = firstImage?.url;

  if (!base64 && !imageUrl) {
    const error = new Error("The image service answered, but no poster image came back.");
    error.statusCode = 502;
    throw error;
  }

  return {
    index: scene.index,
    title: scene.title,
    line: scene.line,
    imageUrl: base64 ? `data:image/png;base64,${base64}` : imageUrl
  };
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
  const scenes = buildSceneList(body);
  const sceneTextLength = scenes.reduce((total, scene) => total + scene.title.length + scene.line.length, 0);

  if (!story || !moviePrompt || !scenes.length) {
    return sendJson(res, 400, {
      ok: false,
      message: "The story needs finished text and scene lines before it can become a world."
    });
  }

  if (story.length > 1800 || moviePrompt.length > 2400 || sceneTextLength > 2600) {
    return sendJson(res, 400, {
      ok: false,
      message: "That story is a little too large to render right now. Try a shorter version."
    });
  }

  try {
    const moderation = await openaiJson("/moderations", {
      model: "omni-moderation-latest",
      input: buildModerationInput(body, scenes)
    });

    const flagged = moderation.results?.some((result) => result.flagged);
    if (flagged) {
      return sendJson(res, 400, {
        ok: false,
        blocked: true,
        message: "One story detail needs a cleaner rewrite before we build the world."
      });
    }

    const posters = await Promise.all(scenes.map((scene) => generatePoster(body, scene)));

    return sendJson(res, 200, {
      ok: true,
      configured: true,
      mode: "generated-scene-posters",
      posters,
      imageUrl: posters[0]?.imageUrl || "",
      message: posters.length === 1 ? "Your scene poster is ready." : "Your scene posters are ready."
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

module.exports.config = {
  maxDuration: 60
};