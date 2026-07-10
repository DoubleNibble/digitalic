import Link from "next/link";
import { ReactNode } from "react";

export default function ConstructionPage({ icon, status, children }: { icon: string; status: string; children: ReactNode }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-10 py-32">
      <div className="text-center max-w-[600px] p-16 rounded-3xl relative overflow-hidden border border-white/10">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-rotate z-0" style={{ background: "conic-gradient(from 0deg, transparent, rgba(168,85,247,0.15), transparent, rgba(46,107,255,0.15), transparent)" }}></div>
        <div className="absolute inset-px bg-[#050510] rounded-[23px] z-[1]"></div>
        <div className="relative z-[2]">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl text-purple-bright animate-floaty" style={{ background: "linear-gradient(135deg, rgba(46,107,255,0.2), rgba(168,85,247,0.2))", border: "1px solid rgba(255,255,255,0.14)" }}>
            <i className={icon}></i>
          </div>
          <h1 className="font-display text-4xl font-semibold mb-3 text-gradient">Page Under Construction</h1>
          <div className="text-muted text-[15px] leading-relaxed mb-7">{children}</div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] text-purple-bright font-mono bg-purple/10 border border-purple/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-bright animate-pulse"></span>
            <span>STATUS: {status}</span>
          </div>
          <div className="mt-8">
            <Link href="/" className="px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-fg bg-white/5 hover:bg-white/10 transition-all inline-flex items-center gap-2">
              Back to Home <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
