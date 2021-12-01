export default async function handler(req, res) {
	const { token } = req;

	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${
			process.env.NODE_ENV === "development"
				? process.env.TEST_RECAPTCHA_SECRET
				: process.env.RECAPTCHA_SECRET
		}&response=${token}`
	);
	const data = await response.json();

	res.status(200).json(data);
}
