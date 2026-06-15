import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact JS Perfumes Kenya" }] }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="container-px py-12 text-center">
        <div className="eyebrow">Get In Touch</div>
        <h1 className="font-serif text-4xl md:text-5xl mt-2">Visit JS Perfumes</h1>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Two boutiques. One promise — authentic luxury fragrances, expertly served.</p>
      </section>

      <section className="container-px grid md:grid-cols-2 gap-5">
        {[
          { city: "Nairobi", addr: "BBS Mall, GFB090", phone: "+254799517888", d: "0799 517 888" },
          { city: "Mombasa", addr: "Makadara Road", phone: "+254740069569", d: "0740 069 569" },
        ].map((b) => (
          <div key={b.city} className="bg-white border border-border rounded-2xl p-8">
            <div className="eyebrow">{b.city} Branch</div>
            <div className="font-serif text-2xl mt-2">{b.addr}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> {b.d}</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Mon–Sat 9am–8pm · Sun 10am–6pm</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={`tel:${b.phone}`} className="btn-outline"><Phone className="h-4 w-4" /> Call</a>
              <a href={`https://wa.me/${b.phone.replace("+", "")}`} className="btn-outline"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href="#" className="btn-outline"><MapPin className="h-4 w-4" /> Directions</a>
            </div>
          </div>
        ))}
      </section>

      <section className="container-px mt-12 grid md:grid-cols-[1fr_1fr] gap-5">
        <form className="bg-white border border-border rounded-2xl p-8 space-y-4">
          <div className="font-serif text-2xl">Send us a message</div>
          <input placeholder="Name" className="w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" />
          <input placeholder="Email" className="w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" />
          <input placeholder="Phone" className="w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" />
          <textarea placeholder="Message" rows={5} className="w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" />
          <button type="button" className="btn-gold w-full justify-center">Send Message</button>
        </form>
        <div className="bg-white border border-border rounded-2xl overflow-hidden min-h-[300px] grid place-items-center text-muted-foreground">
          <div className="text-center p-8">
            <MapPin className="h-10 w-10 text-gold mx-auto" />
            <div className="font-serif text-xl mt-3">Find us on the map</div>
            <div className="text-sm mt-1">Nairobi · Mombasa</div>
            <div className="mt-4 flex justify-center gap-3 text-sm">
              <a href="https://instagram.com/jsperfumeske" className="inline-flex items-center gap-1 hover:text-gold-deep"><Instagram className="h-4 w-4" /> @jsperfumeske</a>
              <span>·</span>
              <a href="mailto:hello@jsperfumes.co.ke" className="inline-flex items-center gap-1 hover:text-gold-deep"><Mail className="h-4 w-4" /> hello@jsperfumes.co.ke</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
