import { objectType, extendType, list, nonNull, stringArg } from "nexus";
import { Corso, Gruppo } from ".";

export const CDL = objectType({
	name: "CDL",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("nome");
		t.nonNull.string("scuola");
		t.nonNull.list.field("corsi", {
			type: nonNull(Corso),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.cDL
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
				return await ctx.prisma.cDL
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

export const CDLSingolo = extendType({
	type: "Query",
	definition(t) {
		t.field("CDL", {
			type: CDL,
			args: {
				idCDL: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
				return await ctx.prisma.cDL.findUnique({
					where: {
						id: args.idCDL,
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

export const CDLs = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("CDLs", {
			type: nonNull(CDL),
			async resolve(_parent, _args, ctx) {
				return await ctx.prisma.cDL.findMany({
					include: {
						corsi: true,
						gruppi: true,
					},
				});
			},
		});
	},
});
