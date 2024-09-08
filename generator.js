import fs from "fs";

let template;

try {
  template = fs.readFileSync("./src/template.html", "utf8");
} catch (err) {}

const pages = fs.readdirSync("./src/pages");

for (const page of pages) {
  const currentFile = fs.readFileSync("./src/pages/" + page, "utf8");

  const output = template.replace("PLACEHOLDER", currentFile);
  // .replaceAll('<li><a href="' + page, '<li class="active"><a href="' + page);

  fs.writeFileSync("./dist/" + page, output);
}

const assets = fs.readdirSync("./src/assets");
for (const asset of assets) {
  fs.copyFileSync("./src/assets/" + asset, "./dist/" + asset);
}
