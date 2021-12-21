import { objectType, extendType, list, nonNull, stringArg } from "nexus";
import { Docente, Laurea, Gruppo, Profile } from ".";

export const Corso = objectType({
	name: "Corso",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("nome");
		t.nonNull.list.nonNull.field("docenti", {
			type: Docente,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.corso
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.docenti();
			},
		});
		t.nonNull.list.nonNull.field("lauree", {
			type: Laurea,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.corso
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.lauree();
			},
		});
		t.nonNull.list.nonNull.field("gruppi", {
			type: Gruppo,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.corso
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.gruppi();
			},
		});
		t.nonNull.list.nonNull.field("studenti", {
			type: Profile,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.corso
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.studenti();
			},
		});
	},
});

export const corsoSingolo = extendType({
	type: "Query",
	definition(t) {
		t.field("corso", {
			type: Corso,
			args: {
				idCorso: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
				return await ctx.prisma.corso.findUnique({
					where: {
						id: args.idCorso,
					},
					include: {
						docenti: true,
						lauree: true,
						gruppi: true,
						studenti: true,
					},
				});
			},
		});
	},
});

export const corsi = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("corsi", {
			type: Corso,
			async resolve(_parent, _args, ctx) {
				return await ctx.prisma.corso.findMany({
					include: {
						docenti: true,
						lauree: true,
						gruppi: true,
						studenti: true,
					},
				});
			},
		});
	},
});
 