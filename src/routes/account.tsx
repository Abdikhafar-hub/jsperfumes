import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account | JS Perfumes Kenya" }] }),
  component: Account,
});

function Account() {
  return (
    <SiteLayout>
      <div className="container-px py-12 max-w-md mx-auto">
        <h1 className="font-serif text-4xl text-center">My Account</h1>
        <div className="mt-8 bg-white border border-border rounded-2xl p-8 space-y-4">
          <input placeholder="Email or Phone" className="w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" />
          <input placeholder="Password" type="password" className="w-full bg-ivory border border-border rounded-lg px-3 py-2.5 text-sm" />
          <button className="btn-gold w-full justify-center">Sign In</button>
          <div className="text-center text-sm text-muted-foreground">No account? <a href="#" className="text-gold-deep">Create one</a></div>
        </div>
      </div>
    </SiteLayout>
  );
}
