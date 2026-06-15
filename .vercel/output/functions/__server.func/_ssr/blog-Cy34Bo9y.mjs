import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
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
import "../_libs/lucide-react.mjs";
const p1 = "/categories/cat-niche.jpg";
const p2 = "/categories/cat-men.jpg";
const p3 = "/categories/cat-women.jpg";
const posts = [{
  t: "How To Choose Your Signature Scent",
  e: "Style",
  img: p1
}, {
  t: "The Difference Between Oud and Bakhoor",
  e: "Arabic Luxury",
  img: p2
}, {
  t: "Best Perfumes For Men In Kenya",
  e: "Edit",
  img: p2
}, {
  t: "Best Perfumes For Women In Kenya",
  e: "Edit",
  img: p3
}, {
  t: "How To Make Your Perfume Last Longer",
  e: "Tips",
  img: p1
}, {
  t: "Designer vs Niche Fragrances",
  e: "Guide",
  img: p1
}, {
  t: "Best Gift Sets For Special Occasions",
  e: "Gifting",
  img: p3
}];
function Blog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Fragrance Journal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl mt-2", children: "Stories, Notes & Guides" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: "", loading: "lazy", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: p.e }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl mt-2", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-gold-deep", children: "Read article →" })
      ] })
    ] }, p.t)) })
  ] });
}
export {
  Blog as component
};
