import { useRouter } from "next/router";
import { Navbar, Footer } from ".";

export const Layout = (props) => {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-grey-50">
			{router.pathname !== "/login" && <Navbar />}
			{props.children}
			{router.pathname !== "/login" && <Footer />}
		</div>
	);
};
