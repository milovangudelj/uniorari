import { objectType, nonNull } from "nexus";
import { User } from ".";

export const Account = objectType({
	name: "Account",
	definition(t) {
		t.nonNull.id("id");
		t.nonNull.string("userId");
		t.nonNull.string("type");
		t.nonNull.string("provider");
		t.nonNull.string("providerAccountId");
		t.string("refresh_token");
		t.string("access_token");
		t.int("expires_at");
		t.string("token_type");
		t.string("scope");
		t.string("id_token");
		t.string("session_state");
		t.nonNull.field("user", {
			type: nonNull(User),
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.account
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
