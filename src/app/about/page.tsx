import Link from 'next/link'
import { TEAM_MEMBERS, FRAMEWORKS } from '@/lib/data'
import { ArrowRight, CheckCircle, Target, Eye, Compass, TrendingUp, AlertCircle, BarChart3, FileX, Globe } from 'lucide-react'

export const metadata = { title: 'About — ESG Astraa' }

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#0D1B3E' }} className="pt-32 pb-24 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #2E8AEA 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #7516EA 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-site mx-auto px-6 relative">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-5">About ESG Astraa</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.06] mb-6 tracking-tight max-w-3xl">
            Built to make ESG advisory matter.
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-10">
            ESG Astraa is a strategic ESG advisory firm that combines deep domain expertise with proprietary data-backed methodologies — built specifically for organisations navigating India&apos;s evolving sustainability landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-lg transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              Book a Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/about/our-methodology/"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/70 px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 hover:text-white transition-all">
              Our Methodology <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 border border-slate-200/60">
            {/* Vision */}
            <div className="p-12 border-b lg:border-b-0 lg:border-r border-slate-200/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]"
                style={{ background: 'radial-gradient(circle at top right, #2E8AEA, transparent)' }} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA20, #7516EA20)' }}>
                  <Eye size={16} className="text-[#2E8AEA]" />
                </div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA]">Our Vision</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] leading-snug mb-5">
                ESG transparency as a standard for every Indian organisation.
              </h2>
              <p className="text-slate-600/70 leading-relaxed text-sm">
                We envision a future where sustainability reporting is not a compliance burden but a strategic asset — where every Indian company, regardless of size or sector, has the tools and expertise to measure, manage, and communicate its ESG performance with confidence and credibility.
              </p>
            </div>

            {/* Mission */}
            <div className="p-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.04]"
                style={{ background: 'radial-gradient(circle at bottom left, #7516EA, transparent)' }} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7516EA20, #2E8AEA20)' }}>
                  <Compass size={16} className="text-[#7516EA]" />
                </div>
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#7516EA]">Our Mission</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] leading-snug mb-5">
                Convert ESG complexity into measurable business outcomes.
              </h2>
              <p className="text-slate-600/70 leading-relaxed text-sm">
                Our mission is to make high-quality ESG advisory accessible and actionable — delivering strategies grounded in proprietary data, local regulatory intelligence, and global framework alignment. We don&apos;t hand over reports. We build capabilities that outlast the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">The Problems We Solve</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] max-w-2xl leading-snug">
              Why most ESG programmes fail — and how we fix them.
            </h2>
            <p className="text-slate-600/65 mt-4 max-w-xl leading-relaxed">
              ESG advisory too often delivers frameworks without follow-through. ESG Astraa was built to address the systemic failures we observed across hundreds of engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileX size={20} />,
                problem: 'Generic frameworks, no industry calibration',
                solution: 'We apply sector-specific benchmarks across 8 industries — manufacturing, financial services, energy, and more. No two engagements use the same template.',
                color: '#EF4444',
              },
              {
                icon: <BarChart3 size={20} />,
                problem: 'Emissions data that cannot be verified',
                solution: 'We build internal data collection infrastructure before we quantify. Every number we produce is designed to withstand third-party assurance scrutiny.',
                color: '#F59E0B',
              },
              {
                icon: <AlertCircle size={20} />,
                problem: 'Regulatory blind spots in India',
                solution: 'SEBI BRSR, RBI climate risk, MCA reporting, and the emerging CCTS framework — our team tracks Indian regulatory evolution as a core competency, not an afterthought.',
                color: '#8B5CF6',
              },
              {
                icon: <Globe size={20} />,
                problem: 'Framework paralysis — GRI vs ISSB vs CSRD',
                solution: 'We map your regulatory obligations and stakeholder expectations first, then prescribe the right framework blend. Organisations should not choose frameworks — they should understand which apply to them.',
                color: '#2E8AEA',
              },
              {
                icon: <TrendingUp size={20} />,
                problem: 'ESG disconnected from financial strategy',
                solution: 'Our CA-led sustainable finance team integrates ESG directly into capital structure decisions — green bonds, SLLs, PCAF-aligned financed emissions, and climate risk disclosures in financial statements.',
                color: '#10B981',
              },
              {
                icon: <Target size={20} />,
                problem: 'Governance that stays in the sustainability team',
                solution: 'We build board-level governance structures with clear accountability, escalation frameworks, and disclosure obligations that link sustainability performance to executive responsibility.',
                color: '#F97316',
              },
            ].map((item) => (
              <div key={item.problem} className="bg-white border border-slate-200/60 p-7 group hover:border-[#2E8AEA]/30 transition-all hover:shadow-sm">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: item.color + '15', color: item.color }}>
                  {item.icon}
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <div className="w-1 h-full min-h-[20px] flex-shrink-0 mt-1 rounded-full" style={{ background: item.color }} />
                  <h3 className="font-display font-bold text-sm text-[#0D1B3E] leading-snug">{item.problem}</h3>
                </div>
                <p className="text-xs text-slate-600/60 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">What Sets Us Apart</p>
              <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mb-6 leading-snug">
                Not a SaaS platform. Not a generic consultant.
              </h2>
              <p className="text-slate-600/65 leading-relaxed mb-8 text-sm">
                We are a strategic ESG partner with data-backed execution capabilities — bridging the gap between advisory insight and measurable outcome. Every engagement is led by domain specialists, not generalists.
              </p>
              <div className="space-y-3">
                {[
                  'Consulting-first with proprietary data and benchmarking infrastructure',
                  'Deep expertise in Indian regulatory landscape — SEBI, RBI, MCA, CCTS',
                  'Multi-framework alignment: GRI, ISSB, BRSR, TCFD, CSRD, CDP',
                  'Industry-specific advisory teams for tailored engagements',
                  'Technology embedded within consulting, never positioned as standalone product',
                ].map((v) => (
                  <div key={v} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#2E8AEA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600/75">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-0 border border-slate-200/60">
              {[
                { attr: 'Strategic', desc: 'We speak in terms of business outcomes and long-term value creation — not checkbox compliance.' },
                { attr: 'Authoritative', desc: 'Every recommendation is substantiated by frameworks, regulations, and proprietary data.' },
                { attr: 'Measured', desc: 'Our confidence is earned — no superlatives, no jargon, no overselling.' },
                { attr: 'Accessible', desc: 'Complex ESG concepts explained with clarity. We build internal capability, not dependency.' },
                { attr: 'India-First', desc: 'Deep Indian regulatory intelligence connected to global standards and investor expectations.' },
              ].map((v) => (
                <div key={v.attr} className="px-7 py-5 border-b border-slate-200/50 last:border-0 flex gap-5 items-start">
                  <div className="w-5 h-[2px] mt-3 flex-shrink-0"
                    style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                  <div>
                    <h4 className="font-semibold text-sm text-[#0D1B3E] mb-1">{v.attr}</h4>
                    <p className="text-xs text-slate-600/55 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">Our Methodology</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E]">The 4-Phase Advisory Framework</h2>
            <p className="text-slate-600/60 mt-3 max-w-lg text-sm">A rigorous, repeatable methodology ensuring every engagement delivers measurable, auditable outcomes.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-slate-200/40">
            {[
              { num: '01', title: 'Assess', desc: 'Baseline measurement, gap analysis, and materiality assessment using proprietary benchmarking against industry peers.' },
              { num: '02', title: 'Strategise', desc: 'Data-informed ESG roadmap aligned to business strategy, regulatory timelines, and stakeholder expectations.' },
              { num: '03', title: 'Implement', desc: 'Hands-on execution — data architecture, reporting systems, governance structures, disclosure drafting.' },
              { num: '04', title: 'Measure', desc: 'Continuous monitoring, KPI tracking, disclosure management, and stakeholder communication analytics.' },
            ].map((p) => (
              <div key={p.num} className="bg-white p-9 group hover:bg-[#0D1B3E] transition-colors cursor-default">
                <span className="font-bold text-4xl text-slate-200 group-hover:text-white/10 transition-colors block mb-5">{p.num}</span>
                <h3 className="font-display font-bold text-lg text-[#0D1B3E] group-hover:text-white mb-3 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-600/55 group-hover:text-white/55 leading-relaxed transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/about/our-methodology/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] hover:gap-3 transition-all">
              View Full Methodology <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">Our Team</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E]">Advisory Leadership</h2>
            <p className="text-slate-600/60 mt-3 max-w-lg text-sm">Domain specialists across ESG strategy, carbon accounting, sustainable finance, and governance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((tm) => (
              <div key={tm.name} className="border border-slate-200/60 p-7 group hover:border-[#2E8AEA]/30 transition-all hover:shadow-sm">
                <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA15, #7516EA15)' }}>
                  <span className="font-bold text-[#2E8AEA] text-sm">{tm.name.split(' ').map((w: string) => w[0]).join('')}</span>
                </div>
                <h3 className="font-display font-bold text-[#0D1B3E] text-sm">{tm.name}</h3>
                <p className="text-xs text-[#2E8AEA] font-semibold mt-1 mb-3">{tm.role}</p>
                <p className="text-xs text-slate-600/55 leading-relaxed">{tm.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-14 bg-[#F8F9FC] border-b border-slate-200/40">
        <div className="max-w-site mx-auto px-6 flex flex-col sm:flex-row items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400 whitespace-nowrap">Framework Aligned</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {FRAMEWORKS.map((f) => (
              <span key={f} className="font-bold text-xs text-slate-400/60 tracking-widest">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-[#0D1B3E]">Explore Further</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200/40 max-w-3xl">
            {[
              { title: 'How We Measure Emissions', desc: 'Our Scope 1/2/3 measurement framework and proprietary modelling approach.', href: '/about/how-we-measure-emissions/' },
              { title: 'ESG Data & Analytics Approach', desc: 'How data capabilities differentiate our advisory from generic consulting.', href: '/about/esg-data-analytics-approach/' },
              { title: 'Partners & Certifications', desc: 'Our framework certifications, registry partnerships, and advisory board.', href: '/about/partners-certifications/' },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="bg-white p-8 no-underline group hover:bg-[#F8F9FC] transition-colors relative">
                <h3 className="font-display font-semibold text-[#0D1B3E] mb-2 group-hover:text-[#2E8AEA] transition-colors text-sm">{p.title}</h3>
                <p className="text-xs text-slate-600/55 mb-4 leading-relaxed">{p.desc}</p>
                <span className="text-xs text-[#2E8AEA] font-semibold inline-flex items-center gap-1.5">Learn More <ArrowRight size={11} /></span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Let&apos;s Work Together</h2>
            <p className="text-white/50 text-sm">Book a complimentary strategic consultation with our advisory team.</p>
          </div>
          <Link href="/contact/"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
            Book Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
