import { useEffect, useRef, useState } from "react";
import { Button } from ".";
import { useAuth } from "../lib/auth";

const Signin = (props) => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	// Get signUp function from the auth context
	const { signIn } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		// Get email and password input values
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		// Calls `signIn` function from the context
		const { error } = await signIn({ email, password });

		if (error) {
			alert("error signing in");
		} else {
			// Redirect user to Dashboard
			props.hide && props.hide();
		}
	}

	let ref = useRef(null);

	const handleClickOutside = (event) => {
		if (!ref.current?.contains(event.target)) {
			props.hide && props.hide();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	});

	return (
		<div className="bg-grey-900 bg-opacity-20 flex items-center justify-center fixed inset-0 z-10">
			<form
				ref={ref}
				onSubmit={handleSubmit}
				className="bg-grey-100 p-4 rounded-lg shadow"
			>
				<div className="flex flex-col mb-4">
					<label htmlFor="input-email">Email</label>
					<input
						autoFocus
						id="input-email"
						type="email"
						ref={emailRef}
						placeholder="email@test.com"
						className="text-body-m placeholder-on-surface-le outline-none text-on-surface-he p-2 rounded-lg bg-grey-200 border border-gray-300 hover:bg-white focus:bg-white transition"
					/>
				</div>

				<div className="flex flex-col mb-4">
					<label htmlFor="input-password">Password</label>
					<input
						id="input-password"
						type="password"
						ref={passwordRef}
						className="text-body-m placeholder-on-surface-le text-on-surface-he outline-none p-2 rounded-lg bg-grey-200 border border-gray-300 hover:bg-white focus:bg-white transition"
					/>
				</div>

				<Button
					type="submit"
					className="bg-primary-500 py-1.5 px-3 text-on-primary-he hover:bg-primary-400 focus:bg-primary-600 transition rounded-lg"
				>
					Signin
				</Button>
			</form>
		</div>
	);
};

export default Signin;
