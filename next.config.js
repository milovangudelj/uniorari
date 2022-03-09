/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	outputFileTracing: false,
	images: {
		domains: ["persone.csia.unipd.it", "lh3.googleusercontent.com"],
	},
};

module.exports = nextConfig;
