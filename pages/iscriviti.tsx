import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { gql } from "@apollo/client";
import ReCAPTCHA from "react-google-recaptcha";

import { Button } from "../components";
import apolloClient from "../lib/apollo";
import { useAuth } from "../lib/auth";

const path =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://uniorari.it";

const schema = yup
	.object({
		email: yup
			.string()
			.email("Inserisci un indirizzo email valido")
			.required("Questo campo è obbligatorio"),
		name: yup
			.string()
			.required("Questo campo è obbligatorio")
			.matches(
				/^[^0-9!"#$%£%&'()§*+,\-.\/\\°:;<=>?@[\]^_`{|}~]+$/,
				"Il nome non deve contenere numeri o segni di punteggiatura"
			),
		username: yup
			.string()
			.required("Questo campo è obbligatorio")
			.min(
				8,
				"L'username deve avere una lunghezza compresa tra 8 e 20 caratteri"
			)
			.max(
				20,
				"L'username deve avere una lunghezza compresa tra 8 e 20 caratteri"
			)
			.matches(/^\w.+$/, {
				message: "L'username non può contenere nessun carattere speciale",
			}),
	})
	.required();

const queryEmailUtente = gql`
	query ($emailUtente: String!) {
		utente(emailUtente: $emailUtente) {
			email
		}
	}
`;

const queryUsernameUtente = gql`
	query ($usernameUtente: String!) {
		utente(usernameUtente: $usernameUtente) {
			username
		}
	}
`;

const exists = async (emailUtente, usernameUtente) => {
	const res1 = await apolloClient.query({
		query: queryEmailUtente,
		variables: { emailUtente },
	});

	const res2 = await apolloClient.query({
		query: queryUsernameUtente,
		variables: { usernameUtente },
	});

	return {
		email: res1.data.utente !== null && !res1.error,
		username: res2.data.utente !== null && !res2.error,
	};
};

const SignUp = ({ providers, csrfToken }) => {
	const router = useRouter();
	const { error } = router.query;

	const { signUp, signInWithGoogle } = useAuth();

	const recaptchaRef = useRef(null);

	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmitWithReCAPTCHA = async (formData) => {
		const token = await recaptchaRef.current.executeAsync();

		const { success } = await (
			await fetch(`${path}/api/verifyCaptcha?token=${token}`)
		).json();

		if (success) {
			let userLookup = await exists(formData.email, formData.username);

			if (userLookup.email) {
				setError("email", {
					type: "manual",
					message: "Questa mail è già associata a un'altro account",
				});
			}

			if (userLookup.username) {
				setError("username", {
					type: "manual",
					message: "Questo username è già in uso da a un'altro account",
				});
			}

			if (!userLookup.email && !userLookup.username) await signUp(formData);
		}
	};

	return (
		<div className="h-screen w-screen flex">
			<Head>
				<title>Iscriviti | UniOrari</title>
				<meta name="description" content="Orari delle lezioni" />
			</Head>
			<div className="flex items-center justify-center h-full w-1/2 bg-grey-50 relative">
				{error && <SignInError error={error} />}
				<div className="min-w-200 w-full max-w-400 p-2 rounded-lg">
					<h1 className="text-display-s mb-2">Iscriviti</h1>
					<p className="text-body-l text-on-surface-me mb-10">
						Iscriviti per vedere il tuo calendario
					</p>
					<div>
						<GoogleButton onClick={signInWithGoogle} />
					</div>
					<div className="w-full flex my-10 items-center">
						<div className="h-px w-full bg-grey-300"></div>
						<span className="text-body-m inline-block flex-none text-grey-500 mx-2">
							oppure
						</span>
						<div className="h-px w-full bg-grey-300"></div>
					</div>
					<form onSubmit={handleSubmit(onSubmitWithReCAPTCHA)} noValidate>
						<div>
							<label htmlFor="name" className="text-body-l">
								Nome<span className="text-accent-500">*</span>
							</label>
							<div className="mt-2 mb-4">
								<input
									type="text"
									id="name"
									name="name"
									placeholder="John Doe"
									autoComplete="off"
									{...register("name")}
									className={`outline-none text-body-m py-3 px-4 rounded-lg border ${
										errors.name
											? "border-error-500"
											: "border-grey-200"
									} bg-grey-100 hover:border-grey-300 hover:bg-white focus:border-primary-300 focus:bg-white transition w-full leading-5`}
								/>
								{errors.name && (
									<span className="text-label-l text-error-500">
										{errors.name.message}
									</span>
								)}
							</div>
							<label htmlFor="username" className="text-body-l">
								Username<span className="text-accent-500">*</span>
							</label>
							<div className="mt-2 mb-4">
								<input
									type="text"
									id="username"
									name="username"
									placeholder="johndoe"
									autoComplete="off"
									{...register("username")}
									className={`outline-none text-body-m py-3 px-4 rounded-lg border ${
										errors.username
											? "border-error-500"
											: "border-grey-200"
									} bg-grey-100 hover:border-grey-300 hover:bg-white focus:border-primary-300 focus:bg-white transition w-full leading-5`}
								/>
								{errors.username && (
									<span className="text-label-l text-error-500">
										{errors.username.message}
									</span>
								)}
							</div>
							<label htmlFor="email" className="text-body-l">
								Email<span className="text-accent-500">*</span>
							</label>
							<div className="mt-2">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="email@example.com"
									autoComplete="off"
									{...register("email")}
									className={`outline-none text-body-m py-3 px-4 rounded-lg border ${
										errors.email
											? "border-error-500"
											: "border-grey-200"
									} bg-grey-100 hover:border-grey-300 hover:bg-white focus:border-primary-300 focus:bg-white transition w-full leading-5`}
								/>
								{errors.email && (
									<span className="text-label-l text-error-500">
										{errors.email.message}
									</span>
								)}
							</div>
						</div>
						<Button
							type="submit"
							variant="primary"
							className="w-full mt-10"
						>
							Iscriviti
						</Button>
						<ReCAPTCHA
							ref={recaptchaRef}
							size="invisible"
							className="hidden"
							sitekey={
								process.env.NODE_ENV === "development"
									? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Google test key
									: "6LcbumsdAAAAAEhh7TJKEtWMx-qGXug5zEvTHSAZ" // My site key
							}
						/>
					</form>
					<div className="text-body-m text-on-surface-he absolute top-8 left-8">
						Hai già un account?{` `}
						<Link href="/accedi">
							<a className="text-accent-500 hover:text-accent-400 transition">
								Accedi
							</a>
						</Link>
					</div>
					<div className="text-label-s text-on-surface-le mt-2">
						This site is protected by reCAPTCHA and the Google{" "}
						<a
							href="https://policies.google.com/privacy"
							className="text-primary-500"
						>
							Privacy Policy
						</a>{" "}
						and{" "}
						<a
							href="https://policies.google.com/terms"
							className="text-primary-500"
						>
							Terms of Service
						</a>{" "}
						apply.
					</div>
				</div>
			</div>
			<div className="h-full w-1/2 relative justify-center overflow-hidden bg-unsplash-random bg-center bg-cover">
				<a
					href="https://unsplash.com"
					className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-white rounded"
					title="Courtesy of Usplash"
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
							fill="#000000"
							fillRule="nonzero"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default SignUp;

const GoogleButton = ({ onClick }) => {
	return (
		<div>
			<Button
				onClick={onClick}
				external
				className="w-full text-sm font-roboto font-medium text-white uppercase flex justify-center items-center rounded-lg px-2 h-10 bg-google-darkBg shadow-none hover:shadow-google focus:bg-google-darkBgFocus focus:shadow-none transition"
			>
				<span className="mr-5 bg-white rounded-full p-1">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						width="18px"
						height="18px"
						viewBox="0 0 48 48"
						className="abcRioButtonSvg"
					>
						<g>
							<path
								fill="#EA4335"
								d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
							></path>
							<path
								fill="#4285F4"
								d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
							></path>
							<path
								fill="#FBBC05"
								d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
							></path>
							<path
								fill="#34A853"
								d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
							></path>
							<path fill="none" d="M0 0h48v48H0z"></path>
						</g>
					</svg>
				</span>
				Accedi con Google
			</Button>
		</div>
	);
};

const errors = {
	Signin: "Try signing with a different account.",
	OAuthSignin: "Try signing with a different account.",
	OAuthCallback: "Try signing with a different account.",
	OAuthCreateAccount: "Try signing with a different account.",
	EmailCreateAccount: "Try signing with a different account.",
	Callback: "Try signing with a different account.",
	OAuthAccountNotLinked:
		"To confirm your identity, sign in with the same account you used originally.",
	EmailSignin: "Check your email address.",
	CredentialsSignin:
		"Sign in failed. Check the details you provided are correct.",
	default: "Unable to sign in.",
};
const SignInError = ({ error }) => {
	const errorMessage = error && (errors[error] ?? errors.default);
	return (
		<div className="absolute top-28 py-2 px-4 bg-error-50 text-error-700 border border-error-700 rounded-lg text-label-l">
			{errorMessage}
		</div>
	);
};
