/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	content: [
		"./src//*.{html,js}",
		"./node_modules/tw-elements/dist/js//.js",
		"./index.html",
		"./src/**/.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
