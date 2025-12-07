document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContent = document.getElementById('menu-content');
    const navLinks = document.querySelectorAll('#navbar a, #contact');

    // Function to toggle the menu visibility
    function toggleMenu() {
        // Toggle the 'menu-open' class on the menu content
        const isOpen = menuContent.style.display === 'flex';
        menuContent.style.display = isOpen ? 'none' : 'flex';
        
        // Optional: Change the icon (bars <-> X)
        const icon = menuToggle.querySelector('i');
        if (isOpen) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    }

    // 1. Event listener for the toggle button
    menuToggle.addEventListener('click', toggleMenu);

    // 2. Event listener for closing the menu after a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Only close if the menu is currently visible
            if (window.innerWidth <= 600) {
                toggleMenu();
            }
        });
    });
});