import { useEffect, useState } from "react";

export const Button = ({
	children,
	variant = "primary",
	size = "regular",
	...props
}) => {
	const [bgStyles, setBgStyles] = useState({
		primary: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600",
		accent: "bg-accent-500 hover:bg-accent-400 focus:bg-accent-600",
		success: "bg-success-500 hover:bg-success-400 focus:bg-success-600",
		error: "bg-error-500 hover:bg-error-400 focus:bg-error-600",
	});

	return (
		<button
			{...props}
			className={
				(props.className ? props.className : "") +
				(!props.external
					? ` text-body-l text-on-primary-he ${bgStyles[variant]} transition py-2 px-4 rounded-lg`
					: "")
			}
		>
			{children}
		</button>
	);
};
