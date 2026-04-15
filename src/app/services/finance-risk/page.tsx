import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Receipt,
  Landmark,
  Link2,
  Search,
  ShieldAlert,
  DollarSign,
  Building2,
} from 'lucide-react'

export const metadata = {
  title: 'ESG Finance & Risk Advisory | Green Bonds, ESG Due Diligence, PCAF | ESG Astraa',
  description:
    'ESG Astraa Finance & Risk advisory — ESG financial analysis, green bonds and sustainability-linked loans, ESG due diligence for M&A, ESG tax advisory, cyber risk, and PCAF-aligned financed emissions for Indian businesses and financial institutions.',
  keywords: [
    'ESG financial analysis India',
    'green bonds advisory India',
    'sustainability linked loans',
    'ESG due diligence M&A',
    'PCAF financed emissions',
    'ESG tax advisory India',
    'RBI climate risk disclosure',
    'ESG linked financing',
    'cyber risk ESG India',
  ],
}

const SERVICES = [
  {
    num: '01',
    icon: TrendingUp,
    title: 'ESG Financial Analysis',
    badge: 'PCAF / GRI 201',
    color: '#0D9488',
    accentBg: '#F0FDFA',
    metric: { val: 'PCAF', sub: 'Financed emissions standard' },
    desc: 'Quantify the financial materiality of ESG risk and opportunity across your portfolio or business — covering stranded asset exposure, carbon price sensitivity, and ESG cost-benefit analysis to support investor reporting and capital allocation decisions.',
    keyAreas: [
      'ESG cost-benefit and ROI modelling for capital projects',
      'Financed emissions calculation under PCAF standard',
      'Stranded asset and carbon price sensitivity analysis',
      'ESG factor integration into financial planning cycles',
    ],
    frameworks: ['PCAF', 'GRI 201', 'TCFD'],
  },
  {
    num: '02',
    icon: Receipt,
    title: 'ESG Tax Advisory',
    badge: 'Green Tax / Carbon Levy',
    color: '#0369A1',
    accentBg: '#EFF6FF',
    metric: { val: 'CBAM', sub: 'Carbon Border Adjustment Mechanism' },
    desc: 'Navigate India\'s evolving green tax landscape and international carbon border mechanisms — covering CBAM exposure for exporters, domestic carbon levy planning, green tax incentive identification, and ESG-linked transfer pricing considerations.',
    keyAreas: [
      'CBAM exposure assessment for EU-bound exporters',
      'Domestic carbon tax and cess planning and modelling',
      'Green tax incentive identification and claim support',
      'ESG transfer pricing and sustainability-linked tax structuring',
    ],
    frameworks: ['CBAM', 'GRI 207', 'CCTS Framework'],
  },
  {
    num: '03',
    icon: Landmark,
    title: 'Green Finance & Bonds',
    badge: 'GBP / SEBI Green Bonds',
    color: '#16A34A',
    accentBg: '#F0FDF4',
    metric: { val: 'ICMA GBP', sub: 'Green Bond Principles aligned' },
    desc: 'End-to-end advisory for green bond issuance, sustainability-linked bond structuring, and social bond frameworks — covering framework development, second-party opinion coordination, use-of-proceeds reporting, and SEBI Green Debt Securities compliance.',
    keyAreas: [
      'Green bond and SLB framework design and documentation',
      'Second-party opinion (SPO) coordination and preparation',
      'SEBI Green Debt Securities compliance and filing support',
      'Post-issuance impact reporting and allocation verification',
    ],
    frameworks: ['ICMA GBP', 'SEBI GDS', 'GRI 201-2'],
  },
  {
    num: '04',
    icon: Link2,
    title: 'ESG-Linked Financing',
    badge: 'SLL / RBI Climate Risk',
    color: '#7C3AED',
    accentBg: '#F5F3FF',
    metric: { val: 'SLL', sub: 'Sustainability-linked loan structuring' },
    desc: 'Structure sustainability-linked loan facilities with credible KPI and SPT frameworks aligned to RBI\'s climate risk guidance, LMA SLL Principles, and lender ESG due diligence requirements — enabling access to preferential financing terms.',
    keyAreas: [
      'SLL KPI and SPT framework design and calibration',
      'Lender ESG questionnaire and due diligence preparation',
      'RBI climate risk and green finance regulatory alignment',
      'Ongoing KPI measurement, verification, and reporting support',
    ],
    frameworks: ['LMA SLL', 'RBI Climate', 'BRSR Core'],
  },
  {
    num: '05',
    icon: Search,
    title: 'ESG Due Diligence',
    badge: 'M&A / Investment Screening',
    color: '#CA8A04',
    accentBg: '#FEF9C3',
    metric: { val: 'ESG DD', sub: 'Pre-transaction risk screening' },
    desc: 'Pre-transaction ESG due diligence for M&A, private equity, and infrastructure investments — covering environmental liability screening, social risk mapping, governance red flags, and ESG integration into deal valuation and post-merger integration planning.',
    keyAreas: [
      'Environmental liability and contamination risk screening',
      'Social and labour compliance red flag assessment',
      'Governance structure and board integrity review',
      'ESG integration into valuation and post-merger planning',
    ],
    frameworks: ['GRI 100-series', 'UNPRI DDQ', 'IFC PS'],
  },
  {
    num: '06',
    icon: ShieldAlert,
    title: 'Cyber Risk & ESG Privacy',
    badge: 'ISO 27001 / DPDP Act',
    color: '#DC2626',
    accentBg: '#FEF2F2',
    metric: { val: 'DPDP', sub: 'Digital Personal Data Protection Act' },
    desc: 'ESG data governance, cybersecurity risk integration into sustainability disclosures, and DPDP Act compliance advisory — covering ESG data security architecture, breach risk assessment, and alignment to emerging SEC and SEBI cyber risk reporting requirements.',
    keyAreas: [
      'ESG data security and governance framework design',
      'DPDP Act compliance gap assessment and remediation',
      'Cyber risk integration into TCFD and BRSR disclosures',
      'Vendor and third-party data security ESG risk review',
    ],
    frameworks: ['ISO 27001', 'DPDP Act', 'SEBI CSCRF'],
  },
]

export default function FinanceRiskPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-[#0A1628] pt-36 pb-0 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 80% 0%, #0D948830 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #7516EA20 0%, transparent 60%)' }} />

        <div className="max-w-site mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link href="/services/" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline">Services</Link>
            <span className="text-white/15">/</span>
            <span className="text-[11px] text-white/50">Finance & Risk</span>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-end pb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/25 mb-6">
                <DollarSign size={12} className="text-[#2DD4BF]" />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2DD4BF]">Finance & Risk Advisory</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                ESG-integrated<br />finance, risk &<br /><span className="text-[#2DD4BF]">capital advisory</span>
              </h1>
              <p className="text-lg text-white/45 leading-relaxed max-w-xl mb-8">
                Six specialist practices covering ESG financial analysis, green bond issuance, sustainability-linked lending, ESG due diligence for M&A, carbon tax planning, and digital risk governance — all CA-firm backed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] transition-colors">
                  Speak to an Advisor <ArrowRight size={14} />
                </Link>
                <Link href="#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors no-underline">
                  All Six Practices ↓
                </Link>
              </div>
            </div>

            {/* Trust panel */}
            <div className="flex flex-col gap-3 mb-2">
              <div className="rounded-xl border border-white/8 bg-white/4 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 size={14} className="text-[#2DD4BF]" />
                  <span className="text-[10px] font-bold tracking-wide uppercase text-[#2DD4BF]">CA Firm Backed</span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed">All financial advisory, tax structuring, and bond framework work is supported by our chartered accountancy firm — ensuring technical rigour and regulatory defensibility.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'PCAF', lbl: 'Financed emissions' },
                  { val: 'CBAM', lbl: 'Carbon border' },
                  { val: 'ICMA', lbl: 'Green bond' },
                  { val: 'RBI', lbl: 'Climate risk' },
                ].map((s) => (
                  <div key={s.lbl} className="rounded-xl border border-white/8 bg-white/4 p-4">
                    <div className="font-display font-bold text-base text-[#2DD4BF] mb-0.5">{s.val}</div>
                    <div className="text-[10px] text-white/30">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0D9488]/40 to-transparent" />
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-flex">Six Practice Areas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 max-w-xl">
              Finance and risk solutions across every ESG dimension
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.num}
                  className="group rounded-2xl border border-slate-border/50 bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 p-7 flex flex-col">
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

      {/* ─── WHY FINANCE & RISK NOW ─── */}
      <section className="py-20 bg-slate-bg border-t border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="section-label mb-5 inline-flex">Why It Matters</span>
              <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mt-3 leading-tight">
                ESG risk is now financial risk
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'CBAM is live',
                  desc: 'Indian exporters of steel, cement, aluminium, and chemicals to the EU face mandatory carbon border reporting from 2024 and financial liability from 2026.',
                },
                {
                  title: 'RBI climate guidance',
                  desc: 'The Reserve Bank of India has issued climate risk disclosure expectations for regulated entities — making physical and transition risk integration a board-level imperative.',
                },
                {
                  title: 'SLL market growth',
                  desc: 'Sustainability-linked loans now offer preferential pricing for borrowers who commit to credible ESG KPIs — creating a direct link between ESG performance and cost of capital.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-slate-border/40 p-6">
                  <div className="w-6 h-1 rounded-full bg-[#0D9488] mb-4" />
                  <h3 className="font-bold text-[#0D1B3E] text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-body/55 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FRAMEWORKS BAR ─── */}
      <section className="py-12 bg-white border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Frameworks & regulations</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {['PCAF', 'ICMA Green Bond Principles', 'LMA SLL Principles', 'CBAM', 'RBI Climate Risk', 'SEBI GDS', 'GRI 201–207', 'TCFD', 'IFC Performance Standards', 'ISO 27001', 'DPDP Act 2023'].map((f) => (
              <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(circle at 85% 50%, #0D9488 0%, transparent 55%)' }} />
        <div className="max-w-site mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2DD4BF] block mb-5">Get Started</span>
            <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
              Integrate ESG into your financial strategy and risk framework
            </h2>
            <p className="text-white/45 leading-relaxed">
              Our finance and risk advisors — backed by a chartered accountancy firm — map your ESG exposure to capital, tax, and regulatory risk and help you act on it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link href="/contact/"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] transition-colors">
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
