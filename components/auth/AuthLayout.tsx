export const AuthLayout = (props) => {
	return (
		<div className="h-screen w-screen flex">
			<div className="flex items-center justify-center h-full w-1/2 bg-grey-50 relative">
				{props.children}
			</div>
			<div className="h-full w-1/2 relative justify-center overflow-hidden bg-unsplash-random bg-center bg-cover">
				<a
					href="https://unsplash.com"
					className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-white rounded"
					title="Courtesy of Usplash"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
							fill="#000000"
							fillRule="nonzero"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};
