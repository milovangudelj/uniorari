import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../lib/auth";
import { Button } from "..";
import ProfileMenu from "./ProfileMenu";

const pages = [
	{
		name: "Corsi",
		link: "/corsi",
	},
	{
		name: "Docenti",
		link: "/docenti",
	},
	{
		name: "Scuole",
		link: "/scuole",
	},
];

export const Navbar = () => {
	const router = useRouter();

	const { user, loading, signOut } = useAuth();

	return (
		<>
			<div className="w-full bg-white border-b border-grey-100 flex justify-center sticky top-0 z-20">
				<header className="max-w-7xl w-full flex items-center px-2 py-3">
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
										router.pathname === page.link
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
					{user ? (
						<ProfileMenu user={user} signOut={signOut} />
					) : (
						<div>
							<Link href="/accedi">
								<a className="mr-4 text-on-surface-me hover:text-on-surface-he transition">
									Accedi
								</a>
							</Link>
							<Button variant="primary">
								<Link href="/iscriviti">Iscriviti</Link>
							</Button>
						</div>
					)}
				</header>
			</div>
		</>
	);
};
