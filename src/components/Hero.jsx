import { motion } from 'framer-motion'

const rows = [
  { name: 'AI Sales Employee', action: 'Booked a call with Sarah K.', time: '2 min ago' },
  { name: 'AI Receptionist', action: 'Replied on WhatsApp, booked appt.', time: '6 min ago' },
  { name: 'AI Customer Support', action: 'Resolved an order status question.', time: '14 min ago' },
  { name: 'AI Finance Assistant', action: 'Sent 3 payment reminders.', time: '1 hr ago' },
]

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-14 items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full mb-6 bg-accent-soft text-accent-dark">
          <span className="dot animate-pulse" /> For service businesses
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
          Build AI systems that help your business grow
        </h1>
        <p className="text-lg mb-9 max-w-md text-muted">
          We help service businesses automate sales, customer support, and operations
          using AI — so your team spends less time on repetitive work and more time
          growing the business.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#cta"
            className="bg-ink text-white font-medium px-6 py-3 rounded-full hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            Book Free AI Audit
          </a>
          <a
            href="#solutions"
            className="border border-border font-medium px-6 py-3 rounded-full hover:border-ink hover:bg-graybg hover:-translate-y-0.5 transition-all"
          >
            See our solutions
          </a>
        </div>
        <div className="flex items-center gap-6 mt-10 font-mono text-xs text-muted">
          <span>Clinics</span>
          <span>·</span>
          <span>Real estate</span>
          <span>·</span>
          <span>Law firms</span>
          <span>·</span>
          <span>Agencies</span>
        </div>
      </motion.div>

      {/* Signature element: live "AI team" roster, styled as a real product panel */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute rounded-full blur-3xl z-0"
          style={{ width: 280, height: 280, top: -40, right: -40, background: 'rgba(242,166,90,0.22)' }}
          animate={{ x: [0, -12, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="card relative z-10 p-2 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="rounded-xl overflow-hidden bg-graybg">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <span className="font-mono text-xs font-medium text-muted">YOUR AI TEAM</span>
              <span className="font-mono text-xs flex items-center gap-1.5 text-ok">
                <span className="dot animate-pulse" />
                All systems active
              </span>
            </div>
            <div className="bg-white">
              {rows.map((row, i) => (
                <motion.div
                  key={row.name}
                  className="flex items-center justify-between px-5 py-4 border-b border-border last:border-b-0"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div>
                    <p className="font-medium text-sm">{row.name}</p>
                    <p className="text-xs mt-0.5 text-muted">{row.action}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{row.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
