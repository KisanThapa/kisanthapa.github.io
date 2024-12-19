const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme');

    // Set the initial theme based on localStorage
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    // Toggle theme on button click
    toggleThemeButton.addEventListener('click', function () {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});