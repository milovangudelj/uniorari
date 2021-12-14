import { join } from "path";
import { makeSchema } from "nexus";

import * as types from "./types";

const schema = generateSchema();

function generateSchema() {
	try {
		const s = makeSchema({
			types: { ...types },
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
		});

		return s;
	} catch (error) {
		console.log(error);
	}
}

export default schema;
