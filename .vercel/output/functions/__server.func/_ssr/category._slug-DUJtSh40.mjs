import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { P as ProductCard } from "./ProductCard-0Ke3ivgn.mjs";
import { d as Route, c as categories, p as products, e as byCategory } from "./router-CohxNK-b.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function CategoryPage() {
  const {
    slug
  } = Route.useParams();
  const cat = categories.find((c) => c.slug === slug);
  const items = slug === "offers" ? products.filter((p) => p.oldPrice) : slug === "new" ? products.slice(0, 8) : byCategory(slug);
  const [visibleCount, setVisibleCount] = reactExports.useState(12);
  reactExports.useEffect(() => {
    setVisibleCount(12);
  }, [slug]);
  const visibleItems = items.slice(0, visibleCount);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#2a2218] to-[#5a4827]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px relative py-16 md:py-24 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-gold", children: "Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-6xl mt-2", children: cat?.name ?? "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 max-w-xl text-white/85", children: [
          "A curated edit of ",
          cat?.name?.toLowerCase() ?? "fragrances",
          " from JS Perfumes — authentic, beautifully presented and ready to ship."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px py-10", children: [
      items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No products in this collection yet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "btn-outline mt-4", children: "Browse All" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: visibleItems.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
        items.length > visibleCount && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setVisibleCount((prev) => prev + 8), className: "h-[56px] px-10 bg-transparent border border-gold text-gold hover:bg-gold hover:text-white font-semibold text-xs tracking-widest uppercase rounded-[10px] flex items-center justify-center transition-all duration-300", children: "LOAD MORE" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 bg-white border border-border rounded-2xl p-8 text-muted-foreground text-sm leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-2xl text-foreground", children: [
          "About ",
          cat?.name ?? "this collection"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3", children: [
          "At JS Perfumes Kenya we curate ",
          cat?.name?.toLowerCase() ?? "fragrances",
          " from the world's most loved houses — designer, niche and Arabic. Every bottle is checked for authenticity and shipped from our Nairobi or Mombasa branches with fast nationwide delivery."
        ] })
      ] })
    ] })
  ] });
}
export {
  CategoryPage as component
};
