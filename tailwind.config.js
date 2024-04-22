module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/tw-elements/js/**/*.js"],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require("tw-elements/plugin.cjs")
	],
};
