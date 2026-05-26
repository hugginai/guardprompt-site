import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-8 text-white">
      <section className="mx-auto max-w-7xl">
        <Navbar />

        <div className="mt-24 max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Talk to us about agent deployment assurance.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            GuardPrompt is in early development. Reach out if you are building
            AI agents, reviewing agent security, or exploring pre-production
            assurance for autonomous systems.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:founders@guardprompt.com?subject=GuardPrompt%20Early%20Access"
              className="rounded-2xl bg-cyan-400 px-6 py-4 font-medium text-black shadow-lg shadow-cyan-500/20"
            >
              founders@guardprompt.com
            </a>

            <a
              href="https://github.com/hugginai/guardprompt-site"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            "Enterprise AI platform teams",
            "Security architecture teams",
            "Agent framework builders",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-gray-300"
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
