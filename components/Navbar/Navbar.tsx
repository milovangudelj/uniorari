import { LoginIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useAuth } from "../../lib/auth";
import { Button, Logo, ProfileMenu } from "..";

export const Navbar = (props) => {
	const { user, signOut } = useAuth();
	const [inputFocused, setInputFocused] = useState(false);

	const handleInputFocus = (focused) => {
		setInputFocused(focused);
	};

	return (
		<div
			className={`flex justify-between items-center bg-grey-50 dark:bg-grey-800 py-4 px-10 shadow-md ${props.className}`}
		>
			<div className="flex items-center">
				<Link href="/" passHref>
					<a>
						<Logo className="h-6 mr-8" variant="full" />
					</a>
				</Link>
				<form
					action=""
					className="hidden lg:flex group p-2 shadow-sm w-max transition text-on-surface-le dark:text-on-primary-le rounded-lg bg-grey-100 dark:bg-grey-700"
				>
					<span>
						<SearchIcon
							className={`w-5 mr-3 transition ${
								inputFocused &&
								"text-on-surface-me dark:text-on-primary-me"
							}`}
						/>
					</span>
					<input
						type="text"
						placeholder="Cerca..."
						className="bg-transparent transition placeholder-on-surface-me dark:placeholder-on-primary-me focus:placeholder-on-surface-le dark:focus:placeholder-on-primary-le text-on-surface-me dark:text-on-primary-me outline-none"
						onFocus={() => handleInputFocus(true)}
						onBlur={() => handleInputFocus(false)}
					/>
					<span className="ml-3 text-on-surface-le dark:text-on-primary-le">
						ctrl + f
					</span>
				</form>
			</div>
			{user ? (
				<ProfileMenu user={user} signOut={signOut} />
			) : (
				<Button
					as={Link}
					href="/accedi"
					passHref
					endIcon={<LoginIcon className="w-4 h-4" />}
				>
					Accedi
				</Button>
			)}
		</div>
	);
};
