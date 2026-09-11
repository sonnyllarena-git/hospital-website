# LESSONS.md — Bug Memory (Dynamic)

> **Claude: read this file BEFORE writing any code, every session.**
> Purpose: never make the same mistake twice.
>
> **Format — one line, no paragraphs:**
> `- [YYYY-MM-DD] <what happened / what I assumed> → <rule to follow from now on>`
>
> **Append an entry when:** a verify run failed · a fix took more than one attempt · a tool or
> library behaved differently than expected · an environment or version quirk cost time · you
> were about to repeat something already logged here · a setup step had a non-obvious prerequisite.
>
> **Do NOT log:** task completions · routine successes · anything already stated in CLAUDE.md ·
> anything longer than one line (if it needs a paragraph, it belongs in `/docs`).

This file starts empty except for the section below. That is correct — a new project has no
scars yet of its own. It will fill up fast during Phase 0, because scaffolding is where most
version and config surprises live. Log them there and you stop paying for them twice.

---

## Inherited Lessons (Carried Forward From Prior Projects)

*Pre-loaded, not discovered in this repo. These came from real incidents in other projects built
the same way. During Phase 0 (TASK C, once the stack is locked), check whether each one actually
applies to THIS project's stack — if it does, note it as confirmed-applicable below and make sure
CLAUDE.md §5 already covers it; if this project has no matching pattern (e.g. no database at all),
leave the entry alone and move on. Do not invent an incident here to justify keeping one — and do
not delete these on the assumption they don't apply without checking first.*

- [inherited] A database with one-time seed/migration data cannot tell "genuine first install"
  apart from "this database was just wiped" — both look identical from inside the migration. If
  this project has that pattern, it needs a warning log on every data-seeding migration step, plus
  a startup backup + one-command manual restore. See CLAUDE.md §5 → Data & Persistence.
- [inherited] "My data disappeared" reports must be verified at the data layer (a direct DB query
  or an authenticated API call) before being treated as real data loss — the same symptom can mean
  an empty table, a silently re-run seed migration, or a backend process that simply isn't running.
- [inherited] A local `.env` never reaches a deployment host automatically — any new
  `process.env.*` a feature needs must also be added, by hand, to the host's own environment/config
  panel, or the feature works locally and 500s in production with no obvious cause. See CLAUDE.md
  §5 → Deployment.
- [inherited] If the database is Postgres (or any other case-folding engine) and the app code uses
  camelCase field names, unquoted identifiers get folded to lowercase on both create and query —
  this reads back as `undefined`, not an error, and stays invisible until something actually needs
  the field. See CLAUDE.md §5 → Data & Persistence.
- [inherited] If more than one Claude session (or teammate) might touch this repo's shared files
  (TASKS.md, LESSONS.md) at the same time, a write can silently get overwritten by a concurrent
  one. Re-`Read` before editing shared files, and verify a write landed rather than assuming it
  did. See CLAUDE.md §7.

---

## Inherited Lessons — Checked Against This Stack (TASK C, 2026-09-10)

- Seed/migration "wiped vs. fresh install" ambiguity → **not applicable**, v1 has no database.
- "Data disappeared" reports need data-layer verification → **not applicable**, v1 has no data layer.
- Local `.env` doesn't reach the deploy host automatically → **applicable in principle** once any `process.env.*` is introduced (e.g. a Contact form endpoint or analytics key); no env vars exist yet, revisit at TASK G.
- Postgres camelCase folding → **not applicable**, v1 has no database.
- Concurrent-session overwrite risk on TASKS.md/LESSONS.md → **always applicable**, already the working practice (re-read before editing shared files).

## Open Blockers

*Unresolved after 3 self-correction attempts (CLAUDE.md §4.7). Claude STOPS here and asks Sonny.*
*Paste the verbatim error, not a summary of it.*

- _(none)_

---

## Setup & Versions

*Install failures, peer-dependency conflicts, version mismatches, config-file format changes,
package-manager quirks. Phase 0 lives here.*

- [2026-09-10] `create-next-app@14` installs 14.2.35 (the newest 14.x exists) which carries unpatched critical/high CVEs (RCE, DoS, cache poisoning) — Next.js had stopped backporting security fixes to the 14 line → always run `npm audit` right after scaffolding, before locking a framework version in CLAUDE.md §2, not just after `npm install` finishes quietly.
- [2026-09-10] `create-next-app` refuses/collides when run directly inside a non-empty target directory → scaffold into a throwaway temp dir, then copy only the generated config files + `src/` into the real project root by hand.

<!-- SHAPE REFERENCE — delete this comment block once real entries exist:
- [YYYY-MM-DD] Tool's docs showed the old config filename; the installed major version had replaced it → check the installed version's own docs, not the first search result.
- [YYYY-MM-DD] Linter passed because its config silently ignored the source folder → always prove a linter fails on a deliberate violation before trusting it.
-->

---

## Build & Tooling

*Build tool, bundler, dev server, lint, format, test runner, env vars, scripts.*

- [2026-09-10] `prettier --check .` with no `.prettierignore` scans planning docs, control files, and third-party reference folders too, not just source → added `.prettierignore` scoping it to actual project source before wiring it into `verify`.
- [2026-09-10] `next lint` exits 0 even when it reports warnings (only errors fail it) → the `lint` script must pass `--max-warnings=0`, or a linter that "passes" is actually just decoration. Confirmed by deliberately triggering a warning and seeing exit 0 before the flag was added.
- [2026-09-10] `next lint` is deprecated, removed in Next.js 16 → if this project ever moves to Next 16, migrate via `npx @next/codemod@canary next-lint-to-eslint-cli .` first.

---

## Language & Type Errors

*Recurring compile, type, import, or module-resolution traps.*

- _(none yet)_

---

## Framework & Runtime

*Framework-specific behaviour that bit us: lifecycle, state, rendering, routing, request handling.*

- [2026-09-10] The browser-automation dev preview repeatedly threw a stale `__webpack_modules__[moduleId] is not a function` overlay after several rapid file edits, even after clearing `.next` and restarting the server — but `npm run verify` (a real `next build`) passed clean every time. Root cause was the persistent browser tab holding old JS chunk references, not the app. Fix: close the tab and open a fresh one after restarting the dev server, don't just reuse the old tab. Never trust a dev-server runtime-error overlay over a green `next build`.
- [2026-09-10] Several `Photo references/*.jfif` doctor-schedule images contain real, confirmed doctor names/credentials/specialties baked into the graphic (not generic stock photos) — read them before assuming a "team photo" folder is anonymous filler; one image was a date-specific event flyer (a Sept 2026 seminar) and was excluded from the evergreen team-photo grid for that reason, though the real names it revealed were kept as text.

- [2026-09-10] TASK 1: sampled brand colors with Python/Pillow directly from `Photo references/logo.jpg` and `emergency.jpg` pixel data rather than eyeballing — green `#167646`, yellow `#faf115`, red `#d22d25` (emergency/urgent accent only). More accurate than guessing off a screenshot; a bold heading in `text-brand-green` can still look near-black at small screenshot scale — verified the real rendered value via `getComputedStyle` before trusting the screenshot.
- [2026-09-10] `create-next-app`'s default template loads local Geist font files but never actually applies them (`globals.css` hardcoded `font-family: Arial...` on `body`, ignoring the font CSS variables) — dead weight from day one. Removed the font files and the loader, using Tailwind's default `font-sans` system-font stack instead since no brand font was specified.
- [2026-09-10] Tried a full-page fade-in/fade-out transition on route change, twice: (1) a hand-rolled `setTimeout`-based delayed-unmount caused a visible flicker because it fought Next's own navigation timing; (2) `framer-motion`'s `AnimatePresence` (`mode="wait"`) removed the outgoing page entirely before mounting the next one — that gap where nothing is rendered was the flicker Sonny kept seeing. Tried fixing with `mode="sync"` + `exit={{ position: 'absolute' }}` to overlap old/new instead of a hard swap, but `getComputedStyle` inspection showed the "exiting" node's content had already been replaced with the new page's content too (not preserved), so the crossfade wasn't actually fading between two different pages. Reverted entirely — Sonny asked to drop the feature rather than keep debugging. If revisited: verify with real paint-timed screenshots (not `setTimeout`/`requestAnimationFrame` polling — both get throttled or don't fire at all while the browser-automation pane is hidden/backgrounded, which produced misleading timing data more than once during this investigation).

---

## Data & Persistence

*Queries, migrations, transactions, caching, serialisation. Delete this section if there is no data layer.*

- _(none yet)_

---

## Security & Secrets

*Env-var exposure rules, key handling, anything that could have leaked. Log the rule the moment
you learn it, not after it bites.*

- [2026-09-10] Next.js inlines any env var prefixed `NEXT_PUBLIC_` into the client bundle at build time — anything without that prefix stays server-only. Never prefix a real secret with `NEXT_PUBLIC_`. No env vars exist yet (v1 has no backend); this rule matters the moment the first one (e.g. a Contact form email-provider key) is added.
- [2026-09-10] TASK G history scan: 0 commits exist yet, `.env` correctly matched by `.gitignore`, no secret-shaped strings found — clean baseline before any commit is ever made.

---

## Architecture Notes

- [2026-09-10] Deleting a file that's actively imported by a page while the Next.js dev server is watching (e.g. removing an old image after switching to a new one) can corrupt its webpack/HMR module cache — errors reference the deleted file and old variable names that no longer exist in source, then cascade into unrelated `__webpack_modules__[moduleId] is not a function` errors. Fix is the same as the dev+build-conflict lesson: stop the server, `rm -rf .next`, restart clean.
- [2026-09-10] For removing a background from a photo: prefer a border-touching flood-fill on a same-color mask (`scipy.ndimage.label`, then only clear labels touching the image edge) over a global color-key when the subject might contain that same color (e.g. white lab coats on a white background) — a global white-removal would have punched holes in the coats. When the source has a solid, uniform chroma-key-style background (e.g. flat green), a global color-key is fine and simpler. Always verify by compositing the cutout onto a non-white test background before trusting it — a checkered/white viewer can't show whether transparency actually worked.

- [2026-09-10] `create-next-app`'s default `globals.css` auto-switches `body`'s background/text color to near-black/white via `@media (prefers-color-scheme: dark)`, but we never built an actual dark theme — every component's colors (grays, brand tokens) assume a white page. Result: any page whose `<main>` doesn't set its own explicit background (most of them) rendered black-on-black for any visitor with OS/browser dark mode on, while pages/sections with explicit `bg-white`/`bg-brand-green` classes looked fine (those don't respond to the CSS variable). Fixed by removing the dark-mode media query and setting `color-scheme: light` on `:root` so the site always renders light regardless of visitor theme. Verify this kind of visual bug with the Browser tool's dark color-scheme emulation (`resize_window` with `colorScheme: 'dark'`), not just a normal screenshot — a normal light-mode screenshot won't show it.

- [2026-09-10] Running `npm run build` while `npm run dev` is also active corrupts the shared `.next` directory on Windows (dev's incremental artifacts and build's production output collide) — the build itself can appear to pass, but the still-running dev server then 500s on every route (`Cannot find module './NNN.js'`, missing `routes-manifest.json`). Fix is `rm -rf .next` and restart dev cleanly. Never run `verify`/`build` while a dev server from the same project is live; stop it first.

- [2026-09-10] `WebSearch` reported "unavailable" in this environment, but the Claude Browser tool (`mcp__Claude_Browser__navigate` to google.com/search) worked fine as a fallback for verifying real-world facts (facility addresses, Facebook handle) via Google Business listings and a PhilHealth PDF — cross-checked across multiple independent sources before treating as confirmed. C.P. Reyes Satellite Clinic turned out to be in Malvar, not Tanauan, despite the name — the earlier "to be confirmed" placeholder was correctly cautious rather than guessing wrong.

- [2026-09-10] Don't simulate a color-override on a shared `Button` by appending conflicting utility classes via `className` (e.g. forcing a green-bg button white via `className="bg-white"`) — Tailwind's generated stylesheet order, not the className string order, decides which same-property class wins, so the override can silently fail. Added real `light`/`outlineLight` variants to `Button.tsx` instead, for use on dark/photo backgrounds.

- [2026-09-10] v1 has no backend (§2), so the Careers and Contact forms can't POST anywhere real. Faking a "submitted!" success state would silently discard real job applications/messages. Chosen fix: validate with Zod/React Hook Form as usual, then on submit build a `mailto:` link to the hospital's real inbox and navigate to it — this actually delivers the message via the visitor's own email client, with no backend needed. Revisit once/if a backend exists.

- [2026-09-11] The same border-touching-mask cutout principle from the photo lesson above (line 137) applies to video too: the floating chat launcher's source clip has a dark background baked in with no real alpha channel, and it isn't even a flat keyable color (samples ranged from near-black to light blue across the 4s clip). A first attempt used a flat luminance threshold on an HTML5 `<video>` — this indiscriminately keyed out dark subject pixels too (the doctor's black hair went semi-transparent/gray). Fixed by drawing each frame to a canvas and running a border-connected flood-fill (BFS from the edge pixels, 4-directional) so only darkness touching the frame's border gets cleared; interior dark areas (hair) that aren't connected to the edge stay opaque. A `<video>` element has no way to expose per-pixel alpha directly — this canvas-per-frame technique is the general workaround whenever a video needs to look transparent in the browser.
- [2026-09-11] A `<video>` with `preload="auto"` can finish loading (`readyState` 4, `loadeddata` already fired) before React finishes attaching its `onLoadedData` listener, especially once the file is warm in the dev server/browser cache — any "draw the first frame on load" logic needs a mount-time fallback (`if (videoRef.current.readyState >= 2) drawFirstFrame()`) in addition to the event listener, or the canvas silently stays at its default 300×150 size with nothing drawn.
- [2026-09-11] `mix-blend-mode: screen` (the common trick for compositing a black-background video over a page) does not work as a general fix for a `position: fixed` floating widget — it blends against whatever happens to be visually beneath it at that screen position, which changes per page/scroll position and isn't controllable. It's only reliable when the element sits over a known, static backdrop. For anything floating over arbitrary content, do real per-pixel keying (canvas + flood-fill, see above) instead of relying on a CSS blend mode.
- [2026-09-11] To get a still PNG out of a video (e.g. a static avatar image matching an animated clip), load the file in an offscreen `<video>`, seek to the desired `currentTime`, `drawImage` it onto a canvas, run the same background-removal logic used for the live playback, then read the result back with `canvas.toDataURL('image/png')` — no ffmpeg/ffprobe needed (neither is installed in this environment) and no extra dependency.
- [2026-09-11] For a shadow on an element with real alpha transparency (a keyed canvas, a cutout PNG), use the CSS `filter: drop-shadow(...)` (Tailwind's `drop-shadow-*` utilities), not `box-shadow` — `box-shadow` draws around the element's full rectangular box regardless of what's transparent inside it, while `drop-shadow` follows the visible (non-transparent) pixels, which is what "a shadow under the character" actually means once the background is gone.

## Rules Derived From Lessons

*Promote an entry here once the same class of mistake has happened twice.*
*Entries here are as binding as CLAUDE.md.*

- _(none yet)_
