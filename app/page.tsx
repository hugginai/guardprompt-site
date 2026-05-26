export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="max-w-7xl mx-auto px-8 py-24">
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-wide">
            GuardPrompt
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#">Docs</a>
            <a href="#">Contracts</a>
            <a href="#">Runtime</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="mt-28 max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Runtime Assurance for Autonomous AI Agents
          </div>

          <h1 className="mt-10 text-6xl md:text-8xl font-semibold leading-tight tracking-tight">
            Deployment Assurance
            <br />
            for AI Agents
          </h1>

          <p className="mt-10 max-w-3xl text-xl text-gray-300 leading-relaxed">
            Validate, test, and enforce behavioral boundaries for AI agents before production deployment.
          </p>

          <div className="mt-14 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-cyan-500 px-6 py-4 text-black font-medium">
              View Documentation
            </button>

            <button className="rounded-2xl border border-white/10 px-6 py-4 text-white">
              Explore GitHub
            </button>
          </div>
        </div>

        <div className="mt-32 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Behavior Contracts",
              desc: "Define operational boundaries, tool permissions, delegation limits, and runtime constraints."
            },
            {
              title: "Attack Simulation",
              desc: "Test prompt injection, unsafe tool usage, privilege escalation, and policy bypass scenarios."
            },
            {
              title: "Deployment Certificates",
              desc: "Generate signed assurance reports and deployment validation artifacts for enterprise governance."
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="text-xl font-medium">
                {card.title}
              </div>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <div className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Example Runtime Flow
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-6 text-center text-sm">
            {[
              "Agent Definition",
              "Behavior Contract",
              "Security Validation",
              "Attack Simulation",
              "Deployment Certificate",
              "Runtime Enforcement",
            ].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
