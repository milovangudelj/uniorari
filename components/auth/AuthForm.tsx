import Image from "next/image";
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
		<div className="min-h-screen flex md:items-center w-full px-4 py-8 md:py-32 ">
			<div className="min-w-[200px] w-full max-w-[400px] mx-auto">
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="Logo UniOrari"
						title="UniOrari"
						className="mr-8 cursor-pointer"
						width={40}
						height={25}
					/>
				</Link>
				<h1 className="text-headline-m font-semibold mt-8 mb-8">
					{isSignin ? "Accedi a UniOrari" : "Iscriviti a UniOrari"}
				</h1>

				<GoogleButton />
				<AuthDivider />
				{isSignin ? <SignInForm /> : <SignUpForm />}

				<div className="text-body-m text-on-surface-he dark:text-on-primary-he md:absolute md:top-8 md:left-8 md:my-0 my-6">
					{isSignin ? "Non hai un account?" : "Hai già un account?"}
					{` `}
					<Link
						href={isSignin ? "/iscriviti" : "/accedi"}
						className="text-accent-500 dark:text-accent-400 hover:text-accent-400 dark:hover:text-accent-300 transition"
					>
						{isSignin ? "Iscriviti" : "Accedi"}
					</Link>
				</div>
				{!isSignin && <ReCAPTCHADisclaimer />}
			</div>
		</div>
	);
};
