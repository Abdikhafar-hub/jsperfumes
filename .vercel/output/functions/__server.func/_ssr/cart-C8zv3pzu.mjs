import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { p as products } from "./router-CohxNK-b.mjs";
import { i as Minus, j as Plus, T as Trash2 } from "../_libs/lucide-react.mjs";
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
function Cart() {
  const [items, setItems] = reactExports.useState(() => products.slice(0, 3).map((p) => ({
    ...p,
    qty: 1
  })));
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 1e4 ? 0 : 350;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl", children: "Your Cart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
      items.length,
      " items"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-[1fr_360px] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-2xl p-4 grid grid-cols-[80px_1fr_auto] sm:grid-cols-[110px_1fr_auto_auto] items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.image, alt: "", className: "w-20 sm:w-[110px] aspect-square rounded-lg object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif truncate", children: i.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              i.brand,
              " · 100ml"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center border border-border rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems((arr) => arr.map((x) => x.id === i.id ? {
                ...x,
                qty: Math.max(1, x.qty - 1)
              } : x)), className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 text-sm", children: i.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems((arr) => arr.map((x) => x.id === i.id ? {
                ...x,
                qty: x.qty + 1
              } : x)), className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-gold-deep text-right whitespace-nowrap", children: [
            "KSh ",
            (i.price * i.qty).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems((arr) => arr.filter((x) => x.id !== i.id)), "aria-label": "Remove", className: "p-2 text-muted-foreground hover:text-destructive col-start-3 sm:col-start-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
        ] }, i.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "btn-outline mt-2", children: "Continue Shopping" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "bg-white border border-border rounded-2xl p-6 h-fit lg:sticky lg:top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Coupon / gift card", className: "flex-1 border border-border rounded-full px-4 py-2 text-sm bg-ivory" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-outline !py-2 !px-4 text-xs", children: "Apply" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2 text-sm border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "KSh ",
              subtotal.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: shipping === 0 ? "Free" : `KSh ${shipping}` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-serif text-lg pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gold-deep", children: [
              "KSh ",
              (subtotal + shipping).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout", className: "btn-gold w-full justify-center mt-5", children: "Proceed to Checkout" })
      ] })
    ] })
  ] }) });
}
export {
  Cart as component
};
