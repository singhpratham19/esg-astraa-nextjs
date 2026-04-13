import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'
import { ArrowRight, Award } from 'lucide-react'
import { notFound } from 'next/navigation'

const CASE_IMAGES: Record<string, string> = {
  'manufacturing-brsr': '/images/case-study-1.jpg',
  'energy-carbon-credits': '/images/case-study-2.jpg',
  'finance-green-bond': '/images/case-study-3.jpg',
}

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES.find((c) => c.slug === params.slug)
  return { title: cs ? `${cs.title} — ESG Astraa` : 'Case Study — ESG Astraa' }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES.find((c) => c.slug === params.slug)
  if (!cs) return notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="h-64 md:h-80 bg-gradient-to-br from-violet/12 to-coral/12 flex items-center justify-center">
          <Award size={200} className="text-violet/15" strokeWidth={0.5} />
        </div>
        <div className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-12 md:py-16">
          <div className="max-w-site mx-auto px-6">
            <Link href="/case-studies/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline hover:gap-2 transition-all">
              ← All Case Studies
            </Link>
            <span className="block text-xs font-display font-semibold text-coral tracking-wider uppercase mt-4 mb-4">{cs.industry}</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-base mb-6 max-w-3xl leading-tight">
              {cs.title}
            </h1>
            <p className="text-xl text-violet font-display font-semibold">{cs.outcome}</p>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-base py-10">
        <div className="max-w-site mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {cs.metrics.map((m) => (
            <div key={m} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{m.split(' ')[0]}</div>
              <div className="text-xs text-white/40 mt-1">{m.split(' ').slice(1).join(' ')}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-display font-bold text-3xl text-violet/15">01</span>
              <h2 className="font-display text-2xl font-bold text-base">The Challenge</h2>
            </div>
            <p className="text-slate-body/80 leading-relaxed text-lg">{cs.challenge}</p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-display font-bold text-3xl text-violet/15">02</span>
              <h2 className="font-display text-2xl font-bold text-base">Our Approach</h2>
            </div>
            <p className="text-slate-body/80 leading-relaxed text-lg">{cs.approach}</p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-display font-bold text-3xl text-violet/15">03</span>
              <h2 className="font-display text-2xl font-bold text-base">The Outcome</h2>
            </div>
            <p className="text-slate-body/80 leading-relaxed text-lg">{cs.result}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-bg text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-base mb-4">
            Achieve Similar Results for Your Organisation
          </h2>
          <p className="text-slate-body/60 text-sm mb-8 max-w-md mx-auto">
            Our advisory team is ready to understand your challenges and design a tailored engagement.
          </p>
          <Link href="/contact/" className="btn-primary">
            Book Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
