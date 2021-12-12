import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import ReCAPTCHA from "react-google-recaptcha";

import { useAuth } from "../../lib/auth";
import { Button } from "..";

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

export const SignUpForm = () => {
	// my auth variables
	const { signUp } = useAuth();

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
			let userLookup = await fetch(
				`/api/checkExists?email=${formData.email}&username=${formData.username}`
			).then((res) => res.json());

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
							errors.name ? "border-error-500" : "border-grey-200"
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
							errors.username ? "border-error-500" : "border-grey-200"
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
	);
};
