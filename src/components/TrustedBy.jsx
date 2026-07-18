const industries = [
  'Medical Clinics',
  'Real Estate Agencies',
  'Marketing Agencies',
  'Law Firms',
  'Accounting Firms',
  'Consultants',
  'Coaches',
  'Home Services',
]

export default function TrustedBy() {
  return (
    <section className="border-y border-border bg-graybg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <p className="text-center font-mono text-xs mb-6 text-muted">
            AI SOLUTIONS FOR EVERY STAGE OF YOUR BUSINESS
        </p>
      </div>
      <div
        className="pb-10"
        style={{ maskImage: 'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)' }}
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite]">
          {[0, 1].map((set) => (
            <div key={set} className="flex gap-12 text-sm font-medium pr-12 text-muted">
              {industries.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
