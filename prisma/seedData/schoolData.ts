import { Prisma } from "@prisma/client";

const data: Prisma.ScuolaCreateInput[] = [
	{
		nome: "Scuola di Ingegneria",
		presidente: "Franco Bonollo",
		sede: "Lungargine del Piovego, 1 - 35031 - Padova",
		sito: "https://www.ingegneria.unipd.it/",
		telefono: "049.8276457",
		email: "ingegneria@unipd.it",
	},
];

export const schoolData: Prisma.ScuolaUpsertArgs[] = data.map((scuola) => ({
	where: {
		nome: scuola.nome,
	},
	update: {},
	create: scuola,
}));
