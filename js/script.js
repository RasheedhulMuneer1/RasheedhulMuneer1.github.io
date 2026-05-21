document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    // --- Menu Handlers ---
    function toggleMenu() {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // Toggle hamburger/close icon
    }

    function closeMenu() {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
 
    // Hamburger Menu Click Event
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Nav Link Click Handlers (Closes menu on mobile when a link is clicked)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    // Close Menu When Clicking Outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target) && navbar.classList.contains('active')) {
            closeMenu();
        }
    });


    // --- Scroll Event Handler ---
    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;

        // 1. Sticky Header
        header.classList.toggle('sticky', currentScroll > 100);

        // 2. Section Scroll Spy (Active Link Highlight)
        sections.forEach(sec => {
            const offset = sec.offsetTop - 150; 
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (currentScroll >= offset && currentScroll < offset + height) {
                // Remove 'active' from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add 'active' to the corresponding link
                const activeLink = document.querySelector(`.navbar a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
        
        // 3. Close Menu on Scroll (Mobile Only)
        if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
             closeMenu();
        }
    });


    // --- Window Resize Handler ---
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navbar.classList.contains('active')) {
            // Force close menu if resizing to desktop view
            closeMenu();
        }
    });
    
    // Initial active link setting for the first load
    document.querySelector('.navbar a[href="#home"]').classList.add('active');
});
