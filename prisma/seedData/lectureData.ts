import { Prisma } from "@prisma/client";

const data: Prisma.LezioneCreateInput[] = [
	{
		id: "4957fa67-48fe-48c1-9661-daa3bf418e2d",
		giorno: 0,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "franco.rampazzo@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "P3 [COMPLESSO PAOLOTTI]",
				},
			],
		},
	},
];

export const lectureData: Prisma.LezioneUpsertArgs[] = data.map((lezione) => ({
	where: {
		id: lezione.id,
	},
	update: {},
	create: lezione,
}));
