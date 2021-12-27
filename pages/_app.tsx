import { SWRConfig } from "swr";
import { useEffect, useState } from "react";

import "../styles/globals.css";
import { AuthProvider } from "../lib/auth";
import { Layout } from "../components";
import { ThemeProvider } from "../lib/theme";

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
				<ThemeProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</SWRConfig>
		</AuthProvider>
	);
}

export default MyApp;
