import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from ".";
import { useAuth } from "../lib/auth";
import { ProfilePic } from "./ProfilePic";

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
						<Button variant="primary">
							<Link href="/accedi">Accedi</Link>
						</Button>
					)}
				</header>
			</div>
		</>
	);
};

const ProfileMenu = ({ user, signOut }) => {
	return (
		<div className="group self-center relative flex justify-end">
			{user.image ? (
				<ProfilePic
					src={user.image}
					alt={user.name || user.email}
					title={user.name || user.email}
				/>
			) : (
				<ProfilePic
					title={user.name || user.email}
					letter={user.name?.charAt(0) || user.email?.charAt(0)}
				/>
			)}
			<div className="hidden group-hover:block absolute top-full">
				<div className="mt-1 rounded-lg w-max bg-white border border-grey-100 elevation-1">
					<ul className="text-body-m">
						<li className="border-b border-grey-100 py-1">
							<Link href="#">
								<a className="inline-block w-full py-1 px-2 hover:bg-grey-50">
									I miei corsi
								</a>
							</Link>
						</li>
						<li className="border-b border-grey-100 py-1">
							<Link href="#">
								<a className="inline-block w-full py-1 px-2 hover:bg-grey-50">
									Impostazioni
								</a>
							</Link>
						</li>
						<li className="border-b border-grey-100 py-1">
							<Link href="#">
								<a className="inline-block w-full py-1 px-2 hover:bg-grey-50">
									Tema
								</a>
							</Link>
						</li>
						<li className="py-1">
							<button
								onClick={signOut}
								className="inline-block w-full text-left py-1 px-2 hover:bg-grey-50"
							>
								Log Out
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
 