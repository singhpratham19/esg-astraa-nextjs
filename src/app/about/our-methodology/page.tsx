import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = { title: 'Our Methodology — ESG Astraa' }

export default function MethodologyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <Link href="/about/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline">← About</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-3xl">Our Advisory Methodology</h1>
          <p className="text-lg text-slate-body/70 max-w-2xl leading-relaxed">
            A rigorous, repeatable framework that ensures every engagement delivers measurable, auditable outcomes — powered by proprietary data infrastructure.
          </p>
        </div>
      </section>
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {[
            { num: '01', title: 'Assess', points: ['Baseline ESG performance measurement', 'Gap analysis against target frameworks', 'Materiality assessment with stakeholder input', 'Industry peer benchmarking using proprietary data'] },
            { num: '02', title: 'Strategise', points: ['ESG roadmap aligned to business strategy', 'Regulatory timeline mapping', 'Resource and capability planning', 'Stakeholder engagement strategy'] },
            { num: '03', title: 'Implement', points: ['Data collection architecture design', 'Reporting system deployment', 'Governance structure establishment', 'Training and capability building'] },
            { num: '04', title: 'Measure', points: ['Continuous KPI monitoring', 'Disclosure management and reporting', 'Assurance-readiness preparation', 'Stakeholder communication support'] },
          ].map((p) => (
            <div key={p.num}>
              <div className="flex items-center gap-4 mb-5">
                <span className="font-display font-bold text-3xl text-violet/15">{p.num}</span>
                <h2 className="font-display text-2xl font-bold text-base">{p.title}</h2>
              </div>
              <ul className="space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-violet/40 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-body/80">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-slate-bg text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-base mb-4">Experience Our Methodology</h2>
          <p className="text-slate-body/60 text-sm mb-8 max-w-md mx-auto">Book a consultation to understand how our framework applies to your organisation.</p>
          <Link href="/contact/" className="btn-primary">Book Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
