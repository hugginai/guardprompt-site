import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const certificateChecks = [
  "Contract hash validation",
  "Repository commit binding",
  "Tool manifest validation",
  "Attack simulation results",
  "Risk score and recommendation",
  "Signed evidence artifact",
];

export default function CertificationPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <Navbar />

        <div className="mt-24 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Certification
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Deployment evidence for autonomous agents.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            GuardPrompt certificates prove an agent was tested against its
            approved behavior contract before production deployment.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
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
    remediation: Add policy block for restricted finance data.

signature:
  issuer: GuardPrompt
  signature_algorithm: Ed25519
  certificate_hash: sha256:xyz789`}
          </pre>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {certificateChecks.map((item) => (
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
