// import { User } from "nexus-prisma";
import { extendType, stringArg, nonNull, objectType, idArg } from "nexus";
import { CorsoToUser } from ".";

// export const UserDef = objectType({
// 	name: User.$name,
// 	description: User.$description,
// 	definition(t) {
// 		t.field(User.id);
// 		t.field(User.myId);
// 		t.field(User.name);
// 		t.field(User.username);
// 		t.field(User.corsi);
// 	},
// });

// export const utenteSingolo = extendType({
// 	type: "Query",
// 	definition(t) {
// 		t.field("utente", {
// 			type: "User",
// 			args: {
// 				idUtente: stringArg(),
// 				emailUtente: stringArg(),
// 				usernameUtente: stringArg(),
// 			},
// 			async resolve(_parent, args, ctx) {
// 				if (!args.idUtente && !args.emailUtente && !args.usernameUtente)
// 					throw "You need to provide at least one argument.";

// 				let where = {
// 					myId: args.idUtente,
// 				} || {
// 						email: args.emailUtente,
// 					} || {
// 						username: args.usernameUtente,
// 					};
// 				return await ctx.prisma.user.findUnique({
// 					where,
// 					include: {
// 						corsi: true,
// 					},
// 				});
// 			},
// 		});
// 	},
// });
export const User = objectType({
	name: "User",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("myId");
		t.string("name");
		t.string("username");
		t.nonNull.list.field("corsi", {
			type: nonNull(CorsoToUser),
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
	},
});

export const utenteSingolo = extendType({
	type: "Query",
	definition(t) {
		t.field("utente", {
			type: User,
			args: {
				idUtente: stringArg(),
				emailUtente: stringArg(),
				usernameUtente: stringArg(),
			},
			async resolve(_parent, args, ctx) {
				if (!args.idUtente && !args.emailUtente && !args.usernameUtente)
					throw "You need to provide at least one argument.";

				let where =
					(args.idUtente && {
						myId: args.idUtente,
					}) ||
					(args.emailUtente && {
						email: args.emailUtente,
					}) ||
					(args.usernameUtente && {
						username: args.usernameUtente,
					});

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

export const creaUtente = extendType({
	type: "Mutation",
	definition(t) {
		t.field("creaUtente", {
			type: User,
			args: {
				idUtente: nonNull(idArg()),
				nameUtente: nonNull(stringArg()),
				usernameUtente: nonNull(stringArg()),
			},
			async resolve(_parent, args, ctx) {
				return await ctx.prisma.user.create({
					data: {
						myId: args.idUtente,
						name: args.nameUtente,
						username: args.usernameUtente,
					},
				});
			},
		});
	},
});
