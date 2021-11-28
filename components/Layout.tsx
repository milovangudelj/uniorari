import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Navbar, Footer } from ".";

export const Layout = (props) => {
	const { pathname } = useRouter();
	const [excPaths, setExcPaths] = useState(["/login", "/verify-request"]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(!excPaths.some((path) => path === pathname));
	}, [excPaths, pathname]);

	return (
		<div className="min-h-screen bg-grey-50">
			{show && <Navbar />}
			{props.children}
			{show && <Footer />}
		</div>
	);
};
