const SHOPIFY_API_VERSION = "2026-10";
const SHOPIFY_STORE_PERMANENT_DOMAIN = "sheratal-luxe-catalog-dh29m-dz6vc09g.myshopify.com";
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = "b60deff8374af578fb5657e8513a0c67";

export async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN },
    body: JSON.stringify({ query, variables }),
  });
  if (res.status === 402) {
    const { toast } = await import("sonner");
    toast.error("Shopify: Payment required", { description: "The Shopify store needs an active plan to take orders." });
    return null;
  }
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data = await res.json();
  if (data.errors) throw new Error(data.errors.map((e: { message: string }) => e.message).join(", "));
  return data;
}

const VARIANTS_QUERY = `query($q: String!) { products(first: 5, query: $q) { edges { node { title variants(first: 20) { edges { node { id selectedOptions { name value } } } } } } } }`;

/** Find the Shopify variant ID for a catalog product (matched by title) and size. */
export async function findVariantId(title: string, size: string): Promise<string | null> {
  const data = await storefrontApiRequest(VARIANTS_QUERY, { q: `title:"${title.replace(/"/g, "")}"` });
  const node = data?.data?.products?.edges?.map((e: any) => e.node).find((n: any) => n.title === title);
  const v = node?.variants.edges.find((e: any) => e.node.selectedOptions.some((o: any) => o.name === "Size" && o.value === size));
  return v?.node.id ?? null;
}

const LINES = `lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } }`;
export const CART_QUERY = `query cart($id: ID!) { cart(id: $id) { id totalQuantity } }`;
export const CART_CREATE = `mutation($input: CartInput!) { cartCreate(input: $input) { cart { id checkoutUrl ${LINES} } userErrors { field message } } }`;
export const CART_ADD = `mutation($cartId: ID!, $lines: [CartLineInput!]!) { cartLinesAdd(cartId: $cartId, lines: $lines) { cart { id ${LINES} } userErrors { field message } } }`;
export const CART_UPDATE = `mutation($cartId: ID!, $lines: [CartLineUpdateInput!]!) { cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { id } userErrors { field message } } }`;
export const CART_REMOVE = `mutation($cartId: ID!, $lineIds: [ID!]!) { cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { id } userErrors { field message } } }`;

export function formatCheckoutUrl(url: string) {
  try {
    const u = new URL(url);
    u.searchParams.set("channel", "online_store");
    return u.toString();
  } catch {
    return url;
  }
}

export const isCartNotFound = (errs: Array<{ message: string }>) =>
  errs.some((e) => /cart not found|does not exist/i.test(e.message));
