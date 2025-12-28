module.exports = {
	content: ["./*.html", "./*.js"], // Specify the HTML files to scan for classes
	darkMode: "class", // Enable dark mode support
	theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'], /* Clean, standard font */
            },
            colors: {
                // Using a professional Slate Grey palette
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    800: '#1f2937',
                    900: '#111827',
                },
                // A subtle professional red/rose for accents (matching UMass)
                accent: {
                    600: '#e11d48', // Rose-600
                    700: '#be123c',
                }
            }
        }
    },
	plugins: [require("@tailwindcss/typography")],
};
