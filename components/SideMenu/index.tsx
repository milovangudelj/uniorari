import {
	AcademicCapIcon,
	BookOpenIcon,
	CollectionIcon,
	UserGroupIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo } from "../Logo";

const pages = [
	{
		name: "Corsi",
		href: "/corsi",
		icon: <CollectionIcon className="w-6 mr-3" />,
	},
	{
		name: "Lezioni",
		href: "/lezioni",
		icon: <BookOpenIcon className="w-6 mr-3" />,
	},
	{
		name: "Docenti",
		href: "/docenti",
		icon: <UserGroupIcon className="w-6 mr-3" />,
	},
	{
		name: "Scuole",
		href: "/scuole",
		icon: <AcademicCapIcon className="w-6 mr-3" />,
	},
];

export const SideMenu = (props) => {
	const router = useRouter();

	return (
		<div
			className={`${props.className} bg-grey-50 p-4 shadow-md border border-grey-200`}
		>
			<Link href="/">
				<a className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-500 mb-6">
					<Logo variant="white" width={24} />
				</a>
			</Link>
			<ul>
				{pages.map((page, idx) => (
					<li className="mb-2" key={idx}>
						<Link href={page.href}>
							<a
								className={`flex p-2 border ${
									page.href === router.pathname
										? "text-on-surface-he border-grey-200"
										: "text-on-surface-me border-transparent"
								} hover:text-on-surface-he hover:bg-grey-100 rounded-lg`}
							>
								<span>{page.icon}</span> {page.name}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
