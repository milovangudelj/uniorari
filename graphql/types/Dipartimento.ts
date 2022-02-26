import { Prisma } from "@prisma/client";
import { extendType, idArg, list, nonNull, objectType } from "nexus";
import { Dipartimento } from "nexus-prisma";

export const DepartmentObject = objectType({
	name: Dipartimento.$name,
	description: Dipartimento.$description,
	definition(t) {
		// Scalars
		t.field(Dipartimento.id);
		t.field(Dipartimento.createdAt);
		t.field(Dipartimento.updatedAt);
		t.field(Dipartimento.nome);
		t.field(Dipartimento.acronimo);
		t.field(Dipartimento.direttore);
		t.field(Dipartimento.sede);
		t.field(Dipartimento.sito);
		t.field(Dipartimento.telefono);
		t.field(Dipartimento.email);
		// Relations
		t.field(Dipartimento.scuola);
		t.field(Dipartimento.lauree);
	},
});

export const DepartmentQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("dipartimenti", {
			type: "Dipartimento",
			resolve(_, __, ctx) {
				return ctx.prisma.dipartimento.findMany();
			},
		});
		t.field("dipartimento", {
			type: "Dipartimento",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.dipartimento.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const DepartmentMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaDipartimento", {
			type: "Dipartimento",
			args: {
				id: "ID",
				nome: nonNull("String"),
				acronimo: nonNull("String"),
				direttore: nonNull("String"),
				sede: nonNull("String"),
				sito: nonNull("String"),
				telefono: nonNull("String"),
				email: nonNull("String"),
				scuola: nonNull("ID"),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: Prisma.DipartimentoCreateInput = {
					...args,
					scuola: {
						connect: {
							id: args.scuola,
						},
					},
				};
				if (id) data.id = id;

				return ctx.prisma.dipartimento.create({
					data,
				});
			},
		});
	},
});
