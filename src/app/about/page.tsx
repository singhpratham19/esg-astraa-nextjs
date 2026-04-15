import Link from 'next/link'
import { TEAM_MEMBERS, FRAMEWORKS } from '@/lib/data'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = { title: 'About Us — ESG Astraa' }

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#0D1B3E' }} className="relative overflow-hidden pt-36 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #2E8AEA 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #7516EA 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-site mx-auto px-6 relative">
          <div className="max-w-4xl">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-8">About ESG Astraa</p>
            <h1 className="font-display font-bold text-white leading-[1.04] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              We exist to make ESG advisory<br className="hidden md:block" /> produce real outcomes.
            </h1>
            <p className="text-white/45 leading-relaxed max-w-2xl mb-12"
              style={{ fontSize: '1.125rem' }}>
              ESG Astraa is a strategic ESG advisory firm combining deep domain expertise with proprietary data-backed methodologies — built for organisations in India and emerging markets navigating the sustainability transition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-lg transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/services/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 px-7 py-3.5 rounded-lg border border-white/10 hover:border-white/25 hover:text-white/90 transition-all">
                Our Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ───────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { figure: '50+',     label: 'Organisations Advised',   sub: 'Across all service areas'          },
              { figure: '1.2M',    label: 'tCO₂e Measured',          sub: 'Third-party verified'              },
              { figure: '₹500Cr+', label: 'Green Finance Structured', sub: 'Across client mandates'           },
              { figure: '8',       label: 'Industry Sectors',         sub: 'Sector-specific expertise'        },
            ].map((s, i) => (
              <div key={s.label}
                className={`py-12 px-8 ${i < 3 ? 'border-r border-slate-200/60' : ''}`}>
                <div className="font-display font-bold mb-1"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    background: 'linear-gradient(135deg, #2E8AEA, #7516EA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                  {s.figure}
                </div>
                <p className="font-semibold text-[#0D1B3E] text-sm mb-0.5">{s.label}</p>
                <p className="text-slate-400 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.6fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-5">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-snug">
                Not a SaaS platform.<br />Not a generic consultant.
              </h2>
            </div>
            <div className="space-y-5 text-slate-600/70 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              <p>
                ESG Astraa is a strategic advisory firm with data-backed execution capabilities. We were founded on a single observation: the ESG advisory market was full of reports that delivered frameworks without follow-through — and organisations were paying for compliance theatre instead of measurable outcomes.
              </p>
              <p>
                We bridge the gap between advisory insight and operational reality. Our engagements are led by domain specialists — not generalists — who combine regulatory expertise, financial rigour, and sector-specific benchmarking to produce strategies that hold up to scrutiny from investors, regulators, and boards.
              </p>
              <p>
                We are consulting-first, with proprietary data infrastructure embedded into every engagement. Technology is a tool we deploy, never a product we sell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-px bg-slate-200/50">

            {/* Vision */}
            <div className="bg-white p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03]"
                style={{ background: 'radial-gradient(circle at top right, #2E8AEA, transparent)' }} />
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-6">Our Vision</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] leading-snug mb-6 max-w-sm">
                ESG transparency as a standard for every Indian organisation.
              </h2>
              <p className="text-slate-600/60 leading-relaxed text-sm max-w-md">
                We envision a future where sustainability reporting is not a compliance burden but a strategic asset — where every Indian company, regardless of size or sector, can measure, manage, and communicate its ESG performance with confidence and credibility.
              </p>
              <div className="mt-8 h-[2px] w-12"
                style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
            </div>

            {/* Mission */}
            <div className="bg-white p-14 relative overflow-hidden" style={{ background: '#0D1B3E' }}>
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.06]"
                style={{ background: 'radial-gradient(circle at bottom right, #7516EA, transparent)' }} />
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-6">Our Mission</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug mb-6 max-w-sm">
                Convert ESG complexity into measurable business outcomes.
              </h2>
              <p className="text-white/40 leading-relaxed text-sm max-w-md">
                Deliver strategies grounded in proprietary data, local regulatory intelligence, and global framework alignment. We don&apos;t hand over reports. We build capabilities that outlast the engagement — and that your investors, regulators, and board can rely on.
              </p>
              <div className="mt-8 h-[2px] w-12"
                style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEMS WE SOLVE ────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-5">The Problems We Solve</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-snug mb-6">
                Why most ESG programmes fail.
              </h2>
              <p className="text-slate-600/60 text-sm leading-relaxed">
                ESG Astraa was built to address the systemic failures we observed across hundreds of engagements. These are the problems organisations face — and how we solve them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-slate-200/40">
              {[
                {
                  problem: 'Generic frameworks with no industry calibration',
                  solution: 'Sector-specific benchmarks across 8 industries. No two engagements use the same template.',
                },
                {
                  problem: 'Emissions data that cannot withstand assurance',
                  solution: 'We build data collection infrastructure before we quantify — so every number survives third-party scrutiny.',
                },
                {
                  problem: 'Regulatory blind spots in the Indian context',
                  solution: 'SEBI BRSR, RBI climate risk, MCA reporting, CCTS — tracked as a core competency, not an afterthought.',
                },
                {
                  problem: 'Framework paralysis — GRI vs ISSB vs CSRD',
                  solution: 'We map obligations first, then prescribe the right blend. Organisations should not be choosing frameworks cold.',
                },
                {
                  problem: 'ESG disconnected from capital structure decisions',
                  solution: 'CA-led finance team integrating ESG into green bonds, SLLs, PCAF emissions, and climate disclosures.',
                },
                {
                  problem: 'Governance that stays in the sustainability team',
                  solution: 'Board-level structures with clear accountability — linking ESG performance to executive responsibility.',
                },
              ].map((item) => (
                <div key={item.problem} className="bg-white p-8 group hover:bg-[#F8F9FC] transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-1 h-full min-h-[16px] rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: 'linear-gradient(180deg, #2E8AEA, #7516EA)' }} />
                    <h3 className="font-display font-bold text-sm text-[#0D1B3E] leading-snug">{item.problem}</h3>
                  </div>
                  <p className="text-xs text-slate-500/70 leading-relaxed pl-4">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-5">How We Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] max-w-xl leading-snug">
              A 4-phase framework built for auditable outcomes.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-slate-200/50">
            {[
              { num: '01', title: 'Assess',     desc: 'Baseline measurement, gap analysis, and materiality using proprietary industry benchmarks.' },
              { num: '02', title: 'Strategise', desc: 'Data-informed roadmap aligned to regulatory timelines, stakeholder expectations, and business strategy.' },
              { num: '03', title: 'Implement',  desc: 'Hands-on execution — data architecture, governance structures, and assurance-ready disclosure drafting.' },
              { num: '04', title: 'Measure',    desc: 'Continuous KPI monitoring, disclosure management, and stakeholder communication tracking.' },
            ].map((p) => (
              <div key={p.num} className="bg-white p-10 group hover:bg-[#0D1B3E] transition-all duration-200 cursor-default">
                <span className="font-display font-bold text-[3.5rem] leading-none block mb-6 text-slate-200 group-hover:text-white/10 transition-colors">
                  {p.num}
                </span>
                <h3 className="font-display font-bold text-xl text-[#0D1B3E] group-hover:text-white mb-3 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-500/60 group-hover:text-white/50 leading-relaxed transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART ───────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1fr] gap-20">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-5">What Sets Us Apart</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-snug mb-8">
                The difference between advice and outcomes.
              </h2>
              <p className="text-slate-600/65 leading-relaxed mb-10 text-[0.9375rem]">
                Most ESG engagements end with a report. Ours end with governance systems, data infrastructure, and disclosure-ready organisations. The difference is in how we are structured — consulting-first, specialists throughout, with proprietary tools that make the strategy executable.
              </p>
              <div className="space-y-4">
                {[
                  'Consulting-first with proprietary benchmarking infrastructure',
                  'Indian regulatory depth — SEBI, RBI, MCA, and CCTS in one workstream',
                  'Multi-framework: GRI, ISSB, BRSR, TCFD, CSRD, CDP aligned',
                  'CA-backed financial advisory for green bonds, SLL, and climate disclosures',
                  'Industry-specific teams — no cross-sector generalism',
                  'Technology embedded in consulting, never sold separately',
                ].map((v) => (
                  <div key={v} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                      <CheckCircle size={11} className="text-white" />
                    </div>
                    <span className="text-sm text-slate-600/70">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Attribute list */}
            <div className="lg:pt-16">
              {[
                { attr: 'Strategic',    desc: 'Every recommendation ties directly to business outcomes and long-term value — not checkbox compliance.' },
                { attr: 'Authoritative', desc: 'Claims backed by frameworks, proprietary data, and sector benchmarking. No superlatives.' },
                { attr: 'Measured',     desc: 'Quiet confidence, earned through execution. We let outcomes speak.' },
                { attr: 'Accessible',   desc: 'Complex ESG concepts explained clearly. We build client capability, not client dependency.' },
                { attr: 'India-First',  desc: 'Regulatory depth in the Indian context, connected to global investor and framework expectations.' },
              ].map((v, i) => (
                <div key={v.attr}
                  className={`py-6 flex gap-6 items-start ${i < 4 ? 'border-b border-slate-200/50' : ''}`}>
                  <div className="w-6 h-[2px] mt-3 flex-shrink-0"
                    style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                  <div>
                    <h4 className="font-semibold text-[#0D1B3E] mb-1">{v.attr}</h4>
                    <p className="text-sm text-slate-500/60 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ──────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,3fr] gap-16 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-5">Our People</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-snug mb-5">
                Advisory leadership.
              </h2>
              <p className="text-slate-600/55 text-sm leading-relaxed">
                Domain specialists across ESG strategy, carbon accounting, sustainable finance, and governance — each with deep sector experience.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-slate-200/50">
              {TEAM_MEMBERS.map((tm) => (
                <div key={tm.name} className="bg-white p-8 group hover:bg-[#0D1B3E] transition-all duration-200">
                  {/* Monogram */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                    <span className="font-display font-bold text-white text-base">
                      {tm.name.split(' ').map((w: string) => w[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#0D1B3E] group-hover:text-white transition-colors">{tm.name}</h3>
                  <p className="text-xs font-bold text-[#2E8AEA] mt-1 mb-4 tracking-wide group-hover:text-[#5BA8EF] transition-colors">{tm.role}</p>
                  <p className="text-xs text-slate-500/55 group-hover:text-white/40 leading-relaxed transition-colors">{tm.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ──────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-5">Industries</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] leading-snug mb-4">
                Sector-specific expertise across 8 industries.
              </h2>
              <p className="text-slate-600/55 text-sm leading-relaxed mb-6">
                Generic ESG advisory misses sector dynamics. We maintain dedicated practice areas with proprietary benchmarks, regulatory maps, and engagement frameworks for each industry.
              </p>
              <Link href="/industries/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] hover:gap-3 transition-all">
                Explore Industries <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-200/40">
              {[
                'Manufacturing', 'Energy & Power', 'Financial Services', 'Healthcare & Pharma',
                'Infrastructure', 'Mining & Metals', 'IT & Technology', 'Agriculture & Food',
              ].map((industry) => (
                <div key={industry} className="bg-white px-6 py-5 group hover:bg-[#F8F9FC] transition-colors">
                  <div className="w-4 h-[2px] mb-3"
                    style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                  <p className="text-sm font-semibold text-[#0D1B3E] leading-snug">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK CREDENTIALS ────────────────────────────── */}
      <section className="py-14 border-b border-slate-200/40" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6 flex flex-col sm:flex-row items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 whitespace-nowrap flex-shrink-0">
            Framework Aligned
          </p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {FRAMEWORKS.map((f) => (
              <span key={f} className="font-bold text-xs tracking-widest text-white/20 hover:text-white/50 transition-colors cursor-default">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#2E8AEA] mb-6">Work With Us</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ready to build an ESG programme that holds up to scrutiny?
            </h2>
            <p className="text-slate-600/60 leading-relaxed mb-10 max-w-xl"
              style={{ fontSize: '1.0625rem' }}>
              Book a complimentary 30-minute consultation. We&apos;ll assess your current position, your regulatory exposure, and where the highest-value ESG work lies for your organisation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-4 rounded-lg transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/case-studies/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1B3E] px-7 py-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                View Case Studies <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
