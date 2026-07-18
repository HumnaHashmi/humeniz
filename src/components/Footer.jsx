export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Humeniz logo" className="w-5 h-5 rounded-md" />
          <span>© 2026 Humeniz. All rights reserved.</span>
        </div>
        <span className="font-mono text-xs">Built for service businesses.</span>
      </div>
    </footer>
  )
}
