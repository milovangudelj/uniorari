import { extendType, stringArg, nonNull, objectType, idArg } from "nexus";

import { Corso } from ".";

export const Profile = objectType({
	name: "Profile",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("name");
		t.nonNull.string("email");
		t.nonNull.string("username");
		t.string("image");
		t.nonNull.list.nonNull.field("corsi", {
			type: Corso,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.profile
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.corsi();
			},
		});
	},
});

export const utenteSingolo = extendType({
	type: "Query",
	definition(t) {
		t.field("utente", {
			type: Profile,
			args: {
				id: stringArg(),
				email: stringArg(),
				username: stringArg(),
			},
			async resolve(_parent, args, ctx) {
				if (!Object.values(args).some((arg) => arg !== null))
					throw "You need to provide at least one argument. The first one will be used.";

				let where = {};
				where[Object.keys(args)[0]] = Object.values(args)[0];

				return await ctx.prisma.profile.findUnique({
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
			type: Profile,
			args: {
				id: nonNull(idArg()),
				name: nonNull(stringArg()),
				email: nonNull(stringArg()),
				username: nonNull(stringArg()),
				image: stringArg(),
			},
			async resolve(_parent, args, ctx) {
				return await ctx.prisma.profile.create({
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
			type: Profile,
			args: {
				id: nonNull(stringArg()),
				name: stringArg(),
				email: stringArg(),
				username: stringArg(),
				image: stringArg(),
			},
			async resolve(_parent, { id, ...args }, ctx) {
				if (!Object.values(args).some((arg) => arg !== null))
					throw "You need to provide at least one field to be updated.";

				console.log(args);

				return await ctx.prisma.profile.update({
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
 