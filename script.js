document.addEventListener('DOMContentLoaded', () => {
  // 0. Helper: Split text into letters for Anime.js
  function splitText(el) {
    if (!el) return;
    const text = el.innerText;
    el.innerHTML = '';
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.className = char === ' ' ? 'letter space' : 'letter';
      span.innerText = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      el.appendChild(span);
    });
  }
  splitText(document.getElementById('hero-name'));

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinksContainer = document.getElementById('navLinks');

  // 1. Interactive Geometric Background (Anime.js Style)
  const canvas = document.getElementById('geometric-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];
    let mouse = { x: -1000, y: -1000 };

    function init() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      const particleCount = Math.floor((width * height) / 25000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: 0,
          baseY: 0,
          size: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: i % 3 === 0 ? '#ff4b2b' : (i % 3 === 1 ? '#ff9068' : '#333')
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.color === '#333' ? 0.3 : 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Lines
        particles.forEach((p2, j) => {
          if (i === j) return;
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 100) {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 0.2;
            ctx.globalAlpha = (1 - d / 100) * 0.1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(draw);
    }

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('resize', init);
    init();
    draw();
  }

  // 2. Navigation & Sticky States
  function updateNav() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', updateNav, { passive: true });

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinksContainer.classList.toggle('open');
    });
  }

  // 3. SNAPPY ENTRANCE SEQUENCE (Anime.js Style)
  const entranceTl = anime.timeline({
    easing: 'easeOutQuart'
  });

  entranceTl
    .add({
      targets: '.nav',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 800
    })
    .add({
      targets: '.avatar-ring',
      scale: [0.3, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)',
      offset: '-=400'
    })
    .add({
      targets: '.hero-name .letter',
      translateY: [100, 0],
      rotate: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(40),
      duration: 800,
      offset: '-=800'
    })
    .add({
      targets: '.hero-summary, .hero-tagline',
      translateX: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 600,
      offset: '-=600'
    })
    .add({
      targets: '.social-pill',
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(80),
      duration: 500,
      offset: '-=400'
    })
    .add({
      targets: '.kpi-tile',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 600,
      offset: '-=400'
    });

  // 4. SCROLL OBSERVER REVEALS
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        if (section.dataset.revealed) return;
        section.dataset.revealed = 'true';

        const title = section.querySelector('.section-title');
        const items = section.querySelectorAll('.timeline-item, .content-card, .cert-card, .proof-card, .bento-tile, .tool-badge');

        const tl = anime.timeline({
          easing: 'easeOutQuart',
          duration: 800
        });

        if (title) {
          tl.add({
            targets: title,
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 600
          });
        }

        if (items.length > 0) {
          tl.add({
            targets: items,
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(60, { from: 'start' }),
            offset: '-=500'
          });
        }

        // Trigger counts
        const nums = section.querySelectorAll('.kpi-num[data-target]');
        nums.forEach(n => animateValue(n));
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(s => scrollObserver.observe(s));

  function animateValue(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const obj = { v: 0 };
    anime({
      targets: obj,
      v: target,
      round: 1,
      duration: 2000,
      easing: 'easeOutExpo',
      update: () => el.innerText = obj.v + suffix
    });
  }

  // 5. Link Hover Effects (Interactive dots)
  document.querySelectorAll('.nav-link, .btn, .social-pill').forEach(el => {
    el.addEventListener('mouseenter', () => {
      anime({
        targets: el,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
    el.addEventListener('mouseleave', () => {
      anime({
        targets: el,
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  });
});
