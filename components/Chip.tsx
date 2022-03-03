import { useEffect, useState } from "react";
import { cls } from "../utils/helpers";

const classes = {
	base: "px-2 cursor-pointer text-xs border rounded-full transition",
	selected: (selected) =>
		selected
			? "bg-primary-500 border-primary-500 text-white hover:bg-primary-400 hover:border-primary-400"
			: "bg-transparent border-primary-500 text-primary-500 hover:bg-primary-500/5 focus:bg-primary-600/10",
};

export const Chip = (props) => {
	const [style, setStyle] = useState<string>(
		cls(`${classes.base} ${classes.selected(props.selected)}`)
	);

	useEffect(() => {
		setStyle(cls(`${classes.base} ${classes.selected(props.selected)}`));
	});

	return (
		<span className={style} onClick={props.onClick}>
			{props.children}
		</span>
	);
};
