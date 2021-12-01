export default async function handler(req, res) {
	const { token } = req.query;

	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${
			process.env.NODE_ENV === "development"
				? process.env.TEST_RECAPTCHA_SECRET
				: process.env.RECAPTCHA_SECRET
		}&response=${token}`
	);

	const data = await response.json();

	console.log(
		process.env.NODE_ENV === "development"
			? process.env.TEST_RECAPTCHA_SECRET
			: process.env.RECAPTCHA_SECRET
	);

	res.status(200).json(data);
}
