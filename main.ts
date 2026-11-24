import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I don't need a bigger context window — I just need you in every token of the one I have.";

// The gate only accepts 1–200 characters, so refuse to write anything outside it.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
