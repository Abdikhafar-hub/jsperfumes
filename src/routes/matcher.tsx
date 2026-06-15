import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { MessageCircle, RefreshCw } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/matcher")({
  head: () => ({ meta: [{ title: "Fragrance Finder | JS Perfumes Kenya" }] }),
  component: Matcher,
});

const steps = [
  { q: "Who is the fragrance for?", opts: ["Men", "Women", "Unisex"] },
  { q: "What scent style do you love?", opts: ["Fresh", "Sweet", "Woody", "Spicy", "Floral", "Oud", "Musky", "Citrus"] },
  { q: "What's your budget?", opts: ["Under KSh 3,000", "KSh 3,000–7,000", "KSh 7,000–15,000", "Above KSh 15,000"] },
  { q: "For which occasion?", opts: ["Daily wear", "Office", "Wedding", "Gift", "Evening", "Special occasion"] },
];

function Matcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= steps.length;

  const pick = (o: string) => {
    setAnswers((a) => [...a, o]);
    setStep((s) => s + 1);
  };
  const reset = () => { setStep(0); setAnswers([]); };

  const recs = products.slice(0, 4);

  return (
    <SiteLayout>
      <section className="container-px py-12 text-center">
        <div className="eyebrow">Fragrance Finder</div>
        <h1 className="font-serif text-4xl md:text-5xl mt-2">Find Your Signature Scent</h1>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">A few quick questions and we'll recommend perfumes you'll love.</p>
      </section>

      <section className="container-px max-w-3xl">
        {!done ? (
          <div className="bg-white border border-border rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Step {step + 1} of {steps.length}</span>
              <button onClick={reset} className="inline-flex items-center gap-1 hover:text-gold-deep"><RefreshCw className="h-3 w-3" /> Restart</button>
            </div>
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gold transition-all" style={{ width: `${((step) / steps.length) * 100}%` }} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl mt-6">{steps[step].q}</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {steps[step].opts.map((o) => (
                <button key={o} onClick={() => pick(o)} className="text-left border border-border rounded-xl px-5 py-4 bg-ivory hover:border-gold hover:bg-secondary transition">{o}</button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-white border border-border rounded-3xl p-8 md:p-10 text-center">
              <div className="eyebrow">Your Recommendations</div>
              <h2 className="font-serif text-3xl mt-2">Based on your preferences</h2>
              <p className="mt-2 text-muted-foreground text-sm">{answers.join(" · ")}</p>
              <a href="https://wa.me/254799517888" className="btn-gold mt-5"><MessageCircle className="h-4 w-4" /> Get Expert Recommendation</a>
              <button onClick={reset} className="btn-outline ml-2 mt-5">Restart</button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {recs.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            <div className="mt-10 text-center">
              <Link to="/shop" className="btn-outline">Browse All Fragrances</Link>
            </div>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
