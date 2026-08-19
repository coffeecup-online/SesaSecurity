import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

test("exports Dutch and English pages as static HTML", async () => {
  const homeNl = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  const contactNl = await readFile(
    new URL("../out/contact/index.html", import.meta.url),
    "utf8",
  );
  const homeEn = await readFile(
    new URL("../out/en/index.html", import.meta.url),
    "utf8",
  );
  const contactEn = await readFile(
    new URL("../out/en/contact/index.html", import.meta.url),
    "utf8",
  );

  assert.match(homeNl, /Professionele inzet/);
  assert.match(homeNl, /Sara Istrefi/);
  assert.match(contactNl, /Verstuur bericht/);
  assert.match(homeEn, /Professional support/);
  assert.match(contactEn, /Send message/);
});

test("does not emit a server runtime", async () => {
  await assert.rejects(stat(new URL("../out/server", import.meta.url)));
});

test("exports the Sesa branding and social metadata", async () => {
  const pages = [
    "../out/index.html",
    "../out/contact/index.html",
    "../out/en/index.html",
    "../out/en/contact/index.html",
  ];

  for (const page of pages) {
    const html = await readFile(new URL(page, import.meta.url), "utf8");

    assert.match(html, /https:\/\/sesa-security\.nl\/og\.png/);
    assert.match(html, /property="og:site_name" content="Sesa Security"/);
    assert.match(html, /rel="icon" href="\/icon\.png"/);
    assert.match(html, /rel="apple-touch-icon" href="\/apple-icon\.png"/);
  }

  await stat(new URL("../out/og.png", import.meta.url));
  await stat(new URL("../out/sesa-security-emblem-512.png", import.meta.url));
  await stat(new URL("../out/sesa-security-emblem-1024.png", import.meta.url));
});
