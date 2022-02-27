import { Prisma } from "@prisma/client";

export const teachingData: Prisma.InsegnamentoCreateInput[] = [
	{
		nome: "Analisi Matematica 1",
		obbligatorio: true,
		cfu: 12,
		adc: 1,
		semestre: 1,
		lingua: "Italiano",
		curriculum: "Comune",
		lauree: {
			connect: [
				{
					codice: "IN0508",
				},
			],
		},
	},
	{
		nome: "Fondamenti di Informatica",
		obbligatorio: true,
		cfu: 12,
		adc: 1,
		semestre: 1,
		lingua: "Italiano",
		curriculum: "Comune",
		lauree: {
			connect: [
				{
					codice: "IN0508",
				},
			],
		},
	},
	{
		nome: "Algebra lineare e Geometria",
		obbligatorio: true,
		cfu: 12,
		adc: 1,
		semestre: 2,
		lingua: "Italiano",
		curriculum: "Comune",
		lauree: {
			connect: [
				{
					codice: "IN0508",
				},
			],
		},
	},
	{
		nome: "Architettura degli Elaboratori",
		obbligatorio: true,
		cfu: 9,
		adc: 1,
		semestre: 2,
		lingua: "Italiano",
		curriculum: "Comune",
		lauree: {
			connect: [
				{
					codice: "IN0508",
				},
			],
		},
	},
	{
		nome: "Fisica Generale 1",
		obbligatorio: true,
		cfu: 12,
		adc: 1,
		semestre: 2,
		lingua: "Italiano",
		curriculum: "Comune",
		lauree: {
			connect: [
				{
					codice: "IN0508",
				},
			],
		},
	},
];
