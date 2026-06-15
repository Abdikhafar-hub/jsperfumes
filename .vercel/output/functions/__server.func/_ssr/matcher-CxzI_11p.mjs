import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { P as ProductCard } from "./ProductCard-0Ke3ivgn.mjs";
import { p as products } from "./router-CohxNK-b.mjs";
import { R as RefreshCw, d as MessageCircle } from "../_libs/lucide-react.mjs";
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
const steps = [{
  q: "Who is the fragrance for?",
  opts: ["Men", "Women", "Unisex"]
}, {
  q: "What scent style do you love?",
  opts: ["Fresh", "Sweet", "Woody", "Spicy", "Floral", "Oud", "Musky", "Citrus"]
}, {
  q: "What's your budget?",
  opts: ["Under KSh 3,000", "KSh 3,000–7,000", "KSh 7,000–15,000", "Above KSh 15,000"]
}, {
  q: "For which occasion?",
  opts: ["Daily wear", "Office", "Wedding", "Gift", "Evening", "Special occasion"]
}];
function Matcher() {
  const [step, setStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState([]);
  const done = step >= steps.length;
  const pick = (o) => {
    setAnswers((a) => [...a, o]);
    setStep((s) => s + 1);
  };
  const reset = () => {
    setStep(0);
    setAnswers([]);
  };
  const recs = products.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Fragrance Finder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl mt-2", children: "Find Your Signature Scent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "A few quick questions and we'll recommend perfumes you'll love." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px max-w-3xl", children: !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-3xl p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Step ",
          step + 1,
          " of ",
          steps.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: reset, className: "inline-flex items-center gap-1 hover:text-gold-deep", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3" }),
          " Restart"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gold transition-all", style: {
        width: `${step / steps.length * 100}%`
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl md:text-3xl mt-6", children: steps[step].q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-2 gap-3", children: steps[step].opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => pick(o), className: "text-left border border-border rounded-xl px-5 py-4 bg-ivory hover:border-gold hover:bg-secondary transition", children: o }, o)) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-3xl p-8 md:p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Your Recommendations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl mt-2", children: "Based on your preferences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm", children: answers.join(" · ") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/254799517888", className: "btn-gold mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " Get Expert Recommendation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "btn-outline ml-2 mt-5", children: "Restart" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4", children: recs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "btn-outline", children: "Browse All Fragrances" }) })
    ] }) })
  ] });
}
export {
  Matcher as component
};
