export default function Footer() {
  return (
    <footer className="mt-36 border-t border-white/10 py-10 text-sm text-gray-500">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p>
            GuardPrompt is in early development. Initial focus: behavior
            contracts, adversarial testing, deployment certificates, and runtime
            boundary enforcement for autonomous AI agents.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="mailto:founders@guardprompt.com?subject=GuardPrompt%20Early%20Access"
              className="text-cyan-300 hover:text-cyan-200"
            >
              founders@guardprompt.com
            </a>

            <a href="/contact" className="hover:text-white">
              Contact
            </a>

            <a
              href="https://github.com/hugginai/guardprompt-site"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        <a
          href="/contact"
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white hover:bg-white/[0.06]"
        >
          Request Early Access
        </a>
      </div>
    </footer>
  );
}
