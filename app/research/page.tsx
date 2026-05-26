const topics = [
  {
    title: "Identity is necessary, but not sufficient",
    desc: "Agent identity tells us who the agent is. GuardPrompt focuses on whether the agent's behavior remains within approved operational boundaries.",
  },
  {
    title: "The harness is the new attack surface",
    desc: "Agent behavior emerges from prompts, tools, memory, orchestration, context, and runtime state. Security must validate the harness, not just the model.",
  },
  {
    title: "Behavior contracts as deployment controls",
    desc: "AI agents should carry machine-readable contracts describing tools, data access, delegation, memory, approvals, and runtime limits.",
  },
  {
    title: "Certificates for agentic systems",
    desc: "Before production access, agents should produce evidence that their implementation was tested against approved behavioral expectations.",
  },
];

const principles = [
  "Agents may reason dynamically.",
  "Operational actions must remain governable.",
  "Runtime behavior must be validated against contracts.",
  "Deployment approval should be evidence-based.",
  "Unsafe autonomy should fail closed.",
  "Agent security belongs in the software lifecycle.",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            GuardPrompt
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="/platform" className="hover:text-white">
              Platform
            </a>
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
            Research
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Security for agents starts where reasoning becomes action.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            GuardPrompt is based on a simple thesis: autonomous agents may
            reason dynamically, but their operational behavior must remain
            bounded, testable, certifiable, and enforceable.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-8"
            >
              <h2 className="text-2xl font-semibold">{topic.title}</h2>
              <p className="mt-5 leading-relaxed text-gray-400">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-[2rem] border border-cyan-400/10 bg-cyan-400/[0.04] p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Core philosophy
          </p>

          <h2 className="mt-5 text-4xl font-semibold">
            Govern actions, not thoughts.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-300">
            GuardPrompt does not attempt to constrain every internal reasoning
            path of an AI agent. Instead, it focuses on governing the transition
            from cognition to action: tool calls, API requests, memory writes,
            delegation, data access, and production workflow execution.
          </p>
        </div>

        <div className="mt-24">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Operating principles
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-gray-300"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">
              From static controls to behavioral assurance.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              Traditional security controls assume predictable software
              behavior. Autonomous agents introduce adaptive behavior shaped by
              context, prompts, tools, memory, and dynamic orchestration.
              GuardPrompt treats agent behavior as something that must be
              continuously validated against explicit operational boundaries.
            </p>
          </div>

          <pre className="overflow-x-auto rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-cyan-100">
{`Reasoning Layer
  ↓
Intent / Plan
  ↓
Behavior Contract Validation
  ↓
Policy Decision
  ↓
Tool or API Execution
  ↓
Evidence + Drift Monitoring`}
          </pre>
        </div>
      </section>
    </main>
  );
}
