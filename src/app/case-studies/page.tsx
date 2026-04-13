import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'
import { ArrowRight, Award } from 'lucide-react'

const CASE_IMAGES: Record<string, string> = {
  'manufacturing-brsr': '/images/case-study-1.jpg',
  'energy-carbon-credits': '/images/case-study-2.jpg',
  'finance-green-bond': '/images/case-study-3.jpg',
}

export const metadata = { title: 'Case Studies — ESG Astraa' }

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <span className="section-label mb-4 inline-block">Case Studies</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-2xl">
            Outcomes That Speak for Themselves
          </h1>
          <p className="text-lg text-slate-body/70 max-w-xl leading-relaxed">
            Every engagement follows our Challenge → Approach → Outcome framework. Quantified results, real impact.
          </p>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6 space-y-8">
          {CASE_STUDIES.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}/`}
              className="group card-hover block rounded-2xl border border-slate-border/60 bg-white overflow-hidden no-underline"
            >
              <div className="h-52 bg-gradient-to-br from-violet/12 to-coral/12 flex items-center justify-center">
                <Award size={120} className="text-violet/20" strokeWidth={0.5} />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <span className="text-xs font-display font-semibold text-violet/60 tracking-wider uppercase">{cs.industry}</span>
                    <h2 className="font-display font-bold text-2xl text-base mt-3 mb-4 group-hover:text-violet transition-colors leading-snug">
                      {cs.title}
                    </h2>
                    <p className="text-slate-body/70 leading-relaxed mb-6">{cs.challenge}</p>
                    <span className="inline-flex items-center gap-1.5 text-violet text-sm font-display font-semibold group-hover:gap-3 transition-all">
                      Read Full Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="flex-shrink-0 md:w-64">
                    <div className="bg-slate-bg rounded-xl p-6">
                      <p className="font-display font-bold text-base text-lg mb-4">Key Metrics</p>
                      <div className="space-y-3">
                        {cs.metrics.map((m) => (
                          <div key={m} className="text-sm text-slate-body/70 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" />
                            {m}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-bg text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-base mb-4">Ready to create your own success story?</h2>
          <p className="text-slate-body/60 text-sm mb-8 max-w-md mx-auto">
            Every case study started with a conversation. Let&apos;s start yours.
          </p>
          <Link href="/contact/" className="btn-primary">
            Book Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
