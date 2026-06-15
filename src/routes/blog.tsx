import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
const p1 = "/categories/cat-niche.jpg";
const p2 = "/categories/cat-men.jpg";
const p3 = "/categories/cat-women.jpg";


export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Fragrance Journal | JS Perfumes Kenya" }] }),
  component: Blog,
});

const posts = [
  { t: "How To Choose Your Signature Scent", e: "Style", img: p1 },
  { t: "The Difference Between Oud and Bakhoor", e: "Arabic Luxury", img: p2 },
  { t: "Best Perfumes For Men In Kenya", e: "Edit", img: p2 },
  { t: "Best Perfumes For Women In Kenya", e: "Edit", img: p3 },
  { t: "How To Make Your Perfume Last Longer", e: "Tips", img: p1 },
  { t: "Designer vs Niche Fragrances", e: "Guide", img: p1 },
  { t: "Best Gift Sets For Special Occasions", e: "Gifting", img: p3 },
];

function Blog() {
  return (
    <SiteLayout>
      <section className="container-px py-12 text-center">
        <div className="eyebrow">Fragrance Journal</div>
        <h1 className="font-serif text-4xl md:text-5xl mt-2">Stories, Notes &amp; Guides</h1>
      </section>
      <section className="container-px grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {posts.map((p) => (
          <Link to="/blog" key={p.t} className="bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <div className="eyebrow">{p.e}</div>
              <div className="font-serif text-xl mt-2">{p.t}</div>
              <div className="mt-3 text-sm text-gold-deep">Read article →</div>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
