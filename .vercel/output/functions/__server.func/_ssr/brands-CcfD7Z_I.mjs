import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { l as logoVersace, a as logoYsl, b as logoTomFord, c as logoCreed, d as logoChanel, e as logoDior, f as logoRasasi, g as logoArmaf, h as logoLattafa } from "./verseace-CZbEU1ig.mjs";
import { A as Award, S as Sparkles, k as ArrowRight } from "../_libs/lucide-react.mjs";
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
const brandLogos = {
  Lattafa: logoLattafa,
  Armaf: logoArmaf,
  Rasasi: logoRasasi,
  Dior: logoDior,
  Chanel: logoChanel,
  Creed: logoCreed,
  "Tom Ford": logoTomFord,
  YSL: logoYsl,
  Versace: logoVersace
};
const brandCategories = [{
  title: "Arabic Collection Brands",
  description: "Deep, mysterious woody and spicy heritage blends from renowned Middle-Eastern houses.",
  items: [{
    name: "Lattafa",
    desc: "Bold, modern ouds and sweet orientals"
  }, {
    name: "Armaf",
    desc: "Iconic, high-performing signature blends"
  }, {
    name: "Rasasi",
    desc: "Timeless traditional incense & oil legacy"
  }, {
    name: "Ahmed Al Maghribi",
    desc: "Premium niche ouds and luxury rose sprays"
  }, {
    name: "Swiss Arabian",
    desc: "The perfect fusion of East and West"
  }, {
    name: "Afnan",
    desc: "Sophisticated modern Arabic craftsmanship"
  }]
}, {
  title: "Designer Houses",
  description: "Sleek, universally adored masterpieces from Paris, Milan, and New York.",
  items: [{
    name: "Dior",
    desc: "French refinement, legendary couture scents"
  }, {
    name: "Chanel",
    desc: "The gold standard of luxury and elegance"
  }, {
    name: "YSL",
    desc: "Edgy, bold, and luxurious modern statement scents"
  }, {
    name: "Versace",
    desc: "Vibrant, Mediterranean-inspired fresh classics"
  }, {
    name: "Tom Ford",
    desc: "Private blends, rich woods, and high-fashion luxury"
  }, {
    name: "Calvin Klein",
    desc: "Clean, minimalistic, and gender-neutral icons"
  }, {
    name: "Carolina Herrera",
    desc: "Seductive, modern luxury from Good Girl to Bad Boy"
  }]
}, {
  title: "Niche & Rare Creations",
  description: "Artisanal, high-concentration perfume creations crafted for true fragrance connoisseurs.",
  items: [{
    name: "Creed",
    desc: "Royal heritage, rich ingredients, and legendary quality"
  }, {
    name: "Mancera",
    desc: "Intense, long-lasting Parisian sweet and woody scents"
  }, {
    name: "Nishane",
    desc: "Extraits de Parfum showcasing Istanbul's rich culture"
  }, {
    name: "Xerjoff",
    desc: "Italian artistic expression in crystal flacons"
  }, {
    name: "Amouage",
    desc: "The Gift of Kings—royal Omani luxury incense"
  }]
}];
function BrandsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-16 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4" }),
        " Official Retailer"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-6xl tracking-wide text-foreground", children: "Our Luxury Brands" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm md:text-base leading-relaxed", children: "Every bottle at JS Perfumes is 100% authentic, imported directly from source fragrance houses. Explore our curated portfolio of designer names, rare niche houses, and Arabic collection masterpieces." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px flex flex-col gap-20", children: brandCategories.map((group, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/30 pb-16 last:border-0 last:pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3.5xl tracking-wide text-foreground", children: group.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: group.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5", children: group.items.map((brand) => {
        const logo = brandLogos[brand.name];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
          brand: brand.name
        }, className: "group bg-[#FAF8F2]/45 hover:bg-[#FAF8F2] border border-border/60 hover:border-gold hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[170px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-full flex items-center justify-center relative", children: logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: `${brand.name} Perfumes Kenya`, className: "max-h-full max-w-[85%] object-contain group-hover:scale-102 transition-transform duration-300", loading: "lazy" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg md:text-xl text-gold-deep group-hover:text-gold transition-colors", children: brand.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-2 border-t border-border/40 pt-2.5 flex flex-col justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-sans font-semibold tracking-wider text-foreground block truncate", children: brand.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground line-clamp-1 mt-0.5", children: brand.desc })
          ] })
        ] }, brand.name);
      }) })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-16 border-t border-border/40 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-gold mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl tracking-wide", children: "Looking for a specific fragrance?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-sm leading-relaxed", children: "Our catalogs are regularly updated. If you don't find your favorite scent, contact our scent consultants and we will source it for you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/254799517888?text=Hi%2C%20I%20am%20looking%20for%20a%20specific%20perfume%20not%20listed%20on%20your%20site.", target: "_blank", rel: "noreferrer", className: "btn-gold px-8 py-3.5 text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-1.5", children: [
        "Request Scent Sourcing ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  BrandsPage as component
};
