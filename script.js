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

  // --- ANIME.JS ANIMATIONS ---

  // 1. Hero Entrance Sequence
  const heroTl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
  });

  heroTl
    .add({
      targets: '.avatar-ring',
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, .8)'
    })
    .add({
      targets: '.hero-name',
      translateY: [20, 0],
      opacity: [0, 1],
      offset: '-=800'
    })
    .add({
      targets: '.hero-summary',
      translateY: [20, 0],
      opacity: [0, 1],
      offset: '-=700'
    })
    .add({
      targets: '.hero-tagline',
      translateY: [20, 0],
      opacity: [0, 1],
      offset: '-=700'
    })
    .add({
      targets: '.social-pill',
      translateY: [10, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      offset: '-=600'
    })
    .add({
      targets: '.hero-cv-btn',
      scale: [0.9, 1],
      opacity: [0, 1],
      offset: '-=500'
    });

  // 2. Avatar subtle float
  anime({
    targets: '.avatar',
    translateY: [-5, 5],
    duration: 3000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

  // 3. KPI Count-up with anime.js
  function startKpiAnimation(el) {
    if (!el || el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    const target = parseFloat(el.getAttribute('data-target') || '0');
    const suffix = el.getAttribute('data-suffix') || '';

    const obj = { value: 0 };
    anime({
      targets: obj,
      value: target,
      round: 1,
      easing: 'easeOutExpo',
      duration: 2000,
      update: function () {
        el.innerHTML = obj.value + suffix;
      }
    });
  }

  // 4. Intersection Observer for Scroll Animations
  const sectionIds = [
    'experience',
    'skills',
    'certifications',
    'education',
    'portfolio',
    'testimonials',
    'outside-work',
    'connect',
  ];

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        // Animate section title
        const title = entry.target.querySelector('.section-title');
        if (title && !title.dataset.animated) {
          title.dataset.animated = 'true';
          anime({
            targets: title,
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
          });
        }

        // Specific animations per section
        if (id === 'hero') {
          // Already handled by initial timeline
        } else if (entry.target.classList.contains('section')) {
          // Animate children items (timeline items, cards, etc.)
          const items = entry.target.querySelectorAll('.timeline-item, .content-card, .cert-card, .proof-card, .bento-tile, .testimonial-card');
          if (items.length > 0 && !entry.target.dataset.itemsAnimated) {
            entry.target.dataset.itemsAnimated = 'true';
            anime({
              targets: items,
              translateY: [30, 0],
              opacity: [0, 1],
              delay: anime.stagger(100),
              duration: 800,
              easing: 'easeOutExpo'
            });
          }
        }

        // Special case for KPI bar
        if (entry.target.querySelector('.kpi-bar')) {
          const kpiNums = entry.target.querySelectorAll('.kpi-num[data-target]');
          kpiNums.forEach(num => startKpiAnimation(num));
        }
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section, .hero').forEach(s => scrollObserver.observe(s));

  // 5. Active Nav Link on Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.15 });

  sections.forEach(s => navObserver.observe(s));
});


