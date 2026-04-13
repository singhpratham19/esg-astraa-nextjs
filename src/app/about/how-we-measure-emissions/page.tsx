import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = { title: 'How We Measure Emissions — ESG Astraa' }

export default function EmissionsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <Link href="/about/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline">← About</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-3xl">How We Measure Emissions</h1>
          <p className="text-lg text-slate-body/70 max-w-2xl leading-relaxed">
            Our proprietary emissions modelling approach delivers precise Scope 1, 2, and 3 accounting — verified against international standards and integrated with reporting frameworks.
          </p>
        </div>
      </section>
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {[
            { num: '01', title: 'Scope 1/2/3 Measurement Framework', content: 'We follow the GHG Protocol Corporate Standard for Scope 1 and 2, and the GHG Protocol Corporate Value Chain Standard for Scope 3 — ensuring comprehensive boundary setting and categorisation.' },
            { num: '02', title: 'Data Sources & Emission Factors', content: 'Our modelling draws on IPCC emission factors, national grid emission factors, industry-specific databases, and client operational data to ensure accuracy calibrated to Indian conditions.' },
            { num: '03', title: 'Proprietary Modelling Approach', content: 'Our emissions engine automates factor application, handles unit conversions, and applies activity-based and spend-based methodologies — reducing manual error and accelerating assessment cycles.' },
            { num: '04', title: 'Accuracy & Verification', content: 'Every assessment undergoes internal quality review, cross-referencing against industry benchmarks. Our methodology is designed to be assurance-ready from day one.' },
            { num: '05', title: 'Integration with Reporting Frameworks', content: 'Emissions data flows directly into BRSR, GRI, CDP, and TCFD disclosures — eliminating duplication and ensuring consistency across frameworks.' },
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
      <section className="py-16 bg-base text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-4">Book a Carbon Assessment</h2>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">Understand your organisation&apos;s carbon footprint with precision measurement.</p>
          <Link href="/contact/" className="btn-primary bg-coral hover:bg-coral-light">Request Assessment <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
