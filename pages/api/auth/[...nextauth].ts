import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import nodemailer from "nodemailer";

import prisma from "../../../lib/prisma";
import { html, text } from "../../../lib/emailVerificationRequest";

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: process.env.EMAIL_FROM,
			async sendVerificationRequest({
				identifier: email,
				url,
				provider: { server, from },
			}) {
				const { host } = new URL(url);
				const transport = nodemailer.createTransport(server);
				await transport.sendMail({
					to: email,
					from,
					subject: `Sign in to UniOrari`,
					text: text({ url, host }),
					html: html({ url, host, email }),
				});
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	pages: {
		signIn: "/accedi",
		error: "/accedi",
		verifyRequest: "/verify-request",
	},
	secret: process.env.NEXTAUTH_SECRET,
});
