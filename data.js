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
  },
  {
    id: "road-trip-week-2",
    storyNumber: 6,
    title: "The Road Trip Detour",
    tone: "Travel / Road Trip",
    lengthLabel: "5 scenes",
    description: "A familiar drive turns into a strange little journey shaped by the player's travel words.",
    fields: [
      {
        id: "hero",
        label: "Traveler",
        placeholder: "a kid with a camera",
        spark: ["a retired bus driver", "two cousins with a map", "a nervous reporter", "a cheerful mechanic"]
      },
      {
        id: "object",
        label: "Road trip item",
        placeholder: "a dented thermos",
        spark: ["a glowing road atlas", "a lucky keychain", "a cooler full of sandwiches", "a postcard with no stamp"]
      },
      {
        id: "place",
        label: "Roadside stop",
        placeholder: "a blinking motel sign",
        spark: ["a desert diner", "a gas station shaped like a rocket", "a covered bridge", "a cornfield rest stop"]
      },
      {
        id: "weather",
        label: "Road weather",
        placeholder: "heat lightning",
        spark: ["dusty wind", "summer rain", "golden sunset", "rolling fog"]
      },
      {
        id: "feeling",
        label: "Travel feeling",
        placeholder: "curious",
        spark: ["restless", "hopeful", "lost but laughing", "wide awake"]
      },
      {
        id: "color",
        label: "Road color",
        placeholder: "sunset orange",
        spark: ["dashboard green", "silver", "highway blue", "neon red"]
      },
      {
        id: "sound",
        label: "Road sound",
        placeholder: "tires humming",
        spark: ["a radio crackle", "cicadas outside the window", "a horn in the distance", "gravel under the wheels"]
      },
      {
        id: "secret",
        label: "Detour reveal",
        placeholder: "the wrong turn was on purpose",
        spark: ["the map had been changing itself", "the road remembered every traveler", "the motel sign was sending a message", "the next exit led home"]
      }
    ],
    storyTemplate: "{hero} carried {object} toward {place} while {weather} crossed the windshield. The drive felt {feeling}, and the road ahead glowed {color}. From outside came {sound}. At the last mile, everyone realized that {secret}.",
    shotTemplates: [
      { title: "The Open Road", detail: "{hero|title} travels under {weather}." },
      { title: "The Stop", detail: "{place|title} appears beside the road." },
      { title: "The Object", detail: "{object|sentence} starts to matter." },
      { title: "The Signal", detail: "{sound|sentence} points toward the detour." },
      { title: "The Reveal", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "Road Trip",
      title: "{place|title} in {color|title} Light",
      line: "{hero|sentence} follows {sound} toward the truth: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic road trip scene with no on-screen text, logos, subtitles, or watermarks. The traveler is {hero}, carrying {object}, arriving near {place}. The weather is {weather}. The mood is {feeling}; the road glows {color}; {sound} is heard nearby. End with the reveal that {secret}. Style: polished storybook realism, warm travel atmosphere, cinematic motion, safe for all ages."
  },
  {
    id: "beach-week-2",
    storyNumber: 7,
    title: "The Message in the Tide",
    tone: "Travel / Beach",
    lengthLabel: "5 scenes",
    description: "A bright beach day turns into a salt-air mystery with a secret carried by the water.",
    fields: [
      {
        id: "hero",
        label: "Beach traveler",
        placeholder: "a shell collector",
        spark: ["a lifeguard on break", "a child with a bucket", "a vacationing scientist", "a painter with wet shoes"]
      },
      {
        id: "object",
        label: "Beach find",
        placeholder: "a bottle with a blue ribbon",
        spark: ["a pearl compass", "a sand-covered camera", "a cracked surfboard", "a tiny brass telescope"]
      },
      {
        id: "place",
        label: "Shoreline place",
        placeholder: "a tide pool cave",
        spark: ["a striped beach hut", "a pier at low tide", "a dune path", "a quiet cove"]
      },
      {
        id: "weather",
        label: "Beach weather",
        placeholder: "sea mist",
        spark: ["warm drizzle", "a bright breeze", "silver clouds", "sun through salt spray"]
      },
      {
        id: "feeling",
        label: "Beach feeling",
        placeholder: "delighted",
        spark: ["peaceful", "surprised", "sun-dazed", "brave"]
      },
      {
        id: "color",
        label: "Water color",
        placeholder: "turquoise",
        spark: ["coral pink", "sea-glass green", "pearl white", "deep blue"]
      },
      {
        id: "sound",
        label: "Ocean sound",
        placeholder: "waves whispering",
        spark: ["gulls calling", "a shell humming", "a bell buoy", "sand sliding"]
      },
      {
        id: "secret",
        label: "Tide message",
        placeholder: "the ocean had written back",
        spark: ["the tide was drawing a map", "the bottle knew their name", "the cove opened only at sunset", "the shells were tiny bells"]
      }
    ],
    storyTemplate: "{hero} discovered {object} near {place} as {weather} drifted over the beach. The moment felt {feeling}, and the water flashed {color}. Then {sound} rose from the shore. By sunset, the message was clear: {secret}.",
    shotTemplates: [
      { title: "Low Tide", detail: "{place|title} appears beneath {weather}." },
      { title: "Beach Find", detail: "{hero|sentence} discovers {object}." },
      { title: "Color on Water", detail: "The ocean flashes {color} and feels {feeling}." },
      { title: "The Shore Speaks", detail: "{sound|sentence} rises from the beach." },
      { title: "Tide Message", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "Beach Travel",
      title: "{object|title} Near {place|title}",
      line: "{sound|sentence} carries the shoreline message: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic beach mystery scene with no on-screen text, logos, subtitles, or watermarks. The beach traveler is {hero}, finding {object} near {place}. The weather is {weather}; the feeling is {feeling}; the water glows {color}; {sound} comes from the shore. End with the reveal that {secret}. Style: elegant coastal storybook realism, bright natural light, gentle wonder, safe for all ages."
  },
  {
    id: "mountain-pass-week-2",
    storyNumber: 8,
    title: "The Mountain Pass",
    tone: "Travel / Mountains",
    lengthLabel: "5 scenes",
    description: "A climb into the mountains becomes a high-altitude adventure with a secret above the clouds.",
    fields: [
      {
        id: "hero",
        label: "Mountain traveler",
        placeholder: "a careful climber",
        spark: ["a backpacking teacher", "a young trail guide", "a lost photographer", "a grandparent with binoculars"]
      },
      {
        id: "object",
        label: "Mountain item",
        placeholder: "a carved walking stick",
        spark: ["a frost-covered compass", "a red climbing rope", "a notebook full of peaks", "a lantern with a blue flame"]
      },
      {
        id: "place",
        label: "High place",
        placeholder: "a stone lookout",
        spark: ["a snow bridge", "a cliffside cabin", "a meadow above the clouds", "a narrow mountain pass"]
      },
      {
        id: "weather",
        label: "Mountain weather",
        placeholder: "thin snow",
        spark: ["a sudden cloudbank", "crisp wind", "distant thunder", "sunlight through mist"]
      },
      {
        id: "feeling",
        label: "Climb feeling",
        placeholder: "determined",
        spark: ["breathless", "awed", "steady", "small but brave"]
      },
      {
        id: "color",
        label: "Summit color",
        placeholder: "ice blue",
        spark: ["pine green", "rose gold", "storm gray", "snow white"]
      },
      {
        id: "sound",
        label: "Mountain sound",
        placeholder: "an eagle cry",
        spark: ["boots on stone", "wind in the pines", "a far avalanche", "a bell from nowhere"]
      },
      {
        id: "secret",
        label: "Summit secret",
        placeholder: "the mountain was listening",
        spark: ["the pass moved each night", "the clouds were hiding a city", "the old trail chose its travelers", "the summit kept one promise"]
      }
    ],
    storyTemplate: "{hero} climbed with {object} toward {place} while {weather} moved over the ridge. The ascent felt {feeling}, and the stones shone {color}. Above the trail came {sound}. At the summit, the secret waited: {secret}.",
    shotTemplates: [
      { title: "The Climb", detail: "{hero|title} climbs with {object}." },
      { title: "The Pass", detail: "{place|title} appears through {weather}." },
      { title: "High Color", detail: "The ridge turns {color} and feels {feeling}." },
      { title: "Mountain Signal", detail: "{sound|sentence} echoes above the trail." },
      { title: "Summit Secret", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "Mountain Travel",
      title: "{place|title} Above the Clouds",
      line: "{hero|sentence} hears {sound} before discovering that {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic mountain adventure scene with no on-screen text, logos, subtitles, or watermarks. The traveler is {hero}, carrying {object}, climbing toward {place}. The weather is {weather}; the climb feels {feeling}; the mountain glows {color}; {sound} echoes nearby. End with the reveal that {secret}. Style: grand storybook realism, sweeping mountain light, cinematic scale, safe for all ages."
  },
  {
    id: "national-park-week-2",
    storyNumber: 9,
    title: "The Park Ranger's Map",
    tone: "Travel / National Park",
    lengthLabel: "5 scenes",
    description: "A national park visit opens into a nature mystery filled with trails, wildlife, and hidden signs.",
    fields: [
      {
        id: "hero",
        label: "Park visitor",
        placeholder: "a junior ranger",
        spark: ["a birdwatcher", "a family on their first hike", "a sketchbook artist", "a quiet park ranger"]
      },
      {
        id: "object",
        label: "Park object",
        placeholder: "a folded trail map",
        spark: ["a wooden ranger badge", "a mossy compass", "a camera with one photo", "a pinecone marked with gold"]
      },
      {
        id: "place",
        label: "Park landmark",
        placeholder: "a waterfall overlook",
        spark: ["a redwood grove", "a geyser boardwalk", "a canyon trail", "a meadow full of elk"]
      },
      {
        id: "weather",
        label: "Park weather",
        placeholder: "morning mist",
        spark: ["soft rain", "sun through branches", "mountain wind", "a curtain of fog"]
      },
      {
        id: "feeling",
        label: "Park feeling",
        placeholder: "amazed",
        spark: ["quiet", "watchful", "free", "grateful"]
      },
      {
        id: "color",
        label: "Nature color",
        placeholder: "fern green",
        spark: ["granite gray", "river blue", "sunlit gold", "wildflower purple"]
      },
      {
        id: "sound",
        label: "Park sound",
        placeholder: "water over rocks",
        spark: ["a woodpecker tapping", "branches creaking", "distant thunder", "a ranger whistle"]
      },
      {
        id: "secret",
        label: "Trail secret",
        placeholder: "the map showed tomorrow's trail",
        spark: ["the oldest tree was a doorway", "the waterfall answered questions", "the animals were guarding a path", "the stars had drawn the trail first"]
      }
    ],
    storyTemplate: "{hero} followed {object} through {place} while {weather} settled over the park. The forest felt {feeling}, and everything glowed {color}. Along the trail came {sound}. By the final marker, the truth was waiting: {secret}.",
    shotTemplates: [
      { title: "Trailhead", detail: "{hero|title} follows {object}." },
      { title: "Landmark", detail: "{place|title} appears beneath {weather}." },
      { title: "Nature Glow", detail: "The park turns {color} and feels {feeling}." },
      { title: "Trail Sound", detail: "{sound|sentence} moves through the trees." },
      { title: "Final Marker", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "National Park",
      title: "{place|title} in {color|title}",
      line: "{sound|sentence} guides {hero} to the trail secret: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic national park mystery scene with no on-screen text, logos, subtitles, or watermarks. The visitor is {hero}, following {object} through {place}. The weather is {weather}; the mood is {feeling}; nature glows {color}; {sound} moves through the landscape. End with the reveal that {secret}. Style: majestic nature storybook realism, cinematic outdoor light, safe for all ages."
  },
  {
    id: "international-arrival-week-2",
    storyNumber: 10,
    title: "The International Arrival",
    tone: "Travel / International",
    lengthLabel: "5 scenes",
    description: "A trip abroad turns a busy arrival into a warm, cinematic discovery.",
    fields: [
      {
        id: "hero",
        label: "World traveler",
        placeholder: "a first-time traveler",
        spark: ["a journalist with one suitcase", "a student exchange visitor", "a chef chasing a recipe", "a grandmother with a camera"]
      },
      {
        id: "object",
        label: "Travel object",
        placeholder: "a stamped passport",
        spark: ["a train ticket", "a phrasebook with notes", "a red umbrella", "a small wooden box"]
      },
      {
        id: "place",
        label: "Faraway place",
        placeholder: "a lantern-lit plaza",
        spark: ["a busy street market", "a train station under glass", "a bridge over old canals", "a cafe beside a cathedral"]
      },
      {
        id: "weather",
        label: "City weather",
        placeholder: "evening rain",
        spark: ["warm wind", "morning haze", "snow over rooftops", "sun after a storm"]
      },
      {
        id: "feeling",
        label: "Arrival feeling",
        placeholder: "wide-eyed",
        spark: ["homesick but happy", "bold", "lost in the best way", "curious"]
      },
      {
        id: "color",
        label: "City color",
        placeholder: "golden yellow",
        spark: ["tile blue", "market red", "olive green", "midnight silver"]
      },
      {
        id: "sound",
        label: "City sound",
        placeholder: "a train bell",
        spark: ["music from a balcony", "a vendor calling", "rain on awnings", "footsteps on stone"]
      },
      {
        id: "secret",
        label: "Travel surprise",
        placeholder: "the city had been expecting them",
        spark: ["the phrasebook contained a hidden invitation", "the ticket was older than the station", "the plaza lights answered in code", "the recipe belonged to everyone"]
      }
    ],
    storyTemplate: "{hero} arrived with {object} at {place} while {weather} moved through the city. The first hour felt {feeling}, and the streets shone {color}. Nearby, {sound} filled the air. Then the trip changed forever: {secret}.",
    shotTemplates: [
      { title: "Arrival", detail: "{hero|title} arrives with {object}." },
      { title: "The City", detail: "{place|title} glows under {weather}." },
      { title: "First Hour", detail: "The streets turn {color} and feel {feeling}." },
      { title: "Local Sound", detail: "{sound|sentence} fills the air." },
      { title: "Travel Surprise", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "International Travel",
      title: "{place|title} at Arrival",
      line: "{hero|sentence} hears {sound}, then learns that {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic international travel scene with no on-screen text, logos, subtitles, or watermarks. The traveler is {hero}, carrying {object}, arriving at {place}. The weather is {weather}; the arrival feels {feeling}; the city glows {color}; {sound} fills the air. End with the reveal that {secret}. Style: refined global travel storybook realism, warm human detail, cinematic city light, safe for all ages."
  },
  {
    id: "space-crossing-week-2",
    storyNumber: 11,
    title: "The Space Crossing",
    tone: "Travel / Space",
    lengthLabel: "5 scenes",
    description: "A voyage beyond Earth lets the player's words build a bright, cinematic space adventure.",
    fields: [
      {
        id: "hero",
        label: "Space traveler",
        placeholder: "a rookie astronaut",
        spark: ["a space botanist", "a kid stowaway", "a calm mission pilot", "a robot cartographer"]
      },
      {
        id: "object",
        label: "Space object",
        placeholder: "a glowing star map",
        spark: ["a cracked helmet", "a silver seed pod", "a comet compass", "a floating lunchbox"]
      },
      {
        id: "place",
        label: "Cosmic destination",
        placeholder: "a moon station",
        spark: ["an asteroid garden", "a ringed planet harbor", "a glass observatory", "a silent space elevator"]
      },
      {
        id: "weather",
        label: "Space condition",
        placeholder: "meteor rain",
        spark: ["solar wind", "starlight fog", "a comet shower", "blue static"]
      },
      {
        id: "feeling",
        label: "Voyage feeling",
        placeholder: "weightless",
        spark: ["astonished", "steady", "tiny in the universe", "fearless"]
      },
      {
        id: "color",
        label: "Cosmic color",
        placeholder: "nebula violet",
        spark: ["planet gold", "oxygen blue", "comet white", "deep-space green"]
      },
      {
        id: "sound",
        label: "Space sound",
        placeholder: "a radio whisper",
        spark: ["engines humming", "a distant beacon", "static like rain", "a soft alarm"]
      },
      {
        id: "secret",
        label: "Cosmic reveal",
        placeholder: "the stars were making a map",
        spark: ["the moon station had a heartbeat", "the comet was carrying a message", "the planet was not alone", "home looked back"]
      }
    ],
    storyTemplate: "{hero} carried {object} toward {place} while {weather} crossed the stars. The voyage felt {feeling}, and space shimmered {color}. Over the radio came {sound}. Beyond the last orbit, the truth appeared: {secret}.",
    shotTemplates: [
      { title: "Launch Into Quiet", detail: "{hero|title} travels with {object}." },
      { title: "Destination", detail: "{place|title} appears beyond {weather}." },
      { title: "Cosmic Color", detail: "Space turns {color} and feels {feeling}." },
      { title: "Signal", detail: "{sound|sentence} arrives over the radio." },
      { title: "Beyond Orbit", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "Space Travel",
      title: "{place|title} Beyond Orbit",
      line: "{sound|sentence} reaches {hero} with the truth: {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic space travel scene with no on-screen text, logos, subtitles, or watermarks. The space traveler is {hero}, carrying {object}, heading toward {place}. The space condition is {weather}; the voyage feels {feeling}; the cosmos glows {color}; {sound} comes through the radio. End with the reveal that {secret}. Style: elegant hopeful science-fiction storybook realism, cinematic starlight, safe for all ages."
  },
  {
    id: "time-ticket-week-2",
    storyNumber: 12,
    title: "The Time Travel Ticket",
    tone: "Travel / Time Travel",
    lengthLabel: "5 scenes",
    description: "The week's wild finale sends a traveler through time with one strange ticket and one impossible reveal.",
    fields: [
      {
        id: "hero",
        label: "Time traveler",
        placeholder: "a museum guard",
        spark: ["a kid with an old watch", "a newspaper photographer", "a retired inventor", "a teacher chasing a bell"]
      },
      {
        id: "object",
        label: "Time object",
        placeholder: "a ticket stamped tomorrow",
        spark: ["a pocket watch without hands", "a glowing train pass", "a calendar page from 1899", "a suitcase full of clocks"]
      },
      {
        id: "place",
        label: "Time doorway",
        placeholder: "an empty train platform",
        spark: ["a museum hallway", "a clock tower elevator", "a street that repeats", "a theater from the future"]
      },
      {
        id: "weather",
        label: "Time weather",
        placeholder: "rain falling upward",
        spark: ["frozen lightning", "clockwork snow", "wind from yesterday", "sunlight arriving late"]
      },
      {
        id: "feeling",
        label: "Time feeling",
        placeholder: "astonished",
        spark: ["uneasy", "thrilled", "homesick for tomorrow", "brave enough"]
      },
      {
        id: "color",
        label: "Time color",
        placeholder: "antique gold",
        spark: ["future blue", "sepia brown", "electric green", "midnight purple"]
      },
      {
        id: "sound",
        label: "Time sound",
        placeholder: "a clock striking thirteen",
        spark: ["a train whistle backward", "pages turning fast", "footsteps from tomorrow", "a bell that rings twice"]
      },
      {
        id: "secret",
        label: "Time reveal",
        placeholder: "the future had sent the invitation",
        spark: ["yesterday was waiting at the station", "the ticket only worked once", "the oldest clock remembered tomorrow", "someone had already changed the ending"]
      }
    ],
    storyTemplate: "{hero} found {object} at {place} just as {weather} bent the air. The jump felt {feeling}, and time flashed {color}. Then {sound} echoed from another year. When the doors opened, the answer was impossible: {secret}.",
    shotTemplates: [
      { title: "The Ticket", detail: "{hero|title} finds {object}." },
      { title: "The Doorway", detail: "{place|title} bends beneath {weather}." },
      { title: "The Jump", detail: "Time turns {color} and feels {feeling}." },
      { title: "Another Year", detail: "{sound|sentence} echoes through time." },
      { title: "Impossible Answer", detail: "{secret|sentence}." }
    ],
    scene: {
      kicker: "Time Travel",
      title: "{object|title} at {place|title}",
      line: "{sound|sentence} echoes before {hero} learns that {secret}."
    },
    moviePromptTemplate: "Create a 12-second family-friendly cinematic time travel scene with no on-screen text, logos, subtitles, or watermarks. The time traveler is {hero}, finding {object} at {place}. The time weather is {weather}; the jump feels {feeling}; time flashes {color}; {sound} echoes from another year. End with the reveal that {secret}. Style: elegant storybook science fantasy, cinematic clockwork light, mysterious but safe for all ages."
  }
];
