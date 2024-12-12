// Toggle icon navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle the navbar visibility when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document
                    .querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        }
    });

    // Sticky header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle(
        'show-animate',
        this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
    );
};

// Remove toggle icon and navbar when clicking navbar links (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Tooltip toggle functionality
function toggleTooltip(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    const tooltip = document.getElementById("discord-tooltip");

    // Toggle visibility of the tooltip
    if (tooltip.classList.contains("visible")) {
        tooltip.classList.remove("visible");
    } else {
        tooltip.classList.add("visible");
    }
}

// Ensure navbar stays in the top-right corner (for mobile and smaller screens)
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        navbar.style.position = 'absolute'; // Position the navbar at the top-right corner on mobile
        navbar.style.top = '0';
        navbar.style.right = '0';
    } else {
        navbar.style.position = 'static'; // Default positioning for larger screens
    }
});
