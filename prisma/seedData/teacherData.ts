import { Prisma } from "@prisma/client";

 const data: Prisma.DocenteCreateInput[] = [
		{
			nome: "Franco",
			cognome: "Rampazzo",
			email: "franco.rampazzo@unipd.it",
		},
		{
			nome: "Cinzia",
			cognome: "Pizzi",
			email: "cinzia.pizzi@unipd.it",
		},
		{
			nome: "Francesco",
			cognome: "Bottacin",
			email: "francesco.bottacin@unipd.it",
		},
		{
			nome: "Matteo",
			cognome: "Comin",
			email: "matteo.comin@unipd.it",
		},
		{
			nome: "Ugo",
			cognome: "Gasparini",
			email: "ugo.gasparini@unipd.it",
		},
		{
			nome: "Claudio",
			cognome: "Marchi",
			email: "claudio.marchi@unipd.it",
		},
		{
			nome: "Bruno",
			cognome: "Bianchini",
			email: "bruno.bianchini@unipd.it",
		},
		{
			nome: "Valentina",
			cognome: "Franceschi",
			email: "valentina.franceschi@unipd.it",
		},
		{
			nome: "Monica",
			cognome: "Motta",
			email: "monica.motta@unipd.it",
		},
 ];

 export const teacherData: Prisma.DocenteUpsertArgs[] = data.map((docente) => ({
		where: {
			email: docente.email,
		},
		update: {},
		create: docente,
 }));
