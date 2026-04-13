import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/lib/data'
import { ArrowRight, CheckCircle, Target, FileCheck, Leaf, Shield, TrendingUp, BarChart3 } from 'lucide-react'

export const metadata = { title: 'Services — ESG Astraa' }

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'esg-strategy-transformation': <Target size={36} strokeWidth={1.5} />,
  'brsr-esg-compliance': <FileCheck size={36} strokeWidth={1.5} />,
  'carbon-advisory-credits': <Leaf size={36} strokeWidth={1.5} />,
  'esg-risk-governance': <Shield size={36} strokeWidth={1.5} />,
  'sustainable-finance': <TrendingUp size={36} strokeWidth={1.5} />,
  'esg-data-intelligence': <BarChart3 size={36} strokeWidth={1.5} />,
}

const WHY_CHOOSE = [
  { title: 'Data-First Approach', desc: 'Every engagement is powered by proprietary benchmarking and analytics — no guesswork, just evidence-backed recommendations.' },
  { title: 'Multi-Framework Expertise', desc: 'We navigate GRI, ISSB, BRSR, TCFD, CSRD, CDP, and SASB so you report once and satisfy all stakeholders.' },
  { title: 'Industry Calibration', desc: 'Our advisory is calibrated to sector-specific ESG risks, regulations, and peer benchmarks across 8 industries.' },
  { title: 'End-to-End Delivery', desc: 'From baseline assessment to board-ready reporting — we stay with you through strategy, implementation, and measurement.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="relative bg-[#00338D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/data-analysis.jpg"
            alt="ESG data and analytics"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00338D]/95 to-[#00338D]/60" />
        </div>
        <div className="max-w-site mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-[#0091DA]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">Advisory Services</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">
              Six Consulting Pillars.<br />One Integrated Advisory.
            </h1>
            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
              Each practice area is a structured consulting framework combining deep domain expertise with proprietary data capabilities.
            </p>
            <Link href="/contact/" className="btn-primary text-sm">
              Book a Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1A1A2E] border-b border-white/8">
        <div className="max-w-site mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Organisations Served' },
            { value: '6', label: 'Advisory Practices' },
            { value: '7', label: 'Frameworks Covered' },
            { value: '8', label: 'Industry Specialisations' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[11px] text-white/35 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-block">Our Practices</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4">
              Explore Our Advisory Practices
            </h2>
            <p className="text-slate-body/60 mt-3 max-w-xl">
              Structured frameworks across strategy, compliance, carbon, governance, finance, and intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-border/40">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group bg-white p-9 hover:bg-[#F5F7FA] transition-colors no-underline relative"
              >
                <div className="text-[#00338D]/40 group-hover:text-[#00338D] transition-colors mb-5">
                  {SERVICE_ICONS[s.slug]}
                </div>
                <span className="block font-bold text-5xl text-slate-border/40 mb-4 group-hover:text-[#00338D]/10 transition-colors">0{i + 1}</span>
                <h3 className="font-display font-bold text-lg text-[#1A1A2E] mb-3 group-hover:text-[#00338D] transition-colors">{s.shortTitle}</h3>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00338D]/60 group-hover:text-[#00338D] group-hover:gap-3 transition-all">
                  Explore Service <ArrowRight size={12} />
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00338D] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose — Photo Split */}
      <section className="bg-[#F5F7FA] border-y border-slate-border/50">
        <div className="max-w-site mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="px-10 md:px-16 py-16 lg:py-20 flex flex-col justify-center order-2 lg:order-1">
              <span className="section-label mb-5 inline-block">Why ESG Astraa</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4 mb-10">
                What Sets Our Advisory Apart
              </h2>
              <div className="space-y-6">
                {WHY_CHOOSE.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <CheckCircle size={18} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A2E] text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-body/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
              <Image
                src="/images/handshake.jpg"
                alt="ESG consulting partnership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#00338D]/25" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-5 inline-block">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4">
              How Every Engagement Works
            </h2>
            <p className="text-slate-body/60 mt-3">
              A proven 4-phase methodology from assessment to measurable outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-border/50">
            {[
              { phase: '01', title: 'Assess', desc: 'Baseline measurement, gap analysis, materiality mapping, and ESG maturity benchmarking.' },
              { phase: '02', title: 'Strategise', desc: 'Data-informed roadmap aligned to business strategy, regulatory timelines, and stakeholder priorities.' },
              { phase: '03', title: 'Implement', desc: 'Hands-on execution — from data architecture to disclosure drafting and board presentations.' },
              { phase: '04', title: 'Measure', desc: 'Continuous monitoring, KPI tracking, peer benchmarking, and stakeholder communication.' },
            ].map((p, i) => (
              <div key={p.phase} className="p-9 border-r border-b border-slate-border/50 group hover:bg-[#00338D] transition-colors">
                <span className="font-bold text-4xl text-slate-border/50 group-hover:text-white/20 transition-colors block mb-5">{p.phase}</span>
                <h3 className="font-display font-bold text-lg text-[#1A1A2E] group-hover:text-white mb-3 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-body/65 group-hover:text-white/60 leading-relaxed transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="w-8 h-[3px] bg-[#0091DA] mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Not sure which service is right for you?
            </h2>
            <p className="text-white/40 text-sm">
              Book a complimentary ESG readiness assessment. We&apos;ll recommend the right advisory pathway.
            </p>
          </div>
          <Link href="/contact/" className="btn-primary text-sm whitespace-nowrap flex-shrink-0">
            Request ESG Assessment <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
