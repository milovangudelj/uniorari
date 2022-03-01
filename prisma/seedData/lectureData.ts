import { Prisma } from "@prisma/client";

const data: Prisma.LezioneCreateInput[] = [
	// Analisi
	// A
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (A)",
			},
		},
	},
	{
		id: "367806e9-0d60-479d-ac6a-badb91307fac",
		giorno: 1,
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (A)",
			},
		},
	},
	{
		id: "d42182ed-d44f-49fa-ae24-2851f631eb86",
		giorno: 2,
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (A)",
			},
		},
	},
	{
		id: "112360a1-6560-4ebe-a00e-dcd9d46479a8",
		giorno: 3,
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (A)",
			},
		},
	},
	// B
	{
		id: "95d483be-872e-40c8-8a5d-99c0ea6064de",
		giorno: 0,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (B)",
			},
		},
	},
	{
		id: "9ce0150d-b72b-4283-b586-3b3f38ffe4c3",
		giorno: 1,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (B)",
			},
		},
	},
	{
		id: "badbbc75-d4f3-42e5-a56d-b228443adf58",
		giorno: 2,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (B)",
			},
		},
	},
	{
		id: "905ba12c-0f32-4f48-8088-e3129d37b1de",
		giorno: 3,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (B)",
			},
		},
	},
	// C
	{
		id: "22a429d9-d011-4b06-a67a-387361543b86",
		giorno: 0,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "bruno.bianchini@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (C)",
			},
		},
	},
	{
		id: "5fd72f69-8de3-4aee-97ba-c2292c8bbeb8",
		giorno: 1,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "bruno.bianchini@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (C)",
			},
		},
	},
	{
		id: "115b36b5-8b91-45cb-8e9b-0c9a8e00a8c5",
		giorno: 2,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "bruno.bianchini@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (C)",
			},
		},
	},
	{
		id: "0dc1ab8e-d028-48a0-bfe3-90575f3dde0c",
		giorno: 3,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "bruno.bianchini@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0E [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (C)",
			},
		},
	},
	// D
	{
		id: "36a39926-f700-4a7b-ae99-77c8cf9975da",
		giorno: 0,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "valentina.franceschi@unipd.it",
				},
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0D [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (D)",
			},
		},
	},
	{
		id: "b7f4067c-5e6d-4145-9f5a-806694c8f519",
		giorno: 1,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "valentina.franceschi@unipd.it",
				},
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0D [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (D)",
			},
		},
	},
	{
		id: "5e436687-aae2-4e72-aed6-6954bc43f8f5",
		giorno: 2,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "valentina.franceschi@unipd.it",
				},
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0D [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (D)",
			},
		},
	},
	{
		id: "9d91c472-1a3d-4eb5-968f-715bbc1cd4af",
		giorno: 3,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "valentina.franceschi@unipd.it",
				},
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0D [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (D)",
			},
		},
	},
	// E
	{
		id: "4e7a10f8-ae15-453b-8c69-1002fbc5bf24",
		giorno: 0,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "monica.motta@unipd.it",
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (E)",
			},
		},
	},
	{
		id: "25c3196b-45a7-4dc9-a52b-b1fa2b224f67",
		giorno: 1,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "monica.motta@unipd.it",
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (E)",
			},
		},
	},
	{
		id: "eaf26f7c-896c-4c19-a783-c8ae8b7a85b6",
		giorno: 2,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "monica.motta@unipd.it",
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (E)",
			},
		},
	},
	{
		id: "a3d1a29f-84ba-447a-9789-25f7802bd107",
		giorno: 3,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "monica.motta@unipd.it",
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
		corso: {
			connect: {
				nome: "ANALISI MATEMATICA 1 (E)",
			},
		},
	},
	// Algebra
	// A
	{
		id: "2b56c449-73fd-428f-95cb-de2927809dfd",
		giorno: 0,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "francesco.bottacin@unipd.it",
				},
				{
					email: "alessandro.goffi@unipd.it",
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
		corso: {
			connect: {
				nome: "ALGEBRA LINEARE E GEOMETRIA (A)",
			},
		},
	},
	{
		id: "29e67f54-45d4-4ead-845f-411a73e18717",
		giorno: 1,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "francesco.bottacin@unipd.it",
				},
				{
					email: "alessandro.goffi@unipd.it",
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
		corso: {
			connect: {
				nome: "ALGEBRA LINEARE E GEOMETRIA (A)",
			},
		},
	},
	{
		id: "3c1ea48f-6028-4632-8fa1-7fcb8ded8913",
		giorno: 2,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "francesco.bottacin@unipd.it",
				},
				{
					email: "alessandro.goffi@unipd.it",
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
		corso: {
			connect: {
				nome: "ALGEBRA LINEARE E GEOMETRIA (A)",
			},
		},
	},
	{
		id: "6e036ee5-1d96-4212-8289-6b28e79b6a5d",
		giorno: 4,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "francesco.bottacin@unipd.it",
				},
				{
					email: "alessandro.goffi@unipd.it",
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
		corso: {
			connect: {
				nome: "ALGEBRA LINEARE E GEOMETRIA (A)",
			},
		},
	},
	// Elettronica dei Sistemi Digitali
	{
		id: "5fb34d75-3f7e-4e7f-b2f3-f2c9fa227c1d",
		giorno: 1,
		inizio: "12:30",
		fine: "14:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "daniele.vogrig@unipd.it",
				},
				{
					email: "andrea.stanco@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "EF1 [EX FIAT]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ELETTRONICA DEI SISTEMI DIGITALI",
			},
		},
	},
	{
		id: "547d52ad-e95b-4daf-9503-8a2f04216506",
		giorno: 2,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "daniele.vogrig@unipd.it",
				},
				{
					email: "andrea.stanco@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "EF1 [EX FIAT]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ELETTRONICA DEI SISTEMI DIGITALI",
			},
		},
	},
	{
		id: "46478c86-1827-4b57-aac8-af13a7048dee",
		giorno: 4,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "daniele.vogrig@unipd.it",
				},
				{
					email: "andrea.stanco@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "EF1 [EX FIAT]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ELETTRONICA DEI SISTEMI DIGITALI",
			},
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
