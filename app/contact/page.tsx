"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const showToast = (type: string, message: string) => {
    setToast({ visible: true, type, message });
    setTimeout(() => setToast({ visible: false, type: "", message: "" }), 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Get form values
    const form = e.target as HTMLFormElement;
    const subject = (form.elements.namedItem("subject") as HTMLSelectElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      // Environment variables for EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS configuration. Please check your .env file.");
      }

      // Send email
      await emailjs.send(
        serviceId,
        templateId,
        {
          subject: subject,
          email: email,
          message: message,
        },
        publicKey
      );

      showToast("success", "Message sent successfully! We will be in touch soon.");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("error", "Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSending(false);
    }
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
              <select
                name="subject"
                required
                className="w-full p-3.5 bg-black/30 border border-white/10 rounded-lg text-fg focus:outline-none focus:border-purple focus:bg-purple/5 transition-all"
              >
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
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full p-3.5 bg-black/30 border border-white/10 rounded-lg text-fg focus:outline-none focus:border-purple focus:bg-purple/5 transition-all"
              />
            </div>
            <div className="mb-5">
              <label className="block text-xs text-muted mb-2 font-mono uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                required
                placeholder="Tell us about your organization..."
                className="w-full p-3.5 bg-black/30 border border-white/10 rounded-lg text-fg focus:outline-none focus:border-purple focus:bg-purple/5 transition-all min-h-[140px] resize-vertical"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#2e6bff] to-[#a855f7] hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)] transition-all inline-flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>Send Message <i className="fas fa-paper-plane"></i></>
              )}
            </button>
          </form>

          <div className="flex flex-col gap-5">
            {[
              { icon: "fa-envelope", t: "Email", d: "For inquiries, partnerships, and project briefs. We respond within one business day." },
              { icon: "fa-location-dot", t: "Operating Region", d: "UK, Switzerland, Italy, and greater Europe. On-site engagement available for enterprise clients." },
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

      {/* Toast Notification */}
      {toast.visible && (
        <div
          className={`fixed bottom-8 right-8 p-4 px-6 rounded-xl text-white text-sm font-medium z-[1000] flex items-center gap-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 ${toast.type === "success"
            ? "bg-gradient-to-br from-[#2e6bff] to-[#a855f7]"
            : "bg-gradient-to-br from-red-500 to-red-700"
            }`}
        >
          <i className={`fas ${toast.type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}`}></i>
          {toast.message}
        </div>
      )}
    </div>
  );
}