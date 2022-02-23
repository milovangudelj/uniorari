import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Docente } from "nexus-prisma";

export const ProfessorObject = objectType({
	name: Docente.$name,
	description: Docente.$description,
	definition(t) {
		t.nonNull.field(Docente.id);
		t.nonNull.field(Docente.nome);
		t.nonNull.field(Docente.cognome);
		t.nonNull.field(Docente.email);
		t.nonNull.list.field(Docente.corsi);
		t.nonNull.list.field(Docente.gruppi);
		t.nonNull.list.field(Docente.lezioni);
	},
});

export const ProfessorsQuery = extendType({
	type: "Query",
	definition(t) {
		t.list.field("docenti", {
			type: ProfessorObject,
			async resolve(_, __, ctx) {
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

export const ProfessorQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("docente", {
			type: ProfessorObject,
			args: {
				idDocente: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
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
