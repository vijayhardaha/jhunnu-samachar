/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#603F26",
				secondary: "#6C4E31",
				accent: "#FFDBB5",
				highlight: "#FFEAC5",
			},
			container: {
				screens: {
					sm: "540px",
					md: "720px",
					lg: "960px",
				},
				padding: {
					DEFAULT: "1rem",
					sm: "1rem",
					md: "1.5rem",
					lg: "2rem",
				},
			},
		},
	},
	plugins: [],
};
