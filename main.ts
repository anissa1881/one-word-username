// One Word, One Username, One Reward — entry program.
// Writes the entrant's own make.fun username, one word and nothing else,
// to entry.txt inside the output directory.
//
// Output directory: $MAKEFUN_OUTPUT_DIR, else an "output" folder next to
// this script. Never relies on the process working directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "anissa1881";

// The gate accepts UTF-8 text of 1 to 30 characters, not only whitespace.
// Refuse to write anything that would fail it.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(scriptDir, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
