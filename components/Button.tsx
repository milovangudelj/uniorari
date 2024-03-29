import {
	ElementType,
	ComponentPropsWithoutRef,
	ReactNode,
	useState,
	useEffect,
} from "react";

import { cls } from "../utils/helpers";
import { ConditionalWrapper } from ".";

type SizeType = "small" | "normal" | "large";

interface ButtonProps<T extends ElementType> {
	as?: T;
	children?: ReactNode;
	href?: string;
	external?: boolean;
	pill?: boolean;
	loading?: boolean;
	variant?: "text" | "contained" | "outlined";
	color?: "primary" | "accent" | "success" | "error";
	size?: SizeType;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
}

const classes = {
	base: "btn",
	disabled: (disabled) => (disabled ? "opacity-50 cursor-not-allowed" : ""),
	loading: (loading) => (loading ? "cursor-wait" : ""),
	pill: (pill) => (pill ? "btn-pill" : ""),
	size: {
		small: "btn-sm",
		normal: "btn-md",
		large: "btn-lg",
	},
	iconSpacing: (size: SizeType) => {
		switch (size) {
			case "small":
				return {
					start: "mr-1.5",
					end: "ml-1.5",
				};
			case "normal":
				return {
					start: "mr-2",
					end: "ml-2",
				};
			case "large":
				return {
					start: "mr-3",
					end: "ml-3",
				};
		}
	},
	variant: (color) => {
		let c = "";

		switch (color) {
			case "primary":
				c = "btn-primary";
				break;
			case "accent":
				c = "btn-accent";
				break;
			case "success":
				c = "btn-success";
				break;
			case "error":
				c = "btn-error";
				break;
		}

		return {
			text: `${c} btn-text`,
			contained: `${c}`,
			outlined: `${c} btn-outlined`,
		};
	},
};

export const Button = <T extends ElementType = "button">({
	as,
	href,
	external = false,
	variant = "contained",
	color = "primary",
	pill = false,
	size = "normal",
	loading = false,
	startIcon,
	endIcon,
	disabled,
	className,
	...props
}: ButtonProps<T> &
	Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
	const Component = as || "button";
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

	useEffect(() => {
		setStyle(
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
	}, [size, color, variant, pill, disabled, loading, className, external]);

	const content = (
		<>
			{!external ? (
				<>
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
					<span
						className={`${loading ? "invisible" : ""} flex items-center`}
					>
						{startIcon && (
							<span className={`${classes.iconSpacing(size).start}`}>
								{startIcon}
							</span>
						)}
						<span>{props.children}</span>
						{endIcon && (
							<span className={`${classes.iconSpacing(size).end}`}>
								{endIcon}
							</span>
						)}
					</span>
				</>
			) : (
				props.children
			)}
		</>
	);

	return (
		<Component
			{...props}
			href={href}
			disabled={disabled || loading}
			className={style}
		>
			{content}
		</Component>
	);
};
