export const ProfilePic = (props) => {
	return props.src ? (
		<img
			src={props.src}
			alt={props.alt}
			title={props.title}
			className="rounded-full w-8 h-8 border border-grey-100"
		/>
	) : (
		<div
			title={props.title}
			className="rounded-full w-8 h-8 flex items-center justify-center text-title-l font-medium leading-none text-primary-900 bg-primary-100 cursor-pointer"
		>
			{props.letter?.toUpperCase()}
		</div>
	);
};
