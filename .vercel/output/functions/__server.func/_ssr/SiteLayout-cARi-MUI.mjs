import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as Phone, I as Instagram, F as Facebook, C as ChevronDown, a as ChevronRight, S as Sparkles, b as Search, H as Heart, c as ShoppingBag, U as User, M as Menu, X, d as MessageCircle, A as Award } from "../_libs/lucide-react.mjs";
const items = [
  "CAN YOU RESIST…?",
  "AUTHENTIC FRAGRANCES",
  "NAIROBI & MOMBASA",
  "DELIVERY ACROSS KENYA"
];
function AnnouncementBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gold-deep text-white text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px flex items-center justify-between gap-4 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+254799517888", className: "hidden md:inline-flex items-center gap-2 shrink-0 opacity-90 hover:opacity-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
      " +254 799 517 888"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee tracking-[0.25em]", children: [...items, ...items, ...items].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-90", children: [
      "✦ ",
      t
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/jsperfumeske", target: "_blank", rel: "noreferrer", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) })
    ] })
  ] }) });
}
const jslogo = "/assets/jslogo-Cg-UQg6N.png";
const shopCategories = [
  { slug: "perfumes", name: "Perfumes", desc: "Premium designer & niche scents" },
  { slug: "ouds", name: "Ouds", desc: "Rich Arabic agarwood blends" },
  { slug: "bukhoors", name: "Bukhoors", desc: "Traditional home incense tablets" },
  { slug: "incense-burners", name: "Burners", desc: "Luxury wood & gold Mabkharas" },
  { slug: "air-fresheners", name: "Fresheners", desc: "Refreshing room & linen sprays" },
  { slug: "creams", name: "Creams", desc: "Luxurious perfumed body creams" },
  { slug: "gift-sets", name: "Gift Sets", desc: "Curated sets for special moments" },
  { slug: "perfume-oils", name: "Perfume Oils / Attars", desc: "Pure, long-lasting concentrated oils" },
  { slug: "car-fragrances", name: "Car Fragrances", desc: "Scent diffusers for your journey" },
  { slug: "home-fragrance", name: "Home Fragrance", desc: "Elegant ambient scent essentials" }
];
const arabicCollection = [
  { slug: "ouds", name: "Premium Ouds" },
  { slug: "bukhoors", name: "Bukhoors" },
  { slug: "incense-burners", name: "Luxury Burners" },
  { slug: "perfume-oils", name: "Perfume Oils" },
  { slug: "bukhoors", name: "Incense" },
  // maps to bukhoors category
  { slug: "home-fragrance", name: "Home Fragrance" }
];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: jslogo, alt: "JS Perfumes Logo", className: "h-[64px] md:h-[88px] w-auto object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-foreground/80 hover:text-gold-deep transition-colors inline-flex items-center gap-0.5", activeProps: { className: "text-gold-deep font-semibold" }, children: [
            "Shop ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3 mt-0.5 group-hover:rotate-180 transition-transform duration-200" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-[45%] lg:-translate-x-1/2 top-full mt-0 w-[80vw] max-w-4xl bg-white border border-border rounded-2xl shadow-xl p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-widest font-semibold uppercase text-gold mb-3", children: "Shop Categories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5", children: shopCategories.slice(0, 5).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: { slug: cat.slug }, className: "group/item flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] text-foreground font-serif hover:text-gold-deep transition-colors flex items-center gap-1", children: [
                  cat.name,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] text-muted-foreground font-normal", children: cat.desc })
              ] }, cat.slug)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-widest font-semibold uppercase text-gold mb-3", children: "Lifestyle & Gifting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5", children: shopCategories.slice(5).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: { slug: cat.slug }, className: "group/item flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] text-foreground font-serif hover:text-gold-deep transition-colors flex items-center gap-1", children: [
                  cat.name,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10.5px] text-muted-foreground font-normal", children: cat.desc })
              ] }, cat.slug)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FAF8F2] p-5 rounded-xl border border-border/60 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] tracking-widest font-semibold uppercase text-gold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                  " Gift Guide"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-base text-foreground mt-2 leading-tight", children: "Find Their Scent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] text-muted-foreground mt-1.5 leading-relaxed", children: "Let our expert scent finder select the perfect fragrance style, budget and packaging for any occasion." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/matcher", className: "mt-4 inline-flex items-center justify-center bg-gold hover:bg-gold-deep text-white text-[11px] font-semibold tracking-wider uppercase py-2.5 px-4 rounded-md transition duration-200", children: "Find My Scent" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "new-arrivals" }, className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "New Arrivals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "best-sellers" }, className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "Best Sellers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "men" }, className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "Men" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "women" }, className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "Women" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: { slug: "arabic-collection" }, className: "text-foreground/80 hover:text-gold-deep transition-colors inline-flex items-center gap-0.5", activeProps: { className: "text-gold-deep font-semibold" }, children: [
            "Arabic Collection ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3 mt-0.5 group-hover:rotate-180 transition-transform duration-200" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-full mt-0 w-56 bg-white border border-border rounded-xl shadow-lg py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50", children: arabicCollection.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: cat.slug }, className: "block px-5 py-2 text-[13px] text-foreground hover:bg-secondary hover:text-gold-deep font-serif transition-colors", children: cat.name }, `${cat.slug}-${i}`)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/brands", className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "Brands" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-foreground/80 hover:text-gold-deep transition-colors py-2", activeProps: { className: "text-gold-deep font-semibold" }, children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 md:gap-4 justify-self-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Search", className: "p-2 hover:text-gold-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/wishlist", "aria-label": "Wishlist", className: "p-2 hidden sm:inline-flex hover:text-gold-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cart", "aria-label": "Cart", className: "relative p-2 hover:text-gold-deep", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] h-4 min-w-4 px-1 rounded-full grid place-items-center", children: "0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/account", "aria-label": "Account", className: "p-2 hidden sm:inline-flex hover:text-gold-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(true), "aria-label": "Menu", className: "p-2 md:hidden hover:text-gold-deep -mr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
      ] })
    ] }) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] md:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/40 backdrop-blur-xs",
          onClick: () => setOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "absolute right-0 top-0 h-[100dvh] w-full max-w-[420px] bg-[#FAF8F4] text-[#111111] shadow-2xl flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center justify-between px-6 py-4 bg-white border-b border-[#EFEBE4]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", onClick: () => setOpen(false), className: "flex items-center min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: jslogo, alt: "JS Perfumes Logo", className: "h-[56px] w-auto object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(false),
              "aria-label": "Close menu",
              className: "h-9 w-9 grid place-items-center rounded-full hover:bg-black/5 text-[#111111] transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-6 shrink-0 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[1px] w-4 bg-[#C9A227]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-sans font-bold tracking-[0.16em] text-[#C9A227] uppercase", children: "Navigation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col border-t border-[#EFEBE4]/60", children: [
          { to: "/", label: "Home" },
          { to: "/shop", label: "Shop" },
          { to: "/category/$slug", label: "New Arrivals", params: { slug: "new-arrivals" } },
          { to: "/category/$slug", label: "Best Sellers", params: { slug: "best-sellers" } },
          { to: "/category/$slug", label: "Arabic Collection", params: { slug: "arabic-collection" } },
          { to: "/brands", label: "Brands" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            params: item.params,
            onClick: () => setOpen(false),
            className: "flex items-center justify-between h-[58px] border-b border-[#EFEBE4]/60 text-[#111111] hover:text-[#C9A227] transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-[17px] tracking-wide font-medium", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-[#C9A227] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" })
            ]
          },
          item.label
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 p-6 border-t border-[#EFEBE4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/shop",
            onClick: () => setOpen(false),
            className: "w-full h-[52px] bg-[#C9A227] hover:bg-[#B08D20] text-white font-sans font-semibold text-[13px] tracking-[0.2em] uppercase rounded-lg flex items-center justify-center shadow-sm transition-colors",
            children: "Explore Collection"
          }
        ) })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-[#11100E] text-white/80 mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px py-16 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gold grid place-items-center text-[#11100E] font-serif text-lg", children: "JS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-white", children: "JS Perfumes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-gold", children: "Essence of Luxury" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed", children: "Authentic designer perfumes, ouds, bukhoors, gift sets and luxury fragrance products across Kenya." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/jsperfumeske", target: "_blank", rel: "noreferrer", className: "p-2 rounded-full border border-white/20 hover:border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "p-2 rounded-full border border-white/20 hover:border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/254799517888", className: "p-2 rounded-full border border-white/20 hover:border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-gold mb-4", children: "Shop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "men" }, className: "hover:text-gold", children: "Men" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "women" }, className: "hover:text-gold", children: "Women" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "ouds" }, className: "hover:text-gold", children: "Ouds" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "bukhoors" }, className: "hover:text-gold", children: "Bukhoors" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: { slug: "gift-sets" }, className: "hover:text-gold", children: "Gift Sets" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-gold", children: "New Arrivals" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-gold mb-4", children: "Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-gold", children: "Contact" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-gold", children: "Delivery Information" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-gold", children: "Returns" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-gold", children: "FAQ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/account", className: "hover:text-gold", children: "Track Order" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-gold mb-4", children: "Branches" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white", children: "Nairobi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-80", children: "BBS Mall, GFB090" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+254799517888", className: "text-gold", children: "0799 517 888" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white", children: "Mombasa" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-80", children: "Makadara Road" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+254740069569", className: "text-gold", children: "0740 069 569" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " JS Perfumes Kenya. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "M-Pesa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mastercard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cash on Delivery" })
      ] })
    ] }) })
  ] });
}
function StickyButtons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed right-4 bottom-4 z-40 flex flex-col gap-3 items-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/about",
        className: "flex items-center justify-center bg-gold text-white rounded-full shadow-lg hover:bg-gold-deep transition-colors text-sm font-medium w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3 gap-0 md:gap-2",
        title: "About JS Perfumes",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 md:h-4 md:w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "About JS Perfumes" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://wa.me/254799517888",
        target: "_blank",
        rel: "noreferrer",
        className: "flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:brightness-95 transition text-sm font-medium w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3 gap-0 md:gap-2",
        title: "Chat With Us",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 md:h-4 md:w-4 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Chat With Us" })
        ]
      }
    )
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyButtons, {})
  ] });
}
export {
  SiteLayout as S
};
