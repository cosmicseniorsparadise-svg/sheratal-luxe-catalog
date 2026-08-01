import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import n1 from "@/assets/new1.jpg.asset.json";
import n2 from "@/assets/new2.jpg.asset.json";
import n3 from "@/assets/new3.jpg.asset.json";
import n4 from "@/assets/new4.jpg.asset.json";
import n5 from "@/assets/new5.jpg.asset.json";
import n6 from "@/assets/new6.jpg.asset.json";

export const WHATSAPP_NUMBER = "919811669057";
export const INSTAGRAM = "sheratal_";
export const FACEBOOK = "sheratals";

export type Product = {
  id: string;
  name: string;
  category: "Gowns" | "Sarees" | "Lehengas" | "Kurta Sets" | "Co-ords";
  price: number;
  /** Optional discounted price — when set, `price` renders struck-through. */
  salePrice?: number;
  image: string;
  gallery?: string[];
  sizes: string[];
  description: string;
  details: string[];
  featured?: boolean;
};

// Products are structured so a future Instagram Graph API integration
// can hydrate this list from @sheratal_ feed content.
const SIZES_FULL = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];

export const products: Product[] = [
  {
    id: "ivory-zardozi-anarkali",
    name: "Ivory Zardozi Anarkali",
    category: "Gowns",
    price: 48500,
    image: p1,
    sizes: SIZES_FULL,
    description:
      "A floor-sweeping ivory silk anarkali hand-embellished with delicate zardozi motifs. Softly structured, endlessly flattering.",
    details: [
      "Pure silk with cotton lining",
      "Hand zardozi embroidery",
      "Concealed side zip",
      "Includes matching dupatta",
    ],
    featured: true,
  },
  {
    id: "noir-gold-velvet-saree",
    name: "Noir Velvet Saree, Gold Border",
    category: "Sarees",
    price: 39800,
    image: p2,
    sizes: SIZES_FULL,
    description:
      "Deep midnight velvet edged in a hand-woven antique gold border. Drape it low, wear it loud.",
    details: [
      "Silk velvet, 5.5m",
      "Zari border, hand-finished",
      "Unstitched blouse piece included",
    ],
    featured: true,
  },
  {
    id: "blush-sharara",
    name: "Blush Sequin Sharara",
    category: "Co-ords",
    price: 34200,
    image: p3,
    sizes: SIZES_FULL,
    description:
      "Petal-soft chiffon in blush pink, dusted with tonal gold sequins. Weightless movement, quiet drama.",
    details: [
      "Chiffon over silk lining",
      "Tonal sequin & bead work",
      "Includes dupatta and choli",
    ],
  },
  {
    id: "emerald-silk-kurta",
    name: "Emerald Silk Kurta Set",
    category: "Kurta Sets",
    price: 27600,
    image: p4,
    sizes: SIZES_FULL,
    description:
      "Rich emerald raw silk with delicate gold thread work — an heirloom-grade everyday indulgence.",
    details: [
      "Raw silk, breathable lining",
      "Gold aari thread work",
      "Straight pant included",
    ],
  },
  {
    id: "ivory-bridal-lehenga",
    name: "Ivory Bridal Lehenga",
    category: "Lehengas",
    price: 128000,
    image: p5,
    sizes: SIZES_FULL,
    description:
      "The house signature — an ivory silk lehenga layered in heavy gold zari. Made for the day you remember.",
    details: [
      "Full canvas construction",
      "Hand zari & pearl work",
      "Custom fitting appointment included",
    ],
    featured: true,
  },
  {
    id: "black-column-gown",
    name: "Black Column Gown",
    category: "Gowns",
    price: 42500,
    image: p6,
    sizes: SIZES_FULL,
    description:
      "A sculpted black georgette gown with a gilded neckline and a whisper of a train. Modern, monumental.",
    details: [
      "Georgette over silk crepe",
      "Hand bead work at neckline",
      "Concealed back zip",
    ],
  },
  {
    id: "champagne-sequin-gown",
    name: "Champagne Sequin Gown",
    category: "Gowns",
    price: 56000,
    image: p7,
    sizes: SIZES_FULL,
    description:
      "Liquid champagne sequins over a bias-cut slip. A room-quieting silhouette.",
    details: [
      "Fine sequin on mesh",
      "Bias-cut silk slip lining",
      "Adjustable straps",
    ],
    featured: true,
  },
  {
    id: "ivory-embroidered-suit",
    name: "Ivory Embroidered Tuxedo",
    category: "Co-ords",
    price: 62400,
    image: p8,
    sizes: SIZES_FULL,
    description:
      "A tailored ivory tuxedo set embroidered in antique gold — the modern bride's rebellion.",
    details: [
      "Wool-blend crepe",
      "Hand embroidered lapel & cuffs",
      "Includes tailored trouser",
    ],
  },
];


products.push(
  {
    id: "cocoa-tailored-vest-set",
    name: "Cocoa Tailored Vest & Trouser Set",
    category: "Co-ords",
    price: 12800,
    image: n1.url,
    sizes: SIZES_FULL,
    description:
      "A sharply tailored cocoa vest with gilded buttons, paired with high-waisted pleated trousers. Quiet power dressing.",
    details: ["Linen-blend suiting", "Gold-tone buttons", "Vest + trouser set"],
  },
  {
    id: "sage-wrap-shirt-set",
    name: "Sage Wrap Shirt & Trouser Set",
    category: "Co-ords",
    price: 13400,
    image: n2.url,
    sizes: SIZES_FULL,
    description:
      "An asymmetric wrap shirt with a cinched waist over straight-leg trousers in soft sage. Effortless, elevated.",
    details: ["Soft tencel blend", "Cinched wrap waist", "Shirt + trouser set"],
  },
  {
    id: "ivory-crystal-bandeau",
    name: "Ivory Crystal Bandeau Top",
    category: "Co-ords",
    price: 6400,
    image: n3.url,
    sizes: SIZES_FULL,
    description:
      "A structured ivory bandeau with a crystal-set neckline notch. Made for evenings that start late.",
    details: ["Structured stretch crepe", "Hand-set crystal detail", "Boned bodice"],
  },
  {
    id: "blush-halter-snake-top",
    name: "Blush Halter Top, Gilded Collar",
    category: "Co-ords",
    price: 7200,
    image: n4.url,
    sizes: SIZES_FULL,
    description:
      "A blush halter with cut-out shoulders and a sculpted gold serpent collar. Sensual, precise.",
    details: ["Matte jersey", "Gold-tone hardware collar", "Cut-out shoulders"],
  },
  {
    id: "noir-floral-knit-top",
    name: "Noir Floral-Sleeve Knit Top",
    category: "Kurta Sets",
    price: 5800,
    image: n5.url,
    sizes: SIZES_FULL,
    description:
      "A fine black knit with printed floral chiffon sleeves and a beaded V-neckline. Day into evening.",
    details: ["Fine-gauge knit body", "Printed chiffon sleeves", "Hand-beaded neckline"],
  },
  {
    id: "cream-polka-tie-blouse",
    name: "Cream Polka Tie-Neck Blouse",
    category: "Kurta Sets",
    price: 4900,
    image: n6.url,
    sizes: SIZES_FULL,
    description:
      "A cream satin blouse in classic black polka, finished with a rosette tie-neck and blouson cuffs.",
    details: ["Satin crepe", "Detachable rosette tie", "Blouson sleeve, buttoned cuff"],
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
