import Link from 'next/link'
import { SERVICES, CASE_STUDIES } from '@/lib/data'
import { ArrowRight, CheckCircle2, Target, FileCheck, Leaf, Shield, TrendingUp, BarChart3, Layers, Cpu, GitBranch, Database, PieChart, Award, Users, Clock, Globe, Lightbulb } from 'lucide-react'
import { notFound } from 'next/navigation'

const SERVICE_CONFIG: Record<string, {
  icon: React.ReactNode
  accentColor: string
  bgColor: string
  lightBg: string
  decorIcons: React.ReactNode[]
}> = {
  'esg-strategy-transformation': {
    icon: <Target size={48} strokeWidth={1.5} />,
    accentColor: '#2E8AEA',
    bgColor: '#0D1B3E',
    lightBg: '#EEF4FF',
    decorIcons: [<Layers size={20} key="l" />, <GitBranch size={20} key="g" />, <Globe size={20} key="gl" />, <Lightbulb size={20} key="li" />],
  },
  'brsr-esg-compliance': {
    icon: <FileCheck size={48} strokeWidth={1.5} />,
    accentColor: '#0091DA',
    bgColor: '#00338D',
    lightBg: '#EFF6FF',
    decorIcons: [<FileCheck size={20} key="f" />, <Layers size={20} key="l" />, <Award size={20} key="a" />, <CheckCircle2 size={20} key="c" />],
  },
  'carbon-advisory-credits': {
    icon: <Leaf size={48} strokeWidth={1.5} />,
    accentColor: '#16A34A',
    bgColor: '#052E16',
    lightBg: '#F0FDF4',
    decorIcons: [<Leaf size={20} key="l" />, <Globe size={20} key="g" />, <BarChart3 size={20} key="b" />, <TrendingUp size={20} key="t" />],
  },
  'esg-risk-governance': {
    icon: <Shield size={48} strokeWidth={1.5} />,
    accentColor: '#7516EA',
    bgColor: '#2D0569',
    lightBg: '#F5F3FF',
    decorIcons: [<Shield size={20} key="s" />, <Users size={20} key="u" />, <Layers size={20} key="l" />, <GitBranch size={20} key="g" />],
  },
  'sustainable-finance': {
    icon: <TrendingUp size={48} strokeWidth={1.5} />,
    accentColor: '#0D9488',
    bgColor: '#042F2E',
    lightBg: '#F0FDFA',
    decorIcons: [<TrendingUp size={20} key="t" />, <PieChart size={20} key="p" />, <Database size={20} key="d" />, <Award size={20} key="a" />],
  },
  'esg-data-intelligence': {
    icon: <BarChart3 size={48} strokeWidth={1.5} />,
    accentColor: '#2E8AEA',
    bgColor: '#0D1B3E',
    lightBg: '#EEF4FF',
    decorIcons: [<BarChart3 size={20} key="b" />, <Cpu size={20} key="c" />, <Database size={20} key="d" />, <PieChart size={20} key="p" />],
  },
}

const SERVICE_BENEFITS: Record<string, string[]> = {
  'esg-strategy-transformation': ['Align ESG with core business strategy for competitive advantage', 'Identify material issues through structured stakeholder engagement', 'Create actionable roadmaps with clear milestones and KPIs', 'Benchmark against industry peers using proprietary data'],
  'brsr-esg-compliance': ['Achieve SEBI BRSR compliance with audit-ready documentation', 'Single reporting effort satisfies GRI, ISSB, TCFD, CDP, and SASB', 'Reduce data collection cycles with smart architecture', 'Prepare for reasonable assurance with confidence'],
  'carbon-advisory-credits': ['Precise Scope 1/2/3 emissions accounting using GHG Protocol', 'Access premium carbon credits from VCS and Gold Standard registries', 'Navigate India\'s Carbon Credit Trading Scheme framework', 'Build EU CBAM readiness for export-oriented operations'],
  'esg-risk-governance': ['Embed ESG into enterprise risk management frameworks', 'Build board-level ESG oversight structures and committees', 'Assess supply chain ESG risks across your value chain', 'Align with COSO ERM and TCFD risk categories'],
  'sustainable-finance': ['Design green, social, and sustainability-linked finance frameworks with ICMA-aligned discipline', 'Structure ESG-linked lending KPIs and sustainability performance targets that withstand lender scrutiny', 'Support transaction ESG due diligence for M&A, PE, VC, and credit processes', 'Prepare institutions for IFRS S1/S2, RBI climate-risk expectations, and investor disclosure demands'],
  'esg-data-intelligence': ['Benchmark ESG performance against industry peers', 'Track 200+ KPIs across environmental, social, and governance pillars', 'Generate board-ready dashboards and progress reports', 'Make data-driven decisions with validated industry benchmarks'],
}

const RELATED_CASE_STUDIES: Record<string, string> = {
  'esg-strategy-transformation': 'manufacturing-brsr',
  'brsr-esg-compliance': 'manufacturing-brsr',
  'carbon-advisory-credits': 'energy-carbon-credits',
  'esg-risk-governance': 'manufacturing-brsr',
  'sustainable-finance': 'finance-green-bond',
  'esg-data-intelligence': 'manufacturing-brsr',
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return { title: 'Service | ESG Astraa' }
  return {
    title: `${service.title}`,
    description: `${service.title} from ESG Astraa covering ${service.deliverables.slice(0, 2).join(' and ').toLowerCase()} for companies seeking ESG advisory, reporting, compliance, and execution support.`,
    keywords: [`${service.title} advisory`, `${service.shortTitle} consulting`, 'ESG advisory India', 'ESG consulting'],
    alternates: { canonical: `/services/${service.slug}/` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  const cfg = SERVICE_CONFIG[service.slug] || SERVICE_CONFIG['esg-strategy-transformation']
  const related = CASE_STUDIES.find((s) => s.slug === RELATED_CASE_STUDIES[service.slug]) || CASE_STUDIES[0]
  const benefits = SERVICE_BENEFITS[service.slug] || []

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: cfg.bgColor }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 80% 50%, ${cfg.accentColor} 0%, transparent 60%), radial-gradient(circle at 10% 80%, ${cfg.accentColor} 0%, transparent 50%)` }} />

        {/* Decorative floating icons */}
        <div className="absolute top-20 right-16 hidden lg:grid grid-cols-2 gap-3 opacity-15">
          {cfg.decorIcons.map((icon, i) => (
            <div key={i} className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white">
              {icon}
            </div>
          ))}
        </div>

        <div className="max-w-site mx-auto px-6 relative">
          <Link href="/services/" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/40 hover:text-white/70 transition-colors no-underline mb-8">
            ← All Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-white"
                style={{ background: cfg.accentColor }}>
                {cfg.icon}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.06] mb-6 tracking-tight">
                {service.title}
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8">
                {service.hero}
              </p>
              <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
                style={{ background: cfg.accentColor }}>
                {service.cta} <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right side: visual card */}
            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/35 mb-6">What This Covers</p>
                <div className="space-y-4">
                  {service.sections.slice(0, 4).map((sec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold"
                        style={{ background: `${cfg.accentColor}40` }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white/80">{sec.title}</div>
                        {sec.content && <div className="text-xs text-white/35 mt-0.5 leading-relaxed line-clamp-1">{sec.content}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                  {[
                    { val: service.deliverables.length + '+', lbl: 'Deliverables' },
                    { val: service.idealFor.length + '+', lbl: 'Client types' },
                    { val: service.sections.length + '+', lbl: 'Practice areas' },
                  ].map((s) => (
                    <div key={s.lbl} className="text-center">
                      <div className="font-display font-bold text-xl text-white">{s.val}</div>
                      <div className="text-[10px] text-white/35 mt-0.5">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      {benefits.length > 0 && (
        <section className="py-14 bg-[#0D1B3E] border-t border-white/5">
          <div className="max-w-site mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" style={{ color: cfg.accentColor }} />
                  <p className="text-sm text-white/70 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who It's For + Deliverables */}
      <section className="py-20 bg-white border-b border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 max-w-5xl mx-auto">
            {/* Who it's for — icon visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-border/50">
              <div className="p-8" style={{ backgroundColor: cfg.bgColor }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: cfg.accentColor }}>
                    <Users size={18} />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/50">Who We Work With</p>
                </div>
                {/* Decorative icon grid */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {cfg.decorIcons.map((icon, i) => (
                    <div key={i} className="aspect-square rounded-xl border border-white/10 flex items-center justify-center text-white/30">
                      {icon}
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: cfg.accentColor }}></span>
                  {service.shortTitle} Advisory
                </div>
              </div>
              <div className="p-8 bg-white">
                <span className="section-label mb-4 inline-block">Who This Service Is For</span>
                <ul className="space-y-3 mt-4">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: cfg.accentColor }} />
                      <span className="text-sm text-slate-body/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-2xl border border-slate-border/50 bg-slate-bg/40 p-8">
                <span className="section-label mb-4 inline-block">Expected Outputs</span>
                <h2 className="font-display text-xl font-bold text-[#0D1B3E] mt-3 mb-5">Typical Deliverables</h2>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-slate-body/30 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-body/75 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-14">
            {service.sections.map((sec, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-display font-bold text-3xl text-slate-border/40">0{i + 1}</span>
                  <h2 className="font-display text-2xl font-bold text-[#0D1B3E]">{sec.title}</h2>
                </div>
                {sec.content && (
                  <p className="text-slate-body/75 leading-relaxed">{sec.content}</p>
                )}
                {sec.items && (
                  <ul className="space-y-3 mt-4">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: cfg.accentColor }} />
                        <span className="text-slate-body/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology — icon-based */}
      <section className="bg-slate-bg border-y border-slate-border/40">
        <div className="max-w-site mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: icon visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-border/50">
              <div className="p-8" style={{ backgroundColor: cfg.bgColor }}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Assess', icon: <Target size={22} /> },
                    { label: 'Strategise', icon: <Lightbulb size={22} /> },
                    { label: 'Implement', icon: <GitBranch size={22} /> },
                    { label: 'Measure', icon: <BarChart3 size={22} /> },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/10 p-5 flex flex-col gap-3">
                      <div className="text-white/60">{s.icon}</div>
                      <div className="text-sm font-semibold text-white/70">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex-1 h-px" style={{ background: `${cfg.accentColor}40` }} />
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/30">4-Phase Methodology</span>
                  <div className="flex-1 h-px" style={{ background: `${cfg.accentColor}40` }} />
                </div>
              </div>
              <div className="px-8 py-5 bg-white flex items-center gap-3">
                <Clock size={14} className="text-slate-body/35" />
                <p className="text-xs text-slate-body/55">Adapted to your regulatory timeline and maturity</p>
              </div>
            </div>

            <div>
              <span className="section-label mb-4 inline-block">Our Methodology</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] mt-4 mb-8">
                How We Deliver Results
              </h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Discovery & Scoping', desc: 'We begin with a thorough assessment of your current state, identifying gaps, risks, and opportunities specific to your organisation.' },
                  { step: '02', title: 'Strategy & Roadmap', desc: 'Using proprietary data and industry benchmarks, we design a clear, actionable roadmap aligned to your business goals.' },
                  { step: '03', title: 'Execution & Support', desc: 'Our team works alongside yours — building systems, training staff, and delivering outputs that meet regulatory and stakeholder standards.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className="font-display font-bold text-xl mt-0.5 flex-shrink-0" style={{ color: `${cfg.accentColor}40` }}>{s.step}</span>
                    <div>
                      <h4 className="font-display font-bold text-[#0D1B3E] mb-1">{s.title}</h4>
                      <p className="text-sm text-slate-body/65 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="section-label mb-6 inline-block">Related Case Study</span>
            <Link href={`/case-studies/${related.slug}/`}
              className="group block rounded-2xl border border-slate-border/60 bg-white overflow-hidden no-underline mt-4 hover:shadow-xl hover:border-transparent transition-all">
              {/* Icon-based header instead of image */}
              <div className="p-8 relative overflow-hidden" style={{ backgroundColor: cfg.bgColor }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: `radial-gradient(circle at 80% 50%, ${cfg.accentColor} 0%, transparent 60%)` }} />
                <div className="relative flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: cfg.accentColor }}>
                    {cfg.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/40 block mb-2">{related.industry}</span>
                    <h3 className="font-display font-bold text-xl text-white mb-2">{related.title}</h3>
                    <p className="text-sm font-semibold" style={{ color: cfg.accentColor }}>{related.outcome}</p>
                  </div>
                </div>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {related.metrics.map((m) => (
                    <span key={m} className="text-[11px] font-medium text-white/50 border border-white/15 px-3 py-1 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
              <div className="px-8 py-5 flex items-center justify-between">
                <p className="text-sm text-slate-body/60 leading-relaxed max-w-lg">{related.challenge.slice(0, 120)}...</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold flex-shrink-0 ml-6 group-hover:gap-3 transition-all" style={{ color: cfg.accentColor }}>
                  Read Study <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: cfg.bgColor }}>
        <div className="max-w-site mx-auto px-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mx-auto mb-6" style={{ background: cfg.accentColor }}>
            {cfg.icon}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{service.cta}</h2>
          <p className="text-white/45 text-sm mb-8 max-w-md mx-auto">
            Speak with our advisory team to explore how we can support your organisation.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
            style={{ background: cfg.accentColor }}>
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
