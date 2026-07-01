#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";

const file = "public/sitemap.xml";

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const today = formatLocalDate(new Date());

const content = await readFile(file, "utf8");

let count = 0;

const updated = content.replace(
  /(<lastmod>)\d{4}-\d{2}-\d{2}(<\/lastmod>)/g,
  (_, openTag, closeTag) => {
    count += 1;
    return `${openTag}${today}${closeTag}`;
  },
);

await writeFile(file, updated, "utf8");

console.log(`Updated ${count} lastmod entries in ${file} to ${today}`);
