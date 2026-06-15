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
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const byCategory = (slug: string) => products.filter((p) => p.category === slug);

export const brands = [
  "Lattafa", "Armaf", "Rasasi", "Dior", "Chanel", "Creed", "Tom Ford",
  "YSL", "Versace", "Calvin Klein", "Carolina Herrera", "Nishane", "Mancera", "Ahmed Al Maghribi",
];

export const categories = [
  { slug: "men", name: "Men Perfumes" },
  { slug: "women", name: "Women Perfumes" },
  { slug: "unisex", name: "Unisex" },
  { slug: "ouds", name: "Ouds" },
  { slug: "bukhoors", name: "Bukhoors" },
  { slug: "aqua", name: "Aqua Perfumes" },
  { slug: "gift-sets", name: "Gift Sets" },
  { slug: "perfume-oils", name: "Perfume Oils" },
  { slug: "incense-burners", name: "Incense Burners" },
  { slug: "air-fresheners", name: "Air Fresheners" },
  { slug: "creams", name: "Creams" },
  { slug: "niche", name: "Niche Fragrances" },
  { slug: "new", name: "New Arrivals" },
  { slug: "offers", name: "Offers" },
];

export const _imgs = imgs;
