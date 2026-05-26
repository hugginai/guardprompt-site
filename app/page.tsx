const features = [
  {
    title: "Behavior Contracts",
    desc: "Define approved tools, data access, memory rules, delegation limits, approvals, and runtime constraints.",
  },
  {
    title: "Adversarial Testing",
    desc: "Simulate prompt injection, tool misuse, privilege escalation, exfiltration, and approval bypass before deployment.",
  },
  {
    title: "Deployment Certificates",
    desc: "Generate signed evidence that an agent was validated against its approved operational contract.",
  },
  {
    title: "Runtime Boundaries",
    desc: "Ensure agents can reason dynamically while actions remain constrained by enforceable policies.",
  },
];

const risks = [
  "Unrestricted MCP tools",
  "Unsafe delegation chains",
  "Sensitive data exfiltration",
  "Approval bypass",
  "Memory leakage",
  "Excessive agency",
];

const flow = [
  "Agent Definition",
  "Behavior Contract",
  "Static Validation",
  "Attack Simulation",
  "Certificate",
  "Deployment Gate",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-blue-700/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold tracking-tight">
            GuardPrompt
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#problem" className="hover:text-white">
              Problem
            </a>

            <a href="#platform" className="hover:text-white">
              Platform
            </a>

            <a href="/contracts" className="hover:text-white">
              Contracts
            </a>

            <a href="/certification" className="hover:text-white">
              Certification
            </a>
          </div>
        </nav>

        <div className="grid gap-16 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
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
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Deployment Decision
              </p>

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
            </div>
          </div>
        </div>

        <div id="problem" className="mt-36 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              The problem
            </p>

            <h2 className="mt-5 text-4xl font-semibold">
              Agents are no longer just chat interfaces.
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-gray-300">
            Modern agents invoke tools, call APIs, retrieve sensitive data, use
            memory, and delegate tasks. Traditional controls were built for
            humans, applications, and cloud workloads — not adaptive agents whose
            behavior emerges from prompts, tools, context, and runtime state.
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

        <div id="platform" className="mt-36 grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
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

          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {flow.map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center text-sm text-gray-200"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-36 border-t border-white/10 py-10 text-sm text-gray-500">
          GuardPrompt is in early development. Initial focus: behavior
          contracts, adversarial testing, deployment certificates, and runtime
          boundary enforcement for AI agents.
        </footer>
      </section>
    </main>
  );
}
