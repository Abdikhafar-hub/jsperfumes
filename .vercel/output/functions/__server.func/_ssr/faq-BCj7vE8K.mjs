import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
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
const faqs = [{
  q: "Are your perfumes authentic?",
  a: "Yes. Every fragrance we sell is sourced through trusted distributors and inspected before dispatch."
}, {
  q: "Do you deliver across Kenya?",
  a: "We deliver nationwide in 1–3 business days. Same-day delivery is available within Nairobi and Mombasa."
}, {
  q: "Where are your branches?",
  a: "Nairobi: BBS Mall, GFB090. Mombasa: Makadara Road."
}, {
  q: "Do you accept M-Pesa?",
  a: "Yes, M-Pesa is our primary payment method along with cash on delivery and bank transfer."
}, {
  q: "Can I order through WhatsApp?",
  a: "Absolutely. Tap the WhatsApp button on any page or message us at 0799 517 888."
}, {
  q: "Do you sell gift sets?",
  a: "Yes — beautifully wrapped curations for any occasion."
}, {
  q: "Do you have oud and bukhoor?",
  a: "Yes, an extensive Arabic luxury collection of ouds, bukhoors, oils and incense burners."
}, {
  q: "Can you recommend a perfume for me?",
  a: "Use our Fragrance Finder or message us — we're happy to consult."
}];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Help Center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl mt-2", children: "Frequently Asked Questions" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px max-w-3xl pb-20", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? -1 : i), className: "w-full text-left bg-white border border-border rounded-2xl p-5 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}` })
      ] }),
      open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: f.a })
    ] }, f.q)) })
  ] });
}
export {
  FAQ as component
};
