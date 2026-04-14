import Link from 'next/link'
import { TEAM_MEMBERS, FRAMEWORKS } from '@/lib/data'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = { title: 'About — ESG Astraa' }

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white border-b border-slate-border/50 pt-32 pb-20">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-6">About ESG Astraa</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A2E] leading-[1.06] mb-6 tracking-tight">
              Strategic ESG Advisory with<br />Data-Backed Execution
            </h1>
            <p className="text-lg text-slate-body/65 leading-relaxed max-w-xl">
              ESG Astraa is a MindEarth Consulting company combining deep domain expertise with proprietary data-backed methodologies to help organisations in emerging markets navigate the ESG transition.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-4">What Sets Us Apart</p>
              <h2 className="font-display text-3xl font-bold text-[#1A1A2E] mb-6">
                Not a SaaS. Not a Generic Consultant.
              </h2>
              <p className="text-slate-body/65 leading-relaxed mb-8">
                We are a strategic ESG partner with data-backed execution capabilities — bridging the gap between advisory insight and measurable outcome.
              </p>
              <div className="space-y-4">
                {[
                  'Consulting-first positioning with proprietary data infrastructure',
                  'Deep expertise in Indian regulatory landscape (SEBI, RBI, MCA, CCTS)',
                  'Multi-framework alignment across GRI, ISSB, BRSR, TCFD, CSRD, CDP',
                  'Industry-specific advisory teams for tailored engagements',
                  'Technology embedded within consulting, never positioned as product',
                ].map((v) => (
                  <div key={v} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-body/75">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-0 border border-slate-border/50">
              {[
                { attr: 'Strategic', desc: 'We speak in terms of business outcomes and long-term value creation.' },
                { attr: 'Authoritative', desc: 'Every claim is substantiated by frameworks, regulations, and data.' },
                { attr: 'Measured', desc: 'Our confidence is quiet and earned — no superlatives or jargon.' },
                { attr: 'Accessible', desc: 'Complex ESG concepts explained with clarity, not condescension.' },
                { attr: 'India-First', desc: 'Deep Indian regulatory understanding connected to global frameworks.' },
              ].map((v) => (
                <div key={v.attr} className="px-7 py-5 border-b border-slate-border/40 last:border-0 flex gap-5 items-start">
                  <div className="w-5 h-[2px] bg-[#00338D] mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#1A1A2E] mb-1">{v.attr}</h4>
                    <p className="text-xs text-slate-body/55 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-[#F5F7FA] border-y border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-4">Our Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E]">The 4-Phase Advisory Framework</h2>
            <p className="text-slate-body/60 mt-3 max-w-lg">A rigorous, repeatable methodology ensuring every engagement delivers measurable, auditable outcomes.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-slate-border/30">
            {[
              { num: '01', title: 'Assess', desc: 'Baseline measurement, gap analysis, and materiality assessment using proprietary benchmarking against industry peers.' },
              { num: '02', title: 'Strategise', desc: 'Data-informed ESG roadmap aligned to business strategy, regulatory timelines, and stakeholder expectations.' },
              { num: '03', title: 'Implement', desc: 'Hands-on execution — data architecture, reporting systems, governance structures, disclosure drafting.' },
              { num: '04', title: 'Measure', desc: 'Continuous monitoring, KPI tracking, disclosure management, and stakeholder communication analytics.' },
            ].map((p) => (
              <div key={p.num} className="bg-white p-9 group hover:bg-[#00338D] transition-colors">
                <span className="font-bold text-4xl text-slate-border/40 group-hover:text-white/15 transition-colors block mb-5">{p.num}</span>
                <h3 className="font-display font-bold text-lg text-[#1A1A2E] group-hover:text-white mb-3 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-body/55 group-hover:text-white/55 leading-relaxed transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0091DA] mb-4">Our Team</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E]">Advisory Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((tm) => (
              <div key={tm.name} className="border border-slate-border/50 p-7">
                <div className="w-12 h-12 bg-[#00338D]/10 mb-5 flex items-center justify-center">
                  <span className="font-bold text-[#00338D] text-sm">{tm.name.split(' ').map((w: string) => w[0]).join('')}</span>
                </div>
                <h3 className="font-display font-bold text-[#1A1A2E] text-sm">{tm.name}</h3>
                <p className="text-xs text-[#0091DA] font-semibold mt-1 mb-3">{tm.role}</p>
                <p className="text-xs text-slate-body/55 leading-relaxed">{tm.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-14 bg-[#F5F7FA] border-y border-slate-border/40">
        <div className="max-w-site mx-auto px-6 flex flex-col sm:flex-row items-center gap-6">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-body/40 whitespace-nowrap">Framework Aligned</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {FRAMEWORKS.map((f) => (
              <span key={f} className="font-bold text-xs text-slate-body/30 tracking-widest">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#1A1A2E]">Explore Further</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-border/30 max-w-3xl">
            {[
              { title: 'How We Measure Emissions', desc: 'Our Scope 1/2/3 measurement framework and proprietary modelling approach.', href: '/about/how-we-measure-emissions/' },
              { title: 'ESG Data & Analytics Approach', desc: 'How data capabilities differentiate our advisory from generic consulting.', href: '/about/esg-data-analytics-approach/' },
              { title: 'Partners & Certifications', desc: 'Our framework certifications, registry partnerships, and advisory board.', href: '/about/partners-certifications/' },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="bg-white p-8 no-underline group hover:bg-[#F5F7FA] transition-colors relative">
                <h3 className="font-display font-semibold text-[#1A1A2E] mb-2 group-hover:text-[#00338D] transition-colors text-sm">{p.title}</h3>
                <p className="text-xs text-slate-body/55 mb-4 leading-relaxed">{p.desc}</p>
                <span className="text-xs text-[#00338D] font-semibold inline-flex items-center gap-1.5">Learn More <ArrowRight size={11} /></span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00338D] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00338D]">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Let&apos;s Work Together</h2>
            <p className="text-white/50 text-sm">Book a complimentary strategic consultation with our advisory team.</p>
          </div>
          <Link href="/contact/" className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#00338D] bg-white px-7 py-3.5 hover:bg-[#F5F7FA] transition-colors whitespace-nowrap">
            Book Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
