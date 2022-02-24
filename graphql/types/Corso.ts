import { Prisma } from "@prisma/client";
import { objectType, extendType, nonNull, stringArg, list } from "nexus";
import { Corso } from "nexus-prisma";

export const CourseObject = objectType({
	name: Corso.$name,
	description: Corso.$description,
	definition(t) {
		t.field(Corso.id);
		t.field(Corso.nome);
		t.field(Corso.docenti);
		t.field(Corso.lauree);
		t.field(Corso.gruppi);
		t.field(Corso.studenti);
	},
});

export const CourseQueries = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.nonNull.field("corsi", {
			type: "Corso",
			resolve(_, __, ctx) {
				return ctx.prisma.corso.findMany();
			},
		});
		t.field("corso", {
			type: "Corso",
			args: {
				id: nonNull(stringArg()),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.corso.findUnique({
					where: {
						...args,
					},
				});
			},
		});
	},
});
