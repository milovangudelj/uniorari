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
	// Fondamenti di Informatica
	// A
	{
		id: "f2d3137b-619f-455b-9730-7cd1eb5cf21c",
		giorno: 0,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "cinzia.pizzi@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (A)",
			},
		},
	},
	{
		id: "ffb2cf66-4f49-4ef1-ba11-94a411e7ec95",
		giorno: 1,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "cinzia.pizzi@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (A)",
			},
		},
	},
	{
		id: "727d625f-4a71-4b6c-b913-0172635ca6bf",
		giorno: 2,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "cinzia.pizzi@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (A)",
			},
		},
	},
	{
		id: "e6e3bdcb-ee4d-4a7d-a5bb-3a2214bd1165",
		giorno: 3,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "cinzia.pizzi@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (A)",
			},
		},
	},
	// B
	{
		id: "f57a303a-215d-458a-9ff9-c0ebe171ab46",
		giorno: 0,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "andrea.loreggia@unipd.it",
				},
				{
					email: "mauro.pullin@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (B)",
			},
		},
	},
	{
		id: "5bbbc3f0-e395-46af-b92a-e530462dccd2",
		giorno: 1,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "andrea.loreggia@unipd.it",
				},
				{
					email: "mauro.pullin@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (B)",
			},
		},
	},
	{
		id: "d7adf2c4-b7ea-429d-81b1-f754b77d8926",
		giorno: 2,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "andrea.loreggia@unipd.it",
				},
				{
					email: "mauro.pullin@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (B)",
			},
		},
	},
	{
		id: "8edf9328-f323-4bb8-bd9a-3f843e82d7d0",
		giorno: 3,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "andrea.loreggia@unipd.it",
				},
				{
					email: "mauro.pullin@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (B)",
			},
		},
	},
	// C
	{
		id: "8b07971f-1fe7-4853-9c88-c97801ddca5e",
		giorno: 0,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "laura.bazzanella@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (C)",
			},
		},
	},
	{
		id: "ab5a1d94-b7e5-4f6e-aded-f8318cf23a93",
		giorno: 1,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "laura.bazzanella@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (C)",
			},
		},
	},
	{
		id: "fd5900f0-0a24-4184-974b-a3081ffe8b87",
		giorno: 2,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "laura.bazzanella@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (C)",
			},
		},
	},
	{
		id: "71311731-0337-4f96-b487-d320b2ff71c7",
		giorno: 3,
		inizio: "16:30",
		fine: "18:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "laura.bazzanella@unipd.it",
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
				nome: "FONDAMENTI DI INFORMATICA (C)",
			},
		},
	},
	// Algebra lineare e Geometria
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
	// Architettura degli Elaboratori
	// A
	{
		id: "45f2a347-164f-48f1-926e-baaa8c6e8a3f",
		giorno: 0,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "matteo.comin@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0C [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ARCHITETTURA DEGLI ELABORATORI (A)",
			},
		},
	},
	{
		id: "895e4b94-0bdd-491e-9500-6f12354a3708",
		giorno: 1,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "matteo.comin@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0C [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ARCHITETTURA DEGLI ELABORATORI (A)",
			},
		},
	},
	{
		id: "020b7462-30fd-4f51-b2c3-0710c911c4a1",
		giorno: 3,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "matteo.comin@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0C [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ARCHITETTURA DEGLI ELABORATORI (A)",
			},
		},
	},
	// B
	{
		id: "0b1a899b-5078-4822-96a8-31bdddae4d40",
		giorno: 0,
		inizio: "08:30",
		fine: "10:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "francesco.silvestri@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0C [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ARCHITETTURA DEGLI ELABORATORI (B)",
			},
		},
	},
	{
		id: "279c4c0e-dfff-4912-afb0-2ac09e424766",
		giorno: 2,
		inizio: "14:30",
		fine: "16:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "francesco.silvestri@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0C [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ARCHITETTURA DEGLI ELABORATORI (B)",
			},
		},
	},
	{
		id: "547260f1-484f-41fd-bd14-7897c5d93617",
		giorno: 3,
		inizio: "10:30",
		fine: "12:30",
		durata: 2,
		docenti: {
			connect: [
				{
					email: "francesco.silvestri@unipd.it",
				},
			],
		},
		aule: {
			connect: [
				{
					nome: "0C [COMPLESSO A. VALLISNERI]",
				},
			],
		},
		corso: {
			connect: {
				nome: "ARCHITETTURA DEGLI ELABORATORI (B)",
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
