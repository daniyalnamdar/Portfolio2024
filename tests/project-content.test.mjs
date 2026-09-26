import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/assets/mywork_data.js", import.meta.url), "utf8");

test("Metodbox is the first case study with contributor-level attribution", () => {
  const metodboxIndex = source.indexOf('w_name: "Metodbox"');
  const myMentoraIndex = source.indexOf('w_name: "MyMentora"');

  assert.notEqual(metodboxIndex, -1);
  assert.ok(metodboxIndex < myMentoraIndex);
  assert.match(source, /w_role: "Contributing Backend Developer"/);
  assert.match(source, /platform serving 100,000 students and teachers/);
  assert.match(source, /https:\/\/web\.metodbox\.com\/login/);
});

test("Document Analyze is the second case study with verified Bk Mobil attribution", () => {
  const metodboxIndex = source.indexOf('w_name: "Metodbox"');
  const documentAnalyzeIndex = source.indexOf('w_name: "Document Analyze"');
  const myMentoraIndex = source.indexOf('w_name: "MyMentora"');

  assert.ok(metodboxIndex < documentAnalyzeIndex);
  assert.ok(documentAnalyzeIndex < myMentoraIndex);
  assert.match(source, /w_role: "Full-Stack Developer at Bk Mobil"/);
  assert.match(source, /Collaborated with an AI developer/);
  assert.match(source, /retries, cancellation, and stage-level diagnostics/);
  assert.match(source, /w_demo: "empty"/);
});
