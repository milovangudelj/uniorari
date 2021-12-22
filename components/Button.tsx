import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

type ButtonVariant = {};

type ButtonProps = {
	children: ReactNode | string;
	external?: boolean;
	variant?: "primary" | "accent" | "success" | "error";
	size?: "small" | "regular" | "big";
	fill?: "filled" | "outlined";
	className?: string;
	type?: "button" | "submit" | "reset";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	loading?: boolean;
};

export const Button = ({
	children,
	external = false,
	variant = "primary",
	size = "regular",
	fill = "filled",
	className,
	type,
	onClick,
	loading = false,
}: ButtonProps) => {
	const [bgStyles, setBgStyles] = useState({
		primary: {
			filled:
				"bg-primary-500 border border-primary-500 hover:bg-primary-400 focus:bg-primary-600 hover:border-primary-400 focus:border-primary-600 text-on-primary-he",
			outlined:
				"bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500 hover:bg-opacity-5 focus:bg-primary-600 focus:bg-opacity-10",
		},
		accent: {
			filled:
				"bg-accent-500 border border-accent-500 hover:bg-accent-400 focus:bg-accent-600 hover:border-accent-400 focus:border-accent-600 text-on-primary-he",
			outlined:
				"bg-transparent border border-accent-500 text-accent-500 hover:bg-accent-500 hover:bg-opacity-5 focus:bg-accent-600 focus:bg-opacity-10",
		},
		success: {
			filled:
				"bg-success-500 border border-success-500 hover:bg-success-400 focus:bg-success-600 hover:border-success-400 focus:border-success-600 text-on-primary-he",
			outlined:
				"bg-transparent border border-success-500 text-success-500 hover:bg-success-500 hover:bg-opacity-5 focus:bg-success-600 focus:bg-opacity-10",
		},
		error: {
			filled:
				"bg-error-500 border border-error-500 hover:bg-error-400 focus:bg-error-600 hover:border-error-400 focus:border-error-600 text-on-primary-he",
			outlined:
				"bg-transparent border border-error-500 text-error-500 hover:bg-error-500 hover:bg-opacity-5 focus:bg-error-600 focus:bg-opacity-10",
		},
	});
	const [sizes, setSizes] = useState({
		small: "text-label-s py-1 px-2 rounded",
		regular: "text-label-m py-1.5 px-3 rounded-md",
		big: "text-label-l py-2 px-4 rounded-lg",
	});

	return (
		<button
			disabled={loading}
			type={type}
			onClick={onClick}
			className={`${className} ${loading && "bg-opacity-50"} ${
				!external &&
				` ${sizes[size]} ${bgStyles[variant][fill]} uppercase tracking-wide font-medium transition`
			}`}
		>
			{children}
		</button>
	);
};
