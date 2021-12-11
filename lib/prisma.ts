import { Prisma, PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

let prismaLog: Prisma.LogDefinition[] = [
	{
		emit: "event",
		level: "query",
	},
	{
		emit: "stdout",
		level: "error",
	},
	{
		emit: "stdout",
		level: "info",
	},
	{
		emit: "stdout",
		level: "warn",
	},
];

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient({ log: prismaLog, errorFormat: "pretty" });
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient({
			log: prismaLog,
			errorFormat: "pretty",
		});
	}
	prisma = global.prisma;
}

export default prisma;
