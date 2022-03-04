import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
	console.log("Started resetting database...");

	const deleteProfile = prisma.profilo.deleteMany();
	const deleteLecture = prisma.lezione.deleteMany();
	const deleteClassroom = prisma.aula.deleteMany();
	const deleteCourse = prisma.corso.deleteMany();
	const deleteTeacher = prisma.docente.deleteMany();
	const deleteChannel = prisma.canale.deleteMany();
	const deleteTeaching = prisma.insegnamento.deleteMany();
	const deleteDegree = prisma.laurea.deleteMany();
	const deleteDepartment = prisma.dipartimento.deleteMany();
	const deleteSchool = prisma.scuola.deleteMany();

	// The transaction runs synchronously so deleteUsers must run last.
	await prisma.$transaction([
		// deleteProfile,
		deleteLecture,
		deleteClassroom,
		deleteCourse,
		deleteTeacher,
		deleteChannel,
		deleteTeaching,
		deleteDegree,
		deleteDepartment,
		deleteSchool,
	]);

	console.log("Database reset.");
};

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
		console.log("Prisma client disconnected.");
	});
