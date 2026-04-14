'use client'
import { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'
import { Menu, X, ChevronDown } from 'lucide-react'
import ButterflyLogo from './ButterflyLogo'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2847]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline flex-shrink-0">
          <ButterflyLogo size={32} variant="gradient" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-[14px] font-medium text-white/80 hover:text-white transition-colors no-underline flex items-center gap-1.5">
              {link.label}
              <ChevronDown size={14} className="opacity-50" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <Link href="/auth/signin" className="text-[14px] font-medium text-white/80 hover:text-white transition-colors no-underline">
            Sign In
          </Link>
          <Link href="/request-demo" className="text-[14px] font-bold text-white px-5 py-2.5 rounded-lg transition-all hover:opacity-90 hover:shadow-md"
            style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
            Request Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#152038] border-t border-white/10 shadow-lg">
          <nav className="max-w-site mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="font-medium text-sm text-white/80 hover:text-white transition-colors no-underline py-3 border-b border-white/10">
                {link.label}
              </Link>
            ))}
            <div className="mt-6 space-y-3">
              <Link href="/auth/signin" onClick={() => setOpen(false)}
                className="block text-center text-sm font-medium text-white/80 no-underline py-2">
                Sign In
              </Link>
              <Link href="/request-demo" onClick={() => setOpen(false)}
                className="block text-center text-[13px] font-bold text-white px-5 py-3 rounded-lg transition-all"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Request Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
