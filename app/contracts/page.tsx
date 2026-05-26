import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const contractSections = [
  "Purpose and approved use cases",
  "Allowed and denied tools",
  "Data access boundaries",
  "Memory and retention rules",
  "Delegation restrictions",
  "Approval-required actions",
  "Runtime limits",
  "Fail-closed behavior",
];

export default function ContractsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <Navbar />

        <div className="mt-24 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Behavior Contracts
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Define what an agent is allowed to do.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            GuardPrompt behavior contracts describe approved operational
            boundaries before an AI agent receives production access.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
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

        <div className="mt-16 grid gap-5 md:grid-cols-4">
          {contractSections.map((item) => (
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
