import { extendType, stringArg, nonNull, objectType, idArg } from "nexus";
import { Profilo } from "nexus-prisma";

export const ProfileObject = objectType({
	name: Profilo.$name,
	description: Profilo.$description,
	definition(t) {
		t.nonNull.field(Profilo.id);
		t.nonNull.field(Profilo.name);
		t.nonNull.field(Profilo.email);
		t.nonNull.field(Profilo.username);
		t.field(Profilo.image);
		t.nonNull.list.nonNull.field(Profilo.corsi);
	},
});

export const ProfileQuery = extendType({
	type: "Query",
	definition(t) {
		t.field("utente", {
			type: ProfileObject,
			args: {
				id: stringArg(),
				email: stringArg(),
				username: stringArg(),
			},
			async resolve(_, args, ctx) {
				if (!Object.values(args).some((arg) => arg !== null))
					throw "You need to provide at least one argument. The first one will be used.";

				let where = {};
				where[Object.keys(args)[0]] = Object.values(args)[0];

				return await ctx.prisma.profilo.findUnique({
					where,
					include: {
						corsi: true,
					},
				});
			},
		});
	},
});

export const creaUtente = extendType({
	type: "Mutation",
	definition(t) {
		t.field("creaUtente", {
			type: ProfileObject,
			args: {
				id: nonNull(idArg()),
				name: nonNull(stringArg()),
				email: nonNull(stringArg()),
				username: nonNull(stringArg()),
				image: stringArg(),
			},
			async resolve(_, args, ctx) {
				return await ctx.prisma.profilo.create({
					data: {
						id: args.id,
						name: args.name,
						email: args.email,
						username: args.username,
						image: args.image,
					},
				});
			},
		});
	},
});

export const modificaUtente = extendType({
	type: "Mutation",
	definition(t) {
		t.field("modificaUtente", {
			type: ProfileObject,
			args: {
				id: nonNull(stringArg()),
				name: stringArg(),
				email: stringArg(),
				username: stringArg(),
				image: stringArg(),
			},
			async resolve(_, { id, ...args }, ctx) {
				if (!Object.values(args).some((arg) => arg !== null))
					throw "You need to provide at least one field to be updated.";

				console.log(args);

				return await ctx.prisma.profilo.update({
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
 