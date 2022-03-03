import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "../../lib/auth";
import { Logo } from "../Logo";
import ProfileMenu from "../Navbar/ProfileMenu";

export const TopBar = (props) => {
	const { user, signOut } = useAuth();
	const [inputFocused, setInputFocused] = useState(false);

	useEffect(() => {
		console.log(user);
	}, [user]);

	const handleInputFocus = (focused) => {
		setInputFocused(focused);
	};

	return (
		<div
			className={`flex justify-between bg-grey-50 py-4 px-10 shadow-sm ${props.className}`}
		>
			<div className="flex items-center">
				<Link href="/" passHref>
					<a>
						<Logo className="h-6 mr-8" variant="full" />
					</a>
				</Link>
				<form
					action=""
					className="hidden lg:flex group p-2 shadow-sm w-max transition text-on-surface-le rounded-lg bg-grey-100"
				>
					<span>
						<SearchIcon
							className={`w-5 mr-3 transition ${
								inputFocused && "text-on-surface-me"
							}`}
						/>
					</span>
					<input
						type="text"
						placeholder="Cerca..."
						className="bg-transparent transition placeholder-on-surface-me focus:placeholder-on-surface-le text-on-surface-me outline-none"
						onFocus={() => handleInputFocus(true)}
						onBlur={() => handleInputFocus(false)}
					/>
					<span className="ml-3 text-on-surface-le">ctrl + f</span>
				</form>
			</div>
			<ProfileMenu user={user} signOut={signOut} />
		</div>
	);
};
