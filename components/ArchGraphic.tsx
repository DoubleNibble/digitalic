import Image from 'next/image'
export default function ArchGraphic() {
  return (
    <div className="arch-graphic my-10 md:my-20">

      <div className="relative w-full h-[800px]">
        <Image
          src="/intelligence-infrastructure.jpg"
          alt="Overview of the Architecture"
          fill
          className="object-contain object-center"
          sizes="100vw"
          priority
        />
      </div>


      <div className="py-5 px-10 border-t border-white/10 flex justify-between items-center bg-black/20 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2 flex-wrap gap-4">
        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-bright shadow-[0_0_8px_#a855f7]"></span> INTELLIGENCE IN MOTION</span>
        <span className="flex items-center gap-2">ARCHITECTURE SYNERGY <span className="w-1.5 h-1.5 rounded-full bg-blue-bright shadow-[0_0_8px_#2e6bff]"></span></span>
      </div>
    </div>
  );
}
