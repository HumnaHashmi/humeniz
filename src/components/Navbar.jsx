export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
       <div className="flex items-center gap-2.5">
        <img src="/logo.svg" alt="Humeniz logo" className="w-8 h-8 rounded-lg" />
        <span className="font-display font-semibold text-lg">Humeniz</span>
      </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#solutions" className="text-muted hover:text-ink transition-colors">
            Solutions
          </a>
          <a href="#how-it-works" className="text-muted hover:text-ink transition-colors">
            How it works
          </a>
          <a href="#why" className="text-muted hover:text-ink transition-colors">
            Why Humeniz
          </a>
        </nav>
        <a
          href="#cta"
          className="bg-ink text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-accent-dark hover:-translate-y-0.5 transition-all"
        >
          Book Free AI Audit
        </a>
      </div>
    </header>
  )
}
