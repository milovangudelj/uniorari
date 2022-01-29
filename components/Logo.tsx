import { useState } from "react";

type logoProps = {
	variant?: "primary" | "white";
	width?: number;
	height?: number;
	className?: string;
};

type sizeState = {
	w?: number;
	h?: number;
};

export const Logo = ({
	variant = "primary",
	width,
	height,
	className = "",
}: logoProps) => {
	const [size, setSize] = useState<sizeState>({
		w: width || (height * 8) / 5 || 40,
		h: (!width && height) || (width * 5) / 8 || 25,
	});

	return (
		<svg
			width={size.w}
			height={size.h}
			className={`${
				variant === "primary" ? "text-primary-500" : "text-white"
			} fill-current ${className}`}
			viewBox={`0 0 40 25`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M27.5 25C34.4036 25 40 19.4036 40 12.5C40 5.59644 34.4036 0 27.5 0C25.7222 0 24.0312 0.371119 22.5 1.04011V6.90973C23.8269 5.72213 25.5791 5 27.5 5C31.6421 5 35 8.35786 35 12.5C35 16.6421 31.6421 20 27.5 20C23.3579 20 20 16.6421 20 12.5V0H15V12.5C15 19.4036 20.5964 25 27.5 25Z" />
			<path d="M0 15C0 20.5228 4.47715 25 10 25C12.4575 25 14.708 24.1135 16.449 22.6429C15.3032 21.3952 14.366 19.9529 13.6926 18.3712C12.7783 19.3721 11.4625 20 10 20C7.23858 20 5 17.7614 5 15V0H0V15Z" />
		</svg>
	);
};
