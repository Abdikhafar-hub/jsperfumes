import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  notes: string;
  category: string;
  gender?: "Men" | "Women" | "Unisex";
  badge?: string;
  rating?: number;
};

const imgs = [p1, p2, p3, p4, p5, p6, p7, p8];

export const products: Product[] = [
  { id: "lattafa-asad", name: "Lattafa Asad – Eau de Parfum, 100ml", brand: "Lattafa", price: 4500, image: p4, notes: "Spicy · Woody · Oud", category: "ouds", gender: "Men", rating: 4.8 },
  { id: "armaf-cdn-intense", name: "Armaf Club De Nuit Intense Man – EDT, 105ml", brand: "Armaf", price: 6500, oldPrice: 7500, image: p2, notes: "Aromatic · Smoky · Pineapple", category: "men", gender: "Men", badge: "13% OFF", rating: 4.9 },
  { id: "armaf-cdn-woman", name: "Armaf Club De Nuit Woman – EDP, 105ml", brand: "Armaf", price: 6500, image: p3, notes: "Floral · Fruity · Woody", category: "women", gender: "Women", rating: 4.7 },
  { id: "rasasi-hawas", name: "Rasasi Hawas – EDP, 100ml", brand: "Rasasi", price: 7800, image: p1, notes: "Aquatic · Spicy · Amber", category: "men", gender: "Men", rating: 4.6 },
  { id: "creed-aventus", name: "Creed Aventus – Eau de Parfum, 100ml", brand: "Creed", price: 74000, oldPrice: 78000, image: p2, notes: "Citrus · Woody · Smoky", category: "men", gender: "Men", badge: "5% OFF", rating: 5.0 },
  { id: "dior-sauvage", name: "Dior Sauvage – EDP, 100ml", brand: "Dior", price: 19500, image: p2, notes: "Fresh · Spicy · Ambroxan", category: "men", gender: "Men", rating: 4.9 },
  { id: "tom-ford-oud-wood", name: "Tom Ford Oud Wood – EDP, 100ml", brand: "Tom Ford", price: 38500, image: p4, notes: "Oud · Rosewood · Cardamom", category: "ouds", gender: "Unisex", rating: 4.9 },
  { id: "chanel-bleu", name: "Chanel Bleu de Chanel – EDP, 100ml", brand: "Chanel", price: 22000, image: p2, notes: "Citrus · Woody · Aromatic", category: "men", gender: "Men", rating: 4.8 },
  { id: "ysl-libre", name: "YSL Libre – Eau de Parfum, 90ml", brand: "YSL", price: 21500, image: p3, notes: "Lavender · Orange Blossom · Musk", category: "women", gender: "Women", rating: 4.7 },
  { id: "good-girl-blush", name: "Carolina Herrera Good Girl Blush – EDP, 80ml", brand: "Carolina Herrera", price: 23000, image: p3, notes: "Floral · Almond · Vanilla", category: "women", gender: "Women", rating: 4.7 },
  { id: "nishane-100-silent", name: "Nishane Hundred Silent Ways – Extrait, 50ml", brand: "Nishane", price: 26500, oldPrice: 28500, image: p1, notes: "Floral · Vanilla · Woody", category: "niche", gender: "Unisex", badge: "7% OFF", rating: 4.9 },
  { id: "moschino-toy-2", name: "Moschino Toy 2 – EDP, 100ml", brand: "Moschino", price: 8500, oldPrice: 9500, image: p3, notes: "Floral · Fruity · Musk", category: "women", gender: "Women", badge: "11% OFF", rating: 4.6 },
  { id: "ck-euphoria", name: "Calvin Klein Euphoria – EDT, 100ml", brand: "Calvin Klein", price: 9500, image: p2, notes: "Floral · Amber · Woody", category: "men", gender: "Men", rating: 4.5 },
  { id: "oud-abeer", name: "Oud Abeer – Concentrated Oil, 12ml", brand: "JS Atelier", price: 3500, image: p8, notes: "Pure Oud · Amber · Rose", category: "perfume-oils", gender: "Unisex", rating: 4.8 },
  { id: "bukhoor-afnan", name: "Bukhoor Afnan – Premium Incense, 50g", brand: "Afnan", price: 1500, image: p5, notes: "Smoky · Rose · Sandalwood", category: "bukhoors", gender: "Unisex", rating: 4.7 },
  { id: "oud-al-ameer", name: "Oud Al Ameer – Eau de Parfum, 100ml", brand: "JS Atelier", price: 5800, image: p4, notes: "Oud · Saffron · Leather", category: "ouds", gender: "Unisex", rating: 4.8 },
  { id: "bukhoor-jamila", name: "Bukhoor Jamila – Premium Incense, 50g", brand: "Jamila", price: 1200, image: p5, notes: "Floral · Amber · Smoky", category: "bukhoors", gender: "Unisex", rating: 4.6 },
  { id: "gift-voucher", name: "JS Perfumes Gift Voucher", brand: "JS Perfumes", price: 5000, image: p6, notes: "From KSh 5,000", category: "gift-sets", gender: "Unisex" },
  { id: "luxury-gift-set", name: "Luxury Signature Gift Set – 2 x 100ml", brand: "JS Perfumes", price: 15500, image: p6, notes: "Curated · Designer · Gift", category: "gift-sets", gender: "Unisex", rating: 4.9 },
  { id: "aqua-collection", name: "Aqua Perfume Collection – 50ml", brand: "JS Atelier", price: 3200, image: p7, notes: "Aquatic · Fresh · Citrus", category: "aqua", gender: "Unisex", rating: 4.5 },
  
  // Newly Added Products for Arabic/Lifestyle/Gifting
  { id: "lattafa-yara", name: "Lattafa Yara – Eau de Parfum, 100ml", brand: "Lattafa", price: 3800, image: p3, notes: "Tangerine · Heliotrope · Orchid", category: "women", gender: "Women", rating: 4.8 },
  { id: "shaghaf-oud", name: "Swiss Arabian Shaghaf Oud – EDP, 75ml", brand: "Swiss Arabian", price: 6800, image: p4, notes: "Oud · Praline · Vanilla", category: "ouds", gender: "Unisex", badge: "NEW", rating: 4.9 },
  { id: "badee-al-oud-amethyst", name: "Lattafa Badee Al Oud Amethyst – EDP, 100ml", brand: "Lattafa", price: 5500, image: p4, notes: "Pink Pepper · Rose · Amber", category: "ouds", gender: "Unisex", rating: 4.7 },
  { id: "traditional-mabkhara", name: "Traditional Arabic Mabkhara – Luxury Incense Burner", brand: "JS Atelier", price: 4200, image: p5, notes: "Wood · Gold Accents · Heat Resistant", category: "incense-burners", gender: "Unisex", rating: 4.9 },
  { id: "custom-gold-burner", name: "Custom Wood & Gold Bukhoor Burner", brand: "JS Atelier", price: 3800, image: p5, notes: "Ceramic · Metallic Gold · Premium", category: "incense-burners", gender: "Unisex", rating: 4.8 },
  { id: "bukhoor-al-dirham", name: "Afnan Bukhoor Al Dirham – Premium Incense, 40g", brand: "Afnan", price: 1600, image: p5, notes: "Oudh · Rose · Jasmine", category: "bukhoors", gender: "Unisex", rating: 4.7 },
  { id: "bukhoor-teef-al-hub", name: "Lattafa Teef Al Hub Bukhoor – 80g", brand: "Lattafa", price: 2400, image: p5, notes: "Vanilla · Chocolate · Agarwood", category: "bukhoors", gender: "Unisex", rating: 4.8 },
  { id: "khadlaj-air-freshener", name: "Khadlaj Oud Wood Air Freshener – 320ml", brand: "Khadlaj", price: 1200, image: p7, notes: "Oud · Amber · Lavender", category: "air-fresheners", gender: "Unisex", rating: 4.6 },
  { id: "yara-room-spray", name: "Lattafa Yara Room Spray – 300ml", brand: "Lattafa", price: 1500, image: p7, notes: "Sweet Floral · Creamy · Vanilla", category: "air-fresheners", gender: "Unisex", rating: 4.7 },
  { id: "oud-rose-linen-spray", name: "Oud & Rose Linen Spray – 250ml", brand: "JS Atelier", price: 1800, image: p7, notes: "Pure Oud · Turkish Rose · Fresh Cotton", category: "air-fresheners", gender: "Unisex", rating: 4.8 },
  { id: "yara-body-cream", name: "Lattafa Yara Perfumed Body Cream – 45g", brand: "Lattafa", price: 1800, image: p3, notes: "Creamy · Vanilla · Musk", category: "creams", gender: "Women", rating: 4.9 },
  { id: "musk-silk-cream", name: "Musk Silk Perfumed Cream – 30g", brand: "JS Atelier", price: 1200, image: p3, notes: "White Musk · Rose · Creamy", category: "creams", gender: "Unisex", rating: 4.8 },
  { id: "musk-abiyad-oil", name: "Afnan Musk Abiyad – Concentrated Oil, 20ml", brand: "Afnan", price: 2800, image: p8, notes: "Sandalwood · White Musk · Rose", category: "perfume-oils", gender: "Unisex", rating: 4.7 },
  { id: "golden-sand-attar", name: "Surrati Golden Sand Attar – 6ml", brand: "Surrati", price: 950, image: p8, notes: "Caramel · Amber · Oud", category: "perfume-oils", gender: "Unisex", rating: 4.6 },
  { id: "asad-car-fragrance", name: "Lattafa Asad Car Fragrance – Vent Clip", brand: "Lattafa", price: 850, image: p1, notes: "Spicy · Woody · Amber", category: "car-fragrances", gender: "Unisex", rating: 4.5 },
  { id: "oud-car-diffuser", name: "Oud Wood Hanging Car Diffuser – 10ml", brand: "JS Atelier", price: 950, image: p1, notes: "Oud · Cardamom · Sandalwood", category: "car-fragrances", gender: "Unisex", rating: 4.7 },
  { id: "eid-mubarak-gift-box", name: "Eid Mubarak Premium Oud Gift Box", brand: "JS Perfumes", price: 18500, image: p6, notes: "Premium Oud · Burner · Bukhoor", category: "gift-sets", gender: "Unisex", rating: 5.0 },
  { id: "royal-wedding-set", name: "Royal Wedding Scent Consultation & Gift Set", brand: "JS Perfumes", price: 24500, image: p6, notes: "Custom Scent · Luxury Gift Wrap", category: "gift-sets", gender: "Unisex", rating: 4.9 }
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getProductsByCategory = (slug: string) => {
  const slugLower = slug.toLowerCase();
  
  if (slugLower === "offers") {
    return products.filter((p) => p.oldPrice);
  }
  if (slugLower === "new" || slugLower === "new-arrivals") {
    return products.filter((p) => p.category === "new-arrivals" || p.badge?.toLowerCase().includes("new") || ["lattafa-asad", "armaf-cdn-intense", "rasasi-hawas", "tom-ford-oud-wood", "shaghaf-oud"].includes(p.id));
  }
  if (slugLower === "best-sellers") {
    return products.filter((p) => (p.rating ?? 0) >= 4.8);
  }
  if (slugLower === "arabic-collection") {
    return products.filter((p) => 
      ["ouds", "bukhoors", "perfume-oils", "incense-burners", "burners", "attars", "home-fragrance"].includes(p.category) ||
      p.notes.toLowerCase().includes("oud") ||
      ["Lattafa", "Armaf", "Rasasi", "Afnan", "Ahmed Al Maghribi", "Swiss Arabian"].includes(p.brand)
    );
  }
  if (slugLower === "perfumes") {
    return products.filter((p) => !["incense-burners", "burners", "gift-sets", "gift-voucher"].includes(p.category));
  }
  if (slugLower === "men" || slugLower === "men-perfumes") {
    return products.filter((p) => p.gender === "Men");
  }
  if (slugLower === "women" || slugLower === "women-perfumes") {
    return products.filter((p) => p.gender === "Women");
  }
  if (slugLower === "unisex") {
    return products.filter((p) => p.gender === "Unisex");
  }
  if (slugLower === "luxury-gifting" || slugLower === "gift-sets") {
    return products.filter((p) => p.category === "gift-sets" || p.id === "gift-voucher" || p.id === "luxury-gift-set" || p.id === "eid-mubarak-gift-box" || p.id === "royal-wedding-set");
  }
  if (
    slugLower === "home-fragrance" ||
    slugLower === "fresheners" ||
    slugLower === "air-fresheners" ||
    slugLower === "room-sprays" ||
    slugLower === "linen-sprays" ||
    slugLower === "car-fragrances" ||
    slugLower === "burners" ||
    slugLower === "incense-burners"
  ) {
    return products.filter((p) => 
      ["air-fresheners", "home-fragrance", "fresheners", "room-sprays", "linen-sprays", "car-fragrances", "incense-burners"].includes(p.category) || 
      p.notes.toLowerCase().includes("smoky") || 
      p.notes.toLowerCase().includes("sandalwood") || 
      p.brand === "Afnan"
    );
  }
  
  return products.filter((p) => p.category === slug || p.category === slugLower);
};

export const byCategory = getProductsByCategory;

export const brands = [
  "Dior", "Chanel", "YSL", "Versace", "Calvin Klein", "Carolina Herrera", "Tom Ford",
  "Lattafa", "Armaf", "Rasasi", "Ahmed Al Maghribi", "Swiss Arabian", "Afnan",
  "Creed", "Mancera", "Nishane", "Xerjoff", "Amouage", "JS Atelier", "JS Perfumes"
];

export const categories = [
  { slug: "perfumes", name: "Perfumes" },
  { slug: "men", name: "Men Perfumes" },
  { slug: "women", name: "Women Perfumes" },
  { slug: "unisex", name: "Unisex" },
  { slug: "ouds", name: "Ouds" },
  { slug: "bukhoors", name: "Bukhoors" },
  { slug: "incense-burners", name: "Burners" },
  { slug: "air-fresheners", name: "Fresheners" },
  { slug: "creams", name: "Creams" },
  { slug: "gift-sets", name: "Gift Sets" },
  { slug: "perfume-oils", name: "Perfume Oils / Attars" },
  { slug: "car-fragrances", name: "Car Fragrances" },
  { slug: "home-fragrance", name: "Home Fragrance" },
  { slug: "air-fresheners", name: "Air Fresheners" },
  { slug: "room-sprays", name: "Room Sprays" },
  { slug: "linen-sprays", name: "Linen Sprays" },
  { slug: "new-arrivals", name: "New Arrivals" },
  { slug: "best-sellers", name: "Best Sellers" },
  { slug: "offers", name: "Offers" },
  { slug: "arabic-collection", name: "Arabic Collection" },
  { slug: "luxury-gifting", name: "Luxury Gifting" }
];

export const _imgs = imgs;
