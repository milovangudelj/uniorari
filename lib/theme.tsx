import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const initialTheme = "light";
	const [theme, setTheme] = useState(initialTheme);
	const [dark, setDark] = useState(theme === "dark");

	useEffect(() => {
		let defaultTheme = window.matchMedia("(prefers-color-scheme: light)")
			.matches
			? "light"
			: "dark";
		setTheme(localStorage.themeUniOrari || initialTheme);
		setDark(localStorage.themeUniOrari === "dark" || theme === "dark");
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
