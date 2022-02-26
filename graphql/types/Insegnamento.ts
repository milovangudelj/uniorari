import { Prisma } from "@prisma/client";
import { extendType, idArg, list, nonNull, objectType, stringArg } from "nexus";
import { Insegnamento } from "nexus-prisma";

export const TeachingObject = objectType({
	name: Insegnamento.$name,
	description: Insegnamento.$description,
	definition(t) {
		// Scalars
		t.field(Insegnamento.id);
		t.field(Insegnamento.createdAt);
		t.field(Insegnamento.updatedAt);
		t.field(Insegnamento.nome);
		t.field(Insegnamento.obbligatorio);
		t.field(Insegnamento.cfu);
		t.field(Insegnamento.adc);
		t.field(Insegnamento.semestre);
		t.field(Insegnamento.lingua);
		t.field(Insegnamento.curriculum);
		// Relations
		t.field(Insegnamento.lauree);
		t.field(Insegnamento.corsi);
	},
});

export const TeachingQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("insegnamenti", {
			type: "Insegnamento",
			resolve(_, __, ctx) {
				return ctx.prisma.insegnamento.findMany();
			},
		});
		t.field("insegnamento", {
			type: "Insegnamento",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.insegnamento.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const TeachingMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaInsegnamento", {
			type: "Insegnamento",
			args: {
				id: "ID",
				nome: nonNull("String"),
				obbligatorio: nonNull("Boolean"),
				cfu: nonNull("Int"),
				adc: nonNull("Int"),
				semestre: nonNull("Int"),
				lingua: nonNull("String"),
				curriculum: nonNull("String"),
				lauree: nonNull(list(nonNull("ID"))),
				corsi: list(nonNull("ID")),
			},
			resolve(_, { id, ...args }, ctx) {
				if (args.lauree.length === 0)
					throw "You must specify at least one degree to be associated with the teaching.";

				let data: Prisma.InsegnamentoCreateInput = {
					...args,
					lauree: {
						connect: args.lauree.map((id) => {
							return {
								id,
							};
						}),
					},
					corsi: {
						connect: args.corsi?.map((id) => {
							return {
								id,
							};
						}),
					},
				};
				if (id) data.id = id;

				return ctx.prisma.insegnamento.create({
					data,
				});
			},
		});
	},
});
