/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useAuth } from "../lib/auth";
import { Avatar } from "./Avatar";
import { Button } from ".";

const navigation = [
	{ name: "Corsi", href: "/corsi" },
	{ name: "Docenti", href: "/docenti" },
	{ name: "Scuole", href: "/scuole" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const TailwindNav = () => {
	const { pathname } = useRouter();

	const { user, loading, signOut } = useAuth();

	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<Link href="/">
										<img
											src="/logo.svg"
											alt="Logo UniOrari"
											title="UniOrari"
											className="block h-6 w-auto mr-2 cursor-pointer"
										/>
									</Link>
									<span className="hidden text-white font-semibold text-title-l md:inline">
										UniOrari
									</span>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link key={item.name} href={item.href}>
												<a
													className={classNames(
														item.href === pathname
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"px-3 py-2 rounded-md text-sm font-medium"
													)}
													aria-current={
														item.href === pathname
															? "page"
															: undefined
													}
												>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* <button
									type="button"
									className="hidden md:inline bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button> */}

								{/* Profile dropdown */}
								<Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											{/* <span className="sr-only">Open user menu</span>
												<img
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/> */}
											{user ? (
												user.image ? (
													<Avatar
														src={user.image}
														alt={user.name || user.email}
														title={user.name || user.email}
													/>
												) : (
													<Avatar
														title={user.name || user.email}
														letter={
															user.name?.charAt(0) ||
															user.email?.charAt(0)
														}
													/>
												)
											) : (
												<div>
													<Link href="/accedi">
														<a className="hidden md:inline mr-4 text-on-primary-me hover:text-on-primary-he transition">
															Accedi
														</a>
													</Link>
													<Button variant="primary">
														<Link href="/iscriviti">
															Iscriviti
														</Link>
													</Button>
												</div>
											)}
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<Link href="#">
														<a
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Your Profile
														</a>
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link href="#">
														<a
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}
														>
															Settings
														</a>
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														onClick={signOut}
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									aria-current={
										item.href === pathname ? "page" : undefined
									}
								>
									<a
										className={classNames(
											item.href === pathname
												? "bg-gray-900 text-white"
												: "text-gray-300 hover:bg-gray-700 hover:text-white",
											"block px-3 py-2 rounded-md text-base font-medium"
										)}
									>
										{item.name}
									</a>
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
