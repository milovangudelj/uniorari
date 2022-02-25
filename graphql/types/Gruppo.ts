import { Prisma } from "@prisma/client";
import {
	objectType,
	extendType,
	nonNull,
	stringArg,
	idArg,
	intArg,
} from "nexus";
import { Gruppo } from "nexus-prisma";

export const GroupObject = objectType({
	name: Gruppo.$name,
	description: Gruppo.$description,
	definition(t) {
		// Scalars
		t.field(Gruppo.id);
		t.field(Gruppo.createdAt);
		t.field(Gruppo.updatedAt);
		t.field(Gruppo.nome);
		t.field(Gruppo.adc);
		// Relations
		t.field(Gruppo.docenti);
		t.field(Gruppo.corsi);
		t.field(Gruppo.lezioni);
		t.field(Gruppo.laurea);
	},
});

export const GroupQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("gruppi", {
			type: "Gruppo",
			resolve(_, __, ctx) {
				return ctx.prisma.gruppo.findMany();
			},
		});
		t.field("gruppo", {
			type: "Gruppo",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});

export const GroupMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("creaGruppo", {
			type: "Gruppo",
			args: {
				id: idArg(),
				nome: nonNull(stringArg()),
				adc: nonNull(intArg()),
				idLaurea: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				let data: Prisma.GruppoCreateInput = {
					nome: args.nome,
					adc: args.adc,
					laurea: {
						connect: {
							id: args.idLaurea,
						},
					},
				};
				if (args.id) data.id = args.id;

				return ctx.prisma.gruppo.create({
					data,
				});
			},
		});
		t.nonNull.field("modificaGruppo", {
			type: "Gruppo",
			args: {
				id: nonNull(idArg()),
				nome: stringArg(),
				adc: intArg(),
			},
			resolve(_, { id, ...args }, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
		t.nonNull.field("aggiungiDocenteAGruppo", {
			type: "Gruppo",
			args: {
				idGruppo: nonNull(idArg()),
				idDocente: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id: args.idGruppo,
					},
					data: {
						docenti: {
							connect: {
								id: args.idDocente,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("rimuoviDocenteDaGruppo", {
			type: "Gruppo",
			args: {
				idGruppo: nonNull(idArg()),
				idDocente: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id: args.idGruppo,
					},
					data: {
						docenti: {
							disconnect: {
								id: args.idDocente,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("aggiungiCorsoAGruppo", {
			type: "Gruppo",
			args: {
				idGruppo: nonNull(idArg()),
				idCorso: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id: args.idGruppo,
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
		t.nonNull.field("rimuoviCorsoDaGruppo", {
			type: "Gruppo",
			args: {
				idGruppo: nonNull(idArg()),
				idCorso: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id: args.idGruppo,
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
		t.nonNull.field("aggiungiLezioneAGruppo", {
			type: "Gruppo",
			args: {
				idGruppo: nonNull(idArg()),
				idLezione: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id: args.idGruppo,
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
		t.nonNull.field("rimuoviLezioneDaGruppo", {
			type: "Gruppo",
			args: {
				idGruppo: nonNull(idArg()),
				idLezione: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id: args.idGruppo,
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
		t.nonNull.field("modificaLaureaDelGruppo", {
			type: "Gruppo",
			args: {
				idGruppo: nonNull(idArg()),
				idLaurea: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.update({
					where: {
						id: args.idGruppo,
					},
					data: {
						laurea: {
							connect: {
								id: args.idLaurea,
							},
						},
					},
				});
			},
		});
		t.nonNull.field("eliminaGruppo", {
			type: "Gruppo",
			args: {
				id: nonNull(idArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.gruppo.delete({
					where: {
						...args,
					},
				});
			},
		});
	},
});
