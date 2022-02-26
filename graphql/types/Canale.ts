import { Prisma } from "@prisma/client";
import { objectType, extendType, nonNull, stringArg, idArg, list } from "nexus";
import { Canale } from "nexus-prisma";

export const GroupObject = objectType({
	name: Canale.$name,
	description: Canale.$description,
	definition(t) {
		// Scalars
		t.field(Canale.id);
		t.field(Canale.createdAt);
		t.field(Canale.updatedAt);
		t.field(Canale.nome);
		// Relations
		t.field(Canale.corsi);
	},
});

export const ChannelQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("canali", {
			type: "Canale",
			resolve(_, __, ctx) {
				return ctx.prisma.canale.findMany();
			},
		});
		t.field("canale", {
			type: "Canale",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.canale.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const ChannelMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaCanale", {
			type: "Canale",
			args: {
				id: "ID",
				nome: nonNull("String"),
				corsi: list("ID"),
			},
			resolve(_, args, ctx) {
				let data: Prisma.CanaleCreateInput = {
					nome: args.nome,
				};
				if (args.id) data.id = args.id;
				if (args.corsi)
					data.corsi = {
						connect: args.corsi.map((id) => {
							return {
								id,
							};
						}),
					};

				return ctx.prisma.canale.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaCanale", {
			type: "Canale",
			args: {
				id: nonNull("ID"),
				nome: "String",
			},
			resolve(_, { id, ...args }, ctx) {
				return ctx.prisma.canale.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
		t.nonNull.field("aggiungiCorsoACanale", {
			type: "Canale",
			args: {
				idCanale: nonNull("ID"),
				idCorso: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.canale.update({
					where: {
						id: args.idCanale,
					},
					data: {
						corsi: {
							connect: {
								id: args.idCorso,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviCorsoDaCanale", {
			type: "Canale",
			args: {
				idCanale: nonNull("ID"),
				idCorso: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.canale.update({
					where: {
						id: args.idCanale,
					},
					data: {
						corsi: {
							disconnect: {
								id: args.idCorso,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("eliminaCanale", {
			type: "Canale",
			args: {
				id: nonNull("ID"),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.canale.delete({
					where: {
						...args,
					},
				});
			},
		});
	},
});
