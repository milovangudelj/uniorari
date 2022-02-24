import { objectType, extendType, nonNull, stringArg, list } from "nexus";
import { Laurea } from "nexus-prisma";

export const DegreeObject = objectType({
	name: Laurea.$name,
	description: Laurea.$description,
	definition(t) {
		t.field(Laurea.id);
		t.field(Laurea.nome);
		t.field(Laurea.scuola);
		t.field(Laurea.corsi);
		t.field(Laurea.gruppi);
	},
});

export const DegreeQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("lauree", {
			type: "Laurea",
			async resolve(_, __, ctx) {
				return await ctx.prisma.laurea.findMany();
			},
		});
		t.field("laurea", {
			type: "Laurea",
			args: {
				id: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
				return await ctx.prisma.laurea.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});
