import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("default");

	useEffect(() => {
		let defaultTheme = window.matchMedia("(prefers-color-scheme: light)")
			.matches
			? "light"
			: "dark";
		setTheme(localStorage.themeUniOrari || defaultTheme);
	}, []);

	useEffect(() => {
		if (theme !== "default") {
			localStorage.themeUniOrari = theme;
		} else {
			localStorage.removeItem("themeUniOrari");
			setTheme(
				window.matchMedia("(prefers-color-scheme: light)").matches
					? "light"
					: "dark"
			);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
