export default function ArchGraphic() {
  return (
    <div className="arch-graphic my-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] min-h-[420px]">
        {/* Intelligence Side */}
        <div className="p-10 flex flex-col relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10" style={{ background: "radial-gradient(circle at 30% 20%, rgba(168,85,247,0.15), transparent 60%)" }}>
          <div className="font-display text-lg font-semibold text-purple-bright mb-1">THE INTELLIGENCE</div>
          <div className="font-mono text-[11px] text-muted-2 uppercase tracking-widest mb-8">AI Layer · Off-Chain</div>

          <svg className="flex-1 w-full h-[200px]" viewBox="0 0 300 200">
            <defs>
              <radialGradient id="intelNode" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#a855f7" />
              </radialGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <g stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.5">
              <path d="M30,50 L150,100 L30,150" /><path d="M30,100 L150,100" /><path d="M150,100 L270,50" /><path d="M150,100 L270,150" /><path d="M150,100 L270,100" />
            </g>
            <g fill="url(#intelNode)" filter="url(#glow)">
              <circle cx="30" cy="50" r="5" /><circle cx="30" cy="100" r="5" /><circle cx="30" cy="150" r="5" />
              <circle cx="150" cy="100" r="9" /><circle cx="270" cy="50" r="7" /><circle cx="270" cy="100" r="7" /><circle cx="270" cy="150" r="7" />
            </g>
          </svg>

          <div className="flex gap-3 mt-5">
            <div className="p-2 px-3.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono text-muted">
              PREDICT<span className="block text-[9px] text-muted-2 mt-0.5">Pattern Recognition</span>
            </div>
            <div className="p-2 px-3.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono text-muted">
              ANALYZE<span className="block text-[9px] text-muted-2 mt-0.5">Contextual Insight</span>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex items-center justify-center relative h-[60px] md:h-auto" style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.05), rgba(46,107,255,0.05))" }}>
          <div className="arch-flow-line md:w-full md:h-0.5 w-0.5 h-full">
            <div className="arch-flow-particle"></div>
            <div className="arch-flow-particle" style={{ animationDelay: "1s" }}></div>
            <div className="arch-flow-particle" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>

        {/* Infrastructure Side */}
        <div className="p-10 flex flex-col relative overflow-hidden" style={{ background: "radial-gradient(circle at 70% 80%, rgba(46,107,255,0.15), transparent 60%)" }}>
          <div className="font-display text-lg font-semibold text-blue-bright mb-1">THE INFRASTRUCTURE</div>
          <div className="font-mono text-[11px] text-muted-2 uppercase tracking-widest mb-8">Blockchain Layer · On-Chain</div>

          <svg className="flex-1 w-full h-[200px]" viewBox="0 0 300 200">
            <defs>
              <linearGradient id="infraBlock" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4d8aff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2e6bff" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <g fill="url(#infraBlock)" stroke="#4d8aff" strokeWidth="1.5" opacity="0.9">
              <polygon points="50,100 100,75 150,100 100,125" /><polygon points="50,100 50,150 100,175 100,125" /><polygon points="150,100 150,150 100,175 100,125" />
              <polygon points="150,100 200,75 250,100 200,125" /><polygon points="150,100 150,150 200,175 200,125" /><polygon points="250,100 250,150 200,175 200,125" />
            </g>
          </svg>

          <div className="flex gap-3 mt-5">
            <div className="p-2 px-3.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono text-muted">
              EXECUTE<span className="block text-[9px] text-muted-2 mt-0.5">Deterministic Logic</span>
            </div>
            <div className="p-2 px-3.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono text-muted">
              SECURE<span className="block text-[9px] text-muted-2 mt-0.5">Immutable Record</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 px-10 border-t border-white/10 flex justify-between items-center bg-black/20 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2 flex-wrap gap-4">
        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-bright shadow-[0_0_8px_#a855f7]"></span> INTELLIGENCE IN MOTION</span>
        <span className="flex items-center gap-2">ARCHITECTURE SYNERGY <span className="w-1.5 h-1.5 rounded-full bg-blue-bright shadow-[0_0_8px_#2e6bff]"></span></span>
      </div>
    </div>
  );
}
