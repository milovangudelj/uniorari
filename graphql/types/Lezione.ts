import { objectType, extendType, nonNull, stringArg, list } from "nexus";
import { Lezione } from "nexus-prisma";

export const LectureObject = objectType({
	name: Lezione.$name,
	description: Lezione.$description,
	definition(t) {
		t.field(Lezione.id);
		t.field(Lezione.giorno);
		t.field(Lezione.ora);
		t.field(Lezione.inizio);
		t.field(Lezione.fine);
		t.field(Lezione.durata);
		t.field(Lezione.docenti);
		t.field(Lezione.gruppi);
		t.field(Lezione.aule);
	},
});

export const LectureQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("lezioni", {
			type: "Lezione",
			async resolve(_, __, ctx) {
				return await ctx.prisma.lezione.findMany();
			},
		});
		t.field("lezione", {
			type: "Lezione",
			args: {
				id: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
				return await ctx.prisma.lezione.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});
