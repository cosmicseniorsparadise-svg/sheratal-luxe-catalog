import { test } from "node:test";
import { strict as assert } from "node:assert";
import { cart, cartTotal, needsAssistedOrder } from "./cart";

test("new outfits add, update and remove without Shopify requests", async () => {
  const storage = new Map<string, string>();
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, value),
  } });
  const originalFetch = globalThis.fetch;
  let requests = 0;
  globalThis.fetch = async () => { requests++; throw new Error("Shopify must not be called"); };
  const readLines = () => JSON.parse(storage.get("sheratal-shopify-cart") ?? "{}").lines;
  try {
    cart.clear();
    assert.equal(await cart.add("royal-plum-embroidered-co-ord-set", "M"), true);
    assert.equal(await cart.add("blush-pink-embroidered-palazzo-set", "M"), true);
    assert.equal(await cart.add("cocoa-embroidered-kurta-palazzo-set", "M"), true);
    assert.equal(cartTotal(readLines()), 8347);
    assert.equal(needsAssistedOrder(readLines()), true);
    assert.equal(await cart.setQty("royal-plum-embroidered-co-ord-set", "M", 2), true);
    assert.equal(cartTotal(readLines()), 11346);
    await cart.sync();
    cart.checkout();
    assert.equal(requests, 0);
    assert.equal(await cart.setQty("royal-plum-embroidered-co-ord-set", "M", 0), true);
    assert.equal(cartTotal(readLines()), 5348);
    cart.clear();
  } finally {
    globalThis.fetch = originalFetch;
  }
});