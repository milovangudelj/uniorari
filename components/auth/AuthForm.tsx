import Link from "next/link";
import { useEffect, useState } from "react";

import {
	AuthDivider,
	SignInForm,
	SignUpForm,
	GoogleButton,
	ReCAPTCHADisclaimer,
} from ".";

type formVariant = "signin" | "signup";

type propsType = {
	variant: formVariant;
};

export const AuthForm = (props: propsType) => {
	const [isSignin, setIsSignin] = useState(props.variant === "signin");

	return (
		<div className="min-h-screen flex items-center w-full px-2 py-32">
			<div className="min-w-200 w-full max-w-400 mx-auto">
				<h1 className="text-headline-m mb-8">
					{isSignin ? "Accedi a UniOrari" : "Iscriviti a UniOrari"}
				</h1>

				<GoogleButton />
				<AuthDivider />
				{isSignin ? <SignInForm /> : <SignUpForm />}

				<div className="text-body-m text-on-surface-he absolute top-8 left-8">
					{isSignin ? "Non hai un account?" : "Hai già un account?"}
					{` `}
					<Link href={isSignin ? "/iscriviti" : "/accedi"}>
						<a className="text-accent-500 hover:text-accent-400 transition">
							{isSignin ? "Iscriviti" : "Accedi"}
						</a>
					</Link>
				</div>
				<ReCAPTCHADisclaimer />
			</div>
		</div>
	);
};
