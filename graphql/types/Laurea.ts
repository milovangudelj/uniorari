import { Prisma } from "@prisma/client";
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
		t.field(Laurea.codice);
		t.field(Laurea.nome);
		t.field(Laurea.presidente);
		t.field(Laurea.email);
		// Relations
		t.field(Laurea.dipartimento);
		t.field(Laurea.insegnamenti);
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
				id: nonNull("ID"),
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
				id: "ID",
				codice: nonNull("String"),
				nome: nonNull("String"),
				presidente: nonNull("String"),
				email: nonNull("String"),
				dipartimento: nonNull("ID"),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: Prisma.LaureaCreateInput = {
					...args,
					dipartimento: {
						connect: {
							id: args.dipartimento,
						},
					},
				};
				if (id) data.id = id;

				return ctx.prisma.laurea.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaLaurea", {
			type: "Laurea",
			args: {
				id: nonNull("ID"),
				codice: "String",
				nome: "String",
				presidente: "String",
				email: "String",
				dipartimento: "ID",
			},
			resolve(_, { id, ...args }, ctx) {
				let data: Prisma.LaureaUpdateInput = {
					codice: args.codice,
					nome: args.nome,
					presidente: args.presidente,
					email: args.email,
					dipartimento: {
						connect: {
							id: args.dipartimento,
						},
					},
				};

				return ctx.prisma.laurea.update({
					where: {
						id,
					},
					data,
				});
			},
		});
		t.nonNull.field("aggiungiInsegnamentoALaurea", {
			type: "Laurea",
			args: {
				idLaurea: nonNull("ID"),
				idInsegnamento: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.update({
					where: {
						id: args.idLaurea,
					},
					data: {
						insegnamenti: {
							connect: {
								id: args.idInsegnamento,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviInsegnamentoDaLaurea", {
			type: "Laurea",
			args: {
				idLaurea: nonNull("ID"),
				idInsegnamento: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.laurea.update({
					where: {
						id: args.idLaurea,
					},
					data: {
						insegnamenti: {
							disconnect: {
								id: args.idInsegnamento,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("eliminaLaurea", {
			type: "Laurea",
			args: {
				id: nonNull("ID"),
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
