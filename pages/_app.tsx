import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../lib/auth";
import { Layout } from "../components";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<AuthProvider>
			<SWRConfig
				value={{
					refreshInterval: 3000,
					fetcher: (resource, init) =>
						fetch(resource, init).then((res) => res.json()),
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</AuthProvider>
	);
}

export default MyApp;
