import { asNexusMethod, idArg, objectType } from "nexus";
import { GraphQLDateTime } from "graphql-scalars";
import { Corso, Account, Session } from ".";

export const User = objectType({
	name: "User",
	definition(t) {
		t.nonNull.id("id");
		t.string("name");
		t.string("surname");
		t.string("email");
		t.field("emailVerified", {
			type: asNexusMethod(GraphQLDateTime, "date"),
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
