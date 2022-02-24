import { objectType, extendType, nonNull, stringArg, list } from "nexus";
import { Gruppo } from "nexus-prisma";

export const GroupObject = objectType({
	name: Gruppo.$name,
	description: Gruppo.$description,
	definition(t) {
		t.field(Gruppo.id);
		t.field(Gruppo.nome);
		t.field(Gruppo.adc);
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
			async resolve(_, __, ctx) {
				return await ctx.prisma.gruppo.findMany();
			},
		});
		t.field("gruppo", {
			type: "Gruppo",
			args: {
				id: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
				return await ctx.prisma.gruppo.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});
