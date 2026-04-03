import re

html_content = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uttam Darekar — Product Analyst | Breaking into PM</title>
    <meta name="description"
        content="Uttam Darekar — Product Analyst breaking into PM, based in Berlin, Germany." />
    <link rel="icon" href="assets/images/page_icon.png" type="image/png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/style.css?v=4" />
</head>

<body>

    <!-- Ambient blobs -->
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>
    <div class="bg-blob blob-3"></div>

    <!-- ===== STICKY HEADER NAV ===== -->
    <header class="nav" id="nav">
        <div class="nav-inner">
            <a href="#hero" class="nav-logo">UD</a>
            <nav class="nav-links" id="navLinks">
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#education" class="nav-link">Education</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#outside-work" class="nav-link">Outside Work</a>
            </nav>
            <button class="nav-toggle" id="navToggle" aria-label="Menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <!-- ===== PAGE GRID ===== -->
    <main class="page page-grid">

        <!-- ========================
             LEFT COLUMN (sticky)
             ======================== -->
        <aside class="layout-left">

            <!-- HERO -->
            <section class="hero" id="hero">
                <div class="avatar-ring">
                    <img src="assets/images/profile.png" alt="Uttam Darekar" class="avatar" />
                </div>
                <h1 class="hero-name">Uttam Darekar</h1>
                <p class="hero-role">Product Analyst | Breaking into PM<br><span>Product Analytics</span></p>
                <p class="hero-summary">I build trusted metrics, analytics products, and automation that turn data into decisions.</p>
                <p class="hero-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Berlin, Germany
                </p>
                <div class="social-row">
                    <a href="mailto:12uttamdarekar@gmail.com" class="social-pill" aria-label="Email">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/uttam-darekar/" target="_blank" rel="noopener"
                        class="social-pill" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 10.268h-3v-4.5c0-1.074-.021-2.455-1.496-2.455-1.498 0-1.727 1.17-1.727 2.378v4.577h-3v-9h2.881v1.233h.041c.401-.762 1.379-1.566 2.839-1.566 3.036 0 3.595 2 3.595 4.6v4.733z" />
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </section>

            <!-- SKILLS -->
            <section class="section" id="skills">
                <h2 class="section-title">Skills</h2>
                <div class="chip-grid">
                    <span class="chip">Power BI</span>
                    <span class="chip">DAX</span>
                    <span class="chip">SQL</span>
                    <span class="chip">BigQuery</span>
                    <span class="chip">Looker</span>
                    <span class="chip">Python</span>
                    <span class="chip">Data Quality</span>
                    <span class="chip">KPI Ownership</span>
                    <span class="chip">Stakeholder Mgmt</span>
                    <span class="chip">Agile / Scrum</span>
                    <span class="chip">JIRA</span>
                    <span class="chip">Confluence</span>
                </div>
            </section>

            <!-- EDUCATION -->
            <section class="section" id="education">
                <h2 class="section-title">Education</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="timeline-date">Expected Jun 2026</span>
                        <h3>MBA &amp; Engineering</h3>
                        <p class="timeline-org">HTW Berlin</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date">2016 – 2020</span>
                        <h3>B.Eng. Electronics &amp; Communication</h3>
                        <p class="timeline-org">Acropolis Technical Campus · Indore</p>
                    </div>
                </div>
            </section>

            <!-- CERTIFICATIONS -->
            <section class="section" id="certifications">
                <h2 class="section-title">Certifications</h2>
                <div class="chip-grid">
                    <span class="chip chip--accent">Google Data Analytics</span>
                    <span class="chip chip--accent">Google Business Intelligence</span>
                    <span class="chip chip--accent">Agile Product Dev</span>
                    <span class="chip chip--accent">PM Foundations</span>
                </div>
            </section>

        </aside>

        <!-- ========================
             RIGHT COLUMN
             ======================== -->
        <div class="layout-right">

            <!-- EXPERIENCE -->
            <section class="section" id="experience">
                <h2 class="section-title">Experience</h2>
                <div class="timeline">

                    <div class="timeline-item">
                        <span class="timeline-date">Jul 2024 – Present</span>
                        <h3>Product Analyst <span class="role-badge">Working Student</span></h3>
                        <p class="timeline-org">Heartbeat AI GmbH (1KOMMA5°) · Berlin</p>
                        <p class="timeline-headline">Restored stakeholder trust by designing end-to-end data validation frameworks across 3+ international markets.</p>
                        <ul>
                            <li>Architected BigQuery-based analytics pipelines serving leadership and product teams, ensuring reliable, analytics-ready datasets for strategic decision-making</li>
                            <li>Drove KPI standardisation and reporting governance, synthesising cross-market trends into evidence-based recommendations for C-level stakeholders</li>
                            <li>Pioneered adoption of LLM-powered automation workflows, eliminating recurring manual data tasks and increasing analyst capacity for high-impact reporting</li>
                            <li>Integrated automated tooling across internal platforms, broadening data accessibility and enabling faster resolution of operational queries</li>
                        </ul>
                        <div class="tool-row">
                            <span class="tool-tag">BigQuery</span>
                            <span class="tool-tag">SQL</span>
                            <span class="tool-tag">LLM Workflows</span>
                            <span class="tool-tag">Data Validation</span>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-date">Feb – Mar 2025</span>
                        <h3>Project Management Intern</h3>
                        <p class="timeline-org">Meyer Werft (Disney Cruise Ship Project) · Wismar</p>
                        <p class="timeline-headline">Reduced decision cycle time by 20% by orchestrating visibility for 20+ teams.</p>
                        <ul>
                            <li>Orchestrated milestone tracking and delivery visibility for 20+ cross-functional engineering &amp; logistics teams</li>
                            <li>Identified and resolved deployment bottlenecks to keep project timelines on track</li>
                            <li>Facilitated seamless collaboration across multiple operational departments</li>
                        </ul>
                        <div class="tool-row">
                            <span class="tool-tag">JIRA</span>
                            <span class="tool-tag">Confluence</span>
                            <span class="tool-tag">Agile</span>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-date">Nov 2021 – Sep 2024</span>
                        <h3>Product Analyst</h3>
                        <p class="timeline-org">Infosys Ltd (ULTA Beauty Loyalty Program) · Bengaluru</p>
                        <p class="timeline-headline">Reduced manual workload by 35% by building Power BI reporting infrastructure serving millions of customers.</p>
                        <ul>
                            <li>Designed and scaled Power BI reporting infrastructure using DAX &amp; Power Query, automating pipelines that cut manual workload by 35%</li>
                            <li>Defined KPI frameworks and business logic in partnership with senior marketing stakeholders, owning end-to-end report accuracy</li>
                            <li>Standardised reporting definitions across business units for a loyalty platform serving millions of customers</li>
                        </ul>
                        <div class="tool-row">
                            <span class="tool-tag">Power BI</span>
                            <span class="tool-tag">DAX</span>
                            <span class="tool-tag">Power Query</span>
                            <span class="tool-tag">KPI Governance</span>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-date">Oct 2020 – Sep 2021</span>
                        <h3>System Engineer</h3>
                        <p class="timeline-org">Abacus Consultancy Services · Indore</p>
                        <p class="timeline-headline">Accelerated deployment cycles by designing scalable backend services.</p>
                        <ul>
                            <li>Designed scalable backend services for real-time order tracking, reducing deployment delays by 25%</li>
                            <li>Translated client requirements into technical documentation, bridging business needs and engineering execution</li>
                        </ul>
                    </div>

                </div>
            </section>

            <!-- PORTFOLIO (Projects + Case Studies merged) -->
            <section class="section" id="portfolio">
                <h2 class="section-title">Portfolio</h2>

                <!-- Tab switcher -->
                <div class="tab-row">
                    <button class="tab-btn active" data-tab="projects">Projects</button>
                    <button class="tab-btn" data-tab="case-studies">Case Studies</button>
                </div>

                <!-- Projects tab -->
                <div class="tab-panel active" id="tab-projects">
                    <div class="content-grid">
                        <div class="content-card">
                            <span class="content-card-tag">Capstone</span>
                            <h3>KiSure — Anti-Locking System</h3>
                            <p>Led full product lifecycle from ideation to business planning. Conducted user research, supported UAT, validated technical feasibility, and developed a 5-year go-to-market strategy. Received professor's recommendation for exceptional performance.</p>
                        </div>
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

                <!-- Case Studies tab -->
                <div class="tab-panel" id="tab-case-studies">
                    <div class="content-grid">
                        <div class="content-card">
                            <span class="content-card-tag timeline-date-inline">Dec 2024</span>
                            <h3>Optimizing Net Working Capital: Strategic Financial Analysis (Pharma)</h3>
                            <p class="timeline-org">Hochschule für Technik und Wirtschaft Berlin</p>
                            <ul style="margin-top:0.5rem;">
                                <li>Benchmarked 10 global pharma companies on NWC efficiency (DSO, inventory turns, AR turns, cash return ratio)</li>
                                <li>Built scoring model to rank performance and target lower-quartile improvements</li>
                                <li>Proposed strategies to free cash flow, reduce capital costs, and improve liquidity</li>
                            </ul>
                        </div>
                        <div class="content-card">
                            <span class="content-card-tag timeline-date-inline">Oct 2024</span>
                            <h3>Bombardier C-Series (A220): Project Turnaround &amp; Delivery Insights</h3>
                            <p class="timeline-org">Hochschule für Technik und Wirtschaft Berlin</p>
                            <ul style="margin-top:0.5rem;">
                                <li>Analyzed lifecycle risks and financial delivery improvements</li>
                                <li>Produced risk + strategy insights using benchmarking and structured project planning</li>
                            </ul>
                        </div>
                        <!-- Dynamic case studies injected here -->
                        <div class="content-card content-card--add admin-only" id="addCaseStudy">
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

            <!-- OUTSIDE WORK -->
            <section class="section" id="outside-work">
                <h2 class="section-title">Outside Work</h2>
                <div class="outside-grid">
                    <div class="outside-card">
                        <div class="outside-icon">📷</div>
                        <h3>Photography</h3>
                        <p>I train my eye for composition, patterns, and storytelling.</p>
                    </div>
                    <div class="outside-card">
                        <div class="outside-icon">🍳</div>
                        <h3>Cooking</h3>
                        <p>Iterative experiments: inputs, constraints, and repeatable outcomes.</p>
                    </div>
                    <div class="outside-card">
                        <div class="outside-icon">🤖</div>
                        <h3>AI Agents</h3>
                        <p>I prototype new models/agents and translate them into practical workflows.</p>
                    </div>
                </div>

                <!-- Blogs / Achievements / Hobbies – add-only placeholders -->
                <div class="collapsible-extra admin-only">
                    <div class="content-grid" style="margin-top:1.25rem;">
                        <div class="content-card content-card--add">
                            <a href="edit.html#blogs" class="add-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                <span>Add Blog Post</span>
                            </a>
                        </div>
                        <div class="content-card content-card--add">
                            <a href="edit.html#achievements" class="add-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                <span>Add Achievement</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <!-- FOOTER — must be grid-column: 1/-1 to span both columns -->
        <footer class="footer">
            <p>© 2025 Uttam Darekar · Built with ♥ in Berlin</p>
        </footer>

    </main>

    <script src="assets/js/script.js"></script>

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

    <!-- Load saved content from localStorage -->
    <script>
        /* Admin Role Toggle */
        const isAdmin = false; // Set to true to see "Add" buttons and empty sections
        if (isAdmin) {
            document.body.classList.add('is-admin');
        }

        (function () {
            const STORAGE_KEY = 'uttam_page_content';
            let items = [];
            try { items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { }

            const sectionMap = {
                'projects': { gridId: 'tab-projects', addId: 'addProject' },
                'case-studies': { gridId: 'tab-case-studies', addId: 'addCaseStudy' },
            };

            Object.keys(sectionMap).forEach((key) => {
                const { gridId, addId } = sectionMap[key];
                const panel = document.getElementById(gridId);
                if (!panel) return;
                const grid = panel.querySelector('.content-grid');
                if (!grid) return;

                const sectionItems = items.filter((item) => item.section === key);
                if (!sectionItems.length) return;

                const addCard = document.getElementById(addId);

                sectionItems.forEach((item) => {
                    const card = document.createElement('div');
                    card.className = 'content-card';
                    card.innerHTML = `
                        ${item.tag ? `<span class="content-card-tag">${escapeHtml(item.tag)}</span>` : ''}
                        <h3>${escapeHtml(item.title)}</h3>
                        ${item.description ? `<p>${escapeHtml(item.description)}</p>` : ''}
                        ${item.link ? `<a href="${escapeHtml(item.link)}" target="_blank" rel="noopener" style="display:inline-block;margin-top:0.5rem;font-size:0.78rem;color:var(--accent);text-decoration:underline;">View →</a>` : ''}
                    `;
                    grid.insertBefore(card, addCard);
                });
            });

            function escapeHtml(text) {
                const div = document.createElement('div');
                div.textContent = text || '';
                return div.innerHTML;
            }
        })();
    </script>
</body>

</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Updated index.html")
