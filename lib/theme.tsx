import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("default");
	const [dark, setDark] = useState(false);

	useEffect(() => {
		let defaultTheme = window.matchMedia("(prefers-color-scheme: light)")
			.matches
			? "light"
			: "dark";
		setTheme(localStorage.themeUniOrari || "default");
		setDark(localStorage.themeUniOrari === "dark" || defaultTheme === "dark");
	}, []);

	useEffect(() => {
		if (theme !== "default") {
			localStorage.themeUniOrari = theme;
			setDark(theme === "dark");
		} else {
			localStorage.removeItem("themeUniOrari");
			setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, dark, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
