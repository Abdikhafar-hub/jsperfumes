import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout | JS Perfumes Kenya" }] }),
  component: Checkout,
});

function Checkout() {
  return (
    <SiteLayout>
      <div className="container-px py-10">
        <h1 className="font-serif text-4xl">Checkout</h1>
        <div className="mt-8 grid lg:grid-cols-[1fr_380px] gap-8">
          <form className="bg-white border border-border rounded-2xl p-6 md:p-8 space-y-5">
            <div className="font-serif text-xl">Delivery Details</div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" />
              <Field label="Phone" placeholder="07XX XXX XXX" />
              <Field label="Email" type="email" />
              <Field label="County" />
              <Field label="Town" />
              <Field label="Delivery Address" full />
              <Field label="Order Notes (optional)" full />
            </div>
            <div className="font-serif text-xl pt-4 border-t border-border">Payment Method</div>
            <div className="grid sm:grid-cols-3 gap-3">
              {["M-Pesa", "Cash on Delivery", "Bank Transfer"].map((p, i) => (
                <label key={p} className={`border rounded-xl p-4 cursor-pointer ${i === 0 ? "border-gold bg-secondary" : "border-border"}`}>
                  <input type="radio" name="pay" defaultChecked={i === 0} className="mr-2 accent-[var(--gold)]" /> {p}
                </label>
              ))}
            </div>
            <button type="button" className="btn-gold w-full justify-center mt-4">Place Order</button>
          </form>
          <aside className="bg-white border border-border rounded-2xl p-6 h-fit lg:sticky lg:top-24">
            <div className="font-serif text-xl">Order Summary</div>
            <div className="mt-4 space-y-2 text-sm">
              <Row label="Items (3)" value="KSh 17,500" />
              <Row label="Shipping" value="Free" />
              <div className="border-t border-border pt-3"><Row label="Total" value="KSh 17,500" bold /></div>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}

function Field({ label, type = "text", placeholder, full }: { label: string; type?: string; placeholder?: string; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs text-muted-foreground">{label}</span>
      <input type={type} placeholder={placeholder} className="mt-1 w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
    </label>
  );
}
function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return <div className={`flex justify-between ${bold ? "font-serif text-lg text-gold-deep" : ""}`}><span>{label}</span><span>{value}</span></div>;
}
