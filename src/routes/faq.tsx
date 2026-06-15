import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ | JS Perfumes Kenya" }] }),
  component: FAQ,
});

const faqs = [
  { q: "Are your perfumes authentic?", a: "Yes. Every fragrance we sell is sourced through trusted distributors and inspected before dispatch." },
  { q: "Do you deliver across Kenya?", a: "We deliver nationwide in 1–3 business days. Same-day delivery is available within Nairobi and Mombasa." },
  { q: "Where are your branches?", a: "Nairobi: BBS Mall, GFB090. Mombasa: Makadara Road." },
  { q: "Do you accept M-Pesa?", a: "Yes, M-Pesa is our primary payment method along with cash on delivery and bank transfer." },
  { q: "Can I order through WhatsApp?", a: "Absolutely. Tap the WhatsApp button on any page or message us at 0799 517 888." },
  { q: "Do you sell gift sets?", a: "Yes — beautifully wrapped curations for any occasion." },
  { q: "Do you have oud and bukhoor?", a: "Yes, an extensive Arabic luxury collection of ouds, bukhoors, oils and incense burners." },
  { q: "Can you recommend a perfume for me?", a: "Use our Fragrance Finder or message us — we're happy to consult." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <SiteLayout>
      <section className="container-px py-12 text-center">
        <div className="eyebrow">Help Center</div>
        <h1 className="font-serif text-4xl md:text-5xl mt-2">Frequently Asked Questions</h1>
      </section>
      <section className="container-px max-w-3xl pb-20">
        {faqs.map((f, i) => (
          <button key={f.q} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left bg-white border border-border rounded-2xl p-5 mb-3">
            <div className="flex justify-between items-center gap-3">
              <span className="font-serif text-lg">{f.q}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </div>
            {open === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
          </button>
        ))}
      </section>
    </SiteLayout>
  );
}
