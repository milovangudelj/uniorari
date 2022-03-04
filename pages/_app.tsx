import { ApolloProvider } from "@apollo/client";
import Image from "next/image";
import { SWRConfig } from "swr";

import "../styles/globals.css";
import "../styles/codeblocks.css";
import { AuthProvider } from "../lib/auth";
import { ThemeProvider } from "../lib/theme";
import { DeviceProvider } from "../lib/device";
import { Layout } from "../components";
import apolloClient from "../lib/apollo";

function MyApp({ Component, pageProps: { session, fallback, ...pageProps } }) {
	return (
		<ApolloProvider client={apolloClient}>
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
								<Component {...pageProps} />
							) : (
								<div className="bg-grey-100 w-screen h-screen flex items-center justify-center">
									<Image
										src="/assets/images/johntravolta.webp"
										alt="Confused John Travolta"
										className="opacity-10"
										width={224}
										height={230}
									/>
								</div>
							)}
						</ThemeProvider>
					</DeviceProvider>
				</SWRConfig>
			</AuthProvider>
		</ApolloProvider>
	);
}

export default MyApp;
