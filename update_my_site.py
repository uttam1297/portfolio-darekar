import re

# -------------
# INDEX.HTML
# -------------
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Navigation Links
nav_old = """            <nav class="nav-links" id="navLinks">
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#case-studies" class="nav-link">Case Studies</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#outside-work" class="nav-link">Outside Work</a>
                <a href="#blogs" class="nav-link admin-only">Blogs</a>
                <a href="#achievements" class="nav-link admin-only">Achievements</a>
            </nav>"""
nav_new = """            <nav class="nav-links" id="navLinks">
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#outside-work" class="nav-link">Outside Work</a>
            </nav>"""
html = html.replace(nav_old, nav_new)

# 2. Add Education Section into the left layout
# Notice: the Hero `<section class="hero" id="hero">` ends exactly at `</section>\n        </div>`.
edu_section = """            </section>

            <!-- ===== EDUCATION ===== -->
            <section class="section" id="education" style="margin-top: 1rem;">
                <h2 class="section-title">Education</h2>
                <div class="timeline" style="gap:0.5rem">
                    <div class="timeline-item" style="padding: 1rem; background: transparent; border: none;">
                        <span class="timeline-date">Expected Mar 2026</span>
                        <h3 style="font-size: 0.95rem;">MBA & Engineering</h3>
                        <p class="timeline-org" style="margin-bottom:0;">HTW Berlin</p>
                    </div>
                    <div class="timeline-item" style="padding: 0 1rem 1rem 1rem; background: transparent; border: none; margin-top: -1rem;">
                        <span class="timeline-date">2016 – 2020</span>
                        <h3 style="font-size: 0.95rem;">B.Eng. Electronics & Comm.</h3>
                        <p class="timeline-org" style="margin-bottom:0;">Acropolis Technical Campus</p>
                    </div>
                </div>
            </section>
        </div>"""
html = re.sub(r'</section>\s*</div>', edu_section, html, count=1, flags=re.DOTALL)

# 3. Rename .impact-summary to .timeline-headline
html = html.replace('class="impact-summary"', 'class="timeline-headline"')

# 4. Turn tools-line into tool pills
def replace_tools(m):
    tools = [t.strip() for t in m.group(1).split(',')]
    pills = '\n'.join([f'                                <span class="tool-tag">{tool}</span>' for tool in tools])
    return f'<div class="tool-row">\n{pills}\n                            </div>'

html = re.sub(r'<p class="tools-line">.*?<strong>Tools:</strong>\s*(.*?)</p>', replace_tools, html, flags=re.DOTALL)

# 5. Merge Projects & Case Studies into Portfolio
# We must capture `#case-studies` entirely and `#projects` entirely.
portfolio_tab_html = """
                <!-- ===== PORTFOLIO ===== -->
                <section class="section" id="portfolio">
                    <h2 class="section-title">Portfolio</h2>
                    
                    <div class="tab-row">
                        <button class="tab-btn active" data-tab="projects">Projects</button>
                        <button class="tab-btn" data-tab="case-studies">Case Studies</button>
                    </div>
                    
                    <div class="tab-panel active" id="tab-projects">
                        <div class="content-grid" id="projects-grid">
                            <!-- Dynamic projects injected here by localStorage script -->
                            <div class="content-card content-card--add admin-only" id="addProject">
                                <a href="edit.html#projects" class="add-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    <span>Add Project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tab-panel" id="tab-case-studies">
                        <div class="content-grid" id="case-studies-grid">
                            <div class="content-card">
                                <span class="content-card-tag">Dec 2024</span>
                                <h3>Optimizing Net Working Capital: Strategic Financial Analysis (Pharma)</h3>
                                <p class="cs-university" style="font-size: 0.8rem; color: var(--muted); margin-bottom: 0.75rem; font-weight: 500;">Hochschule für Technik und Wirtschaft Berlin</p>
                                <ul class="cs-bullets" style="font-size: 0.83rem; color: var(--muted); margin-bottom: 1.25rem; padding-left: 1.2rem; line-height: 1.5;">
                                    <li>Benchmarked 10 global pharma companies on NWC efficiency (DSO, inventory turns, AR turns, cash return ratio)</li>
                                    <li>Built scoring model to rank performance and target lower-quartile improvements</li>
                                    <li>Proposed strategies to free cash flow, reduce capital costs, and improve liquidity</li>
                                </ul>
                                <button class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; display: inline-flex; border: 1px solid var(--border); border-radius: 999px; background: transparent; color: var(--text); cursor: pointer;" onclick="document.getElementById('cs-modal-1').showModal()">Open Details</button>
                            </div>

                            <div class="content-card" style="margin-top: 1rem">
                                <span class="content-card-tag">Oct 2024</span>
                                <h3>Bombardier C-Series (A220): Project Turnaround & Delivery Insights</h3>
                                <p class="cs-university" style="font-size: 0.8rem; color: var(--muted); margin-bottom: 0.75rem; font-weight: 500;">Hochschule für Technik und Wirtschaft Berlin</p>
                                <ul class="cs-bullets" style="font-size: 0.83rem; color: var(--muted); margin-bottom: 1.25rem; padding-left: 1.2rem; line-height: 1.5;">
                                    <li>Analyzed lifecycle risks: financial pressures, technical complexity, supply chain constraints, stakeholders</li>
                                    <li>Assessed Airbus turnaround strategy: cost optimization, rebranding, execution improvements</li>
                                    <li>Produced risk + strategy insights using benchmarking and structured project planning</li>
                                </ul>
                                <button class="btn btn-secondary btn-sm" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; display: inline-flex; border: 1px solid var(--border); border-radius: 999px; background: transparent; color: var(--text); cursor: pointer;" onclick="document.getElementById('cs-modal-2').showModal()">Open Details</button>
                            </div>

                            <div class="content-card content-card--add admin-only" id="addCaseStudy" style="margin-top: 1rem">
                                <a href="edit.html#case-studies" class="add-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    <span>Add Case Study</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
"""

# Delete the separate #case-studies section
cs_start = html.find('<section class="section" id="case-studies">')
if cs_start != -1:
    cs_end = html.find('</section>', cs_start) + len('</section>')
    html = html[:cs_start] + html[cs_end:]

# Replace the separate #projects section with #portfolio
proj_start = html.find('<section class="section empty-state" id="projects">')
if proj_start != -1:
    proj_end = html.find('</section>', proj_start) + len('</section>')
    html = html[:proj_start] + portfolio_tab_html + html[proj_end:]

# Add JS tab logic before closing body
tab_logic = """
    <!-- Tab switcher logic -->
    <script>
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                const portfolio = document.getElementById('portfolio');

                portfolio.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                portfolio.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                document.getElementById('tab-' + tab).classList.add('active');
            });
        });
    </script>
"""
html = html.replace('</body>', tab_logic + '\n</body>')

# Handle dynamic JS injection container updates
js_target = """        const sectionMap = {
            'projects': 'projects',
            'case-studies': 'case-studies', // Note: Case studies already has static HTML, but any dynamic ones added via edit will be injected
            'blogs': 'blogs',
            'achievements': 'achievements',
            'outside-work': 'hobbies' // Hobbies from storage mapped to outside-work
        };"""
js_new = """        const sectionMap = {
            'projects': { containerId: 'projects-grid', addId: 'addProject' },
            'case-studies': { containerId: 'case-studies-grid', addId: 'addCaseStudy' },
            'blogs': { containerId: 'blogs', addId: null },
            'achievements': { containerId: 'achievements', addId: null },
            'outside-work': { containerId: 'outside-work', addId: null }
        };"""
html = html.replace(js_target, js_new)

js_target2 = """        Object.keys(sectionMap).forEach((key) => {
            const section = document.getElementById(key);
            if (!section) return;

            // For bento grid/proof grid/content grid
            let grid = section.querySelector('.content-grid') || section.querySelector('.bento-grid');
            if (!grid && key === 'case-studies') {
                grid = section.querySelector('.case-study-list');
            }
            if (!grid) return;

            const sectionItems = items.filter((item) => item.section === sectionMap[key]);

            // Hide section if empty (unless admin)
            // Note: For case-studies and outside-work, there's always static HTML, so they aren't empty. 
            // Only projects, blogs, achievements use empty-state dynamically here.
            if (section.classList.contains('empty-state')) {
                if (sectionItems.length > 0) {
                    section.classList.remove('empty-state');
                }
            }

            if (!sectionItems.length) return;

            const addCard = grid.querySelector('.content-card--add');"""

js_new2 = """        Object.keys(sectionMap).forEach((key) => {
            const mapValue = sectionMap[key];
            const sectionName = mapValue.containerId ? key : sectionMap[key];
            
            const container = document.getElementById(mapValue.containerId);
            if (!container) return;

            // Extract the section string. 'projects', 'case-studies' map nicely already. 'hobbies' maps to 'outside-work' in storage
            const targetSectionString = key === 'outside-work' ? 'hobbies' : key;
            const sectionItems = items.filter((item) => item.section === targetSectionString);

            if (!sectionItems.length) return;

            const addCard = mapValue.addId ? document.getElementById(mapValue.addId) : container.querySelector('.content-card--add');"""
# Only replace if we find it
if js_target2 in html:
    html = html.replace(js_target2, js_new2)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
    
# -------------
# STYLE.CSS
# -------------
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Expand Content Max
css = css.replace('--content-max: 1040px;', '--content-max: 1160px;')
# 2. Fix layouts
css = re.sub(r'\.layout-left \{[\s\S]*?\}', """.layout-left {
    position: sticky;
    top: calc(var(--nav-h) + 1.5rem);
    max-height: calc(100vh - var(--nav-h) - 3rem);
    overflow-y: auto;
    scrollbar-width: none;
    padding-right: 0.25rem;
    -ms-overflow-style: none;
}
.layout-left::-webkit-scrollbar { display: none; }""", css)

css += """
.layout-right {
    min-width: 0;
}
"""

css = re.sub(r'\.proof-list \{[\s\S]*?\}', """.proof-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
}""", css)

tool_css = """
/* Tool tags row */
.tool-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.8rem;
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
.timeline-headline {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.6rem;
    line-height: 1.5;
}

/* Tabs */
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

/* Make sure footer is 100% wide at bottom */
.footer {
    grid-column: 1 / -1;
}

/* Projects card grid style missing */
.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
}
.content-card--add {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130px;
    border-style: dashed;
    border-color: rgba(255, 255, 255, 0.1);
    background: transparent;
    border-radius: var(--radius);
}
.content-card--add:hover {
    border-color: var(--accent);
    background: rgba(124, 92, 252, 0.04);
}
.add-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    text-decoration: none;
    color: var(--muted);
}
.add-link svg { width: 26px; height: 26px; }
.content-card--add:hover .add-link { color: var(--accent); }
"""
css += tool_css
with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
