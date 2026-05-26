export default function ContractsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-20">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-cyan-300">
          ← Back to Home
        </a>

        <h1 className="mt-10 text-5xl font-semibold tracking-tight">
          Agent Behavior Contracts
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
          GuardPrompt behavior contracts define the approved operational
          boundaries of an AI agent before it is allowed into production.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <pre className="overflow-x-auto text-sm text-cyan-100">
{`apiVersion: guardprompt.ai/v1
kind: AgentBehaviorContract

metadata:
  agent_id: finance-assistant-prod
  owner: finance-platform-team
  environment: production
  version: 1.0.0

purpose:
  approved_use_cases:
    - invoice_lookup
    - financial_policy_search
  prohibited_use_cases:
    - payment_execution
    - external_data_transfer

tools:
  allowed:
    - policy_search
    - invoice_lookup
  denied:
    - shell
    - secrets_read
    - external_email

data_access:
  allowed:
    - FINANCE_POLICY
    - INVOICE_METADATA
  denied:
    - CUSTOMER_PII
    - PAYROLL
    - BANK_ACCOUNT_DATA

memory:
  enabled: true
  pii_storage: false
  retention_days: 30

delegation:
  allowed: false
  max_depth: 0

approval_required:
  actions:
    - payment_change
    - bulk_export
    - customer_record_update

runtime_limits:
  max_tool_calls_per_task: 5
  fail_closed: true`}
          </pre>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Tool permissions",
            "Memory boundaries",
            "Delegation limits",
            "Approval rules",
            "Data access scope",
            "Runtime limits",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
