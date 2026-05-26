const navItems = [
  { label: "Platform", href: "/platform" },
  { label: "Contracts", href: "/contracts" },
  { label: "Certification", href: "/certification" },
  { label: "Docs", href: "/docs" },
  { label: "Research", href: "/research" },
];

const risks = [
  "Prompt injection",
  "Unsafe tool access",
  "Sensitive data exposure",
  "Approval bypass",
  "Unbounded delegation",
  "Memory leakage",
];

const capabilities = [
  {
    title: "Behavior Contracts",
    desc: "Define what an agent is allowed to do: tools, data, memory, delegation, approvals, and runtime constraints.",
  },
  {
    title: "Adversarial Testing",
    desc: "Simulate prompt injection, privilege escalation, tool misuse, exfiltration, and approval bypass before deployment.",
  },
  {
    title: "Deployment Certificates",
    desc: "Generate evidence that an agent was validated against its approved behavioral boundary before production access.",
  },
  {
    title: "Runtime Boundary Enforcement",
    desc: "Govern the transition from reasoning to action through policy-aware execution and enforcement points.",
  },
];

const pipeline = [
  "Agent Definition",
  "Behavior Contract",
  "Static Validation",
  "Attack Simulation",
  "Certificate",
  "Deployment Gate",
  "Runtime Boundary",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[520px] w-[620px] rounded-full bg-blue-700/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">
            GuardPrompt
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

        <div className="grid gap-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              DevSecOps assurance for autonomous AI agents
            </div>

            <h1 className="mt-10 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
              Autonomous agents need operational boundaries.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-300">
              GuardPrompt validates, tests, certifies, and enforces AI agent
              behavior before agents access tools, data, memory, or enterprise
              systems.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/contracts"
                className="rounded-2xl bg-cyan-400 px-6 py-4 font-medium text-black shadow-lg shadow-cyan-500/20"
              >
                View Contract Model
              </a>

              <a
                href="/certification"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white hover:bg-white/10"
              >
                See Certificate
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <div className="rounded-3xl border border-white/10 bg-black/50 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Deployment Decision
                </p>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  Certified
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  ["Contract", "Valid"],
                  ["Attack Tests", "119 / 126 Passed"],
                  ["Risk Score", "82 / 100"],
                  ["Recommendation", "Approve with Monitoring"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <span className="text-gray-400">{label}</span>
                    <span className="text-cyan-200">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4 text-sm leading-relaxed text-gray-300">
                Agent passed contract validation but requires monitoring for
                restricted data summarization attempts.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-36 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              The shift
            </p>
            <h2 className="mt-5 text-4xl font-semibold">
              Agents are becoming operational actors.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-gray-300">
            Modern AI agents invoke tools, call APIs, retrieve sensitive data,
            use memory, and delegate tasks. Traditional controls were built for
            humans, applications, and cloud workloads — not adaptive agents
            whose behavior emerges from prompts, tools, context, and runtime
            state.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {risks.map((risk) => (
            <div
              key={risk}
              className="rounded-2xl border border-red-400/10 bg-red-400/[0.04] p-5 text-gray-300"
            >
              {risk}
            </div>
          ))}
        </div>

        <div className="mt-36 grid gap-6 md:grid-cols-4">
          {capabilities.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
            >
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-36 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Assurance pipeline
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-7">
            {pipeline.map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center text-sm text-gray-200"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-36 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Core principle
            </p>
            <h2 className="mt-5 text-4xl font-semibold">
              Govern actions, not thoughts.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Agents may reason dynamically. GuardPrompt governs the transition
              from reasoning to action through explicit contracts, security
              validation, signed certificates, and runtime boundary enforcement.
            </p>
          </div>

          <pre className="overflow-x-auto rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-cyan-100">
{`agent:
  name: finance-assistant
  owner: finance-platform

allowed_tools:
  - policy_search
  - invoice_lookup

denied_tools:
  - shell
  - external_email
  - secrets_read

requires_approval:
  - payment_change
  - bulk_export

memory:
  pii_storage: false
  retention_days: 30

delegation:
  allowed: false`}
          </pre>
        </div>

        <div className="mt-36 rounded-[2rem] border border-cyan-400/10 bg-cyan-400/[0.04] p-10">
          <h2 className="text-3xl font-semibold">
            Built for the agentic software lifecycle.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
            GuardPrompt is designed to become a deployment gate for AI agents:
            scan the agent, validate the contract, run adversarial simulations,
            issue a certificate, and enforce runtime boundaries before
            production access is granted.
          </p>
        </div>

        <footer className="mt-36 flex flex-col gap-4 border-t border-white/10 py-10 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            GuardPrompt is in early development. Initial focus: behavior
            contracts, adversarial testing, deployment certificates, and runtime
            boundary enforcement.
          </p>
          <p>© 2026 GuardPrompt</p>
        </footer>
      </section>
    </main>
  );
}
