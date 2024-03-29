const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const grey = {
	// 50: "#F8FAFC",
	// 100: "#F1F5F9",
	// 200: "#E2E8F0",
	// 300: "#CBD5E1",
	// 400: "#94A3B8",
	// 500: "#64748B",
	// 600: "#475569",
	// 700: "#334155",
	// 800: "#1E293B",
	// 900: "#0F172A",
	...colors.gray,
};

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
			roboto: ["Roboto", "sans-serif"],
		},
		boxShadow: {
			sm: "0 1px 2px rgba(0,0,0,0.05)",
			DEFAULT: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)",
			md: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)",
			lg: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05)",
			xl: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05)",
			"2xl": "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05)",
			"3xl": "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05), 0 64px 128px rgba(0,0,0,0.05)",
			"4xl": "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05), 0 64px 128px rgba(0,0,0,0.05), 0 128px 256px rgba(0,0,0,0.05)",
			inner: "inset 0px 2px 4px rgba(0, 0, 0, 0.05)",
			none: "none",
			google: "0px 0px 0px 3px #BBD2F5",
		},
		extend: {
			colors: {
				grey,
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
					he: grey[900],
					me: grey[500],
					le: grey[400],
				},
				"on-primary": {
					he: grey[50],
					me: grey[300],
					le: grey[500],
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
				"skeleton-lighter": `linear-gradient(100deg, ${grey[100]} 8%, ${grey[50]} 24%, ${grey[100]} 40%)`,
				"skeleton-normal": `linear-gradient(100deg, ${grey[200]} 8%, ${grey[100]} 24%, ${grey[200]} 40%)`,
				"skeleton-darker": `linear-gradient(100deg, ${grey[300]} 8%, ${grey[200]} 24%, ${grey[300]} 40%)`,
				"dark-skeleton-lighter": `linear-gradient(100deg, ${grey[600]} 8%, ${grey[500]} 24%, ${grey[600]} 40%)`,
				"dark-skeleton-normal": `linear-gradient(100deg, ${grey[700]} 8%, ${grey[600]} 24%, ${grey[700]} 40%)`,
				"dark-skeleton-darker": `linear-gradient(100deg, ${grey[800]} 8%, ${grey[700]} 24%, ${grey[800]} 40%)`,
			},
			backgroundSize: {
				skeleton: "200% 100%",
			},
			keyframes: {
				loading: {
					to: {
						backgroundPositionX: "-200%",
					},
				},
			},
			animation: {
				skeleton: "1.5s loading linear infinite",
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
				layout: "224px 1fr",
			},
			gridTemplateRows: {
				layout: "auto 1fr",
			},
			minWidth: ({ theme }) => theme("spacing"),
			maxWidth: ({ theme }) => theme("spacing"),
			textOpacity: {
				54: "0.54",
			},
		},
	},
	plugins: [],
};
