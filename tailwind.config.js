const defaultTheme = require("tailwindcss/defaultTheme");

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
			inner: "inset 0px 2px 4px rgba(0, 0, 0, 0.05)",
			none: "none",
			sm: "0 1px 2px rgba(0,0,0,0.05)",
			DEFAULT: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)",
			md: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)",
			lg: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05)",
			xl: "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05)",
			"2xl": "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05)",
			"3xl": "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05), 0 64px 128px rgba(0,0,0,0.05)",
			"4xl": "0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05),0 16px 32px rgba(0,0,0,0.05), 0 32px 64px rgba(0,0,0,0.05), 0 64px 128px rgba(0,0,0,0.05), 0 128px 256px rgba(0,0,0,0.05)",
			google: "0px 0px 0px 3px #BBD2F5",
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
				layout: "224px 1fr",
			},
			gridTemplateRows: {
				// Layout columns template
				layout: "auto 1fr",
			},
			minWidth: {
				px: "1px",
				0: "0px",
				0.5: "0.125rem",
				1: "0.25rem",
				1.5: "0.375rem",
				2: "0.5rem",
				2.5: "0.625rem",
				3: "0.75rem",
				3.5: "0.875rem",
				4: "1rem",
				5: "1.25rem",
				6: "1.5rem",
				7: "1.75rem",
				8: "2rem",
				9: "2.25rem",
				10: "2.5rem",
				11: "2.75rem",
				12: "3rem",
				14: "3.5rem",
				16: "4rem",
				20: "5rem",
				24: "6rem",
				28: "7rem",
				32: "8rem",
				36: "9rem",
				40: "10rem",
				44: "11rem",
				48: "12rem",
				52: "13rem",
				56: "14rem",
				60: "15rem",
				64: "16rem",
				72: "18rem",
				80: "20rem",
				96: "24rem",
			},
			maxWidth: {
				px: "1px",
				0: "0px",
				0.5: "0.125rem",
				1: "0.25rem",
				1.5: "0.375rem",
				2: "0.5rem",
				2.5: "0.625rem",
				3: "0.75rem",
				3.5: "0.875rem",
				4: "1rem",
				5: "1.25rem",
				6: "1.5rem",
				7: "1.75rem",
				8: "2rem",
				9: "2.25rem",
				10: "2.5rem",
				11: "2.75rem",
				12: "3rem",
				14: "3.5rem",
				16: "4rem",
				20: "5rem",
				24: "6rem",
				28: "7rem",
				32: "8rem",
				36: "9rem",
				40: "10rem",
				44: "11rem",
				48: "12rem",
				52: "13rem",
				56: "14rem",
				60: "15rem",
				64: "16rem",
				72: "18rem",
				80: "20rem",
				96: "24rem",
			},
			textOpacity: {
				54: "0.54",
			},
		},
	},
	plugins: [],
};
