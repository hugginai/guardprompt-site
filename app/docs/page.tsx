import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const commands = [
  {
    title: "Initialize a contract",
    command: "guardprompt init",
    desc: "Creates a starter guardprompt.yaml behavior contract for an agent project.",
  },
  {
    title: "Scan an agent",
    command: "guardprompt scan ./agent",
    desc: "Analyzes agent files, tools, prompts, memory configuration, and behavior contract.",
  },
  {
    title: "Block critical findings",
    command: "guardprompt scan . --fail-on critical",
    desc: "Fails CI/CD when critical policy violations are detected.",
  },
  {
    title: "Generate evidence",
    command: "guardprompt report --format json",
    desc: "Outputs validation evidence for deployment review or audit workflows.",
  },
];

const checks = [
  "Shell or code execution enabled without approval",
  "External email or upload tools combined with sensitive data",
  "MCP servers from untrusted sources",
  "Persistent memory without retention rules",
  "Delegation enabled without max depth",
  "High-risk actions missing human approval",
  "Tool allowlist missing",
  "Secrets access available to agent runtime",
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <Navbar />

        <div className="mt-24 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Documentation
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            CLI-first assurance for AI agents.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            GuardPrompt is designed to start as a developer-first scanner for AI
            agent projects. The CLI validates behavior contracts, detects risky
            capabilities, runs adversarial tests, and produces deployment
            evidence.
          </p>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Planned quick start
          </p>

          <pre className="mt-6 overflow-x-auto rounded-2xl bg-black/60 p-6 text-sm text-cyan-100">
{`npm install -g guardprompt

guardprompt init
guardprompt scan ./agent
guardprompt report --format html`}
          </pre>

          <p className="mt-6 text-sm text-gray-500">
            CLI package is planned. Current site documents the product
            direction, security model, and initial interface.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {commands.map((item) => (
            <div
              key={item.command}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>

              <pre className="mt-5 overflow-x-auto rounded-2xl bg-black/60 p-4 text-sm text-cyan-100">
                {item.command}
              </pre>

              <p className="mt-5 leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Initial security checks
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {checks.map((check) => (
              <div
                key={check}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-gray-300"
              >
                {check}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-[2rem] border border-cyan-400/10 bg-cyan-400/[0.04] p-8">
          <h2 className="text-3xl font-semibold">Planned integrations</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {["LangGraph", "MCP", "OpenAI Agents SDK", "GitHub Actions"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center text-gray-300"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <Footer />
      </section>
    </main>
  );
}
