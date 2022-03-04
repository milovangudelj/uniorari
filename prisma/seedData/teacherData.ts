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
			nome: "Andrea",
			cognome: "Loreggia",
			email: "andrea.loreggia@unipd.it",
		},
		{
			nome: "Mauro",
			cognome: "Pullin",
			email: "mauro.pullin@unipd.it",
		},
		{
			nome: "Laura",
			cognome: "Bazzanella",
			email: "laura.bazzanella@unipd.it",
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
			nome: "Matteo",
			cognome: "Comin",
			email: "matteo.comin@unipd.it",
		},
		{
			nome: "Francesco",
			cognome: "Silvestri",
			email: "francesco.silvestri@unipd.it",
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
		},
		{
			nome: "Andrea",
			cognome: "Stanco",
			email: "andrea.stanco@unipd.it",
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
		{
			nome: "Giorgio Maria",
			cognome: "Di Nunzio",
			email: "giorgiomaria.dinunzio@unipd.it",
			immagine:
				"https://persone.csia.unipd.it/persone/foto/B7D48BA95AFD879BF7692148F97AD30B.jpg",
		},
 ];

 export const teacherData: Prisma.DocenteUpsertArgs[] = data.map((docente) => ({
		where: {
			email: docente.email,
		},
		update: {},
		create: docente,
 }));
