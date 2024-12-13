// Toggle icon navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the navbar visibility when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Scroll sections and update active navbar links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
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
        }
    });

    // Sticky header
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Animation for footer on scroll
    const footer = document.querySelector('footer');
    footer.classList.toggle(
        'show-animate',
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
    );
};

// Remove toggle icon and navbar when clicking navbar links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Tooltip toggle functionality
function toggleTooltip(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const tooltip = document.getElementById('discord-tooltip');
    tooltip.classList.toggle('visible');
}

// Ensure navbar position adjusts for screen size changes
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        navbar.style.position = 'absolute';
        navbar.style.top = '0';
        navbar.style.right = '0';
    } else {
        navbar.style.position = 'static';
    }
});
