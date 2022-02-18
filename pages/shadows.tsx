const Shadows = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center space-y-16 bg-grey-50">
			<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-sm hover:shadow-4xl transition duration-200"></div>
			<div className="flex space-x-4 items-center justify-center">
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-none"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-sm"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-md"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-lg"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-xl"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-2xl"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-3xl"></div>
				<div className="bg-primary-500 rounded-xl w-24 h-24 shadow-4xl"></div>
				<div className="rounded-xl w-24 h-24 shadow-inner"></div>
			</div>
			<div className="flex space-x-4 items-center justify-center">
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-none"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-sm"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-md"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-lg"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-xl"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-2xl"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-3xl"></div>
				<div className="bg-primary-500 shadow-primary-500/5 rounded-xl w-24 h-24 shadow-4xl"></div>
				<div className="shadow-primary-500/5 rounded-xl w-24 h-24 shadow-inner"></div>
			</div>
		</div>
	);
};

export default Shadows;
