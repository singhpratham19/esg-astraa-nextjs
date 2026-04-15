import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES, INDUSTRIES, IMPACT_NUMBERS, FRAMEWORKS, CASE_STUDIES } from '@/lib/data'
import { ArrowRight, ArrowUpRight, CheckCircle, Target, Leaf, BarChart3, ShieldCheck } from 'lucide-react'
import { SITE_NAME, SITE_URL } from '@/lib/seo'
import WhyChooseUsTabs from '@/components/WhyChooseUsTabs'

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

export const metadata: Metadata = {
  title: 'ESG Advisory in India | BRSR Consulting, Carbon Accounting, Sustainable Finance',
  description:
    'ESG Astraa provides ESG advisory in India across BRSR consulting, ESG reporting, sustainable finance advisory, carbon accounting, and ESG strategy for sector-specific business needs.',
  keywords: [
    'ESG advisory India',
    'BRSR consulting India',
    'ESG reporting consultancy',
    'sustainable finance advisory India',
    'carbon accounting consulting',
    'ESG strategy consulting',
    'ESG compliance India',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ESG Advisory in India | BRSR Consulting, Carbon Accounting, Sustainable Finance',
    description: 'Sector-focused ESG advisory for BRSR, carbon accounting, ESG reporting, governance, and sustainable finance.',
    url: SITE_URL,
  },
}

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', name: SITE_NAME, url: SITE_URL, email: 'advisory@esgastraa.com' },
    {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: SITE_URL,
      areaServed: 'India',
      serviceType: ['ESG Advisory', 'BRSR Consulting', 'Sustainable Finance Advisory', 'Carbon Accounting', 'ESG Reporting'],
    },
    { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does an ESG advisory firm do?', acceptedAnswer: { '@type': 'Answer', text: 'An ESG advisory firm helps companies with ESG strategy, reporting, compliance, governance, carbon accounting, and sustainable finance.' } },
        { '@type': 'Question', name: 'Do Indian companies need BRSR consulting support?', acceptedAnswer: { '@type': 'Answer', text: 'Many Indian companies need support with BRSR gap assessments, disclosure drafting, evidence management, and assurance readiness.' } },
        { '@type': 'Question', name: 'How is ESG linked to sustainable finance?', acceptedAnswer: { '@type': 'Answer', text: 'Sustainable finance links ESG performance, climate risk, and credible targets to green bonds, ESG-linked lending, investor communication, and capital decisions.' } },
      ],
    },
  ],
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }} />

      {/* ── HERO — Full-width dark ─────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
        style={{ background: '#0D1B3E' }}
      >
        {/* Texture orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(46,138,234,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(117,22,234,0.10) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(46,138,234,0.04) 0%, transparent 60%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase mb-7 px-4 py-2 rounded-full border"
            style={{ color: '#5BA8EF', borderColor: 'rgba(91,168,239,0.25)', background: 'rgba(46,138,234,0.08)' }}>
            Strategic ESG Advisory · India
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-7 tracking-tight">
            ESG advisory that delivers<br />
            <span style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              measurable outcomes.
            </span>
          </h1>

          <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto">
            Sector-specific ESG consulting for Indian businesses — across strategy, compliance, carbon, governance, and capital markets. Built for listed companies, financial institutions, and growth-stage enterprises.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              'BRSR, ISSB, CSRD, TCFD, and GRI in one team',
              'SEBI, RBI, MCA, and CCTS regulatory expertise',
              'Sector-calibrated across 8 industries',
            ].map((pt) => (
              <div key={pt} className="flex items-center gap-2 text-sm text-white/60">
                <CheckCircle size={14} className="text-[#2E8AEA] flex-shrink-0" />
                {pt}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2E8AEA 0%, #7516EA 100%)' }}>
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)' }}
              onMouseEnter={undefined}>
              Explore Services <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-10 border-t grid grid-cols-2 sm:grid-cols-4 gap-8"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {IMPACT_NUMBERS.map((n) => (
              <div key={n.label} className="text-center">
                <div className="font-display text-3xl font-bold text-white mb-1">{n.value}</div>
                <div className="text-[11px] text-white/35 leading-tight tracking-wide">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK TRUST BAR ─────────────────────────────────── */}
      <section className="border-b border-slate-border/50 bg-slate-bg">
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
              <span className="section-label mb-5 inline-flex">Our Services</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3">
                Three integrated service lines
              </h2>
            </div>
            <Link href="/services/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E8AEA] hover:gap-3 transition-all flex-shrink-0">
              All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target size={22} />,
                title: 'ESG Strategy & Reporting',
                desc: 'From materiality assessment to board-ready disclosure — BRSR, ISSB, GRI, TCFD, and CSRD reporting with regulatory compliance built in.',
                points: ['BRSR Core & Extended Reporting', 'ESG Strategy Roadmap', 'Regulatory Compliance', 'Disclosure & Assurance'],
                href: '/services/strategy-advisory/',
              },
              {
                icon: <Leaf size={22} />,
                title: 'Carbon & Climate Advisory',
                desc: 'Scope 1, 2, and 3 quantification, decarbonisation planning, and carbon market advisory aligned to India\'s CCTS and international standards.',
                points: ['GHG Accounting (Scope 1/2/3)', 'Decarbonisation Roadmap', 'CCTS & Carbon Credits', 'Climate Risk (TCFD)'],
                href: '/services/strategy-advisory/#carbon-advisory',
              },
              {
                icon: <ShieldCheck size={22} />,
                title: 'Finance & Governance',
                desc: 'Sustainable finance structuring, ESG due diligence for transactions, and governance frameworks for boards and management committees.',
                points: ['Green Bond & SLL Structuring', 'Transaction ESG Due Diligence', 'Board Governance Frameworks', 'BRSR Assurance Readiness'],
                href: '/services/finance-risk/',
              },
            ].map((svc) => (
              <Link key={svc.title} href={svc.href}
                className="group block bg-white border border-slate-border/60 rounded-xl p-8 hover:border-[#2E8AEA]/50 hover:shadow-xl transition-all no-underline">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center text-white mb-6 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                  {svc.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-[#0D1B3E] mb-3 group-hover:text-[#2E8AEA] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2 mb-6">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-body/60">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8AEA] group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US — TAB FORM ────────────────────────────── */}
      <WhyChooseUsTabs />

      {/* ── METHODOLOGY ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="section-label mb-5 inline-flex" style={{ color: '#5BA8EF' }}>Our Methodology</span>
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

      {/* ── INDUSTRIES ──────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="section-label mb-5 inline-flex">Sector Expertise</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3">
                Industry-focused ESG consulting
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

      {/* ── INSIGHTS ─────────────────────────────────────────────── */}
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

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured */}
            <Link href="/insights/" className="group lg:col-span-3 block bg-white border border-slate-border/60 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#2E8AEA]/30 transition-all no-underline">
              <div className="h-52 relative flex items-end p-6"
                style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1a3a6e 50%, #2E8AEA 100%)' }}>
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">Whitepaper</span>
                </div>
                <div className="absolute bottom-5 right-5 text-right">
                  <div className="text-4xl font-display font-bold text-white/10">ESG</div>
                </div>
                <BarChart3 size={48} className="text-white/20" />
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-[#0D1B3E] text-xl mb-3 group-hover:text-[#2E8AEA] transition-colors leading-snug">
                  ESG in Indian Manufacturing: From Compliance to Competitive Advantage
                </h3>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-5">
                  An in-depth analysis of how India&apos;s manufacturing sector can transform ESG compliance into strategic value — with benchmarking across 200+ companies.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA]">
                  Download Report <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>

            {/* Side stack */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {[
                {
                  tag: 'Industry Report',
                  title: 'Carbon Markets in India: CCTS Framework & Opportunities',
                  desc: "India's evolving carbon credit trading scheme and implications for corporate strategy.",
                  gradient: 'linear-gradient(135deg, #052E16 0%, #064E3B 50%, #059669 100%)',
                },
                {
                  tag: 'Regulatory Update',
                  title: 'SEBI BRSR Core: Value Chain Implications',
                  desc: 'Practical guidance on BRSR Core requirements and supply chain ESG management.',
                  gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #7516EA 100%)',
                },
              ].map((a) => (
                <Link key={a.title} href="/insights/" className="group flex gap-0 bg-white border border-slate-border/60 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#2E8AEA]/30 transition-all no-underline">
                  <div className="w-24 flex-shrink-0 flex items-center justify-center"
                    style={{ background: a.gradient }}>
                    <BarChart3 size={20} className="text-white/40" />
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#7516EA] mb-1.5">{a.tag}</span>
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

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-5 inline-flex justify-center">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 mb-4">
              Questions companies ask before choosing an ESG advisory firm
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'What does an ESG advisory firm do?',
                a: 'An ESG advisory firm helps companies with ESG strategy, reporting, compliance, governance, carbon accounting, and sustainable finance. The exact scope depends on whether the company needs reporting support, a management roadmap, or transaction-related work.',
              },
              {
                q: 'Do Indian companies need BRSR consulting support?',
                a: 'Many do. BRSR work usually requires cross-functional data collection, disclosure interpretation, evidence management, and internal review processes. Consulting support is often useful when timelines are tight or internal systems are still developing.',
              },
              {
                q: 'How is ESG linked to sustainable finance?',
                a: 'Lenders and investors increasingly expect ESG performance, climate risk information, and credible targets to support green bonds, ESG-linked lending, and investor communication. Sustainable finance advisory helps connect ESG work to capital decisions.',
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-border/60 bg-white p-6">
                <h3 className="font-display font-bold text-[#0D1B3E] mb-2">{item.q}</h3>
                <p className="text-sm text-slate-body/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1a2f5e 60%, #0D1B3E 100%)' }}>
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
              <Link href="/insights/" className="btn-outline text-center justify-center"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)' }}>
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
