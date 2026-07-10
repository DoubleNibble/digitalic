import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-20 px-10 border-t border-white/10 bg-gradient-to-b from-transparent to-purple/5 relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-[60px]">
        <div>
          <Link href="/" className="font-logo text-4xl font-bold flex flex-col leading-none mb-4">
            <span><span className="text-blue-bright">dig</span><span className="text-purple-bright italic -skew-x-12 inline-block">italic</span></span>
            <span className="text-[7px] text-purple-bright font-logo font-medium px-16">emphasize your business</span>
          </Link>
          <p className="text-[13px] text-muted max-w-[320px] leading-relaxed">
            AI-Driven. Blockchain-Secured. Under Your Control. We bridge the digital divide for SMBs, fintech, and law firms across Europe.
          </p>
        </div>
        <div>
          <h5 className="font-display text-[13px] font-semibold uppercase tracking-widest mb-4">Navigation</h5>
          <ul className="flex flex-col gap-2.5 list-none p-0">
            <li><Link href="/" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-[13px] text-muted hover:text-purple-bright transition-colors">About</Link></li>
            <li><Link href="/services" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Services</Link></li>
            <li><Link href="/who-we-are" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Who We Are</Link></li>
            <li><Link href="/contact" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display text-[13px] font-semibold uppercase tracking-widest mb-4">Services</h5>
          <ul className="flex flex-col gap-2.5 list-none p-0">
            <li><Link href="/services" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Bitcoin Integration</Link></li>
            <li><Link href="/services" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Blockchain Architecture</Link></li>
            <li><Link href="/services" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Privacy-First AI</Link></li>
            <li><Link href="/services" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Corporate Training</Link></li>
            <li><Link href="/services" className="text-[13px] text-muted hover:text-purple-bright transition-colors">SupportKit</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display text-[13px] font-semibold uppercase tracking-widest mb-4">Legal</h5>
          <ul className="flex flex-col gap-2.5 list-none p-0">
            <li><span className="text-[13px] text-muted hover:text-purple-bright transition-colors cursor-pointer">Privacy Policy</span></li>
            <li><span className="text-[13px] text-muted hover:text-purple-bright transition-colors cursor-pointer">Terms of Service</span></li>
            <li><Link href="/contact" className="text-[13px] text-muted hover:text-purple-bright transition-colors">Get in Touch</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto py-7 border-t border-white/10 flex justify-between items-center flex-wrap gap-5">
        <p className="text-[12px] text-muted-2 font-mono">© 2025 DIGITALIC LTD. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-3">
          <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-gradient-to-br hover:from-[#2e6bff] hover:to-[#a855f7] transition-all cursor-pointer">
            <i className="fab fa-linkedin-in"></i>
          </span>
          <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-gradient-to-br hover:from-[#2e6bff] hover:to-[#a855f7] transition-all cursor-pointer">
            <i className="fab fa-x-twitter"></i>
          </span>
        </div>
      </div>
    </footer>
  );
}
