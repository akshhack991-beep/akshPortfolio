/**
 * script.js
 * Core interactive features for Aksh Kumar's Developer Portfolio
 * Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initHeaderScroll();
  initActiveNav();
  initBackToTop();
  initProjectFiltering();
  initContactForm();
  initClipboardButtons();
  initResumeTabs();
  initCustomCursor();
  initScrollReveal();
  initRoleRotator();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  if (!themeToggleBtns.length) return;

  // Determine saved or system theme
  const savedTheme = localStorage.getItem('aksh_theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default to dark

  applyTheme(initialTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('aksh_theme', newTheme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      // Update icon: Sun for dark mode (click to switch to light), Moon for light mode
      if (theme === 'dark') {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>`;
      } else {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>`;
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation & Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  if (!hamburgerBtn || !mobileDrawer) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !mobileDrawer.classList.contains('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    mobileDrawer.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  hamburgerBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking mobile links
  const mobileLinks = mobileDrawer.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      toggleMenu(true);
    }
  });

  // Close when window resized past breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && mobileDrawer.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

/* --------------------------------------------------------------------------
   3. Header Sticky & Shadow on Scroll
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. Active Navigation Indicator
   -------------------------------------------------------------------------- */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   5. Back To Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const bttBtn = document.querySelector('.back-to-top-btn');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      bttBtn.classList.add('visible');
    } else {
      bttBtn.classList.remove('visible');
    }
  }, { passive: true });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   6. Project Filtering (Projects Page)
   -------------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Contact Form Client-side Validation & Mailto Action
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const formAlert = document.getElementById('formAlert');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your full name');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'Please enter a subject');
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please enter a message (at least 10 characters)');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (!isValid) return;

    // Submit state for button
    const submitBtn = document.getElementById('submitFormBtn');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Send Message';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="animation: spin 1s linear infinite; display: inline-block; vertical-align: middle; margin-right: 0.5rem;" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        Sending...
      `;
    }

    if (formAlert) {
      formAlert.style.display = 'none';
      formAlert.className = 'form-alert';
    }

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        if (formAlert) {
          formAlert.className = 'form-alert success';
          formAlert.innerHTML = `
            <strong>Message Sent Successfully!</strong> Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>. Your message was delivered straight to Aksh's inbox (<code>kitkat99344@gmail.com</code>). I will get back to you shortly!
          `;
          formAlert.style.display = 'block';
        }
        form.reset();
      } else {
        throw new Error(data.message || 'Submission could not be completed.');
      }
    } catch (err) {
      if (formAlert) {
        formAlert.className = 'form-alert error';
        formAlert.innerHTML = `
          <strong>Message could not be sent:</strong> ${escapeHtml(err.message || 'Network error')}. 
          Please try again or email Aksh directly at <a href="mailto:kitkat99344@gmail.com" style="text-decoration: underline; color: inherit;">kitkat99344@gmail.com</a>.
        `;
        formAlert.style.display = 'block';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }
  });

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  function showError(input, msg) {
    input.classList.add('is-invalid');
    const feedback = input.parentElement.querySelector('.form-feedback');
    if (feedback) {
      feedback.textContent = msg;
      feedback.className = 'form-feedback error';
    }
  }

  function clearError(input) {
    input.classList.remove('is-invalid');
    const feedback = input.parentElement.querySelector('.form-feedback');
    if (feedback) {
      feedback.textContent = '';
      feedback.className = 'form-feedback';
    }
  }
}

/* --------------------------------------------------------------------------
   8. Clipboard Copy Helper (for Email/Phone)
   -------------------------------------------------------------------------- */
function initClipboardButtons() {
  const copyBtns = document.querySelectorAll('.btn-copy-clipboard');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-clipboard');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg> Copied!`;
        btn.classList.add('copied');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Copy failed', err);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Resume View Mode Tabs (Web CV vs Embedded PDF)
   -------------------------------------------------------------------------- */
function initResumeTabs() {
  const tabBtns = document.querySelectorAll('.resume-tab-btn');
  const webDocSheet = document.getElementById('resumeDocSheet');
  const pdfPanel = document.getElementById('resumePdfPanel');

  if (!tabBtns.length || !webDocSheet || !pdfPanel) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      if (targetId === 'resumeDocSheet') {
        webDocSheet.style.display = 'block';
        pdfPanel.classList.remove('active');
      } else {
        webDocSheet.style.display = 'none';
        pdfPanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. Developer Precision Follower Halo Cursor
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  // Only activate on devices with a mouse/trackpad pointer and no reduced motion
  const isFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isFinePointer || prefersReducedMotion) return;

  // Create cursor DOM elements
  const halo = document.createElement('div');
  halo.className = 'cursor-halo';
  halo.setAttribute('aria-hidden', 'true');

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  dot.setAttribute('aria-hidden', 'true');

  document.body.appendChild(halo);
  document.body.appendChild(dot);
  document.body.classList.add('has-custom-cursor');

  let mouseX = -100;
  let mouseY = -100;
  let haloX = -100;
  let haloY = -100;
  let isVisible = false;
  let isHovering = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      halo.classList.add('is-visible');
      dot.classList.add('is-visible');
      haloX = mouseX;
      haloY = mouseY;
    }

    // Micro dot snaps immediately
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  window.addEventListener('mouseleave', () => {
    isVisible = false;
    halo.classList.remove('is-visible');
    dot.classList.remove('is-visible');
  });

  window.addEventListener('mouseenter', () => {
    isVisible = true;
    halo.classList.add('is-visible');
    dot.classList.add('is-visible');
  });

  window.addEventListener('mousedown', () => {
    halo.classList.add('is-clicking');
  });

  window.addEventListener('mouseup', () => {
    halo.classList.remove('is-clicking');
  });

  // Smooth lerp trailing loop for halo follower
  function renderCursor() {
    if (isVisible) {
      haloX += (mouseX - haloX) * 0.18;
      haloY += (mouseY - haloY) * 0.18;

      halo.style.left = `${haloX}px`;
      halo.style.top = `${haloY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Dynamic interactive hover states
  const interactiveSelector = 'a, button, input, textarea, select, [role="button"], .project-card, .skill-item-row, .skill-badge, .stat-item, .workshop-card, .preview-stat-card, .filter-tab-btn, .resume-tab-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      if (!isHovering) {
        isHovering = true;
        halo.classList.add('is-hovering');
        dot.classList.add('is-hovering');
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      isHovering = false;
      halo.classList.remove('is-hovering');
      dot.classList.remove('is-hovering');
    }
  });
}

/* --------------------------------------------------------------------------
   11. Scroll Reveal Animations (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const targetSelectors = [
    '.glass-card',
    '.project-card',
    '.skill-category-card',
    '.workshop-card',
    '.preview-stat-card',
    '.contact-info-card'
  ];

  const elements = document.querySelectorAll(targetSelectors.join(', '));
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  elements.forEach((el) => {
    // Keep above-the-fold elements visible immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      return;
    }
    el.classList.add('reveal-init');
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   12. Smooth Role Cross-Fade Rotator for Hero Subtitle
   -------------------------------------------------------------------------- */
function initRoleRotator() {
  const el = document.getElementById('roleText');
  if (!el) return;

  const roles = [
    'Aspiring Software & Web Developer',
    'BCA Student @ Patna University',
    'Front-End Web Developer',
    'Python & JavaScript Practitioner'
  ];

  let roleIndex = 0;

  // Gentle, calm 3.8s interval cross-fade
  setInterval(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';

    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      el.textContent = roles[roleIndex];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 320);
  }, 3800);
}



