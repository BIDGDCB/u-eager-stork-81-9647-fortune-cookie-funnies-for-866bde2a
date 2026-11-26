// Fortune Cookie Funnies for Engineers — a fortune-cookie message aimed at
// a software engineer, one line of at most 120 characters. The program below
// validates the line against the competition gate, then writes it to
// entry.txt under $MAKEFUN_OUTPUT_DIR (falling back to /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

// The fortune: good news first, then the catch every engineer already knows by heart.
const ENTRY =
  "Your code will compile on the first try. Your code review will not. Eat the cookie. Deploy on Friday anyway.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const line = ENTRY.trim();
if (/[\r\n]/.test(line)) {
  fail("entry must be one line, no line breaks allowed");
}
if (line.length === 0) {
  fail("entry is blank");
}
if (line.length > MAX_CHARS) {
  fail(`entry is ${line.length} characters, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
console.log(`wrote ${line.length} characters to ${outPath}`);
