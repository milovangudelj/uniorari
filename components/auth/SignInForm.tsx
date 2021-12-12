import { useRef } from "react";
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
	})
	.required();

const queryUtente = gql`
	query Utente($email: String) {
		utente(email: $email) {
			email
		}
	}
`;

export const SignInForm = () => {
	// my auth variables
	const { signInWithMagic } = useAuth();

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
		const token = await recaptchaRef.current.executeAsync();

		const { success } = await fetch(`/api/verifyCaptcha?token=${token}`).then(
			(res) => res.json()
		);

		if (success) {
			const { data, loading, error } = await apolloClient.query({
				query: queryUtente,
				variables: { email: formData.email },
			});

			if (error || data.utente === null) {
				setError("email", {
					type: "manual",
					message:
						"Questa mail non è associata a nessun account. Iscriviti prima di accedere.",
				});
				return;
			}

			await signInWithMagic(formData.email);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmitWithReCAPTCHA)} noValidate>
			<div>
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
							errors.email ? "border-error-500" : "border-grey-200"
						} bg-grey-100 hover:border-grey-300 hover:bg-white focus:border-primary-300 focus:bg-white transition w-full leading-5`}
					/>
					{errors.email && (
						<span className="text-label-l text-error-500">
							{errors.email.message}
						</span>
					)}
				</div>
			</div>
			<Button type="submit" variant="primary" className="w-full mt-10">
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
