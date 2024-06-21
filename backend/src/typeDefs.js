import { join } from "node:path";
import { readFileSync } from "node:fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf8");
