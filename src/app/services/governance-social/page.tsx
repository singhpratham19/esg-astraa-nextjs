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
    'ESG Astraa Governance and Social advisory covering board-level ESG governance, DEI strategy, human rights due diligence under UNGP, ethics and anti-corruption frameworks, ESG policy design, and BRSR Core assurance for Indian listed companies.',
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
    metric: { val: 'BRSR Core', sub: 'Board accountability disclosure' },
    desc: 'Build board-level ESG competency, oversight structures, and accountability frameworks aligned to SEBI LODR requirements and investor expectations. We design committee charters, board training programmes, and ESG risk escalation processes that give boards genuine oversight rather than ceremonial sign-off.',
    keyAreas: [
      'Board ESG skills gap assessment and training programme design',
      'ESG committee terms of reference and charter development',
      'Board-level climate and ESG risk oversight framework',
      'SEBI LODR and BRSR governance disclosure preparation',
    ],
    frameworks: ['SEBI LODR', 'BRSR Core', 'GRI 2-9 to 2-28'],
  },
  {
    num: '02',
    id: 'esg-policy-frameworks',
    icon: FileText,
    title: 'ESG Policy Frameworks',
    badge: 'Policy Design and Implementation',
    color: '#0369A1',
    accentBg: '#EFF6FF',
    metric: { val: 'ISO 14001', sub: 'Environmental management system' },
    desc: 'Design, document, and embed ESG policy frameworks across business functions including environmental management, responsible sourcing, supplier codes of conduct, and whistleblower mechanisms. We align policies to ISO management system standards and ensure they withstand third-party review.',
    keyAreas: [
      'Enterprise ESG policy suite design and documentation',
      'Supplier code of conduct and responsible sourcing policy',
      'Whistleblower and speak-up framework development',
      'ISO 14001 and ISO 45001 policy alignment and gap closure',
    ],
    frameworks: ['ISO 14001', 'ISO 45001', 'GRI 2-23 to 2-26'],
  },
  {
    num: '03',
    id: 'dei-social-impact',
    icon: Heart,
    title: 'DEI & Social Impact',
    badge: 'GRI 405 / BRSR S-Series',
    color: '#DC2626',
    accentBg: '#FEF2F2',
    metric: { val: 'GRI 405', sub: 'Diversity and equal opportunity' },
    desc: 'Develop measurable diversity, equity, and inclusion programmes covering gender pay analysis, disability inclusion, community social impact, and BRSR social metrics. We translate DEI intentions into trackable KPIs and auditable disclosures that satisfy investor and rating agency scrutiny.',
    keyAreas: [
      'Gender pay gap analysis and equitable compensation review',
      'DEI strategy design with measurable targets and KPIs',
      'Social impact assessment and community benefit mapping',
      'BRSR S-series and GRI 405 disclosure preparation',
    ],
    frameworks: ['GRI 405', 'BRSR S-Series', 'SDG 5 and 10'],
  },
  {
    num: '04',
    id: 'human-rights-diligence',
    icon: Scale,
    title: 'Human Rights Due Diligence',
    badge: 'UNGP / BRSR P5',
    color: '#92400E',
    accentBg: '#FEF3C7',
    metric: { val: 'UNGP', sub: 'UN Guiding Principles on Business and Human Rights' },
    desc: 'Conduct structured human rights due diligence aligned to the UN Guiding Principles, covering salient risk identification, supply chain labour screening, grievance mechanism design, and BRSR P5 disclosure. Essential for businesses with complex supply chains or operations in high-risk geographies.',
    keyAreas: [
      'Human rights salient risk identification and mapping',
      'Supply chain labour and forced labour screening',
      'Grievance mechanism and remediation framework design',
      'BRSR P5, GRI 408 to 411, and UNGP reporting alignment',
    ],
    frameworks: ['UNGP', 'GRI 408 to 411', 'BRSR P5'],
  },
  {
    num: '05',
    id: 'ethics-anti-corruption',
    icon: ShieldCheck,
    title: 'Ethics & Anti-Corruption',
    badge: 'ISO 37001 / GRI 205',
    color: '#0D9488',
    accentBg: '#F0FDFA',
    metric: { val: 'ISO 37001', sub: 'Anti-bribery management system' },
    desc: 'Design and implement anti-bribery and anti-corruption management systems certified to ISO 37001, supported by ethics training, third-party due diligence procedures, and GRI 205 disclosure support. A critical foundation for businesses expanding into regulated markets or undergoing ESG ratings assessments.',
    keyAreas: [
      'Anti-bribery management system design to ISO 37001',
      'Ethics and integrity training programme development',
      'Third-party anti-corruption due diligence procedure design',
      'GRI 205 and BRSR anti-corruption disclosure support',
    ],
    frameworks: ['ISO 37001', 'GRI 205', 'OECD Guidelines'],
  },
  {
    num: '06',
    id: 'brsr-assurance',
    icon: Award,
    title: 'BRSR Core Assurance',
    badge: 'SEBI BRSR / ISAE 3000',
    color: '#2E8AEA',
    accentBg: '#EEF4FF',
    metric: { val: 'ISAE 3000', sub: 'Assurance on sustainability information' },
    desc: 'Independent limited assurance for BRSR Core KPIs as required by SEBI for top-1000 listed companies. We manage the full assurance process including data trail review, assertion testing, assurance statement preparation, and post-engagement improvement recommendations.',
    keyAreas: [
      'BRSR Core KPI data verification and evidence trail review',
      'Limited assurance engagement on ESG disclosures',
      'Assurance statement preparation and sign-off coordination',
      'Gap closure and disclosure quality improvement recommendations',
    ],
    frameworks: ['SEBI BRSR Core', 'ISAE 3000', 'GRI Assurance'],
  },
]

export default function GovernanceSocialPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#120826] pt-36 pb-0 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 0%, #7516EA25 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #2E8AEA15 0%, transparent 60%)' }} />

        <div className="max-w-site mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-10">
            <Link href="/services/" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline">Services</Link>
            <span className="text-white/15">/</span>
            <span className="text-[11px] text-white/50">Governance & Social</span>
          </div>

          <div className="max-w-3xl pb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7516EA]/15 border border-[#7516EA]/25 mb-6">
              <Globe2 size={12} className="text-[#A78BFA]" />
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#A78BFA]">Governance & Social Advisory</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
              Board governance,<br />social impact &<br /><span className="text-[#A78BFA]">BRSR assurance</span>
            </h1>
            <p className="text-lg text-white/45 leading-relaxed max-w-xl mb-8">
              Six governance and social practice areas covering board ESG oversight, human rights due diligence, DEI strategy, ethics and anti-corruption systems, and mandatory BRSR Core assurance for India's top-listed companies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #7516EA, #2E8AEA)' }}>
                Speak to an Advisor <ArrowRight size={14} />
              </Link>
              <Link href="#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors no-underline">
                All Six Practices
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7516EA]/40 to-transparent" />
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-flex">Six Practice Areas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 max-w-xl">
              Governance and social foundations your business can stand behind
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

      {/* BRSR ASSURANCE PROCESS */}
      <section className="py-20 bg-[#120826] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 85% 50%, #7516EA 0%, transparent 60%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#A78BFA] block mb-4">BRSR Core Assurance</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
              How we deliver SEBI-compliant BRSR Core assurance
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {[
              { num: '01', step: 'Scoping', desc: 'We identify which BRSR Core KPIs require assurance, review prior-year disclosures, and agree the assurance boundary and materiality threshold with your finance and sustainability teams.' },
              { num: '02', step: 'Evidence Review', desc: 'We collect and test primary data supporting each KPI. Energy meter readings, water utility bills, waste disposal records, and HR datasets are traced to source.' },
              { num: '03', step: 'Assertion Testing', desc: 'Each KPI calculation is independently recalculated and compared against disclosed figures. Discrepancies are raised with management and resolved before the assurance statement is issued.' },
              { num: '04', step: 'Statement Issue', desc: 'A limited assurance statement is issued under ISAE 3000, confirming no material misstatement. Post-engagement, we provide a management letter with data quality improvement recommendations.' },
            ].map((p) => (
              <div key={p.num} className="bg-white/4 p-8">
                <span className="font-display font-bold text-4xl text-white/10 block mb-4">{p.num}</span>
                <h3 className="font-display font-bold text-lg text-white mb-3">{p.step}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR SCRUTINY */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="section-label mb-5 inline-flex">Investor Expectations</span>
              <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mt-3 leading-tight">
                What ESG rating agencies examine in governance and social
              </h2>
              <p className="text-sm text-slate-body/60 leading-relaxed mt-4">
                MSCI, Sustainalytics, and CDP assess governance and social performance through defined criteria. Companies that understand these criteria before the assessment cycle avoid preventable score gaps.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { agency: 'MSCI ESG', area: 'Board Governance', criteria: 'Independent director ratios, board ESG oversight structures, executive pay linkage to ESG KPIs, and whistleblower mechanism quality.' },
                { agency: 'Sustainalytics', area: 'Human Rights', criteria: 'UNGP policy commitment, salient risk identification process, grievance mechanism coverage across supply chain tiers, and remediation track record.' },
                { agency: 'CDP', area: 'Social Indicators', criteria: 'Gender diversity at board and senior leadership level, workforce health and safety metrics, community investment, and living wage commitments.' },
                { agency: 'SEBI BRSR', area: 'Ethics and Anti-Corruption', criteria: 'GRI 205-aligned anti-corruption policy coverage, percentage of employees trained, confirmed incidents, and ISO 37001 certification status.' },
              ].map((item) => (
                <div key={item.area} className="p-5 rounded-xl border border-slate-border/40 hover:border-[#7516EA]/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[9px] font-bold text-[#7516EA] tracking-wide uppercase bg-[#F5F3FF] px-2 py-0.5 rounded">{item.agency}</span>
                    <span className="text-xs font-bold text-[#0D1B3E]">{item.area}</span>
                  </div>
                  <p className="text-xs text-slate-body/55 leading-relaxed">{item.criteria}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
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
                { title: 'BRSR Core Assurance', desc: 'SEBI mandates independent assurance of BRSR Core KPIs for top-1000 listed companies, requiring verifiable data trails, disclosed assumptions, and third-party sign-off.' },
                { title: 'UNGP Disclosure Pressure', desc: 'Global investors and lenders increasingly require UNGP-aligned human rights due diligence, particularly for businesses with extended supply chains across high-risk geographies.' },
                { title: 'Board ESG Accountability', desc: 'SEBI LODR amendments require board-level oversight of ESG strategy and risk, making governance structures, committee charters, and board competency a regulatory expectation.' },
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

      {/* FRAMEWORKS BAR */}
      <section className="py-12 bg-white border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Frameworks and standards</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {['SEBI BRSR Core', 'ISAE 3000', 'UNGP', 'GRI 205 Anti-Corruption', 'GRI 405 DEI', 'GRI 408 to 411', 'ISO 37001', 'ISO 14001', 'SEBI LODR', 'SDG 5 10 16'].map((f) => (
              <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#120826] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #7516EA 0%, transparent 55%)' }} />
        <div className="max-w-site mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#A78BFA] block mb-5">Get Started</span>
            <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
              Build governance and social programmes that hold up to scrutiny
            </h2>
            <p className="text-white/45 leading-relaxed">
              From board-level ESG oversight and human rights due diligence to BRSR Core assurance, our advisors design governance and social programmes that satisfy investor, regulator, and civil society scrutiny.
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
