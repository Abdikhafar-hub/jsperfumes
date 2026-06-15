import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ShieldCheck, Sparkles, Award, Truck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About JS Perfumes Kenya" }, { name: "description", content: "JS Perfumes is a premium fragrance retailer in Nairobi and Mombasa, Kenya." }] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2218] to-[#5a4827]" />
        <div className="relative container-px py-20 text-white text-center">
          <div className="eyebrow text-gold">Our Story</div>
          <h1 className="font-serif text-4xl md:text-6xl mt-2">Essence of Luxury</h1>
          <p className="mt-4 max-w-xl mx-auto text-white/80">JS Perfumes is Kenya's destination for authentic designer, niche and Arabic fragrances.</p>
        </div>
      </section>

      <section className="container-px py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl">Born in Nairobi. Loved across Kenya.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We started JS Perfumes with one simple mission — to make authentic luxury fragrances accessible to every Kenyan. Whether you're sourcing a bold designer signature, a rare niche extrait, or a soulful oud from the heart of Arabia, you'll find it shelved in our Nairobi and Mombasa boutiques.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every bottle we sell is hand-inspected. Every order is dispatched with care. And every customer leaves with something they truly love.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { i: ShieldCheck, t: "100% Authentic", s: "Sourced from trusted distributors." },
            { i: Award, t: "Curated Selection", s: "Designer, niche & Arabic in one place." },
            { i: Truck, t: "Nationwide Delivery", s: "1–3 days across all 47 counties." },
            { i: Sparkles, t: "Personal Service", s: "Expert fragrance consultations." },
          ].map((x) => (
            <div key={x.t} className="bg-white border border-border rounded-2xl p-6">
              <x.i className="h-6 w-6 text-gold" />
              <div className="font-serif text-lg mt-3">{x.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px pb-20">
        <div className="rounded-3xl bg-white border border-border p-10 text-center">
          <h2 className="font-serif text-3xl">Visit our boutiques</h2>
          <p className="mt-2 text-muted-foreground">Nairobi · BBS Mall, GFB090 &nbsp; · &nbsp; Mombasa · Makadara Road</p>
          <Link to="/shop" className="btn-gold mt-6">Shop the Collection</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
