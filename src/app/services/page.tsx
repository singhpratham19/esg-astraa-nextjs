import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import {
  ArrowRight,
  CheckCircle,
  Target,
  FileCheck,
  Leaf,
  Shield,
  TrendingUp,
  BarChart3,
  Cpu,
  Activity,
  Database,
  ClipboardCheck,
  Zap,
  Globe,
} from 'lucide-react'

export const metadata = {
  title: 'ESG Advisory Services India | BRSR Consulting, GHG Measurement, Automated ESG Compliance',
  description:
    'ESG Astraa delivers technology-powered ESG advisory services in India — BRSR consulting, GHG measurement and carbon accounting, automated ESG compliance and audit, sustainable finance, and ESG risk governance for listed companies, banks, and industrial businesses.',
  keywords: [
    'ESG advisory services India',
    'BRSR consulting India',
    'GHG measurement platform India',
    'automated ESG compliance',
    'ESG audit automation',
    'carbon accounting software India',
    'ESG reporting platform',
    'BRSR compliance software',
    'Scope 1 2 3 emissions measurement',
    'ESG data management India',
    'sustainable finance advisory',
    'ESG risk governance',
  ],
}

const SERVICE_ICONS: Record<string, React.ReactElement> = {
  'esg-strategy-transformation': <Target size={26} strokeWidth={1.5} />,
  'brsr-esg-compliance': <FileCheck size={26} strokeWidth={1.5} />,
  'carbon-advisory-credits': <Leaf size={26} strokeWidth={1.5} />,
  'esg-risk-governance': <Shield size={26} strokeWidth={1.5} />,
  'sustainable-finance': <TrendingUp size={26} strokeWidth={1.5} />,
  'esg-data-intelligence': <BarChart3 size={26} strokeWidth={1.5} />,
}

const SERVICE_COLORS: Record<string, string> = {
  'esg-strategy-transformation': '#2E8AEA',
  'brsr-esg-compliance': '#0091DA',
  'carbon-advisory-credits': '#16A34A',
  'esg-risk-governance': '#7516EA',
  'sustainable-finance': '#0D9488',
  'esg-data-intelligence': '#2E8AEA',
}

const PLATFORM_MODULES = [
  {
    icon: <Activity size={24} />,
    color: '#16A34A',
    bg: '#F0FDF4',
    title: 'GHG Measurement Engine',
    desc: 'Automated Scope 1, Scope 2, and Scope 3 emissions measurement across facilities, value chains, and asset classes. Aligned to GHG Protocol, SBTi, and BRSR P6 disclosure requirements.',
    features: [
      'Multi-site emissions data consolidation',
      'International emission factor databases',
      'CBAM-ready embedded carbon reporting',
      'Audit-trail and assurance-ready outputs',
    ],
    badge: 'GHG Protocol Aligned',
  },
  {
    icon: <ClipboardCheck size={24} />,
    color: '#0091DA',
    bg: '#EFF6FF',
    title: 'Automated Compliance & Audit',
    desc: 'End-to-end BRSR and multi-framework ESG compliance engine that automates data collection, disclosure mapping, evidence management, and assurance-readiness across reporting cycles.',
    features: [
      'BRSR, GRI, ISSB, TCFD, CSRD mapping',
      'Automated KPI collection workflows',
      'Evidence library and control documentation',
      'Reasonable assurance readiness tracker',
    ],
    badge: 'SEBI BRSR Ready',
  },
  {
    icon: <Database size={24} />,
    color: '#7516EA',
    bg: '#F5F3FF',
    title: 'ESG Data Intelligence Platform',
    desc: 'Centralised ESG data management with real-time dashboards, peer benchmarking, board-ready reporting packs, and KPI tracking across 200+ environmental, social, and governance indicators.',
    features: [
      'Single source of truth for ESG data',
      'Board and investor-ready dashboards',
      'Industry peer benchmarking',
      'Custom KPI framework design',
    ],
    badge: 'Multi-Framework Output',
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 75% 40%, #2E8AEA 0%, transparent 55%), radial-gradient(circle at 15% 80%, #7516EA 0%, transparent 50%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#5BA8EF] block mb-5">Advisory Services</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.06] mb-6 tracking-tight">
                Technology-powered ESG advisory for Indian businesses
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
                Six integrated ESG consulting practices — from BRSR compliance and GHG measurement to carbon credits, risk governance, sustainable finance, and ESG data intelligence — all delivered through our proprietary technology platform.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                  Book a Consultation <ArrowRight size={15} />
                </Link>
                <Link href="/platform/" className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/65 px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 transition-colors no-underline">
                  See Our Platform <ArrowRight size={15} />
                </Link>
              </div>
              {/* SEO keyword tags */}
              <div className="flex flex-wrap gap-2">
                {['BRSR Consulting', 'GHG Measurement', 'Automated ESG Audit', 'Carbon Accounting', 'SEBI Compliance', 'Sustainable Finance'].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold text-white/35 border border-white/10 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { val: '50+', lbl: 'Organisations Served', icon: <Globe size={16} /> },
                { val: '6', lbl: 'Advisory Practices', icon: <Target size={16} /> },
                { val: '7+', lbl: 'ESG Frameworks Covered', icon: <FileCheck size={16} /> },
                { val: '8', lbl: 'Industry Specialisations', icon: <BarChart3 size={16} /> },
              ].map((stat) => (
                <div key={stat.lbl} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-[#5BA8EF] mb-3">{stat.icon}</div>
                  <div className="font-display text-3xl font-bold text-white mb-1">{stat.val}</div>
                  <div className="text-xs text-white/40">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Platform Highlight */}
      <section className="py-24 bg-slate-bg border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2E8AEA]/30 bg-[#EEF4FF] text-[#2E8AEA] text-[10px] font-bold tracking-[0.14em] uppercase mb-6">
              <Cpu size={12} /> Technology Platform
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
              Advisory backed by proprietary ESG technology
            </h2>
            <p className="text-slate-body/60 leading-relaxed">
              Our consulting outcomes are powered by three integrated platform modules — GHG measurement, automated compliance and audit, and ESG data intelligence — giving clients speed, accuracy, and assurance-readiness that manual consulting cannot deliver.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {PLATFORM_MODULES.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl border border-slate-border/50 overflow-hidden hover:shadow-xl hover:border-transparent transition-all group">
                <div className="h-1.5 w-full" style={{ background: mod.color }} />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: mod.color }}>
                      {mod.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-full mt-1" style={{ color: mod.color, backgroundColor: mod.bg }}>
                      {mod.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0D1B3E] mb-3 group-hover:text-[#2E8AEA] transition-colors">{mod.title}</h3>
                  <p className="text-sm text-slate-body/60 leading-relaxed mb-6">{mod.desc}</p>
                  <div className="space-y-2.5">
                    {mod.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Zap size={12} className="mt-0.5 flex-shrink-0" style={{ color: mod.color }} />
                        <span className="text-xs text-slate-body/65 leading-tight">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-[#0D1B3E] border border-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2E8AEA]/20 flex items-center justify-center text-[#5BA8EF]">
                <Cpu size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">One platform. Every major ESG framework.</div>
                <div className="text-xs text-white/40 mt-0.5">BRSR, GRI, ISSB, TCFD, CSRD, CDP, SASB — generate compliant output instantly from a single data set.</div>
              </div>
            </div>
            <Link href="/platform/"
              className="flex-shrink-0 inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              Explore Platform <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4 block">Our Six Practices</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E]">
                ESG advisory services for every stage of the journey
              </h2>
            </div>
            <p className="text-slate-body/50 text-sm max-w-xs leading-relaxed">
              Each practice combines deep domain expertise with our technology platform for faster delivery and better outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const color = SERVICE_COLORS[s.slug] || '#2E8AEA'
              return (
                <Link key={s.slug} href={`/services/${s.slug}/`}
                  className="group bg-white rounded-xl border border-slate-border/50 p-8 hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300 no-underline flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: color }} />
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: color }}>
                      {SERVICE_ICONS[s.slug]}
                    </div>
                    <span className="font-display font-bold text-4xl text-slate-border/25">0{i + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0D1B3E] mb-2 group-hover:text-[#2E8AEA] transition-colors">{s.shortTitle}</h3>
                  <p className="text-sm text-slate-body/55 leading-relaxed mb-6 flex-1">{s.desc}</p>
                  <div className="space-y-2 mb-6">
                    {s.deliverables.slice(0, 2).map((d) => (
                      <div key={d} className="flex items-start gap-2">
                        <CheckCircle size={12} className="mt-0.5 flex-shrink-0" style={{ color }} />
                        <span className="text-xs text-slate-body/55 leading-tight">{d}</span>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-3 transition-all" style={{ color }}>
                    Explore Service <ArrowRight size={11} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why ESG Astraa */}
      <section className="py-24 bg-slate-bg border-y border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4 block">Why ESG Astraa</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mb-6">
                Where consulting expertise meets ESG technology
              </h2>
              <p className="text-slate-body/65 leading-relaxed mb-8">
                Most ESG advisory relies on spreadsheets, manual processes, and year-end data dumps. ESG Astraa combines domain-specific consulting with a proprietary technology platform that automates GHG measurement, BRSR data collection, audit evidence management, and multi-framework disclosure generation — reducing delivery timelines and improving assurance confidence.
              </p>
              <Link href="/about/" className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] no-underline hover:gap-3 transition-all">
                About Our Approach <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-0 divide-y divide-slate-border/40 border border-slate-border/40 rounded-xl overflow-hidden bg-white">
              {[
                {
                  icon: <Activity size={16} />,
                  title: 'Automated GHG Measurement',
                  desc: 'Our proprietary emissions engine handles Scope 1, 2, and 3 accounting across multi-site operations with international emission factor databases and CBAM-ready outputs — no manual data wrangling.',
                },
                {
                  icon: <ClipboardCheck size={16} />,
                  title: 'Automated BRSR and ESG Compliance',
                  desc: 'Our platform automates BRSR data collection workflows, maps disclosures to GRI, ISSB, TCFD, and CSRD, maintains evidence libraries, and tracks assurance readiness — replacing manual annual sprints.',
                },
                {
                  icon: <Database size={16} />,
                  title: 'Multi-Framework ESG Intelligence',
                  desc: 'Generate compliant output for SEBI BRSR, GRI, ISSB S1 and S2, TCFD, CDP, SASB, and CSRD from one structured data set — with board dashboards, peer benchmarks, and investor packs built in.',
                },
                {
                  icon: <Shield size={16} />,
                  title: 'Sector-Calibrated Advisory',
                  desc: 'Our consulting is calibrated to the specific material topics, regulatory obligations, and stakeholder expectations of eight Indian industry sectors — not generic ESG checklists.',
                },
              ].map((item) => (
                <div key={item.title} className="p-6 hover:bg-slate-bg/50 transition-colors group">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] flex items-center justify-center text-[#2E8AEA] flex-shrink-0 group-hover:bg-[#2E8AEA] group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D1B3E] mb-1.5 text-sm group-hover:text-[#2E8AEA] transition-colors">{item.title}</h4>
                      <p className="text-xs text-slate-body/55 leading-relaxed">{item.desc}</p>
                    </div>
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
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4 block">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E]">How every ESG engagement works</h2>
            <p className="text-slate-body/55 mt-4 leading-relaxed">
              A repeatable four-phase methodology — from baseline to board-ready reporting — adapted to your sector, regulatory timeline, and maturity level.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { phase: '01', title: 'Assess', desc: 'GHG baseline measurement, ESG maturity benchmarking, BRSR gap analysis, and materiality mapping against sector peers.', deliverable: 'Baseline report and peer benchmark' },
              { phase: '02', title: 'Strategise', desc: 'Data-informed ESG roadmap aligned to SEBI BRSR, carbon targets, sector regulations, and stakeholder priorities.', deliverable: 'Board-ready roadmap and KPI framework' },
              { phase: '03', title: 'Implement', desc: 'Technology-enabled data architecture, automated compliance workflows, governance design, and disclosure drafting.', deliverable: 'Operational ESG programme with owners' },
              { phase: '04', title: 'Measure', desc: 'Continuous KPI tracking, assurance-ready evidence management, peer benchmarking, and stakeholder reporting.', deliverable: 'Dashboard, review packs, and audit trail' },
            ].map((p) => (
              <div key={p.phase} className="bg-white border border-slate-border/50 rounded-xl p-7 hover:shadow-xl hover:border-[#2E8AEA]/20 transition-all group flex flex-col">
                <span className="font-display text-4xl font-bold text-[#2E8AEA] mb-6">{p.phase}</span>
                <h3 className="font-display font-bold text-lg text-[#0D1B3E] mb-3">{p.title}</h3>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-5 flex-1">{p.desc}</p>
                <div className="pt-4 border-t border-slate-border/40">
                  <p className="text-xs text-[#2E8AEA] font-semibold leading-relaxed">{p.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Bar */}
      <section className="py-14 bg-slate-bg border-t border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-slate-body/35 flex-shrink-0">
              Frameworks automated
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3 items-center">
              {['SEBI BRSR', 'GRI Standards', 'ISSB S1 & S2', 'TCFD', 'EU CSRD', 'CDP', 'SASB', 'GHG Protocol', 'SBTi', 'PCAF'].map((f) => (
                <span key={f} className="text-sm font-semibold text-slate-body/45">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#5BA8EF] block mb-4">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Not sure which service is right for you?
              </h2>
              <p className="text-white/45 leading-relaxed">
                Book a complimentary ESG readiness assessment. We will map the right advisory pathway — including which platform modules apply — against your regulatory obligations and business priorities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Request ESG Assessment <ArrowRight size={15} />
              </Link>
              <Link href="/platform/" className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold text-white/65 px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 transition-colors no-underline">
                See the Platform <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
