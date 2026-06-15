import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { byCategory, categories, products } from "@/data/products";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    return { meta: [
      { title: `${cat?.name ?? "Category"} | JS Perfumes Kenya` },
      { name: "description", content: `Shop ${cat?.name ?? "fragrances"} at JS Perfumes Kenya. Authentic, fast delivery across Kenya.` },
    ] };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const cat = categories.find((c) => c.slug === slug);
  const items = slug === "offers" ? products.filter((p) => p.oldPrice) : slug === "new" ? products.slice(0, 8) : byCategory(slug);

  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setVisibleCount(12);
  }, [slug]);

  const visibleItems = items.slice(0, visibleCount);

  return (
    <SiteLayout>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2218] to-[#5a4827]" />
        <div className="container-px relative py-16 md:py-24 text-white">
          <div className="eyebrow text-gold">Collection</div>
          <h1 className="font-serif text-4xl md:text-6xl mt-2">{cat?.name ?? "Category"}</h1>
          <p className="mt-3 max-w-xl text-white/85">A curated edit of {cat?.name?.toLowerCase() ?? "fragrances"} from JS Perfumes — authentic, beautifully presented and ready to ship.</p>
        </div>
      </section>

      <div className="container-px py-10">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products in this collection yet.</p>
            <Link to="/shop" className="btn-outline mt-4">Browse All</Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {visibleItems.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>

            {items.length > visibleCount && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                  className="h-[56px] px-10 bg-transparent border border-gold text-gold hover:bg-gold hover:text-white font-semibold text-xs tracking-widest uppercase rounded-[10px] flex items-center justify-center transition-all duration-300"
                >
                  LOAD MORE
                </button>
              </div>
            )}
          </>
        )}

        <div className="mt-16 bg-white border border-border rounded-2xl p-8 text-muted-foreground text-sm leading-relaxed">
          <h2 className="font-serif text-2xl text-foreground">About {cat?.name ?? "this collection"}</h2>
          <p className="mt-3">
            At JS Perfumes Kenya we curate {cat?.name?.toLowerCase() ?? "fragrances"} from the world's most loved houses — designer, niche and Arabic. Every bottle is checked for authenticity and shipped from our Nairobi or Mombasa branches with fast nationwide delivery.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
