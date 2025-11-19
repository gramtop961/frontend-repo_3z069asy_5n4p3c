import { Map, Timer, ShieldCheck, BarChart3, Truck, Settings } from 'lucide-react'

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:bg-slate-900 transition">
      <div className="h-11 w-11 rounded-lg bg-blue-500/15 text-blue-400 grid place-items-center mb-4 group-hover:bg-blue-500/20">
        <Icon size={20} />
      </div>
      <h3 className="text-white font-medium text-lg">{title}</h3>
      <p className="text-slate-300/80 mt-1 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Everything you need to run modern logistics</h2>
          <p className="mt-3 text-slate-300/80">From dispatch to invoicing, manage your end‑to‑end operations with real‑time insights and automation.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Map} title="Live GPS & Route Optimization" desc="Track vehicles in real time and automatically choose the fastest, most efficient routes." />
          <FeatureCard icon={Timer} title="Smart Dispatch" desc="Assign loads instantly based on driver hours, proximity, equipment, and performance." />
          <FeatureCard icon={ShieldCheck} title="Compliance & Safety" desc="DVIR, HOS, IFTA, and safety scoring built‑in to keep your fleet compliant and protected." />
          <FeatureCard icon={BarChart3} title="Analytics & Cost Control" desc="Understand costs per mile, asset utilization, and on‑time performance with clear dashboards." />
          <FeatureCard icon={Truck} title="Telematics & Maintenance" desc="Get vehicle health alerts, plan services, and avoid breakdowns with predictive maintenance." />
          <FeatureCard icon={Settings} title="Open Integrations" desc="Connect ELDs, fuel cards, TMS/ERP, and carriers via our robust APIs and webhooks." />
        </div>
      </div>
    </section>
  )
}

export default Features
