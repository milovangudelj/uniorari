export const MenuItem = (props) => {
	return (
		<li className="py-1 hover:text-on-surface-he dark:hover:text-on-primary-he transition duration-100">
			{props.children}
		</li>
	);
};
