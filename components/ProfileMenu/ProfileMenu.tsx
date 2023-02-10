import {
	BookmarkIcon,
	CogIcon,
	LoginIcon,
	LogoutIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useOnClickOutside } from "../../lib/hooks/useOnClickOutside";
import { Avatar, ThemeSwitch } from "..";
import { MenuItem } from "./MenuItem";

export const ProfileMenu = ({ user, signOut }) => {
	const [menuHidden, setMenuHidden] = useState(true);

	const ref = useRef(null);

	const handleClickInside = () => {
		setMenuHidden(false);
	};

	const handleClickOutside = () => {
		setMenuHidden(true);
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<div
			className="group self-center relative flex justify-end"
			ref={ref}
			onClick={handleClickInside}
		>
			<Avatar image={user?.immagine} who={user?.nome || user?.email} />
			{!menuHidden && (
				<div className={`absolute top-full`}>
					<div className="mt-1 rounded-lg w-max bg-grey-50 dark:bg-grey-800 shadow-lg overflow-hidden">
						<ul className="text-body-m divide-y divide-grey-100 dark:divide-grey-700 text-on-surface-me dark:text-on-primary-me">
							<MenuItem>
								<Link href="/corsi/salvati">
									<a className="inline-flex items-center w-full py-1 px-2 hover:bg-grey-100 transition duration-100 dark:hover:bg-grey-700">
										<span className="inline-block mr-1.5">
											<BookmarkIcon className="w-4 h-4" />
										</span>
										<span>I miei corsi</span>
									</a>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#">
									<a className="inline-flex items-center w-full py-1 px-2 hover:bg-grey-100 transition duration-100 dark:hover:bg-grey-700">
										<span className="inline-block mr-1.5">
											<CogIcon className="w-4 h-4" />
										</span>
										<span>Impostazioni</span>
									</a>
								</Link>
							</MenuItem>
							<MenuItem>
								<ThemeSwitch className="inline-block w-full py-1 px-2" />
							</MenuItem>
							{user ? (
								<MenuItem>
									<button
										onClick={signOut}
										className="inline-flex items-center w-full text-left py-1 px-2 hover:bg-grey-100 transition duration-100 dark:hover:bg-grey-700"
									>
										<span className="inline-block mr-1.5">
											<LogoutIcon className="w-4 h-4" />
										</span>
										<span>Esci</span>
									</button>
								</MenuItem>
							) : (
								<MenuItem>
									<Link href="/accedi" passHref>
										<a className="inline-block w-full text-left py-1 px-2 hover:bg-grey-100 transition duration-100 dark:hover:bg-grey-700">
											<span className="inline-block mr-1.5">
												<LoginIcon className="w-4 h-4" />
											</span>
											<span>Accedi</span>
										</a>
									</Link>
								</MenuItem>
							)}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};
