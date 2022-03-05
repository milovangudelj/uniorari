import { ChevronDownIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useRef } from "react";
import { useTheme } from "../../lib/theme";

const ThemeSwitch = (props) => {
	const { theme, setTheme } = useTheme();
	const selectRef = useRef(null);

	useEffect(() => {
		selectRef.current.value = theme;
	}, []);

	const handleThemeChange = () => {
		setTheme(selectRef.current?.value || "default");
	};

	return (
		<div className={`${props.className} flex justify-between items-center`}>
			<span className="inline-block mr-1.5">
				<SunIcon className="w-4 h-4" />
			</span>
			<span className="cursor-default">Tema</span>{" "}
			<div className="flex items-center relative ml-4 bg-transparent border border-gray-100 dark:border-gray-700 rounded py-1 cursor-pointer">
				<select
					ref={selectRef}
					name="theme"
					id="theme"
					className="appearance-none bg-transparent outline-none pl-2 pr-7 cursor-pointer"
					onChange={handleThemeChange}
				>
					<option className="bg-white dark:bg-gray-800" value="default">
						Default
					</option>
					<option className="bg-white dark:bg-gray-800" value="light">
						Chiaro
					</option>
					<option className="bg-white dark:bg-gray-800" value="dark">
						Scuro
					</option>
				</select>
				<span className="absolute self-center right-1 pointer-events-none">
					<ChevronDownIcon className="w-4 text-gray-700" />
				</span>
			</div>
		</div>
	);
};

export default ThemeSwitch;
