/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		// Add the daisyUI plugin here
		require("daisyui"),
	],
	// Optional: Add daisyUI configuration (like themes)
	daisyui: {
		themes: ["light", "dark", "cupcake"], // Add a list of themes you want to include
	},
};
