document.addEventListener('DOMContentLoaded', function () {

    /* ─── DOM refs ─────────────────────────────────────── */
    const menuIcon   = document.getElementById('menu-icon');
    const navbar     = document.getElementById('navbar');
    const header     = document.querySelector('.header');
    const sections   = document.querySelectorAll('section');
    const navLinks   = document.querySelectorAll('.navbar a');
    const backToTop  = document.getElementById('back-to-top');
    const overlay    = document.getElementById('nav-overlay');

    /* ─── Typing animation ─────────────────────────────── */
    const titles = [
        'Aspiring Software Engineer',
        'Full-Stack Developer',
        'ML Enthusiast',
        'Problem Solver'
    ];
    const titleEl  = document.querySelector('.title-text');
    const cursorEl = document.querySelector('.cursor');
    let titleIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const current = titles[titleIdx];
        if (!titleEl) return;

        if (isDeleting) {
            titleEl.textContent = current.substring(0, charIdx--);
        } else {
            titleEl.textContent = current.substring(0, charIdx++);
        }

        let delay = isDeleting ? 60 : 110;

        if (!isDeleting && charIdx === current.length + 1) {
            isDeleting = true;
            delay = 1800; // pause before deleting
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            titleIdx   = (titleIdx + 1) % titles.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }
    setTimeout(type, 800);

    /* ─── Scroll-reveal (IntersectionObserver) ─────────── */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObs.observe(el));

    /* ─── Mobile menu ──────────────────────────────────── */
    function openMenu() {
        navbar.classList.add('active');
        overlay && overlay.classList.add('active');
        menuIcon.classList.replace('bx-menu', 'bx-x');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        navbar.classList.remove('active');
        overlay && overlay.classList.remove('active');
        menuIcon.classList.replace('bx-x', 'bx-menu');
        document.body.style.overflow = '';
    }
    function toggleMenu() {
        navbar.classList.contains('active') ? closeMenu() : openMenu();
    }

    menuIcon.addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });
    overlay  && overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) closeMenu();
        });
    });

    /* ─── Scroll handler ───────────────────────────────── */
    function onScroll() {
        const y = window.scrollY;

        // sticky header
        header.classList.toggle('sticky', y > 80);

        // back-to-top button
        if (backToTop) backToTop.classList.toggle('visible', y > 400);

        // active nav link (scroll spy)
        let current = '';
        sections.forEach(sec => {
            if (y >= sec.offsetTop - 180) current = sec.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });

        // close mobile menu on scroll
        if (window.innerWidth <= 768 && navbar.classList.contains('active')) closeMenu();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    /* ─── Back to top ──────────────────────────────────── */
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ─── Resize ───────────────────────────────────────── */
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });

    /* ─── Contact form + toast ─────────────────────────── */
    const form  = document.querySelector('.contact-form');
    const toast = document.getElementById('toast');

    if (form && toast) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const btn = form.querySelector('.message-btn');
            btn.textContent = 'Sending…';
            btn.disabled = true;

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form)
                });
                if (res.ok) {
                    showToast('✓', "Message sent! I'll get back to you soon.");
                    form.reset();
                } else {
                    showToast('!', 'Something went wrong. Please try again.');
                }
            } catch {
                showToast('!', 'Network error. Please try again.');
            } finally {
                btn.textContent = 'Send Message';
                btn.disabled = false;
            }
        });
    }

    function showToast(icon, msg) {
        if (!toast) return;
        toast.innerHTML = `<i class='bx bx-check-circle'></i> ${msg}`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }

    /* ─── Smooth keyboard nav ──────────────────────────── */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && navbar.classList.contains('active')) closeMenu();
    });
});
