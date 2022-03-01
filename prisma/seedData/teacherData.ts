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
		{
			nome: "Francesco",
			cognome: "Bottacin",
			email: "francesco.bottacin@unipd.it",
		},
		{
			nome: "Alessandro",
			cognome: "Goffi",
			email: "alessandro.goffi@unipd.it",
		},
		{
			nome: "Daniele",
			cognome: "Vogrig",
			email: "daniele.vogrig@unipd.it",
			immagine:
				"https://persone.csia.unipd.it/persone/foto/D7CA2C22319D73C1AC305A72727AF10C.jpg",
		},
		{
			nome: "Andrea",
			cognome: "Stanco",
			email: "andrea.stanco@unipd.it",
			immagine:
				"https://persone.csia.unipd.it/persone/foto/0BC64B80408C0E58D6C2CC9628852D48.jpg",
		},
		{
			nome: "Tomaso",
			cognome: "Erseghe",
			email: "tomaso.erseghe@unipd.it",
			immagine:
				"https://persone.csia.unipd.it/persone/foto/C71FC6B2F953B40F5730E58CE243C96F.jpg",
		},
		{
			nome: "Leopoldo",
			cognome: "Rossetto",
			email: "leopoldo.rossetto@unipd.it",
			immagine:
				"https://persone.csia.unipd.it/persone/foto/06D1B42898E26F4F82B9E83CACAD66CC.jpg",
		},
 ];

 export const teacherData: Prisma.DocenteUpsertArgs[] = data.map((docente) => ({
		where: {
			email: docente.email,
		},
		update: {},
		create: docente,
 }));
