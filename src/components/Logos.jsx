function Logos() {
  return (
    <section className="bg-slate-950/80 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-sm text-white/60">Trusted by logistics leaders</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-80">
          {['Velocity','Northline','RoadWorks','Freightr','AxleIQ','TrackHub'].map((brand) => (
            <div key={brand} className="h-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-white/70 text-sm">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
