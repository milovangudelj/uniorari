const classes = {
	base: "inline-block rounded-lg",
	shade: {
		lighter: "bg-grey-300 dark:bg-grey-600",
		normal: "bg-grey-200 dark:bg-grey-700",
		darker: "bg-grey-100 dark:bg-grey-800",
	},
	size: {
		xs: { inner: "h-3", outer: "h-4" },
		sm: { inner: "h-3.5", outer: "h-5" },
		base: { inner: "h-4", outer: "h-6" },
		lg: { inner: "h-[1.125rem]", outer: "h-7" },
		xl: { inner: "h-5", outer: "h-7" },
		"2xl": { inner: "h-6", outer: "h-8" },
		"3xl": { inner: "h-[1.875rem]", outer: "h-9" },
		"4xl": { inner: "h-9", outer: "h-10" },
		"5xl": { inner: "h-12", outer: "h-12" },
		"6xl": { inner: "h-[3.75rem]", outer: "h-[3.75rem]" },
		"7xl": { inner: "h-[4.5rem]", outer: "h-[4.5rem]" },
		"8xl": { inner: "h-24", outer: "h-24" },
		"9xl": { inner: "h-32", outer: "h-32" },
	},
};

export const Placeholder = ({
	shade = "normal",
	size = "base",
	className = "w-32",
}: PlaceholderProps) => {
	return (
		<span className={`${classes.base} ${classes.size[size].outer}`}>
			<span
				className={`${classes.base} ${classes.shade[shade]} ${classes.size[size].inner} ${className}`}
			></span>
		</span>
	);
};

type PlaceholderProps = {
	shade?: "lighter" | "normal" | "darker";
	size?:
		| "xs"
		| "sm"
		| "base"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl";
	className?: string;
};
