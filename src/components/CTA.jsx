function CTA() {
  return (
    <section id="pricing" className="relative bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Cut idle time. Boost on‑time delivery.</h3>
              <p className="mt-3 text-slate-300/80 max-w-xl">See how our platform reduces operating costs and improves performance in weeks, not months.</p>
              <ul className="mt-6 space-y-2 text-white/80 text-sm">
                <li>• Average 18% fewer empty miles</li>
                <li>• 25% faster dispatching</li>
                <li>• Full audit trail and compliance reports</li>
              </ul>
            </div>
            <div className="rounded-xl bg-slate-950/50 border border-white/10 p-6">
              <div className="grid grid-cols-2 gap-3 text-white/90 text-sm">
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-3xl font-semibold">$0</p>
                  <p className="opacity-70">Start today</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-3xl font-semibold">14d</p>
                  <p className="opacity-70">Free trial</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-3xl font-semibold">24/7</p>
                  <p className="opacity-70">Support</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4">
                  <p className="text-3xl font-semibold">SOC2</p>
                  <p className="opacity-70">Compliance</p>
                </div>
              </div>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/20 transition">Get started</a>
              <p className="mt-3 text-center text-xs text-white/60">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
