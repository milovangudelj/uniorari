import { objectType, extendType, nonNull, stringArg, idArg } from "nexus";
import { Laurea } from "nexus-prisma";

export const DegreeObject = objectType({
	name: Laurea.$name,
	description: Laurea.$description,
	definition(t) {
		// Scalars
		t.field(Laurea.id);
		t.field(Laurea.createdAt);
		t.field(Laurea.updatedAt);
		t.field(Laurea.nome);
		t.field(Laurea.scuola);
		// Relations
		t.field(Laurea.corsi);
		t.field(Laurea.gruppi);
	},
});

export const DegreeQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("lauree", {
			type: "Laurea",
			resolve(_, __, ctx) {
				return ctx.prisma.laurea.findMany();
			},
		});
		t.field("laurea", {
			type: "Laurea",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const DegreeMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaLaurea", {
			type: "Laurea",
			args: {
				id: idArg(),
				nome: nonNull(stringArg()),
				scuola: nonNull(stringArg()),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: any = { ...args };
				if (id) data.id = id;

				return ctx.prisma.laurea.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaLaurea", {
			type: "Laurea",
			args: {
				id: nonNull(idArg()),
				nome: stringArg(),
				scuola: stringArg(),
			},
			resolve(_, { id, ...args }, ctx) {
				return ctx.prisma.laurea.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
		t.nonNull.field("aggiungiCorsoALaurea", {
			type: "Laurea",
			args: {
				idLaurea: nonNull(idArg()),
				idCorso: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.update({
					where: {
						id: args.idLaurea,
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
		t.nonNull.field("rimuoviCorsoDaLaurea", {
			type: "Laurea",
			args: {
				idLaurea: nonNull(idArg()),
				idCorso: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.update({
					where: {
						id: args.idLaurea,
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
		t.nonNull.field("aggiungiGruppoALaurea", {
			type: "Laurea",
			args: {
				idLaurea: nonNull(idArg()),
				idGruppo: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.update({
					where: {
						id: args.idLaurea,
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
		t.nonNull.field("rimuoviGruppoDaLaurea", {
			type: "Laurea",
			args: {
				idLaurea: nonNull(idArg()),
				idGruppo: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.update({
					where: {
						id: args.idLaurea,
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
		t.nonNull.field("eliminaLaurea", {
			type: "Laurea",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.delete({
					where: {
						...args,
					},
				});
			},
		});
	},
});
