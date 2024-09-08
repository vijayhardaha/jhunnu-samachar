/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#603F26", // Primary color
				secondary: "#6C4E31", // Secondary color
				accent: "#FFDBB5", // Accent color
				highlight: "#FFEAC5", // Highlight color
			},
			container: {
				screens: {
					lg: "1024px",
				},
				padding: {
					DEFAULT: "1.5rem",
					sm: "2rem",
					lg: "2.25rem",
				},
			},
		},
	},
	plugins: [],
};
