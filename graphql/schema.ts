import { join } from "path";
import { GraphQLSchema } from "graphql";
import { makeSchema } from "nexus";

import * as types from "./types";

const schema = makeSchema({
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

export default schema;
