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
document.getElementById("email").textContent = parts.join("");
