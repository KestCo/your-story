const screens = Array.from(document.querySelectorAll(".screen"));
const fieldList = document.querySelector("#fieldList");
const wordForm = document.querySelector("#wordForm");
const storyDraft = document.querySelector("#storyDraft");
const formMessage = document.querySelector("#formMessage");
const progressCount = document.querySelector("#progressCount");
const filledCount = document.querySelector("#filledCount");
const randomizeButton = document.querySelector("#randomizeButton");
const copyButton = document.querySelector("#copyButton");
const cinematicButton = document.querySelector("#cinematicButton");
const copyPromptButton = document.querySelector("#copyPromptButton");

const welcomeDescription = document.querySelector("#welcomeDescription");
const welcomeStoryTitle = document.querySelector("#welcomeStoryTitle");
const welcomeStoryLength = document.querySelector("#welcomeStoryLength");
const welcomeStoryTone = document.querySelector("#welcomeStoryTone");
const storyEyebrow = document.querySelector("#storyEyebrow");
const storyTitle = document.querySelector("#storyTitle");

const finalStory = document.querySelector("#finalStory");
const worldLead = document.querySelector("#worldLead");
const worldSetting = document.querySelector("#worldSetting");
const worldMood = document.querySelector("#worldMood");
const worldDetails = document.querySelector("#worldDetails");
const worldTokens = document.querySelector("#worldTokens");
const wordStorm = document.querySelector("#wordStorm");
const worldRevealTitle = document.querySelector("#worldRevealTitle");
const sceneKicker = document.querySelector("#sceneKicker");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneLine = document.querySelector("#sceneLine");
const cinemaStatus = document.querySelector("#cinemaStatus");
const shotList = document.querySelector("#shotList");
const moviePrompt = document.querySelector("#moviePrompt");
const movieFrame = document.querySelector("#movieFrame");
const posterPlace = document.querySelector("#posterPlace");
const generatedPoster = document.querySelector("#generatedPoster");
const motionProgress = document.querySelector("#motionProgress");
const previousSceneButton = document.querySelector("#previousSceneButton");
const replaySceneButton = document.querySelector("#replaySceneButton");
const nextSceneButton = document.querySelector("#nextSceneButton");

const writerStoryList = document.querySelector("#writerStoryList");
const writerDraftCount = document.querySelector("#writerDraftCount");
const writerForm = document.querySelector("#writerForm");
const writerTitleInput = document.querySelector("#writerTitleInput");
const writerToneInput = document.querySelector("#writerToneInput");
const writerLengthInput = document.querySelector("#writerLengthInput");
const writerDescriptionInput = document.querySelector("#writerDescriptionInput");
const writerStoryTemplateInput = document.querySelector("#writerStoryTemplateInput");
const writerMoviePromptInput = document.querySelector("#writerMoviePromptInput");
const writerFields = document.querySelector("#writerFields");
const writerReadyCount = document.querySelector("#writerReadyCount");
const writerReadyList = document.querySelector("#writerReadyList");
const writerMessage = document.querySelector("#writerMessage");
const writerResetButton = document.querySelector("#writerResetButton");
const writerCopyButton = document.querySelector("#writerCopyButton");
const writerPlaytestButton = document.querySelector("#writerPlaytestButton");

const PLAYER_DRAFT_PREFIX = "yourStoryPlayerDraft:";
const TEMPLATE_DRAFTS_KEY = "yourStoryTemplateDrafts";

const SCENE_FIELD_FOCUS = [
  ["place", "weather"],
  ["hero", "object"],
  ["color", "feeling"],
  ["sound", "weather"],
  ["secret", "hero"]
];

const REVEAL_STEPS = [
  "Gathering your words",
  "Opening the frame",
  "Lighting the world",
  "Rolling scene one"
];

const WORD_SPARK_POSITIONS = [
  { x: 16, y: 18, delay: 0 },
  { x: 64, y: 15, delay: 90 },
  { x: 12, y: 48, delay: 180 },
  { x: 70, y: 42, delay: 270 },
  { x: 18, y: 76, delay: 360 },
  { x: 66, y: 78, delay: 450 },
  { x: 42, y: 28, delay: 540 },
  { x: 44, y: 70, delay: 630 }
];

const DEFAULT_WORD_LIMITS = {
  hero: { min: 1, max: 5 },
  object: { min: 1, max: 4 },
  place: { min: 2, max: 7 },
  weather: { min: 1, max: 6 },
  feeling: { min: 1, max: 2 },
  color: { min: 1, max: 2 },
  sound: { min: 1, max: 6 },
  secret: { min: 3, max: 12 },
  default: { min: 1, max: 8 }
};

const blockedTerms = [
  "asshole",
  "bastard",
  "bitch",
  "blowjob",
  "cocksucker",
  "cum",
  "cunt",
  "dick",
  "fuck",
  "motherfucker",
  "piss",
  "porn",
  "pussy",
  "shit",
  "slut",
  "whore"
];

const fallbackTemplates = [
  {
    id: "door-in-the-weather",
    storyNumber: 1,
    title: "The Door in the Weather",
    tone: "Wonder",
    lengthLabel: "5 scenes",
    description: "A short story becomes a tiny cinematic world shaped by the words you choose.",
    fields: [
      { id: "hero", label: "Main character", placeholder: "a retired mapmaker", spark: ["a lighthouse keeper", "a shy inventor"] },
      { id: "object", label: "Mysterious object", placeholder: "a brass key", spark: ["a silver compass", "a cracked lantern"] },
      { id: "place", label: "Unexpected place", placeholder: "an abandoned train station", spark: ["a glass library", "a rooftop garden"] },
      { id: "weather", label: "Weather", placeholder: "silver rain", spark: ["warm snow", "blue fog"] },
      { id: "feeling", label: "Feeling", placeholder: "brave", spark: ["hopeful", "restless"] },
      { id: "color", label: "Color", placeholder: "copper", spark: ["sapphire", "amber"] },
      { id: "sound", label: "Sound", placeholder: "a distant bell", spark: ["a soft whistle", "a humming wire"] },
      { id: "secret", label: "Hidden secret", placeholder: "the moon keeps receipts", spark: ["the walls remember names", "the river runs backward"] }
    ],
    storyTemplate: "{hero} found {object} in {place} while {weather} moved across the sky. The moment felt {feeling}, and every shadow turned {color}. From somewhere nearby came {sound}. When the door opened, it revealed that {secret}.",
    shotTemplates: [
      { title: "Opening Image", detail: "{place|title} waits beneath {weather}." },
      { title: "Discovery", detail: "{hero|sentence} finds {object}." },
      { title: "The Shift", detail: "The light turns {color} and the mood becomes {feeling}." },
      { title: "The Call", detail: "{sound|sentence} pulls the story forward." },
      { title: "Reveal", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "{weather|title}",
      title: "{object|title} at {place|title}",
      line: "{sound|sentence} leads {hero} toward the secret: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic story scene with no on-screen text, logos, subtitles, or watermarks. The main character is {hero}. The scene takes place in {place}. A mysterious object, {object}, is discovered while {weather} moves through the world. The mood is {feeling}, with {color} light and {sound} in the distance. The story ends with the reveal that {secret}. Style: elegant storybook realism, cinematic lighting, gentle wonder, rich detail, smooth camera movement, safe for all ages."
  }
];

const baseTemplates = clone(window.YOUR_STORY_TEMPLATES || fallbackTemplates);

const state = {
  templates: [],
  templateDrafts: {},
  activeTemplateId: "",
  writerTemplateId: "",
  values: {},
  cinematicTimer: null,
  sceneTimer: null,
  activeShotIndex: 0,
  isPlaying: false,
  aiRequestInFlight: false
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function trackStudioEvent(eventName, payload = {}) {
  window.KestCoAnalytics?.track(eventName, payload);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[character];
  });
}

function selectorSafe(value) {
  if (window.CSS?.escape) {
    return CSS.escape(value);
  }
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

function normalize(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function titleCase(value) {
  return normalize(value).replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function sentenceCase(value) {
  const clean = normalize(value);
  return clean ? clean.charAt(0).toUpperCase() + clean.slice(1) : "";
}

function selectInlineText(element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function countWords(value) {
  const clean = normalize(value);
  return clean ? clean.split(/\s+/).length : 0;
}

function wordLimitForField(field) {
  const defaults = DEFAULT_WORD_LIMITS[field.id] || DEFAULT_WORD_LIMITS.default;
  const minWords = Number.isFinite(field.minWords) ? field.minWords : defaults.min;
  const maxWords = Number.isFinite(field.maxWords) ? field.maxWords : defaults.max;
  return {
    min: Math.max(1, minWords),
    max: Math.max(Math.max(1, minWords), maxWords)
  };
}

function wordLimitLabel(field) {
  const limit = wordLimitForField(field);
  return limit.min === limit.max ? `${limit.min} word` : `${limit.min}-${limit.max} words`;
}

function wordLimitProblem(field, value) {
  const limit = wordLimitForField(field);
  const total = countWords(value);
  const label = field.label.toLowerCase();

  if (total < limit.min) {
    return `Give ${label} a little more detail (${wordLimitLabel(field)}).`;
  }

  if (total > limit.max) {
    return `Try a shorter phrase for ${label} (${wordLimitLabel(field)}).`;
  }

  return "";
}

function parseLimitInput(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.min(20, Math.max(1, parsed));
}

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("screen-active", screen.id === id);
  });

  if (id === "storyScreen") {
    trackStudioEvent("story_started", {
      story_id: activeTemplate().id,
      story_number: activeTemplate().storyNumber,
      tone: activeTemplate().tone
    });

    requestAnimationFrame(() => {
      const firstEmpty = activeTemplate().fields.find((field) => !state.values[field.id]);
      const target = firstEmpty ? document.querySelector(`#${firstEmpty.id}`) : document.querySelector("#hero");
      target?.focus();
    });
  }

  if (id === "writerScreen") {
    trackStudioEvent("writer_opened", {
      story_id: activeTemplate().id
    });
    renderWriterPortal();
  }
}

function loadTemplateDrafts() {
  try {
    const stored = JSON.parse(localStorage.getItem(TEMPLATE_DRAFTS_KEY) || "{}");
    state.templateDrafts = stored && typeof stored === "object" ? stored : {};
  } catch {
    state.templateDrafts = {};
    localStorage.removeItem(TEMPLATE_DRAFTS_KEY);
  }
}

function saveTemplateDrafts() {
  localStorage.setItem(TEMPLATE_DRAFTS_KEY, JSON.stringify(state.templateDrafts));
}

function rebuildTemplates() {
  state.templates = baseTemplates.map((template) => {
    return state.templateDrafts[template.id] ? clone(state.templateDrafts[template.id]) : clone(template);
  });
}

function dailyTemplateId() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const dayNumber = Math.floor((today - start) / 86400000);
  const index = Math.abs(dayNumber) % state.templates.length;
  return state.templates[index].id;
}

function activeTemplate() {
  return state.templates.find((template) => template.id === state.activeTemplateId) || state.templates[0];
}

function baseTemplateById(id) {
  return baseTemplates.find((template) => template.id === id) || baseTemplates[0];
}

function templateById(id) {
  return state.templates.find((template) => template.id === id) || state.templates[0];
}

function playerDraftKey(templateId) {
  return `${PLAYER_DRAFT_PREFIX}${templateId}`;
}

function loadPlayerDraft(template) {
  const values = Object.fromEntries(template.fields.map((field) => [field.id, ""]));
  try {
    const stored = JSON.parse(localStorage.getItem(playerDraftKey(template.id)) || "{}");
    template.fields.forEach((field) => {
      if (typeof stored[field.id] === "string") {
        values[field.id] = normalize(stored[field.id]);
      }
    });
  } catch {
    localStorage.removeItem(playerDraftKey(template.id));
  }
  state.values = values;
}

function savePlayerDraft() {
  localStorage.setItem(playerDraftKey(activeTemplate().id), JSON.stringify(state.values));
}

function selectTemplate(templateId, options = {}) {
  const template = templateById(templateId);
  state.activeTemplateId = template.id;

  if (options.resetValues) {
    state.values = Object.fromEntries(template.fields.map((field) => [field.id, ""]));
    localStorage.removeItem(playerDraftKey(template.id));
  } else {
    loadPlayerDraft(template);
  }

  renderPublicTemplate();
  renderFields();
  updatePreview();
}

function getField(id) {
  return activeTemplate().fields.find((field) => field.id === id);
}

function plainValue(id) {
  const field = getField(id);
  return state.values[id] || field?.placeholder || "";
}

function formatValue(value, format) {
  if (format === "title") return titleCase(value);
  if (format === "sentence") return sentenceCase(value);
  if (format === "upper") return normalize(value).toUpperCase();
  if (format === "lower") return normalize(value).toLowerCase();
  return normalize(value);
}

function hashText(text) {
  return Array.from(String(text)).reduce((hash, character) => {
    return (hash * 31 + character.charCodeAt(0)) >>> 0;
  }, 7);
}

function visualPalette() {
  const seed = hashText(Object.values(state.values).join("|"));
  const palettes = [
    { sky: "#12243a", sky2: "#0a101b", glow: "#d7af63", accent: "#6f879f", ground: "#19283a" },
    { sky: "#1d2342", sky2: "#0d1426", glow: "#c9b6ff", accent: "#8ca6c8", ground: "#1b2330" },
    { sky: "#263047", sky2: "#10141d", glow: "#f0c879", accent: "#7ca3a2", ground: "#222b38" },
    { sky: "#182d32", sky2: "#0d1723", glow: "#9fd7c2", accent: "#d7af63", ground: "#172726" },
    { sky: "#2c2032", sky2: "#111318", glow: "#e2a9c2", accent: "#7f93b0", ground: "#241d29" }
  ];
  return palettes[seed % palettes.length];
}

function weatherClass() {
  const weather = plainValue("weather").toLowerCase();
  if (weather.includes("snow") || weather.includes("frost")) return "weather-snow";
  if (weather.includes("rain") || weather.includes("shower")) return "weather-rain";
  if (weather.includes("fog") || weather.includes("mist")) return "weather-fog";
  if (weather.includes("lightning") || weather.includes("thunder")) return "weather-lightning";
  if (weather.includes("star") || weather.includes("moon")) return "weather-stars";
  return "weather-wind";
}

function updatePosterVisuals() {
  const palette = visualPalette();
  movieFrame.style.setProperty("--poster-sky", palette.sky);
  movieFrame.style.setProperty("--poster-sky-2", palette.sky2);
  movieFrame.style.setProperty("--poster-glow", palette.glow);
  movieFrame.style.setProperty("--poster-accent", palette.accent);
  movieFrame.style.setProperty("--poster-ground", palette.ground);
  movieFrame.dataset.weather = weatherClass();
  posterPlace.textContent = titleCase(plainValue("place"));
}

function renderTemplateString(templateString, options = {}) {
  return String(templateString || "").replace(/\{([a-zA-Z0-9_-]+)(?:\|([a-zA-Z]+))?\}/g, (_match, id, format) => {
    const field = getField(id);
    const filled = Boolean(state.values[id]);
    const raw = filled ? state.values[id] : field?.placeholder || "";
    const formatted = formatValue(raw, format);

    if (!options.html) {
      return formatted;
    }

    if (options.interactive && field) {
      const currentValue = state.values[id] || "";
      return `
        <span class="story-blank-wrap">
          <span
            class="story-inline-input"
            data-field-id="${escapeHtml(id)}"
            data-placeholder="${escapeHtml(field.label)}"
            contenteditable="true"
            role="textbox"
            aria-label="${escapeHtml(field.label)}"
          >${escapeHtml(currentValue)}</span>
        </span>
      `;
    }

    if (filled) {
      return `<span class="filled-word">${escapeHtml(formatted)}</span>`;
    }

    return `<span class="blank-word">${escapeHtml(field?.label || id)}</span>`;
  });
}

function renderPublicTemplate() {
  const template = activeTemplate();
  welcomeDescription.textContent = template.description;
  welcomeStoryTitle.textContent = template.title;
  welcomeStoryLength.textContent = template.lengthLabel;
  welcomeStoryTone.textContent = template.tone;
  storyEyebrow.textContent = `Story ${template.storyNumber}`;
  storyTitle.textContent = template.title;
}

function buildStoryHtml() {
  return renderTemplateString(activeTemplate().storyTemplate, { html: true, interactive: true });
}

function buildStoryText() {
  return sentenceCase(renderTemplateString(activeTemplate().storyTemplate));
}

function buildShots() {
  return activeTemplate().shotTemplates.map((shot) => ({
    title: shot.title,
    detail: renderTemplateString(shot.detail)
  }));
}

function buildSceneBeats() {
  return buildShots().map((shot, index) => ({
    kicker: `Scene ${index + 1}`,
    title: shot.title,
    line: shot.detail
  }));
}

function buildMoviePrompt() {
  return renderTemplateString(activeTemplate().moviePromptTemplate);
}

function buildWorldPayload() {
  const template = activeTemplate();
  return {
    story: buildStoryText(),
    moviePrompt: buildMoviePrompt(),
    template: {
      id: template.id,
      title: template.title,
      tone: template.tone
    },
    details: Object.fromEntries(template.fields.map((field) => [field.id, plainValue(field.id)]))
  };
}

function sceneFocusIds(index) {
  const fields = activeTemplate().fields.map((field) => field.id);
  const focus = SCENE_FIELD_FOCUS[index] || [];
  const knownFocus = focus.filter((id) => fields.includes(id));

  if (knownFocus.length) {
    return knownFocus;
  }

  return fields.slice(index, index + 2).concat(fields.slice(0, Math.max(0, index + 2 - fields.length))).slice(0, 2);
}

function renderWorldDetails() {
  worldDetails.innerHTML = activeTemplate()
    .fields.map((field) => {
      return `
        <div class="world-detail" data-field-id="${escapeHtml(field.id)}">
          <span>${escapeHtml(field.label)}</span>
          <strong>${escapeHtml(titleCase(plainValue(field.id)))}</strong>
        </div>
      `;
    })
    .join("");
}

function renderWorldTokens() {
  worldTokens.innerHTML = activeTemplate()
    .fields.filter((field) => plainValue(field.id))
    .slice(0, 8)
    .map((field, index) => {
      return `
        <span class="world-token token-${index + 1}" data-field-id="${escapeHtml(field.id)}">
          <small>${escapeHtml(field.label)}</small>
          ${escapeHtml(titleCase(plainValue(field.id)))}
        </span>
      `;
    })
    .join("");
}

function renderWordStorm() {
  wordStorm.innerHTML = activeTemplate()
    .fields.filter((field) => plainValue(field.id))
    .slice(0, 8)
    .map((field, index) => {
      const position = WORD_SPARK_POSITIONS[index % WORD_SPARK_POSITIONS.length];
      return `
        <span
          class="word-spark"
          data-field-id="${escapeHtml(field.id)}"
          style="--spark-x: ${position.x}%; --spark-y: ${position.y}%; --spark-delay: ${position.delay}ms;"
        >${escapeHtml(titleCase(plainValue(field.id)))}</span>
      `;
    })
    .join("");
}

function highlightWorldDetails(index) {
  const focus = sceneFocusIds(index);

  worldDetails.querySelectorAll(".world-detail").forEach((detail) => {
    detail.classList.toggle("active", focus.includes(detail.dataset.fieldId));
  });

  worldTokens.querySelectorAll(".world-token").forEach((token) => {
    token.classList.toggle("active", focus.includes(token.dataset.fieldId));
  });

  wordStorm.querySelectorAll(".word-spark").forEach((spark) => {
    spark.classList.toggle("active", focus.includes(spark.dataset.fieldId));
  });
}

function updatePreview() {
  storyDraft.innerHTML = buildStoryHtml();
  updateProgress();
}

function storyDensity() {
  const values = Object.values(state.values).filter(Boolean);
  const totalCharacters = values.reduce((sum, value) => sum + value.length, 0);
  const longestCharacters = values.reduce((max, value) => Math.max(max, value.length), 0);
  const longestWords = values.reduce((max, value) => Math.max(max, countWords(value)), 0);

  if (totalCharacters > 130 || longestCharacters > 30 || longestWords > 8) {
    return "tight";
  }

  if (totalCharacters > 98 || longestCharacters > 23 || longestWords > 6) {
    return "compact";
  }

  if (totalCharacters > 70 || longestCharacters > 17 || longestWords > 4) {
    return "comfortable";
  }

  return "open";
}

function updateProgress() {
  const template = activeTemplate();
  const complete = template.fields.filter((field) => state.values[field.id]).length;
  storyDraft.dataset.density = storyDensity();
  progressCount.textContent = complete;
  filledCount.textContent = complete === 1 ? "1 detail placed" : `${complete} details placed`;
}

function syncDetailInput(fieldId, value) {
  const chip = fieldList.querySelector(`[data-ingredient-id="${selectorSafe(fieldId)}"]`);
  if (!chip) {
    return;
  }

  const valueTarget = chip.querySelector(".ingredient-value");
  const field = getField(fieldId);
  chip.classList.toggle("filled", Boolean(value));
  valueTarget.textContent = value || field?.placeholder || "";
}

function syncStoryInputs(fieldId, value, sourceInput = null) {
  storyDraft.querySelectorAll(`.story-inline-input[data-field-id="${selectorSafe(fieldId)}"]`).forEach((input) => {
    if (input !== sourceInput && input.textContent !== value) {
      input.textContent = value;
    }
  });
}

function hasBlockedTerm(value) {
  const lower = value.toLowerCase();
  return blockedTerms.some((term) => {
    const pattern = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    return pattern.test(lower);
  });
}

function validateFields() {
  const missing = activeTemplate().fields.filter((field) => !state.values[field.id]);
  if (missing.length) {
    return `Add ${missing[0].label.toLowerCase()} to keep the story moving.`;
  }

  const blocked = activeTemplate().fields.find((field) => hasBlockedTerm(state.values[field.id]));
  if (blocked) {
    return `Try a cleaner choice for ${blocked.label.toLowerCase()}.`;
  }

  const wrongLength = activeTemplate().fields.find((field) => wordLimitProblem(field, state.values[field.id]));
  if (wrongLength) {
    return wordLimitProblem(wrongLength, state.values[wrongLength.id]);
  }

  const tooLong = activeTemplate().fields.find((field) => state.values[field.id].length > 48);
  if (tooLong) {
    return `${tooLong.label} is a little long. Try a shorter phrase.`;
  }

  return "";
}

function renderFields() {
  fieldList.innerHTML = activeTemplate()
    .fields.map((field, index) => {
      const value = state.values[field.id] || "";
      return `
        <button class="ingredient-chip${value ? " filled" : ""}" type="button" data-ingredient-id="${escapeHtml(field.id)}">
          <span class="ingredient-number">${index + 1}</span>
          <span class="ingredient-copy">
            <strong>${escapeHtml(field.label)}</strong>
            <span class="ingredient-value">${escapeHtml(value || field.placeholder)}</span>
          </span>
          <span class="ingredient-range">${escapeHtml(wordLimitLabel(field))}</span>
        </button>
      `;
    })
    .join("");

  Array.from(fieldList.querySelectorAll(".ingredient-chip")).forEach((chip) => {
    chip.addEventListener("click", () => {
      const target = storyDraft.querySelector(`.story-inline-input[data-field-id="${selectorSafe(chip.dataset.ingredientId)}"]`);
      target?.focus();
      if (target) {
        selectInlineText(target);
      }
    });
  });
}

function sparkIdeas() {
  trackStudioEvent("spark_ideas", {
    story_id: activeTemplate().id,
    field_count: activeTemplate().fields.length
  });

  activeTemplate().fields.forEach((field) => {
    const options = field.spark.length ? field.spark : [field.placeholder];
    state.values[field.id] = options[Math.floor(Math.random() * options.length)];
  });
  renderFields();
  updatePreview();
  savePlayerDraft();
  formMessage.textContent = "A fresh set of ideas is ready to reshape.";
}

function clearScenePlayback() {
  clearTimeout(state.sceneTimer);
  state.sceneTimer = null;
  state.isPlaying = false;
  movieFrame.classList.remove("is-playing");
  replaySceneButton.textContent = "Replay Reel";
}

function setActiveShot(index, options = {}) {
  const beats = buildSceneBeats();
  if (!beats.length) {
    return;
  }

  const normalizedIndex = ((index % beats.length) + beats.length) % beats.length;
  const beat = beats[normalizedIndex];
  state.activeShotIndex = normalizedIndex;

  sceneKicker.textContent = `Scene ${normalizedIndex + 1} of ${beats.length}`;
  sceneTitle.textContent = beat.title;
  sceneLine.textContent = sentenceCase(beat.line);
  movieFrame.dataset.scene = `scene-${normalizedIndex + 1}`;
  motionProgress.style.width = `${((normalizedIndex + 1) / beats.length) * 100}%`;
  highlightWorldDetails(normalizedIndex);

  shotList.querySelectorAll(".shot-card").forEach((shotButton, buttonIndex) => {
    const active = buttonIndex === normalizedIndex;
    shotButton.classList.toggle("active", active);
    shotButton.setAttribute("aria-pressed", active ? "true" : "false");
  });

  if (options.updateStatus) {
    cinemaStatus.textContent = `Scene ${normalizedIndex + 1} selected`;
  }
}

function showManualScene(index) {
  clearScenePlayback();
  movieFrame.classList.add("is-cinematic", "is-awake");
  movieFrame.classList.remove("is-revealing");
  cinematicButton.textContent = "Replay Reel";
  cinematicButton.disabled = false;
  setActiveShot(index, { updateStatus: true });
}

function startScenePlayback(index = 0) {
  const beats = buildSceneBeats();
  if (!beats.length) {
    return;
  }

  clearTimeout(state.sceneTimer);
  state.isPlaying = true;
  movieFrame.classList.add("is-cinematic", "is-awake", "is-playing");
  movieFrame.classList.remove("is-revealing");
  replaySceneButton.textContent = "Replaying";
  cinematicButton.textContent = "Replay Reel";
  cinematicButton.disabled = false;
  setActiveShot(index);
  cinemaStatus.textContent = `Scene ${state.activeShotIndex + 1} moving`;

  if (state.activeShotIndex >= beats.length - 1) {
    state.sceneTimer = setTimeout(() => {
      state.isPlaying = false;
      movieFrame.classList.remove("is-playing");
      cinemaStatus.textContent = "World alive";
      replaySceneButton.textContent = "Replay Reel";
    }, 2200);
    return;
  }

  state.sceneTimer = setTimeout(() => {
    startScenePlayback(state.activeShotIndex + 1);
  }, 2400);
}

function showNextScene() {
  showManualScene(state.activeShotIndex + 1);
}

function showPreviousScene() {
  showManualScene(state.activeShotIndex - 1);
}

function resetGeneratedPoster() {
  generatedPoster.hidden = true;
  generatedPoster.removeAttribute("src");
  movieFrame.classList.remove("has-generated-poster", "is-rendering-ai");
}

async function requestGeneratedWorld() {
  if (state.aiRequestInFlight) {
    return;
  }

  state.aiRequestInFlight = true;
  movieFrame.classList.add("is-rendering-ai");
  cinemaStatus.textContent = "Rendering poster";
  trackStudioEvent("poster_requested", {
    story_id: activeTemplate().id,
    story_number: activeTemplate().storyNumber
  });

  try {
    const response = await fetch("/api/create-world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(buildWorldPayload())
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.ok) {
      cinemaStatus.textContent = result.blocked ? "Clean rewrite needed" : "Live reel active";
      trackStudioEvent("poster_failed", {
        story_id: activeTemplate().id,
        reason: result.blocked ? "moderation" : "request_failed"
      });
      return;
    }

    if (!result.configured) {
      cinemaStatus.textContent = "Live reel active";
      trackStudioEvent("poster_local_preview", {
        story_id: activeTemplate().id
      });
      return;
    }

    if (result.imageUrl) {
      generatedPoster.src = result.imageUrl;
      generatedPoster.hidden = false;
      movieFrame.classList.add("has-generated-poster");
      cinemaStatus.textContent = "AI poster rendered";
      trackStudioEvent("poster_generated", {
        story_id: activeTemplate().id
      });
      return;
    }

    cinemaStatus.textContent = "Live reel active";
    trackStudioEvent("poster_failed", {
      story_id: activeTemplate().id,
      reason: "no_image"
    });
  } catch (_error) {
    cinemaStatus.textContent = "Live reel active";
    trackStudioEvent("poster_failed", {
      story_id: activeTemplate().id,
      reason: "network"
    });
  } finally {
    state.aiRequestInFlight = false;
    movieFrame.classList.remove("is-rendering-ai");
  }
}

function renderCinematicPlan() {
  clearScenePlayback();
  clearTimeout(state.cinematicTimer);
  state.cinematicTimer = null;
  state.activeShotIndex = 0;
  resetGeneratedPoster();

  const shots = buildShots();
  shotList.innerHTML = shots
    .map((shot, index) => {
      return `
        <button class="shot-card" type="button" data-shot-index="${index}" aria-pressed="false">
          <span>${index + 1}</span>
          <div>
            <strong>${escapeHtml(shot.title)}</strong>
            <p>${escapeHtml(shot.detail)}</p>
          </div>
        </button>
      `;
    })
    .join("");

  shotList.querySelectorAll(".shot-card").forEach((shotButton) => {
    shotButton.addEventListener("click", () => {
      showManualScene(Number(shotButton.dataset.shotIndex));
    });
  });

  moviePrompt.value = buildMoviePrompt();
  cinemaStatus.textContent = "Ready";
  cinematicButton.textContent = "Bring My World Alive";
  cinematicButton.disabled = false;
  movieFrame.classList.remove("is-building", "is-cinematic", "is-awake", "is-playing", "is-revealing");
  updatePosterVisuals();
  setActiveShot(0);
}

function buildWorld() {
  const story = buildStoryText();
  finalStory.textContent = story;
  worldLead.textContent = titleCase(plainValue("hero"));
  worldSetting.textContent = titleCase(plainValue("place"));
  worldMood.textContent = titleCase(`${plainValue("color")} ${plainValue("feeling")}`);
  worldRevealTitle.textContent = activeTemplate().title;
  renderWorldDetails();
  renderWorldTokens();
  renderWordStorm();
  renderCinematicPlan();
  showScreen("reelScreen");
  trackStudioEvent("world_built", {
    story_id: activeTemplate().id,
    story_number: activeTemplate().storyNumber,
    completed_fields: activeTemplate().fields.filter((field) => state.values[field.id]).length
  });
}

function copyText(text, button, successLabel) {
  const original = button.textContent;
  if (!navigator.clipboard) {
    button.textContent = "Copy Unavailable";
    setTimeout(() => {
      button.textContent = original;
    }, 1600);
    return;
  }

  navigator.clipboard.writeText(text).then(
    () => {
      button.textContent = successLabel;
      setTimeout(() => {
        button.textContent = original;
      }, 1400);
    },
    () => {
      button.textContent = "Copy Unavailable";
      setTimeout(() => {
        button.textContent = original;
      }, 1600);
    }
  );
}

function copyStory() {
  copyText(buildStoryText(), copyButton, "Copied");
}

function copyMoviePrompt() {
  copyText(moviePrompt.value, copyPromptButton, "Prompt Copied");
}

function makeCinematic() {
  clearTimeout(state.cinematicTimer);
  clearScenePlayback();
  cinematicButton.disabled = true;
  movieFrame.classList.add("is-building", "is-revealing");
  movieFrame.classList.remove("is-cinematic", "is-awake", "is-playing");
  setActiveShot(0);
  motionProgress.style.width = "0%";
  cinematicButton.textContent = "Awakening";

  let revealStep = 0;

  function advanceReveal() {
    cinemaStatus.textContent = REVEAL_STEPS[revealStep] || "Rolling scene one";
    motionProgress.style.width = `${((revealStep + 1) / REVEAL_STEPS.length) * 100}%`;
    revealStep += 1;

    if (revealStep < REVEAL_STEPS.length) {
      state.cinematicTimer = setTimeout(advanceReveal, 650);
      return;
    }

    state.cinematicTimer = setTimeout(() => {
      movieFrame.classList.remove("is-building", "is-revealing");
      startScenePlayback(0);
      requestGeneratedWorld();
    }, 520);
  }

  advanceReveal();
}

function writerTemplate() {
  return clone(templateById(state.writerTemplateId));
}

function renderWriterPortal() {
  if (!state.writerTemplateId) {
    state.writerTemplateId = state.templates[0].id;
  }
  renderWriterList();
  loadWriterForm(writerTemplate());
}

function renderWriterList() {
  writerDraftCount.textContent = `${Object.keys(state.templateDrafts).length} drafts`;
  writerStoryList.innerHTML = state.templates
    .map((template) => {
      const active = template.id === state.writerTemplateId ? " active" : "";
      const edited = state.templateDrafts[template.id] ? "<span>Draft saved</span>" : "<span>Original</span>";
      return `
        <button class="writer-story-item${active}" type="button" data-template-id="${escapeHtml(template.id)}">
          <strong>${escapeHtml(template.title)}</strong>
          <small>${escapeHtml(template.tone)} / ${escapeHtml(template.lengthLabel)}</small>
          ${edited}
        </button>
      `;
    })
    .join("");
}

function loadWriterForm(template) {
  writerTitleInput.value = template.title;
  writerToneInput.value = template.tone;
  writerLengthInput.value = template.lengthLabel;
  writerDescriptionInput.value = template.description;
  writerStoryTemplateInput.value = template.storyTemplate;
  writerMoviePromptInput.value = template.moviePromptTemplate;
  writerMessage.textContent = "";

  writerFields.innerHTML = template.fields
    .map((field, index) => {
      const limit = wordLimitForField(field);
      return `
        <fieldset class="writer-field-card" data-field-id="${escapeHtml(field.id)}">
          <legend>${index + 1}. ${escapeHtml(field.id)}</legend>
          <label class="writer-field">
            <span>Label</span>
            <input class="writer-field-label-input" type="text" value="${escapeHtml(field.label)}" />
          </label>
          <label class="writer-field">
            <span>Example placeholder</span>
            <input class="writer-field-placeholder-input" type="text" value="${escapeHtml(field.placeholder)}" />
          </label>
          <div class="writer-word-limits">
            <label class="writer-field">
              <span>Min words</span>
              <input class="writer-field-min-input" type="number" min="1" max="20" value="${limit.min}" />
            </label>
            <label class="writer-field">
              <span>Max words</span>
              <input class="writer-field-max-input" type="number" min="1" max="20" value="${limit.max}" />
            </label>
          </div>
          <label class="writer-field">
            <span>Spark ideas</span>
            <input class="writer-field-spark-input" type="text" value="${escapeHtml(field.spark.join(", "))}" />
          </label>
        </fieldset>
      `;
    })
    .join("");

  renderWriterReadyBoard();
}

function collectWriterTemplate() {
  const original = templateById(state.writerTemplateId);
  const template = clone(original);
  template.title = normalize(writerTitleInput.value) || original.title;
  template.tone = normalize(writerToneInput.value) || original.tone;
  template.lengthLabel = normalize(writerLengthInput.value) || original.lengthLabel;
  template.description = normalize(writerDescriptionInput.value) || original.description;
  template.storyTemplate = normalize(writerStoryTemplateInput.value) || original.storyTemplate;
  template.moviePromptTemplate = normalize(writerMoviePromptInput.value) || original.moviePromptTemplate;

  template.fields = Array.from(writerFields.querySelectorAll(".writer-field-card")).map((card, index) => {
    const fieldId = card.dataset.fieldId;
    const originalField = original.fields.find((field) => field.id === fieldId) || original.fields[index];
    const defaultLimit = wordLimitForField(originalField);
    const minWords = parseLimitInput(card.querySelector(".writer-field-min-input").value, defaultLimit.min);
    const maxWords = Math.max(minWords, parseLimitInput(card.querySelector(".writer-field-max-input").value, defaultLimit.max));
    const sparkValue = card.querySelector(".writer-field-spark-input").value;
    const spark = sparkValue
      .split(",")
      .map((item) => normalize(item))
      .filter(Boolean);

    return {
      id: originalField.id,
      label: normalize(card.querySelector(".writer-field-label-input").value) || originalField.label,
      placeholder: normalize(card.querySelector(".writer-field-placeholder-input").value) || originalField.placeholder,
      minWords,
      maxWords,
      spark: spark.length ? spark : originalField.spark
    };
  });

  return template;
}

function extractPlaceholders(text) {
  const found = new Set();
  String(text || "").replace(/\{([a-zA-Z0-9_-]+)(?:\|[a-zA-Z]+)?\}/g, (_match, id) => {
    found.add(id);
    return "";
  });
  return found;
}

function countSentences(text) {
  return String(text || "")
    .split(/[.!?]+/)
    .map((part) => normalize(part))
    .filter(Boolean).length;
}

function missingFieldLabels(template, placeholderSet) {
  return template.fields.filter((field) => !placeholderSet.has(field.id)).map((field) => field.label);
}

function templateQualityChecks(template) {
  const storyPlaceholders = extractPlaceholders(template.storyTemplate);
  const promptPlaceholders = extractPlaceholders(template.moviePromptTemplate);
  const storyMissing = missingFieldLabels(template, storyPlaceholders);
  const promptMissing = missingFieldLabels(template, promptPlaceholders);
  const storyWords = countWords(template.storyTemplate);
  const storySentences = countSentences(template.storyTemplate);
  const promptLower = template.moviePromptTemplate.toLowerCase();
  const sparkProblems = template.fields.flatMap((field) => {
    return field.spark
      .map((idea) => ({ idea, problem: wordLimitProblem(field, idea) }))
      .filter((item) => item.problem)
      .map((item) => `${field.label}: "${item.idea}"`);
  });
  const limitProblems = template.fields.filter((field) => {
    const limit = wordLimitForField(field);
    return limit.min > limit.max || limit.max > 20;
  });
  const shotsReady =
    Array.isArray(template.shotTemplates) &&
    template.shotTemplates.length === 5 &&
    template.shotTemplates.every((shot) => normalize(shot.title) && normalize(shot.detail));

  return [
    {
      label: "Story uses every blank",
      ready: storyMissing.length === 0,
      detail: storyMissing.length ? `Missing: ${storyMissing.join(", ")}` : "Every player answer appears in the story."
    },
    {
      label: "Movie prompt uses every blank",
      ready: promptMissing.length === 0,
      detail: promptMissing.length ? `Missing: ${promptMissing.join(", ")}` : "Every player answer can shape the AI scene."
    },
    {
      label: "Word limits make sense",
      ready: limitProblems.length === 0 && template.fields.length > 0,
      detail: limitProblems.length ? "Check min and max word ranges." : "Each blank has a usable min/max range."
    },
    {
      label: "Spark ideas fit the limits",
      ready: sparkProblems.length === 0,
      detail: sparkProblems.length ? `Adjust: ${sparkProblems.slice(0, 2).join("; ")}` : "Starter ideas fit the player guidance."
    },
    {
      label: "Story template is playable",
      ready: storyWords >= 18 && storyWords <= 85 && storySentences >= 3 && storySentences <= 5,
      detail: `${storyWords} words, ${storySentences} sentences. Aim for 3-5 sentences and under 85 words.`
    },
    {
      label: "Movie prompt has safety guardrails",
      ready:
        promptLower.includes("family-friendly") &&
        (promptLower.includes("no on-screen text") || promptLower.includes("no text")) &&
        (promptLower.includes("no watermark") || promptLower.includes("no watermarks")),
      detail: "Include family-friendly, no text, and no watermark guidance."
    },
    {
      label: "Five-shot reel is complete",
      ready: shotsReady,
      detail: shotsReady ? "The story can become a clean five-shot movie plan." : "The reel needs five complete shots."
    }
  ];
}

function renderWriterReadyBoard() {
  const template = collectWriterTemplate();
  const checks = templateQualityChecks(template);
  const readyCount = checks.filter((check) => check.ready).length;
  writerReadyCount.textContent = `${readyCount} of ${checks.length} ready`;
  writerReadyCount.classList.toggle("ready", readyCount === checks.length);

  writerReadyList.innerHTML = checks
    .map((check) => {
      return `
        <article class="writer-ready-item${check.ready ? " ready" : ""}">
          <span class="ready-mark">${check.ready ? "OK" : "!"}</span>
          <div>
            <strong>${escapeHtml(check.label)}</strong>
            <p>${escapeHtml(check.detail)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function upsertRuntimeTemplate(template) {
  state.templates = state.templates.map((item) => (item.id === template.id ? clone(template) : item));
}

function saveWriterDraft() {
  const template = collectWriterTemplate();
  state.templateDrafts[template.id] = clone(template);
  saveTemplateDrafts();
  rebuildTemplates();
  state.writerTemplateId = template.id;
  selectTemplate(state.activeTemplateId, { resetValues: false });
  renderWriterPortal();
  writerMessage.textContent = "Draft saved. You can playtest it or copy the JSON.";
}

function resetWriterDraft() {
  delete state.templateDrafts[state.writerTemplateId];
  saveTemplateDrafts();
  rebuildTemplates();
  const templateId = state.writerTemplateId;
  state.writerTemplateId = templateId;
  if (state.activeTemplateId === templateId) {
    selectTemplate(templateId, { resetValues: true });
  }
  renderWriterPortal();
  writerMessage.textContent = "Draft reset to the original story.";
}

function copyWriterDraft() {
  const template = collectWriterTemplate();
  copyText(JSON.stringify(template, null, 2), writerCopyButton, "Draft Copied");
  writerMessage.textContent = "Draft JSON copied.";
}

function playtestWriterDraft() {
  const template = collectWriterTemplate();
  upsertRuntimeTemplate(template);
  selectTemplate(template.id, { resetValues: true });
  writerMessage.textContent = "Playtesting draft.";
  showScreen("storyScreen");
}

document.addEventListener("click", (event) => {
  const screenTarget = event.target.closest("[data-screen]");
  if (screenTarget) {
    showScreen(screenTarget.dataset.screen);
  }

  const storyTarget = event.target.closest(".writer-story-item");
  if (storyTarget) {
    state.writerTemplateId = storyTarget.dataset.templateId;
    renderWriterPortal();
  }
});

wordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";
  const problem = validateFields();
  if (problem) {
    formMessage.textContent = problem;
    return;
  }
  buildWorld();
});

storyDraft.addEventListener("input", (event) => {
  const input = event.target.closest(".story-inline-input");
  if (!input) {
    return;
  }

  const fieldId = input.dataset.fieldId;
  state.values[fieldId] = normalize(input.textContent);
  formMessage.textContent = "";
  syncDetailInput(fieldId, state.values[fieldId]);
  syncStoryInputs(fieldId, state.values[fieldId], input);
  updateProgress();
  savePlayerDraft();
});

storyDraft.addEventListener("keydown", (event) => {
  const input = event.target.closest(".story-inline-input");
  if (!input || event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  const inputs = Array.from(storyDraft.querySelectorAll(".story-inline-input"));
  const index = inputs.indexOf(input);
  const next = inputs[index + 1] || inputs[0];
  next?.focus();
  if (next) {
    selectInlineText(next);
  }
});

storyDraft.addEventListener("focusout", (event) => {
  const input = event.target.closest(".story-inline-input");
  if (!input) {
    return;
  }

  const fieldId = input.dataset.fieldId;
  const clean = normalize(input.textContent);
  state.values[fieldId] = clean;
  input.textContent = clean;
  syncDetailInput(fieldId, clean);
  syncStoryInputs(fieldId, clean, input);
  updateProgress();
  savePlayerDraft();
});

writerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveWriterDraft();
});

writerForm.addEventListener("input", () => {
  writerMessage.textContent = "";
  renderWriterReadyBoard();
});

randomizeButton.addEventListener("click", sparkIdeas);
copyButton.addEventListener("click", copyStory);
copyPromptButton.addEventListener("click", copyMoviePrompt);
cinematicButton.addEventListener("click", makeCinematic);
previousSceneButton.addEventListener("click", showPreviousScene);
replaySceneButton.addEventListener("click", () => startScenePlayback(0));
nextSceneButton.addEventListener("click", showNextScene);
writerResetButton.addEventListener("click", resetWriterDraft);
writerCopyButton.addEventListener("click", copyWriterDraft);
writerPlaytestButton.addEventListener("click", playtestWriterDraft);

loadTemplateDrafts();
rebuildTemplates();
selectTemplate(dailyTemplateId());

if (new URLSearchParams(window.location.search).get("writer") === "1") {
  showScreen("writerScreen");
}
