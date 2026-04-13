import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'ESG Data & Analytics Approach — ESG Astraa' }

export default function DataAnalyticsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <Link href="/about/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline">← About</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-3xl">Our ESG Data & Analytics Approach</h1>
          <p className="text-lg text-slate-body/70 max-w-2xl leading-relaxed">
            What separates ESG Astraa from generic consultants is the proprietary data infrastructure that powers every engagement — from benchmarking to tracking to reporting.
          </p>
        </div>
      </section>
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {[
            { num: '01', title: 'Benchmarking Data Architecture', content: 'Our proprietary database covers ESG performance metrics across sectors, geographies, and frameworks — enabling peer comparison that goes beyond surface-level benchmarks.' },
            { num: '02', title: 'Industry KPI Libraries', content: 'We maintain curated KPI libraries for each industry we serve — from manufacturing emission intensities to financial services portfolio alignment metrics. These libraries ensure engagements are calibrated to sector-specific material issues.' },
            { num: '03', title: 'Peer Comparison Methodology', content: 'Our analytics engine enables side-by-side comparison of ESG performance against industry peers, best-in-class performers, and regulatory thresholds — providing actionable context for every data point.' },
            { num: '04', title: 'How Data Informs Recommendations', content: 'Every strategic recommendation is grounded in quantified evidence. We show the gap, the benchmark, the trajectory, and the investment case — ensuring advisory that executives can act on.' },
            { num: '05', title: 'Data Governance & Accuracy', content: 'Rigorous data sourcing protocols, multi-layer validation, and audit-trail documentation ensure every insight we deliver meets assurance-grade standards.' },
          ].map((s) => (
            <div key={s.num}>
              <div className="flex items-center gap-4 mb-5">
                <span className="font-display font-bold text-3xl text-violet/15">{s.num}</span>
                <h2 className="font-display text-2xl font-bold text-base">{s.title}</h2>
              </div>
              <p className="text-slate-body/80 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-slate-bg text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-base mb-4">Experience Our Data Capabilities</h2>
          <p className="text-slate-body/60 text-sm mb-8 max-w-md mx-auto">Book a consultation to see how our analytics infrastructure enhances advisory outcomes.</p>
          <Link href="/contact/" className="btn-primary">Book Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
