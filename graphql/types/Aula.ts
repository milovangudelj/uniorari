import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Lezione } from ".";

export const Aula = objectType({
	name: "Aula",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("nome");
		t.string("indirizzo");
		t.string("link");
		t.nonNull.list.field("lezioni", {
			type: Lezione,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.aula
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.lezioni();
			},
		});
	},
});

export const aulaSingola = extendType({
	type: "Query",
	definition(t) {
		t.field("aula", {
			type: Aula,
			args: {
				idAula: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
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

export const aule = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("aule", {
			type: nonNull(Aula),
			async resolve(_parent, _args, ctx) {
				return await ctx.prisma.aula.findMany({
					include: {
						lezioni: true,
					},
				});
			},
		});
	},
});
