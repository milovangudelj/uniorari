import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Aula } from "nexus-prisma";

export const ClassroomObject = objectType({
	name: Aula.$name,
	description: Aula.$description,
	definition(t) {
		t.nonNull.field(Aula.id);
		t.nonNull.field(Aula.nome);
		t.field(Aula.indirizzo);
		t.field(Aula.link);
		t.nonNull.list.field(Aula.lezioni);
	},
});

export const aule = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("aule", {
			type: nonNull(ClassroomObject),
			async resolve(_, __, ctx) {
				return await ctx.prisma.aula.findMany({
					include: {
						lezioni: true,
					},
				});
			},
		});
	},
});

export const ClassroomQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("aula", {
			type: ClassroomObject,
			args: {
				idAula: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
				return await ctx.prisma.aula.findUnique({
					where: {
						id: args.idAula,
					},
					include: {
						lezioni: true,
					},
				});
			},
		});
	},
});
 