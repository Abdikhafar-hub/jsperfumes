import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist | JS Perfumes Kenya" }] }),
  component: Wishlist,
});

function Wishlist() {
  const saved = products.slice(0, 4);
  return (
    <SiteLayout>
      <div className="container-px py-10">
        <h1 className="font-serif text-4xl">Your Wishlist</h1>
        <p className="text-muted-foreground text-sm mt-1">{saved.length} fragrances saved</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {saved.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-10"><Link to="/shop" className="btn-outline">Continue Shopping</Link></div>
      </div>
    </SiteLayout>
  );
}
