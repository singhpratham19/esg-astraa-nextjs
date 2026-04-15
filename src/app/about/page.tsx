import Link from 'next/link'
import { TEAM_MEMBERS, FRAMEWORKS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'About Us — ESG Astraa' }

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#0D1B3E' }} className="pt-40 pb-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.05]"
            style={{ background: 'radial-gradient(circle at top right, #2E8AEA, transparent 60%)' }} />
        </div>
        <div className="max-w-site mx-auto px-6 relative">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-10">About ESG Astraa</p>
          <h1 className="font-display font-bold text-white leading-[1.02] tracking-tight max-w-4xl"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}>
            We help organisations<br />
            turn ESG into a<br />
            <span style={{
              background: 'linear-gradient(135deg, #2E8AEA 0%, #7516EA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>strategic advantage.</span>
          </h1>
        </div>
      </section>

      {/* ── PURPOSE STATEMENT ────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">Our Purpose</p>
            <p className="font-display font-bold text-[#0D1B3E] leading-snug mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>
              ESG Astraa exists because the advisory market was producing frameworks without outcomes — and organisations deserved better.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg max-w-2xl">
              We are a strategic ESG advisory firm built for India&apos;s regulatory reality and global investor expectations. Our work is grounded in data, driven by domain specialists, and measured by outcomes that hold up to scrutiny — from regulators, boards, and capital markets alike.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">Who We Are</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight mb-0"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                Consulting-first.<br />Data-backed.<br />Execution-focused.
              </h2>
            </div>
            <div className="lg:pt-24 space-y-6 text-slate-500 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              <p>
                We were founded on a single observation: organisations across India were engaging ESG advisors and receiving templated reports that sat on shelves. Compliance was ticked. Strategy was absent. And the gap between advice and action was costing companies real value — in regulatory exposure, in investor confidence, and in missed opportunity.
              </p>
              <p>
                ESG Astraa was built to close that gap. Our engagements are led by domain specialists — across ESG strategy, carbon accounting, sustainable finance, and governance — who bring sector-specific depth to every mandate. We do not apply generic frameworks. We build tailored strategies grounded in your regulatory context, your competitive landscape, and your stakeholder expectations.
              </p>
              <p>
                We are consulting-first, with proprietary data infrastructure embedded into every engagement. Technology is a tool we deploy within our advisory work — never a product we position as a substitute for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ──────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">What We Believe</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-slate-200/60">
            {[
              {
                title: 'Data before strategy.',
                body: 'You cannot set credible ESG targets without accurate baseline measurement. We build data infrastructure before we advise on direction — not after.',
              },
              {
                title: 'Regulation is not the ceiling.',
                body: 'Compliance is the floor. The organisations that treat ESG as a strategic lever — not a reporting obligation — consistently outperform those that do not.',
              },
              {
                title: 'Specialists, not generalists.',
                body: 'ESG spans regulatory, financial, scientific, and governance disciplines. No single generalist does this well. We field specialists and integrate their work.',
              },
              {
                title: 'Accountability is measurable.',
                body: 'ESG governance fails when it cannot be measured. Every framework we build has KPIs, escalation paths, and disclosure obligations that survive board scrutiny.',
              },
              {
                title: 'India requires India expertise.',
                body: 'SEBI BRSR, RBI climate risk, MCA obligations, and the emerging CCTS framework are not afterthoughts. They are the regulatory reality our clients live in — and the context we specialise in.',
              },
              {
                title: 'Outcomes outlast engagements.',
                body: 'We measure our success by what organisations can do after we leave — not by the thickness of the report we hand over.',
              },
            ].map((item, i) => (
              <div key={item.title}
                className={`py-10 px-8 border-b border-slate-200/50 ${i % 3 !== 2 ? 'lg:border-r' : ''} ${i % 2 !== 1 ? 'md:border-r lg:border-r-0' : ''} ${i < 3 ? '' : ''}`}
                style={{ borderRight: i % 3 !== 2 ? undefined : 'none' }}>
                <div className="w-8 h-[2px] mb-6"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                <h3 className="font-display font-bold text-[#0D1B3E] mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section className="py-28 border-b border-slate-200/50" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">How We Work</p>
              <h2 className="font-display font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                A repeatable framework for measurable outcomes.
              </h2>
              <p className="text-white/35 mt-6 text-sm leading-relaxed max-w-xs">
                Every engagement follows four phases — from baseline to continuous measurement. No shortcuts. No templates applied without calibration.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
              {[
                {
                  num: '01',
                  title: 'Assess',
                  desc: 'Baseline ESG performance measurement, gap analysis against applicable frameworks, materiality assessment with stakeholder input, and peer benchmarking using proprietary sector data.',
                },
                {
                  num: '02',
                  title: 'Strategise',
                  desc: 'Data-informed roadmap aligned to business strategy, regulatory timelines, and stakeholder expectations. Target-setting grounded in science-based and regulatory benchmarks.',
                },
                {
                  num: '03',
                  title: 'Implement',
                  desc: 'Hands-on execution — data collection architecture, governance structure design, disclosure drafting, and policy framework development. We stay through delivery.',
                },
                {
                  num: '04',
                  title: 'Measure',
                  desc: 'Continuous KPI monitoring, annual disclosure management, assurance-readiness preparation, and regulatory update integration. ESG performance tracked as rigorously as financial performance.',
                },
              ].map((p) => (
                <div key={p.num}
                  className="flex gap-10 items-start p-10 group hover:bg-white/5 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <span className="font-display font-bold text-2xl flex-shrink-0 mt-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #2E8AEA, #7516EA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl mb-3">{p.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">Our People</p>
          <div className="grid lg:grid-cols-[1fr,3fr] gap-20 items-start">
            <div>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Advisory leadership.
              </h2>
              <p className="text-slate-500 mt-5 text-sm leading-relaxed">
                Domain specialists across ESG strategy, carbon accounting, sustainable finance, and governance — each with deep sector and regulatory expertise.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-slate-200/40">
              {TEAM_MEMBERS.map((tm) => (
                <div key={tm.name} className="bg-white p-8 group hover:bg-[#0D1B3E] transition-all duration-300">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-7 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                    <span className="font-display font-bold text-white">
                      {tm.name.split(' ').map((w: string) => w[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#0D1B3E] group-hover:text-white transition-colors">{tm.name}</h3>
                  <p className="text-xs font-bold text-[#2E8AEA] mt-1.5 mb-4 tracking-wide group-hover:text-[#5BA8EF] transition-colors uppercase">{tm.role}</p>
                  <p className="text-xs text-slate-400 group-hover:text-white/40 leading-relaxed transition-colors">{tm.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORKS ───────────────────────────────────────── */}
      <section className="py-12 bg-[#F8F9FC] border-b border-slate-200/40">
        <div className="max-w-site mx-auto px-6 flex flex-col sm:flex-row items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-slate-300 whitespace-nowrap flex-shrink-0">
            Framework Aligned
          </p>
          <div className="w-px h-5 bg-slate-200 hidden sm:block flex-shrink-0" />
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {FRAMEWORKS.map((f) => (
              <span key={f} className="font-bold text-xs tracking-widest text-slate-300 hover:text-slate-500 transition-colors cursor-default">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-36 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-8">Work With Us</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Ready to build an ESG programme that holds up to scrutiny?
            </h2>
            <p className="text-slate-500 leading-relaxed mb-12 max-w-xl text-lg">
              Book a complimentary 30-minute consultation. We will assess your current position, your regulatory exposure, and where the highest-value ESG work lies for your organisation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-bold text-white px-8 py-4 rounded-lg transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/case-studies/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1B3E] px-8 py-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-[#F8F9FC] transition-all">
                View Case Studies <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
