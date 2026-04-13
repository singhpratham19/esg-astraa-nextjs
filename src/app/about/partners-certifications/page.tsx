import Link from 'next/link'
import { FRAMEWORKS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Partners & Certifications — ESG Astraa' }

export default function PartnersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <Link href="/about/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline">← About</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-3xl">Partners & Certifications</h1>
          <p className="text-lg text-slate-body/70 max-w-2xl leading-relaxed">
            Our advisory credibility is reinforced by framework certifications, registry partnerships, and a network of domain specialists.
          </p>
        </div>
      </section>
      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-base mb-10 text-center">Framework Certifications & Alignments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 max-w-4xl mx-auto">
            {FRAMEWORKS.map((f) => (
              <div key={f} className="bg-slate-bg rounded-xl p-6 text-center">
                <span className="font-display font-bold text-lg text-violet">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-section bg-slate-bg">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          <h2 className="font-display text-2xl font-bold text-base text-center">Partnership Ecosystem</h2>
          {[
            { title: 'Carbon Registry Partnerships', desc: 'We work with VCS (Verra), Gold Standard, and Indian domestic registries to facilitate carbon credit registration, verification, and trading.' },
            { title: 'Industry Body Affiliations', desc: 'Active engagement with CII, FICCI, and sector-specific industry bodies to contribute to ESG policy development and knowledge sharing.' },
            { title: 'Academic & Research Partners', desc: 'Collaborations with research institutions to ensure our methodology reflects the latest in sustainability science and ESG measurement.' },
          ].map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-7 border border-slate-border/60">
              <h3 className="font-display font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-slate-body/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-base text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Partner With Us</h2>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">Interested in partnership or collaboration opportunities? Get in touch.</p>
          <Link href="/contact/" className="btn-primary bg-coral hover:bg-coral-light">Contact Us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
