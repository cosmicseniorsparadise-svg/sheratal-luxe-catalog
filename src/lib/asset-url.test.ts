import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { assetUrl } from "./asset-url";

describe("portable image addresses", () => {
  test("loads stored photos from their owner instead of the Vercel origin", () => {
    assert.equal(assetUrl({ url: "/__l5e/assets-v1/edf2bc01-b373-4709-b282-8af899fc0248/denim1.jpg" }),
      "https://sheratal-luxe-catalog.lovable.app/__l5e/assets-v1/edf2bc01-b373-4709-b282-8af899fc0248/denim1.jpg");
  });

  test("preserves already absolute image addresses", () => {
    const url = "https://sheratal-luxe-catalog.lovable.app/photo.jpg";
    assert.equal(assetUrl({ url }), url);
  });

  test("preserves bundled images and locally uploaded photos", () => {
    for (const url of ["/assets/about-123.jpg", "data:image/png;base64,abc", "blob:https://sheratal.vercel.app/123"]) {
      assert.equal(assetUrl({ url }), url);
    }
  });
});