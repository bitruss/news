const { resolve: resolvePath, parse } = require("path");
const { readdirSync, readFileSync, renameSync, writeFileSync } = require("fs");

const WORKING_FOLDER = resolvePath(__dirname, "../_i18n/zh-Hans/_posts");
const files = readdirSync(WORKING_FOLDER);

files
  .filter(f => parse(f).ext === ".md")
  .forEach(f => {
    const content = readFileSync(resolvePath(WORKING_FOLDER, f)).toString(
      "utf8"
    );
    const eventDate = content.match(/^event_date:\s(\d{4}-\d{2}-\d{2})$/m)[1];

    writeFileSync(
      resolvePath(WORKING_FOLDER, f),
      content.replace(/^date:\s\d{4}-\d{2}-\d{2}$/m, `date: ${eventDate}`)
    );
    renameSync(
      resolvePath(WORKING_FOLDER, f),
      resolvePath(WORKING_FOLDER, f.replace(/\d{4}-\d{2}-\d{2}/, eventDate))
    );
  });
