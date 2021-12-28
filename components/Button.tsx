import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

type ButtonVariant = {};

type ButtonProps = {
	children: ReactNode | string;
	external?: boolean;
	variant?: "primary" | "accent" | "success" | "error";
	size?: "small" | "large";
	outlined?: boolean;
	className?: string;
	type?: "button" | "submit" | "reset";
	onClick?: MouseEventHandler<HTMLButtonElement>;
	loading?: boolean;
};

export const Button = ({
	children,
	external = false,
	variant = "primary",
	size,
	outlined = false,
	className = "",
	type,
	onClick,
	loading = false,
}: ButtonProps) => {
	const [variants, setVariants] = useState({
		primary: "btn-primary",
		accent: "btn-accent",
		success: "btn-success",
		error: "btn-error",
	});
	const [sizes, setSizes] = useState({
		small: "btn-s",
		large: "btn-l",
	});

	return (
		<button
			disabled={loading}
			type={type}
			onClick={onClick}
			className={`${
				!external &&
				`btn ${variants[variant]} ${size && sizes[size]} ${
					outlined && "btn-outlined"
				}`
			} ${loading && "bg-opacity-50 border-opacity-50"} ${className}`}
		>
			{children}
		</button>
	);
};
