import Link from 'next/link'
import { SERVICES, INDUSTRIES } from '@/lib/data'
import ButterflyLogo from './ButterflyLogo'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white/60">
      {/* CTA Band */}
      <div className="border-b border-white/8">
        <div className="max-w-site mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="w-8 h-[3px] bg-[#0091DA] mb-5" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Ready to turn ESG complexity into strategic advantage?
            </h3>
            <p className="text-white/40 text-sm">
              Book a complimentary 30-minute consultation with our advisory team.
            </p>
          </div>
          <Link href="/contact/" className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-display font-semibold text-white px-8 py-4 bg-[#00338D] hover:bg-[#002266] transition-colors whitespace-nowrap">
            Book Consultation →
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <ButterflyLogo size={30} variant="white" />
              <div className="border-l border-white/20 pl-3 leading-tight">
                <span className="font-display font-bold text-sm text-white block">ESG Astraa</span>
                <span className="text-[9px] text-white/30 tracking-[0.12em] uppercase">A MindEarth Company</span>
              </div>
            </div>
            <p className="text-sm text-white/30 leading-relaxed mb-6">
              Strategic ESG advisory with data-backed execution for emerging markets.
            </p>
            <div className="flex flex-wrap gap-2">
              {['GRI', 'ISSB', 'BRSR', 'TCFD', 'CSRD'].map((f) => (
                <span key={f} className="text-[10px] font-display font-semibold tracking-wider text-white/25 border border-white/10 px-2 py-1">{f}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-xs text-white/50 tracking-[0.12em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-sm text-white/35 hover:text-white/80 transition-colors no-underline">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-bold text-xs text-white/50 tracking-[0.12em] uppercase mb-5">Industries</h4>
            <ul className="space-y-3">
              {INDUSTRIES.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}/`} className="text-sm text-white/35 hover:text-white/80 transition-colors no-underline">
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-xs text-white/50 tracking-[0.12em] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about/' },
                { label: 'Insights', href: '/insights/' },
                { label: 'Case Studies', href: '/case-studies/' },
                { label: 'Contact', href: '/contact/' },
                { label: 'Privacy Policy', href: '/privacy-policy/' },
                { label: 'Terms of Service', href: '/terms-of-service/' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/35 hover:text-white/80 transition-colors no-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-site mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© 2026 ESG Astraa, a MindEarth Consulting Company. All rights reserved.</p>
          <p className="text-xs text-white/20">Pune, Maharashtra, India · advisory@esgastraa.com</p>
        </div>
      </div>
    </footer>
  )
}
