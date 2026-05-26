const navItems = [
  { label: "Platform", href: "/platform" },
  { label: "Contracts", href: "/contracts" },
  { label: "Certification", href: "/certification" },
  { label: "Docs", href: "/docs" },
  { label: "Research", href: "/research" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="group flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
          GP
        </div>
        <span className="text-xl font-semibold tracking-tight text-white">
          GuardPrompt
        </span>
      </a>

      <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-white">
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="/docs"
        className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 md:inline-flex"
      >
        Early Access
      </a>
    </nav>
  );
}
