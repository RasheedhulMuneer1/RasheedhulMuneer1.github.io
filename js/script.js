// document.addEventListener('DOMContentLoaded', function() {
//     // DOM Elements
//     const menuIcon = document.getElementById('menu-icon');
//     const navbar = document.getElementById('navbar');
//     const header = document.querySelector('.header');
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.navbar a');

//     // Mobile Menu Toggle Function
//     function toggleMenu() {
//         navbar.classList.toggle('active');
//         menuIcon.classList.toggle('bx-x');
//         document.body.classList.toggle('no-scroll');
//     }

//     // Close Menu Function
//     function closeMenu() {
//         navbar.classList.remove('active');
//         menuIcon.classList.remove('bx-x');
//         document.body.classList.remove('no-scroll');
//     }

//     // Hamburger Menu Click Event
//     menuIcon.addEventListener('click', function(e) {
//         e.stopPropagation();
//         toggleMenu();
//     });

//     // Scroll Event Handler
//     window.addEventListener('scroll', function() {
//         // Section Scroll Spy
//         sections.forEach(sec => {
//             const top = window.scrollY;
//             const offset = sec.offsetTop - 100;
//             const height = sec.offsetHeight;
//             const id = sec.getAttribute('id');

//             if (top >= offset && top < offset + height) {
//                 navLinks.forEach(link => {
//                     link.classList.remove('active');
//                     const activeLink = document.querySelector(`.navbar a[href*="${id}"]`);
//                     if (activeLink) activeLink.classList.add('active');
//                 });

//                 // Update Active Nav Indicator
//                 updateActiveNavIndicator();
//             }
//         });

//         // Sticky Header
//         header.classList.toggle('sticky', window.scrollY > 100);

//         // Footer Animation
//         const footer = document.querySelector('footer');
//         if (footer) {
//             footer.classList.toggle(
//                 'show-animate',
//                 window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
//             );
//         }

//         // Close Menu on Scroll (Mobile Only)
//         if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
//             closeMenu();
//         }
//     });

//     // Update Active Nav Indicator Function
//     function updateActiveNavIndicator() {
//         const activeLink = document.querySelector('.navbar a.active');
//         const activeNav = document.querySelector('.active-nav');
//         if (activeLink && activeNav && window.innerWidth > 768) {
//             activeNav.style.width = `${activeLink.offsetWidth}px`;
//             activeNav.style.left = `${activeLink.offsetLeft}px`;
//         }
//     }

//     // Nav Link Click Handlers
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             if (window.innerWidth <= 768) {
//                 closeMenu();
//             }
//             updateActiveNavIndicator();
//         });
//     });

//     // Close Menu When Clicking Outside
//     document.addEventListener('click', function(event) {
//         if (!navbar.contains(event.target) && !menuIcon.contains(event.target) && navbar.classList.contains('active')) {
//             closeMenu();
//         }
//     });

//     // Window Resize Handler
//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 768) {
//             closeMenu();
//         }
//         updateActiveNavIndicator();
//     });

//     // Initialize
//     updateActiveNavIndicator();
// });

// // Tooltip Functionality (keep your existing function)
// function toggleTooltip(event) {
//     event.preventDefault();
//     const tooltip = document.getElementById('discord-tooltip');
//     if (tooltip) {
//         tooltip.classList.toggle('visible');
//     }
// }




// document.addEventListener('DOMContentLoaded', function() {
//     // DOM Elements
//     const menuIcon = document.getElementById('menu-icon');
//     const navbar = document.getElementById('navbar');
//     const header = document.querySelector('.header');
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('.navbar a');

//     // --- Menu Handlers ---
//     function toggleMenu() {
//         navbar.classList.toggle('active');
//         menuIcon.classList.toggle('bx-x'); // Toggle hamburger/close icon
//     }

//     function closeMenu() {
//         navbar.classList.remove('active');
//         menuIcon.classList.remove('bx-x');
//     }

//     // Hamburger Menu Click Event
//     menuIcon.addEventListener('click', function(e) {
//         e.stopPropagation();
//         toggleMenu();
//     });

//     // Nav Link Click Handlers (Closes menu on mobile when a link is clicked)
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             if (window.innerWidth <= 768) {
//                 closeMenu();
//             }
//         });
//     });

//     // Close Menu When Clicking Outside
//     document.addEventListener('click', function(event) {
//         if (!navbar.contains(event.target) && !menuIcon.contains(event.target) && navbar.classList.contains('active')) {
//             closeMenu();
//         }
//     });


//     // --- Scroll Event Handler ---
//     window.addEventListener('scroll', function() {
//         const currentScroll = window.scrollY;

//         // 1. Sticky Header
//         header.classList.toggle('sticky', currentScroll > 100);

//         // 2. Section Scroll Spy (Active Link Highlight)
//         sections.forEach(sec => {
//             // Set a buffer for offset to trigger the active state slightly before entering the section fully
//             const offset = sec.offsetTop - 150; 
//             const height = sec.offsetHeight;
//             const id = sec.getAttribute('id');

//             if (currentScroll >= offset && currentScroll < offset + height) {
//                 // Remove 'active' from all links
//                 navLinks.forEach(link => link.classList.remove('active'));
                
//                 // Add 'active' to the corresponding link
//                 const activeLink = document.querySelector(`.navbar a[href*="${id}"]`);
//                 if (activeLink) {
//                     activeLink.classList.add('active');
//                 }
//             }
//         });
        
//         // 3. Close Menu on Scroll (Mobile Only)
//         if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
//              closeMenu();
//         }
//     });


//     // --- Window Resize Handler ---
//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 768 && navbar.classList.contains('active')) {
//             // Force close menu if resizing to desktop view
//             closeMenu();
//         }
//     });
    
//     // Initial active link setting for the first load
//     document.querySelector('.navbar a[href="#home"]').classList.add('active');
// });





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
