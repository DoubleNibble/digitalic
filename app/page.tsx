import Hero3D from "@/components/Hero3D";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 pb-16 px-10 overflow-hidden">
        <Hero3D />
        <div className="relative z-[2] max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-purple-bright font-mono mb-6 border border-purple-400/50 bg-purple-400/10">
              <span className="w-1.5 h-1.5 bg-purple-bright rounded-full animate-pulse shadow-[0_0_8px_#c084fc]"></span>
              AI × BLOCKCHAIN × EDUCATION
            </div>
            <h1 className="font-display text-[38px] md:text-[76px] font-semibold leading-[1.02] tracking-tight mb-5">
              Where Intelligence Meets <span className="text-gradient">Infrastructure.</span>
            </h1>
            <div className="text-sm text-purple-bright font-mono mb-6">AI-Driven. Blockchain-Secured. Under Your Control.</div>
            <p className="text-base text-muted leading-relaxed mb-9 max-w-[540px]">
              The Reality: <strong className="text-fg font-semibold">90% of businesses risk being left behind</strong> by the exponential pace of innovation. We bridge the digital divide for SMBs, fintech, and law firms. By combining advanced AI agents for off-chain strategy with a robust Blockchain execution layer, we deliver smarter, safer, and entirely confidential automation.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/contact" className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-[#2e6bff] to-[#a855f7] hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)] transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
                Secure Your Future <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="/contact" className="px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-fg bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
                Talk to an Expert
              </Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div><div className="font-display text-2xl font-semibold text-gradient">20+</div><div className="text-[11px] text-muted-2 uppercase tracking-widest mt-1">Years Experience</div></div>
              <div><div className="font-display text-2xl font-semibold text-gradient">2018</div><div className="text-[11px] text-muted-2 uppercase tracking-widest mt-1">Since Teaching</div></div>
              <div><div className="font-display text-2xl font-semibold text-gradient">100%</div><div className="text-[11px] text-muted-2 uppercase tracking-widest mt-1">Privacy First</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-10 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
            <span className="inline-block w-6 h-px bg-purple-bright"></span>
            <span>Why Us / Value Proposition</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-5 max-w-[900px]">
            No Hype. No Unnecessary Risk. <span className="text-gradient">Just Robust Results.</span>
          </h2>
          <p className="text-lg text-muted mb-15 max-w-[900px]">
            With 20+ years of hands-on technology experience, we guide organizations through digital transformation, blockchain, and AI agent integration—smoothly, securely, and sustainably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "fa-brain", title: "Advanced AI Agents", desc: "Off-chain strategy, business automation, and seamless product integration tailored to your operational reality." },
              { icon: "fa-shield-halved", title: "Blockchain Execution Layer", desc: "Decentralized, tamper-proof security that guarantees data privacy and verifiable integrity at every step." },
              { icon: "fa-graduation-cap", title: "Zero Cultural Friction", desc: "We don't just hand over code; we provide the education, training, and consulting your team needs to adapt." }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 transition-all hover:-translate-y-1.5 hover:border-white/15 bg-gradient-to-b from-white/[0.025] to-white/[0.01] hover:from-purple/[0.06] hover:to-blue/[0.02]">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-purple-bright text-xl border border-white/15" style={{ background: "linear-gradient(135deg, rgba(46,107,255,0.15), rgba(168,85,247,0.15))" }}>
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2.5">{card.title}</h3>
                <p className="text-sm text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
