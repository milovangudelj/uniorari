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
	const { pathname } = useRouter();
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

	return (
		<div
			className={`${props.className} bg-grey-50 hidden lg:block py-4 shadow-sm`}
		>
			<ul className="flex flex-col space-y-2">
				{pages.map((page, idx) => {
					const current = page.href === pathname;
					return (
						<li key={idx} className="flex relative items-center px-2">
							{current && (
								<span className="block absolute left-0 top-1 bottom-1 rounded-tr-full rounded-br-full w-1 bg-primary-500"></span>
							)}
							<Link href={page.href}>
								<a
									className={`flex px-2 py-1 w-full items-center relative ${
										current
											? "text-on-surface-he"
											: "text-on-surface-me"
									} hover:text-on-surface-he hover:bg-grey-100 rounded-lg`}
								>
									<span>{page.icon}</span>
									<span>{page.name}</span>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
