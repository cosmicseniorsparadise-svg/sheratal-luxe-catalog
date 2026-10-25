<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Resolve Lovable asset pointers through `src/lib/asset-url.ts` before rendering; their relative hosting-only paths do not exist on external deployments such as Vercel.
- Checkout runs through Shopify: the bag (src/lib/cart.ts) syncs to a Shopify cart via the Storefront API (src/lib/shopify.ts), matching catalog products to Shopify products by exact title + Size; keep titles identical in both places so add-to-bag keeps working.
- Products explicitly marked `checkoutMode: "whatsapp"` stay local in the shared bag; a bag containing them uses an assisted WhatsApp order, never a partial Shopify checkout. Shopify sync must preserve those local lines.
