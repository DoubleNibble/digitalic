"use client";
import { useState } from "react";

export default function ContactPage() {
  const [toast, setToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 px-10 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[11px] text-purple-bright font-mono uppercase tracking-[0.2em] mb-4">
          <span className="w-6 h-px bg-purple"></span> Contact
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-5 max-w-[900px]">
          Let's build your next step—<span className="text-gradient">together.</span>
        </h2>
        <p className="text-lg text-muted mb-10 max-w-[700px]">
          Whether you are training your teams, redesigning your operations, or entering the world of digital assets, Digitalic is your partner for <strong className="text-fg">clear, confident, and controlled innovation</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="p-10 rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.025] to-white/[0.005]">
            <div className="mb-5">
              <label className="block text-xs text-muted mb-2 font-mono uppercase tracking-widest">Subject</label>
              <select required className="w-full p-3.5 bg-black/30 border border-white/10 rounded-lg text-fg focus:outline-none focus:border-purple focus:bg-purple/5 transition-all">
                <option value="">Select a topic...</option>
                <option>Bitcoin Integration & Consulting</option>
                <option>Blockchain Architecture & Smart Contracts</option>
                <option>Privacy-First AI & Office Automation</option>
                <option>Corporate Training & Education</option>
                <option>SupportKit / RecallAI</option>
                <option>White-Label On/Off Ramp</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-xs text-muted mb-2 font-mono uppercase tracking-widest">Email Address</label>
              <input type="email" required placeholder="you@company.com" className="w-full p-3.5 bg-black/30 border border-white/10 rounded-lg text-fg focus:outline-none focus:border-purple focus:bg-purple/5 transition-all" />
            </div>
            <div className="mb-5">
              <label className="block text-xs text-muted mb-2 font-mono uppercase tracking-widest">Message</label>
              <textarea required placeholder="Tell us about your organization..." className="w-full p-3.5 bg-black/30 border border-white/10 rounded-lg text-fg focus:outline-none focus:border-purple focus:bg-purple/5 transition-all min-h-[140px] resize-vertical"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#2e6bff] to-[#a855f7] hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)] transition-all inline-flex justify-center items-center gap-2">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>

          <div className="flex flex-col gap-5">
            {[
              { icon: "fa-envelope", t: "Email", d: "For inquiries, partnerships, and project briefs. We respond within one business day." },
              { icon: "fa-location-dot", t: "Operating Region", d: "Switzerland, Liechtenstein, and greater Europe. On-site engagement available for enterprise clients." },
              { icon: "fa-clock", t: "Response Time", d: "Initial consultation scheduled within 48 hours of inquiry. Priority routing for regulated industries." },
              { icon: "fa-lock", t: "Confidentiality", d: "All inquiries are handled under strict NDA. Privacy by design—before, during, and after engagement." }
            ].map((c, i) => (
              <div key={i} className="p-7 rounded-2xl border border-white/10 hover:border-white/15 transition-all bg-gradient-to-b from-white/[0.025] to-white/[0.005]">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-purple-bright border border-white/15" style={{ background: "linear-gradient(135deg, rgba(46,107,255,0.15), rgba(168,85,247,0.15))" }}>
                  <i className={`fas ${c.icon}`}></i>
                </div>
                <h4 className="font-display text-base font-semibold mb-1.5">{c.t}</h4>
                <p className="text-sm text-muted leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-8 right-8 p-4 px-6 rounded-xl text-white text-sm font-medium z-[1000] flex items-center gap-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.3)]" style={{ background: "linear-gradient(135deg, rgba(46,107,255,0.95), rgba(168,85,247,0.95))" }}>
          <i className="fas fa-check-circle"></i> Message sent successfully
        </div>
      )}
    </div>
  );
}
