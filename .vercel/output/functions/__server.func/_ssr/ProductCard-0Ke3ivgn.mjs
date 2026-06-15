import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Heart, c as ShoppingBag } from "../_libs/lucide-react.mjs";
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "product-card group relative h-full flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute z-10 top-3 left-3 bg-[#E2533A] text-white text-[10px] tracking-wider font-medium px-2 py-1 rounded", children: product.badge }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-10 top-3 right-3 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Wishlist", className: "h-8 w-8 grid place-items-center rounded-full bg-white/90 border border-border text-foreground hover:text-gold-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Add to cart", className: "h-8 w-8 grid place-items-center rounded-full bg-white/90 border border-border text-foreground hover:text-gold-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: product.id }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-ivory overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: product.image,
          alt: product.name,
          loading: "lazy",
          className: "h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 pb-2 flex flex-col items-center text-center gap-1.5", children: [
        product.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: product.notes }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: { id: product.id }, className: "font-serif text-base sm:text-lg leading-snug line-clamp-2 hover:text-gold-deep", children: product.name })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 pt-0 flex flex-col items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
      product.oldPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground line-through", children: [
        "KSh ",
        product.oldPrice.toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gold-deep font-serif text-lg", children: [
        "KSh ",
        product.price.toLocaleString()
      ] })
    ] }) })
  ] });
}
export {
  ProductCard as P
};
