// @ts-check
import { RegSuitCore } from "reg-suit-core";
import fs from "fs/promises";

await fs.cp("/new", "./reg/new", { recursive: true });
await fs.cp("/old", "./reg/expected", { recursive: true });

const reg = new RegSuitCore({
  configFileName: "./regconfig.json",
});

const processor = reg.createProcessor();

const { comparisonResult } = await processor.compare({ expectedKey: null });

const exitStatus =
  comparisonResult.failedItems.length +
  comparisonResult.newItems.length +
  comparisonResult.deletedItems.length;

await fs.rm("./reg/new", { recursive: true, force: true });
await fs.cp("./reg", "/out", { recursive: true });

if (exitStatus === 0 && comparisonResult.passedItems.length === 0) {
  process.exit(-1);
}

process.exit(exitStatus);
