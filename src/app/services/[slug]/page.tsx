import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, CASE_STUDIES } from '@/lib/data'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'

const SERVICE_IMAGES: Record<string, string> = {
  'esg-strategy-transformation': '/images/service-strategy.jpg',
  'brsr-esg-compliance': '/images/service-compliance.jpg',
  'carbon-advisory-credits': '/images/service-carbon.jpg',
  'esg-risk-governance': '/images/service-risk.jpg',
  'sustainable-finance': '/images/service-finance.jpg',
  'esg-data-intelligence': '/images/service-data.jpg',
}

const SERVICE_SECONDARY_IMAGES: Record<string, string> = {
  'esg-strategy-transformation': '/images/team-meeting.jpg',
  'brsr-esg-compliance': '/images/report-writing.jpg',
  'carbon-advisory-credits': '/images/carbon-forest.jpg',
  'esg-risk-governance': '/images/board-meeting.jpg',
  'sustainable-finance': '/images/office-people.jpg',
  'esg-data-intelligence': '/images/data-analysis.jpg',
}

const CASE_STUDY_IMAGES: Record<string, string> = {
  'manufacturing-brsr': '/images/case-study-1.jpg',
  'energy-carbon-credits': '/images/case-study-2.jpg',
  'finance-green-bond': '/images/case-study-3.jpg',
}

const SERVICE_BENEFITS: Record<string, string[]> = {
  'esg-strategy-transformation': ['Align ESG with core business strategy for competitive advantage', 'Identify material issues through structured stakeholder engagement', 'Create actionable roadmaps with clear milestones and KPIs', 'Benchmark against industry peers using proprietary data'],
  'brsr-esg-compliance': ['Achieve SEBI BRSR compliance with audit-ready documentation', 'Single reporting effort satisfies GRI, ISSB, TCFD, CDP, and SASB', 'Reduce data collection cycles by 40% with smart architecture', 'Prepare for reasonable assurance with confidence'],
  'carbon-advisory-credits': ['Precise Scope 1/2/3 emissions accounting using GHG Protocol', 'Access premium carbon credits from VCS and Gold Standard registries', 'Navigate India\'s Carbon Credit Trading Scheme framework', 'Build EU CBAM readiness for export-oriented operations'],
  'esg-risk-governance': ['Embed ESG into enterprise risk management frameworks', 'Build board-level ESG oversight structures and committees', 'Assess supply chain ESG risks across your value chain', 'Align with COSO ERM and TCFD risk categories'],
  'sustainable-finance': ['Design green, social, and sustainability-linked finance frameworks with ICMA-aligned discipline', 'Structure ESG-linked lending KPIs and sustainability performance targets that withstand lender scrutiny', 'Support transaction ESG due diligence for M&A, PE, VC, and credit processes', 'Prepare institutions for IFRS S1/S2, RBI climate-risk expectations, and investor disclosure demands'],
  'esg-data-intelligence': ['Benchmark ESG performance against industry peers', 'Track 200+ KPIs across environmental, social, and governance pillars', 'Generate board-ready dashboards and progress reports', 'Make data-driven decisions with validated industry benchmarks'],
}

const RELATED_CASE_STUDIES: Record<string, string> = {
  'esg-strategy-transformation': 'manufacturing-brsr',
  'brsr-esg-compliance': 'manufacturing-brsr',
  'carbon-advisory-credits': 'energy-carbon-credits',
  'esg-risk-governance': 'manufacturing-brsr',
  'sustainable-finance': 'finance-green-bond',
  'esg-data-intelligence': 'manufacturing-brsr',
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) {
    return { title: 'Service | ESG Astraa' }
  }

  return {
    title: `${service.title}`,
    description: `${service.title} from ESG Astraa covering ${service.deliverables.slice(0, 2).join(' and ').toLowerCase()} for companies seeking ESG advisory, reporting, compliance, and execution support.`,
    keywords: [
      `${service.title} advisory`,
      `${service.shortTitle} consulting`,
      'ESG advisory India',
      'ESG consulting',
    ],
    alternates: {
      canonical: `/services/${service.slug}/`,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  const related = CASE_STUDIES.find((study) => study.slug === RELATED_CASE_STUDIES[service.slug]) || CASE_STUDIES[0]
  const benefits = SERVICE_BENEFITS[service.slug] || []

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link href="/services/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline hover:gap-2 transition-all">
              ← All Services
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-3xl leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-slate-body/70 max-w-2xl leading-relaxed mb-10">
              {service.hero}
            </p>
            <Link href="/contact/" className="btn-primary">
              {service.cta} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={SERVICE_IMAGES[service.slug]}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/10 to-transparent" />
              <div className="absolute left-6 bottom-6 rounded-xl bg-white/92 px-5 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-violet mb-1">Advisory Practice</p>
                <p className="font-display font-bold text-base text-base">{service.shortTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      {benefits.length > 0 && (
        <section className="py-16 bg-base">
          <div className="max-w-site mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 size={20} className="text-coral mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/80 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white border-b border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 max-w-5xl mx-auto items-start">
            <div className="relative min-h-[460px] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={SERVICE_SECONDARY_IMAGES[service.slug]}
                alt={`${service.title} engagement`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/65 via-base/10 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 rounded-xl bg-white/90 p-5 backdrop-blur-sm">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-violet mb-2">How We Engage</p>
                <p className="text-sm text-slate-body/75 leading-relaxed">
                  Each engagement blends strategic advisory, operating design, and evidence-backed execution support tailored to your organisation.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-border/60 bg-slate-bg/40 p-8">
              <span className="section-label mb-4 inline-block">Where We Engage</span>
              <h2 className="font-display text-2xl font-bold text-base mt-4 mb-6">Who This Service Is For</h2>
              <ul className="space-y-4">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-coral mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-body/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              </div>
              <div className="rounded-2xl border border-slate-border/60 bg-white p-8 shadow-sm">
                <span className="section-label mb-4 inline-block">Expected Outputs</span>
                <h2 className="font-display text-2xl font-bold text-base mt-4 mb-6">Typical Deliverables</h2>
                <ul className="space-y-4">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-violet/40 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-body/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            {service.sections.map((sec, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-display font-bold text-3xl text-violet/15">0{i + 1}</span>
                  <h2 className="font-display text-2xl font-bold text-base">{sec.title}</h2>
                </div>
                {'content' in sec && sec.content && (
                  <p className="text-slate-body/80 leading-relaxed">{sec.content}</p>
                )}
                {'items' in sec && sec.items && (
                  <ul className="space-y-3 mt-4">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-violet/40 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-body/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page Image Break */}
      <section className="bg-slate-bg">
        <div className="max-w-site mx-auto px-6 py-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={SERVICE_IMAGES[service.slug]}
                alt={`${service.title} methodology`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            </div>
            <div>
              <span className="section-label mb-4 inline-block">Our Methodology</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-base mt-4 mb-6">
                How We Deliver Results
              </h2>
              <div className="space-y-5">
                {[
                  { step: '01', title: 'Discovery & Scoping', desc: 'We begin with a thorough assessment of your current state, identifying gaps, risks, and opportunities specific to your organisation.' },
                  { step: '02', title: 'Strategy & Roadmap', desc: 'Using proprietary data and industry benchmarks, we design a clear, actionable roadmap aligned to your business goals.' },
                  { step: '03', title: 'Execution & Support', desc: 'Our team works alongside yours — building systems, training staff, and delivering outputs that meet regulatory and stakeholder standards.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className="font-display font-bold text-xl text-violet/25 mt-0.5">{s.step}</span>
                    <div>
                      <h4 className="font-display font-bold text-base mb-1">{s.title}</h4>
                      <p className="text-sm text-slate-body/70">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-6 inline-block">Related Case Study</span>
            <Link href={`/case-studies/${related.slug}/`} className="group card-hover block rounded-2xl border border-slate-border/60 bg-white overflow-hidden no-underline mt-4">
              <div className="relative h-56">
                <Image
                  src={CASE_STUDY_IMAGES[related.slug] || '/images/case-study-1.jpg'}
                  alt={related.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <span className="text-xs font-display font-semibold text-coral tracking-wider uppercase">{related.industry}</span>
                <h3 className="font-display font-bold text-xl text-base mt-3 mb-3 group-hover:text-violet transition-colors">{related.title}</h3>
                <p className="text-sm text-slate-body/70 mb-5">{related.outcome}</p>
                <span className="inline-flex items-center gap-1.5 text-violet text-sm font-display font-semibold">
                  Read Full Case Study <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-base text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{service.cta}</h2>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            Speak with our advisory team to explore how we can support your organisation.
          </p>
          <Link href="/contact/" className="btn-primary bg-coral hover:bg-coral-light">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
