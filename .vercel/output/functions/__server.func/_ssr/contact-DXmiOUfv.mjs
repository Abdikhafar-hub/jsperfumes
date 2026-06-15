import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { P as Phone, f as Clock, d as MessageCircle, g as MapPin, I as Instagram, h as Mail } from "../_libs/lucide-react.mjs";
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
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Get In Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl mt-2", children: "Visit JS Perfumes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Two boutiques. One promise — authentic luxury fragrances, expertly served." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px grid md:grid-cols-2 gap-5", children: [{
      city: "Nairobi",
      addr: "BBS Mall, GFB090",
      phone: "+254799517888",
      d: "0799 517 888"
    }, {
      city: "Mombasa",
      addr: "Makadara Road",
      phone: "+254740069569",
      d: "0740 069 569"
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "eyebrow", children: [
        b.city,
        " Branch"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl mt-2", children: b.addr }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold" }),
          " ",
          b.d
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-gold" }),
          " Mon–Sat 9am–8pm · Sun 10am–6pm"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${b.phone}`, className: "btn-outline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " Call"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${b.phone.replace("+", "")}`, className: "btn-outline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "btn-outline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
          " Directions"
        ] })
      ] })
    ] }, b.city)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-12 grid md:grid-cols-[1fr_1fr] gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "bg-white border border-border rounded-2xl p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Name", className: "w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Email", className: "w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Phone", className: "w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { placeholder: "Message", rows: 5, className: "w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn-gold w-full justify-center", children: "Send Message" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-border rounded-2xl overflow-hidden min-h-[300px] grid place-items-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-10 w-10 text-gold mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl mt-3", children: "Find us on the map" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", children: "Nairobi · Mombasa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/jsperfumeske", className: "inline-flex items-center gap-1 hover:text-gold-deep", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
            " @jsperfumeske"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@jsperfumes.co.ke", className: "inline-flex items-center gap-1 hover:text-gold-deep", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            " hello@jsperfumes.co.ke"
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Contact as component
};
