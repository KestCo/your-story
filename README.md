# Your Story

Your Story is an early prototype for an ad-lib story game where the player's words shape a tiny cinematic world.

## Current prototype

- Logo entry screen
- Welcome screen
- Fill-in story flow
- Inline story blanks that sync with the detail fields and adapt type size for longer phrases
- Compact story ingredients tray that reflects the inline blanks
- Story action buttons placed under the writing surface
- Local clean-word guard
- Live story preview
- Story reel result screen
- Five-shot cinematic storyboard
- AI-ready movie prompt copy flow
- Protected AI poster endpoint at `/api/create-world`
- Dynamic story poster reveal driven by the player's words
- Daily story selection from a template library
- Story Writer Portal at `/?writer=1`

## Story Writer Portal

The portal lets a story writer edit story title, tone, description, the story template, blank labels/placeholders/spark ideas, and the AI movie prompt template. Drafts are saved locally in the browser for now.

Writers can also set minimum and maximum word counts for each blank. Players get gentle guidance when an entry is too short or too long.

The portal includes a final ready board for story quality checks: blank usage, movie prompt usage, word limits, spark ideas, story length, movie prompt guardrails, and five-shot reel completeness.

## AI poster setup

`Bring My World Alive` starts with the local animated reel, then calls `/api/create-world` to render a generated poster when the site has an OpenAI key.

Set these environment variables in Vercel:

- `OPENAI_API_KEY` - required for generated posters
- `OPENAI_IMAGE_MODEL` - optional, defaults to `gpt-image-1.5`
- `OPENAI_IMAGE_SIZE` - optional, defaults to `1024x1024`
- `OPENAI_IMAGE_QUALITY` - optional, defaults to `low`

The endpoint runs moderation first, then image generation. API keys should never be placed in the browser.

## Studio Analytics

`studio-analytics.js` sends privacy-light story events to the shared KestCo Game Studio dashboard when `studio-analytics-config.js` has a Supabase URL and public anon key. It tracks starts, worlds built, Spark Ideas, writer opens, and poster outcomes without storing player-written story text.

## Future backend

The real AI movie version should build on the same server-side path, adding a video job request and polling flow after the generated poster feels right.
