import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white font-bold">
            F
          </div>
          <div className="text-white">
            <p className="text-sm leading-none opacity-70">FlareFleet</p>
            <p className="text-lg font-semibold leading-none">Logistics Cloud</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:inline-flex px-4 py-2 text-white/90 hover:text-white transition">Sign in</a>
          <a href="#" className="inline-flex px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 transition">Book a demo</a>
          <button className="md:hidden h-10 w-10 grid place-items-center rounded-lg bg-white/10 border border-white/20 text-white">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
