import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Wind, Trash2, Droplets, Volume2, FileCheck, BarChart2, ShoppingBag } from 'lucide-react'

export const metadata = {
  title: 'By-Process Environmental Solutions | Energy Audit, ETP, Air Quality | ESG Astraa',
  description:
    'ESG Astraa by-process environmental solutions covering energy audits, air quality monitoring, solid waste, ETP/STP setup, noise control, environmental clearances, LCA, and green procurement.',
}

const SOLUTIONS = [
  {
    icon: Zap,
    title: 'Energy Audit & Management',
    badge: 'Identify Savings & Efficiency Gaps',
    color: '#CA8A04',
    desc: 'BEE-aligned energy audits covering detailed measurement of energy flows, loss identification, and structured energy management plans for manufacturing, commercial, and infrastructure facilities.',
    keyAreas: ['Detailed energy audit and equipment-level metering', 'Energy intensity benchmarking and loss mapping', 'ISO 50001 energy management system implementation', 'PAT scheme compliance and cycle planning'],
    frameworks: ['BEE PAT', 'ISO 50001', 'GRI 302'],
  },
  {
    icon: Wind,
    title: 'Air Quality Monitoring',
    badge: 'Ambient & Stack Emission Analysis',
    color: '#0369A1',
    desc: 'Comprehensive ambient and stack emission monitoring programmes for industrial facilities, covering regulatory compliance, continuous emission monitoring system (CEMS) review, and CPCB/SPCB reporting.',
    keyAreas: ['Stack emission sampling and analysis', 'Ambient air quality monitoring network design', 'CEMS performance evaluation and reporting', 'CPCB/SPCB compliance status review and gap closure'],
    frameworks: ['CPCB Standards', 'NAAQMS', 'GRI 305-7'],
  },
  {
    icon: Trash2,
    title: 'Solid Waste Processing',
    badge: 'Segregation, Disposal & Compliance',
    color: '#7C3AED',
    desc: 'Solid waste management advisory covering waste characterisation, segregation system design, authorised disposal route identification, and compliance with solid waste management and hazardous waste rules.',
    keyAreas: ['Waste audit and characterisation study', 'Source segregation and colour coding system design', 'Hazardous waste manifest and disposal route advisory', 'SWM Rules and HW Rules compliance documentation'],
    frameworks: ['SWM Rules 2016', 'HW Rules 2016', 'GRI 306'],
  },
  {
    icon: Droplets,
    title: 'ETP / STP Plant Setup',
    badge: 'Design, Commissioning & Compliance',
    color: '#0D9488',
    desc: 'End-to-end advisory for effluent treatment plant (ETP) and sewage treatment plant (STP) design, technology selection, commissioning support, and ongoing regulatory compliance management.',
    keyAreas: ['Influent characterisation and treatment train design', 'Technology selection and vendor evaluation', 'Commissioning support and performance testing', 'CTE/CTO compliance documentation and renewal'],
    frameworks: ['CPCB Standards', 'SPCB CTO', 'ISO 14001'],
  },
  {
    icon: Volume2,
    title: 'Noise & Vibration Control',
    badge: 'Assessment & Mitigation Plans',
    color: '#DC2626',
    desc: 'Noise and vibration impact assessment for industrial facilities, construction projects, and infrastructure operations, with mitigation plan development and compliance with prescribed noise standards.',
    keyAreas: ['Baseline noise and vibration measurement survey', 'Impact prediction and source attribution analysis', 'Engineering control and barrier specification advisory', 'Night-time and sensitive receptor compliance review'],
    frameworks: ['EPA Noise Rules', 'CPCB Guidelines', 'GRI 304'],
  },
  {
    icon: FileCheck,
    title: 'Environmental Clearances',
    badge: 'EC, CTE, CTO Application Support',
    color: '#2E8AEA',
    desc: 'End-to-end support for environmental impact assessment (EIA), environmental clearance (EC), consent to establish (CTE), and consent to operate (CTO) applications for industrial and infrastructure projects.',
    keyAreas: ['EIA scoping and terms of reference preparation', 'Public hearing preparation and documentation support', 'EC/CTE/CTO application drafting and filing', 'Post-clearance compliance monitoring and reporting'],
    frameworks: ['EIA Notification 2006', 'EPA 1986', 'CPCB Guidelines'],
  },
  {
    icon: BarChart2,
    title: 'Life Cycle Assessment',
    badge: 'Product & Process LCA Analysis',
    color: '#16A34A',
    desc: 'ISO 14040/14044-aligned life cycle assessment for products, processes, and packaging, covering cradle-to-gate, cradle-to-grave, and hotspot analysis for environmental footprint reduction.',
    keyAreas: ['System boundary definition and goal scoping', 'Life cycle inventory data collection and modelling', 'Impact category analysis and hotspot identification', 'Eco-design and carbon footprint reduction recommendations'],
    frameworks: ['ISO 14040', 'ISO 14044', 'GHG Protocol'],
  },
  {
    icon: ShoppingBag,
    title: 'Green Procurement Policy',
    badge: 'Responsible Sourcing Standards',
    color: '#92400E',
    desc: 'Advisory on green procurement policy design, supplier environmental pre-qualification criteria, lifecycle-cost-based procurement frameworks, and alignment to BRSR supply chain disclosure requirements.',
    keyAreas: ['Green procurement criteria and category prioritisation', 'Supplier environmental pre-qualification questionnaire', 'Lifecycle costing and total cost of ownership methodology', 'BRSR supply chain and EPR policy integration'],
    frameworks: ['GRI 204', 'BRSR Core', 'ISO 20400'],
  },
]

export default function ByProcessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 75% 40%, #2E8AEA 0%, transparent 60%), radial-gradient(circle at 15% 80%, #7516EA 0%, transparent 50%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/solutions/" className="text-[11px] font-medium text-white/40 hover:text-white/70 transition-colors no-underline">Solutions</Link>
            <span className="text-white/20">/</span>
            <span className="text-[11px] font-medium text-white/70">By Process</span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#5BA8EF] block mb-5">By-Process Solutions</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.06] mb-6 tracking-tight max-w-3xl">
            Operational environmental advisory by process area
          </h1>
          <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
            Eight process-level solution areas from energy audits and air quality to ETP setup, environmental clearances, LCA, and green procurement — designed for industrial and commercial operations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              Discuss Your Requirements <ArrowRight size={15} />
            </Link>
            <Link href="/services/" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors no-underline">
              View Advisory Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '8', lbl: 'Process solution areas' },
              { val: 'ISO 50001', lbl: 'Energy standard' },
              { val: 'BEE / PAT', lbl: 'Energy compliance' },
              { val: 'EC / CTO', lbl: 'Clearance support' },
            ].map((m) => (
              <div key={m.lbl}>
                <div className="font-display text-2xl font-bold text-[#5BA8EF] mb-1">{m.val}</div>
                <div className="text-xs text-white/40">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-flex">By-Process Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3">
              Eight operational environmental practice areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon
              return (
                <div key={sol.title} className="bg-white rounded-xl border border-slate-border/50 hover:shadow-xl hover:border-[#2E8AEA]/20 transition-all group p-6 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0" style={{ background: sol.color }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-slate-body/40 block mb-0.5">{sol.badge}</span>
                      <h3 className="font-display font-bold text-[15px] text-[#0D1B3E] leading-tight group-hover:text-[#2E8AEA] transition-colors">{sol.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-body/60 leading-relaxed mb-5 flex-1">{sol.desc}</p>

                  <div className="space-y-2 mb-5">
                    {sol.keyAreas.slice(0, 3).map((area) => (
                      <div key={area} className="flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-[#2E8AEA] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-body/60 leading-tight">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-border/30 flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {sol.frameworks.map((f) => (
                        <span key={f} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-bg text-slate-body/45">{f}</span>
                      ))}
                    </div>
                    <Link href="/contact/" className="text-xs font-bold text-[#2E8AEA] flex items-center gap-1 no-underline hover:gap-2 transition-all">
                      Enquire <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              )
            })}

            {/* CTA Card */}
            <div className="rounded-xl p-6 flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #0D1B3E, #1a2847)' }}>
              <div>
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#5BA8EF] block mb-4">Custom Scope</span>
                <h3 className="font-display text-xl font-bold text-white leading-tight mb-3">
                  Need a combination of process solutions?
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We design multi-process engagement programmes covering your priority compliance gaps and environmental management needs.
                </p>
              </div>
              <Link href="/contact/" className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg self-start"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Banner */}
      <section className="py-14 bg-slate-bg border-t border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-slate-body/35 flex-shrink-0">
              Standards & regulations covered
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3 items-center">
              {['BEE PAT Scheme', 'ISO 50001', 'ISO 14040 LCA', 'ISO 20400', 'CPCB Standards', 'EIA Notification 2006', 'SWM Rules 2016', 'HW Rules 2016', 'EPA 1986', 'GRI 302 & 305'].map((f) => (
                <span key={f} className="text-sm font-semibold text-slate-body/45">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-[#0D1B3E] mb-8">Explore other solution areas</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { href: '/solutions/environmental/', title: 'Environmental', desc: 'GHG reduction, wastewater management, renewable energy, and circular economy frameworks.', },
              { href: '/solutions/biodiversity-nature/', title: 'Biodiversity & Nature', desc: 'TNFD-aligned nature risk, water stewardship, and zero-deforestation supply chains.' },
            ].map((rel) => (
              <Link key={rel.href} href={rel.href}
                className="group flex items-start justify-between gap-4 p-6 rounded-xl border border-slate-border/50 hover:shadow-lg hover:border-transparent transition-all no-underline">
                <div>
                  <h3 className="font-bold text-[#0D1B3E] mb-1 group-hover:text-[#2E8AEA] transition-colors">{rel.title}</h3>
                  <p className="text-sm text-slate-body/55 leading-relaxed">{rel.desc}</p>
                </div>
                <ArrowRight size={18} className="text-slate-body/30 group-hover:text-[#2E8AEA] flex-shrink-0 mt-0.5 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
