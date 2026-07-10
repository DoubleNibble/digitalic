import ArchGraphic from "@/components/ArchGraphic";
import AboutTile from "@/components/AboutTile";

export default function AboutPage() {
  return (
    <div className="pt-32 px-10 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-purple"></span> About Digitalic
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-5 max-w-[900px]">
          Bridging the Divide Between <span className="text-gradient">Innovation and Execution.</span>
        </h2>
        <p className="text-lg text-muted mb-10 max-w-[700px]">
          We build the future of decentralized automation. For businesses facing exponential technological change, we don't just consult—we execute.
        </p>

        <ArchGraphic />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AboutTile className="md:col-span-2">
            <div className="absolute top-8 right-8 w-10 h-10 rounded-lg flex items-center justify-center border order-white/15 text-purple-bright bg-gradient-to-br from-[#2e6bff]/15 to-[#a855f7]/15 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:text-white group-hover:from-[#2e6bff] group-hover:to-[#a855f7]">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="font-mono text-[11px] text-muted-2 tracking-widest mb-4">01 / MISSION</div>
            <h3 className="font-display text-2xl font-semibold mb-3.5">Bridging the Divide Between Innovation and Execution</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#2e6bff] to-[#a855f7] my-5 rounded"></div>
            <p className="text-sm text-muted leading-relaxed">
              We build the future of decentralized automation. For businesses facing exponential technological change, we don't just consult—we execute. By bridging the digital divide, we empower organizations to adopt advanced technology without sacrificing security or privacy.
            </p>
          </AboutTile>
          <AboutTile>
            <div className="absolute top-8 right-8 w-10 h-10 rounded-lg flex items-center justify-center border order-white/15 text-purple-bright bg-gradient-to-br from-[#2e6bff]/15 to-[#a855f7]/15 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:text-white group-hover:from-[#2e6bff] group-hover:to-[#a855f7]">
              <i className="fas fa-clock-rotate-left"></i>
            </div>
            <div className="font-mono text-[11px] text-muted-2 tracking-widest mb-4">02 / STORY</div>
            <h3 className="font-display text-2xl font-semibold mb-3.5">20+ Years of Ground Truth</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#2e6bff] to-[#a855f7] my-5 rounded"></div>
            <p className="text-sm text-muted leading-relaxed">
              We didn't build our expertise in a vacuum. Over two decades at the cutting edge, our framework is forged from real projects, real constraints, and deep exposure to what actually works—and what fails.
            </p>
          </AboutTile>
          <AboutTile className="md:col-span-3">
            <div className="absolute top-8 right-8 w-10 h-10 rounded-lg flex items-center justify-center border order-white/15 text-purple-bright bg-gradient-to-br from-[#2e6bff]/15 to-[#a855f7]/15 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:text-white group-hover:from-[#2e6bff] group-hover:to-[#a855f7]">
              <i className="fas fa-cubes"></i>
            </div>
            <div className="font-mono text-[11px] text-muted-2 tracking-widest mb-4">03 / ARCHITECTURE</div>
            <h3 className="font-display text-2xl font-semibold mb-3.5">The Synergy of AI & Blockchain</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#2e6bff] to-[#a855f7] my-5 rounded"></div>
            <p className="text-sm text-muted leading-relaxed">
              We solve the digital divide by separating intelligence from infrastructure, ensuring your business gets the best of both worlds. This dual-layer architecture lets each technology do what it does best—without compromise.
            </p>
          </AboutTile>
          <AboutTile className="md:col-span-1">
            <div className="absolute top-8 right-8 w-10 h-10 rounded-lg flex items-center justify-center border order-white/15 text-purple-bright bg-gradient-to-br from-[#2e6bff]/15 to-[#a855f7]/15 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:text-white group-hover:from-[#2e6bff] group-hover:to-[#a855f7]">
              <i className="fas fa-microchip"></i>
            </div>
            <div className="font-mono text-[11px] text-muted-2 tracking-widest mb-4">04 / INTELLIGENCE</div>
            <h3 className="font-display text-2xl font-semibold mb-3.5">Advanced AI Agents</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#2e6bff] to-[#a855f7] my-5 rounded"></div>
            <p className="text-sm text-muted leading-relaxed">
              Operating off-chain to handle complex reasoning, strategic planning, business automation, and seamless product integration. Your data stays yours—always.
            </p>
          </AboutTile>
          <AboutTile className="md:col-span-2">
            <div className="absolute top-8 right-8 w-10 h-10 rounded-lg flex items-center justify-center border order-white/15 text-purple-bright bg-gradient-to-br from-[#2e6bff]/15 to-[#a855f7]/15 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:text-white group-hover:from-[#2e6bff] group-hover:to-[#a855f7]">
              <i className="fas fa-link"></i>
            </div>
            <div className="font-mono text-[11px] text-muted-2 tracking-widest mb-4">05 / INFRASTRUCTURE</div>
            <h3 className="font-display text-2xl font-semibold mb-3.5">Robust Blockchain Layer</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#2e6bff] to-[#a855f7] my-5 rounded"></div>
            <p className="text-sm text-muted leading-relaxed">
              Providing a tamper-proof execution layer for secure payments, identity management (DIDs), smart contracts, auditability, and decentralized coordination. The trust foundation your operations require.
            </p>
          </AboutTile>
        </div>
      </div>
    </div >
  );
}
