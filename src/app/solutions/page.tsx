import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Droplets,
  Trash2,
  Sun,
  Truck,
  TreePine,
  Building2,
  Wind,
  Recycle,
  Sprout,
  Factory,
  ShoppingBag,
} from 'lucide-react'

export const metadata = {
  title: 'Environmental Solutions for Business | Energy, Water, Waste, Green Infrastructure | ESG Astraa',
  description:
    'ESG Astraa real-world environmental solutions for businesses in India covering energy efficiency, solar installation, water conservation, solid waste management, green fleet transition, sustainable procurement, and ecological restoration.',
  keywords: [
    'environmental solutions for business India',
    'energy efficiency advisory India',
    'solar energy for industry India',
    'water conservation business India',
    'solid waste management industrial',
    'green fleet EV transition India',
    'sustainable procurement India',
    'ecological restoration business',
    'zero waste manufacturing India',
  ],
}

const SOLUTIONS = [
  {
    num: '01',
    id: 'energy-efficiency',
    icon: Zap,
    title: 'Energy Efficiency Programmes',
    color: '#CA8A04',
    accentBg: '#FEF9C3',
    badge: 'BEE / ISO 50001',
    desc: 'On-site energy audits identifying the highest-impact reduction opportunities across lighting, HVAC, compressed air, motors, and process equipment. We deliver a prioritised investment plan with payback analysis and BEE PAT cycle compliance for designated consumers.',
    deliverables: [
      'Detailed energy audit across all utilities and process equipment',
      'Equipment-level metering and loss quantification',
      'Capital expenditure and payback analysis for each intervention',
      'ISO 50001 energy management system implementation',
      'BEE PAT scheme compliance documentation',
    ],
    impact: 'Typical 10 to 30 percent reduction in energy intensity within 24 months',
    frameworks: ['BEE PAT', 'ISO 50001', 'GRI 302'],
  },
  {
    num: '02',
    id: 'renewable-energy',
    icon: Sun,
    title: 'Renewable Energy Installation',
    color: '#F97316',
    accentBg: '#FFF7ED',
    badge: 'Solar / Wind / PPA',
    desc: 'Feasibility assessment, vendor selection, and commissioning support for rooftop solar, ground-mounted installations, wind energy, and third-party power purchase agreements. We also manage RPO compliance strategy and RE100 alignment for industrial and commercial consumers.',
    deliverables: [
      'Rooftop and ground solar feasibility and yield modelling',
      'PPA structuring and developer evaluation',
      'Open access and group captive regulatory compliance',
      'RPO compliance strategy and gap closure',
      'RE100 and CDP Climate target alignment',
    ],
    impact: 'Directly reduces Scope 2 emissions and lowers long-term energy costs',
    frameworks: ['RE100', 'RPO Regulations', 'CDP Climate'],
  },
  {
    num: '03',
    id: 'water-conservation',
    icon: Droplets,
    title: 'Water Conservation and Reuse',
    color: '#0369A1',
    accentBg: '#EFF6FF',
    badge: 'ZLD / Rainwater Harvesting',
    desc: 'End-to-end water management programmes covering basin-level risk assessment, rainwater harvesting system design, treated water reuse, and zero liquid discharge feasibility. We support CDP Water Security disclosure and CPCB effluent standards compliance.',
    deliverables: [
      'Water balance study and site-level consumption mapping',
      'Rainwater harvesting infrastructure design and implementation support',
      'Treated wastewater reuse scheme design for process and cooling',
      'Zero liquid discharge feasibility and technology selection',
      'CDP Water Security and GRI 303 disclosure support',
    ],
    impact: 'Reduces freshwater withdrawal and protects operations in water-stressed basins',
    frameworks: ['CDP Water', 'GRI 303', 'AWS Standard'],
  },
  {
    num: '04',
    id: 'waste-management',
    icon: Trash2,
    title: 'Solid Waste Reduction and Management',
    color: '#7C3AED',
    accentBg: '#F5F3FF',
    badge: 'SWM Rules / EPR / Zero Waste',
    desc: 'Waste audit, source segregation system design, authorised disposal route establishment, and extended producer responsibility compliance for manufacturing, packaging, and FMCG businesses. We build waste reduction programmes that target zero waste to landfill across facilities.',
    deliverables: [
      'Waste audit and material flow characterisation study',
      'Source segregation system and colour coding implementation',
      'Hazardous waste manifest and authorised disposal route setup',
      'EPR compliance strategy, documentation, and registration',
      'Zero waste to landfill programme with monthly tracking',
    ],
    impact: 'Reduces disposal costs and supports BRSR P6 waste disclosure',
    frameworks: ['SWM Rules 2016', 'EPR Rules 2022', 'GRI 306'],
  },
  {
    num: '05',
    id: 'green-fleet',
    icon: Truck,
    title: 'Green Fleet and Logistics Transition',
    color: '#0D9488',
    accentBg: '#F0FDFA',
    badge: 'EV Fleet / Scope 3',
    desc: 'Fleet electrification roadmap, charging infrastructure planning, logistics optimisation, and Scope 3 category 4 and 9 emission reduction strategies. We work with transportation-intensive businesses to reduce fuel consumption, transition to EVs, and measure logistics emissions accurately.',
    deliverables: [
      'Fleet emission baseline and electrification feasibility study',
      'EV model selection and charging infrastructure layout',
      'Logistics route optimisation and load efficiency analysis',
      'Scope 3 category 4 and 9 measurement and reduction planning',
      'FAME subsidy and green financing advisory for EV procurement',
    ],
    impact: 'Reduces Scope 3 transport emissions and fuel expenditure simultaneously',
    frameworks: ['GHG Protocol', 'GRI 305-3', 'BRSR P6'],
  },
  {
    num: '06',
    id: 'sustainable-procurement',
    icon: ShoppingBag,
    title: 'Sustainable Procurement and Supply Chain',
    color: '#92400E',
    accentBg: '#FEF3C7',
    badge: 'ISO 20400 / Scope 3',
    desc: 'Green procurement policy design, supplier environmental pre-qualification, lifecycle cost analysis, and Scope 3 category 1 measurement for purchased goods and services. We help procurement teams embed environmental criteria into sourcing decisions without compromising cost or delivery performance.',
    deliverables: [
      'Green procurement policy and category prioritisation framework',
      'Supplier environmental pre-qualification questionnaire and scoring',
      'Lifecycle cost and total cost of ownership methodology',
      'Scope 3 category 1 supplier emissions data collection programme',
      'BRSR supply chain and EPR policy integration',
    ],
    impact: 'Reduces upstream Scope 3 emissions and strengthens supply chain resilience',
    frameworks: ['ISO 20400', 'GRI 204', 'GHG Protocol Scope 3'],
  },
  {
    num: '07',
    id: 'green-buildings',
    icon: Building2,
    title: 'Green Building and Facility Retrofits',
    color: '#16A34A',
    accentBg: '#F0FDF4',
    badge: 'LEED / GRIHA / ECBC',
    desc: 'Green building certification support, energy code compliance, and facility retrofit advisory for offices, factories, warehouses, and infrastructure assets. We assess existing buildings against LEED, GRIHA, or IGBC criteria and design upgrade programmes with verified energy and water savings.',
    deliverables: [
      'Green building certification gap assessment and action plan',
      'ECBC compliance review and building envelope improvement advisory',
      'LED lighting, insulation, and HVAC efficiency upgrade planning',
      'Water fixture and landscape irrigation optimisation',
      'Post-retrofit measurement and verification programme',
    ],
    impact: 'Lowers operating costs and supports green building asset valuation',
    frameworks: ['LEED', 'GRIHA', 'ECBC 2017'],
  },
  {
    num: '08',
    id: 'ecological-restoration',
    icon: TreePine,
    title: 'Ecological Restoration and Afforestation',
    color: '#15803D',
    accentBg: '#F0FDF4',
    badge: 'CAMPA / Nature Positive',
    desc: 'Compensatory afforestation compliance, voluntary biodiversity restoration project development, and nature-positive strategy design. We identify eligible land, engage forest departments, manage planting programmes, and link outcomes to corporate biodiversity and net zero commitments.',
    deliverables: [
      'Compensatory afforestation compliance under CAMPA guidelines',
      'Afforestation site identification and species selection advisory',
      'Biodiversity co-benefit assessment for restoration projects',
      'Nature-positive commitment design and disclosure support',
      'Carbon sequestration estimation for voluntary credit potential',
    ],
    impact: 'Directly addresses land use obligations and supports nature-positive targets',
    frameworks: ['CAMPA', 'GRI 304-3', 'TNFD'],
  },
]

const IMPACT_STATS = [
  { val: '8', lbl: 'Solution areas', sub: 'Energy to ecology' },
  { val: 'On-site', lbl: 'Implementation', sub: 'Facility-level delivery' },
  { val: 'Scope 1 to 3', lbl: 'Emission coverage', sub: 'Direct and value chain' },
  { val: 'BRSR P6', lbl: 'Disclosure ready', sub: 'Environmental KPIs' },
]

export default function SolutionsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#052E16] pt-36 pb-0 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 80% 0%, #16A34A22 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #0D948830 0%, transparent 60%)' }} />

        <div className="max-w-site mx-auto px-6 relative">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ADE80] block mb-6">Environmental Solutions</span>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end pb-16">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                Real-world solutions to reduce your environmental footprint
              </h1>
              <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-8">
                Eight practical programmes covering energy, water, waste, fleet, procurement, buildings, and ecology. Each is designed for implementation at the facility level, with measurable outcomes tied to BRSR and regulatory reporting.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] transition-colors">
                  Discuss Your Priorities <ArrowRight size={14} />
                </Link>
                <Link href="#solutions" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors no-underline">
                  Browse All 8
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-2">
              {IMPACT_STATS.map((s) => (
                <div key={s.lbl} className="rounded-xl border border-white/8 bg-white/5 p-5">
                  <div className="font-display font-bold text-xl text-[#4ADE80] mb-0.5">{s.val}</div>
                  <div className="text-xs font-semibold text-white/60 mb-0.5">{s.lbl}</div>
                  <div className="text-[10px] text-white/25">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#16A34A]/40 to-transparent" />
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-flex">Eight Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 max-w-xl">
              Practical programmes your operations team can implement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon
              return (
                <div key={sol.num} id={sol.id}
                  className="group rounded-2xl border border-slate-border/50 bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 overflow-hidden scroll-mt-24">
                  <div className="flex">
                    {/* Accent strip */}
                    <div className="w-14 flex-shrink-0 flex flex-col items-center justify-between py-6 px-2"
                      style={{ backgroundColor: sol.color }}>
                      <span className="font-display font-bold text-[10px] text-white/60">{sol.num}</span>
                      <Icon size={18} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-display font-bold text-[16px] text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors leading-tight">{sol.title}</h3>
                        <span className="text-[9px] font-bold tracking-wide uppercase flex-shrink-0 px-2 py-0.5 rounded-full mt-0.5"
                          style={{ color: sol.color, backgroundColor: sol.accentBg }}>
                          {sol.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-body/60 leading-relaxed mb-4">{sol.desc}</p>

                      <div className="space-y-1.5 mb-4">
                        {sol.deliverables.slice(0, 3).map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={11} className="mt-0.5 flex-shrink-0" style={{ color: sol.color }} />
                            <span className="text-[11px] text-slate-body/60 leading-tight">{d}</span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-lg px-3 py-2 mb-4 text-[11px] font-medium leading-tight"
                        style={{ backgroundColor: sol.accentBg, color: sol.color }}>
                        {sol.impact}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-border/30">
                        <div className="flex gap-1.5 flex-wrap">
                          {sol.frameworks.map((f) => (
                            <span key={f} className="text-[9px] font-bold text-slate-body/40 border border-slate-border/40 px-1.5 py-0.5 rounded">{f}</span>
                          ))}
                        </div>
                        <Link href="/contact/"
                          className="text-[11px] font-bold no-underline flex items-center gap-1 hover:gap-2 transition-all"
                          style={{ color: sol.color }}>
                          Enquire <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY THESE SOLUTIONS */}
      <section className="py-20 bg-slate-bg border-t border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <span className="section-label mb-5 inline-flex">How We Deliver</span>
              <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mt-3 leading-tight">
                From site assessment to verified outcome
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Factory,
                  title: 'Facility-Level Implementation',
                  desc: 'Each solution starts with an on-site assessment. We measure current performance, identify gaps, and design interventions specific to your equipment, processes, and regulatory context.',
                },
                {
                  icon: Recycle,
                  title: 'Measurable Environmental Outcomes',
                  desc: 'Every programme includes defined KPIs, baseline measurements, and post-implementation monitoring. Outcomes are documented in formats that satisfy BRSR, GRI, and lender reporting requirements.',
                },
                {
                  icon: Sprout,
                  title: 'Integrated Disclosure Support',
                  desc: 'Environmental data collected through implementation feeds directly into BRSR P6, GRI 300-series, and CDP disclosures. No double data collection or disconnected reporting workflows.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-xl border border-slate-border/40 p-6">
                    <div className="w-9 h-9 rounded-lg bg-[#052E16] flex items-center justify-center text-[#4ADE80] mb-4">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-bold text-[#0D1B3E] text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-body/55 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS BAR */}
      <section className="py-12 bg-white border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Standards and regulations</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {['BEE PAT Scheme', 'ISO 50001', 'RE100', 'ECBC 2017', 'SWM Rules 2016', 'EPR Rules 2022', 'LEED', 'GRIHA', 'CAMPA', 'GHG Protocol', 'CDP Water', 'AWS Standard'].map((f) => (
              <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#052E16] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #16A34A 0%, transparent 60%)' }} />
        <div className="max-w-site mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#4ADE80] block mb-5">Get Started</span>
            <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
              Tell us which environmental priorities matter most to your business
            </h2>
            <p className="text-white/50 leading-relaxed">
              Our team will scope the right combination of solutions against your facility type, regulatory obligations, and sustainability targets. No generic playbooks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] transition-colors">
              Book a Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/services/" className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white/50 hover:text-white no-underline border border-white/10 px-6 py-3 rounded-lg transition-colors">
              All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
