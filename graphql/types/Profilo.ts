import { objectType, extendType, nonNull, stringArg, idArg } from "nexus";
import { Profilo } from "nexus-prisma";

export const ProfileObject = objectType({
	name: Profilo.$name,
	description: Profilo.$description,
	definition(t) {
		// Scalars
		t.field(Profilo.id);
		t.field(Profilo.createdAt);
		t.field(Profilo.updatedAt);
		t.field(Profilo.name);
		t.field(Profilo.email);
		t.field(Profilo.username);
		t.field(Profilo.image);
		// Relations
		t.field(Profilo.corsi);
	},
});

export const ProfileQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("profilo", {
			type: "Profilo",
			args: {
				id: idArg(),
				email: stringArg(),
				username: stringArg(),
			},
			resolve(_, args, ctx) {
				if (!Object.values(args).some((arg) => arg !== null))
					throw "You need to provide at least one argument. The first one will be used.";

				let where = {};
				where[Object.keys(args)[0]] = Object.values(args)[0];

				return ctx.prisma.profilo.findUnique({
					where,
				});
			},
		});
	},
});

export const ProfileMutations = extendType({
	type: "Mutation",
	definition(t) {
		t.field("creaProfilo", {
			type: "Profilo",
			args: {
				id: nonNull(idArg()),
				name: nonNull(stringArg()),
				email: nonNull(stringArg()),
				username: nonNull(stringArg()),
				image: stringArg(),
			},
			resolve(_, args, ctx) {
				return ctx.prisma.profilo.create({
					data: {
						...args,
					},
				});
			},
		});
		t.field("modificaProfilo", {
			type: "Profilo",
			args: {
				id: nonNull(idArg()),
				name: stringArg(),
				email: stringArg(),
				username: stringArg(),
				image: stringArg(),
			},
			resolve(_, { id, ...args }, ctx) {
				// Checking if at least one argument is provided
				// if (!Object.values(args).some((arg) => arg !== null))
				// 	throw "You need to provide at least one field to be updated.";

				return ctx.prisma.profilo.update({
					where: {
						id,
					},
					data: {
						...args,
					},
				});
			},
		});
	},
});
