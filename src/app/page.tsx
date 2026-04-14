import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, INDUSTRIES, IMPACT_NUMBERS, FRAMEWORKS, CASE_STUDIES } from '@/lib/data'
import { ArrowRight, ArrowUpRight, CheckCircle, TrendingUp, ShieldCheck, Leaf, BarChart2, FileCheck } from 'lucide-react'

const INDUSTRY_ICONS: Record<string, string> = {
  'manufacturing': '🏭',
  'energy-power': '⚡',
  'healthcare-pharma': '🏥',
  'infrastructure-real-estate': '🏢',
  'financial-services': '🏦',
  'mining-metals': '⛏️',
  'it-technology': '💻',
  'agriculture-food': '🌾',
}

export default function Home() {
  return (
    <main>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-0 overflow-hidden">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[86vh]">

            {/* Left — Content */}
            <div className="flex flex-col justify-center py-16 pr-12">
              <span className="section-label mb-6">Strategic ESG Advisory</span>
              <h1 className="font-display text-5xl md:text-[3.5rem] font-bold text-[#0D1B3E] leading-[1.08] mb-6 tracking-tight">
                Turning ESG Complexity<br />
                into{' '}
                <span className="gradient-text">Strategic Advantage</span>
              </h1>
              <p className="text-lg text-slate-body/70 leading-relaxed mb-8 max-w-lg">
                ESG Astraa is a MindEarth Consulting company delivering data-backed advisory across strategy, compliance, carbon, governance, and sustainable finance — for organisations building resilient futures in emerging markets.
              </p>

              {/* 3 proof points */}
              <div className="space-y-3 mb-10">
                {[
                  'BRSR, ISSB, CSRD, TCFD & GRI — all frameworks, one advisory team',
                  'Deep Indian regulatory expertise: SEBI, RBI, MCA, CCTS',
                  'Sector-calibrated advisory across 8 industry specialisations',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[#2E8AEA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-body/75 leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact/" className="btn-primary">
                  Book a Consultation <ArrowRight size={16} />
                </Link>
                <Link href="/services/" className="btn-outline">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-14 pt-8 border-t border-slate-border/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {IMPACT_NUMBERS.map((n) => (
                  <div key={n.label}>
                    <div className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-0.5">{n.value}</div>
                    <div className="text-[11px] text-slate-body/50 leading-tight">{n.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image collage */}
            <div className="hidden lg:grid grid-rows-2 grid-cols-2 gap-3 py-8 pl-6">
              <div className="relative col-span-2 row-span-1 rounded-2xl overflow-hidden">
                <Image src="/images/hero-consulting.jpg" alt="ESG strategy session" fill className="object-cover" priority />
                {/* floating card */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur rounded-xl px-5 py-4 shadow-xl max-w-xs">
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#2E8AEA] mb-1">Data-backed delivery</p>
                  <p className="font-display font-bold text-[#0D1B3E] text-sm leading-snug">Strategy, compliance & execution — built into one advisory model.</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/team-meeting.jpg" alt="Advisory team" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/data-analysis.jpg" alt="ESG data analysis" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK TRUST BAR ─────────────────────────────────── */}
      <section className="border-y border-slate-border/50 bg-slate-bg">
        <div className="max-w-site mx-auto px-6 py-4 flex flex-wrap items-center gap-4 md:gap-0 justify-between">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-body/35">Aligned to</span>
          {FRAMEWORKS.map((f) => (
            <span key={f} className="text-xs font-bold text-slate-body/30 tracking-widest hover:text-[#2E8AEA] transition-colors">{f}</span>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="section-label mb-5 inline-flex">Advisory Services</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3">
                Six Consulting Pillars
              </h2>
              <p className="text-slate-body/60 mt-3 max-w-md leading-relaxed">
                Structured advisory frameworks covering every dimension of the ESG transition.
              </p>
            </div>
            <Link href="/services/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E8AEA] hover:gap-3 transition-all flex-shrink-0">
              All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`}
                className="group relative bg-white border border-slate-border/60 rounded-xl p-8 hover:border-[#2E8AEA]/40 hover:shadow-lg transition-all no-underline overflow-hidden">
                {/* gradient accent top-left */}
                <div className="absolute top-0 left-0 w-full h-[3px] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                <span className="font-bold text-6xl text-slate-border/40 group-hover:text-[#2E8AEA]/15 transition-colors block mb-4">0{i + 1}</span>
                <h3 className="font-display font-bold text-lg text-[#0D1B3E] mb-3 group-hover:text-[#2E8AEA] transition-colors">{s.shortTitle}</h3>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#7516EA] group-hover:gap-3 transition-all">
                  Explore Practice <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ESG ASTRAA (split with image) ───────────────────── */}
      <section className="py-28 bg-slate-bg border-y border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image side */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/handshake.jpg" alt="Strategic ESG partnership" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: '₹500Cr+', lbl: 'Green Finance Facilitated' },
                    { val: '1.2M', lbl: 'tCO₂e Measured' },
                  ].map((s) => (
                    <div key={s.lbl} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white">
                      <div className="font-display font-bold text-2xl mb-1">{s.val}</div>
                      <div className="text-xs text-white/60">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content side */}
            <div>
              <span className="section-label mb-5 inline-flex">Why ESG Astraa</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-6">
                Not a SaaS Platform.<br />Not a Generic Consultant.
              </h2>
              <p className="text-slate-body/65 leading-relaxed mb-10">
                We are a strategic ESG partner with data-backed execution capabilities — bridging the gap between advisory insight and measurable, auditable outcomes across emerging markets.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <ShieldCheck size={20} />, title: 'Consulting-First, Data-Powered', desc: 'Proprietary benchmarking and analytics underpin every recommendation — no generic checklists.' },
                  { icon: <TrendingUp size={20} />, title: 'End-to-End Delivery', desc: 'From baseline assessment to board-ready disclosure — strategy, implementation, and measurement in one model.' },
                  { icon: <Leaf size={20} />, title: 'India-Rooted, Globally Aligned', desc: 'Deep expertise in SEBI, RBI, MCA and CCTS, connected to ISSB, CSRD, and TCFD frameworks.' },
                  { icon: <BarChart2 size={20} />, title: 'Industry-Calibrated Advisory', desc: 'Sector-specific teams across 8 industries — not one-size-fits-all advisory.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                      style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0D1B3E] mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-body/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about/" className="btn-primary">
                  Learn Our Approach <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="section-label mb-5 inline-flex" style={{ color: '#5BA8EF' }}>
                Our Methodology
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mt-3 mb-5">
                A Rigorous 4-Phase Framework
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                Every engagement follows a proven methodology — from establishing the baseline to driving measurable, auditable ESG outcomes.
              </p>
              <Link href="/about/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E8AEA] mt-8 hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {[
                { num: '01', title: 'Assess', desc: 'Baseline measurement, gap analysis, and materiality assessment. Proprietary benchmarking against sector peers.' },
                { num: '02', title: 'Strategise', desc: 'Data-informed roadmap aligned to business strategy, regulatory timelines, and stakeholder priorities.' },
                { num: '03', title: 'Implement', desc: 'Hands-on execution — data architecture, governance structures, disclosure drafting and reporting systems.' },
                { num: '04', title: 'Measure', desc: 'Continuous monitoring, KPI tracking, board reporting, and stakeholder communication frameworks.' },
              ].map((p) => (
                <div key={p.num} className="rounded-xl border border-white/10 p-7 hover:border-[#2E8AEA]/50 hover:bg-white/5 transition-all">
                  <span className="font-bold text-3xl block mb-4 gradient-text">{p.num}</span>
                  <h4 className="font-display font-bold text-white text-lg mb-2">{p.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCE-FIRST SECTION ───────────────────────────────── */}
      <section className="py-28 bg-white border-y border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-5 inline-flex">CA-Backed Finance Expertise</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-6">
                ESG Advisory Grounded<br />in Financial Rigour
              </h2>
              <p className="text-slate-body/65 leading-relaxed mb-8">
                Our sustainable finance practice is led by Chartered Accountants with deep capital markets, structured finance, and IFRS expertise. We speak the language of deal rooms, credit committees, and investor mandates — translating ESG into financially quantified outcomes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  { label: 'Green Bond Structuring', sub: 'ICMA-aligned, India Green Taxonomy' },
                  { label: 'Transaction ESG Due Diligence', sub: 'PE, M&A, and lender mandates' },
                  { label: 'IFRS S1 & S2 Readiness', sub: 'Climate disclosure gap assessment' },
                  { label: 'ESG-Linked Lending KPIs', sub: 'SLB and SLL structuring' },
                  { label: 'Climate Risk Modelling', sub: 'TCFD scenario analysis' },
                  { label: 'Impact Measurement (IMM)', sub: 'For DFI and impact investors' },
                  { label: 'Use-of-Proceeds Eligibility Mapping', sub: 'Green, social, and sustainability finance categories' },
                  { label: 'Second-Party Opinion Readiness', sub: 'Documentation, controls, and reviewer coordination' },
                  { label: 'Portfolio Climate Alignment', sub: 'Exposure analysis for lenders and financial institutions' },
                  { label: 'ESG-Linked Working Capital Facilities', sub: 'KPI-linked structures for treasury and lending teams' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 bg-slate-bg rounded-lg p-4 border border-slate-border/50">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }} />
                    <div>
                      <p className="font-semibold text-sm text-[#0D1B3E]">{item.label}</p>
                      <p className="text-xs text-slate-body/55 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/services/sustainable-finance/" className="btn-primary">
                Explore Finance Advisory <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/board-meeting.jpg" alt="ESG finance advisory" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 to-[#0D1B3E]/20" />
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                {[
                  { val: '₹500Cr+', lbl: 'Green Finance Structured' },
                  { val: '3', lbl: 'Framework Certifications per Issuance' },
                  { val: 'ICMA · CBI · India SGrB', lbl: 'Standards Aligned' },
                ].map((s) => (
                  <div key={s.lbl} className="flex items-center justify-between bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-3 text-white">
                    <span className="text-xs text-white/55">{s.lbl}</span>
                    <span className="font-display font-bold text-sm">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US FOR ESG-LINKED FINANCE ───────────────── */}
      <section className="py-24 bg-slate-bg border-b border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <span className="section-label mb-5 inline-flex">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-6">
                Why clients choose us for ESG-linked finance.
              </h2>
              <p className="text-slate-body/65 leading-relaxed">
                ESG-linked finance fails when sustainability language is disconnected from lending logic, investor expectations, and transaction discipline. Our edge is that we build the finance story with the same rigor as the ESG story.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <TrendingUp size={20} />,
                  title: 'Finance-First Structuring',
                  desc: 'We design ESG-linked instruments around KPI calibration, covenant logic, target credibility, and lender or investor usability.',
                },
                {
                  icon: <ShieldCheck size={20} />,
                  title: 'CA-Led Transaction Discipline',
                  desc: 'Our finance work is grounded in capital markets, due diligence, and financially quantified risk assessment rather than broad sustainability messaging.',
                },
                {
                  icon: <FileCheck size={20} />,
                  title: 'Framework And Disclosure Alignment',
                  desc: 'ICMA principles, RBI climate expectations, India green taxonomy logic, and IFRS S1/S2 readiness are handled in one coherent workstream.',
                },
                {
                  icon: <BarChart2 size={20} />,
                  title: 'Execution Beyond The Framework',
                  desc: 'We support internal approvals, evidence requirements, second-party opinion readiness, investor materials, and recurring reporting expectations.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-border/60 rounded-xl p-7">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-white mb-5"
                    style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0D1B3E] mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-body/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="section-label mb-5 inline-flex">Sector Expertise</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3">
                Eight Industry Specialisations
              </h2>
            </div>
            <Link href="/industries/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E8AEA] hover:gap-3 transition-all flex-shrink-0">
              All Industries <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}/`}
                className="group bg-slate-bg border border-slate-border/50 rounded-xl p-6 hover:border-[#2E8AEA]/40 hover:bg-[#EEF5FF] transition-all no-underline">
                <div className="text-3xl mb-4">{INDUSTRY_ICONS[ind.slug]}</div>
                <h3 className="font-display font-bold text-sm text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors leading-snug mb-2">{ind.title}</h3>
                <div className="w-6 h-[2px] mt-1 rounded-full group-hover:w-10 transition-all"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────────────────────── */}
      <section className="py-28 bg-slate-bg border-y border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="section-label mb-5 inline-flex">Proven Results</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3">Client Outcomes</h2>
            </div>
            <Link href="/case-studies/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E8AEA] hover:gap-3 transition-all flex-shrink-0">
              All Case Studies <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}/`}
                className="group block bg-white border border-slate-border/60 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#2E8AEA]/30 transition-all no-underline">
                {/* Top accent */}
                <div className="h-[3px] w-full" style={{ background: i % 2 === 0 ? 'linear-gradient(90deg,#2E8AEA,#7516EA)' : 'linear-gradient(90deg,#7516EA,#9B30FF)' }} />
                <div className="p-8">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-body/40 block mb-4">{cs.industry}</span>
                  <h3 className="font-display font-bold text-[#0D1B3E] mb-4 group-hover:text-[#2E8AEA] transition-colors leading-snug text-base">{cs.title}</h3>
                  <p className="text-sm font-semibold mb-5" style={{ background: 'linear-gradient(90deg,#2E8AEA,#7516EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{cs.outcome}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span key={m} className="text-[11px] text-slate-body/60 bg-slate-bg border border-slate-border/50 px-3 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS WITH IMAGES ─────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="section-label mb-5 inline-flex">Research &amp; Insights</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3">From Our Latest Research</h2>
            </div>
            <Link href="/insights/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E8AEA] hover:gap-3 transition-all flex-shrink-0">
              All Insights <ArrowRight size={14} />
            </Link>
          </div>

          {/* Featured + 2 side */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured */}
            <Link href="/insights/" className="group lg:col-span-3 block bg-white border border-slate-border/60 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#2E8AEA]/30 transition-all no-underline">
              <div className="relative h-56 overflow-hidden">
                <Image src="/images/report-writing.jpg" alt="ESG research" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/60 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.14em] uppercase text-white bg-[#2E8AEA] px-3 py-1.5 rounded-full">Whitepaper</span>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-[#0D1B3E] text-xl mb-3 group-hover:text-[#2E8AEA] transition-colors leading-snug">
                  ESG in Indian Manufacturing: From Compliance to Competitive Advantage
                </h3>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-5">
                  An in-depth analysis of how India&apos;s manufacturing sector can transform ESG compliance into strategic value creation — with proprietary benchmarking across 200+ companies.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA]">
                  Download Report <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>

            {/* Side stack */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {[
                { tag: 'Industry Report', title: 'Carbon Markets in India: CCTS Framework & Opportunities', img: '/images/carbon-forest.jpg', desc: 'India\'s evolving carbon credit trading scheme and implications for corporate strategy.' },
                { tag: 'Regulatory Update', title: 'SEBI BRSR Core: Value Chain Implications', img: '/images/green-energy.jpg', desc: 'Practical guidance on BRSR Core requirements and supply chain ESG management.' },
              ].map((a) => (
                <Link key={a.title} href="/insights/" className="group flex gap-4 bg-white border border-slate-border/60 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#2E8AEA]/30 transition-all no-underline">
                  <div className="relative w-28 flex-shrink-0">
                    <Image src={a.img} alt={a.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#7516EA] mb-2">{a.tag}</span>
                    <h4 className="font-display font-bold text-sm text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors leading-snug mb-2">{a.title}</h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2E8AEA]">
                      Read <ArrowUpRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────── */}
      <section className="py-24 border-y border-slate-border/50 bg-slate-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              CSO
            </div>
          </div>
          <blockquote className="font-display text-xl md:text-2xl text-[#0D1B3E] leading-relaxed font-semibold mb-7">
            &ldquo;ESG Astraa brought strategic clarity to what felt like an overwhelming compliance exercise. Their data-backed approach transformed our BRSR reporting into a genuine value creation tool.&rdquo;
          </blockquote>
          <p className="font-semibold text-sm text-[#0D1B3E]">Chief Sustainability Officer</p>
          <p className="text-xs text-slate-body/45 mt-1">Leading Listed Manufacturer, India</p>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1a2f5e 60%, #0D1B3E 100%)' }}>
        {/* subtle gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #2E8AEA, transparent)' }} />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #7516EA, transparent)' }} />

        <div className="max-w-site mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-5 inline-flex" style={{ color: '#5BA8EF' }}>Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mt-3 mb-4">
                Ready to transform your ESG strategy?
              </h2>
              <p className="text-white/50 leading-relaxed">
                Book a complimentary 30-minute consultation with our advisory team. No obligation, no generic pitch — just focused discussion on your ESG priorities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-primary text-center justify-center">
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/insights/" className="btn-outline text-center justify-center" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)' }}>
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
