// components/Loader.tsx
"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 bg-[#050510] z-[10000] flex items-center justify-center flex-col gap-6 transition-opacity duration-600 ${hidden ? "opacity-0 invisible" : ""}`}>
      <div className="font-logo text-4xl font-bold animate-pulse">
        <span className="text-blue-bright">dig</span><span className="text-purple-bright italic -skew-x-12 inline-block">italic</span>
      </div>
      <div className="w-[200px] h-0.5 bg-white/10 rounded overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#2e6bff] to-[#a855f7] w-0 animate-[loadFill_1.8s_ease-out_forwards]"></div>
      </div>
      <div className="text-[11px] text-muted-2 font-mono tracking-[0.2em]">EMPHASIZE YOUR BUSINESS</div>
      <style jsx>{`
        @keyframes loadFill { to { width: 100%; } }
      `}</style>
    </div>
  );
}
