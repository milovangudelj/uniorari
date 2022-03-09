import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";

const ThemeContext = createContext(undefined);

type Theme = "system" | "light" | "dark";
interface UseThemeValue {
	dark: boolean;
	theme: Theme;
	setTheme: Dispatch<SetStateAction<Theme>>;
}

export function useTheme(): UseThemeValue {
	return useContext(ThemeContext);
}

const MEDIA_QUERY = "(prefers-color-scheme: dark)";

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(null);
	const [dark, setDark] = useState(theme === "dark");

	useLayoutEffect(() => {
		let preferredTheme = localStorage.themeUniOrari;
		let systemTheme = window.matchMedia(MEDIA_QUERY).matches
			? "dark"
			: "light";

		setTheme(preferredTheme || "system");
		setDark(preferredTheme === "dark" || systemTheme === "dark");
	}, []);

	useEffect(() => {
		if (theme !== "system") {
			localStorage.themeUniOrari = theme;
			setDark(theme === "dark");
		} else {
			localStorage.removeItem("themeUniOrari");
			setDark(window.matchMedia(MEDIA_QUERY).matches);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, dark, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
