import { objectType, extendType, nonNull, stringArg } from "nexus";
import { Laurea } from "nexus-prisma";

export const DegreeObject = objectType({
	name: Laurea.$name,
	description: Laurea.$description,
	definition(t) {
		t.nonNull.field(Laurea.id);
		t.nonNull.field(Laurea.nome);
		t.nonNull.field(Laurea.scuola);
		t.nonNull.list.field(Laurea.corsi);
		t.nonNull.list.field(Laurea.gruppi);
	},
});

export const DegreesQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("lauree", {
			type: nonNull(DegreeObject),
			async resolve(_, __, ctx) {
				return await ctx.prisma.laurea.findMany({
					include: {
						corsi: true,
						gruppi: true,
					},
				});
			},
		});
	},
});

export const DegreeQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("laurea", {
			type: DegreeObject,
			args: {
				idLaurea: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
				return await ctx.prisma.laurea.findUnique({
					where: {
						id: args.idLaurea,
					},
					include: {
						corsi: true,
						gruppi: true,
					},
				});
			},
		});
	},
});
