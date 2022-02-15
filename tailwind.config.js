const defaultTheme = require("tailwindcss/defaultTheme");
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				grey: {
					50: "#F8FAFC",
					100: "#F1F5F9",
					200: "#E2E8F0",
					300: "#CBD5E1",
					400: "#94A3B8",
					500: "#64748B",
					600: "#475569",
					700: "#334155",
					800: "#1E293B",
					900: "#0F172A",
				},
				primary: {
					50: "#EEF2FF",
					100: "#E0E7FF",
					200: "#C7D2FE",
					300: "#A5B4FC",
					400: "#818CF8",
					500: "#6366F1",
					600: "#4F46E5",
					700: "#4338CA",
					800: "#3730A3",
					900: "#312E81",
				},
				accent: {
					50: "#FFFBEB",
					100: "#FEF3C7",
					200: "#FDE68A",
					300: "#FCD34D",
					400: "#FBBF24",
					500: "#F59E0B",
					600: "#D97706",
					700: "#B45309",
					800: "#92400E",
					900: "#78350F",
				},
				success: {
					50: "#ECFDF5",
					100: "#D1FAE5",
					200: "#A7F3D0",
					300: "#6EE7B7",
					400: "#34D399",
					500: "#10B981",
					600: "#059669",
					700: "#047857",
					800: "#065F46",
					900: "#064E3B",
				},
				error: {
					50: "#FEF2F2",
					100: "#FEE2E2",
					200: "#FECACA",
					300: "#FCA5A5",
					400: "#F87171",
					500: "#EF4444",
					600: "#DC2626",
					700: "#B91C1C",
					800: "#991B1B",
					900: "#7F1D1D",
				},
				"on-surface": {
					he: "rgba(0, 0, 0, 0.87)",
					me: "rgba(0, 0, 0, 0.60)",
					le: "rgba(0, 0, 0, 0.38)",
				},
				"on-primary": {
					he: "rgba(255, 255, 255, 1)",
					me: "rgba(255, 255, 255, 0.74)",
					le: "rgba(255, 255, 255, 0.38)",
				},
				google: {
					lightBg: "#FFFFFF",
					darkBg: "#4285F4",
					darkBgFocus: "#3367D6",
				},
			},
			backgroundImage: {
				"unsplash-random":
					"url('https://source.unsplash.com/random/?calendar')",
			},
			fontSize: {
				"display-l": "3.5625rem",
				"display-m": "2.8125rem",
				"display-s": "2.25rem",
				"headline-l": "2rem",
				"headline-m": "1.75rem",
				"headline-s": "1.5rem",
				"title-l": "1.375rem",
				"title-m": "1rem",
				"title-s": ".875rem",
				"label-l": ".875rem",
				"label-m": ".75rem",
				"label-s": ".6875rem",
				"body-l": "1rem",
				"body-m": ".875rem",
				"body-s": ".75rem",
			},
			gridTemplateColumns: {
				// Layout columns template
				layout: "300px 1fr",
			},
			gridTemplateRows: {
				// Layout columns template
				layout: "auto 1fr",
			},
			width: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
			},
			minWidth: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
			},
			maxWidth: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
			},
			height: {
				content: "max-content",
			},
			textOpacity: {
				54: "0.54",
			},
			boxShadow: {
				1: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028), 12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)",
				google: "0px 0px 0px 3px #BBD2F5",
			},
		},
	},
	variants: {
		extend: {
			display: ["group-hover", ...defaultConfig.variants.display],
		},
	},
	plugins: [],
};
 