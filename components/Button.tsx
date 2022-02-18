import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import Link from "next/link";

import { cls } from "../utils/helpers";

type ButtonProps = {
	children: ReactNode;
	external?: boolean;
	variant?: "text" | "contained" | "outlined";
	color?: "primary" | "accent" | "success" | "error";
	pill?: boolean;
	size?: "small" | "normal" | "large";
	disabled?: boolean;
	className?: string;
	link?: boolean;
	href?: string;
	type?: "button" | "submit" | "reset";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	loading?: boolean;
};

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

export const Button = ({
	children,
	external = false,
	variant = "contained",
	color = "primary",
	pill = false,
	size = "normal",
	disabled = false,
	className = "",
	link = false,
	href,
	type,
	onClick,
	loading = false,
}: ButtonProps) => {
	return (
		<button
			disabled={disabled || loading}
			type={type}
			onClick={onClick}
			className={
				!external
					? cls(`
					${classes.base}
					${classes.size[size]}
					${classes.variant(color)[variant]}
					${classes.pill(pill)}
					${classes.disabled(disabled)}
					${classes.loading(loading)}
					${className}
			  `)
					: undefined
			}
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
			<span className={loading ? "invisible" : ""}>
				{href ? (
					link ? (
						<Link href={href} passHref>
							<a>{children}</a>
						</Link>
					) : (
						<a href={href} target="_blank" rel="noreferrer noopener">
							{children}
						</a>
					)
				) : (
					children
				)}
			</span>
		</button>
	);
};
