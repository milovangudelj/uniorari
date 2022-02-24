import { objectType, extendType, nonNull, stringArg, idArg } from "nexus";
import { Corso } from "nexus-prisma";

export const CourseObject = objectType({
	name: Corso.$name,
	description: Corso.$description,
	definition(t) {
		// Scalars
		t.field(Corso.id);
		t.field(Corso.createdAt);
		t.field(Corso.updatedAt);
		t.field(Corso.nome);
		// Relations
		t.field(Corso.docenti);
		t.field(Corso.lauree);
		t.field(Corso.gruppi);
		t.field(Corso.studenti);
	},
});

export const CourseQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("corsi", {
			type: "Corso",
			resolve(_, __, ctx) {
				return ctx.prisma.corso.findMany();
			},
		});
		t.field("corso", {
			type: "Corso",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const CourseMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaCorso", {
			type: "Corso",
			args: {
				id: idArg(),
				nome: nonNull(stringArg()),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: any = { ...args };
				if (id) data.id = id;

				return ctx.prisma.corso.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaCorso", {
			type: "Corso",
			args: {
				id: nonNull(idArg()),
				nome: stringArg(),
			},
			resolve(_, { id, ...args }, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
		t.nonNull.field("aggiungiDocenteACorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idDocente: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						docenti: {
							connect: {
								id: args.idDocente,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviDocenteDaCorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idDocente: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						docenti: {
							disconnect: {
								id: args.idDocente,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("aggiungiLaureaACorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idLaurea: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						lauree: {
							connect: {
								id: args.idLaurea,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviLaureaDaCorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idLaurea: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						lauree: {
							disconnect: {
								id: args.idLaurea,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("aggiungiGruppoACorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idGruppo: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						gruppi: {
							connect: {
								id: args.idGruppo,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviGruppoDaCorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idGruppo: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						gruppi: {
							disconnect: {
								id: args.idGruppo,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("aggiungiStudenteACorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idStudente: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						studenti: {
							connect: {
								id: args.idStudente,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviStudenteDaCorso", {
			type: "Corso",
			args: {
				idCorso: nonNull(idArg()),
				idStudente: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.update({
					where: {
						id: args.idCorso,
					},
					data: {
						studenti: {
							disconnect: {
								id: args.idStudente,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("eliminaCorso", {
			type: "Corso",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.delete({
					where: {
						...args,
					},
				});
			},
		});
	},
});
