import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One line, in the router's own petty voice: it dropped the connection
// at the climax because it wanted the twist for itself first.
const line = "I heard the twist coming and refused to let you hear it before I did, so I took the Wi-Fi down with me.";

if (line.length === 0 || line.length > 200 || line.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
