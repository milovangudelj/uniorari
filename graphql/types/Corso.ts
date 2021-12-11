import { objectType, extendType, list, nonNull, stringArg } from "nexus";
import { Docente, Laurea, Gruppo, CorsoToUser } from ".";

export const Corso = objectType({
	name: "Corso",
	definition(t) {
		t.nonNull.id("id");
		t.dateTime("createdAt");
		t.dateTime("updatedAt");
		t.nonNull.string("nome");
		t.nonNull.list.field("docenti", {
			type: nonNull(Docente),
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
		t.nonNull.list.field("lauree", {
			type: nonNull(Laurea),
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
		t.nonNull.list.field("gruppi", {
			type: nonNull(Gruppo),
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
		t.nonNull.list.field("studenti", {
			type: nonNull(CorsoToUser),
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
		t.nonNull.list.field("corsi", {
			type: nonNull(Corso),
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
