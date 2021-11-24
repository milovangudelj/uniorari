const defaultTheme = require("tailwindcss/defaultTheme");
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {
			colors: {
				grey: {
					50: "#F0F4F7",
					100: "#DFE6ED",
					200: "#CCD6E0",
					300: "#B8C5D1",
					400: "#A3B1BF",
					500: "#8E9EAD",
					600: "#798999",
					700: "#637282",
					800: "#4C5A69",
					900: "#36414D",
				},
				primary: {
					50: "#E4F3FF",
					100: "#BEE0FF",
					200: "#93CDFF",
					300: "#67B9FF",
					400: "#47A9FF",
					500: "#309AFF",
					600: "#338BFF",
					700: "#3378EB",
					800: "#3267D8",
					900: "#3046B8",
				},
				accent: {
					50: "#FEF3E0",
					100: "#FEE0B2",
					200: "#FDCC81",
					300: "#FDB84E",
					400: "#FCA827",
					500: "#FC9903",
					600: "#F88D02",
					700: "#F27E01",
					800: "#EC6E00",
					900: "#E35400",
				},
				success: {
					50: "#D9F9F2",
					100: "#A1EEDB",
					200: "#50E3C3",
					300: "#00D4AB",
					400: "#00C699",
					500: "#00B988",
					600: "#00AA7A",
					700: "#009969",
					800: "#00885B",
					900: "#006A3D",
				},
				error: {
					50: "#FFECEF",
					100: "#FFCFD6",
					200: "#F29CA0",
					300: "#EA767B",
					400: "#F65559",
					500: "#FD4441",
					600: "#ED3A3F",
					700: "#DB3039",
					800: "#CE2932",
					900: "#BF1C26",
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
				},
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
			width: {
				200: "200px",
				400: "400px",
			},
			minWidth: {
				200: "200px",
				400: "400px",
			},
			maxWidth: {
				200: "200px",
				400: "400px",
			},
			textOpacity: {
				54: "0.54",
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
