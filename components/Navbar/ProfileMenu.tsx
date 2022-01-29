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
				<div className="mt-1 rounded-lg w-max bg-white dark:bg-gray-800 border border-grey-100 elevation-1">
					<ul className="text-body-m">
						<li className="border-b border-grey-100 py-1">
							<Link href="/corsi/salvati">
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
							<ThemeSwitch className="inline-block w-full py-1 px-2" />
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

export default ProfileMenu;
