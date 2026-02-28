/* ============================================================
   script.js — Nav, scroll tracking, parallax blobs
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Mobile hamburger toggle ---- */
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('open');
            links.classList.toggle('open');
        });

        // Close mobile menu on link click
        links.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                toggle.classList.remove('open');
                links.classList.remove('open');
            });
        });
    }

    /* ---- Sticky nav shadow on scroll ---- */
    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    /* ---- Active nav link on scroll (intersection observer) ---- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length && navLinks.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        navLinks.forEach((l) => l.classList.remove('active'));
                        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                        if (activeLink) activeLink.classList.add('active');
                    }
                });
            },
            { rootMargin: '-30% 0px -60% 0px' }
        );
        sections.forEach((s) => observer.observe(s));
    }

    /* ---- Parallax blobs on mouse move ---- */
    const blobs = document.querySelectorAll('.bg-blob');
    if (blobs.length) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            blobs.forEach((blob, i) => {
                const factor = (i + 1) * 0.6;
                blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        }, { passive: true });
    }
});
