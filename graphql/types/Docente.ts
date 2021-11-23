import { extendType, list, nonNull, objectType, stringArg } from "nexus";
import { Corso, Gruppo, Lezione } from ".";

export const Docente = objectType({
	name: "Docente",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("nome");
		t.string("cognome");
		t.string("email");
		t.nonNull.list.field("corsi", {
			type: Corso,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.docente
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.corsi();
			},
		});
		t.nonNull.list.field("gruppi", {
			type: Gruppo,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.docente
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.gruppi();
			},
		});
		t.nonNull.list.field("lezioni", {
			type: Lezione,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.docente
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

export const docenteSingolo = extendType({
	type: "Query",
	definition(t) {
		t.field("docente", {
			type: Docente,
			args: {
				idDocente: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
				return await ctx.prisma.docente.findUnique({
					where: {
						id: args.idDocente,
					},
					include: {
						corsi: true,
						gruppi: true,
						lezioni: true,
					},
				});
			},
		});
	},
});

export const docenti = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("docenti", {
			type: nonNull(Docente),
			async resolve(_parent, _args, ctx) {
				return await ctx.prisma.docente.findMany({
					include: {
						corsi: true,
						gruppi: true,
						lezioni: true,
					},
				});
			},
		});
	},
});

// export const createDocente = extendType({
// 	type: "Mutation",
// 	definition(t) {
// 		t.nonNull.field("createDocente", {
// 			type: nonNull(Docente),
// 			args: {
// 				DocenteName: nonNull(stringArg()),
// 				DocenteSurname: nonNull(stringArg()),
// 				DocenteEmail: nonNull(stringArg()),
// 			},
// 			async resolve(_parent, args, ctx) {
// 				return await ctx.prisma.Docente.create({
// 					data: {
// 						name: args.DocenteName,
// 						surname: args.DocenteSurname,
// 						email: args.DocenteEmail,
// 					},
// 				});
// 			},
// 		});
// 	},
// });

// export const deleteDocente = extendType({
// 	type: "Mutation",
// 	definition(t) {
// 		t.nonNull.field("deleteDocente", {
// 			type: nonNull(Docente),
// 			args: {
// 				DocenteId: nonNull(stringArg()),
// 			},
// 			async resolve(_parent, args, ctx) {
// 				return await ctx.prisma.Docente.delete({
// 					where: {
// 						id: args.DocenteId,
// 					},
// 				});
// 			},
// 		});
// 	},
// });
