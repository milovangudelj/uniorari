import { SWRConfig } from "swr";

import "../styles/globals.css";
import "../styles/codeblocks.css";
import { AuthProvider } from "../lib/auth";
import { ThemeProvider } from "../lib/theme";
import { DeviceProvider } from "../lib/device";
import { Layout } from "../components";

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
						{true ? (
							<Layout>
								<Component {...pageProps} />
							</Layout>
						) : (
							<div className="bg-grey-100 w-screen h-screen flex items-center justify-center">
								<img
									src="/johntravolta.png"
									alt="Confused John Travolta"
									className="opacity-10"
								/>
							</div>
						)}
					</ThemeProvider>
				</DeviceProvider>
			</SWRConfig>
		</AuthProvider>
	);
}

export default MyApp;
