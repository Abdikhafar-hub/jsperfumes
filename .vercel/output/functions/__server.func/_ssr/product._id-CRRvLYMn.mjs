import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { P as ProductCard } from "./ProductCard-0Ke3ivgn.mjs";
import { a as Route$1, p as products } from "./router-CohxNK-b.mjs";
import { i as Minus, j as Plus, c as ShoppingBag, d as MessageCircle, H as Heart, l as ShieldCheck, n as Truck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ProductPage() {
  const {
    product
  } = Route$1.useLoaderData();
  const [qty, setQty] = reactExports.useState(1);
  const [tab, setTab] = reactExports.useState("description");
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px py-8 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-gold-deep", children: "Home" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-gold-deep", children: "Shop" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[80px_1fr] gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex md:flex-col gap-3 order-2 md:order-1 col-span-2 md:col-span-1", children: [product.image, product.image, product.image].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-20 rounded-lg border border-border overflow-hidden bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "h-full w-full object-cover" }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 md:order-2 col-span-2 md:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-2xl bg-white border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "h-full w-full object-cover" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: product.brand }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl md:text-4xl mt-2", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "★★★★★" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            product.rating ?? 4.7,
            " · Verified reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-baseline gap-3", children: [
          product.oldPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground line-through", children: [
            "KSh ",
            product.oldPrice.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-3xl text-gold-deep", children: [
            "KSh ",
            product.price.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: [
          "A signature fragrance from ",
          product.brand,
          ". ",
          product.notes,
          ". Long lasting projection with a clean, elegant dry-down."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-2", children: "Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["50ml", "100ml", "Travel 10ml"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `px-4 py-2 rounded-full border text-sm ${i === 1 ? "border-gold text-gold-deep bg-secondary" : "border-border hover:border-gold"}`, children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center border border-border rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 text-sm w-8 text-center", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold flex-1 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
            " Add to Cart"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/254799517888?text=Hi, I'd like to order ${encodeURIComponent(product.name)}`, target: "_blank", rel: "noreferrer", className: "btn-outline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
            " Buy via WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-outline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
            " Wishlist"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white border border-border rounded-lg p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-gold" }),
            " 100% Authentic"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white border border-border rounded-lg p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 text-gold" }),
            " Fast Delivery"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white border border-border rounded-lg p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-gold" }),
            " Expert Help"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border flex flex-wrap gap-1", children: ["description", "notes", "delivery", "reviews"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-5 py-3 text-sm capitalize ${tab === t ? "border-b-2 border-gold text-gold-deep" : "text-muted-foreground"}`, children: t === "notes" ? "Fragrance Notes" : t === "delivery" ? "Delivery & Returns" : t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-sm leading-relaxed text-muted-foreground max-w-3xl", children: [
        tab === "description" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          product.name,
          " is an authentic ",
          product.brand,
          " fragrance offered by JS Perfumes Kenya. Hand-checked for authenticity and dispatched same-day from our Nairobi warehouse."
        ] }),
        tab === "notes" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Top Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg", children: "Bergamot, Citrus" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Heart Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg", children: "Rose, Spice" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Base Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg", children: "Oud, Amber, Musk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Scent Family" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg", children: product.notes })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Longevity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg", children: "8–10 hours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Projection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-serif text-lg", children: "Strong" })
          ] })
        ] }),
        tab === "delivery" && /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Same-day dispatch within Nairobi and Mombasa." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Nationwide delivery in 1–3 business days." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Free pickup from both branches." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Returns accepted on unopened items within 7 days." })
        ] }),
        tab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "★★★★★ (Verified) — “Lovely scent, lasts all day. Will buy again.” — A. Mwangi" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl", children: "You May Also Like" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] });
}
export {
  ProductPage as component
};
