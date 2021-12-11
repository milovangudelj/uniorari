import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export type Context = {
	prisma: PrismaClient;
};

const createContext = async (req, res): Promise<Context> => {
	return {
		prisma: prisma,
	};
};

export default createContext;
