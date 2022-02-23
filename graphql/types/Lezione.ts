import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { Lezione } from "nexus-prisma";

export const LectureObject = objectType({
	name: Lezione.$name,
	description: Lezione.$description,
	definition(t) {
		t.nonNull.field(Lezione.id);
		t.nonNull.field(Lezione.giorno);
		t.nonNull.field(Lezione.ora);
		t.nonNull.field(Lezione.inizio);
		t.nonNull.field(Lezione.fine);
		t.nonNull.field(Lezione.durata);
		t.nonNull.list.field(Lezione.docenti);
		t.nonNull.list.field(Lezione.gruppi);
		t.nonNull.list.field(Lezione.aule);
	},
});

export const LecturesQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("lezioni", {
			type: nonNull(LectureObject),
			async resolve(_, __, ctx) {
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

export const LectureQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("lezione", {
			type: LectureObject,
			args: {
				idLezione: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
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
 