import Image from "next/image";
import { Placeholder } from "..";

export const CardDocenteSkeleton = () => {
	return (
		<div className="bg-grey-50 dark:bg-grey-700 shadow rounded-lg overflow-hidden">
			<div className="flex items-center p-4 gap-4">
				<span className="block relative w-16 aspect-square rounded-full overflow-hidden bg-grey-300 dark:bg-grey-700">
					<Image
						src={"/assets/images/profile-placeholder.webp"}
						alt={`Placeholder immagine profilo`}
						layout="fill"
						objectFit="cover"
					/>
				</span>
				<div className="w-min flex flex-col md:w-max">
					<Placeholder size="2xl" shade="emphasized" className="w-40" />
					<Placeholder size="sm" shade="emphasized" />
				</div>
			</div>
			<div className="p-4 h-full bg-grey-100 dark:bg-grey-800">
				<span className="text-sm font-medium">Corsi</span>
				<div className="mt-2 flex gap-1">
					<Placeholder />
				</div>
			</div>
		</div>
	);
};
