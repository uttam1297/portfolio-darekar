# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static single-page personal portfolio for Uttam Darekar. No build system, no framework, no package manager — just HTML, CSS, and JS served directly.

## Development

Open `index.html` in a browser directly, or use any static file server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

No build, lint, or test commands exist.

## Architecture

**Active files:**
- `index.html` — the entire site. All visible content, structure, and JavaScript logic live here (nav scroll/hamburger, fade-in observer, show-more toggle, portfolio tabs, testimonial carousel, case study modal).
- `style.css` — the active stylesheet, linked as `style.css?v=5`. Two-column sticky layout, deep navy theme (`--bg: #0d1117`), Inter font, accent `#6366f1`.

**Legacy / unused files:**
- `assets/css/style.css` — an older, longer stylesheet from a previous layout. Not referenced by `index.html`.
- `assets/js/script.js` and root `script.js` — older JS from prior versions. Not referenced by `index.html`; all JS is now inline.
- `fix_css.py`, `fix_html_css.py`, `update_layout.py`, `update_my_site.py` — one-off migration scripts from past redesigns. Not part of the active workflow.
- `edit.html` — a helper page for content editing, not linked from the main site.

**Layout:**
The page uses a two-column CSS grid: `.col-left` (sticky sidebar with bio, KPIs, education, certs) and `.col-right` (scrollable main content: Experience, Portfolio, Capabilities, Tools, Testimonials, Connect). Below `~768px` the layout collapses to single column.

**Case study modal:**
Case study data (title, context, problem, approach, impact) is stored entirely in `data-*` attributes on `.cs-btn` buttons inside `index.html`. The modal JS reads these attributes to populate `#cs-modal-box`.
