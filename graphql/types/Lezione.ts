import {
	objectType,
	extendType,
	nonNull,
	stringArg,
	idArg,
	intArg,
} from "nexus";
import { Lezione } from "nexus-prisma";

export const LectureObject = objectType({
	name: Lezione.$name,
	description: Lezione.$description,
	definition(t) {
		// Scalars
		t.field(Lezione.id);
		t.field(Lezione.createdAt);
		t.field(Lezione.updatedAt);
		t.field(Lezione.giorno);
		t.field(Lezione.inizio);
		t.field(Lezione.fine);
		t.field(Lezione.durata);
		// Relations
		t.field(Lezione.docenti);
		t.field(Lezione.aule);
	},
});

export const LectureQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("lezioni", {
			type: "Lezione",
			resolve(_, __, ctx) {
				return ctx.prisma.lezione.findMany();
			},
		});
		t.field("lezione", {
			type: "Lezione",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.lezione.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const LectureMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaLezione", {
			type: "Lezione",
			args: {
				id: "ID",
				giorno: nonNull(intArg()),
				inizio: nonNull("String"),
				fine: nonNull("String"),
				durata: nonNull(intArg()),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: any = { ...args };
				if (id) data.id = id;

				return ctx.prisma.lezione.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaLezione", {
			type: "Lezione",
			args: {
				id: nonNull("ID"),
				giorno: intArg(),
				inizio: "String",
				fine: "String",
				durata: intArg(),
			},
			resolve(_, { id, ...args }, ctx) {
				return ctx.prisma.lezione.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
		t.nonNull.field("aggiungiDocenteALezione", {
			type: "Lezione",
			args: {
				idLezione: nonNull("ID"),
				idDocente: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.lezione.update({
					where: {
						id: args.idLezione,
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
		t.nonNull.field("rimuoviDocenteDaLezione", {
			type: "Lezione",
			args: {
				idLezione: nonNull("ID"),
				idDocente: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.lezione.update({
					where: {
						id: args.idLezione,
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
		t.nonNull.field("aggiungiAulaALezione", {
			type: "Lezione",
			args: {
				idLezione: nonNull("ID"),
				idAula: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.lezione.update({
					where: {
						id: args.idLezione,
					},
					data: {
						aule: {
							connect: {
								id: args.idAula,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviAulaDaLezione", {
			type: "Lezione",
			args: {
				idLezione: nonNull("ID"),
				idAula: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.lezione.update({
					where: {
						id: args.idLezione,
					},
					data: {
						aule: {
							disconnect: {
								id: args.idAula,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("eliminaLezione", {
			type: "Lezione",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.lezione.delete({
					where: {
						...args,
					},
				});
			},
		});
	},
});
