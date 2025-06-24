let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

// Toggle menu on icon click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark'); // Cross icon
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars'); // Hamburger
    }
});

// Close menu when a nav link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

