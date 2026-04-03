import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update navigation links
new_nav = """            <nav class="nav-links" id="navLinks">
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#outside-work" class="nav-link">Outside Work</a>
            </nav>"""
html = re.sub(r'<nav class="nav-links" id="navLinks">.*?</nav>', new_nav, html, flags=re.DOTALL)

# 2. Add Education below Skills (well, proof of skills is in right column currently. Wait, if left sidebar is sticky, user expects Education to be there. But Proof Of Skills is in the right desktop grid! Let's put Education in the left column under Hero.)
education_html = """
            <!-- ===== EDUCATION ===== -->
            <section class="section" id="education" style="margin-top: 3rem;">
                <h2 class="section-title">Education</h2>
                <div class="timeline">
                    <div class="timeline-item" style="padding: 1rem; background: transparent; border: none;">
                        <span class="timeline-date">Expected Jun 2026</span>
                        <h3 style="font-size: 0.9rem;">MBA &amp; Engineering</h3>
                        <p class="timeline-org" style="margin-bottom:0;">HTW Berlin</p>
                    </div>
                    <div class="timeline-item" style="padding: 1rem; background: transparent; border: none; margin-top: -1rem;">
                        <span class="timeline-date">2016 – 2020</span>
                        <h3 style="font-size: 0.9rem;">B.Eng. Electronics &amp; Comm.</h3>
                        <p class="timeline-org" style="margin-bottom:0;">Acropolis Technical Campus</p>
                    </div>
                </div>
            </section>
"""
# Insert after the hero in layout-left
html = html.replace('</section>\n        </div>', '</section>\n' + education_html + '\n        </div>')

# 3. Footer inside page grid
# Move footer from bottom to inside main
footer_match = re.search(r'(<footer class="footer">.*?</footer>)', html, re.DOTALL)
if footer_match:
    footer = footer_match.group(1)
    html = html.replace(footer, '')
    html = html.replace('</main>', f'    {footer}\n    </main>')

# 4. Convert impact-summary to timeline-headline
html = html.replace('class="impact-summary"', 'class="timeline-headline"')

# 5. Convert tools-line to tool-row and tool-tags
def replace_tools(match):
    tools_str = match.group(1)
    tools = [t.strip() for t in tools_str.split(',')]
    tags = '\n'.join([f'<span class="tool-tag">{t}</span>' for t in tools])
    return f'<div class="tool-row">\n{tags}\n</div>'

html = re.sub(r'<p class="tools-line"><strong>Tools:</strong>(.*?)</p>', replace_tools, html, flags=re.DOTALL)

# 6. Merge Projects and Case Studies into Portfolio with Tab Switcher
# Extract case studies content
cs_start = html.find('<section class="section" id="case-studies">')
cs_end = html.find('</section>', cs_start) + len('</section>')
cs_html = html[cs_start:cs_end]

# Extract projects content
proj_start = html.find('<section class="section empty-state" id="projects">')
proj_end = html.find('</section>', proj_start) + len('</section>')
proj_html = html[proj_start:proj_end]

if cs_start != -1 and proj_start != -1:
    portfolio_html = """
            <!-- ===== PORTFOLIO ===== -->
            <section class="section" id="portfolio">
                <h2 class="section-title">Portfolio</h2>
                
                <div class="tab-row">
                    <button class="tab-btn active" data-tab="projects">Projects</button>
                    <button class="tab-btn" data-tab="case-studies">Case Studies</button>
                </div>

                <div class="tab-panel active" id="tab-projects">
                    <div class="content-grid">
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
""" + cs_html.replace('<section class="section" id="case-studies">', '').replace('<h2 class="section-title">Case Studies</h2>', '').replace('</section>', '') + """
                </div>
            </section>
"""
    
    # Remove old case-studies
    html = html[:cs_start] + html[cs_end:]
    # Replace projects with new portfolio
    html = html.replace(proj_html, portfolio_html)

# Add tab switcher JS at the bottom
tab_js = """
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
html = html.replace('</body>', tab_js + '\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# CSS Updates
# max-width
css = css.replace('max-width: var(--content-max);', 'max-width: 1160px;')
css = css.replace('--content-max: 1040px;', '--content-max: 1160px;')

# page grid changes
css = re.sub(r'\.page-grid \{.*?(?=^\})\}', 
""".page-grid {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 0 3.5rem;
    align-items: start;
}""", css, flags=re.DOTALL|re.MULTILINE)

# layout left sticky
css = re.sub(r'\.layout-left \{.*?(?=^\})\}',
""".layout-left {
    position: sticky;
    top: calc(var(--nav-h) + 1.5rem);
    max-height: calc(100vh - var(--nav-h) - 3rem);
    overflow-y: auto;
    scrollbar-width: none;
    padding-right: 0.25rem;
    -ms-overflow-style: none; /* IE and Edge */
}
.layout-left::-webkit-scrollbar { display: none; }""", css, flags=re.DOTALL|re.MULTILINE)

# layout right min-width 0
css = re.sub(r'\.layout-right \{.*?(?=^\})\}',
""".layout-right {
    min-width: 0;
}""", css, flags=re.DOTALL|re.MULTILINE)

# proof of skills grid
css = re.sub(r'\.proof-list \{.*?\}',
""".proof-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
}""", css, flags=re.DOTALL)

# add missing new classes
new_classes = """
/* Footer fix */
.footer {
    grid-column: 1 / -1;
    text-align: center;
    padding: 2.5rem 0 1rem;
    font-size: 0.75rem;
    color: var(--muted);
    opacity: 0.6;
    border-top: 1px solid var(--border);
    margin-top: 1rem;
}

/* Tool tags row inside experience cards */
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
"""
css += new_classes

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updates applied successfully.")
