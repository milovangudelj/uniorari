import {
	AcademicCapIcon,
	BookOpenIcon,
	CollectionIcon,
	UserGroupIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const SideMenu = (props) => {
	const router = useRouter();
	const [pages, setPages] = useState([
		{
			name: "Corsi",
			href: "/corsi",
			current: false,
			icon: <CollectionIcon className="w-5 mr-3" />,
		},
		{
			name: "Lezioni",
			href: "/lezioni",
			current: false,
			icon: <BookOpenIcon className="w-5 mr-3" />,
		},
		{
			name: "Docenti",
			href: "/docenti",
			current: false,
			icon: <UserGroupIcon className="w-5 mr-3" />,
		},
		{
			name: "Scuole",
			href: "/scuole",
			current: false,
			icon: <AcademicCapIcon className="w-5 mr-3" />,
		},
	]);

	useEffect(() => {
		const page = pages.find((el) => el.href === router.pathname);
		if (page) page.current = true;
	}, [router.pathname]);

	return (
		<div
			className={`${props.className} bg-grey-50 hidden lg:block py-4 px-2 shadow-sm`}
		>
			<ul className="flex flex-col space-y-2">
				{pages.map((page, idx) => (
					<li key={idx}>
						<Link href={page.href}>
							<a
								className={`flex px-2 py-1 items-center border ${
									page.href === router.pathname
										? "text-on-surface-he border-grey-200"
										: "text-on-surface-me border-transparent"
								} hover:text-on-surface-he hover:bg-grey-100 rounded-lg`}
							>
								<span>{page.icon}</span>
								<span>{page.name}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
