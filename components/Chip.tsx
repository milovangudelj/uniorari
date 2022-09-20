import {
	useEffect,
	useState,
} from "react";
import { cls } from "../utils/helpers";

type SizeType = "small" | "normal" | "large";

const classes = {
	base: "cursor-pointer border rounded-full transition",
	size: (size: SizeType) => {
		switch (size) {
			case "small":
				return "px-2 text-xs";
			case "normal":
				return "px-2.5 text-sm";
			case "large":
				return "px-3 text-base";
		}
	},
	selected: (selected) =>
		selected
			? "bg-primary-500 border-primary-500 text-on-primary-he hover:bg-primary-400 hover:border-primary-400 dark:bg-primary-400 dark:border-primary-400 dark:text-on-surface-he dark:hover:bg-primary-300 dark:hover:border-primary-300"
			: "bg-transparent border-primary-500 text-primary-500 hover:bg-primary-500/5 focus:bg-primary-600/10 dark:bg-transparent dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400/5 dark:focus:bg-primary-500/10",
};

export const Chip = (props) => {
	const { size = "small", selected }: { size: SizeType; selected: boolean } =
		props;
	const [style, setStyle] = useState<string>(
		cls(`${classes.base} ${classes.size(size)} ${classes.selected(selected)}`)
	);

	useEffect(() => {
		setStyle(
			cls(
				`${classes.base} ${classes.size(size)} ${classes.selected(
					selected
				)}`
			)
		);
	}, [size, selected]);

	return (
		<span className={style} onClick={props.onClick}>
			{props.children}
		</span>
	);
};
