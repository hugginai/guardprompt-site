export default function ContractsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-cyan-300">
          ← Back to Home
        </a>

        <h1 className="mt-10 text-5xl font-semibold tracking-tight">
          Agent Behavior Contracts
        </h1>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <pre className="overflow-x-auto text-sm text-cyan-100">
{`apiVersion: guardprompt.ai/v1
kind: AgentBehaviorContract

metadata:
  agent_id: finance-assistant-prod
  owner: finance-platform-team
  environment: production
  version: 1.0.0`}
          </pre>
        </div>
      </section>
    </main>
  );
}
