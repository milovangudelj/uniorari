import { Prisma } from "@prisma/client";

const data: Prisma.CanaleCreateInput[] = [
	{
		nome: "A",
	},
	{
		nome: "B",
	},
	{
		nome: "C",
	},
	{
		nome: "D",
	},
	{
		nome: "E",
	},
];

export const channelData: Prisma.CanaleUpsertArgs[] = data.map((canale) => ({
	where: {
		nome: canale.nome,
	},
	update: {},
	create: canale,
}));
