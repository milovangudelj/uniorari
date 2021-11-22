const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				gray: {
					100: "#EDF1F2",
					200: "#E5EAEC",
					300: "#DAE1E5",
					400: "#D0D7DB",
					500: "#B8C6CD",
					600: "#9CAAB1",
					700: "#77848A",
					800: "#4A555A",
					900: "#293033",
				},
				primary: {
					100: "#DAEAF2",
					200: "#B6DEF2",
					300: "#91D2F2",
					400: "#6DC6F2",
					500: "#36A8E1",
					600: "#2E8FBF",
					700: "#257299",
					800: "#1C5673",
					900: "#12394D",
				},
				secondary: {
					100: "#F3E9DB",
					200: "#F3DBB6",
					300: "#F3C27A",
					400: "#F3AA3D",
					500: "#F39200",
					600: "#BF7300",
					700: "#A66400",
					800: "#734500",
					900: "#402600",
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
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
