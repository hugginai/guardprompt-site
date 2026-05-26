export default function CertificationPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-cyan-300">
          ← Back to Home
        </a>

        <h1 className="mt-10 text-5xl font-semibold tracking-tight">
          Deployment Certificates
        </h1>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <pre className="overflow-x-auto text-sm text-cyan-100">
{`validation_summary:
  result: PASS_WITH_WARNINGS
  risk_score: 82
  deployment_recommendation: APPROVE_WITH_MONITORING`}
          </pre>
        </div>
      </section>
    </main>
  );
}
