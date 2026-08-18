import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

test("exports the home and contact pages as static HTML", async () => {
  const home = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const contact = await readFile(
    new URL("../out/contact/index.html", import.meta.url),
    "utf8",
  );

  assert.match(home, /Sesa Security/i);
  assert.match(home, /Sarah Istrefi/i);
  assert.match(contact, /Send message/i);
});

test("does not emit a server runtime", async () => {
  await assert.rejects(stat(new URL("../out/server", import.meta.url)));
});
