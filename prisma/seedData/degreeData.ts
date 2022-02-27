import { Prisma } from "@prisma/client";

export const degreeData: Prisma.LaureaCreateInput[] = [
	{
		codice: "IN0508",
		nome: "Ingegneria Informatica",
		presidente: "Carlo Ferrari",
		email: "orientamento@dei.unipd.it",
		dipartimento: {
			connect: {
				acronimo: "DEI",
			},
		},
	},
	{
		codice: "IN0507",
		nome: "Ingegneria Elettronica",
		presidente: "Giorgio Spiazzi",
		email: "orientamento@dei.unipd.it",
		dipartimento: {
			connect: {
				acronimo: "DEI",
			},
		},
	},
	{
		codice: "IN0513",
		nome: "Ingegneria dell'Informazione",
		presidente: "Marco Santagiustina",
		email: "orientamento@dei.unipd.it",
		dipartimento: {
			connect: {
				acronimo: "DEI",
			},
		},
	},
	{
		codice: "IN2374",
		nome: "Ingegneria Biomedica",
		presidente: "Alessandra Bertoldo",
		email: "orientamento@dei.unipd.it",
		dipartimento: {
			connect: {
				acronimo: "DEI",
			},
		},
	},
];
