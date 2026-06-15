import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, categories, brands } from "@/data/products";
import { useState, useEffect } from "react";
import { SlidersHorizontal, X } from "lucide-react";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): { brand?: string } => {
    return {
      brand: (search.brand as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Shop All Perfumes | JS Perfumes Kenya" }, { name: "description", content: "Browse the full collection of designer, niche and Arabic fragrances at JS Perfumes Kenya." }] }),
  component: Shop,
});

function Shop() {
  const { brand: searchBrand } = Route.useSearch();
  const [sort, setSort] = useState("latest");
  const [open, setOpen] = useState(false);
  
  // Filter States
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(80000);
  const [selectedFamilies, setSelectedFamilies] = useState<string[]>([]);

  // Update selected brand when search param changes
  useEffect(() => {
    if (searchBrand) {
      setSelectedBrands([searchBrand]);
    } else {
      setSelectedBrands([]);
    }
  }, [searchBrand]);

  // Filtering Logic
  const filtered = products.filter((p) => {
    // Brand Filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
      return false;
    }
    // Gender Filter
    if (selectedGenders.length > 0 && (!p.gender || !selectedGenders.includes(p.gender))) {
      return false;
    }
    // Price Filter
    if (p.price > maxPrice) {
      return false;
    }
    // Scent Family (Notes) Filter
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

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
    );
  };

  const toggleGender = (g: string) => {
    setSelectedGenders((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  };

  const toggleFamily = (f: string) => {
    setSelectedFamilies((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedGenders([]);
    setMaxPrice(80000);
    setSelectedFamilies([]);
  };

  const Filters = () => (
    <aside className="bg-white border border-border rounded-2xl p-6 space-y-6 text-sm">
      <div className="flex items-center justify-between">
        <span className="font-serif font-semibold text-base">Filters</span>
        {(selectedBrands.length > 0 || selectedGenders.length > 0 || maxPrice < 80000 || selectedFamilies.length > 0) && (
          <button onClick={clearAllFilters} className="text-xs text-gold-deep hover:underline">Clear All</button>
        )}
      </div>

      <div className="border-t border-border pt-4">
        <div className="eyebrow mb-3">Category</div>
        <ul className="space-y-2">
          {categories.slice(0, 10).map((c) => (
            <li key={c.slug}><Link to="/category/$slug" params={{ slug: c.slug }} className="text-foreground/80 hover:text-gold-deep">{c.name}</Link></li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border pt-4">
        <div className="eyebrow mb-3">Brand</div>
        <div className="grid grid-cols-2 gap-y-2">
          {brands.map((b) => (
            <label key={b} className="inline-flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedBrands.includes(b)}
                onChange={() => toggleBrand(b)}
                className="rounded border-border text-gold-deep focus:ring-gold accent-[var(--gold)]"
              /> 
              <span className={selectedBrands.includes(b) ? "text-gold-deep font-semibold" : "text-foreground/80"}>{b}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="eyebrow mb-3">Gender</div>
        <div className="space-y-2">
          {["Men", "Women", "Unisex"].map((g) => (
            <label key={g} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedGenders.includes(g)}
                onChange={() => toggleGender(g)}
                className="rounded border-border text-gold-deep focus:ring-gold accent-[var(--gold)]"
              /> 
              <span className={selectedGenders.includes(g) ? "text-gold-deep font-semibold" : "text-foreground/80"}>{g}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="eyebrow mb-3">Max Price</div>
        <input 
          type="range" 
          min={0} 
          max={80000} 
          step={1000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[var(--gold)] cursor-pointer" 
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>KSh 0</span>
          <span className="font-semibold text-gold-deep">KSh {maxPrice.toLocaleString()}</span>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="eyebrow mb-3">Scent Family</div>
        <div className="space-y-2">
          {["Floral", "Woody", "Citrus", "Oud", "Spicy", "Fresh"].map((s) => (
            <label key={s} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedFamilies.includes(s)}
                onChange={() => toggleFamily(s)}
                className="rounded border-border text-gold-deep focus:ring-gold accent-[var(--gold)]"
              /> 
              <span className={selectedFamilies.includes(s) ? "text-gold-deep font-semibold" : "text-foreground/80"}>{s}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );

  return (
    <SiteLayout>
      <div className="container-px py-10">
        <div className="text-center">
          <div className="eyebrow">All Fragrances</div>
          <h1 className="font-serif text-4xl md:text-5xl mt-2">Shop Collection</h1>
          <p className="mt-2 text-muted-foreground">{sorted.length} authentic fragrances found.</p>
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
            
            {sorted.length === 0 ? (
              <div className="text-center py-20 bg-white border border-border rounded-2xl">
                <p className="text-muted-foreground text-base">No products match your selected filters.</p>
                <button onClick={clearAllFilters} className="btn-outline mt-4">Reset All Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {sorted.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
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
