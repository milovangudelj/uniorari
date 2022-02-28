import { Prisma } from "@prisma/client";

const data: Prisma.AulaCreateInput[] = [
	{
		nome: "P3 [COMPLESSO PAOLOTTI]",
		indirizzo:
			"Edificio Paolotti, Via Giambattista Belzoni, 7, 35121 Padova PD",
		link: "https://goo.gl/maps/GiRF34cHEY5EoyKfA",
	},
];

export const classroomData: Prisma.AulaUpsertArgs[] = data.map((aula) => ({
	where: {
		nome: aula.nome,
	},
	update: {},
	create: aula,
}));
