import { objectType, extendType, nonNull, stringArg, idArg } from "nexus";
import { Aula } from "nexus-prisma";

export const ClassroomObject = objectType({
	name: Aula.$name,
	description: Aula.$description,
	definition(t) {
		// Scalars
		t.field(Aula.id);
		t.field(Aula.createdAt);
		t.field(Aula.updatedAt);
		t.field(Aula.nome);
		t.field(Aula.indirizzo);
		t.field(Aula.link);
		// Relations
		t.field(Aula.lezioni);
	},
});

export const ClassroomQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("aule", {
			type: "Aula",
			resolve(_, __, ctx) {
				return ctx.prisma.aula.findMany();
			},
		});
		t.field("aula", {
			type: "Aula",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.aula.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const ClassroomMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaAula", {
			type: "Aula",
			args: {
				id: idArg(),
				nome: nonNull(stringArg()),
				indirizzo: nonNull(stringArg()),
				link: nonNull(stringArg()),
			},
			resolve(_, { id, ...args }, ctx) {
				let data: any = { ...args };
				if (id) data.id = id;

				return ctx.prisma.aula.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaAula", {
			type: "Aula",
			args: {
				id: nonNull(idArg()),
				nome: stringArg(),
				indirizzo: stringArg(),
				link: stringArg(),
			},
			resolve(_, { id, ...args }, ctx) {
				return ctx.prisma.aula.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
		t.nonNull.field("aggiungiLezioneAdAula", {
			type: "Aula",
			args: {
				idAula: nonNull(idArg()),
				idLezione: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.aula.update({
					where: {
						id: args.idAula,
					},
					data: {
						lezioni: {
							connect: {
								id: args.idLezione,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviLezioneDaAula", {
			type: "Aula",
			args: {
				idAula: nonNull(idArg()),
				idLezione: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.aula.update({
					where: {
						id: args.idAula,
					},
					data: {
						lezioni: {
							disconnect: {
								id: args.idLezione,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("eliminaAula", {
			type: "Aula",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.aula.delete({
					where: {
						...args,
					},
				});
			},
		});
	},
});
