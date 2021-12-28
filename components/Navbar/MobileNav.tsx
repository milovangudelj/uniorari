import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

const MobileNav = ({ pages, current }) => {
	const [open, setOpen] = useState(false);

	const handleMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			<nav className="flex items-center">
				<button onClick={handleMenu}>
					{open ? (
						<XIcon className="w-6 text-gray-700" />
					) : (
						<MenuIcon className="w-6 text-gray-700" />
					)}
				</button>
				{open && (
					<ul className="flex text-body-l absolute top-full left-0 right-0 p-4 bg-white border-b border-grey-100">
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
				)}
			</nav>
			<Link href="/">
				<img
					src="/logo.svg"
					alt="Logo UniOrari"
					title="UniOrari"
					className="mr-8 cursor-pointer absolute left-1/2 -ml-5"
				/>
			</Link>
		</>
	);
};

export default MobileNav;
