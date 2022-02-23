import { objectType, extendType, nonNull, stringArg } from "nexus";
import { Gruppo } from "nexus-prisma";

export const GroupObject = objectType({
	name: Gruppo.$name,
	description: Gruppo.$description,
	definition(t) {
		t.nonNull.field(Gruppo.id);
		t.nonNull.field(Gruppo.nome);
		t.field(Gruppo.adc);
		t.nonNull.list.field(Gruppo.docenti);
		t.nonNull.list.field(Gruppo.corsi);
		t.nonNull.list.field(Gruppo.lezioni);
		t.nonNull.field(Gruppo.laurea);
	},
});

export const GroupsQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("gruppi", {
			type: nonNull(GroupObject),
			async resolve(_, __, ctx) {
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

export const GroupQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("gruppo", {
			type: GroupObject,
			args: {
				idGruppo: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
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
