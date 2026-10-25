import { test } from "node:test";
import { strict as assert } from "node:assert";
import { getProduct } from "./products";

for (const [id, price] of [
  ["royal-plum-embroidered-co-ord-set", 2999],
  ["blush-pink-embroidered-palazzo-set", 2749],
  ["cocoa-embroidered-kurta-palazzo-set", 2599],
] as const) {
  test(`${id} has its approved price`, () => assert.equal(getProduct(id)?.price, price));
  test(`${id} belongs to Ethnic Wear`, () => assert.equal(getProduct(id)?.category, "Ethnic Wear"));
  test(`${id} does not use Shopify`, () => assert.equal(getProduct(id)?.checkoutMode, "whatsapp"));
}