import Link from "next/link";
import { formatPrice } from "@/lib/format";

async function fetchPlans() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/plans`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load plans");
  const data = await res.json();
  return data.items as Array<{ slug: string; name: string; price: number; currency: string; features: string[]; isActive: boolean }>;
}

export default async function Pricing() {
  const plans = await fetchPlans();
  const order = ["free", "pro", "corporate", "isp-enterprise"];
  const sorted = plans.sort((a,b)=> order.indexOf(a.slug) - order.indexOf(b.slug));

  return (
    <div className="space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold">Choose the Perfect Plan</h1>
        <p className="text-[var(--muted)]">Start free, scale as you grow. Upgrade anytime to unlock more power.</p>
      </section>

      <div className="grid md:grid-cols-4 gap-4">
        {sorted.map(p => (
          <div key={p.slug} className="card space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{p.name}</h3>
              {!p.isActive && <span className="tag">Coming Soon</span>}
            </div>
            <div className="text-2xl font-extrabold">
              {p.price > 0 ? formatPrice(p.price, p.currency) + "/mo" : (p.slug === "isp-enterprise" ? "Custom" : "Free")}
            </div>
            <ul className="text-sm list-disc pl-5 space-y-1">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>

            {p.slug === "isp-enterprise" && (
              <Link className="btn" href="/contact">Join Waitlist</Link>
            )}
            {p.isActive && p.slug !== "isp-enterprise" && (
              <Link className="btn btn-primary" href={`/billing?plan=${p.slug}`}>Choose {p.name}</Link>
            )}
          </div>
        ))}
      </div>

      <section className="text-center card">
        <p className="text-sm text-[var(--muted)]">
          All plans come with a 7‑day free trial and 14‑day money‑back guarantee. No hidden fees.
        </p>
      </section>
    </div>
  );
}
