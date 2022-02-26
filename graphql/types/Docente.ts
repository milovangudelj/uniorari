import { objectType, extendType, nonNull, stringArg, idArg } from "nexus";
import { Docente } from "nexus-prisma";

export const ProfessorObject = objectType({
	name: Docente.$name,
	description: Docente.$description,
	definition(t) {
		// Scalars
		t.field(Docente.id);
		t.field(Docente.createdAt);
		t.field(Docente.updatedAt);
		t.field(Docente.nome);
		t.field(Docente.cognome);
		t.field(Docente.email);
		// Relations
		t.field(Docente.corsi);
		t.field(Docente.lezioni);
	},
});

export const ProfessorQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("docenti", {
			type: "Docente",
			resolve(_, __, ctx) {
				return ctx.prisma.docente.findMany();
			},
		});
		t.field("docente", {
			type: "Docente",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.docente.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const ProfessorMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaDocente", {
			type: "Docente",
			args: {
				id: "ID",
				nome: nonNull("String"),
				cognome: nonNull("String"),
				email: nonNull("String"),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: any = { ...args };
				if (id) data.id = id;

				return ctx.prisma.docente.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaDocente", {
			type: "Docente",
			args: {
				id: nonNull("ID"),
				nome: "String",
				cognome: "String",
				email: "String",
			},
			resolve(_, { id, ...args }, ctx) {
				return ctx.prisma.docente.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
		t.nonNull.field("aggiungiCorsoADocente", {
			type: "Docente",
			args: {
				idDocente: nonNull("ID"),
				idCorso: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.docente.update({
					where: {
						id: args.idDocente,
					},
					data: {
						corsi: {
							connect: {
								id: args.idCorso,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviCorsoDaDocente", {
			type: "Docente",
			args: {
				idDocente: nonNull("ID"),
				idCorso: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.docente.update({
					where: {
						id: args.idDocente,
					},
					data: {
						corsi: {
							disconnect: {
								id: args.idCorso,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("aggiungiLezioneADocente", {
			type: "Docente",
			args: {
				idDocente: nonNull("ID"),
				idLezione: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.docente.update({
					where: {
						id: args.idDocente,
					},
					data: {
						lezioni: {
							connect: {
								id: args.idLezione,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviLezioneDaDocente", {
			type: "Docente",
			args: {
				idDocente: nonNull("ID"),
				idLezione: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.docente.update({
					where: {
						id: args.idDocente,
					},
					data: {
						lezioni: {
							disconnect: {
								id: args.idLezione,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("eliminaDocente", {
			type: "Docente",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.docente.delete({
					where: {
						...args,
					},
				});
			},
		});
	},
});
