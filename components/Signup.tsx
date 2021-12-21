import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAuth } from "../lib/auth";

const Signup = () => {
	const router = useRouter();
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	// Get signUp function from the auth context
	const { signUp } = useAuth();

	async function handleSubmit(e) {
		e.preventDefault();

		// Get email and password input values
		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		// Calls `signUp` function from the context
		const { error } = await signUp({ email, password });

		if (error) {
			alert("error signing in");
		} else {
			// Redirect user to Dashboard
			router.push("/");
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="input-email">Email</label>
				<input id="input-email" type="email" ref={emailRef} />

				<label htmlFor="input-password">Password</label>
				<input id="input-password" type="password" ref={passwordRef} />

				<br />

				<button type="submit">Sign up</button>
			</form>
		</>
	);
};

export default Signup;
 