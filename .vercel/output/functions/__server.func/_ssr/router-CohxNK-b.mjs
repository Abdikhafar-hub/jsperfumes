import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-0mv95-hQ.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "JS Perfumes | Essence of Luxury" },
      { name: "description", content: "Authentic designer fragrances, rare niche perfumes, and timeless Arabic luxury." },
      { name: "author", content: "JS Perfumes" },
      { property: "og:title", content: "JS Perfumes | Essence of Luxury" },
      { property: "og:description", content: "Authentic designer fragrances, rare niche perfumes, and timeless Arabic luxury." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$d = () => import("./wishlist-DsTzhTpO.mjs");
const Route$d = createFileRoute("/wishlist")({
  head: () => ({
    meta: [{
      title: "Wishlist | JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./shop-BBUoOcMx.mjs");
const Route$c = createFileRoute("/shop")({
  validateSearch: (search) => {
    return {
      brand: search.brand || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Shop All Perfumes | JS Perfumes Kenya"
    }, {
      name: "description",
      content: "Browse the full collection of designer, niche and Arabic fragrances at JS Perfumes Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./matcher-CxzI_11p.mjs");
const Route$b = createFileRoute("/matcher")({
  head: () => ({
    meta: [{
      title: "Fragrance Finder | JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./faq-BCj7vE8K.mjs");
const Route$a = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ | JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./contact-DXmiOUfv.mjs");
const Route$9 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./checkout-CJCzinFD.mjs");
const Route$8 = createFileRoute("/checkout")({
  head: () => ({
    meta: [{
      title: "Checkout | JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./cart-C8zv3pzu.mjs");
const Route$7 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Cart | JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./brands-CcfD7Z_I.mjs");
const Route$6 = createFileRoute("/brands")({
  head: () => ({
    meta: [{
      title: "Brands - JS Perfumes Kenya | Official Fragrance Retailer"
    }, {
      name: "description",
      content: "Shop authentic designer, Arabic, and niche perfume brands in Kenya. Genuine Dior, Chanel, Creed, Lattafa, Rasasi & more at Nairobi and Mombasa boutiques."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./blog-Cy34Bo9y.mjs");
const Route$5 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Fragrance Journal | JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./account-5B-Zd4K2.mjs");
const Route$4 = createFileRoute("/account")({
  head: () => ({
    meta: [{
      title: "My Account | JS Perfumes Kenya"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-DzM2ISlh.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Our Story - JS Perfumes Kenya | Essence of Luxury"
    }, {
      name: "description",
      content: "Learn about JS Perfumes Kenya, our boutiques in Nairobi and Mombasa, and our commitment to authentic luxury fragrances."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DOU5U8EX.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "JS Perfumes Kenya | Authentic Perfumes, Ouds & Bukhoors"
    }, {
      name: "description",
      content: "Shop authentic designer perfumes, Arabic fragrances, ouds, bukhoors and gift sets from JS Perfumes Kenya. Visit our Nairobi and Mombasa branches or order online."
    }, {
      property: "og:title",
      content: "JS Perfumes Kenya | Essence of Luxury"
    }, {
      property: "og:description",
      content: "Authentic designer, niche and Arabic fragrances delivered across Kenya."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const products = [
  { id: "lattafa-asad", name: "Lattafa Asad – Eau de Parfum, 100ml", brand: "Lattafa", price: 4500, image: "/products/lattafa-asad.jpg", notes: "Spicy · Woody · Oud", category: "ouds", gender: "Men", rating: 4.8 },
  { id: "armaf-cdn-intense", name: "Armaf Club De Nuit Intense Man – EDT, 105ml", brand: "Armaf", price: 6500, oldPrice: 7500, image: "/products/armaf-cdn-intense.jpg", notes: "Aromatic · Smoky · Pineapple", category: "men", gender: "Men", badge: "13% OFF", rating: 4.9 },
  { id: "armaf-cdn-woman", name: "Armaf Club De Nuit Woman – EDP, 105ml", brand: "Armaf", price: 6500, image: "/products/armaf-cdn-woman.jpg", notes: "Floral · Fruity · Woody", category: "women", gender: "Women", rating: 4.7 },
  { id: "rasasi-hawas", name: "Rasasi Hawas – EDP, 100ml", brand: "Rasasi", price: 7800, image: "/products/rasasi-hawas.jpg", notes: "Aquatic · Spicy · Amber", category: "men", gender: "Men", rating: 4.6 },
  { id: "creed-aventus", name: "Creed Aventus – Eau de Parfum, 100ml", brand: "Creed", price: 74e3, oldPrice: 78e3, image: "/products/creed-aventus.jpg", notes: "Citrus · Woody · Smoky", category: "men", gender: "Men", badge: "5% OFF", rating: 5 },
  { id: "dior-sauvage", name: "Dior Sauvage – EDP, 100ml", brand: "Dior", price: 19500, image: "/products/dior-sauvage.jpg", notes: "Fresh · Spicy · Ambroxan", category: "men", gender: "Men", rating: 4.9 },
  { id: "tom-ford-oud-wood", name: "Tom Ford Oud Wood – EDP, 100ml", brand: "Tom Ford", price: 38500, image: "/products/tom-ford-oud-wood.jpg", notes: "Oud · Rosewood · Cardamom", category: "ouds", gender: "Unisex", rating: 4.9 },
  { id: "chanel-bleu", name: "Chanel Bleu de Chanel – EDP, 100ml", brand: "Chanel", price: 22e3, image: "/products/chanel-bleu.jpg", notes: "Citrus · Woody · Aromatic", category: "men", gender: "Men", rating: 4.8 },
  { id: "ysl-libre", name: "YSL Libre – Eau de Parfum, 90ml", brand: "YSL", price: 21500, image: "/products/ysl-libre.jpg", notes: "Lavender · Orange Blossom · Musk", category: "women", gender: "Women", rating: 4.7 },
  { id: "good-girl-blush", name: "Carolina Herrera Good Girl Blush – EDP, 80ml", brand: "Carolina Herrera", price: 23e3, image: "/products/good-girl-blush.jpg", notes: "Floral · Almond · Vanilla", category: "women", gender: "Women", rating: 4.7 },
  { id: "nishane-100-silent", name: "Nishane Hundred Silent Ways – Extrait, 50ml", brand: "Nishane", price: 26500, oldPrice: 28500, image: "/products/nishane-100-silent.jpg", notes: "Floral · Vanilla · Woody", category: "niche", gender: "Unisex", badge: "7% OFF", rating: 4.9 },
  { id: "moschino-toy-2", name: "Moschino Toy 2 – EDP, 100ml", brand: "Moschino", price: 8500, oldPrice: 9500, image: "/products/moschino-toy-2.jpg", notes: "Floral · Fruity · Musk", category: "women", gender: "Women", badge: "11% OFF", rating: 4.6 },
  { id: "ck-euphoria", name: "Calvin Klein Euphoria – EDT, 100ml", brand: "Calvin Klein", price: 9500, image: "/products/ck-euphoria.jpg", notes: "Floral · Amber · Woody", category: "men", gender: "Men", rating: 4.5 },
  { id: "oud-abeer", name: "Oud Abeer – Concentrated Oil, 12ml", brand: "JS Atelier", price: 3500, image: "/products/oud-abeer.jpg", notes: "Pure Oud · Amber · Rose", category: "perfume-oils", gender: "Unisex", rating: 4.8 },
  { id: "bukhoor-afnan", name: "Bukhoor Afnan – Premium Incense, 50g", brand: "Afnan", price: 1500, image: "/products/bukhoor-afnan.jpg", notes: "Smoky · Rose · Sandalwood", category: "bukhoors", gender: "Unisex", rating: 4.7 },
  { id: "oud-al-ameer", name: "Oud Al Ameer – Eau de Parfum, 100ml", brand: "JS Atelier", price: 5800, image: "/products/oud-al-ameer.jpg", notes: "Oud · Saffron · Leather", category: "ouds", gender: "Unisex", rating: 4.8 },
  { id: "bukhoor-jamila", name: "Bukhoor Jamila – Premium Incense, 50g", brand: "Jamila", price: 1200, image: "/products/bukhoor-jamila.jpg", notes: "Floral · Amber · Smoky", category: "bukhoors", gender: "Unisex", rating: 4.6 },
  { id: "gift-voucher", name: "JS Perfumes Gift Voucher", brand: "JS Perfumes", price: 5e3, image: "/products/gift-voucher.jpg", notes: "From KSh 5,000", category: "gift-sets", gender: "Unisex" },
  { id: "luxury-gift-set", name: "Luxury Signature Gift Set – 2 x 100ml", brand: "JS Perfumes", price: 15500, image: "/products/luxury-gift-set.jpg", notes: "Curated · Designer · Gift", category: "gift-sets", gender: "Unisex", rating: 4.9 },
  { id: "aqua-collection", name: "Aqua Perfume Collection – 50ml", brand: "JS Atelier", price: 3200, image: "/products/aqua-collection.jpg", notes: "Aquatic · Fresh · Citrus", category: "aqua", gender: "Unisex", rating: 4.5 },
  // Newly Added Products for Arabic/Lifestyle/Gifting
  { id: "lattafa-yara", name: "Lattafa Yara – Eau de Parfum, 100ml", brand: "Lattafa", price: 3800, image: "/products/lattafa-yara.jpg", notes: "Tangerine · Heliotrope · Orchid", category: "women", gender: "Women", rating: 4.8 },
  { id: "shaghaf-oud", name: "Swiss Arabian Shaghaf Oud – EDP, 75ml", brand: "Swiss Arabian", price: 6800, image: "/products/shaghaf-oud.jpg", notes: "Oud · Praline · Vanilla", category: "ouds", gender: "Unisex", badge: "NEW", rating: 4.9 },
  { id: "badee-al-oud-amethyst", name: "Lattafa Badee Al Oud Amethyst – EDP, 100ml", brand: "Lattafa", price: 5500, image: "/products/badee-al-oud-amethyst.jpg", notes: "Pink Pepper · Rose · Amber", category: "ouds", gender: "Unisex", rating: 4.7 },
  { id: "traditional-mabkhara", name: "Traditional Arabic Mabkhara – Luxury Incense Burner", brand: "JS Atelier", price: 4200, image: "/products/traditional-mabkhara.jpg", notes: "Wood · Gold Accents · Heat Resistant", category: "incense-burners", gender: "Unisex", rating: 4.9 },
  { id: "custom-gold-burner", name: "Custom Wood & Gold Bukhoor Burner", brand: "JS Atelier", price: 3800, image: "/products/custom-gold-burner.jpg", notes: "Ceramic · Metallic Gold · Premium", category: "incense-burners", gender: "Unisex", rating: 4.8 },
  { id: "bukhoor-al-dirham", name: "Afnan Bukhoor Al Dirham – Premium Incense, 40g", brand: "Afnan", price: 1600, image: "/products/bukhoor-al-dirham.jpg", notes: "Oudh · Rose · Jasmine", category: "bukhoors", gender: "Unisex", rating: 4.7 },
  { id: "bukhoor-teef-al-hub", name: "Lattafa Teef Al Hub Bukhoor – 80g", brand: "Lattafa", price: 2400, image: "/products/bukhoor-teef-al-hub.jpg", notes: "Vanilla · Chocolate · Agarwood", category: "bukhoors", gender: "Unisex", rating: 4.8 },
  { id: "khadlaj-air-freshener", name: "Khadlaj Oud Wood Air Freshener – 320ml", brand: "Khadlaj", price: 1200, image: "/products/khadlaj-air-freshener.jpg", notes: "Oud · Amber · Lavender", category: "air-fresheners", gender: "Unisex", rating: 4.6 },
  { id: "yara-room-spray", name: "Lattafa Yara Room Spray – 300ml", brand: "Lattafa", price: 1500, image: "/products/yara-room-spray.jpg", notes: "Sweet Floral · Creamy · Vanilla", category: "air-fresheners", gender: "Unisex", rating: 4.7 },
  { id: "oud-rose-linen-spray", name: "Oud & Rose Linen Spray – 250ml", brand: "JS Atelier", price: 1800, image: "/products/oud-rose-linen-spray.jpg", notes: "Pure Oud · Turkish Rose · Fresh Cotton", category: "air-fresheners", gender: "Unisex", rating: 4.8 },
  { id: "yara-body-cream", name: "Lattafa Yara Perfumed Body Cream – 45g", brand: "Lattafa", price: 1800, image: "/products/yara-body-cream.jpg", notes: "Creamy · Vanilla · Musk", category: "creams", gender: "Women", rating: 4.9 },
  { id: "musk-silk-cream", name: "Musk Silk Perfumed Cream – 30g", brand: "JS Atelier", price: 1200, image: "/products/musk-silk-cream.jpg", notes: "White Musk · Rose · Creamy", category: "creams", gender: "Unisex", rating: 4.8 },
  { id: "musk-abiyad-oil", name: "Afnan Musk Abiyad – Concentrated Oil, 20ml", brand: "Afnan", price: 2800, image: "/products/musk-abiyad-oil.jpg", notes: "Sandalwood · White Musk · Rose", category: "perfume-oils", gender: "Unisex", rating: 4.7 },
  { id: "golden-sand-attar", name: "Surrati Golden Sand Attar – 6ml", brand: "Surrati", price: 950, image: "/products/golden-sand-attar.jpg", notes: "Caramel · Amber · Oud", category: "perfume-oils", gender: "Unisex", rating: 4.6 },
  { id: "asad-car-fragrance", name: "Lattafa Asad Car Fragrance – Vent Clip", brand: "Lattafa", price: 850, image: "/products/asad-car-fragrance.jpg", notes: "Spicy · Woody · Amber", category: "car-fragrances", gender: "Unisex", rating: 4.5 },
  { id: "oud-car-diffuser", name: "Oud Wood Hanging Car Diffuser – 10ml", brand: "JS Atelier", price: 950, image: "/products/oud-car-diffuser.jpg", notes: "Oud · Cardamom · Sandalwood", category: "car-fragrances", gender: "Unisex", rating: 4.7 },
  { id: "eid-mubarak-gift-box", name: "Eid Mubarak Premium Oud Gift Box", brand: "JS Perfumes", price: 18500, image: "/products/eid-mubarak-gift-box.jpg", notes: "Premium Oud · Burner · Bukhoor", category: "gift-sets", gender: "Unisex", rating: 5 },
  { id: "royal-wedding-set", name: "Royal Wedding Scent Consultation & Gift Set", brand: "JS Perfumes", price: 24500, image: "/products/royal-wedding-set.jpg", notes: "Custom Scent · Luxury Gift Wrap", category: "gift-sets", gender: "Unisex", rating: 4.9 },
  // 7 Requested Ouds
  { id: "kalemat-black", name: "Arabian Oud Kalemat Black – EDP, 100ml", brand: "Arabian Oud", price: 14500, image: "/products/kalemat-black.png", notes: "Blueberry · Honey · Musk · Oud", category: "ouds", gender: "Unisex", badge: "NEW", rating: 4.9 },
  { id: "dahn-al-oudh", name: "Ajmal Dahn Al Oudh – Pure Oil, 75ml", brand: "Ajmal", price: 18e3, image: "/products/dahn-al-oudh.png", notes: "Pure Oud · Woody Notes", category: "ouds", gender: "Unisex", rating: 4.8 },
  { id: "la-yuqawam-ambergris", name: "Rasasi La Yuqawam Ambergris Showers – EDP, 75ml", brand: "Rasasi", price: 11500, image: "/products/la-yuqawam-ambergris.png", notes: "Oud · Ambergris · Leather", category: "ouds", gender: "Men", rating: 4.7 },
  { id: "supremacy-oud", name: "Afnan Supremacy Oud – EDP, 100ml", brand: "Afnan", price: 8500, image: "/products/supremacy-oud.png", notes: "Oud · Saffron · Amber", category: "ouds", gender: "Unisex", badge: "NEW", rating: 4.8 },
  { id: "shaghaf-oud-aswad", name: "Swiss Arabian Shaghaf Oud Aswad – EDP, 75ml", brand: "Swiss Arabian", price: 7200, image: "/products/shaghaf-oud-aswad.png", notes: "Oud · Rose · Patchouli", category: "ouds", gender: "Unisex", rating: 4.8 },
  { id: "amber-oud-gold", name: "Al Haramain Amber Oud Gold Edition – EDP, 100ml", brand: "Al Haramain", price: 9800, image: "/products/amber-oud-gold.png", notes: "Amber · Vanilla · Musk", category: "ouds", gender: "Unisex", rating: 4.9 },
  { id: "badee-al-oud-glory", name: "Lattafa Bade'e Al Oud – EDP, 100ml", brand: "Lattafa", price: 5800, image: "/products/badee-al-oud-glory.png", notes: "Oud · Smoke · Spices", category: "ouds", gender: "Unisex", badge: "NEW", rating: 4.9 },
  // 8 Additional Premium Ouds for Load More Catalog
  { id: "initio-oud-greatness", name: "Initio Oud for Greatness – EDP, 90ml", brand: "Initio", price: 42e3, image: "/products/initio-oud-greatness.jpg", notes: "Lavender · Saffron · Nutmeg · Oud", category: "ouds", gender: "Unisex", rating: 5 },
  { id: "mfk-oud-satin", name: "Maison Francis Kurkdjian Oud Satin Mood – EDP, 70ml", brand: "Maison Francis Kurkdjian", price: 39500, image: "/products/mfk-oud-satin.jpg", notes: "Turkish Rose · Violet · Vanilla · Oud", category: "ouds", gender: "Unisex", rating: 4.9 },
  { id: "creed-royal-oud", name: "Creed Royal Oud – EDP, 100ml", brand: "Creed", price: 46e3, image: "/products/creed-royal-oud.jpg", notes: "Lemon · Pink Pepper · Cedar · Oud", category: "ouds", gender: "Men", rating: 4.9 },
  { id: "tf-oud-wood-intense", name: "Tom Ford Oud Wood Intense – EDP, 100ml", brand: "Tom Ford", price: 41e3, image: "/products/tf-oud-wood-intense.jpg", notes: "Castoreum · Cypress · Juniper · Oud", category: "ouds", gender: "Men", rating: 4.8 },
  { id: "byredo-oud-immortel", name: "Byredo Oud Immortel – EDP, 100ml", brand: "Byredo", price: 29500, image: "/products/byredo-oud-immortel.jpg", notes: "Limoncello · Incense · Patchouli · Oud", category: "ouds", gender: "Unisex", rating: 4.7 },
  { id: "amouage-epic-man", name: "Amouage Epic Man – EDP, 100ml", brand: "Amouage", price: 38e3, image: "/products/amouage-epic-man.jpg", notes: "Pink Pepper · Frankincense · Myrrh · Oud", category: "ouds", gender: "Men", rating: 4.9 },
  { id: "jm-oud-bergamot", name: "Jo Malone Oud & Bergamot – Cologne Intense, 100ml", brand: "Jo Malone", price: 22500, image: "/products/jm-oud-bergamot.jpg", notes: "Bergamot · Cedarwood · Oud", category: "ouds", gender: "Unisex", rating: 4.8 },
  { id: "xerjoff-alexandria-ii", name: "Xerjoff Oud Stars Alexandria II – EDP, 50ml", brand: "Xerjoff", price: 39e3, image: "/products/xerjoff-alexandria-ii.jpg", notes: "Lavender · Cinnamon · Rose · Oud", category: "ouds", gender: "Unisex", rating: 4.9 }
];
const getProduct = (id) => products.find((p) => p.id === id);
const getProductsByCategory = (slug) => {
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
    return products.filter(
      (p) => ["ouds", "bukhoors", "perfume-oils", "incense-burners", "burners", "attars", "home-fragrance"].includes(p.category) || p.notes.toLowerCase().includes("oud") || ["Lattafa", "Armaf", "Rasasi", "Afnan", "Ahmed Al Maghribi", "Swiss Arabian"].includes(p.brand)
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
  if (slugLower === "home-fragrance" || slugLower === "fresheners" || slugLower === "air-fresheners" || slugLower === "room-sprays" || slugLower === "linen-sprays" || slugLower === "car-fragrances" || slugLower === "burners" || slugLower === "incense-burners") {
    return products.filter(
      (p) => ["air-fresheners", "home-fragrance", "fresheners", "room-sprays", "linen-sprays", "car-fragrances", "incense-burners"].includes(p.category) || p.notes.toLowerCase().includes("smoky") || p.notes.toLowerCase().includes("sandalwood") || p.brand === "Afnan"
    );
  }
  return products.filter((p) => p.category === slug || p.category === slugLower);
};
const byCategory = getProductsByCategory;
const brands = [
  "Dior",
  "Chanel",
  "YSL",
  "Versace",
  "Calvin Klein",
  "Carolina Herrera",
  "Tom Ford",
  "Lattafa",
  "Armaf",
  "Rasasi",
  "Ahmed Al Maghribi",
  "Swiss Arabian",
  "Afnan",
  "Creed",
  "Mancera",
  "Nishane",
  "Xerjoff",
  "Amouage",
  "JS Atelier",
  "JS Perfumes"
];
const categories = [
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
const $$splitErrorComponentImporter = () => import("./product._id-C-Nxbxgz.mjs");
const $$splitNotFoundComponentImporter = () => import("./product._id-Bp2ZJBQA.mjs");
const $$splitComponentImporter$1 = () => import("./product._id-CRRvLYMn.mjs");
const Route$1 = createFileRoute("/product/$id")({
  loader: ({
    params
  }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.product.name} | JS Perfumes Kenya`
    }, {
      name: "description",
      content: `Buy ${loaderData?.product.name} authentic ${loaderData?.product.brand} fragrance from JS Perfumes Kenya. Delivery nationwide.`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
const $$splitComponentImporter = () => import("./category._slug-DUJtSh40.mjs");
const Route = createFileRoute("/category/$slug")({
  head: ({
    params
  }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    return {
      meta: [{
        title: `${cat?.name ?? "Category"} | JS Perfumes Kenya`
      }, {
        name: "description",
        content: `Shop ${cat?.name ?? "fragrances"} at JS Perfumes Kenya. Authentic, fast delivery across Kenya.`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$d.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$e
});
const ShopRoute = Route$c.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$e
});
const MatcherRoute = Route$b.update({
  id: "/matcher",
  path: "/matcher",
  getParentRoute: () => Route$e
});
const FaqRoute = Route$a.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$9.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const CheckoutRoute = Route$8.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$e
});
const CartRoute = Route$7.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$e
});
const BrandsRoute = Route$6.update({
  id: "/brands",
  path: "/brands",
  getParentRoute: () => Route$e
});
const BlogRoute = Route$5.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$e
});
const AccountRoute = Route$4.update({
  id: "/account",
  path: "/account",
  getParentRoute: () => Route$e
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const ProductIdRoute = Route$1.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$e
});
const CategorySlugRoute = Route.update({
  id: "/category/$slug",
  path: "/category/$slug",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AccountRoute,
  BlogRoute,
  BrandsRoute,
  CartRoute,
  CheckoutRoute,
  ContactRoute,
  FaqRoute,
  MatcherRoute,
  ShopRoute,
  WishlistRoute,
  CategorySlugRoute,
  ProductIdRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$c as R,
  Route$1 as a,
  brands as b,
  categories as c,
  Route as d,
  byCategory as e,
  products as p,
  router as r
};
