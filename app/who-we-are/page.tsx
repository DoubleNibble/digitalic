export default function WhoWeArePage() {
  const features = [
    {
      num: "01",
      title: "From Concept to Execution",
      desc: "We eliminate the friction of managing multiple vendors. A single, elite team guides your organization from initial strategic design to final implementation."
    },
    {
      num: "02",
      title: "Intelligent Engineering",
      desc: "By leveraging state-of-the-art AI-assisted coding and decentralized tech, we accelerate development cycles without ever compromising on data integrity or code quality."
    },
    {
      num: "03",
      title: "A Strategic Partnership",
      desc: "We act as an essential extension of your organization, defining the precise strategy required for a smooth, secure, and permanent digital transformation."
    }
  ];

  return (
    <div className="pt-32 px-10 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-purple-bright"></span> Who We Are
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

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[60px] items-start pt-20">
          {/* Left Column: Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
              <span className="w-6 h-px bg-purple-bright"></span> Your Dedicated Innovation Team
            </div>
            <h3 className="font-display text-2xl md:text-[36px] font-semibold leading-tight tracking-tight max-w-[800px]">
              To survive the exponential pace of technological change, you don't just need software developers—you need a <span className="text-gradient">consolidated, multi-disciplinary innovation team.</span>
            </h3>
            <p className="text-[15px] text-muted leading-relaxed mt-5 max-w-[700px]">
              We anchor our engineering entirely around our clients' operational needs to design and deploy solutions of extraordinary technological value. From initial strategic design to final implementation, a single elite team guides your organization through every phase of transformation.
            </p>
          </div>

          {/* Right Column: Features */}
          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border border-white/10 transition-all hover:border-purple/30 hover:bg-gradient-to-b hover:from-purple/[0.05] hover:to-blue/[0.01] hover:translate-x-2 bg-gradient-to-b from-white/[0.025] to-white/[0.005] relative overflow-hidden"
              >
                <h4 className="font-display text-[17px] font-semibold mb-2 flex items-center gap-3">
                  <span className="font-mono text-[11px] text-purple-bright">{f.num}</span> {f.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}