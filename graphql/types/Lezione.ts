import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { Docente, Gruppo, Aula } from ".";

export const Lezione = objectType({
	name: "Lezione",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.int("giorno");
		t.nonNull.int("ora");
		t.nonNull.string("inizio");
		t.nonNull.string("fine");
		t.nonNull.int("durata");
		t.nonNull.list.field("docenti", {
			type: nonNull(Docente),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.lezione
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.docenti();
			},
		});
		t.nonNull.list.field("gruppi", {
			type: nonNull(Gruppo),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.lezione
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.gruppi();
			},
		});
		t.nonNull.list.field("aule", {
			type: nonNull(Aula),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.lezione
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.aule();
			},
		});
	},
});

export const lezioneSingola = extendType({
	type: "Query",
	definition(t) {
		t.field("lezione", {
			type: Lezione,
			args: {
				idLezione: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
				return await ctx.prisma.lezione.findUnique({
					where: {
						id: args.idLezione,
					},
					include: {
						docenti: true,
						gruppi: true,
						aule: true,
					},
				});
			},
		});
	},
});

export const lezioni = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("lezioni", {
			type: nonNull(Lezione),
			async resolve(_parent, _args, ctx) {
				return await ctx.prisma.lezione.findMany({
					include: {
						docenti: true,
						gruppi: true,
						aule: true,
					},
				});
			},
		});
	},
});
 