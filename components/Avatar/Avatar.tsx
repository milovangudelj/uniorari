import { useEffect, useState } from "react";
import Image from "next/image";

import { supabase } from "../../lib/supabase";

export const Avatar = ({ image, who = "?", ...props }) => {
	const [avatarUrl, setAvatarUrl] = useState(null);

	useEffect(() => {
		if (image && !image.includes("https")) {
			downloadImage(image);
		} else {
			setAvatarUrl(image);
		}
	}, [image]);

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

	return (
		<div
			title={who}
			className="rounded-full relative overflow-hidden w-8 h-8 flex items-center justify-center cursor-pointer border border-grey-100 dark:border-grey-800"
		>
			{avatarUrl ? (
				<Image src={avatarUrl} alt={who} layout="fill" objectFit="cover" />
			) : (
				<span className="inline-flex items-center justify-center w-full h-full text-title-l font-medium leading-none text-primary-900 bg-primary-100">
					{who.charAt(0).toUpperCase()}
				</span>
			)}
		</div>
	);
};
