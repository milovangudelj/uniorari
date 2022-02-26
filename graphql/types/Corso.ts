import { Prisma } from "@prisma/client";
import { objectType, extendType, nonNull, stringArg, idArg, list } from "nexus";
import { Corso, Insegnamento } from "nexus-prisma";

export const CourseObject = objectType({
	name: Corso.$name,
	description: Corso.$description,
	definition(t) {
		// Scalars
		t.field(Corso.id);
		t.field(Corso.createdAt);
		t.field(Corso.updatedAt);
		t.field(Corso.nome);
		t.field(Corso.moodle);
		// Relations
		t.field(Corso.insegnamento);
		t.field(Corso.responsabile);
		t.field(Corso.docenti);
		t.field(Corso.canale);
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
				id: nonNull("ID"),
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
				id: "ID",
				nome: nonNull("String"),
				moodle: nonNull("String"),
				insegnamento: nonNull("ID"),
				responsabile: nonNull("ID"),
				docenti: list(nonNull("ID")),
				canale: nonNull("ID"),
			},
			resolve(_, { id, ...args }, ctx) {
				const docenti = [
					{
						id: args.responsabile,
					},
				];

				if (args.docenti)
					docenti.push(
						...args.docenti?.map((id) => {
							return {
								id,
							};
						})
					);
				let data: Prisma.CorsoCreateInput = {
					...args,
					insegnamento: {
						connect: {
							id: args.insegnamento,
						},
					},
					responsabile: {
						connect: {
							id: args.responsabile,
						},
					},
					docenti: {
						connect: docenti,
					},
					canale: {
						connect: {
							id: args.canale,
						},
					},
				};
				if (id) data.id = id;

				return ctx.prisma.corso.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaCorso", {
			type: "Corso",
			args: {
				id: nonNull("ID"),
				nome: "String",
				moodle: "String",
				insegnamento: "ID",
				responsabile: "ID",
				docenti: list(nonNull("ID")),
				canale: "ID",
			},
			resolve(_, { id, ...args }, ctx) {
				let data: Prisma.CorsoUpdateInput = {
					nome: args.nome,
					moodle: args.nome,
					insegnamento: {
						connect: {
							id: args.insegnamento,
						},
					},
					responsabile: {
						connect: {
							id: args.responsabile,
						},
					},
					docenti: {
						connect: args.docenti.map((id) => {
							return {
								id,
							};
						}),
					},
					canale: {
						connect: {
							id: args.canale,
						},
					},
				};

				return ctx.prisma.corso.update({
					where: {
						id,
					},
					data,
				});
			},
		});
		t.nonNull.field("aggiungiStudenteACorso", {
			type: "Corso",
			args: {
				idCorso: nonNull("ID"),
				idStudente: nonNull("ID"),
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
				idCorso: nonNull("ID"),
				idStudente: nonNull("ID"),
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
				id: nonNull("ID"),
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
