// Fortune cookie for a software engineer: the cookie promises a first-try
// compile, then admits it is the only thing in the engineer's life that
// lies kindly — a fortune that flatters the reader and insults them at once.
//
// Run: node main.ts  (writes /output/entry.txt; override with
// MAKEFUN_OUTPUT_DIR for a local run)
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "Your code will compile on the first try. This cookie is the only thing in your life that lies to you kindly.";

if ([...ENTRY].length > 120) throw new Error('entry over 120 characters');
if (ENTRY.includes('\n')) throw new Error('entry must be a single line');
if (!ENTRY.trim()) throw new Error('entry is empty');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), ENTRY, 'utf8');
console.log(ENTRY);
