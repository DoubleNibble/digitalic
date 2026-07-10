export default function WhoWeArePage() {
  return (
    <div className="pt-32 px-10 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-purple"></span> Who We Are
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-5 max-w-[900px]">
          Decade-Tested Professionals. <span className="text-gradient">Execution-Driven Innovators.</span>
        </h2>
        <p className="text-lg text-muted mb-5 max-w-[700px]">
          Our leadership team is comprised of elite professionals with decades of deep hands-on experience spanning Digital Transformation, Corporate Education, Advanced Software Engineering, and Blockchain Architecture.
        </p>
        <p className="text-lg text-muted mb-15 max-w-[700px]">
          We don't look at technology in isolation. For us, true innovation means seamlessly fusing business strategy, advanced automation, and bulletproof security into a unified, high-performing corporate infrastructure.
        </p>
      </div>
    </div>
  );
}
