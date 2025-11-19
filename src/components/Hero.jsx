import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* dark gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-6 flex items-end pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-white/80 text-xs mb-4 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live fleet visibility
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Orchestrate your entire fleet and freight operations
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed">
              FlareFleet unifies dispatch, route optimization, compliance, telematics, and billing into one secure platform.
              Built for high‑velocity logistics teams.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/20 transition">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white px-5 py-3 font-medium transition">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-white/70">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full border border-white/20" />
                <img src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full border border-white/20" />
                <img src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full border border-white/20" />
                <img src="https://i.pravatar.cc/40?img=4" className="h-8 w-8 rounded-full border border-white/20" />
              </div>
              <p className="text-sm">Trusted by 2,500+ drivers and 120+ logistics teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
