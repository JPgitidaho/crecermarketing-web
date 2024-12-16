// Obtener el botón del menú y los enlaces
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Añadir un evento de clic para mostrar/ocultar los enlaces
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Añade o quita la clase 'active' para mostrar/ocultar los enlaces
});
