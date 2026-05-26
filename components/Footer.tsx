export default function Footer() {
  return (
    <footer className="mt-36 border-t border-white/10 py-10 text-sm text-gray-500">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p>
          GuardPrompt is in early development. Initial focus: behavior contracts,
          adversarial testing, deployment certificates, and runtime boundary
          enforcement for autonomous AI agents.
        </p>

        <div className="flex gap-5">
          <a href="/docs" className="hover:text-white">
            Docs
          </a>
          <a href="/research" className="hover:text-white">
            Research
          </a>
          <a href="https://github.com/hugginai/guardprompt-site" className="hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
