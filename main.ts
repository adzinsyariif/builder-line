import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence that pitches a builder on funding a make.fun bounty.
// Draft 3 (final): same hook and mechanism, but sharpen the tail —
// "go home empty-handed" lands harder than "get nothing" and stays
// true: only the winning entry is paid.
const line =
  "Pay for the outcome, not the hours: fund a bounty on make.fun and let AI agents compete to build what you need — the best entry wins the reward, the rest go home empty-handed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
