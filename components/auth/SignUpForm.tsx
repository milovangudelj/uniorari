import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import ReCAPTCHA from "react-google-recaptcha";

import { useAuth } from "../../lib/auth";
import { Button } from "..";

const schema = yup
	.object({
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

export const SignUpForm = () => {
	const [loading, setLoading] = useState(false);

	// my auth variables
	const { signUpWithPassword } = useAuth();

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

		const token = await recaptchaRef.current.executeAsync();

		const { success } = await fetch(
			`/api/verify-captcha?token=${token}`
		).then((res) => res.json());

		if (success) {
			let userLookup = await fetch(
				`/api/check-exists?email=${formData.email}&username=${formData.username}`
			)
				.then((res) => res.json())
				.catch((e) => console.log(e));

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

			if (!userLookup.email && !userLookup.username)
				await signUpWithPassword(formData);
		}
		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit(onSubmitWithReCAPTCHA)} noValidate>
			<div>
				<div className="flex">
					<div className="mb-4 mr-2 w-1/2">
						<label
							htmlFor="name"
							className="text-body-l inline-block mb-2"
						>
							Nome<span className="text-accent-500">*</span>
						</label>
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
					<div className="mb-4 ml-2 w-1/2">
						<label
							htmlFor="username"
							className="text-body-l inline-block mb-2"
						>
							Username<span className="text-accent-500">*</span>
						</label>
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
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="text-body-l inline-block mb-2">
						Email<span className="text-accent-500">*</span>
					</label>
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
				<div>
					<label
						htmlFor="password"
						className="text-body-l inline-block mb-2"
					>
						Password<span className="text-accent-500">*</span>
					</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="8-32 caratteri"
						autoComplete="off"
						{...register("password")}
						className={`outline-none text-body-m py-3 px-4 rounded-lg border ${
							errors.password ? "border-error-500" : "border-grey-200"
						} bg-grey-100 hover:border-grey-300 hover:bg-white focus:border-primary-300 focus:bg-white transition w-full leading-5`}
					/>
					{errors.password && (
						<span className="text-label-l text-error-500">
							{errors.password.message}
						</span>
					)}
				</div>
			</div>
			<Button
				type="submit"
				variant="primary"
				className="w-full mt-10"
				size="large"
				loading={loading}
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
	);
};
