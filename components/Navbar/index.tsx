import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../lib/auth";
import { Button } from "..";
import ProfileMenu from "./ProfileMenu";
import { useDevice } from "../../lib/device";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

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
	const { width } = useDevice();

	return (
		<>
			<div className="w-full bg-white border-b border-grey-100 flex justify-center sticky top-0 z-20">
				<header className="max-w-7xl w-full flex items-center justify-between px-4 py-3">
					{width <= 640 ? (
						<MobileNav pages={pages} current={router.pathname} />
					) : (
						<DesktopNav pages={pages} current={router.pathname} />
					)}
					{user ? (
						<ProfileMenu user={user} signOut={signOut} />
					) : (
						<div>
							{width > 640 && (
								<Link href="/accedi">
									<a className="mr-4 text-on-surface-me hover:text-on-surface-he transition">
										Accedi
									</a>
								</Link>
							)}
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
