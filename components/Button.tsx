export const Button = ({ children, variant = "primary", ...props }) => {
	return (
		<button
			{...props}
			className={
				props.className +
				(!props.external
					? ` text-body-l text-on-primary-he bg-${variant}-500 hover:bg-${variant}-400 focus:bg-${variant}-600 transition py-2 px-4 rounded-lg`
					: "")
			}
		>
			{children}
		</button>
	);
};
