import {
	objectType,
	extendType,
	list,
	nonNull,
	stringArg,
	queryType,
} from "nexus";
import { Corso } from "nexus-prisma";

export const CourseObject = objectType({
	name: Corso.$name,
	definition(t) {
		t.nonNull.field(Corso.id);
		t.nonNull.field(Corso.nome);
		t.nonNull.list.field(Corso.docenti);
		t.nonNull.list.field(Corso.lauree);
		t.nonNull.list.field(Corso.gruppi);
		t.nonNull.list.field(Corso.studenti);
	},
});

export const CoursesQuery = extendType({
	type: "Query",
	definition(t) {
		t.list.field("corsi", {
			type: CourseObject,
			async resolve(_, __, ctx) {
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

export const CourseQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("corso", {
			type: CourseObject,
			args: {
				idCorso: nonNull(stringArg()),
			},
			async resolve(_, args, ctx) {
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
