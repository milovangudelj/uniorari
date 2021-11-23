import { objectType, nonNull, asNexusMethod } from "nexus";
import { GraphQLDateTime } from "graphql-scalars";
import { User } from ".";

export const Session = objectType({
	name: "Session",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("sessionToken");
		t.nonNull.string("userId");
		t.nonNull.field("expires", {
			type: asNexusMethod(GraphQLDateTime, "date"),
		});
		t.nonNull.field("user", {
			type: nonNull(User),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.session
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
