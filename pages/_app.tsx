import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Layout } from "../components";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<SWRConfig
				value={{
					refreshInterval: 10000,
					fetcher: (resource, init) =>
						fetch(resource, init).then((res) => res.json()),
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</SessionProvider>
	);
}

export default MyApp;
