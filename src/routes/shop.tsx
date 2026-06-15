import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories, brands } from "@/data/products";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [{ title: "Shop All Perfumes | JS Perfumes Kenya" }, { name: "description", content: "Browse the full collection of designer, niche and Arabic fragrances at JS Perfumes Kenya." }] }),
  component: Shop,
});

function Shop() {
  const [sort, setSort] = useState("latest");
  const [open, setOpen] = useState(false);
  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    return 0;
  });

  const Filters = () => (
    <aside className="bg-white border border-border rounded-2xl p-6 space-y-6 text-sm">
      <div>
        <div className="eyebrow mb-3">Category</div>
        <ul className="space-y-2">
          {categories.slice(0, 10).map((c) => (
            <li key={c.slug}><Link to="/category/$slug" params={{ slug: c.slug }} className="text-foreground/80 hover:text-gold-deep">{c.name}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="eyebrow mb-3">Brand</div>
        <div className="grid grid-cols-2 gap-y-2">
          {brands.slice(0, 10).map((b) => (
            <label key={b} className="inline-flex items-center gap-2"><input type="checkbox" /> {b}</label>
          ))}
        </div>
      </div>
      <div>
        <div className="eyebrow mb-3">Gender</div>
        {["Men", "Women", "Unisex"].map((g) => (
          <label key={g} className="flex items-center gap-2 py-1"><input type="checkbox" /> {g}</label>
        ))}
      </div>
      <div>
        <div className="eyebrow mb-3">Price</div>
        <input type="range" min={0} max={80000} className="w-full accent-[var(--gold)]" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>KSh 0</span><span>KSh 80,000</span></div>
      </div>
      <div>
        <div className="eyebrow mb-3">Scent Family</div>
        {["Floral", "Woody", "Citrus", "Oud", "Spicy", "Fresh"].map((s) => (
          <label key={s} className="flex items-center gap-2 py-1"><input type="checkbox" /> {s}</label>
        ))}
      </div>
    </aside>
  );

  return (
    <SiteLayout>
      <div className="container-px py-10">
        <div className="text-center">
          <div className="eyebrow">All Fragrances</div>
          <h1 className="font-serif text-4xl md:text-5xl mt-2">Shop Collection</h1>
          <p className="mt-2 text-muted-foreground">{products.length} authentic fragrances curated for you.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-[260px_1fr] gap-8">
          <div className="hidden lg:block"><Filters /></div>
          <div>
            <div className="flex items-center justify-between gap-3 mb-5">
              <button onClick={() => setOpen(true)} className="lg:hidden btn-outline !py-2 !px-4 text-xs"><SlidersHorizontal className="h-4 w-4" /> Filters</button>
              <div className="text-sm text-muted-foreground hidden lg:block">Showing {sorted.length} products</div>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-border rounded-full px-4 py-2 text-sm bg-white">
                <option value="latest">Latest</option>
                <option value="rating">Best Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {sorted.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ivory overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="font-serif text-xl">Filters</div>
                <button onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
              </div>
              <div className="p-4"><Filters /></div>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
