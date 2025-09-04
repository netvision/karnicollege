module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', "./node_modules/tw-elements/js/**/*.js"],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
			},
			colors: {
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
				secondary: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
				accent: {
					50: '#fef3c7',
					100: '#fde68a',
					200: '#fcd34d',
					300: '#fbbf24',
					400: '#f59e0b',
					500: '#d97706',
					600: '#b45309',
					700: '#92400e',
					800: '#78350f',
					900: '#451a03',
				},
				neutral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'bounce-in': 'bounceIn 0.8s ease-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				slideUp: {
					from: {
						opacity: '0',
						transform: 'translateY(30px)',
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				bounceIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3)',
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)',
					},
					'70%': {
						transform: 'scale(0.9)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
		},
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
