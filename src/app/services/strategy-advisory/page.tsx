import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Target,
  FileCheck,
  Leaf,
  Shield,
  TrendingUp,
  BarChart3,
  Compass,
} from 'lucide-react'

export const metadata = {
  title: 'ESG Strategy & Advisory | BRSR Compliance, Carbon Advisory, ESG Risk | ESG Astraa',
  description:
    'ESG Astraa Strategy and Advisory services covering ESG strategy and roadmap design, BRSR and regulatory compliance, carbon advisory and credits, ESG risk and governance, sustainable finance, and ESG data and intelligence for Indian businesses.',
  keywords: [
    'ESG strategy consulting India',
    'BRSR compliance advisory',
    'carbon advisory India',
    'ESG risk governance',
    'sustainable finance advisory India',
    'ESG data intelligence',
    'materiality assessment India',
    'GHG inventory India',
    'ESG roadmap India',
  ],
}

const SERVICES = [
  {
    num: '01',
    id: 'esg-strategy',
    icon: Target,
    title: 'ESG Strategy & Transformation',
    badge: 'Materiality / Roadmap',
    color: '#2E8AEA',
    accentBg: '#EEF4FF',
    metric: { val: 'GRI 3', sub: 'Material topics standard' },
    desc: 'Build a credible ESG strategy grounded in double materiality, stakeholder expectations, and regulatory timelines. We deliver structured roadmaps with prioritised initiatives, measurable targets, and governance integration across business units.',
    keyAreas: [
      'Double materiality assessment and stakeholder mapping',
      'ESG roadmap with phased targets and owner assignment',
      'Board and leadership ESG integration programme',
      'ESG performance management framework design',
    ],
    frameworks: ['GRI 3', 'ISSB S1', 'BRSR P1'],
  },
  {
    num: '02',
    id: 'brsr-compliance',
    icon: FileCheck,
    title: 'BRSR & ESG Compliance',
    badge: 'SEBI BRSR / GRI / ISSB',
    color: '#0091DA',
    accentBg: '#E0F2FE',
    metric: { val: 'BRSR Core', sub: 'SEBI mandatory disclosure' },
    desc: 'End-to-end support for SEBI BRSR filing, GRI-aligned reporting, and ISSB S1 and S2 readiness. We manage data collection, gap assessments, narrative drafting, and assurance coordination to ensure defensible, on-time disclosure.',
    keyAreas: [
      'BRSR Core KPI data collection and quality review',
      'GRI content index development and narrative drafting',
      'ISSB S1 and S2 climate disclosure readiness assessment',
      'ESG report design, publication, and assurance coordination',
    ],
    frameworks: ['SEBI BRSR', 'GRI Standards', 'ISSB S1 S2'],
  },
  {
    num: '03',
    id: 'carbon-advisory',
    icon: Leaf,
    title: 'Carbon Advisory & Credits',
    badge: 'GHG Protocol / SBTi / CCTS',
    color: '#16A34A',
    accentBg: '#F0FDF4',
    metric: { val: 'SBTi', sub: 'Science-based target alignment' },
    desc: 'Comprehensive carbon management from GHG inventory development to science-based target setting, decarbonisation roadmap design, CBAM readiness, and voluntary carbon credit origination under India\'s Carbon Credit Trading Scheme.',
    keyAreas: [
      'Scope 1, 2 and 3 GHG inventory development and verification',
      'Science-based target setting and net zero roadmap',
      'CBAM assessment for EU-market industrial exporters',
      'Carbon credit origination and CCTS registration advisory',
    ],
    frameworks: ['GHG Protocol', 'SBTi', 'CCTS India'],
  },
  {
    num: '04',
    id: 'esg-risk',
    icon: Shield,
    title: 'ESG Risk & Governance',
    badge: 'TCFD / SEBI LODR',
    color: '#7516EA',
    accentBg: '#F5F3FF',
    metric: { val: 'TCFD', sub: 'Climate risk disclosure framework' },
    desc: 'Integrate climate and ESG risk into enterprise risk management, board governance structures, and supply chain due diligence. We deliver TCFD-aligned scenario analysis, board ESG training, and supplier risk screening programmes.',
    keyAreas: [
      'TCFD-aligned physical and transition risk scenario analysis',
      'ESG risk integration into ERM and audit committee frameworks',
      'Supply chain ESG risk mapping and supplier due diligence',
      'Board ESG governance structure and oversight framework design',
    ],
    frameworks: ['TCFD', 'SEBI LODR', 'GRI 2-12'],
  },
  {
    num: '05',
    id: 'sustainable-finance-strategy',
    icon: TrendingUp,
    title: 'Sustainable Finance Advisory',
    badge: 'Green Bonds / SLL / PCAF',
    color: '#0D9488',
    accentBg: '#F0FDFA',
    metric: { val: 'ICMA', sub: 'Green Bond Principles framework' },
    desc: 'Advisory on accessing sustainable capital through green bond issuance, sustainability-linked loans, blended finance structuring, and PCAF-aligned financed emissions measurement for financial institutions and corporate borrowers.',
    keyAreas: [
      'Green bond and sustainability-linked bond framework design',
      'SLL KPI calibration and lender ESG preparation',
      'PCAF financed emissions inventory for financial institutions',
      'ESG rating improvement strategy for MSCI, Sustainalytics, CDP',
    ],
    frameworks: ['ICMA GBP', 'LMA SLL', 'PCAF'],
  },
  {
    num: '06',
    id: 'esg-data-strategy',
    icon: BarChart3,
    title: 'ESG Data & Intelligence',
    badge: 'KPI Framework / Benchmarks',
    color: '#2E8AEA',
    accentBg: '#EEF4FF',
    metric: { val: 'GRI 2', sub: 'General disclosures and KPI framework' },
    desc: 'Design and operationalise an ESG data infrastructure that powers accurate disclosure, continuous monitoring, and board-level reporting. Our platform connects data sources, automates KPI calculation, and benchmarks performance against sector peers.',
    keyAreas: [
      'ESG KPI framework design and data taxonomy mapping',
      'ESG data collection workflow and quality control design',
      'Sector peer benchmarking and rating gap analysis',
      'Platform integration for automated ESG data aggregation',
    ],
    frameworks: ['GRI 2', 'SASB', 'BRSR P6 P7'],
  },
]

export default function StrategyAdvisoryPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0D1B3E] pt-36 pb-0 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 75% 0%, #2E8AEA22 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #7516EA18 0%, transparent 60%)' }} />

        <div className="max-w-site mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-10">
            <Link href="/services/" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline">Services</Link>
            <span className="text-white/15">/</span>
            <span className="text-[11px] text-white/50">Strategy & Advisory</span>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-end pb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2E8AEA]/15 border border-[#2E8AEA]/25 mb-6">
                <Compass size={12} className="text-[#5BA8EF]" />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#5BA8EF]">Strategy & Advisory</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                ESG strategy,<br />compliance &<br /><span className="text-[#5BA8EF]">transformation</span>
              </h1>
              <p className="text-lg text-white/45 leading-relaxed max-w-xl mb-8">
                Six integrated advisory practices covering ESG strategy design, BRSR and regulatory compliance, carbon management, risk governance, sustainable finance, and data infrastructure for listed companies and industrial businesses across India.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                  Speak to an Advisor <ArrowRight size={14} />
                </Link>
                <Link href="#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors no-underline">
                  All Six Practices
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-2">
              {[
                { val: 'BRSR Core', lbl: 'Mandatory disclosure' },
                { val: 'SBTi', lbl: 'Carbon targets' },
                { val: 'TCFD', lbl: 'Climate risk' },
                { val: 'PCAF', lbl: 'Financed emissions' },
              ].map((s) => (
                <div key={s.lbl} className="rounded-xl border border-white/8 bg-white/4 p-4">
                  <div className="font-display font-bold text-base text-[#5BA8EF] mb-0.5">{s.val}</div>
                  <div className="text-[10px] text-white/30">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2E8AEA]/40 to-transparent" />
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-flex">Six Practice Areas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 max-w-xl">
              Advisory across the full ESG transformation journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.num} id={svc.id}
                  className="group rounded-2xl border border-slate-border/50 bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 p-7 flex flex-col scroll-mt-24">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                        style={{ background: svc.color }}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="font-display font-bold text-[10px] text-slate-body/30 block mb-0.5">{svc.num}</span>
                        <h3 className="font-display font-bold text-[16px] text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors leading-tight">{svc.title}</h3>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold tracking-wide uppercase flex-shrink-0 px-2.5 py-1 rounded-full mt-1"
                      style={{ color: svc.color, backgroundColor: svc.accentBg }}>
                      {svc.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-body/60 leading-relaxed mb-5 flex-1">{svc.desc}</p>

                  <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: svc.accentBg }}>
                    <div className="font-display font-bold text-base mb-0.5" style={{ color: svc.color }}>{svc.metric.val}</div>
                    <div className="text-[10px] text-slate-body/50">{svc.metric.sub}</div>
                  </div>

                  <div className="space-y-2 mb-5">
                    {svc.keyAreas.map((area) => (
                      <div key={area} className="flex items-start gap-2">
                        <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: svc.color }} />
                        <span className="text-xs text-slate-body/60 leading-tight">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-border/30">
                    <div className="flex gap-1.5 flex-wrap">
                      {svc.frameworks.map((f) => (
                        <span key={f} className="text-[9px] font-bold text-slate-body/40 border border-slate-border/40 px-1.5 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                    <Link href="/contact/"
                      className="text-[11px] font-bold no-underline flex items-center gap-1 hover:gap-2 transition-all"
                      style={{ color: svc.color }}>
                      Enquire <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-20 bg-slate-bg border-t border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="section-label mb-5 inline-flex">Why It Matters</span>
              <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mt-3 leading-tight">
                Regulatory pressure is accelerating across every front
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: 'BRSR Core Is Mandatory', desc: 'SEBI requires top-listed companies to disclose and assure BRSR Core KPIs, making data-backed ESG reporting a regulatory obligation rather than a voluntary choice.' },
                { title: 'Carbon Markets Are Opening', desc: 'India\'s Carbon Credit Trading Scheme is live. Businesses with verified emission reductions can generate credits. Those without a GHG baseline are already behind.' },
                { title: 'Investors Are Screening ESG', desc: 'Foreign portfolio investors and lenders now apply ESG screening criteria. Poor MSCI, Sustainalytics, or CDP scores affect access to capital and deal terms.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-slate-border/40 p-6">
                  <div className="w-6 h-1 rounded-full bg-[#2E8AEA] mb-4" />
                  <h3 className="font-bold text-[#0D1B3E] text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-body/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS BAR */}
      <section className="py-12 bg-white border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Frameworks covered</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {['SEBI BRSR', 'GRI Standards', 'ISSB S1 S2', 'TCFD', 'GHG Protocol', 'SBTi', 'CBAM', 'CCTS India', 'ICMA GBP', 'PCAF', 'SASB'].map((f) => (
              <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(circle at 85% 50%, #2E8AEA 0%, transparent 55%)' }} />
        <div className="max-w-site mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#5BA8EF] block mb-5">Get Started</span>
            <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
              Build your ESG programme on a foundation that holds up to scrutiny
            </h2>
            <p className="text-white/45 leading-relaxed">
              Our advisors map your regulatory obligations, investor expectations, and operational risks into a structured programme with clear ownership, timelines, and measurable outputs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link href="/contact/"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              Book a Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/services/"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white/50 hover:text-white no-underline border border-white/10 px-6 py-3 rounded-lg transition-colors">
              All Services <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
