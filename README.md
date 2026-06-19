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
- Dynamic story poster reveal driven by the player's words
- Daily story selection from a template library
- Story Writer Portal at `/?writer=1`

## Story Writer Portal

The portal lets a story writer edit story title, tone, description, the story template, blank labels/placeholders/spark ideas, and the AI movie prompt template. Drafts are saved locally in the browser for now.

Writers can also set minimum and maximum word counts for each blank. Players get gentle guidance when an entry is too short or too long.

The portal includes a final ready board for story quality checks: blank usage, movie prompt usage, word limits, spark ideas, story length, movie prompt guardrails, and five-shot reel completeness.

## Future backend

The real AI movie version should use a server-side endpoint for moderation and image/video generation. API keys should never be placed in the browser.
