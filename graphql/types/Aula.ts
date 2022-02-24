import { objectType, extendType, nonNull, stringArg, list } from "nexus";
import { Aula } from "nexus-prisma";

export const ClassroomObject = objectType({
	name: Aula.$name,
	description: Aula.$description,
	definition(t) {
		t.field(Aula.id);
		t.field(Aula.nome);
		t.field(Aula.indirizzo);
		t.field(Aula.link);
		t.field(Aula.lezioni);
	},
});

export const ClassroomQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("aule", {
			type: "Aula",
			async resolve(_, __, ctx) {
				return await ctx.prisma.aula.findMany();
			},
		});
		t.field("aula", {
			type: "Aula",
			args: {
				id: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
				return await ctx.prisma.aula.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});
