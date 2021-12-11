import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Corso, User } from ".";

export const CorsoToUser = objectType({
	name: "CorsoToUser",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.field("corso", {
			type: nonNull(Corso),
			async resolve(parent, _args, ctx) {
				console.log(parent);
				return await ctx.prisma.corsoToUser
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.corso();
			},
		});
		t.nonNull.field("user", {
			type: nonNull(User),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.corsoToUser
					.findUnique({
						where: {
							id: parent.id,
						},
					})
					.user();
			},
		});
	},
});
