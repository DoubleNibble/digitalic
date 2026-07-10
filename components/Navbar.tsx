"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/training", label: "Training" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${scrolled ? "py-3 bg-[#050510]/70 backdrop-blur-xl border-b border-white/10" : "py-5"}`}>
        <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between gap-10">
          <Link href="/" className="font-logo text-4xl font-bold  flex flex-col leading-none">
            <span><span className="text-blue-bright">dig</span><span className="text-purple-bright italic -skew-x-12 inline-block">italic</span></span>
            <span className="text-[8px] text-purple-bright font-logo font-medium mt-0.1 px-14">emphasize your business</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 list-none p-0 m-0">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3.5 py-2 text-[13px] rounded-lg transition-all font-medium relative ${pathname === link.href ? "text-fg" : "text-muted hover:text-fg hover:bg-white/5"}`}
                >
                  {link.label}
                  {pathname === link.href && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-bright rounded-full shadow-[0_0_8px_#a855f7]"></span>}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="hidden lg:block px-5 py-2.5 text-white text-[13px] font-semibold rounded-lg relative overflow-hidden group bg-gradient-to-br from-[#2e6bff] to-[#a855f7] hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)] transition-all hover:-translate-y-0.5">
            <span className="relative z-10">Secure Your Future</span>
            <span className="absolute inset-0 bg-gradient-to-br from-[#a855f7] to-[#2e6bff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>

          <button className="lg:hidden text-fg text-xl bg-none border-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-4/5 max-w-[320px] h-screen bg-[#0a0a1a]/95 backdrop-blur-xl border-l border-white/10 z-[200] p-10 pt-20 lg:hidden">
          <ul className="list-none p-0 m-0">
            {navLinks.map(link => (
              <li key={link.href} className="py-3.5 border-b border-white/10">
                <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-fg no-underline text-base font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
