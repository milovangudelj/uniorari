import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { gql } from "@apollo/client";

import apolloClient from "../../lib/apollo";
import { useAuth } from "../../lib/auth";
import { Button } from "..";

const schema = yup
	.object({
		email: yup
			.string()
			.email("Inserisci un indirizzo email valido")
			.required("Questo campo è obbligatorio"),
		password: yup
			.string()
			.required("Questo campo è obbligatorio")
			.min(8, "La password deve avere almeno 8 caratteri.")
			.max(32, "La password non deve avere più di 32 caratteri.")
			.matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, {
				message:
					"La password deve contenere almeno un numero e avere sia lettere minuscole che maiuscole.",
			}),
	})
	.required();

const queryProfilo = gql`
	query Profilo($email: String) {
		profilo(email: $email) {
			email
		}
	}
`;

export const SignInForm = () => {
	const [loading, setLoading] = useState(false);

	// my auth variables
	const { signInWithPassword } = useAuth();

	// react-hook-form variables
	const {
		register,
		handleSubmit,
		setError,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// reference to the reCAPTCHA component
	const recaptchaRef = useRef(null);

	const onSubmitWithReCAPTCHA = async (formData) => {
		setLoading(true);
		// const token = await recaptchaRef.current.executeAsync();

		// const { success } = await fetch(
		// 	`/api/verify-captcha?token=${token}`
		// ).then((res) => res.json());

		// if (success) {
		// 	// stuff to do if reCAPTCHA succeds
		// }

		const { data, loading, error } = await apolloClient.query({
			query: queryProfilo,
			variables: { email: formData.email },
		});

		if (error || data.profilo === null) {
			setError("email", {
				type: "manual",
				message:
					"Questa mail non è associata a nessun account. Iscriviti prima di accedere.",
			});

			setLoading(false);
			return;
		}

		// attempt signin
		const signinRes = await signInWithPassword({
			email: formData.email,
			password: formData.password,
		});

		if (signinRes?.error) {
			setError("password", {
				type: "manual",
				message: "La password inserita non è corretta.",
			});

			setLoading(false);
			return;
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmitWithReCAPTCHA)} noValidate>
			<div>
				<div className="mt-2 group mb-4">
					<label htmlFor="email" className="text-body-l inline-block mb-2">
						Email
						<span className="text-accent-500 dark:text-accent-400">
							*
						</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="email@example.com"
						{...register("email")}
						className={`outline-none text-body-m py-3 px-4 rounded-lg border ${
							errors.email
								? "border-error-500 dark:border-error-400"
								: "border-grey-200 dark:border-grey-700"
						} bg-grey-50 dark:bg-grey-900 group-hover:border-grey-300 dark:group-hover:border-grey-600 group-hover:bg-grey-100 dark:group-hover:bg-grey-800 focus:border-primary-300 dark:focus:border-primary-700 focus:bg-grey-100 dark:focus:bg-grey-800 transition w-full leading-5`}
					/>
					{errors.email && (
						<span className="text-label-l text-error-500 dark:text-error-400">
							{errors.email.message}
						</span>
					)}
				</div>
				<div>
					<label
						htmlFor="password"
						className="text-body-l inline-block mb-2"
					>
						Password
						<span className="text-accent-500 dark:text-accent-400">
							*
						</span>
					</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="8-32 caratteri"
						{...register("password")}
						className={`outline-none text-body-m py-3 px-4 rounded-lg border ${
							errors.password
								? "border-error-500 dark:border-error-400"
								: "border-grey-200 dark:border-grey-700"
						} bg-grey-50 dark:bg-grey-900 hover:border-grey-300 dark:hover:border-grey-600 hover:bg-grey-100 dark:hover:bg-grey-800 focus:border-primary-300 dark:focus:border-primary-700 focus:bg-grey-100 dark:focus:bg-grey-800 transition w-full leading-5`}
					/>
					{errors.password && (
						<span className="text-label-l text-error-500 dark:text-error-400">
							{errors.password.message}
						</span>
					)}
				</div>
			</div>
			<Button
				type="submit"
				className="w-full mt-10"
				size="large"
				loading={loading}
			>
				Accedi
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
	);
};
