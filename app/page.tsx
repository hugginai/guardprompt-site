const features = [
  {
    title: "Behavior Contracts",
    desc: "Define what an AI agent is allowed to do: tools, data access, memory, delegation, approvals, and runtime limits.",
  },
  {
    title: "Security Testing",
    desc: "Run pre-deployment simulations for prompt injection, unsafe tool use, privilege escalation, exfiltration, and approval bypass.",
  },
  {
    title: "Deployment Certificates",
    desc: "Generate evidence that an agent was validated against its approved behavior contract before production access.",
  },
  {
    title: "Runtime Boundaries",
    desc: "Ensure agents can reason dynamically while actions remain constrained by enforceable operational policies.",
  },
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
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">GuardPrompt</div>
          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#problem" className="hover:text-white">Problem</a>
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#contracts" className="hover:text-white">Contracts</a>
            <a href="#docs" className="hover:text-white">Docs</a>
          </div>
        </nav>

        <div className="mt-28 max-w-5xl">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            DevSecOps assurance for autonomous AI agents
          </div>

          <h1 className="mt-10 text-5xl font-semibold leading-tight tracking-tight md:text-8xl">
            Validate agent behavior before production deployment.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-300">
            GuardPrompt helps teams define behavioral boundaries, test AI agents against
            adversarial scenarios, and generate deployment assurance evidence before agents
            access tools, data, memory, or enterprise systems.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contracts"
              className="rounded-2xl bg-cyan-400 px-6 py-4 font-medium text-black"
            >
              View Contract Model
            </a>
            <a
              href="#platform"
              className="rounded-2xl border border-white/10 px-6 py-4 text-white"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div id="problem" className="mt-32 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              The problem
            </p>
            <h2 className="mt-5 text-4xl font-semibold">
              Agents are becoming operational actors.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
            Modern AI agents can invoke tools, call APIs, retrieve sensitive data,
            use memory, and delegate tasks. Traditional controls were built for humans,
            applications, and cloud workloads — not adaptive agents whose behavior emerges
            from prompts, tools, context, and runtime state.
          </p>
        </div>

        <div id="platform" className="mt-28 grid gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-28 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
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

        <div id="contracts" className="mt-28 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Behavior contracts
            </p>
            <h2 className="mt-5 text-4xl font-semibold">
              Define what an agent is allowed to do.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Agents may reason dynamically. GuardPrompt focuses on governing the
              transition from reasoning to action through explicit contracts and
              enforceable runtime boundaries.
            </p>
          </div>

          <pre className="overflow-x-auto rounded-3xl border border-white/10 bg-black/50 p-6 text-sm text-cyan-100">
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

        <div id="docs" className="mt-28 border-t border-white/10 py-10 text-sm text-gray-500">
          GuardPrompt is currently in early development. Initial focus: CLI scanner,
          behavior contracts, attack simulation, and deployment certificates.
        </div>
      </section>
    </main>
  );
}
