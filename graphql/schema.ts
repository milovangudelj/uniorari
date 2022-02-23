import { join } from "path";
import { makeSchema } from "nexus";

import * as types from "./types";
import { GraphQLSchema } from "graphql";

const schema = generateSchema();

function generateSchema() {
	try {
		const s = makeSchema({
			types,
			outputs: {
				typegen: join(
					process.cwd(),
					"node_modules",
					"@types",
					"nexus-typegen",
					"index.d.ts"
				),
				schema: join(process.cwd(), "graphql", "schema.graphql"),
			},
			contextType: {
				export: "Context",
				module: join(process.cwd(), "graphql", "context.ts"),
			},
		}) as unknown as GraphQLSchema;

		return s;
	} catch (error) {
		console.log("Oh shit, an error occurred...", error);
	}
}

export default schema;