import Link from 'next/link'
import Image from 'next/image'
import { TEAM_MEMBERS, FRAMEWORKS } from '@/lib/data'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = { title: 'About — ESG Astraa' }

export default function AboutPage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="relative bg-[#00338D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-team.jpg"
            alt="ESG Astraa advisory team"
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
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">About ESG Astraa</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">
              Strategic ESG Advisory with<br />Data-Backed Execution
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              ESG Astraa is a MindEarth Consulting company combining deep domain expertise with proprietary data-backed methodologies to help organisations in emerging markets navigate the ESG transition.
            </p>
          </div>
        </div>
      </section>

      {/* Values — Photo Split */}
      <section className="bg-white">
        <div className="max-w-site mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="px-10 md:px-16 py-16 lg:py-20 flex flex-col justify-center">
              <span className="section-label mb-5 inline-block">What Sets Us Apart</span>
              <h2 className="font-display text-3xl font-bold text-[#1A1A2E] mt-4 mb-6">
                Not a SaaS. Not a Generic Consultant.
              </h2>
              <p className="text-slate-body/70 leading-relaxed mb-8">
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
                    <CheckCircle size={16} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-body/80">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="/images/office-people.jpg"
                alt="ESG Astraa team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#00338D]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Voice/Values */}
      <section className="py-16 bg-[#F5F7FA] border-y border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { attr: 'Strategic', desc: 'We speak in terms of business outcomes and long-term value creation.' },
              { attr: 'Authoritative', desc: 'Every claim is substantiated by frameworks, regulations, and data.' },
              { attr: 'Measured', desc: 'Our confidence is quiet and earned — no superlatives or jargon.' },
              { attr: 'Accessible', desc: 'Complex ESG concepts explained with clarity, not condescension.' },
              { attr: 'India-First', desc: 'Deep Indian regulatory understanding connected to global frameworks.' },
            ].map((v) => (
              <div key={v.attr} className="bg-white p-6 border border-slate-border/50">
                <div className="w-6 h-[2px] bg-[#00338D] mb-4" />
                <h4 className="font-semibold text-sm text-[#00338D] mb-2">{v.attr}</h4>
                <p className="text-xs text-slate-body/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-5 inline-block">Our Methodology</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4">
              The 4-Phase Advisory Framework
            </h2>
            <p className="text-slate-body/60 mt-3">
              A rigorous, repeatable methodology ensuring every engagement delivers measurable, auditable outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-slate-border/40">
            {[
              { phase: 'Assess', desc: 'Baseline measurement, gap analysis, and materiality assessment using proprietary benchmarking against industry peers.', num: '01' },
              { phase: 'Strategise', desc: 'Data-informed ESG roadmap development aligned to business strategy, regulatory timelines, and stakeholder expectations.', num: '02' },
              { phase: 'Implement', desc: 'Hands-on execution support with technology-enhanced delivery — data architecture, reporting systems, governance structures.', num: '03' },
              { phase: 'Measure', desc: 'Continuous monitoring, KPI tracking, disclosure management, and stakeholder communication through proprietary analytics.', num: '04' },
            ].map((p) => (
              <div key={p.num} className="bg-white p-9 group hover:bg-[#00338D] transition-colors">
                <span className="font-bold text-4xl text-slate-border/50 group-hover:text-white/20 transition-colors block mb-5">{p.num}</span>
                <h3 className="font-display font-bold text-lg text-[#1A1A2E] group-hover:text-white mb-3 transition-colors">{p.phase}</h3>
                <p className="text-sm text-slate-body/60 group-hover:text-white/60 leading-relaxed transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="section-label mb-5 inline-block">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4">
              Advisory Leadership
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((tm) => (
              <div key={tm.name} className="card-hover bg-white border border-slate-border/60 p-7 text-center">
                <div className="w-16 h-16 bg-[#00338D]/10 mx-auto mb-5 flex items-center justify-center">
                  <span className="font-bold text-[#00338D] text-lg">{tm.name.split(' ').map((w: string) => w[0]).join('')}</span>
                </div>
                <h3 className="font-display font-bold text-[#1A1A2E] text-sm">{tm.name}</h3>
                <p className="text-xs text-[#00338D] font-semibold mt-1 mb-3">{tm.role}</p>
                <p className="text-xs text-slate-body/60 leading-relaxed">{tm.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-site mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/35 mb-6">Framework Aligned</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {FRAMEWORKS.map((f) => (
              <div key={f} className="text-center">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-sm text-white/40">{f}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl font-bold text-[#1A1A2E]">Explore Further</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-border/40 max-w-3xl">
            {[
              { title: 'How We Measure Emissions', desc: 'Our Scope 1/2/3 measurement framework and proprietary modelling approach.', href: '/about/how-we-measure-emissions/' },
              { title: 'ESG Data & Analytics Approach', desc: 'How data capabilities differentiate our advisory from generic consulting.', href: '/about/esg-data-analytics-approach/' },
              { title: 'Partners & Certifications', desc: 'Our framework certifications, registry partnerships, and advisory board.', href: '/about/partners-certifications/' },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="bg-white p-8 no-underline group hover:bg-[#F5F7FA] transition-colors relative">
                <h3 className="font-display font-semibold text-[#1A1A2E] mb-2 group-hover:text-[#00338D] transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-body/60 mb-4">{p.desc}</p>
                <span className="text-xs text-[#00338D] font-semibold inline-flex items-center gap-1.5">Learn More <ArrowRight size={11} /></span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00338D] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="w-8 h-[3px] bg-[#0091DA] mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Let&apos;s Work Together</h2>
            <p className="text-white/40 text-sm">Book a complimentary strategic consultation with our advisory team.</p>
          </div>
          <Link href="/contact/" className="btn-primary text-sm whitespace-nowrap flex-shrink-0">
            Book Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
