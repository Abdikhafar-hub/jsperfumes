import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { P as ProductCard } from "./ProductCard-0Ke3ivgn.mjs";
import { R as Route$c, p as products, c as categories, b as brands } from "./router-CohxNK-b.mjs";
import { e as SlidersHorizontal, X } from "../_libs/lucide-react.mjs";
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
function Shop() {
  const {
    brand: searchBrand
  } = Route$c.useSearch();
  const [sort, setSort] = reactExports.useState("latest");
  const [open, setOpen] = reactExports.useState(false);
  const [selectedBrands, setSelectedBrands] = reactExports.useState([]);
  const [selectedGenders, setSelectedGenders] = reactExports.useState([]);
  const [maxPrice, setMaxPrice] = reactExports.useState(8e4);
  const [selectedFamilies, setSelectedFamilies] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (searchBrand) {
      setSelectedBrands([searchBrand]);
    } else {
      setSelectedBrands([]);
    }
  }, [searchBrand]);
  const filtered = products.filter((p) => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
      return false;
    }
    if (selectedGenders.length > 0 && (!p.gender || !selectedGenders.includes(p.gender))) {
      return false;
    }
    if (p.price > maxPrice) {
      return false;
    }
    if (selectedFamilies.length > 0) {
      const notesLower = p.notes.toLowerCase();
      const matchesFamily = selectedFamilies.some((fam) => {
        if (fam === "Oud") return notesLower.includes("oud");
        return notesLower.includes(fam.toLowerCase());
      });
      if (!matchesFamily) return false;
    }
    return true;
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    return 0;
  });
  const toggleBrand = (b) => {
    setSelectedBrands((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);
  };
  const toggleGender = (g) => {
    setSelectedGenders((prev) => prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]);
  };
  const toggleFamily = (f) => {
    setSelectedFamilies((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);
  };
  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedGenders([]);
    setMaxPrice(8e4);
    setSelectedFamilies([]);
  };
  const Filters = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "bg-white border border-border rounded-2xl p-6 space-y-6 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif font-semibold text-base", children: "Filters" }),
      (selectedBrands.length > 0 || selectedGenders.length > 0 || maxPrice < 8e4 || selectedFamilies.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAllFilters, className: "text-xs text-gold-deep hover:underline", children: "Clear All" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: categories.slice(0, 10).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: {
        slug: c.slug
      }, className: "text-foreground/80 hover:text-gold-deep", children: c.name }) }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-y-2", children: brands.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selectedBrands.includes(b), onChange: () => toggleBrand(b), className: "rounded border-border text-gold-deep focus:ring-gold accent-[var(--gold)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: selectedBrands.includes(b) ? "text-gold-deep font-semibold" : "text-foreground/80", children: b })
      ] }, b)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Gender" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["Men", "Women", "Unisex"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selectedGenders.includes(g), onChange: () => toggleGender(g), className: "rounded border-border text-gold-deep focus:ring-gold accent-[var(--gold)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: selectedGenders.includes(g) ? "text-gold-deep font-semibold" : "text-foreground/80", children: g })
      ] }, g)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Max Price" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 0, max: 8e4, step: 1e3, value: maxPrice, onChange: (e) => setMaxPrice(Number(e.target.value)), className: "w-full accent-[var(--gold)] cursor-pointer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "KSh 0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-gold-deep", children: [
          "KSh ",
          maxPrice.toLocaleString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Scent Family" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["Floral", "Woody", "Citrus", "Oud", "Spicy", "Fresh"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selectedFamilies.includes(s), onChange: () => toggleFamily(s), className: "rounded border-border text-gold-deep focus:ring-gold accent-[var(--gold)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: selectedFamilies.includes(s) ? "text-gold-deep font-semibold" : "text-foreground/80", children: s })
      ] }, s)) })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "All Fragrances" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl mt-2", children: "Shop Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
        sorted.length,
        " authentic fragrances found."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-[260px_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Filters, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(true), className: "lg:hidden btn-outline !py-2 !px-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }),
            " Filters"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground hidden lg:block", children: [
            "Showing ",
            sorted.length,
            " products"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "border border-border rounded-full px-4 py-2 text-sm bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "latest", children: "Latest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", children: "Best Rated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-asc", children: "Price: Low to High" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-desc", children: "Price: High to Low" })
          ] })
        ] }),
        sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 bg-white border border-border rounded-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "No products match your selected filters." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAllFilters, className: "btn-outline mt-4", children: "Reset All Filters" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6", children: sorted.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50", onClick: () => setOpen(false) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ivory overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl", children: "Filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Filters, {}) })
      ] })
    ] })
  ] }) });
}
export {
  Shop as component
};
