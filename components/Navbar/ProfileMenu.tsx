import {
	BookmarkIcon,
	CogIcon,
	LoginIcon,
	LogoutIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect } from "react";

import { Avatar } from "../Avatar";
import ThemeSwitch from "./ThemeSwitch";

const ProfileMenu = ({ user, signOut }) => {
	return (
		<div className="group self-center relative flex justify-end">
			{user?.image ? (
				<Avatar
					src={user?.image}
					alt={user?.name || user?.email}
					title={user?.name || user?.email}
				/>
			) : (
				<Avatar
					title={user?.name || user?.email}
					letter={user?.name?.charAt(0) || user?.email?.charAt(0)}
				/>
			)}
			<div className="hidden group-hover:block absolute top-full">
				<div className="mt-1 rounded-lg w-max bg-white dark:bg-gray-800 border border-grey-100 shadow-sm">
					<ul className="text-body-m text-on-surface-me">
						<li className="border-b border-grey-100 py-1 hover:text-on-surface-he transition">
							<Link href="/corsi/salvati">
								<a className="inline-flex items-center w-full py-1 px-2 hover:bg-grey-50">
									<span className="inline-block mr-1.5">
										<BookmarkIcon className="w-4 h-4" />
									</span>
									<span>I miei corsi</span>
								</a>
							</Link>
						</li>
						<li className="border-b border-grey-100 py-1 hover:text-on-surface-he transition">
							<Link href="#">
								<a className="inline-flex items-center w-full py-1 px-2 hover:bg-grey-50">
									<span className="inline-block mr-1.5">
										<CogIcon className="w-4 h-4" />
									</span>
									<span>Impostazioni</span>
								</a>
							</Link>
						</li>
						<li className="border-b border-grey-100 py-1 hover:text-on-surface-he transition">
							<ThemeSwitch className="inline-block w-full py-1 px-2" />
						</li>
						<li className="py-1 hover:text-on-surface-he transition">
							{user ? (
								<button
									onClick={signOut}
									className="inline-flex items-center w-full text-left py-1 px-2 hover:bg-grey-50"
								>
									<span className="inline-block mr-1.5">
										<LogoutIcon className="w-4 h-4" />
									</span>
									<span>Log Out</span>
								</button>
							) : (
								<Link href="/accedi" passHref>
									<a className="inline-block w-full text-left py-1 px-2 hover:bg-grey-50">
										<span className="inline-block mr-1.5">
											<LoginIcon className="w-4 h-4" />
										</span>
										<span>Log In</span>
									</a>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfileMenu;
