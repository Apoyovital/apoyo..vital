// script.js
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Ocultar el navbar al hacer scroll hacia abajo
        navbar.classList.add('hidden');
    } else {
        // Mostrar el navbar al hacer scroll hacia arriba
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

