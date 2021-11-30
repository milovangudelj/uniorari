import { useEffect, useState } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { Navbar, Footer } from ".";

export const Layout = (props) => {
	const { pathname } = useRouter();
	const [excPaths, setExcPaths] = useState(["/login", "/verify-request"]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(!excPaths.some((path) => path === pathname));
	}, [excPaths, pathname]);

	return (
		<div className="relative min-h-screen bg-grey-50">
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#6366F1" />
			</Head>
			{show && <Navbar />}
			{props.children}
			{show && <Footer />}
		</div>
	);
};
