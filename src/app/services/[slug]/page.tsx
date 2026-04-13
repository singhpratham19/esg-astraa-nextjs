import Link from 'next/link'
import { SERVICES, CASE_STUDIES } from '@/lib/data'
import { ArrowRight, CheckCircle2, Target, FileCheck, Leaf, Shield, TrendingUp, BarChart3, Award } from 'lucide-react'
import { notFound } from 'next/navigation'

const SERVICE_IMAGES: Record<string, string> = {
  'esg-strategy-transformation': '/images/service-strategy.jpg',
  'brsr-esg-compliance': '/images/service-compliance.jpg',
  'carbon-advisory-credits': '/images/service-carbon.jpg',
  'esg-risk-governance': '/images/service-risk.jpg',
  'sustainable-finance': '/images/service-finance.jpg',
  'esg-data-intelligence': '/images/service-data.jpg',
}

const SERVICE_BENEFITS: Record<string, string[]> = {
  'esg-strategy-transformation': ['Align ESG with core business strategy for competitive advantage', 'Identify material issues through structured stakeholder engagement', 'Create actionable roadmaps with clear milestones and KPIs', 'Benchmark against industry peers using proprietary data'],
  'brsr-esg-compliance': ['Achieve SEBI BRSR compliance with audit-ready documentation', 'Single reporting effort satisfies GRI, ISSB, TCFD, CDP, and SASB', 'Reduce data collection cycles by 40% with smart architecture', 'Prepare for reasonable assurance with confidence'],
  'carbon-advisory-credits': ['Precise Scope 1/2/3 emissions accounting using GHG Protocol', 'Access premium carbon credits from VCS and Gold Standard registries', 'Navigate India\'s Carbon Credit Trading Scheme framework', 'Build EU CBAM readiness for export-oriented operations'],
  'esg-risk-governance': ['Embed ESG into enterprise risk management frameworks', 'Build board-level ESG oversight structures and committees', 'Assess supply chain ESG risks across your value chain', 'Align with COSO ERM and TCFD risk categories'],
  'sustainable-finance': ['Design green bond frameworks aligned to ICMA principles', 'Structure ESG-linked lending and sustainability-linked loans', 'Quantify climate risk for financial decision-making', 'Engage investors with credible ESG narratives'],
  'esg-data-intelligence': ['Benchmark ESG performance against industry peers', 'Track 200+ KPIs across environmental, social, and governance pillars', 'Generate board-ready dashboards and progress reports', 'Make data-driven decisions with validated industry benchmarks'],
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  return { title: service ? `${service.title} — ESG Astraa` : 'Service — ESG Astraa' }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  const related = CASE_STUDIES[0]
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
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-80 h-64 rounded-2xl bg-gradient-to-br from-violet/15 to-coral/15 flex items-center justify-center shadow-xl">
              {service.slug === 'esg-strategy-transformation' && <Target size={160} className="text-violet/40" strokeWidth={0.5} />}
              {service.slug === 'brsr-esg-compliance' && <FileCheck size={160} className="text-violet/40" strokeWidth={0.5} />}
              {service.slug === 'carbon-advisory-credits' && <Leaf size={160} className="text-violet/40" strokeWidth={0.5} />}
              {service.slug === 'esg-risk-governance' && <Shield size={160} className="text-violet/40" strokeWidth={0.5} />}
              {service.slug === 'sustainable-finance' && <TrendingUp size={160} className="text-violet/40" strokeWidth={0.5} />}
              {service.slug === 'esg-data-intelligence' && <BarChart3 size={160} className="text-violet/40" strokeWidth={0.5} />}
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
            <div className="flex items-center justify-center aspect-[4/3] rounded-2xl bg-gradient-to-br from-violet/10 to-coral/10 shadow-lg">
              {service.slug === 'esg-strategy-transformation' && <Target size={150} className="text-violet/30" strokeWidth={0.5} />}
              {service.slug === 'brsr-esg-compliance' && <FileCheck size={150} className="text-violet/30" strokeWidth={0.5} />}
              {service.slug === 'carbon-advisory-credits' && <Leaf size={150} className="text-violet/30" strokeWidth={0.5} />}
              {service.slug === 'esg-risk-governance' && <Shield size={150} className="text-violet/30" strokeWidth={0.5} />}
              {service.slug === 'sustainable-finance' && <TrendingUp size={150} className="text-violet/30" strokeWidth={0.5} />}
              {service.slug === 'esg-data-intelligence' && <BarChart3 size={150} className="text-violet/30" strokeWidth={0.5} />}
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
              <div className="h-48 bg-gradient-to-br from-violet/10 to-coral/10 flex items-center justify-center">
                <Award size={100} className="text-violet/20" strokeWidth={0.5} />
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
