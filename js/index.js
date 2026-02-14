document.addEventListener("DOMContentLoaded", () => {
	// Mobile Menu Toggle
	const hamburgerMenu = document.getElementById("hamburger-menu");
	const mobileMenu = document.getElementById("mobile-menu");

	if (hamburgerMenu && mobileMenu) {
		hamburgerMenu.addEventListener("click", () => {
			mobileMenu.classList.toggle("hidden");
		});
	} else {
		console.error("Hamburger menu or mobile menu element not found.");
	}
});

const parts = ["kisan", "thapa", "33", "@", "gmail", ".", "com"];
const emailElement = document.getElementById("email");
if (emailElement) {
    emailElement.textContent = parts.join("");
}

// Blog Post Wide Mode Toggle
const toggleBtn = document.getElementById('full-width-toggle');
if (toggleBtn) {
    const mainContainer = document.querySelector('main');
    const navContainer = document.querySelector('header > div');
    const toggleIcon = toggleBtn.querySelector('i');
    const toggleText = toggleBtn.querySelector('span');

    let isFullWidth = false;

    toggleBtn.addEventListener('click', () => {
        isFullWidth = !isFullWidth;

        if (isFullWidth) {
            // Expand
            mainContainer.classList.remove('max-w-screen-lg');
            mainContainer.classList.add('max-w-none', 'px-6', 'md:px-20');
            if (navContainer) {
                navContainer.classList.remove('max-w-screen-lg');
                navContainer.classList.add('max-w-none');
            }

            toggleIcon.classList.remove('fa-expand');
            toggleIcon.classList.add('fa-compress');
            toggleText.textContent = "Standard Mode";
        } else {
            // Contract
            mainContainer.classList.add('max-w-screen-lg');
            mainContainer.classList.remove('max-w-none', 'px-6', 'md:px-20');
            if (navContainer) {
                navContainer.classList.add('max-w-screen-lg');
                navContainer.classList.remove('max-w-none');
            }

            toggleIcon.classList.remove('fa-compress');
            toggleIcon.classList.add('fa-expand');
            toggleText.textContent = "Wide Mode";
        }
    });
}
