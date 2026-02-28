css_content = """/* ============================================================
   style.css — Minimal premium dark personal page  v4
   ============================================================ */

/* ---- Reset & tokens ---- */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #0e0e11;
    --surface: #16161a;
    --surface2: #1c1c22;
    --border: rgba(255, 255, 255, 0.06);
    --text: #ececf1;
    --muted: #8b8b9e;
    --accent: #7c5cfc;
    --accent2: #c084fc;
    --glow: rgba(124, 92, 252, 0.35);
    --radius: 1rem;
    --font: 'Outfit', system-ui, -apple-system, sans-serif;
    --nav-h: 56px;
    --content-max: 1160px;
}

html {
    font-family: var(--font);
    font-size: 16px;
    color: var(--text);
    background: var(--bg);
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    scroll-padding-top: calc(var(--nav-h) + 1rem);
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* Admin role toggling */
.admin-only {
    display: none !important;
}

body.is-admin .admin-only {
    display: flex !important;
}

/* Empty state handling */
.empty-state {
    display: none;
}
body.is-admin .empty-state {
    display: block;
}

/* ---- Ambient blobs ---- */
.bg-blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.4;
    pointer-events: none;
    z-index: 0;
    animation: float 20s ease-in-out infinite alternate;
}

.blob-1 {
    width: 420px;
    height: 420px;
    background: var(--accent);
    top: -10%;
    left: -8%;
}

.blob-2 {
    width: 340px;
    height: 340px;
    background: var(--accent2);
    bottom: 10%;
    right: -5%;
    animation-delay: -7s;
}

.blob-3 {
    width: 260px;
    height: 260px;
    background: #38bdf8;
    top: 50%;
    left: 40%;
    animation-delay: -14s;
}

@keyframes float {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(30px, -20px) scale(1.08); }
    100% { transform: translate(-20px, 15px) scale(0.95); }
}

/* ============================================================
   STICKY NAVIGATION
   ============================================================ */
.nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    height: var(--nav-h);
    background: rgba(14, 14, 17, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
    transition: box-shadow 0.3s ease;
}

.nav.scrolled {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

.nav-inner {
    max-width: var(--content-max);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
}

.nav-logo {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--accent);
    text-decoration: none;
    letter-spacing: 0.04em;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 0.15rem;
}

.nav-link {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--muted);
    text-decoration: none;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    transition: color 0.2s ease, background 0.2s ease;
    white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
    color: var(--text);
    background: rgba(255, 255, 255, 0.06);
}

.nav-link.active {
    color: var(--accent);
}

/* Hamburger (mobile) */
.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
}

.nav-toggle span {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
    transition: all 0.3s ease;
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: var(--nav-h);
        left: 0; right: 0;
        background: rgba(14, 14, 17, 0.97);
        backdrop-filter: blur(16px);
        flex-direction: column;
        padding: 1rem;
        gap: 0.25rem;
        transform: translateY(-120%);
        transition: transform 0.35s ease;
        border-bottom: 1px solid var(--border);
    }
    .nav-links.open { transform: translateY(0); }
    .nav-link { font-size: 0.9rem; padding: 0.6rem 1rem; width: 100%; text-align: center; }
    .nav-toggle { display: flex; }
    .nav-toggle.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    .nav-toggle.open span:nth-child(2) { opacity: 0; }
    .nav-toggle.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
}

/* ============================================================
   PAGE LAYOUT — TWO COLUMN GRID
   ============================================================ */
.page {
    position: relative;
    z-index: 1;
    max-width: var(--content-max);
    margin: 0 auto;
    padding: calc(var(--nav-h) + 3rem) 2rem 2rem;
}

/* explicit grid areas so footer spans both columns */
.page-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "left  right"
        "foot  foot";
    gap: 0 3.5rem;
    align-items: start;
}

.layout-left {
    grid-area: left;
    /* Sticky sidebar so it stays visible while right column scrolls */
    position: sticky;
    top: calc(var(--nav-h) + 1.5rem);
    max-height: calc(100vh - var(--nav-h) - 3rem);
    overflow-y: auto;
    scrollbar-width: none;
    padding-right: 0.25rem;
    /* hide scrollbar for webkit */
    -ms-overflow-style: none;  /* IE and Edge */
}

.layout-left::-webkit-scrollbar { display: none; }

.layout-right {
    grid-area: right;
    min-width: 0; /* prevent overflow */
}

/* Footer spans full grid width */
.footer {
    grid-area: foot;
    text-align: center;
    padding: 2.5rem 0 1rem;
    font-size: 0.75rem;
    color: var(--muted);
    opacity: 0.6;
    border-top: 1px solid var(--border);
    margin-top: 1rem;
}

@media (max-width: 900px) {
    .page-grid {
        grid-template-columns: 1fr;
        grid-template-areas:
            "left"
            "right"
            "foot";
        gap: 0;
    }
    .layout-left {
        position: static;
        max-height: none;
        overflow-y: visible;
    }
}

/* ============================================================
   HERO
   ============================================================ */
.hero {
    text-align: left;
    margin-bottom: 3rem;
}

.avatar-ring {
    width: 110px;
    height: 110px;
    margin: 0 0 1.25rem 0;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    box-shadow: 0 0 40px var(--glow);
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    border: 3px solid var(--bg);
}

.hero-name {
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 0.2rem;
}

.hero-role {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.75rem;
    line-height: 1.5;
}

.hero-role span {
    color: var(--accent2);
}

.hero-summary {
    color: var(--muted);
    font-size: 0.88rem;
    line-height: 1.65;
    margin-bottom: 0.6rem;
}

.hero-location {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 1.25rem;
}

/* ---- Social pills ---- */
.social-row {
    display: flex;
    justify-content: flex-start;
    gap: 0.6rem;
    flex-wrap: wrap;
}

.social-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--text);
    text-decoration: none;
    background: var(--surface);
    border: 1px solid var(--border);
    transition: all 0.25s ease;
}

.social-pill svg { width: 14px; height: 14px; flex-shrink: 0; }

.social-pill:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--glow);
}

/* ============================================================
   SECTIONS
   ============================================================ */
.section {
    margin-bottom: 3rem;
}

.section-title {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--accent2);
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
}

/* ---- Timeline ---- */
.timeline {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.timeline-item {
    padding: 1.15rem 1.35rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.timeline-item:hover {
    border-color: rgba(124, 92, 252, 0.3);
    box-shadow: 0 4px 24px rgba(124, 92, 252, 0.08);
}

.timeline-date {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--accent);
    margin-bottom: 0.3rem;
}

.timeline-date-inline {
    font-size: 0.68rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--accent);
}

.timeline-item h3 {
    font-size: 0.97rem;
    font-weight: 600;
    margin-bottom: 0.15rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.role-badge {
    display: inline-block;
    font-size: 0.63rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--accent2);
    background: rgba(192, 132, 252, 0.1);
    border: 1px solid rgba(192, 132, 252, 0.2);
    padding: 0.15rem 0.55rem;
    border-radius: 999px;
}

.timeline-org {
    font-size: 0.8rem;
    color: var(--muted);
    margin-bottom: 0.5rem;
}

/* Bolded headline inside experience card */
.timeline-headline {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.6rem;
    line-height: 1.5;
}

.timeline-item ul {
    list-style: none;
    padding: 0;
    margin-bottom: 0.75rem;
}

.timeline-item li {
    position: relative;
    padding-left: 1rem;
    font-size: 0.82rem;
    color: var(--muted);
    line-height: 1.55;
    margin-bottom: 0.3rem;
}

.timeline-item li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent2);
}

/* Tool tags row inside experience cards */
.tool-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.5rem;
}

.tool-tag {
    font-size: 0.68rem;
    font-weight: 500;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: rgba(124, 92, 252, 0.1);
    border: 1px solid rgba(124, 92, 252, 0.2);
    color: var(--accent2);
}

/* ---- Chips ---- */
.chip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.45rem;
}

.chip {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.35rem 0.75rem;
    font-size: 0.78rem;
    font-weight: 500;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
    transition: all 0.2s ease;
}

.chip:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.chip--accent {
    background: rgba(124, 92, 252, 0.08);
    border-color: rgba(124, 92, 252, 0.22);
    color: var(--accent2);
}

.chip--accent:hover {
    background: rgba(124, 92, 252, 0.18);
    border-color: var(--accent);
}

/* ============================================================
   TAB SWITCHER  (Portfolio section)
   ============================================================ */
.tab-row {
    display: flex;
    gap: 0.35rem;
    margin-bottom: 1.25rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.25rem;
    width: fit-content;
}

.tab-btn {
    background: none;
    border: none;
    color: var(--muted);
    font-family: var(--font);
    font-size: 0.82rem;
    font-weight: 500;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.tab-btn.active {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 2px 12px var(--glow);
}

.tab-btn:hover:not(.active) {
    color: var(--text);
    background: rgba(255, 255, 255, 0.05);
}


.tab-panel {
    display: none;
}

.tab-panel.active {
    display: block;
    animation: fadeUp 0.3s ease forwards;
}

/* ============================================================
   CONTENT CARDS  (Projects, Case Studies)
   ============================================================ */
.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
}

.content-card {
    padding: 1.2rem 1.35rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.content-card:hover {
    border-color: rgba(124, 92, 252, 0.3);
    box-shadow: 0 4px 24px rgba(124, 92, 252, 0.08);
    transform: translateY(-2px);
}

.content-card-tag {
    display: inline-block;
    font-size: 0.63rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent);
    background: rgba(124, 92, 252, 0.1);
    padding: 0.18rem 0.55rem;
    border-radius: 999px;
    margin-bottom: 0.55rem;
}

.content-card h3 {
    font-size: 0.93rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    line-height: 1.4;
}

.content-card p {
    font-size: 0.81rem;
    color: var(--muted);
    line-height: 1.55;
}

.content-card ul {
    list-style: none;
    padding: 0;
}

.content-card li {
    position: relative;
    padding-left: 1rem;
    font-size: 0.81rem;
    color: var(--muted);
    line-height: 1.55;
    margin-bottom: 0.3rem;
}

.content-card li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent2);
}

/* "Add" card */
.content-card--add {
    display: flex!important;
    align-items: center;
    justify-content: center;
    min-height: 130px;
    border-style: dashed;
    border-color: rgba(255, 255, 255, 0.1);
    background: transparent;
}

.content-card--add:hover {
    border-color: var(--accent);
    background: rgba(124, 92, 252, 0.04);
    transform: none;
    box-shadow: none;
}

.add-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    text-decoration: none;
    color: var(--muted);
    transition: color 0.2s ease;
}

.add-link svg { width: 26px; height: 26px; }
.add-link span { font-size: 0.78rem; font-weight: 500; }
.content-card--add:hover .add-link { color: var(--accent); }

/* ============================================================
   OUTSIDE WORK  (3-column hobby grid)
   ============================================================ */
.outside-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 0;
}

.outside-card {
    padding: 1.25rem 1.2rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.outside-card:hover {
    border-color: rgba(124, 92, 252, 0.3);
    box-shadow: 0 4px 24px rgba(124, 92, 252, 0.08);
    transform: translateY(-2px);
}

.outside-icon {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
}

.outside-card h3 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
}

.outside-card p {
    font-size: 0.81rem;
    color: var(--muted);
    line-height: 1.55;
}

@media (max-width: 600px) {
    .outside-grid {
        grid-template-columns: 1fr;
    }
}


/* ============================================================
   FADE-IN ANIMATION
   ============================================================ */
.hero, .section {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s ease forwards;
}

.hero { animation-delay: 0.05s; }

.section:nth-of-type(1)  { animation-delay: 0.15s; }
.section:nth-of-type(2)  { animation-delay: 0.25s; }
.section:nth-of-type(3)  { animation-delay: 0.35s; }
.section:nth-of-type(4)  { animation-delay: 0.45s; }
.section:nth-of-type(5)  { animation-delay: 0.5s;  }
.section:nth-of-type(6)  { animation-delay: 0.55s; }

@keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 480px) {
    .page {
        padding: calc(var(--nav-h) + 1.5rem) 1rem 1.5rem;
    }
    .hero-name { font-size: 1.65rem; }
    .avatar-ring { width: 95px; height: 95px; }
    .timeline-item { padding: 1rem; }
    .content-grid { grid-template-columns: 1fr; }
    .tab-row { width: 100%; justify-content: stretch; }
    .tab-btn { flex: 1; text-align: center; }
}

@media (max-width: 900px) {
    .hero { text-align: center; }
    .avatar-ring { margin: 0 auto 1.25rem auto; }
    .social-row { justify-content: center; }
    .hero-location { justify-content: center; }
}

/* ============================================================
   EDIT PAGE STYLES (edit.html)
   ============================================================ */
.edit-page {
    max-width: 720px;
    margin: 0 auto;
    padding: calc(var(--nav-h) + 3rem) 1.5rem 2rem;
    position: relative;
    z-index: 1;
}

.edit-page h1 { font-size: 1.75rem; font-weight: 700; margin-bottom: 0.5rem; }
.edit-page .subtitle { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; }

.form-section { margin-bottom: 2.5rem; }

.form-section h2 {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent2);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
}

.form-group { margin-bottom: 1rem; }

.form-group label {
    display: block;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--muted);
    margin-bottom: 0.35rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.65rem 0.85rem;
    font-family: var(--font);
    font-size: 0.88rem;
    color: var(--text);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.6rem;
    outline: none;
    transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus { border-color: var(--accent); }

.form-group textarea { min-height: 100px; resize: vertical; }

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 1.25rem;
    border: none;
    border-radius: 999px;
    font-family: var(--font);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #fff;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--glow);
}

.btn-secondary {
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--border);
}

.btn-secondary:hover {
    border-color: var(--accent);
    color: var(--accent);
}

.btn-row { display: flex; gap: 0.75rem; margin-top: 1.5rem; }

.saved-items { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem; }

.saved-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.25rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
}

.saved-item-content h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.2rem; }
.saved-item-content p  { font-size: 0.8rem; color: var(--muted); line-height: 1.5; }

.saved-item .delete-btn {
    background: none;
    border: none;
    color: var(--muted);
    cursor: pointer;
    padding: 0.2rem;
    transition: color 0.2s ease;
    flex-shrink: 0;
}

.saved-item .delete-btn:hover { color: #ef4444; }
"""
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Updated style.css")
