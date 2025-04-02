// js/index.js OR ../js/index.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    } else {
        console.error("Hamburger menu or mobile menu element not found.");
    }

    // Dark Mode Toggle
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const sunIcon = document.getElementById('theme-toggle-sun-icon');
    const moonIcon = document.getElementById('theme-toggle-moon-icon');
    const htmlElement = document.documentElement;

    if (!themeToggleButton || !sunIcon || !moonIcon) {
        console.error("Theme toggle button or icons not found.");
        return; // Exit if essential elements are missing
    }

    // Function to update icon visibility
    const updateIcons = (isDarkMode) => {
        if (isDarkMode) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    };

    // Function to set theme
    const setTheme = (isDark) => {
        if (isDark) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        updateIcons(isDark);
    };

    // Check initial theme preference
    const currentTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let isDarkMode = currentTheme === 'dark' || (!currentTheme && prefersDark);

    // Apply initial theme
    setTheme(isDarkMode);

    // Add event listener for the toggle button
    themeToggleButton.addEventListener('click', () => {
        isDarkMode = !htmlElement.classList.contains('dark'); // Toggle the state
        setTheme(isDarkMode);
    });

    // Optional: Listen for OS theme changes if no preference is set
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.getItem('theme')) { // Only respect OS change if user hasn't manually set
            setTheme(event.matches);
        }
    });

});