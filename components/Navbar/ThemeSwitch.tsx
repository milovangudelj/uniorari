import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useTheme } from "../../lib/theme";

const ThemeSwitch = (props) => {
	const { setTheme } = useTheme();
	const selectRef = useRef(null);

	const handleThemeChange = () => {
		setTheme(selectRef.current?.value || "default");
	};

	return (
		<div className={`${props.className} flex justify-between items-center`}>
			Theme{" "}
			<div className="flex items-center relative ml-4 bg-transparent border border-gray-100 rounded py-1 cursor-pointer">
				<select
					ref={selectRef}
					name="theme"
					id="theme"
					className="appearance-none bg-transparent outline-none pl-2 pr-7 cursor-pointer"
					onChange={handleThemeChange}
				>
					<option value="light">Light</option>
					<option value="default">Default</option>
					<option value="dark">Dark</option>
				</select>
				<span className="absolute self-center right-1 pointer-events-none">
					<ChevronDownIcon className="w-4 text-gray-700" />
				</span>
			</div>
		</div>
	);
};

export default ThemeSwitch;
