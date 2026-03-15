document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinksContainer = document.getElementById('navLinks');

  function updateNavShadow() {
    if (!nav) return;
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  updateNavShadow();
  window.addEventListener('scroll', updateNavShadow, { passive: true });

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinksContainer.classList.toggle('open');
    });
  }

  // Smooth scroll for in-page links + close mobile nav
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (navLinksContainer && navToggle) {
        navLinksContainer.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  });

  // Helper for KPI count-up
  function startCount(el) {
    if (!el || el.dataset.counted === 'true') return;

    const target = parseFloat(el.getAttribute('data-target') || '0');
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1200;
    const startTime = performance.now();

    el.dataset.counted = 'true';

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = `${value}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${target}${suffix}`;
      }
    }

    requestAnimationFrame(tick);
  }

  const sectionIds = [
    'hero',
    'experience',
    'skills',
    'certifications',
    'education',
    'portfolio',
    'testimonials',
    'outside-work',
    'connect',
  ];

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window) {
    // Active nav link on scroll
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0.15,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    // Fade-in on scroll for cards
    const fadeEls = document.querySelectorAll('.scroll-fade');
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
      }
    );

    fadeEls.forEach((el) => fadeObserver.observe(el));

    // KPI count-up when stats bar comes into view
    const kpiBar = document.querySelector('.kpi-bar');
    const kpiNums = document.querySelectorAll('.kpi-num[data-target]');

    if (kpiBar && kpiNums.length) {
      const kpiObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            kpiNums.forEach((el) => startCount(el));
            observer.disconnect();
          });
        },
        {
          threshold: 0.4,
        }
      );

      kpiObserver.observe(kpiBar);
    }
  } else {
    // Basic fallback: show fade elements immediately
    document.querySelectorAll('.scroll-fade').forEach((el) => {
      el.classList.add('in-view');
    });
  }
});
