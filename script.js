(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const STORAGE_KEY_TARGET = 'cosmos_launch_target';
  let targetDate = Number(localStorage.getItem(STORAGE_KEY_TARGET));
  if (!targetDate || targetDate <= Date.now()) {
    targetDate = Date.now() + 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY_TARGET, String(targetDate));
  }

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

  function updateCountdown() {
    const diff = Math.max(0, targetDate - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(mins);
    if (secsEl) secsEl.textContent = pad(secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Stars & Shooting Stars Animation
  const canvas = document.getElementById('cosmos-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let stars = [];
  let shootingStars = [];
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initStars();
  }

  function initStars() {
    const count = Math.min(220, Math.floor((width * height) / 7500));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      twinkleSpeed: Math.random() * 0.015 + 0.004,
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
    }));
  }

  function spawnShootingStar() {
    if (prefersReducedMotion) return;
    shootingStars.push({
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.4,
      len: Math.random() * 90 + 60,
      speed: Math.random() * 7 + 9,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      alpha: 1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Stars & subtle constellation lines near cursor
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      if (!prefersReducedMotion) {
        s.phase += s.twinkleSpeed;
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
      }

      const twinkle = s.alpha * (0.65 + 0.35 * Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(226, 232, 240, ${twinkle.toFixed(3)})`;
      ctx.fill();

      // Constellation connection to mouse
      const dx = s.x - mouse.x;
      const dy = s.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 130) {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(34, 211, 238, ${((1 - dist / 130) * 0.28).toFixed(3)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    // Shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const st = shootingStars[i];
      const ex = st.x - Math.cos(st.angle) * st.len;
      const ey = st.y - Math.sin(st.angle) * st.len;

      const grad = ctx.createLinearGradient(st.x, st.y, ex, ey);
      grad.addColorStop(0, `rgba(255, 255, 255, ${st.alpha})`);
      grad.addColorStop(1, 'rgba(34, 211, 238, 0)');

      ctx.beginPath();
      ctx.moveTo(st.x, st.y);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      st.x += Math.cos(st.angle) * st.speed;
      st.y += Math.sin(st.angle) * st.speed;
      st.alpha -= 0.018;

      if (st.alpha <= 0 || st.x > width + 100 || st.y > height + 100) {
        shootingStars.splice(i, 1);
      }
    }

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  resize();
  draw();

  if (!prefersReducedMotion) {
    setInterval(() => {
      if (Math.random() < 0.65) {
        spawnShootingStar();
      }
    }, 3800);
  }
})();
