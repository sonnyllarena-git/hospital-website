# TASKS.md — Live Sprint Board (Dynamic)

> **Claude:** work ONLY the first unchecked `[ ]`. Verify. Then flip to `[x]`.
> ≤50 lines of change per task. If it won't fit, split into `.a` / `.b` here FIRST, then do `.a`.
> Never work ahead. Never batch. Never soften a task's wording to make it pass.
> Phase 0 runs task-to-task automatically (CLAUDE.md §4.1) — no "go" needed between B and H.

**Current task pointer:** _(Phase 1 complete — awaiting next roadmap with Sonny)_
**Last verified:** 2026-09-10 — `npm run verify` → PASS, all 15 Phase 1 tasks complete, spot-checked live in browser
**Verify command:** `npm run verify`

---

## PHASE 0 — DEFINE & PROVE THE GATE (blocking)

*Nothing here is feature work. The point of Phase 0 is that by the end of it, one command tells
the truth about whether the project is healthy. Until that command exists AND passes, every
"done" claim afterwards is unverifiable.*

- [x] **TASK A** — Intake interview. **No writes to any file except CLAUDE.md §1/§2.** Ask Sonny, in one message, as a numbered list:
  1. What is this project and who uses it? (one sentence)
  2. What must v1 do to count as done? What is explicitly NOT in v1?
  3. Where does it run — local / internal network / public internet / mobile?
  4. Does it handle sensitive or personal data? What kind?
  5. Stack: does he have a required stack, or should you recommend the boring reliable option for this project type and wait for his yes?
  6. Anything he already knows he wants banned or avoided?
  Then write his answers into CLAUDE.md §1 and §2, delete those two marker comments, and flip
  `**INTAKE: NOT DONE**` to `**INTAKE: DONE**`.
  **Pass condition:** §1 and §2 contain Sonny's answers in his terms, he has confirmed the stack
  in writing, and the INTAKE line reads `DONE`. Do NOT proceed on silence or a guess.

- [x] **TASK B** — Create the minimum repo skeleton for the approved stack: root config, `.gitignore` (dependencies, build output, env files, local DB files, OS junk), and only the folders that will hold a file this week. `git init` if needed. Fill CLAUDE.md §3.
  **Pass condition:** tree matches §3 exactly, no empty speculative folders, `.gitignore` covers env + build output.

- [x] **TASK C** — Create the dependency manifest and install **only** the dependencies approved in TASK A. Then read the real installed versions back from the lockfile and write them into CLAUDE.md §2. Once the stack is locked, check LESSONS.md's "Inherited Lessons" section against it — for each entry, state whether this project's actual stack matches the pattern it describes (e.g. does it have a database with seed/migration data? is Postgres in play with camelCase columns? will this deploy to a host with an ephemeral filesystem?). Note applicable ones; leave non-applicable ones alone.
  **Pass condition:** install completes clean, §2 lists real pinned versions (no "latest"), no unapproved package appears in the manifest, and every Inherited Lesson has been explicitly checked against this stack (not skipped).

- [x] **TASK D** — Add lint + format config appropriate to the stack. Fill CLAUDE.md §6. Then prove both directions: run the linter on clean code (must exit 0), then on a throwaway file containing a deliberate violation (must exit non-zero). Delete the throwaway file.
  **Pass condition:** both the pass AND the fail case demonstrated with real output. A linter that never fails is decoration.

- [x] **TASK E** — Add the test runner and exactly ONE trivial passing test (assert a pure helper returns a known value). Nothing more.
  **Pass condition:** the runner discovers and passes 1 test, shown in real output.

- [x] **TASK F** — Define the single `verify` script that chains the checks from D and E plus the build, shortest-feedback-first. Run it. Fill CLAUDE.md §4.6 with the exact command.
  **Pass condition:** the chained command has been executed and exits 0, with real output pasted. This is the gate every later task must pass. If it is not green here, do not continue — fix it or ask.

- [x] **TASK G** — Add `.env.example` listing every variable the project will need, placeholder values only. Confirm and record the build tool's client-exposure prefix rule in LESSONS.md. Then verify no real secret has ever reached git — check the current working tree (`git status`) AND, if this repo has any prior commits, its full history (`git log --all -p` grepped for key-shaped patterns) — not just that `.env` is gitignored going forward.
  **Pass condition:** no real secret in the repo (working tree or history), `.env` is gitignored, and the prefix rule is written down.

- [x] **TASK H** — Build the thinnest end-to-end slice that actually runs: one entry point rendering or responding with one real thing, wired the way real features will be wired. No styling, no polish, no second feature.
  **Pass condition:** it runs, `verify` passes, and Sonny can see it work.

- [x] **TASK I** — With Sonny, write the real v1 roadmap into Phase 1 below as micro-tasks per the
  rules at the bottom of this file. Ask; do not assume. If TASK C confirmed an Inherited Lesson
  applies and CLAUDE.md §5 doesn't yet have working code behind it (e.g. a database exists but has
  no backup/restore path yet), propose it as an early Phase 1 task and let Sonny confirm or
  decline it — don't silently add it, and don't silently drop it either. Then flip CLAUDE.md §0
  from `**BOOTSTRAP: INCOMPLETE**` to `**BOOTSTRAP: COMPLETE**`.
  **Pass condition:** Sonny has confirmed the list, every task states its own pass condition, this
  returns nothing —
  ```bash
  grep -n "<!-- SETUP:FILL" CLAUDE.md
  ```
  — and the gate line reads `COMPLETE`. Do not flip the gate while any marker remains or while
  the verify command from TASK F is not green.

---

## PHASE 1 — v1 FEATURE WORK

*Confirmed with Sonny 2026-09-10. Public-site-only per CLAUDE.md §1 — no login, no booking backend.*

- [x] **TASK 1** — Set the hospital's real brand colors (green/yellow/white, from `Photo references/logo.jpg`) and font as named tokens in `tailwind.config.ts`. **Pass:** `theme.extend.colors` has brand tokens used by at least one element; `npm run verify` passes.
- [x] **TASK 2** — `Header`/`Nav`: `src/components/layout/Header.tsx` — site name, nav links, mobile menu toggle. **Pass:** renders and is wired into `src/app/layout.tsx`; verify passes.
- [x] **TASK 3** — `Footer`: `src/components/layout/Footer.tsx` — address, phone numbers, social links (from reference photos). **Pass:** renders and is wired into layout; verify passes.
- [x] **TASK 4** — Shared primitives: `src/components/shared/Button.tsx`, `src/components/shared/Card.tsx`. **Pass:** both used at least once elsewhere in the tree; verify passes.
- [x] **TASK 5** — `HeroSection`: `src/components/public/HeroSection.tsx` — headline, subhead, CTA. **Pass:** renders on the homepage; verify passes.
- [x] **TASK 6** — Rebuild `src/app/page.tsx` as the real Home page (Header + Hero + Footer), replacing the TASK H placeholder. **Pass:** homepage renders the assembled layout; confirmed live in browser; verify passes. *(Landed incrementally via TASK 2/3/5; confirmed live in desktop + mobile viewports 2026-09-10.)*
- [x] **TASK 7** — `src/app/about-us/page.tsx` — mission, vision, history, values. Mock but hospital-appropriate copy for Tanauan Medical Center, per Sonny's instruction. **Pass:** page renders at `/about-us`; verify passes.
- [x] **TASK 8** — `src/app/services/page.tsx` — service/department listing. **Pass:** page renders at `/services`; verify passes.
- [x] **TASK 9** — `src/app/locations/page.tsx` — TMC + the four affiliated facilities (C.P. Reyes Satellite Clinic, Lab To Go, Malvar Kidney & Dialysis Center, Tanauan Kidney & Dialysis Center). **Pass:** page renders at `/locations`; verify passes.
- [x] **TASK 10** — `src/app/find-a-doctor/page.tsx` — static doctor directory/listing, no booking. **Pass:** page renders at `/find-a-doctor`; verify passes.
- [x] **TASK 11** — `src/app/careers/page.tsx` — job listings + application form (React Hook Form + Zod). **Pass:** form validates required fields client-side; verify passes.
- [x] **TASK 12** — `src/app/contact-us/page.tsx` — contact form (React Hook Form + Zod). **Pass:** form validates required fields client-side; verify passes.
- [x] **TASK 13** — `src/app/health-library/page.tsx` — static article listing. **Pass:** page renders at `/health-library`; verify passes.
- [x] **TASK 14** — `src/app/not-found.tsx` and `src/app/error.tsx`. **Pass:** hitting an unknown route shows the custom 404; verify passes.
- [x] **TASK 15** — Per-page `metadata` exports, `src/app/sitemap.ts`, `src/app/robots.ts`. **Pass:** `/sitemap.xml` and `/robots.txt` resolve; verify passes.
- [x] **TASK 16** — Live chat widget: `src/components/shared/TawkToWidget.tsx`, wired into `src/app/layout.tsx`, `.env.example`. Tawk.to (free tier), approved by Sonny 2026-09-10 over a custom AI bot. **Pass:** verify passes; widget renders nothing until real env vars are set (Claude cannot create the Tawk.to account — that step is Sonny's). *Follow-up owed to Sonny, not a Claude task: sign up at tawk.to, create a property, copy the Property ID/Widget ID from Administration > Channels > Chat Widget into `.env.local`.*
- [x] **TASK 17** — Searchable doctor directory per `Photo references/UI/Find a Doctor.png` reference: `src/lib/doctors.ts` (100 generated MOCK doctors + specialization/HMO lookup tables), `src/components/public/DoctorDirectory.tsx` (surname/first-name search, specialization/sub-specialization/HMO dropdowns, A-Z index, pagination). Requested by Sonny 2026-09-10. **Pass:** verify passes; search/filter/pagination confirmed working live in browser; mock doctors clearly labeled as sample data. *2026-09-10: Sonny asked to remove the "Featured Doctors" (6 real/verified names) and "Other Departments" sections from this page — the directory below is now the entire page. The removed real doctor data still exists in git history (initial commit) if needed again.*
- [x] **TASK 18** — About Us rebuilt as sidebar-nav layout per `Photo references/UI/About Us.png` reference: `src/components/public/AboutSidebarNav.tsx`, sections About/Leadership/Technology/Research and Biotechnology/Milestones/General Privacy Notice with mock content, `src/app/about-us/page.tsx`. Also fixed footer not anchoring to viewport bottom on short pages (`src/app/layout.tsx`, `src/components/layout/PageTransition.tsx` — `flex min-h-screen flex-col` + `flex-1`). Requested by Sonny 2026-09-10. **Pass:** verify passes; sidebar nav and footer fix confirmed live in browser.
- [x] **TASK 19** — Careers rebuilt as a searchable job board per `Photo references/UI/Careers.png` reference: `src/lib/jobs.ts` (14 MOCK job postings), `src/components/public/JobBoard.tsx` (keyword search, category filter, expandable "View Details" linking to the existing application form), `src/app/careers/page.tsx`. Requested by Sonny 2026-09-10. **Pass:** verify passes; search, category filter, and detail expansion confirmed working live in browser.
- [x] **TASK 20** — Rebrand color palette per `Photo references/UI/color palette.png` (hex-sampled with Pillow, not eyeballed): `brand.green` refined to `#067b50`, new `brand.green-dark` (`#46762c`) added, `brand.yellow` softened to `#fdfba8` (`tailwind.config.ts`). Header and Footer backgrounds changed from white to `bg-brand-green` with white text (`src/components/layout/Header.tsx`, `Footer.tsx`). Requested by Sonny 2026-09-10. **Pass:** verify passes; new colors and header/footer contrast confirmed live in browser (desktop + mobile menu open state).
- [x] **TASK 22** — Homepage hero: iterated per Sonny's feedback from `blur-md scale-110` (rejected — wanted images unblurred), through a full-bleed overlay (rejected — wanted the photo fully visible), to a centered card floating on the fully-visible image matching Sonny's own mockup, then recolored green→yellow (`bg-brand-yellow`, text/buttons flipped to green for contrast), then made 50%-transparent (`bg-brand-yellow/50`) — which broke text legibility against the busy photo behind it, fixed by adding `backdrop-blur-sm` to the card so the photo blurs behind the translucent card without changing its opacity (`src/components/public/HeroSection.tsx`). **Pass:** verify passes; confirmed live — card is translucent and text stays fully legible.
- [x] **TASK 21** — Fix: inner pages (About Us, Services, Find a Doctor, etc.) rendered with a black background for any visitor with OS/browser dark mode on, because `globals.css` still had `create-next-app`'s default `prefers-color-scheme: dark` auto-switch and no page set an explicit background. Removed the dark-mode media query, forced `color-scheme: light` (`src/app/globals.css`). Reported by Sonny 2026-09-10 via screenshots. **Pass:** verify passes; confirmed fixed live with the Browser tool's dark color-scheme emulation on About Us, Services, and Find a Doctor.
- [x] **TASK 23** — "We Are Hiring" banner on Careers header, iterated per Sonny's design references: added the flattened `we-are-hiring.png` (white bg) first; Sonny then supplied `hiring image.jpg` (same photo, green-screen bg, no baked-in text) and asked for the background removed and the yellow palette used. Chroma-keyed the green out with Pillow/numpy (verified by compositing onto yellow before trusting it — see LESSONS.md), producing `hiring-people-cutout.png`. Rebuilt the banner as a `bg-brand-yellow` card with the cutout photo plus real HTML text ("WE ARE HIRING! JOIN. GROW. MAKE AN IMPACT." in `text-brand-green`) instead of a flattened image (`src/app/careers/page.tsx`). Sonny then pointed out it was nested as a smaller inset card inside the green section's padded container instead of full-width — pulled it out as its own sibling `<section>` with `bg-brand-yellow` spanning the full viewport width. Sonny then asked to remove the separate green "Careers" title/intro section entirely, merge that copy into the same text column beside "WE ARE HIRING!", roughly double the photo size (`max-w-md` → `max-w-2xl`), and center the whole composition — final structure is one `bg-brand-yellow` section, photo + all text side by side, centered (`src/app/careers/page.tsx`). **Pass:** verify passes; confirmed live matching Sonny's design reference, no visible green fringing.
- [x] **TASK 24** — Homepage hero further iteration: removed the translucent yellow card behind the headline (Sonny wanted the background color gone but text still legible against any of the rotating photos) — replaced with white text + a strong CSS drop-shadow (`[text-shadow:...]`) and reverted buttons to `light`/`outlineLight` variants; doubled headline/subhead text size (`text-4xl→text-7xl`, etc.) per Sonny's request, which required swapping the hero's fixed `min-h-[70vh]` for `py-24 sm:py-32` so the section grows with content instead of clipping the now-larger text/buttons; swapped all 3 rotating background images for the 3 new ones Sonny supplied (`hero images 1/2/3.png`, imported as local modules since they live under `src/`, not `public/`) (`src/components/public/HeroSection.tsx`). **Pass:** verify passes; confirmed live — no clipping, all 3 new images rotate correctly, text legible with drop-shadow alone.
- [x] **TASK 25** — Fix: Sonny found a white gap between the hero and footer, and separately the new hero images' edge captions ("NEW EMERGENCY ROOM", "Managed by: Tanauan Medical Center, INC.") were getting cropped off at wide viewports. Root cause 1: `object-cover` crops top/bottom whenever the section's aspect ratio (driven by text content height) is wider than the image's own — switched to `object-contain` (never crops; `bg-brand-green` on the section shows as intentional-looking letterboxing) (`src/components/public/HeroSection.tsx`). Root cause 2: the sticky-footer flex chain from TASK 18 (`flex-1` on the content wrapper) was stretching an *invisible* wrapper below the hero on pages shorter than the viewport, instead of the hero itself growing — chased `flex flex-1 flex-col` down through `PageTransition`, the homepage's `<main>`, and the hero `<section>` so the green hero background is what stretches, not empty space (`src/components/layout/PageTransition.tsx`, `src/app/page.tsx`, `src/components/public/HeroSection.tsx`). **Pass:** verify passes; confirmed live at both a wide (1920px) and normal desktop viewport — full image always visible, no crop, no gap before the footer.
- [x] **TASK 26** — Fix: after switching to `object-contain`, a white band still appeared below the C.P. Reyes hero image specifically. Turned out to be genuine, not a layout bug — that source image (and to a lesser extent image 2) has a real blank/near-white margin baked into the bottom of the PNG, below the caption text, invisible before only because `object-cover` had been cropping it off. Detected each image's true content bounding box with numpy (rows that aren't ≥85% near-white) and cropped to that box with a 6px safety pad, trimming 0px / 10px / 48px off images 1/2/3 respectively (`src/components/public/images/hero images 1.png`, `Hero images 2.png`, `Hero images 3.png`). **Pass:** verify passes; confirmed live across a full rotation at 1920px wide — no image shows a trailing blank band anymore.

---

## Backlog — DO NOT START

Anything here is out of scope until Sonny moves it up.

- Anything listed as "explicitly NOT in v1" in CLAUDE.md §1
- Deployment, CI/CD, monitoring — until v1 runs locally (CLAUDE.md §5 → Deployment still applies
  the day this moves up; it's written now so it's followed correctly then, not built for early)
- Performance optimisation — until something measurably needs it
- Auth, payments, or any third-party integration not in the §2 stack
- Additional dependencies, frameworks, or architectural layers

---

## How to write a task

One line. Imperative. Names the exact file(s). ≤50 lines of change. States its own pass condition.

**If you cannot write the pass condition, the task is not defined well enough to start.**

Good: `Add a 300ms debounce to the search input in src/components/SearchBar.jsx. Pass: typing 5 characters fires one request, not five.`

Bad: `Improve search performance.`
