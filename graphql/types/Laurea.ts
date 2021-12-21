import { objectType, extendType, list, nonNull, stringArg } from "nexus";
import { Corso, Gruppo } from ".";

export const Laurea = objectType({
	name: "Laurea",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("nome");
		t.nonNull.string("scuola");
		t.nonNull.list.field("corsi", {
			type: nonNull(Corso),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.laurea
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.corsi();
			},
		});
		t.nonNull.list.field("gruppi", {
			type: nonNull(Gruppo),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.laurea
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.gruppi();
			},
		});
	},
});

export const singolaLaurea = extendType({
	type: "Query",
	definition(t) {
		t.field("laurea", {
			type: Laurea,
			args: {
				idLaurea: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
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

export const lauree = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("lauree", {
			type: nonNull(Laurea),
			async resolve(_parent, _args, ctx) {
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
 