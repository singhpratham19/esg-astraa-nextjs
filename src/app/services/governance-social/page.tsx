import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Users,
  FileText,
  Heart,
  Scale,
  ShieldCheck,
  Award,
  Globe2,
} from 'lucide-react'

export const metadata = {
  title: 'ESG Governance & Social Advisory | Board Governance, DEI, Human Rights, BRSR Assurance | ESG Astraa',
  description:
    'ESG Astraa Governance & Social advisory — board-level ESG governance, DEI strategy, human rights due diligence, ethics and anti-corruption frameworks, ESG policy design, and BRSR Core assurance for Indian listed companies.',
  keywords: [
    'ESG governance advisory India',
    'board ESG governance',
    'DEI strategy India',
    'human rights due diligence UNGP',
    'BRSR Core assurance India',
    'anti-corruption framework ISO 37001',
    'ESG policy framework India',
    'social impact ESG',
    'GRI 400 series reporting',
  ],
}

const SERVICES = [
  {
    num: '01',
    id: 'governance-board',
    icon: Users,
    title: 'Governance & Board Advisory',
    badge: 'Board ESG / SEBI LODR',
    color: '#7516EA',
    accentBg: '#F5F3FF',
    desc: 'Build board-level ESG competency, oversight structures, and accountability frameworks aligned to SEBI LODR, BRSR governance disclosures, and emerging investor expectations on ESG board integration.',
    keyAreas: [
      'Board ESG skills assessment and training programme design',
      'ESG committee terms of reference and charter development',
      'Board-level climate and ESG risk oversight framework',
      'SEBI LODR and BRSR governance disclosure support',
    ],
    frameworks: ['SEBI LODR', 'BRSR Core', 'GRI 2-9 to 2-28'],
    stat: { val: 'BRSR', sub: 'Board accountability disclosure' },
  },
  {
    num: '02',
    id: 'esg-policy-frameworks',
    icon: FileText,
    title: 'ESG Policy Frameworks',
    badge: 'Policy Design & Implementation',
    color: '#0369A1',
    accentBg: '#EFF6FF',
    desc: 'Design, document, and embed ESG policy frameworks across your organisation — covering environmental policy, responsible sourcing, supplier code of conduct, whistleblower mechanisms, and ESG management system integration.',
    keyAreas: [
      'Enterprise ESG policy suite design and documentation',
      'Supplier code of conduct and responsible sourcing policy',
      'Whistleblower and speak-up framework development',
      'ISO 14001 / ISO 45001 policy alignment and gap closure',
    ],
    frameworks: ['ISO 14001', 'ISO 45001', 'GRI 2-23 to 2-26'],
    stat: { val: 'ISO 14001', sub: 'Environmental management system' },
  },
  {
    num: '03',
    id: 'dei-social-impact',
    icon: Heart,
    title: 'DEI & Social Impact',
    badge: 'GRI 405 / BRSR S-Series',
    color: '#DC2626',
    accentBg: '#FEF2F2',
    desc: 'Develop credible diversity, equity, and inclusion strategies — covering gender pay gap analysis, inclusive hiring targets, disability inclusion, social impact measurement, and BRSR social metrics disclosure for listed companies.',
    keyAreas: [
      'Gender pay gap analysis and equity audit',
      'DEI strategy design with measurable targets and KPIs',
      'Social impact assessment and community benefit mapping',
      'BRSR S-series and GRI 405 disclosure preparation',
    ],
    frameworks: ['GRI 405', 'BRSR S-Series', 'SDG 5 & 10'],
    stat: { val: 'GRI 405', sub: 'Diversity & equal opportunity' },
  },
  {
    num: '04',
    id: 'human-rights-diligence',
    icon: Scale,
    title: 'Human Rights Due Diligence',
    badge: 'UNGP / BRSR P5',
    color: '#92400E',
    accentBg: '#FEF3C7',
    desc: 'UNGP-aligned human rights due diligence covering salient risk identification, supply chain labour screening, remediation mechanism design, and BRSR P5 / GRI 409 disclosure — for businesses with complex value chains and export market obligations.',
    keyAreas: [
      'Human rights salient risk identification and mapping',
      'Supply chain labour and forced labour screening',
      'Grievance mechanism and remediation framework design',
      'BRSR P5, GRI 408–411, and UNGP reporting alignment',
    ],
    frameworks: ['UNGP', 'GRI 408–411', 'BRSR P5'],
    stat: { val: 'UNGP', sub: 'UN Guiding Principles on Business & Human Rights' },
  },
  {
    num: '05',
    id: 'ethics-anti-corruption',
    icon: ShieldCheck,
    title: 'Ethics & Anti-Corruption',
    badge: 'ISO 37001 / GRI 205',
    color: '#0D9488',
    accentBg: '#F0FDFA',
    desc: 'Design and implement anti-bribery and anti-corruption management systems aligned to ISO 37001, with ethics training programmes, third-party due diligence procedures, and GRI 205 disclosure for BRSR and ESG rating preparedness.',
    keyAreas: [
      'Anti-bribery management system design (ISO 37001)',
      'Ethics and integrity training programme development',
      'Third-party anti-corruption due diligence procedure',
      'GRI 205 and BRSR anti-corruption disclosure support',
    ],
    frameworks: ['ISO 37001', 'GRI 205', 'OECD Guidelines'],
    stat: { val: 'ISO 37001', sub: 'Anti-bribery management system' },
  },
  {
    num: '06',
    id: 'brsr-assurance',
    icon: Award,
    title: 'BRSR Core Assurance',
    badge: 'SEBI BRSR / GRI Assurance',
    color: '#2E8AEA',
    accentBg: '#EEF4FF',
    desc: 'Independent limited or reasonable assurance for BRSR Core KPIs and ESG disclosures — covering data verification, assertion review, assurance statement preparation, and alignment to SEBI\'s mandatory BRSR Core assurance requirements for top-listed companies.',
    keyAreas: [
      'BRSR Core KPI data verification and evidence review',
      'Limited assurance engagement on ESG disclosures',
      'Assurance statement preparation and quality review',
      'Gap closure and disclosure improvement recommendations',
    ],
    frameworks: ['SEBI BRSR Core', 'ISAE 3000', 'GRI Assurance'],
    stat: { val: 'ISAE 3000', sub: 'Assurance on sustainability information' },
  },
]

export default function GovernanceSocialPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="bg-[#120826] pt-36 pb-0 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 0%, #7516EA25 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #2E8AEA15 0%, transparent 60%)' }} />

        <div className="max-w-site mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link href="/services/" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline">Services</Link>
            <span className="text-white/15">/</span>
            <span className="text-[11px] text-white/50">Governance & Social</span>
          </div>

          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7516EA]/15 border border-[#7516EA]/25 mb-6">
              <Globe2 size={12} className="text-[#A78BFA]" />
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#A78BFA]">Governance & Social Advisory</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
              Board governance,<br />social impact &<br /><span className="text-[#A78BFA]">BRSR assurance</span>
            </h1>
            <p className="text-xl text-white/45 leading-relaxed mb-10 max-w-2xl">
              Six governance and social practice areas — from board ESG competency and human rights due diligence to DEI strategy, anti-corruption systems, and mandatory BRSR Core assurance for India's top-listed companies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #7516EA, #2E8AEA)' }}>
                Speak to an Advisor <ArrowRight size={14} />
              </Link>
              <Link href="#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors no-underline">
                All Six Practices ↓
              </Link>
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="border-t border-white/8 bg-white/3">
          <div className="max-w-site mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-px">
            {[
              { val: 'UNGP', lbl: 'Human rights standard' },
              { val: 'ISO 37001', lbl: 'Anti-bribery system' },
              { val: 'ISAE 3000', lbl: 'Assurance standard' },
              { val: 'BRSR Core', lbl: 'Mandatory assurance' },
            ].map((s) => (
              <div key={s.lbl} className="px-6 py-4">
                <div className="font-display font-bold text-lg text-[#A78BFA]">{s.val}</div>
                <div className="text-[10px] text-white/30 mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES: Alternating sections ─── */}
      <section id="services" className="bg-white">
        {SERVICES.map((svc, i) => {
          const Icon = svc.icon
          const isEven = i % 2 === 0
          return (
            <div key={svc.num} id={svc.id} className={`border-b border-slate-border/40 scroll-mt-20 ${isEven ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
              <div className="max-w-site mx-auto px-6 py-14">
                <div className={`grid lg:grid-cols-[320px_1fr] gap-12 items-start ${!isEven ? 'lg:grid-flow-dense' : ''}`}>

                  {/* Left panel */}
                  <div className={`flex flex-col gap-5 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className="font-display font-bold text-5xl text-slate-border/20 leading-none">{svc.num}</span>
                      <div>
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-2.5"
                          style={{ background: svc.color }}>
                          <Icon size={20} />
                        </div>
                        <span className="inline-flex text-[9px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full"
                          style={{ color: svc.color, backgroundColor: svc.accentBg }}>
                          {svc.badge}
                        </span>
                      </div>
                    </div>

                    {/* Metric card */}
                    <div className="rounded-xl p-5 border border-slate-border/40 bg-slate-bg">
                      <div className="font-display font-bold text-base mb-0.5" style={{ color: svc.color }}>{svc.stat.val}</div>
                      <div className="text-[10px] text-slate-body/45 leading-tight mb-3">{svc.stat.sub}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {svc.frameworks.map((f) => (
                          <span key={f} className="text-[9px] font-bold text-slate-body/40 border border-slate-border/50 px-2 py-0.5 rounded">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] mb-4 leading-tight">{svc.title}</h2>
                    <p className="text-slate-body/60 leading-relaxed mb-7 max-w-xl">{svc.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {svc.keyAreas.map((area) => (
                        <div key={area} className="flex items-start gap-2.5 p-3.5 rounded-lg border border-slate-border/40 hover:border-opacity-60 transition-colors"
                          style={{ '--hover-color': svc.color } as React.CSSProperties}>
                          <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: svc.color }} />
                          <span className="text-xs text-slate-body/65 leading-tight">{area}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link href="/contact/"
                        className="inline-flex items-center gap-2 text-sm font-bold no-underline hover:gap-3 transition-all"
                        style={{ color: svc.color }}>
                        Enquire about this practice <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ─── CONTEXT SECTION ─── */}
      <section className="py-20 bg-slate-bg border-t border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="section-label mb-5 inline-flex">Why It Matters Now</span>
              <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mt-3 leading-tight">
                Governance and social obligations are becoming mandatory
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'BRSR Core Assurance',
                  desc: 'SEBI mandates independent assurance of BRSR Core KPIs for top-1000 listed companies — requiring verifiable data trails, disclosed assumptions, and third-party sign-off.',
                },
                {
                  title: 'UNGP Disclosure Pressure',
                  desc: 'Global investors and lenders increasingly require UNGP-aligned human rights due diligence — particularly for businesses with extended supply chains across high-risk geographies.',
                },
                {
                  title: 'Board ESG Accountability',
                  desc: 'SEBI LODR amendments require board-level oversight of ESG strategy and risk — making governance structures, committee charters, and board competency a regulatory expectation.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-slate-border/40 p-6">
                  <div className="w-6 h-1 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #7516EA, #2E8AEA)' }} />
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
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Frameworks & standards</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {['SEBI BRSR Core', 'ISAE 3000', 'UNGP', 'GRI 205 Anti-Corruption', 'GRI 405 DEI', 'GRI 408–411', 'ISO 37001', 'ISO 14001', 'SEBI LODR', 'SDG 5 & 10 & 16'].map((f) => (
              <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[#120826] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #7516EA 0%, transparent 55%)' }} />
        <div className="max-w-site mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#A78BFA] block mb-5">Get Started</span>
            <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
              Build the governance and social foundations your business needs
            </h2>
            <p className="text-white/45 leading-relaxed">
              From board-level ESG oversight and human rights due diligence to BRSR Core assurance — our advisors design governance and social programmes that hold up to investor, regulator, and civil society scrutiny.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link href="/contact/"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #7516EA, #2E8AEA)' }}>
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
