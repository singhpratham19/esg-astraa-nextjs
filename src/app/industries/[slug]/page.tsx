import Link from 'next/link'
import { CASE_STUDIES, INDUSTRIES, SERVICES } from '@/lib/data'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug)
  if (!ind) {
    return { title: 'Industry | ESG Astraa' }
  }

  return {
    title: `${ind.title} ESG Advisory`,
    description: `${ind.title} ESG advisory covering ${ind.focus.slice(0, 3).join(', ').toLowerCase()} for organisations that need sector-specific ESG strategy, compliance, and reporting support.`,
    keywords: [
      `${ind.title} ESG advisory`,
      `${ind.title} ESG consulting`,
      `${ind.title} ESG strategy`,
      `${ind.title} ESG reporting`,
    ],
    alternates: {
      canonical: `/industries/${ind.slug}/`,
    },
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug)
  if (!ind) return notFound()

  const relatedServices = ind.relevantServiceSlugs
    .map((slug) => SERVICES.find((service) => service.slug === slug))
    .filter((service): service is (typeof SERVICES)[number] => Boolean(service))

  const relatedCaseStudy =
    CASE_STUDIES.find((study) => {
      if (ind.slug === 'manufacturing') return study.slug === 'manufacturing-brsr'
      if (ind.slug === 'energy-power') return study.slug === 'energy-carbon-credits'
      if (ind.slug === 'financial-services') return study.slug === 'finance-green-bond'
      return false
    }) || CASE_STUDIES[0]

  return (
    <main>
      <section className="bg-white border-b border-slate-border/50 pt-32 pb-20">
        <div className="max-w-site mx-auto px-6">
          <div className="flex items-center gap-2 text-xs text-slate-body/35 font-medium mb-10">
            <Link href="/" className="hover:text-slate-body/60 transition-colors no-underline">Home</Link>
            <span>/</span>
            <Link href="/industries/" className="hover:text-slate-body/60 transition-colors no-underline">Industries</Link>
            <span>/</span>
            <span className="text-slate-body/55">{ind.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <span className="section-label mb-5 inline-flex">Industry ESG Advisory</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-[#0D1B3E] leading-[1.05] tracking-tight mt-3 mb-5">
                {ind.title}
              </h1>
              <p className="text-base text-slate-body/65 leading-relaxed max-w-lg mb-10">
                {ind.desc}. We tailor ESG advisory to the material issues, regulatory context, and value creation opportunities that matter in this sector.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="btn-primary">
                  Book Sector Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[6px] text-sm font-semibold border transition-all no-underline border-slate-border/60 text-slate-body/60 hover:text-[#00338D] hover:border-[#00338D]/30"
                >
                  Explore Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-slate-border/50 border border-slate-border/60 rounded-xl overflow-hidden bg-slate-bg">
              {[
                { val: String(ind.focus.length), lbl: 'Focus Areas' },
                { val: String(ind.regulatory.length), lbl: 'Regulatory Themes' },
                { val: String(relatedServices.length), lbl: 'Relevant Services' },
              ].map((stat) => (
                <div key={stat.lbl} className="p-7 text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-2">{stat.val}</div>
                  <div className="text-[11px] text-slate-body/40 leading-snug">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <span className="section-label mb-5 inline-flex">Sector Overview</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-5">
                ESG in {ind.title}
              </h2>
              <p className="text-slate-body/65 leading-[1.85] text-[15px] mb-5">{ind.overview}</p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-bold mt-3 hover:gap-3 transition-all no-underline text-[#00338D]"
              >
                Discuss Our {ind.title} Practice <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#2E8AEA] to-[#7516EA] rounded-full"></div>
                <h3 className="font-display text-lg font-bold text-[#0D1B3E]">Key Engagement Areas</h3>
              </div>
              <div className="flex flex-col divide-y divide-slate-border/40 border border-slate-border/50 rounded-2xl overflow-hidden">
                {ind.engagementHighlights.map((item, i) => (
                  <div key={String(item)} className="flex items-start gap-6 px-8 py-7 bg-white hover:bg-slate-bg/50 transition-colors group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#EEF4FF] to-[#F3E8FF] flex items-center justify-center border border-[#2E8AEA]/20">
                      <span className="text-sm font-bold bg-gradient-to-r from-[#2E8AEA] to-[#7516EA] bg-clip-text text-transparent">0{i + 1}</span>
                    </div>
                    <p className="text-[15px] text-slate-body/70 leading-relaxed pt-2 group-hover:text-slate-body/90 transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 bg-slate-bg border-y border-slate-border/50 mt-24">
          <div className="max-w-site mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label mb-5 inline-flex justify-center">Regulatory Landscape</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 mb-4">
                What shapes ESG obligations in {ind.title}
              </h2>
              <p className="text-slate-body/55 leading-relaxed">
                We track the rules, market expectations, and disclosure themes that are most likely to affect organisations in this sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {ind.regulatory.map((item, i) => (
                <div key={item} className="bg-white border border-slate-border/50 rounded-xl p-8 hover:shadow-md hover:border-[#2E8AEA]/25 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white bg-[#00338D]">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <h4 className="font-display font-bold text-[#0D1B3E]">{item}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-center mb-14">
              <span className="section-label mb-5 inline-flex justify-center">Sector Landscape</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3">
                Challenges and opportunities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-border/50 rounded-xl overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-border/40">
                  <h3 className="font-display font-bold text-[#0D1B3E]">Key ESG challenges</h3>
                  <p className="text-xs text-slate-body/40">Common pressure points in this sector</p>
                </div>
                <div className="divide-y divide-slate-border/30">
                  {ind.challenges.map((item, i) => (
                    <div key={item} className="flex items-start gap-4 px-8 py-5">
                      <span className="text-xs font-bold text-slate-body/20 mt-0.5 flex-shrink-0 tabular-nums">0{i + 1}</span>
                      <p className="text-sm text-slate-body/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-border/50 rounded-xl overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-border/40">
                  <h3 className="font-display font-bold text-[#0D1B3E]">Value creation opportunities</h3>
                  <p className="text-xs text-slate-body/40">Where ESG work can move the needle</p>
                </div>
                <div className="divide-y divide-slate-border/30">
                  {ind.opportunities.map((item) => (
                    <div key={item} className="flex items-start gap-4 px-8 py-5">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-[#2E8AEA]" />
                      <p className="text-sm text-slate-body/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 bg-slate-bg border-y border-slate-border/50">
          <div className="max-w-site mx-auto px-6">
            <div className="mb-12">
              <span className="section-label mb-5 inline-flex">Material Topics</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-8">
                ESG material topics in {ind.title}
              </h2>

              <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-border/40">
                {['GRI Frameworks'].map((tab) => (
                  <span
                    key={tab}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-body/60 border border-slate-border/60 rounded-full bg-white"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#2E8AEA]"></span>
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-border/50 p-8">
              <div className="space-y-6">
                {ind.materialTopics.map((item) => (
                  <div key={item.topic} className="pb-6 border-b border-slate-border/20 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-semibold text-[#0D1B3E] text-[15px]">{item.topic}</h4>
                      <span className="flex-shrink-0 px-3 py-1 text-xs font-bold bg-[#EEF4FF] text-[#2E8AEA] rounded-full whitespace-nowrap">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-sm text-slate-body/65 leading-relaxed">{item.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label mb-5 inline-flex justify-center">Market Direction</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 mb-4">
                What leading players in this market are doing
              </h2>
              <p className="text-slate-body/55 leading-relaxed">
                The strongest players usually move beyond disclosure alone. They build better measurement, tighter controls, and more management visibility around the topics that matter in the sector.
              </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-xl border border-slate-border/50 bg-slate-bg/40 overflow-hidden">
              <div className="divide-y divide-slate-border/30">
                {ind.marketLeaderActions.map((item, i) => (
                  <div key={item} className="flex items-start gap-4 px-8 py-6 bg-white">
                    <span className="text-xs font-bold text-slate-body/25 mt-0.5 flex-shrink-0 tabular-nums">0{i + 1}</span>
                    <p className="text-sm text-slate-body/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-32 bg-slate-bg border-t border-slate-border/50">
        <div className="py-24">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
              <div>
                <span className="section-label mb-5 inline-flex">Relevant Services</span>
                <h2 className="font-display text-4xl font-bold text-[#0D1B3E] leading-tight mt-3">
                  How we help {ind.title} organisations
                </h2>
              </div>
              <p className="text-slate-body/55 leading-relaxed">
                These are the services most often used by clients in this sector, based on regulatory pressure, operating needs, and reporting maturity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <div key={service.slug} className="bg-white border border-slate-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:border-transparent transition-all group">
                  <div className="h-[3px] w-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#2E8AEA] to-[#7516EA]" />
                  <div className="p-8">
                    <h3 className="font-display font-bold text-xl text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors">{service.shortTitle}</h3>
                    <p className="text-sm text-slate-body/55 leading-relaxed mt-2 mb-6">{service.desc}</p>
                    <div className="space-y-3 mb-6">
                      {service.deliverables.slice(0, 2).map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-[#2E8AEA]" />
                          <span className="text-sm text-slate-body/65 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/services/${service.slug}/`} className="inline-flex items-center gap-2 text-sm font-bold text-[#00338D] no-underline hover:gap-3 transition-all">
                      Explore Service <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-5 inline-flex justify-center">Related Case Study</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 mb-4">
              A relevant example from our work
            </h2>
          </div>

          <div className="max-w-4xl mx-auto rounded-xl border border-slate-border/60 bg-white p-8 md:p-10 hover:shadow-xl transition-all">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-body/40 block mb-4">{relatedCaseStudy.industry}</span>
            <h3 className="font-display font-bold text-[#0D1B3E] mb-4 leading-snug text-xl">{relatedCaseStudy.title}</h3>
            <p className="text-sm font-semibold text-[#2E8AEA] mb-5">{relatedCaseStudy.outcome}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {relatedCaseStudy.metrics.map((metric) => (
                <span key={metric} className="text-[11px] text-slate-body/60 bg-slate-bg border border-slate-border/50 px-3 py-1 rounded-full">{metric}</span>
              ))}
            </div>
            <Link href={`/case-studies/${relatedCaseStudy.slug}/`} className="inline-flex items-center gap-2 text-sm font-bold text-[#00338D] no-underline hover:gap-3 transition-all">
              Read Case Study <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#5BA8EF] block mb-4">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Discuss your {ind.title.toLowerCase()} priorities
              </h2>
              <p className="text-white/45 leading-relaxed">
                Our team can help you identify the most important ESG issues, the service pathway that fits your current stage, and the next steps for execution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/contact/" className="btn-primary justify-center text-center">
                Book a Sector Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services/"
                className="btn-outline justify-center text-center"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)' }}
              >
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
