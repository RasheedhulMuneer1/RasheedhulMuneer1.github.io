// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

// Toggle the navbar visibility when the menu icon is clicked
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent this click from triggering document click handler
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Scroll sections and update active navbar links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Section scroll spy
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
            
            // Update active nav indicator position
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            const activeNav = document.querySelector('.active-nav');
            if (activeLink && activeNav) {
                activeNav.style.width = `${activeLink.offsetWidth}px`;
                activeNav.style.left = `${activeLink.offsetLeft}px`;
            }
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Animation for footer on scroll
    const footer = document.querySelector('footer');
    if (footer) {
        footer.classList.toggle(
            'show-animate',
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
        );
    }
    
    // Close mobile menu when scrolling
    if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
};

// Remove toggle icon and navbar when clicking navbar links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        
        // Update active nav indicator immediately
        const activeNav = document.querySelector('.active-nav');
        if (activeNav) {
            activeNav.style.width = `${link.offsetWidth}px`;
            activeNav.style.left = `${link.offsetLeft}px`;
        }
    });
});

// Close the navbar when clicking outside 
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Reset mobile menu when switching to desktop
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        
        // Ensure proper positioning
        navbar.style.position = '';
        navbar.style.top = '';
        navbar.style.right = '';
    }
    
    // Update active nav indicator position on resize
    const activeLink = document.querySelector('header nav a.active');
    const activeNav = document.querySelector('.active-nav');
    if (activeLink && activeNav && window.innerWidth > 768) {
        activeNav.style.width = `${activeLink.offsetWidth}px`;
        activeNav.style.left = `${activeLink.offsetLeft}px`;
    }
});

// Initialize active nav indicator position
window.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('header nav a.active');
    const activeNav = document.querySelector('.active-nav');
    if (activeLink && activeNav && window.innerWidth > 768) {
        activeNav.style.width = `${activeLink.offsetWidth}px`;
        activeNav.style.left = `${activeLink.offsetLeft}px`;
    }
});

// Tooltip toggle functionality
function toggleTooltip(event) {
    event.preventDefault();
    const tooltip = document.getElementById('discord-tooltip');
    if (tooltip) {
        tooltip.classList.toggle('visible');
    }
}
