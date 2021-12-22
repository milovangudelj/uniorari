import { withSentry } from "@sentry/nextjs";

const handler = async (req, res) => {
	res.status(200).json("world");
};

export default withSentry(handler);
 