import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products } from "@/data/products";
import { Heart, MessageCircle, Minus, Plus, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} | JS Perfumes Kenya` },
      { name: "description", content: `Buy ${loaderData?.product.name} authentic ${loaderData?.product.brand} fragrance from JS Perfumes Kenya. Delivery nationwide.` },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout><div className="container-px py-20 text-center">Product not found.</div></SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout><div className="container-px py-20 text-center">Something went wrong.</div></SiteLayout>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "notes" | "delivery" | "reviews">("description");
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <SiteLayout>
      <div className="container-px py-8 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-gold-deep">Home</Link> / <Link to="/shop" className="hover:text-gold-deep">Shop</Link> / <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container-px grid md:grid-cols-2 gap-10">
        <div className="grid grid-cols-[80px_1fr] gap-3">
          <div className="flex md:flex-col gap-3 order-2 md:order-1 col-span-2 md:col-span-1">
            {[product.image, product.image, product.image].map((src, i) => (
              <div key={i} className="aspect-square w-20 rounded-lg border border-border overflow-hidden bg-white">
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2 col-span-2 md:col-span-1">
            <div className="aspect-square rounded-2xl bg-white border border-border overflow-hidden">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow">{product.brand}</div>
          <h1 className="font-serif text-3xl md:text-4xl mt-2">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="text-gold">★★★★★</span>
            <span className="text-muted-foreground">{product.rating ?? 4.7} · Verified reviews</span>
          </div>
          <div className="mt-5 flex items-baseline gap-3">
            {product.oldPrice && <span className="text-muted-foreground line-through">KSh {product.oldPrice.toLocaleString()}</span>}
            <span className="font-serif text-3xl text-gold-deep">KSh {product.price.toLocaleString()}</span>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed">A signature fragrance from {product.brand}. {product.notes}. Long lasting projection with a clean, elegant dry-down.</p>

          <div className="mt-6">
            <div className="eyebrow mb-2">Size</div>
            <div className="flex gap-2">
              {["50ml", "100ml", "Travel 10ml"].map((s, i) => (
                <button key={s} className={`px-4 py-2 rounded-full border text-sm ${i === 1 ? "border-gold text-gold-deep bg-secondary" : "border-border hover:border-gold"}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="inline-flex items-center border border-border rounded-full">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3"><Minus className="h-4 w-4" /></button>
              <span className="px-3 text-sm w-8 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-3"><Plus className="h-4 w-4" /></button>
            </div>
            <button className="btn-gold flex-1 justify-center"><ShoppingBag className="h-4 w-4" /> Add to Cart</button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a href={`https://wa.me/254799517888?text=Hi, I'd like to order ${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" /> Buy via WhatsApp</a>
            <button className="btn-outline"><Heart className="h-4 w-4" /> Wishlist</button>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 bg-white border border-border rounded-lg p-3"><ShieldCheck className="h-4 w-4 text-gold" /> 100% Authentic</div>
            <div className="flex items-center gap-2 bg-white border border-border rounded-lg p-3"><Truck className="h-4 w-4 text-gold" /> Fast Delivery</div>
            <div className="flex items-center gap-2 bg-white border border-border rounded-lg p-3"><MessageCircle className="h-4 w-4 text-gold" /> Expert Help</div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="container-px mt-16">
        <div className="border-b border-border flex flex-wrap gap-1">
          {(["description", "notes", "delivery", "reviews"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-5 py-3 text-sm capitalize ${tab === t ? "border-b-2 border-gold text-gold-deep" : "text-muted-foreground"}`}>
              {t === "notes" ? "Fragrance Notes" : t === "delivery" ? "Delivery & Returns" : t}
            </button>
          ))}
        </div>
        <div className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-3xl">
          {tab === "description" && (
            <p>{product.name} is an authentic {product.brand} fragrance offered by JS Perfumes Kenya. Hand-checked for authenticity and dispatched same-day from our Nairobi warehouse.</p>
          )}
          {tab === "notes" && (
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border border-border rounded-xl p-4"><div className="eyebrow">Top Notes</div><div className="mt-1 font-serif text-lg">Bergamot, Citrus</div></div>
              <div className="bg-white border border-border rounded-xl p-4"><div className="eyebrow">Heart Notes</div><div className="mt-1 font-serif text-lg">Rose, Spice</div></div>
              <div className="bg-white border border-border rounded-xl p-4"><div className="eyebrow">Base Notes</div><div className="mt-1 font-serif text-lg">Oud, Amber, Musk</div></div>
              <div className="bg-white border border-border rounded-xl p-4"><div className="eyebrow">Scent Family</div><div className="mt-1 font-serif text-lg">{product.notes}</div></div>
              <div className="bg-white border border-border rounded-xl p-4"><div className="eyebrow">Longevity</div><div className="mt-1 font-serif text-lg">8–10 hours</div></div>
              <div className="bg-white border border-border rounded-xl p-4"><div className="eyebrow">Projection</div><div className="mt-1 font-serif text-lg">Strong</div></div>
            </div>
          )}
          {tab === "delivery" && (
            <ul className="list-disc pl-5 space-y-1">
              <li>Same-day dispatch within Nairobi and Mombasa.</li>
              <li>Nationwide delivery in 1–3 business days.</li>
              <li>Free pickup from both branches.</li>
              <li>Returns accepted on unopened items within 7 days.</li>
            </ul>
          )}
          {tab === "reviews" && <p>★★★★★ (Verified) — “Lovely scent, lasts all day. Will buy again.” — A. Mwangi</p>}
        </div>
      </div>

      {/* RELATED */}
      <div className="container-px mt-16">
        <h2 className="font-serif text-2xl md:text-3xl">You May Also Like</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </SiteLayout>
  );
}
