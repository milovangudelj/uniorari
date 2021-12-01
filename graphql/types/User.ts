import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Corso, Account, Session } from ".";

export const User = objectType({
	name: "User",
	definition(t) {
		t.nonNull.id("id");
		t.string("name");
		t.string("username");
		t.string("email");
		t.field("emailVerified", {
			type: "DateTime",
		});
		t.string("image");
		t.nonNull.list.field("corsi", {
			type: Corso,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.user
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.corsi();
			},
		});
		t.nonNull.list.field("accounts", {
			type: Account,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.user
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.accounts();
			},
		});
		t.nonNull.list.field("sessions", {
			type: Session,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.user
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.sessions();
			},
		});
	},
});

export const utenteSingolo = extendType({
	type: "Query",
	definition(t) {
		t.field("utente", {
			type: User,
			args: {
				emailUtente: stringArg(),
				usernameUtente: stringArg(),
			},
			async resolve(_parent, args, ctx) {
				if (!args.emailUtente && !args.usernameUtente)
					throw "You need to provide at least one argument.";

				let where = args.emailUtente
					? {
							email: args.emailUtente,
					  }
					: {
							username: args.usernameUtente,
					  };
				return await ctx.prisma.user.findUnique({
					where,
					include: {
						corsi: true,
					},
				});
			},
		});
	},
});