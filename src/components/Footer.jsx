export default function Footer() {
  return (
    <footer className="border-t border-border pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.svg" alt="Humeniz logo" className="w-6 h-6 rounded-md" />
            <span className="font-display font-semibold">Humeniz</span>
          </div>
          <p className="text-sm text-muted">Building AI systems that help businesses save time and grow.</p>
        </div>
        <div>
          <p className="font-medium text-sm mb-3">Services</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>AI Sales Employee</li>
            <li>AI Receptionist</li>
            <li>AI Customer Support</li>
            <li>Lead Follow-up Automation</li>
            <li>CRM Automation</li>
            <li>Appointment Booking</li>
            <li>Marketing Automation</li>
            <li>Finance Automation</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-sm mb-3">Industries</p>
          <ul className="space-y-2 text-sm text-muted">
             <li>Medical Clinics</li>
            <li>Law Firms</li>
             <li>Real Estate</li>
            <li>Marketing Agencies</li>
            <li>Consultants & Coaches</li>
            <li>Accounting Firms</li>
            <li>Home Services</li>
          </ul>
        </div>
       <div>
  <p className="font-medium text-sm mb-3">Get in touch</p>

  <ul className="space-y-2 text-sm text-muted">
    <li>
      <a
        href="mailto:hello@humeniz.ai"
        className="hover:text-foreground transition-colors"
      >
        hello@humeniz.ai
      </a>
    </li>

    <li>
      <a
        href="https://www.instagram.com/humeniz.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        Instagram
      </a>
    </li>

    {/* <li>
      <a
        href="https://www.linkedin.com/company/humeniz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        LinkedIn
      </a>
    </li> */}
  </ul>
</div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>© 2026 Humeniz. All rights reserved.</span>
        <span className="font-mono text-xs">Built for service businesses.</span>
      </div>
    </footer>
  )
}