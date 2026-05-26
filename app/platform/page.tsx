const layers = [
  {
    title: "1. Agent Intake",
    desc: "Inspect agent definitions, prompts, tools, MCP servers, memory settings, model configuration, and runtime permissions.",
  },
  {
    title: "2. Contract Validation",
    desc: "Compare the implementation against approved behavior contracts and flag mismatches before deployment.",
  },
  {
    title: "3. Adversarial Simulation",
    desc: "Run controlled attack scenarios for prompt injection, tool misuse, privilege escalation, unsafe delegation, and data exfiltration.",
  },
  {
    title: "4. Assurance Certificate",
    desc: "Generate a signed validation artifact that binds results to the contract, repository commit, tool manifest, and policy pack.",
  },
  {
    title: "5. Runtime Boundary",
    desc: "Future enforcement layer that evaluates action requests before tools, APIs, or enterprise systems are invoked.",
  },
];

const outcomes = [
  "Block unsafe agent deployments",
  "Generate audit-ready evidence",
  "Validate behavior before production access",
  "Create repeatable AI SDLC gates",
  "Reduce manual security reviews",
  "Govern agent actions without constraining reasoning",
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            GuardPrompt
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="/contracts" className="hover:text-white">
              Contracts
            </a>
            <a href="/certification" className="hover:text-white">
              Certification
            </a>
            <a href="/docs" className="hover:text-white">
              Docs
            </a>
          </div>
        </nav>

        <div className="mt-24 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Platform
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            The assurance layer for the agentic software lifecycle.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            GuardPrompt is designed to fit into the development and deployment
            workflow for autonomous AI agents — before agents receive production
            access to tools, memory, APIs, or enterprise systems.
          </p>
        </div>

        <div className="mt-20 grid gap-6">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 md:grid md:grid-cols-[0.35fr_0.65fr] md:gap-8"
            >
              <h2 className="text-2xl font-semibold text-cyan-100">
                {layer.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-300 md:mt-0">
                {layer.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-[2rem] border border-cyan-400/10 bg-cyan-400/[0.04] p-10">
          <h2 className="text-3xl font-semibold">
            From scanner to deployment gate.
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-gray-300">
            The first release focuses on a CLI-based assurance workflow. Later
            releases extend into CI/CD integrations, policy packs, signed
            certificates, and runtime enforcement points for high-risk agent
            actions.
          </p>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-3">
          {outcomes.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
