import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const ProfilePic = (props) => {
	const [avatarUrl, setAvatarUrl] = useState(null);

	useEffect(() => {
		if (props.src && !props.src.includes("https")) {
			downloadImage(props.src);
		} else {
			setAvatarUrl(props.src);
		}
	}, [props.src]);

	async function downloadImage(path) {
		try {
			const { data, error } = await supabase.storage
				.from("avatars")
				.download(path);
			if (error) {
				throw error;
			}
			const url = URL.createObjectURL(data);
			setAvatarUrl(url);
		} catch (error) {
			console.log("Error downloading image: ", error.message);
		}
	}

	return props.src ? (
		<img
			src={avatarUrl}
			alt={props.alt}
			title={props.title}
			className="rounded-full w-8 h-8 border border-grey-100"
		/>
	) : (
		<div
			title={props.title}
			className="rounded-full w-8 h-8 flex items-center justify-center text-title-l font-medium leading-none text-primary-900 bg-primary-100 cursor-pointer"
		>
			{props.letter?.toUpperCase()}
		</div>
	);
};
