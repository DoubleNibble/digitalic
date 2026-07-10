import ServiceIcon3D from "@/components/ServiceIcon3D";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    { num: "01", icon: "bitcoin", title: "Bitcoin Integration & Consulting", sub: "Secure your treasury, accept global payments, and navigate digital asset infrastructure with confidence.", features: [
      { t: "Strategic Consultancy & Education", d: "Tailored training for executive teams, law firms, and financial institutions." },
      { t: "Payment Infrastructure", d: "Seamless integration of Bitcoin payment management for modern merchant ecosystems." },
      { t: "Enterprise Self-Custody", d: "Secure, multi-signature custody frameworks without third-party risk." },
      { t: "Fintech Infrastructure", d: "Custom engineering for exchanges, liquidity providers, and fiat on/off-ramps." }
    ]},
    { num: "02", icon: "blockchain", title: "Blockchain Architecture & Smart Contracts", sub: "Immutable data, automated agreements, and institutional-grade compliance layers.", features: [
      { t: "Legal Notarization & Timestamping", d: "Tamper-proof systems for legal verification and chain-of-custody tracking." },
      { t: "Smart Contract Engineering", d: "Development and auditing on EVM-compatible and decentralized networks." },
      { t: "DeFi Infrastructure", d: "Building and integrating decentralized finance protocols for fintech applications." },
      { t: "Chainalysis & Forensic Security", d: "On-chain analytics, transaction tracking, and regulatory risk assessment." }
    ]},
    { num: "03", icon: "ai", title: "Privacy-First AI & Office Automation", sub: "Supercharge workflows with advanced AI agents, while keeping 100% of your data private and on-premise.", features: [
      { t: "Local & Sovereign LLMs", d: "Open-source Large Language Models running on your hardware. Your data never leaves your servers." },
      { t: "Agentic Automation Layer", d: "Off-chain AI agents handling complex reasoning, integration, and repetitive workflows." },
      { t: "Self-Hostable Office Automation", d: "Open-source alternatives to cloud suites for total digital sovereignty." },
      { t: "Custom AI UIs", d: "Bespoke chatbots and internal communication UIs tailored to your knowledge base." }
    ]}
  ];

  return (
    <div className="pt-32 px-10 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-purple"></span> Services & Products
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-5 max-w-[900px]">
          Engineered for <span className="text-gradient">serious operators.</span>
        </h2>
        <p className="text-lg text-muted mb-10 max-w-[700px]">
          A full-spectrum portfolio spanning Bitcoin integration, blockchain architecture, privacy-first AI, and elite corporate education—delivered by a single, consolidated team.
        </p>

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
      </div>
    </div>
  );
}
