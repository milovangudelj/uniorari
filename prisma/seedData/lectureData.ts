import { Prisma } from "@prisma/client";

export const lectureData: Prisma.LezioneCreateInput[] = [
	{
		giorno: 0,
		inizio: "",
		fine: "",
		durata: 0,
		docenti: {
			connect: [
				{
					email: "",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "",
				},
			],
		},
	},
];
