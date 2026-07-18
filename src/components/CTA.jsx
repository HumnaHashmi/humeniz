import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section id="cta" className="max-w-6xl mx-auto px-6 pb-28">
      <Reveal className="rounded-3xl p-14 text-center bg-indigo relative overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{ width: 320, height: 320, bottom: -120, left: '50%', transform: 'translateX(-50%)', background: 'rgba(242,166,90,0.18)' }}
        />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to build your AI team?
          </h2>
          <p className="mb-8 text-white/60">Book your free AI audit today — no cost, no commitment.</p>
          <a
            href="#"
            className="inline-block bg-accent text-ink font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark hover:-translate-y-0.5 transition-all"
          >
            Book Free AI Audit
          </a>
        </div>
      </Reveal>
    </section>
  )
}
