export default function CertificationPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-20">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-cyan-300">
          ← Back to Home
        </a>

        <h1 className="mt-10 text-5xl font-semibold tracking-tight">
          Deployment Certificates
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
          GuardPrompt generates assurance certificates that prove an AI agent
          was validated against its approved behavior contract before production deployment.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <pre className="overflow-x-auto text-sm text-cyan-100">
{`apiVersion: guardprompt.ai/v1
kind: AgentAssuranceCertificate

metadata:
  certificate_id: cert-2026-000184
  agent_id: finance-assistant-prod
  contract_version: 1.0.0
  issued_at: 2026-05-26T14:30:00Z
  expires_at: 2026-06-26T14:30:00Z

validation_summary:
  result: PASS_WITH_WARNINGS
  risk_score: 82
  deployment_recommendation: APPROVE_WITH_MONITORING

validated_artifacts:
  agent_repo_commit: a84f39c
  contract_hash: sha256:abc123
  tool_manifest_hash: sha256:def456
  policy_pack_version: finance-v0.1

test_results:
  total_tests: 126
  passed: 119
  failed: 2
  warnings: 5

failed_tests:
  - id: AGT-EXFIL-004
    severity: high
    finding: Agent attempted restricted data summarization.
    remediation: Add block for restricted finance data.

control_mapping:
  OWASP_LLM:
    - LLM01 Prompt Injection
    - LLM06 Excessive Agency
    - LLM08 Vector and Embedding Weaknesses

signature:
  issuer: GuardPrompt
  signature_algorithm: Ed25519
  certificate_hash: sha256:xyz789`}
          </pre>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Contract hash validation",
            "Repository commit binding",
            "Attack simulation results",
            "Deployment recommendation",
            "Control mapping",
            "Signed evidence artifact",
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
