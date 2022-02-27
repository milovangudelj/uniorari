import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";
import {
	schoolData,
	departmentData,
	degreeData,
	teachingData,
	channelData,
	teacherData,
	courseData,
	classroomData,
	lectureData,
} from "./seedData";

const addData = async (model: { name: string; data: any; delegate: any }) => {
	console.log(
		`--------------------------------------\nAdding ${model.name.toLowerCase()}s...`
	);

	for (const d of model.data) {
		const record = await model.delegate.create({
			data: d,
		});

		console.log(`Created ${model.name.toLowerCase()} with id: ${record.id}`);
	}

	console.log(
		`${model.name}s added...\n--------------------------------------`
	);
};

const main = async () => {
	console.log(`Start seeding...`);

	const data = [
		{
			name: "School",
			data: schoolData,
			delegate: prisma.scuola,
		},
		{
			name: "Department",
			data: departmentData,
			delegate: prisma.dipartimento,
		},
		{
			name: "Degree",
			data: degreeData,
			delegate: prisma.laurea,
		},
		{
			name: "Teaching",
			data: teachingData,
			delegate: prisma.insegnamento,
		},
		{
			name: "Channel",
			data: channelData,
			delegate: prisma.canale,
		},
		{
			name: "Teacher",
			data: teacherData,
			delegate: prisma.docente,
		},
		{
			name: "Course",
			data: courseData,
			delegate: prisma.corso,
		},
		// {
		// 	name: "Classroom",
		// 	data: classroomData,
		// 	delegate: prisma.aula,
		// },
		// {
		// 	name: "Lecture",
		// 	data: lectureData,
		// 	delegate: prisma.lezione,
		// },
	];

	for (const el of data) {
		await addData(el);
	}

	console.log(`Seeding finished.`);
};

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
