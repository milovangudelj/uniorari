import { Prisma } from "@prisma/client";
import { extendType, idArg, list, nonNull, objectType } from "nexus";
import { Scuola } from "nexus-prisma";

export const SchoolObject = objectType({
	name: Scuola.$name,
	description: Scuola.$description,
	definition(t) {
		// Scalars
		t.field(Scuola.id);
		t.field(Scuola.createdAt);
		t.field(Scuola.updatedAt);
		t.field(Scuola.nome);
		t.field(Scuola.presidente);
		t.field(Scuola.sede);
		t.field(Scuola.sito);
		t.field(Scuola.telefono);
		t.field(Scuola.email);
		// Relations
		t.field(Scuola.dipartimenti);
	},
});

export const SchoolQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("scuole", {
			type: "Scuola",
			resolve(_, __, ctx) {
				return ctx.prisma.scuola.findMany();
			},
		});
		t.field("scuola", {
			type: "Scuola",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.scuola.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const SchoolMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaScuola", {
			type: "Scuola",
			args: {
				id: "ID",
				nome: nonNull("String"),
				presidente: nonNull("String"),
				sede: nonNull("String"),
				sito: nonNull("String"),
				telefono: nonNull("String"),
				email: nonNull("String"),
				dipartimenti: list(nonNull("ID")),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: Prisma.ScuolaCreateInput = {
					...args,
					dipartimenti: {
						connect: args.dipartimenti?.map((id) => {
							return {
								id,
							};
						}),
					},
				};
				if (id) data.id = id;

				return ctx.prisma.scuola.create({
					data,
				});
			},
		});
	},
});
