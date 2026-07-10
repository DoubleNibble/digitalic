"use client";
import { useRef, ReactNode } from "react";

export default function AboutTile({ children, className = "" }: { children: ReactNode; className?: string }) {
  const tileRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const tile = tileRef.current;
    if (!tile) return;
    console.log(tile);
    const rect = tile.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    tile.style.transform = `translateY(-8px) scale(1.02) perspective(1000px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
    tile.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    tile.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (tileRef.current) tileRef.current.style.transform = "";
  };

  return (
    <div
      ref={tileRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative p-9 bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/10 rounded-[18px] min-h-[280px] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gradient-to-b hover:from-purple/[0.08] hover:to-blue/[0.02] hover:-translate-y-2 hover:scale-[1.02] group ${className}`}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.15), transparent 50%)" }}></div>
      <div className="absolute inset-0 rounded-[18px] p-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: "linear-gradient(135deg, #4d8aff, transparent 40%, transparent 60%, #c084fc)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}></div>
      {children}
    </div>
  );
}
