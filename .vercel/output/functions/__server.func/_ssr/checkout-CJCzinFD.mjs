import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function Checkout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl", children: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-[1fr_380px] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "bg-white border border-border rounded-2xl p-6 md:p-8 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: "Delivery Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", placeholder: "07XX XXX XXX" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "County" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Town" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Delivery Address", full: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Order Notes (optional)", full: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl pt-4 border-t border-border", children: "Payment Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: ["M-Pesa", "Cash on Delivery", "Bank Transfer"].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `border rounded-xl p-4 cursor-pointer ${i === 0 ? "border-gold bg-secondary" : "border-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "pay", defaultChecked: i === 0, className: "mr-2 accent-[var(--gold)]" }),
          " ",
          p
        ] }, p)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn-gold w-full justify-center mt-4", children: "Place Order" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "bg-white border border-border rounded-2xl p-6 h-fit lg:sticky lg:top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Items (3)", value: "KSh 17,500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: "Free" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Total", value: "KSh 17,500", bold: true }) })
        ] })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  type = "text",
  placeholder,
  full
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `block ${full ? "sm:col-span-2" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, className: "mt-1 w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" })
  ] });
}
function Row({
  label,
  value,
  bold
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between ${bold ? "font-serif text-lg text-gold-deep" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: value })
  ] });
}
export {
  Checkout as component
};
