// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

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

// Discord icon tooltip toggle
function toggleTooltip(event) {
    event.preventDefault(); // Prevent default link behavior
    var tooltip = document.querySelector('.discord-icon .tooltip');
    tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
}
