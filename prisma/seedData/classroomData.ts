import { Prisma } from "@prisma/client";

const data: Prisma.AulaCreateInput[] = [
	{
		nome: "P3 [COMPLESSO PAOLOTTI]",
		indirizzo:
			"Edificio Paolotti, Via Giambattista Belzoni, 7, 35121 Padova PD",
		link: "https://goo.gl/maps/LnAxatz83C4UySHn9",
	},
	{
		nome: "P100 [COMPLESSO PAOLOTTI]",
		indirizzo:
			"Edificio Paolotti, Via Giambattista Belzoni, 7, 35121 Padova PD",
		link: "https://goo.gl/maps/LnAxatz83C4UySHn9",
	},
	{
		nome: "LabP55 [COMPLESSO PAOLOTTI]",
		indirizzo:
			"Edificio Paolotti, Via Giambattista Belzoni, 7, 35121 Padova PD",
		link: "https://goo.gl/maps/LnAxatz83C4UySHn9",
	},
	{
		nome: "P1A [COMPLESSO PAOLOTTI]",
		indirizzo:
			"Edificio Paolotti, Via Giambattista Belzoni, 7, 35121 Padova PD",
		link: "https://goo.gl/maps/LnAxatz83C4UySHn9",
	},
	{
		nome: "TALIERCIO [EX FIAT]",
		indirizzo: "Via Venezia, 13, 35131 Padova PD",
		link: "https://goo.gl/maps/1arKMF1SFjHzbVxZ8",
	},
	{
		nome: "EF1 [EX FIAT]",
		indirizzo: "Via Venezia, 13, 35131 Padova PD",
		link: "https://goo.gl/maps/1arKMF1SFjHzbVxZ8",
	},
	{
		nome: "0C [COMPLESSO A. VALLISNERI]",
		indirizzo: "Via Ugo Bassi, 58b, 35121 Padova PD",
		link: "https://goo.gl/maps/eBUEMoHSi5AePp7NA",
	},
	{
		nome: "0D [COMPLESSO A. VALLISNERI]",
		indirizzo: "Via Ugo Bassi, 58b, 35121 Padova PD",
		link: "https://goo.gl/maps/eBUEMoHSi5AePp7NA",
	},
	{
		nome: "0E [COMPLESSO A. VALLISNERI]",
		indirizzo: "Via Ugo Bassi, 58b, 35121 Padova PD",
		link: "https://goo.gl/maps/eBUEMoHSi5AePp7NA",
	},
];

export const classroomData: Prisma.AulaUpsertArgs[] = data.map((aula) => ({
	where: {
		nome: aula.nome,
	},
	update: {},
	create: aula,
}));
