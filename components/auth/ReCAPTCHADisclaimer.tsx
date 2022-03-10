export const ReCAPTCHADisclaimer = () => {
	return (
		<div className="text-label-s text-on-surface-le dark:text-on-primary-le mt-2">
			This site is protected by reCAPTCHA and the Google{" "}
			<a
				href="https://policies.google.com/privacy"
				className="text-primary-500 dark:text-primary-400"
			>
				Privacy Policy
			</a>{" "}
			and{" "}
			<a
				href="https://policies.google.com/terms"
				className="text-primary-500 dark:text-primary-400"
			>
				Terms of Service
			</a>{" "}
			apply.
		</div>
	);
};
 