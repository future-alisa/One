const fs = require("fs");
const path = require("path");

const dist = path.resolve(__dirname, "../dist");
const jsFile = path.join(dist, "index.js");
const mjsFile = path.join(dist, "index.mjs");
const cjsFile = path.join(dist, "index.cjs");

// rename JS -> MJS
fs.renameSync(jsFile, mjsFile);

// generate CJS
const esm = fs.readFileSync(mjsFile, "utf8");
const cjs = esm
  .replace(/export const (\w+) =/g, "exports.$1 =")
  .replace(/export function (\w+)/g, "exports.$1 = function $1")
  .replace(/export default/g, "module.exports =");
fs.writeFileSync(cjsFile, cjs);

console.log("dist/index.mjs + dist/index.cjs generated");
