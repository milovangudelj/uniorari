import { Prisma } from "@prisma/client";

const data: Prisma.CorsoCreateInput[] = [
	{
		nome: "ANALISI MATEMATICA 1 (A)",
		moodle:
			"https://elearning.dei.unipd.it/course/view.php?idnumber=2021-IN0507-000ZZ-2021-IN10100190-G5GR1",
		insegnamento: {
			connect: {
				nome: "Analisi Matematica 1",
			},
		},
		canale: {
			connect: {
				nome: "A",
			},
		},
		responsabile: {
			connect: {
				email: "franco.rampazzo@unipd.it",
			},
		},
		docenti: {
			connect: [
				{
					email: "franco.rampazzo@unipd.it",
				},
			],
		},
	},
	{
		nome: "ANALISI MATEMATICA 1 (B)",
		moodle:
			"https://elearning.dei.unipd.it/course/view.php?idnumber=2021-IN2374-000ZZ-2021-IN10100190-G5GR2",
		insegnamento: {
			connect: {
				nome: "Analisi Matematica 1",
			},
		},
		canale: {
			connect: {
				nome: "B",
			},
		},
		responsabile: {
			connect: {
				email: "claudio.marchi@unipd.it",
			},
		},
		docenti: {
			connect: [
				{
					email: "claudio.marchi@unipd.it",
				},
			],
		},
	},
	{
		nome: "ANALISI MATEMATICA 1 (C)",
		moodle:
			"https://elearning.dei.unipd.it/course/view.php?idnumber=2021-IN2374-000ZZ-2021-IN10100190-G5GR3",
		insegnamento: {
			connect: {
				nome: "Analisi Matematica 1",
			},
		},
		canale: {
			connect: {
				nome: "C",
			},
		},
		responsabile: {
			connect: {
				email: "bruno.bianchini@unipd.it",
			},
		},
		docenti: {
			connect: [
				{
					email: "bruno.bianchini@unipd.it",
				},
			],
		},
	},
	{
		nome: "ANALISI MATEMATICA 1 (D)",
		moodle:
			"https://elearning.dei.unipd.it/course/view.php?idnumber=2021-IN0507-000ZZ-2021-IN10100190-G5GR4",
		insegnamento: {
			connect: {
				nome: "Analisi Matematica 1",
			},
		},
		canale: {
			connect: {
				nome: "D",
			},
		},
		responsabile: {
			connect: {
				email: "valentina.franceschi@unipd.it",
			},
		},
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
	},
	{
		nome: "ANALISI MATEMATICA 1 (E)",
		moodle:
			"https://elearning.dei.unipd.it/course/view.php?idnumber=2021-IN0507-000ZZ-2021-IN10100190-G5GR5",
		insegnamento: {
			connect: {
				nome: "Analisi Matematica 1",
			},
		},
		canale: {
			connect: {
				nome: "E",
			},
		},
		responsabile: {
			connect: {
				email: "monica.motta@unipd.it",
			},
		},
		docenti: {
			connect: [
				{
					email: "monica.motta@unipd.it",
				},
			],
		},
	},
	{
		nome: "ALGEBRA LINEARE E GEOMETRIA (A)",
		moodle:
			"https://elearning.dei.unipd.it/course/view.php?idnumber=2021-IN2374-000ZZ-2021-IN06100061-G5GR1",
		insegnamento: {
			connect: {
				nome: "Algebra lineare e Geometria",
			},
		},
		canale: {
			connect: {
				nome: "A",
			},
		},
		responsabile: {
			connect: {
				email: "francesco.bottacin@unipd.it",
			},
		},
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
	},
	{
		nome: "ELETTRONICA DEI SISTEMI DIGITALI",
		moodle:
			"https://elearning.dei.unipd.it/course/view.php?idnumber=2021-IN0507-000ZZ-2020-INL1001826-N0",
		insegnamento: {
			connect: {
				nome: "Elettronica dei Sistemi Digitali",
			},
		},
		responsabile: {
			connect: {
				email: "daniele.vogrig@unipd.it",
			},
		},
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
	},
];

export const courseData: Prisma.CorsoUpsertArgs[] = data.map((corso) => ({
	where: {
		nome: corso.nome,
	},
	update: {},
	create: corso,
}));
