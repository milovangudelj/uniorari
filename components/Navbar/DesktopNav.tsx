import Link from "next/link";

const DesktopNav = ({ pages, current }) => {
	return (
		<>
			<Link href="/">
				<img
					src="/logo.svg"
					alt="Logo UniOrari"
					title="UniOrari"
					className="mr-8 cursor-pointer"
				/>
			</Link>
			<nav className="mr-auto">
				<ul className="flex text-body-l">
					{pages.map((page, idx) => (
						<li
							key={idx}
							className={`pr-4 ${
								current === page.link
									? "text-accent-500 hover:text-accent-700"
									: "text-on-surface-me hover:text-on-surface-he"
							} transition`}
						>
							<Link href={page.link}>
								<a>{page.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default DesktopNav;
