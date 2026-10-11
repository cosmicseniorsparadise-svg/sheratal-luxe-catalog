// Asset pointers use Lovable's hosting-only path. Keep the original storage
// endpoint explicit so these same images also work on Vercel and other hosts.
const ASSET_ORIGIN = "https://sheratal-luxe-catalog.lovable.app";

export function assetUrl(asset: { url: string }): string {
  return asset.url.startsWith("/__l5e/assets-v1/")
    ? `${ASSET_ORIGIN}${asset.url}`
    : asset.url;
}