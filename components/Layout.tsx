import Head from "next/head";
import { Navbar, Footer, SideMenu } from ".";

export const Layout = (props) => {
	return (
		<div className={`relative min-h-screen bg-grey-100 dark:bg-grey-900`}>
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
			<div className="grid grid-cols-layout grid-rows-layout h-screen border-collapse">
				<Navbar className="row-start-1 row-span-1 col-start-1 sticky z-10 top-0 col-span-2" />
				<main className="lg:col-span-1 col-span-2 row-span-1 col-start-1 lg:col-start-2 max-h-full overflow-auto px-10 py-6 row-start-2">
					{props.children}
				</main>
				<SideMenu className="col-span-1 col-start-1 row-span-1 row-start-2" />
				{/* <Footer /> */}
			</div>
		</div>
	);
};
