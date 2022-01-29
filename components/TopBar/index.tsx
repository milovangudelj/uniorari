import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useAuth } from "../../lib/auth";
import ProfileMenu from "../Navbar/ProfileMenu";

export const TopBar = (props) => {
	const { user, signOut } = useAuth();
	const [inputFocused, setInputFocused] = useState(false);

	const handleInputFocus = (focused) => {
		setInputFocused(focused);
	};

	return (
		<div
			className={`${props.className} flex justify-between bg-grey-50 py-4 px-10 shadow-md border border-grey-200`}
		>
			<form
				action=""
				className="group flex p-2 border border-grey-200 w-max text-on-surface-le rounded-lg bg-grey-100"
			>
				<span>
					<SearchIcon
						className={`w-6 mr-3 ${inputFocused && "text-on-surface-me"}`}
					/>
				</span>
				<input
					type="text"
					placeholder="Cerca..."
					className="bg-transparent placeholder-on-surface-me focus:placeholder-on-surface-le text-on-surface-me outline-none"
					onFocus={() => handleInputFocus(true)}
					onBlur={() => handleInputFocus(false)}
				/>
				<span className="ml-3 text-on-surface-le">Ctrl + /</span>
			</form>
			<ProfileMenu user={user} signOut={signOut} />
		</div>
	);
};
