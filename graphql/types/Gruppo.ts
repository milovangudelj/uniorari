import { objectType, extendType, list, nonNull, stringArg } from "nexus";
import { Docente, Laurea, Corso, Lezione } from ".";

export const Gruppo = objectType({
	name: "Gruppo",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("nome");
		t.int("adc");
		t.nonNull.list.field("docenti", {
			type: nonNull(Docente),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.gruppo
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.docenti();
			},
		});
		t.nonNull.field("laurea", {
			type: nonNull(Laurea),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.gruppo
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.laurea();
			},
		});
		t.nonNull.list.field("corsi", {
			type: nonNull(Corso),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.gruppo
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.corsi();
			},
		});
		t.nonNull.list.field("lezioni", {
			type: nonNull(Lezione),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.gruppo
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

export const gruppoSingolo = extendType({
	type: "Query",
	definition(t) {
		t.field("gruppo", {
			type: Gruppo,
			args: {
				idGruppo: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
				return await ctx.prisma.gruppo.findUnique({
					where: {
						id: args.idGruppo,
					},
					include: {
						docenti: true,
						laurea: true,
						corsi: true,
						lezioni: true,
					},
				});
			},
		});
	},
});

export const gruppi = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("gruppi", {
			type: nonNull(Gruppo),
			async resolve(_parent, _args, ctx) {
				return await ctx.prisma.gruppo.findMany({
					include: {
						docenti: true,
						laurea: true,
						corsi: true,
						lezioni: true,
					},
				});
			},
		});
	},
});
