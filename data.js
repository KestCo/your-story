window.YOUR_STORY_TEMPLATES = [
  {
    id: "door-in-the-weather",
    storyNumber: 1,
    title: "The Door in the Weather",
    tone: "Wonder",
    lengthLabel: "5 scenes",
    description: "A short story becomes a tiny cinematic world shaped by the words you choose.",
    fields: [
      {
        id: "hero",
        label: "Main character",
        placeholder: "a retired mapmaker",
        spark: ["a lighthouse keeper", "a shy inventor", "a midnight baker", "a young archivist"]
      },
      {
        id: "object",
        label: "Mysterious object",
        placeholder: "a brass key",
        spark: ["a silver compass", "a cracked lantern", "a velvet envelope", "a painted door"]
      },
      {
        id: "place",
        label: "Unexpected place",
        placeholder: "an abandoned train station",
        spark: ["a glass library", "a rooftop garden", "a frozen pier", "a theater under a hill"]
      },
      {
        id: "weather",
        label: "Weather",
        placeholder: "silver rain",
        spark: ["warm snow", "green lightning", "blue fog", "golden wind"]
      },
      {
        id: "feeling",
        label: "Feeling",
        placeholder: "brave",
        spark: ["hopeful", "restless", "delighted", "uncertain"]
      },
      {
        id: "color",
        label: "Color",
        placeholder: "copper",
        spark: ["sapphire", "amber", "violet", "pearl"]
      },
      {
        id: "sound",
        label: "Sound",
        placeholder: "a distant bell",
        spark: ["a soft whistle", "a humming wire", "a low drum", "a laughing echo"]
      },
      {
        id: "secret",
        label: "Hidden secret",
        placeholder: "the moon keeps receipts",
        spark: ["the walls remember names", "the river runs backward", "the clock is dreaming", "the stars answer questions"]
      }
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
  },
  {
    id: "midnight-library",
    storyNumber: 2,
    title: "The Midnight Library",
    tone: "Mystery",
    lengthLabel: "5 scenes",
    description: "A quiet mystery opens inside a place that seems to know the player's words.",
    fields: [
      {
        id: "hero",
        label: "Main character",
        placeholder: "a careful librarian",
        spark: ["a candle maker", "a curious student", "a quiet historian", "a night watchman"]
      },
      {
        id: "object",
        label: "Strange item",
        placeholder: "a locked book",
        spark: ["a glass bookmark", "a humming card", "a silver index key", "a book with no title"]
      },
      {
        id: "place",
        label: "Hidden room",
        placeholder: "a library balcony",
        spark: ["a map room", "a forgotten archive", "a spiral reading nook", "a basement of blue shelves"]
      },
      {
        id: "weather",
        label: "Outside weather",
        placeholder: "soft thunder",
        spark: ["black rain", "window frost", "slow lightning", "a foggy moon"]
      },
      {
        id: "feeling",
        label: "Feeling",
        placeholder: "curious",
        spark: ["watchful", "thrilled", "uneasy", "calm"]
      },
      {
        id: "color",
        label: "Light color",
        placeholder: "blue",
        spark: ["emerald", "silver", "rose", "amber"]
      },
      {
        id: "sound",
        label: "Sound",
        placeholder: "turning pages",
        spark: ["a ticking ladder", "a whispered name", "a drawer opening", "a quiet chime"]
      },
      {
        id: "secret",
        label: "Final secret",
        placeholder: "every book is still being written",
        spark: ["the library is awake", "the shelves rearrange memories", "one page predicts tomorrow", "the quietest book is a doorway"]
      }
    ],
    storyTemplate: "{hero} opened {object} inside {place} as {weather} pressed against the windows. The room felt {feeling}, and {color} light slid across the shelves. Then {sound} rose from the floor. The secret was simple: {secret}.",
    shotTemplates: [
      { title: "Opening Image", detail: "{place|title} glows under {color} light." },
      { title: "The Object", detail: "{hero|sentence} opens {object}." },
      { title: "Weather at the Glass", detail: "{weather|sentence} presses against the windows." },
      { title: "The Sound", detail: "{sound|sentence} rises through the room." },
      { title: "The Secret", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "{color|title} Light",
      title: "{object|title} in {place|title}",
      line: "{sound|sentence} reveals the truth: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic mystery scene with no on-screen text, logos, subtitles, or watermarks. The main character is {hero} in {place}. They open {object} while {weather} presses outside. The room feels {feeling}, with {color} light and {sound} rising through the shelves. End on the reveal that {secret}. Style: refined storybook mystery, cinematic shadows, gentle suspense, safe for all ages."
  },
  {
    id: "little-expedition",
    storyNumber: 3,
    title: "The Little Expedition",
    tone: "Adventure",
    lengthLabel: "5 scenes",
    description: "A small journey turns ordinary words into a bright little adventure.",
    fields: [
      {
        id: "hero",
        label: "Explorer",
        placeholder: "a tiny explorer",
        spark: ["a backyard captain", "a brave cousin", "a careful scout", "a kid with a notebook"]
      },
      {
        id: "object",
        label: "Travel item",
        placeholder: "a red compass",
        spark: ["a folded map", "a tin whistle", "a wooden telescope", "a lucky stone"]
      },
      {
        id: "place",
        label: "Destination",
        placeholder: "a hill behind the school",
        spark: ["a creek bridge", "a wildflower field", "a treehouse village", "a trail past the fence"]
      },
      {
        id: "weather",
        label: "Weather",
        placeholder: "warm wind",
        spark: ["sun showers", "bright mist", "a racing cloud", "dusty sunlight"]
      },
      {
        id: "feeling",
        label: "Feeling",
        placeholder: "bold",
        spark: ["ready", "amazed", "determined", "cheerful"]
      },
      {
        id: "color",
        label: "Trail color",
        placeholder: "gold",
        spark: ["green", "orange", "blue", "white"]
      },
      {
        id: "sound",
        label: "Trail sound",
        placeholder: "a faraway whistle",
        spark: ["crunching leaves", "a creek laughing", "a flag snapping", "a bird call"]
      },
      {
        id: "secret",
        label: "Discovery",
        placeholder: "home was bigger than it looked",
        spark: ["the map had a missing corner", "the hill was hollow", "the bridge knew their names", "the smallest path went farthest"]
      }
    ],
    storyTemplate: "{hero} carried {object} toward {place} while {weather} followed behind. Every step felt {feeling}, and the trail glowed {color}. Ahead, {sound} marked the way. At the end, everyone learned that {secret}.",
    shotTemplates: [
      { title: "The Start", detail: "{hero|title} sets out with {object}." },
      { title: "The Trail", detail: "{place|title} appears through {weather}." },
      { title: "The Glow", detail: "The path turns {color} and feels {feeling}." },
      { title: "The Signal", detail: "{sound|sentence} marks the way." },
      { title: "The Discovery", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "{feeling|title} Adventure",
      title: "{place|title}",
      line: "{hero|sentence} follows {sound} toward a discovery: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly adventure scene with no on-screen text, logos, subtitles, or watermarks. The explorer is {hero}, carrying {object} toward {place}. The weather is {weather}. The mood is {feeling}; the trail glows {color}; {sound} leads the way. End with the discovery that {secret}. Style: warm storybook adventure, cinematic motion, playful wonder, safe for all ages."
  },
  {
    id: "odd-celebration",
    storyNumber: 4,
    title: "The Odd Celebration",
    tone: "Playful",
    lengthLabel: "5 scenes",
    description: "A funny celebration goes sideways in exactly the way the player invents.",
    fields: [
      {
        id: "hero",
        label: "Guest of honor",
        placeholder: "a nervous mayor",
        spark: ["a cheerful baker", "a retired magician", "a serious uncle", "a kid in a bow tie"]
      },
      {
        id: "object",
        label: "Party object",
        placeholder: "a wobbling cake",
        spark: ["a golden spoon", "a squeaky trophy", "a mystery gift", "a hat full of confetti"]
      },
      {
        id: "place",
        label: "Party place",
        placeholder: "the town hall",
        spark: ["a school gym", "a rooftop patio", "a tiny museum", "a garden tent"]
      },
      {
        id: "weather",
        label: "Surprise weather",
        placeholder: "indoor snow",
        spark: ["confetti rain", "a sudden breeze", "pink fog", "tiny lightning"]
      },
      {
        id: "feeling",
        label: "Crowd feeling",
        placeholder: "delighted",
        spark: ["confused", "thrilled", "giddy", "startled"]
      },
      {
        id: "color",
        label: "Decoration color",
        placeholder: "purple",
        spark: ["gold", "lime", "silver", "red"]
      },
      {
        id: "sound",
        label: "Interruption sound",
        placeholder: "a kazoo fanfare",
        spark: ["a drumroll", "a tiny trumpet", "a squeaky door", "a chorus of gasps"]
      },
      {
        id: "secret",
        label: "Announcement",
        placeholder: "the cake was giving a speech",
        spark: ["the trophy was alive", "the mayor had planned none of this", "the gift contained a smaller party", "everyone had won first place"]
      }
    ],
    storyTemplate: "{hero} arrived at {place} holding {object} just as {weather} began. The crowd felt {feeling}, the decorations turned {color}, and {sound} interrupted the toast. Nobody expected the announcement: {secret}.",
    shotTemplates: [
      { title: "The Arrival", detail: "{hero|title} arrives at {place}." },
      { title: "The Object", detail: "{object|sentence} takes center stage." },
      { title: "The Surprise", detail: "{weather|sentence} begins indoors." },
      { title: "The Interruption", detail: "{sound|sentence} interrupts everything." },
      { title: "The Announcement", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "{color|title} Celebration",
      title: "{object|title} at {place|title}",
      line: "{sound|sentence} interrupts the toast, and everyone learns that {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly playful celebration scene with no on-screen text, logos, subtitles, or watermarks. The guest of honor is {hero} at {place}, holding {object}. Suddenly {weather} begins. The crowd feels {feeling}; decorations turn {color}; {sound} interrupts the party. End with the announcement that {secret}. Style: polished whimsical comedy, cinematic timing, expressive but not cartoonish, safe for all ages."
  },
  {
    id: "dream-machine",
    storyNumber: 5,
    title: "The Dream Machine",
    tone: "Dreamlike",
    lengthLabel: "5 scenes",
    description: "A surreal little dream turns the player's choices into a strange and beautiful world.",
    fields: [
      {
        id: "hero",
        label: "Dreamer",
        placeholder: "a sleepless painter",
        spark: ["a moonlit gardener", "a quiet pianist", "a wandering child", "a clock repairer"]
      },
      {
        id: "object",
        label: "Dream object",
        placeholder: "a glass machine",
        spark: ["a silver pillow", "a floating clock", "a paper boat", "a door-shaped mirror"]
      },
      {
        id: "place",
        label: "Dream place",
        placeholder: "a staircase in the clouds",
        spark: ["a room under the ocean", "a train made of moonlight", "a house with no walls", "a field of sleeping lamps"]
      },
      {
        id: "weather",
        label: "Dream weather",
        placeholder: "falling stars",
        spark: ["upward rain", "slow thunder", "cotton fog", "a velvet eclipse"]
      },
      {
        id: "feeling",
        label: "Dream feeling",
        placeholder: "peaceful",
        spark: ["weightless", "enchanted", "brave", "homesick"]
      },
      {
        id: "color",
        label: "Dream color",
        placeholder: "indigo",
        spark: ["pearl", "crimson", "honey", "midnight blue"]
      },
      {
        id: "sound",
        label: "Dream sound",
        placeholder: "a lullaby backwards",
        spark: ["distant applause", "a sleeping bell", "a whispering ocean", "soft footsteps"]
      },
      {
        id: "secret",
        label: "Morning truth",
        placeholder: "the dream had been waiting all day",
        spark: ["the moon left a note", "the mirror remembered everything", "the house followed them home", "the clock had learned to sing"]
      }
    ],
    storyTemplate: "{hero} found {object} beside {place} while {weather} folded the horizon. The dream felt {feeling}, colored everything {color}, and answered with {sound}. When morning came, one truth remained: {secret}.",
    shotTemplates: [
      { title: "Dream Opening", detail: "{place|title} appears while {weather} folds the sky." },
      { title: "The Machine", detail: "{hero|sentence} finds {object}." },
      { title: "Color Shift", detail: "Everything turns {color} and feels {feeling}." },
      { title: "The Answer", detail: "{sound|sentence} answers from the dream." },
      { title: "Morning Truth", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "{color|title} Dream",
      title: "{object|title} Beside {place|title}",
      line: "{sound|sentence} answers the dream with one truth: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly dreamlike cinematic scene with no on-screen text, logos, subtitles, or watermarks. The dreamer is {hero}, finding {object} beside {place}. The weather is {weather}; the feeling is {feeling}; the world glows {color}; the sound is {sound}. End with the truth that {secret}. Style: surreal storybook realism, beautiful cinematic lighting, smooth dream motion, safe for all ages."
  }
];
