import React from "react";
import {
	getProviders,
	signIn,
	getSession,
	getCsrfToken,
} from "next-auth/react";

export default function SignIn({ providers, csrfToken }) {
	return (
		<div>
			<header>Welcome to our custom page</header>
			<div>
				<div>
					<form method="post" action="/api/auth/signin/email">
						<input
							name="csrfToken"
							type="hidden"
							defaultValue={csrfToken}
						/>
						<label>
							Email address
							<input type="text" id="email" name="email" />
						</label>
						<button type="submit">Use your Email</button>
					</form>
				</div>
				<div>
					{Object.values(providers).map((provider: any) => {
						if (provider.name === "Email") {
							return;
						}
						return (
							<div key={provider.name}>
								<button onClick={() => signIn(provider.id)}>
									Sign in with {provider.name}
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

SignIn.getInitialProps = async (context) => {
	const { req, res } = context;
	const session = await getSession({ req });

	if (session && res && session.accessToken) {
		res.writeHead(302, {
			Location: "/",
		});
		res.end();
		return;
	}

	return {
		session: undefined,
		providers: await getProviders(),
		csrfToken: await getCsrfToken(context),
	};
};
