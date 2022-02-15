import { SWRConfig } from "swr";
import { useEffect, useState } from "react";

import "../styles/globals.css";
import { AuthProvider } from "../lib/auth";
import { Layout } from "../components";
import { ThemeProvider } from "../lib/theme";
import { DeviceProvider } from "../lib/device";

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
				<DeviceProvider>
					<ThemeProvider>
						{false ? (
							<Layout>
								<Component {...pageProps} />
							</Layout>
						) : false ? (
							<div className="bg-grey-100 w-screen h-screen flex items-center justify-center">
								<img
									src="/johntravolta.png"
									alt="Confused John Travolta"
									className="opacity-10"
								/>
							</div>
						) : (
							<Component {...pageProps} />
						)}
					</ThemeProvider>
				</DeviceProvider>
			</SWRConfig>
		</AuthProvider>
	);
}

export default MyApp;
