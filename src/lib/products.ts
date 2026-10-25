import l1 from "@/assets/lehenga1.jpg.asset.json";
import l2 from "@/assets/lehenga2.jpg.asset.json";
import l3 from "@/assets/lehenga3.jpg.asset.json";
import l4 from "@/assets/lehenga4.jpg.asset.json";
import l5 from "@/assets/lehenga5.jpg.asset.json";
import l6 from "@/assets/lehenga6.jpg.asset.json";
import n1 from "@/assets/new1.jpg.asset.json";
import n2 from "@/assets/new2.jpg.asset.json";
import n3 from "@/assets/new3.jpg.asset.json";
import n4 from "@/assets/new4.jpg.asset.json";
import n5 from "@/assets/new5.jpg.asset.json";
import n6 from "@/assets/new6.jpg.asset.json";
import t1 from "@/assets/top1.jpg.asset.json";
import t2 from "@/assets/top2.jpg.asset.json";
import d1 from "@/assets/denim1.jpg.asset.json";
import dr1 from "@/assets/dress1.jpg.asset.json";
import dr2 from "@/assets/dress2.jpg.asset.json";
import dr3 from "@/assets/dress3.jpg.asset.json";
import o1 from "@/assets/office1.png.asset.json";
import o2 from "@/assets/office2.png.asset.json";
import { assetUrl } from "@/lib/asset-url";
import plum from "@/assets/royal-plum-embroidered-co-ord.png.asset.json";
import pink from "@/assets/blush-pink-embroidered-palazzo-set.jpeg.asset.json";
import cocoa from "@/assets/cocoa-embroidered-kurta-palazzo-set.jpeg.asset.json";

export const WHATSAPP_NUMBER = "919811669057";
export const INSTAGRAM = "sheratal_";
export const FACEBOOK = "sheratals";

export type Product = {
  id: string;
  name: string;
  category: "Western Dresses" | "Ethnic Wear" | "Office Wear";
  price: number;
  /** Optional discounted price — when set, `price` renders struck-through. */
  salePrice?: number;
  image: string;
  gallery?: string[];
  sizes: string[];
  description: string;
  details: string[];
  featured?: boolean;
  checkoutMode?: "whatsapp";
};

// Products are structured so a future Instagram Graph API integration
// can hydrate this list from @sheratal_ feed content.
const SIZES_FULL = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];

export const products: Product[] = [
  {
    id: "golden-drape-lehenga",
    name: "Golden Drape Lehenga Set",
    category: "Ethnic Wear",
    price: 7000,
    salePrice: 3500,
    image: assetUrl(l1),
    sizes: SIZES_FULL,
    description:
      "A molten-gold draped skirt with a sculpted shimmer blouse — made for sangeet nights and spotlight moments.",
    details: ["Shimmer tissue fabric", "Draped knot-front skirt", "Structured blouse included"],
  },
  {
    id: "noir-zardozi-lehenga",
    name: "Noir Zardozi Lehenga Set",
    category: "Ethnic Wear",
    price: 7000,
    salePrice: 3500,
    image: assetUrl(l2),
    sizes: SIZES_FULL,
    description:
      "Hand-embroidered black zardozi choli over a champagne gold draped skirt. Festive, regal, unforgettable.",
    details: ["Hand zardozi embroidery", "Champagne silk-blend skirt", "Tassel-finished choli"],
  },
  {
    id: "mustard-rust-lehenga",
    name: "Mustard & Rust Lehenga Set",
    category: "Ethnic Wear",
    price: 7000,
    salePrice: 3500,
    image: assetUrl(l3),
    sizes: SIZES_FULL,
    description:
      "A hand-woven mustard choli paired with a flowing rust skirt — heritage craft with a modern silhouette.",
    details: ["Textured weave choli", "Flowing rust skirt", "Day-to-evening festive wear"],
  },
  {
    id: "champagne-zardozi-lehenga",
    name: "Champagne Zardozi Lehenga Set",
    category: "Ethnic Wear",
    price: 7000,
    salePrice: 3500,
    image: assetUrl(l4),
    sizes: SIZES_FULL,
    description:
      "Black floral zardozi meets a liquid-champagne draped skirt. Evening glamour, distilled.",
    details: ["Floral zardozi choli", "Knot-draped skirt", "Statement earrings recommended"],
  },
  {
    id: "magenta-mustard-lehenga",
    name: "Magenta & Mustard Lehenga Set",
    category: "Ethnic Wear",
    price: 7000,
    salePrice: 3500,
    image: assetUrl(l5),
    sizes: SIZES_FULL,
    description:
      "A vivid magenta skirt with a sunshine mustard choli — the colour story every celebration deserves.",
    details: ["Vibrant silk-blend skirt", "Gold-trim choli", "Perfect for haldi & mehendi"],
  },
  {
    id: "marigold-festive-lehenga",
    name: "Marigold Festive Lehenga Set",
    category: "Ethnic Wear",
    price: 7000,
    salePrice: 3500,
    image: assetUrl(l6),
    sizes: SIZES_FULL,
    description:
      "A marigold skirt topped with a riot of festive embroidery — joy, tailored.",
    details: ["Multicolour embroidered choli", "Marigold silk skirt", "Lightweight festive wear"],
  },
];


products.push(
  {
    id: "cocoa-tailored-vest-set",
    name: "Cocoa Tailored Vest & Trouser Set",
    category: "Western Dresses",
    price: 12800,
    image: assetUrl(n1),
    sizes: SIZES_FULL,
    description:
      "A sharply tailored cocoa vest with gilded buttons, paired with high-waisted pleated trousers. Quiet power dressing.",
    details: ["Linen-blend suiting", "Gold-tone buttons", "Vest + trouser set"],
  },
  {
    id: "sage-wrap-shirt-set",
    name: "Sage Wrap Shirt & Trouser Set",
    category: "Western Dresses",
    price: 13400,
    image: assetUrl(n2),
    sizes: SIZES_FULL,
    description:
      "An asymmetric wrap shirt with a cinched waist over straight-leg trousers in soft sage. Effortless, elevated.",
    details: ["Soft tencel blend", "Cinched wrap waist", "Shirt + trouser set"],
  },
  {
    id: "ivory-crystal-bandeau",
    name: "Ivory Crystal Bandeau Top",
    category: "Western Dresses",
    price: 6400,
    image: assetUrl(n3),
    sizes: SIZES_FULL,
    description:
      "A structured ivory bandeau with a crystal-set neckline notch. Made for evenings that start late.",
    details: ["Structured stretch crepe", "Hand-set crystal detail", "Boned bodice"],
  },
  {
    id: "blush-halter-snake-top",
    name: "Blush Halter Top, Gilded Collar",
    category: "Western Dresses",
    price: 7200,
    image: assetUrl(n4),
    sizes: SIZES_FULL,
    description:
      "A blush halter with cut-out shoulders and a sculpted gold serpent collar. Sensual, precise.",
    details: ["Matte jersey", "Gold-tone hardware collar", "Cut-out shoulders"],
  },
  {
    id: "noir-floral-knit-top",
    name: "Noir Floral-Sleeve Knit Top",
    category: "Western Dresses",
    price: 5800,
    image: assetUrl(n5),
    sizes: SIZES_FULL,
    description:
      "A fine black knit with printed floral chiffon sleeves and a beaded V-neckline. Day into evening.",
    details: ["Fine-gauge knit body", "Printed chiffon sleeves", "Hand-beaded neckline"],
  },
  {
    id: "cream-polka-tie-blouse",
    name: "Cream Polka Tie-Neck Blouse",
    category: "Western Dresses",
    price: 4900,
    image: assetUrl(n6),
    sizes: SIZES_FULL,
    description:
      "A cream satin blouse in classic black polka, finished with a rosette tie-neck and blouson cuffs.",
    details: ["Satin crepe", "Detachable rosette tie", "Blouson sleeve, buttoned cuff"],
  },
  {
    id: "wine-polka-wrap-top",
    name: "Wine Polka Wrap Top",
    category: "Western Dresses",
    price: 2500,
    image: assetUrl(t1),
    sizes: SIZES_FULL,
    description:
      "A wine satin wrap top in ivory polka, cinched with twin rosettes at the waist. Pairs beautifully with denim or tailored trousers.",
    details: ["Satin finish", "Wrap front with rosette detail", "Buttoned cuffs"],
  },
  {
    id: "everyday-zip-top",
    name: "Everyday Zip-Neck Top",
    category: "Western Dresses",
    price: 2500,
    image: assetUrl(t2),
    sizes: SIZES_FULL,
    description:
      "A soft zip-neck long-sleeve top in five easy shades — black, blush, white, wine, and navy. Your everyday essential.",
    details: ["Soft stretch jersey", "Zip neckline", "Available in 5 colours"],
  },
  {
    id: "denim-co-ord-set",
    name: "Denim Co-Ord Set",
    category: "Western Dresses",
    price: 5000,
    image: assetUrl(d1),
    sizes: SIZES_FULL,
    description:
      "A pinstripe denim shirt and straight-leg trouser set, cinched at the waist with a leather-tab tie. Easy, elevated, endlessly wearable.",
    details: ["Vertical-stripe denim", "Leather-tab tie waist", "Shirt + trouser set"],
  },
  {
    id: "noir-floral-pleated-midi",
    name: "Noir Floral Pleated Midi Dress",
    category: "Western Dresses",
    price: 3500,
    image: assetUrl(dr1),
    sizes: SIZES_FULL,
    description:
      "A black accordion-pleated midi softened by a cream and tan floral motif. Moves beautifully, never tries too hard.",
    details: ["Fine accordion pleats", "Scoop neck, long sleeves", "A-line midi silhouette"],
  },
  {
    id: "ivory-ink-pleated-midi",
    name: "Ivory Ink-Splatter Pleated Midi Dress",
    category: "Western Dresses",
    price: 3500,
    image: assetUrl(dr2),
    sizes: SIZES_FULL,
    description:
      "An ivory-beige pleated midi with an artistic black ink-splatter wash across the bodice and hem. Understated, with a signature.",
    details: ["Accordion-pleated fabric", "Ink-splatter print", "Scoop neck, long sleeves"],
  },
  {
    id: "crimson-panel-pleated-midi",
    name: "Crimson Panel Pleated Midi Dress",
    category: "Western Dresses",
    price: 3500,
    image: assetUrl(dr3),
    sizes: SIZES_FULL,
    description:
      "A bold crimson center panel flanked by black pleats scattered with golden-yellow florals. Colour, cut, and quiet drama.",
    details: ["Asymmetrical centre panel", "Black accordion pleats", "Golden-yellow floral graphics"],
  },
  {
    id: "mocha-tailored-vest-set",
    name: "Mocha Tailored Vest Set",
    category: "Office Wear",
    price: 7000,
    image: assetUrl(o1),
    sizes: SIZES_FULL,
    description:
      "A mocha-brown sleeveless waistcoat with gold dome buttons and a pointed hem, cut to sit over crisp pleated trousers. Boardroom to dinner without a change.",
    details: ["Structured matte suiting fabric", "Three gold dome-button front", "Pleated straight-leg trousers"],
  },
  {
    id: "stone-wrap-blouse-set",
    name: "Stone Wrap Blouse Set",
    category: "Office Wear",
    price: 7000,
    image: assetUrl(o2),
    sizes: SIZES_FULL,
    description:
      "A soft stone-grey wrap blouse with a turn-down collar and shirred waist, paired with fluid straight-leg trousers. Relaxed tailoring that still reads sharp.",
    details: ["Drapey fluid crepe", "Crossover wrap front with button detail", "Long sleeves with button cuffs"],
  },
  {
    id: "royal-plum-embroidered-co-ord-set",
    name: "Royal Plum Embroidered Co-ord Set",
    category: "Ethnic Wear",
    price: 2999,
    image: assetUrl(plum),
    sizes: SIZES_FULL,
    checkoutMode: "whatsapp",
    description: "A rich plum ethnic co-ord set with delicate floral embroidery, a flowing asymmetric top and matching wide-leg trousers. An elegant choice for festive gatherings.",
    details: ["Floral embroidered sleeves and trouser hems", "Flowing asymmetric hemline", "Matching plum top and trousers"],
  },
  {
    id: "blush-pink-embroidered-palazzo-set",
    name: "Blush Pink Embroidered Palazzo Set",
    category: "Ethnic Wear",
    price: 2749,
    image: assetUrl(pink),
    sizes: SIZES_FULL,
    checkoutMode: "whatsapp",
    description: "A blush-pink ethnic set with an embellished V-neck, floral detailing and statement cutwork sleeves. Matching palazzo trousers complete its graceful occasion-ready silhouette.",
    details: ["Embellished V-neck and floral motifs", "Floral cutwork sleeve details", "Matching wide-leg palazzo trousers"],
  },
  {
    id: "cocoa-embroidered-kurta-palazzo-set",
    name: "Cocoa Embroidered Kurta Palazzo Set",
    category: "Ethnic Wear",
    price: 2599,
    image: assetUrl(cocoa),
    sizes: SIZES_FULL,
    checkoutMode: "whatsapp",
    description: "A deep cocoa-brown kurta set with delicate contrasting embroidery along the neckline, cuffs and hem. Coordinating palazzo trousers and a patterned dupatta bring timeless ethnic elegance.",
    details: ["Contrasting embroidered motifs and borders", "Coordinating palazzo trousers", "Matching patterned dupatta"],
  },
);

export const categories = Array.from(new Set(products.map((p) => p.category)));

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
