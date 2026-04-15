import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'
import { ArrowRight, TrendingUp, BarChart3, Leaf } from 'lucide-react'

export const metadata = { title: 'Case Studies — ESG Astraa' }

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  Manufacturing: <BarChart3 size={32} className="text-white/30" />,
  Energy: <Leaf size={32} className="text-white/30" />,
  Finance: <TrendingUp size={32} className="text-white/30" />,
}

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #0D1B3E 0%, #1a3a6e 100%)',
  'linear-gradient(135deg, #1a2e1a 0%, #0D3B0D 100%)',
  'linear-gradient(135deg, #2D1B4E 0%, #1a0d3e 100%)',
]

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#0D1B3E' }} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #2E8AEA 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-site mx-auto px-6 relative">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-5">Case Studies</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.06] mb-6 max-w-3xl">
            Outcomes that demonstrate what rigorous ESG advisory delivers.
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl">
            Each case study follows our Challenge → Approach → Outcome framework. Quantified results, documented methodology, measurable impact.
          </p>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="py-12 bg-white border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200/40">
            {[
              { stat: '50+', label: 'Engagements Completed', sub: 'Across all service areas' },
              { stat: '1.2M', label: 'tCO₂e Measured', sub: 'Third-party verified' },
              { stat: '₹500Cr+', label: 'Green Finance Structured', sub: 'Across client mandates' },
              { stat: '8', label: 'Industry Sectors', sub: 'Manufacturing to FinServ' },
            ].map((item) => (
              <div key={item.label} className="bg-white px-8 py-7 text-center">
                <div className="font-display text-3xl font-bold mb-1"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {item.stat}
                </div>
                <p className="text-sm font-bold text-[#0D1B3E] mb-0.5">{item.label}</p>
                <p className="text-xs text-slate-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[#F8F9FC]">
        <div className="max-w-site mx-auto px-6 space-y-8">
          {CASE_STUDIES.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}/`}
              className="group block border border-slate-200/60 bg-white overflow-hidden no-underline hover:border-[#2E8AEA]/30 hover:shadow-md transition-all"
            >
              <div className="grid lg:grid-cols-[320px,1fr]">
                {/* Visual Panel */}
                <div className="h-52 lg:h-auto flex flex-col items-start justify-between p-8 relative overflow-hidden"
                  style={{ background: CARD_GRADIENTS[i % CARD_GRADIENTS.length] }}>
                  {/* Decorative orb */}
                  <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, #2E8AEA, transparent)' }} />
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/40 border border-white/15 px-3 py-1.5 rounded">
                    {cs.industry}
                  </span>
                  <div>
                    {SECTOR_ICONS[cs.industry] || <BarChart3 size={32} className="text-white/30" />}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cs.metrics.slice(0, 2).map((m) => (
                        <span key={m} className="text-[10px] font-bold text-white/40 bg-white/5 border border-white/10 px-2 py-1 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="font-display font-bold text-xl text-[#0D1B3E] mb-4 group-hover:text-[#2E8AEA] transition-colors leading-snug">
                      {cs.title}
                    </h2>
                    <p className="text-slate-600/70 leading-relaxed mb-6 text-sm">{cs.challenge}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    {/* Key Metrics */}
                    <div className="flex flex-wrap gap-3 flex-1">
                      {cs.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }} />
                          <span className="text-xs text-slate-600/65 font-medium">{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#2E8AEA] group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Document */}
      <section className="py-20 bg-white border-y border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">Our Documentation Framework</p>
            <h2 className="font-display text-3xl font-bold text-[#0D1B3E]">How we document every engagement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200/40">
            {[
              { num: '01', title: 'Challenge', desc: 'The specific ESG problem the organisation faced — regulatory exposure, data gaps, investor pressure, or strategic misalignment.' },
              { num: '02', title: 'Approach', desc: 'The methodology applied: which frameworks, data sources, stakeholders engaged, and analytical tools used to diagnose and address the challenge.' },
              { num: '03', title: 'Outcome', desc: 'Quantified results: emissions measured, capital structured, disclosures published, governance structures implemented, regulatory obligations met.' },
            ].map((item) => (
              <div key={item.num} className="bg-white p-9 group hover:bg-[#0D1B3E] transition-colors cursor-default">
                <span className="font-bold text-4xl text-slate-200 group-hover:text-white/10 transition-colors block mb-5">{item.num}</span>
                <h3 className="font-display font-bold text-[#0D1B3E] group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600/55 group-hover:text-white/55 leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Start your own engagement</h2>
            <p className="text-white/50 text-sm">Every case study began with a consultation. Let&apos;s discuss where your organisation stands today.</p>
          </div>
          <Link href="/contact/"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
            Book Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
