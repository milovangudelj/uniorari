import { Prisma } from "@prisma/client";

const data: Prisma.DipartimentoCreateInput[] = [
	{
		nome: "Dipartimento di Ingegneria dell'informazione",
		acronimo: "DEI",
		direttore: "Gaudenzio Meneghesso",
		sede: "via Gradenigo 6/b, 35131 Padova",
		sito: "https://www.dei.unipd.it/",
		telefono: "049.8277600",
		email: "info@dei.unipd.it",
		scuola: {
			connect: {
				nome: "Scuola di Ingegneria",
			},
		},
	},
	{
		nome: "Dipartimento di Ingegneria civile, edile e ambientale",
		acronimo: "ICEA",
		direttore: "Andrea Giordano",
		sede: "via Marzolo 9, 35131 Padova",
		sito: "https://www.dicea.unipd.it/",
		telefono: "049.8275586",
		email: "dipartimento.dicea@pec.unipd.it",
		scuola: {
			connect: {
				nome: "Scuola di Ingegneria",
			},
		},
	},
	{
		nome: "Dipartimento di Ingegneria industriale",
		acronimo: "DII",
		direttore: "Stefania Bruschi",
		sede: "via Gradenigo, 6/a - 35131 Padova",
		sito: "https://www.dii.unipd.it/",
		telefono: "049.8277500",
		email: "direzione.dii@unipd.it",
		scuola: {
			connect: {
				nome: "Scuola di Ingegneria",
			},
		},
	},
];

export const departmentData: Prisma.DipartimentoUpsertArgs[] = data.map(
	(dipartimento) => ({
		where: {
			acronimo: dipartimento.acronimo,
		},
		update: {},
		create: dipartimento,
	})
);
