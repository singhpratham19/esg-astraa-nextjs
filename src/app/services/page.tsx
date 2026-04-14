import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import { ArrowRight, CheckCircle, Target, FileCheck, Leaf, Shield, TrendingUp, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'ESG Advisory Services | BRSR Consulting, Carbon Accounting, Sustainable Finance',
  description:
    'Explore ESG Astraa services for ESG strategy, BRSR consulting, carbon advisory, ESG governance, sustainable finance, and ESG data intelligence.',
}

const SERVICE_ICONS: Record<string, React.ReactElement> = {
  'esg-strategy-transformation': <Target size={28} strokeWidth={1.5} />,
  'brsr-esg-compliance': <FileCheck size={28} strokeWidth={1.5} />,
  'carbon-advisory-credits': <Leaf size={28} strokeWidth={1.5} />,
  'esg-risk-governance': <Shield size={28} strokeWidth={1.5} />,
  'sustainable-finance': <TrendingUp size={28} strokeWidth={1.5} />,
  'esg-data-intelligence': <BarChart3 size={28} strokeWidth={1.5} />,
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white border-b border-slate-border/50 pt-32 pb-20">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-6">Advisory Services</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A2E] leading-[1.06] mb-6 tracking-tight">
              Six Consulting Pillars.<br />One Integrated Advisory.
            </h1>
            <p className="text-lg text-slate-body/65 leading-relaxed mb-10 max-w-xl">
              Each practice area is a structured consulting framework combining deep domain expertise with proprietary data capabilities.
            </p>
            <Link href="/contact/" className="btn-primary text-sm">
              Book a Consultation <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-16 pt-10 border-t border-slate-border/40 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '50+', label: 'Organisations Served' },
              { value: '6', label: 'Advisory Practices' },
              { value: '7', label: 'Frameworks Covered' },
              { value: '8', label: 'Industry Specialisations' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-[#00338D] mb-1">{stat.value}</div>
                <div className="text-xs text-slate-body/50 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-4">Our Practices</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E]">Explore Our Advisory Practices</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-border/30">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`}
                className="group bg-white p-9 hover:bg-[#F5F7FA] transition-colors no-underline relative">
                <div className="text-[#00338D]/35 group-hover:text-[#00338D] transition-colors mb-5">
                  {SERVICE_ICONS[s.slug]}
                </div>
                <span className="block font-bold text-4xl text-slate-border/40 mb-4 group-hover:text-[#00338D]/10 transition-colors">0{i + 1}</span>
                <h3 className="font-display font-bold text-base text-[#1A1A2E] mb-3 group-hover:text-[#00338D] transition-colors">{s.shortTitle}</h3>
                <p className="text-sm text-slate-body/55 leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00338D]/50 group-hover:text-[#00338D] group-hover:gap-3 transition-all">
                  Explore Service <ArrowRight size={11} />
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00338D] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-[#F5F7FA] border-y border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-4">Why ESG Astraa</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight">
                What Sets Our Advisory Apart
              </h2>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Data-First Approach', desc: 'Every engagement is powered by proprietary benchmarking and analytics — no guesswork, just evidence-backed recommendations.' },
                { title: 'Multi-Framework Expertise', desc: 'We navigate GRI, ISSB, BRSR, TCFD, CSRD, CDP, and SASB so you report once and satisfy all stakeholders.' },
                { title: 'Industry Calibration', desc: 'Our advisory is calibrated to sector-specific ESG risks, regulations, and peer benchmarks across 8 industries.' },
                { title: 'End-to-End Delivery', desc: 'From baseline assessment to board-ready reporting — we stay with you through strategy, implementation, and measurement.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <CheckCircle size={16} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A2E] text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-body/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-4">Our Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E]">How Every Engagement Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-border/30">
            {[
              { phase: '01', title: 'Assess', desc: 'Baseline measurement, gap analysis, materiality mapping, and ESG maturity benchmarking.' },
              { phase: '02', title: 'Strategise', desc: 'Data-informed roadmap aligned to business strategy, regulatory timelines, and stakeholder priorities.' },
              { phase: '03', title: 'Implement', desc: 'Hands-on execution — data architecture, reporting systems, governance, disclosure drafting.' },
              { phase: '04', title: 'Measure', desc: 'Continuous monitoring, KPI tracking, peer benchmarking, and stakeholder communication.' },
            ].map((p) => (
              <div key={p.phase} className="bg-white p-9 group hover:bg-[#00338D] transition-colors">
                <span className="font-bold text-4xl text-slate-border/40 group-hover:text-white/15 transition-colors block mb-5">{p.phase}</span>
                <h3 className="font-display font-bold text-lg text-[#1A1A2E] group-hover:text-white mb-3 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-body/55 group-hover:text-white/55 leading-relaxed transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00338D]">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Not sure which service is right for you?</h2>
            <p className="text-white/50 text-sm">Book a complimentary ESG readiness assessment. We&apos;ll recommend the right advisory pathway.</p>
          </div>
          <Link href="/contact/" className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#00338D] bg-white px-7 py-3.5 hover:bg-[#F5F7FA] transition-colors whitespace-nowrap">
            Request ESG Assessment <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
