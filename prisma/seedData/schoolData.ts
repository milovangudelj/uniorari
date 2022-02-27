import { Prisma } from "@prisma/client";

export const schoolData: Prisma.ScuolaCreateInput[] = [
	{
		nome: "Scuola di Ingegneria",
		presidente: "Franco Bonollo",
		sede: "Lungargine del Piovego, 1 - 35031 - Padova",
		sito: "https://www.ingegneria.unipd.it/",
		telefono: "049.8276457",
		email: "ingegneria@unipd.it",
	},
];
