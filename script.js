document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    // Simple state management for mobile navigation
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Optional: Animate hamburger lines
            const lines = menuToggle.querySelectorAll('.hamburger-line');
            if (mainNav.classList.contains('active')) {
                // simple visual feedback (we could do transforms here, but toggling active class is enough for "basic state management")
                lines.forEach(line => line.style.backgroundColor = 'var(--clr-secondary)');
            } else {
                lines.forEach(line => line.style.backgroundColor = 'var(--clr-primary)');
            }
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            const lines = menuToggle.querySelectorAll('.hamburger-line');
            lines.forEach(line => line.style.backgroundColor = 'var(--clr-primary)');
        });
    });
});
