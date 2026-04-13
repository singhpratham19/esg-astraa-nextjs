'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'
import { Menu, X } from 'lucide-react'
import ButterflyLogo from './ButterflyLogo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md border-b border-slate-border/60' : 'bg-white/97 backdrop-blur-sm border-b border-slate-border/40'
    }`}>
      <div className="max-w-site mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <ButterflyLogo size={36} variant="gradient" />
          <div className="border-l border-slate-200 pl-3 leading-tight">
            <span className="font-display font-bold text-[14px] tracking-tight block text-[#00338D]">
              ESG Astraa
            </span>
            <span className="text-[9px] text-slate-body/45 font-medium tracking-[0.12em] uppercase">A MindEarth Company</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display font-semibold text-[13px] text-slate-body/70 hover:text-[#00338D] transition-colors no-underline tracking-wide relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00338D] group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact/" className="text-[13px] font-display font-semibold text-slate-body/60 hover:text-[#00338D] transition-colors no-underline">
            Contact
          </Link>
          <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-display font-semibold text-white px-5 py-2.5 bg-[#00338D] hover:bg-[#002266] transition-colors">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-slate-body/70"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-border/40 shadow-lg">
          <nav className="max-w-site mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display font-semibold text-sm text-slate-body hover:text-[#00338D] transition-colors no-underline py-3 border-b border-slate-border/20"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact/" onClick={() => setOpen(false)} className="mt-4 text-center text-[13px] font-display font-semibold text-white px-5 py-3 bg-[#00338D] hover:bg-[#002266] transition-colors">
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
