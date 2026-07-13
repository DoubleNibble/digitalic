import ServiceIcon3D from "@/components/ServiceIcon3D";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      num: "01", icon: "bitcoin", title: "Bitcoin Integration & Consulting", sub: "Secure your treasury, accept global payments, and navigate digital asset infrastructure with confidence.", features: [
        { t: "Strategic Consultancy & Education", d: "Tailored training for executive teams, law firms, and financial institutions." },
        { t: "Payment Infrastructure", d: "Seamless integration of Bitcoin payment management for modern merchant ecosystems." },
        { t: "Enterprise Self-Custody", d: "Secure, multi-signature custody frameworks without third-party risk." },
        { t: "Fintech Infrastructure", d: "Custom engineering for exchanges, liquidity providers, and fiat on/off-ramps." }
      ]
    },
    {
      num: "02", icon: "blockchain", title: "Blockchain Architecture & Smart Contracts", sub: "Immutable data, automated agreements, and institutional-grade compliance layers.", features: [
        { t: "Legal Notarization & Timestamping", d: "Tamper-proof systems for legal verification and chain-of-custody tracking." },
        { t: "Smart Contract Engineering", d: "Development and auditing on EVM-compatible and decentralized networks." },
        { t: "DeFi Infrastructure", d: "Building and integrating decentralized finance protocols for fintech applications." },
        { t: "Chainalysis & Forensic Security", d: "On-chain analytics, transaction tracking, and regulatory risk assessment." }
      ]
    },
    {
      num: "03", icon: "ai", title: "Privacy-First AI & Office Automation", sub: "Supercharge workflows with advanced AI agents, while keeping 100% of your data private and on-premise.", features: [
        { t: "Local & Sovereign LLMs", d: "Open-source Large Language Models running on your hardware. Your data never leaves your servers." },
        { t: "Agentic Automation Layer", d: "Off-chain AI agents handling complex reasoning, integration, and repetitive workflows." },
        { t: "Self-Hostable Office Automation", d: "Open-source alternatives to cloud suites for total digital sovereignty." },
        { t: "Custom AI UIs", d: "Bespoke chatbots and internal communication UIs tailored to your knowledge base." }
      ]
    },
    {
      num: "04", icon: "training", title: "Corporate Training & Education", sub: "Elite blockchain and digital asset education trusted by Europe's leading financial institutions and universities.", features: [
        { t: "Proven Academic Excellence", d: "Since 2018, delivering programs to top-tier universities across Switzerland, Liechtenstein, and Europe." },
        { t: "Custom Learning Paths", d: "Onboard legal teams or upgrade developers with tailored, high-impact curricula." },
        { t: "Foundational to Advanced", d: "From digital literacy to deep-tech engineering—closing the divide at every tier." },
        { t: "European Recognition", d: "Trusted by major financial institutions for compliance-grade education." }
      ]
    }
  ];

  const products = [
    {
      num: "01", icon: "support", title: "SupportKit", sub: "The local AI customer support engine built for privacy-critical industries.", features: [
        { t: "On-Premise Document Storage", d: "Train your support AI on internal data, securely stored within your own infrastructure." },
        { t: "Zero Data Leaks", d: "Fully compliant for law firms, medical entities, and fintech platforms." },
        { t: "Automated Resolution", d: "AI agents resolving tier-1 queries with human-like reasoning and technical precision." },
        { t: "Fintech Infrastructure", d: "Custom engineering for exchanges, liquidity providers, and fiat on/off-ramps." }
      ]
    },
    {
      num: "02", icon: "recall", title: "Blockchain Architecture & Smart Contracts", sub: "Immutable data, automated agreements, and institutional-grade compliance layers.", features: [
        { t: "Legal Notarization & Timestamping", d: "Tamper-proof systems for legal verification and chain-of-custody tracking." },
        { t: "Smart Contract Engineering", d: "Development and auditing on EVM-compatible and decentralized networks." },
        { t: "DeFi Infrastructure", d: "Building and integrating decentralized finance protocols for fintech applications." },
        { t: "Chainalysis & Forensic Security", d: "On-chain analytics, transaction tracking, and regulatory risk assessment." }
      ]
    },
    {
      num: "03", icon: "ramp", title: "Privacy-First AI & Office Automation", sub: "Supercharge workflows with advanced AI agents, while keeping 100% of your data private and on-premise.", features: [
        { t: "Local & Sovereign LLMs", d: "Open-source Large Language Models running on your hardware. Your data never leaves your servers." },
        { t: "Agentic Automation Layer", d: "Off-chain AI agents handling complex reasoning, integration, and repetitive workflows." },
        { t: "Self-Hostable Office Automation", d: "Open-source alternatives to cloud suites for total digital sovereignty." },
        { t: "Custom AI UIs", d: "Bespoke chatbots and internal communication UIs tailored to your knowledge base." }
      ]
    },
    {
      num: "04", icon: "training", title: "Corporate Training & Education", sub: "Elite blockchain and digital asset education trusted by Europe's leading financial institutions and universities.", features: [
        { t: "Proven Academic Excellence", d: "Since 2018, delivering programs to top-tier universities across Switzerland, Liechtenstein, and Europe." },
        { t: "Custom Learning Paths", d: "Onboard legal teams or upgrade developers with tailored, high-impact curricula." },
        { t: "Foundational to Advanced", d: "From digital literacy to deep-tech engineering—closing the divide at every tier." },
        { t: "European Recognition", d: "Trusted by major financial institutions for compliance-grade education." }
      ]
    }
  ];

  const curriculum = [
    {
      layer: "Layer 01",
      level: "Foundational",
      desc: "Beginner-tier courses establishing core literacy in decentralized technologies.",
      courses: [
        { t: "Introduction to Bitcoin & Blockchain", d: "Decentralized ledgers and macroeconomic implications." },
        { t: "Ethereum & Smart Contracts", d: "Programmable money and decentralized logic fundamentals." }
      ]
    },
    {
      layer: "Layer 02",
      level: "Operational",
      desc: "Intermediate courses for teams actively working with digital assets.",
      courses: [
        { t: "Digital Asset Operations & Security", d: "Treasury interaction, risk mitigation, transaction management." },
        { t: "Bitcoin Underlying Technologies", d: "Cryptography, consensus mechanisms, network infrastructure." },
        { t: "DeFi & Token Economies", d: "Liquidity pools, tokenomics, new financial primitives." },
        { t: "Smart Contract Development", d: "Practical training on secure code for automated agreements." },
        { t: "Corporate Self-Custody & Privacy", d: "Multi-signature storage without third-party risk." }
      ]
    },
    {
      layer: "Layer 03",
      level: "Engineering",
      desc: "Advanced engineering for protocol-level practitioners.",
      courses: [
        { t: "Bitcoin Core Integration", d: "Protocol-level engineering, script optimization, layer-2 solutions." },
        { t: "On-Chain Forensics & Chainalysis", d: "Transaction tracking, analytics, AML/KYC compliance." },
        { t: "Advanced Solidity Engineering", d: "Gas optimization and protocol security auditing." }
      ]
    }
  ];

  return (
    <div className="pt-32 px-10 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
          <span className="inline-block w-6 h-px bg-purple-bright"></span>
          <span>Services & Products</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-5 max-w-[1400px]">
          Engineered for <span className="text-gradient">serious operators.</span>
        </h2>
        <p className="text-lg text-muted mb-10 max-w-[1400px]">
          A full-spectrum portfolio spanning Bitcoin integration, blockchain architecture, privacy-first AI, and elite corporate education—delivered by a single, consolidated team.
        </p>

        {/* Services */}
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
          <span className="inline-block w-6 h-px bg-purple-bright"></span>
          <span>Services</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-9 rounded-[20px] border border-white/10 transition-all hover:-translate-y-1 bg-gradient-to-b from-white/[0.025] to-white/[0.005] flex flex-col gap-5">
              <div className="flex items-start gap-5">
                <ServiceIcon3D iconType={s.icon} />
                <div>
                  <div className="font-mono text-[11px] text-muted-2 tracking-widest">SERVICE {s.num}</div>
                  <h3 className="font-display text-[22px] font-semibold mt-1.5 mb-2">{s.title}</h3>
                  <p className="text-sm text-purple-bright leading-relaxed">{s.sub}</p>
                </div>
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {s.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2e6bff] to-[#a855f7] mt-1.5"></span>
                    <span><strong className="text-fg font-semibold">{f.t}:</strong> {f.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mt-8 mb-4">
          <span className="inline-block w-6 h-px bg-purple-bright"></span>
          <span>Products</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((s, i) => (
            <div key={i} className="p-9 rounded-[20px] border border-white/10 transition-all hover:-translate-y-1 bg-gradient-to-b from-white/[0.025] to-white/[0.005] flex flex-col gap-5">
              <div className="flex items-start gap-5">
                <ServiceIcon3D iconType={s.icon} />
                <div>
                  <div className="font-mono text-[11px] text-muted-2 tracking-widest">PRODUCT {s.num}</div>
                  <h3 className="font-display text-[22px] font-semibold mt-1.5 mb-2">{s.title}</h3>
                  <p className="text-sm text-purple-bright leading-relaxed">{s.sub}</p>
                </div>
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {s.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2e6bff] to-[#a855f7] mt-1.5"></span>
                    <span><strong className="text-fg font-semibold">{f.t}:</strong> {f.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Curriculum Portfolio Section */}
        <div className="mt-20">
          <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-purple-bright"></span> Curriculum Portfolio
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-5 max-w-[1400px]">
            From foundational literacy to <span className="text-gradient">deep-tech engineering.</span>
          </h3>
          <p className="text-lg text-muted mb-10 max-w-[1400px]">
            Our courses are structured to close the digital divide at every tier of your organization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculum.map((c, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-white/15 bg-gradient-to-b from-white/[0.025] to-white/[0.005]">
                <div className="font-mono text-[11px] text-muted-2 uppercase tracking-widest mb-2">{c.layer}</div>
                <div className="font-display text-[22px] font-semibold mb-1 text-gradient">{c.level}</div>
                <p className="text-sm text-muted mb-6 leading-relaxed">{c.desc}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                  {c.courses.map((course, j) => (
                    <li key={j} className="p-3.5 bg-white/[0.02] border border-white/10 rounded-xl text-sm leading-relaxed transition-all hover:bg-purple/[0.05] hover:border-purple/20">
                      <strong className="text-fg block mb-1 font-semibold text-sm">{course.t}</strong>
                      <span className="text-muted text-xs">{course.d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
