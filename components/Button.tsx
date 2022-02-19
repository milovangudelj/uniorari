import {
	ElementType,
	ComponentPropsWithoutRef,
	ReactNode,
	useState,
} from "react";

import { cls } from "../utils/helpers";
import { ConditionalWrapper } from ".";

interface ButtonProps<T extends ElementType> {
	as?: T;
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	external?: boolean;
	pill?: boolean;
	loading?: boolean;
	variant?: "text" | "contained" | "outlined";
	color?: "primary" | "accent" | "success" | "error";
	size?: "small" | "normal" | "large";
}

const classes = {
	base: "btn",
	disabled: (disabled) => (disabled ? "opacity-50 cursor-not-allowed" : ""),
	loading: (loading) => (loading ? "cursor-wait" : ""),
	pill: (isPill) => (isPill ? "rounded-full" : ""),
	size: {
		small: "btn-sm",
		normal: "btn-md",
		large: "btn-lg",
	},
	variant: (color) => {
		let c = "btn-" + color;

		return {
			text: `${c} btn-text`,
			contained: `${c}`,
			outlined: `${c} btn-outlined`,
		};
	},
};

export const Button = <T extends ElementType = "button">({
	as,
	className = "",
	disabled = false,
	external = false,
	variant = "contained",
	color = "primary",
	pill = false,
	size = "normal",
	loading = false,
	...props
}: ButtonProps<T> &
	Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
	const [style, setStyle] = useState<string>(
		!external
			? cls(
					`${classes.base} ${classes.size[size]} ${
						classes.variant(color)[variant]
					} ${classes.pill(pill)} ${classes.disabled(
						disabled
					)} ${classes.loading(loading)} ${className}`
			  )
			: className
	);
	const Component = as || "button";

	return (
		<Component {...props} disabled={disabled || loading} className={style}>
			<ConditionalWrapper
				condition={props.passHref}
				wrapper={(children) => (
					<a {...props} disabled={disabled || loading} className={style}>
						{children}
					</a>
				)}
			>
				{loading && (
					<svg
						className={`motion-safe:animate-spin absolute ${
							size === "small" ? "h-4 w-4" : "h-5 w-5"
						}`}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				)}
				<span className={loading ? "invisible" : ""}>{props.children}</span>
			</ConditionalWrapper>
		</Component>
	);
};
