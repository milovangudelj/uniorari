import Link from "next/link";

import { useAuth } from "../../lib/auth";
import { AuthDivider, SignInForm, SignUpForm } from ".";
import { GoogleButton } from "..";
import { useEffect, useState } from "react";

type formVariant = "signin" | "signup";

type propsType = {
	variant: formVariant;
};

export const AuthForm = (props: propsType) => {
	const [isSignin, setIsSignin] = useState(props.variant === "signin");

	// useEffect(() => {
	// 	setIsSignin(props.variant === "signin");
	// });

	// my auth variables
	const { signInWithGoogle } = useAuth();

	return (
		<>
			<h1 className="text-display-s mb-2">
				{isSignin ? "Accedi" : "Iscriviti"}
			</h1>
			<p className="text-body-l text-on-surface-me mb-10">
				{isSignin
					? "Accedi per vedere il tuo calendario"
					: "Iscriviti per vedere il tuo calendario"}
			</p>
			<GoogleButton onClick={signInWithGoogle} />
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
		</>
	);
};
