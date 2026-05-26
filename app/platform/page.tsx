import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const layers = [
  {
    title: "Agent Intake",
    desc: "Inspect prompts, tools, MCP servers, memory settings, model configuration, identities, and runtime permissions.",
  },
  {
    title: "Contract Validation",
    desc: "Compare implementation details against approved behavior contracts and flag mismatches before deployment.",
  },
  {
    title: "Adversarial Simulation",
    desc: "Run tests for prompt injection, unsafe tool use, privilege escalation, approval bypass, and data exfiltration.",
  },
  {
    title: "Assurance Certificate",
    desc: "Generate signed evidence tied to the repo commit, contract hash, tool manifest, and policy pack.",
  },
  {
    title: "Runtime Boundary",
    desc: "Future enforcement layer that evaluates high-risk actions before tools, APIs, or enterprise systems are invoked.",
  },
];

const outcomes = [
  "Block unsafe agent deployments",
  "Generate audit-ready evidence",
  "Validate behavior before production access",
  "Create repeatable AI SDLC gates",
  "Reduce manual security reviews",
  "Govern actions without constraining reasoning",
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <Navbar />

        <div className="mt-24 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Platform
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            The assurance layer for the agentic software lifecycle.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            GuardPrompt fits into the development and deployment workflow for
            autonomous AI agents before they receive production access to tools,
            memory, APIs, or enterprise systems.
          </p>
        </div>

        <div className="mt-20 grid gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 md:grid md:grid-cols-[0.3fr_0.7fr] md:gap-8"
            >
              <h2 className="text-2xl font-semibold text-cyan-100">
                {index + 1}. {layer.title}
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

        <Footer />
      </section>
    </main>
  );
}
