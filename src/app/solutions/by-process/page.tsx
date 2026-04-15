import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2, Zap, Wind, Trash2, Droplets, Volume2, FileCheck, BarChart2, ShoppingBag } from 'lucide-react'

export const metadata = {
  title: 'By-Process Environmental Solutions | Energy Audit, ETP, Air Quality | ESG Astraa',
  description:
    'ESG Astraa by-process environmental solutions covering energy audits, air quality monitoring, solid waste, ETP/STP setup, noise control, environmental clearances, LCA, and green procurement.',
}

const SOLUTIONS = [
  {
    num: '01',
    icon: Zap,
    title: 'Energy Audit & Management',
    badge: 'BEE / ISO 50001',
    color: '#CA8A04',
    accentBg: '#FEF9C3',
    desc: 'BEE-aligned energy audits covering detailed measurement of energy flows, loss identification, and structured energy management plans for manufacturing, commercial, and infrastructure facilities.',
    keyAreas: ['Detailed energy audit and equipment-level metering', 'Energy intensity benchmarking and loss mapping', 'ISO 50001 energy management system implementation', 'PAT scheme compliance and cycle planning'],
    frameworks: ['BEE PAT', 'ISO 50001', 'GRI 302'],
  },
  {
    num: '02',
    icon: Wind,
    title: 'Air Quality Monitoring',
    badge: 'CPCB / NAAQMS',
    color: '#0369A1',
    accentBg: '#EFF6FF',
    desc: 'Comprehensive ambient and stack emission monitoring programmes for industrial facilities, covering regulatory compliance, CEMS review, and CPCB/SPCB reporting.',
    keyAreas: ['Stack emission sampling and analysis', 'Ambient air quality monitoring network design', 'CEMS performance evaluation and reporting', 'CPCB/SPCB compliance status review and gap closure'],
    frameworks: ['CPCB Standards', 'NAAQMS', 'GRI 305-7'],
  },
  {
    num: '03',
    icon: Trash2,
    title: 'Solid Waste Processing',
    badge: 'SWM Rules / HW Rules',
    color: '#7C3AED',
    accentBg: '#F5F3FF',
    desc: 'Solid waste management advisory covering waste characterisation, segregation system design, authorised disposal route identification, and compliance with solid waste management and hazardous waste rules.',
    keyAreas: ['Waste audit and characterisation study', 'Source segregation and colour coding system design', 'Hazardous waste manifest and disposal route advisory', 'SWM Rules and HW Rules compliance documentation'],
    frameworks: ['SWM Rules 2016', 'HW Rules 2016', 'GRI 306'],
  },
  {
    num: '04',
    icon: Droplets,
    title: 'ETP / STP Plant Setup',
    badge: 'CPCB / CTE / CTO',
    color: '#0D9488',
    accentBg: '#F0FDFA',
    desc: 'End-to-end advisory for effluent treatment plant and sewage treatment plant design, technology selection, commissioning support, and ongoing regulatory compliance management.',
    keyAreas: ['Influent characterisation and treatment train design', 'Technology selection and vendor evaluation', 'Commissioning support and performance testing', 'CTE/CTO compliance documentation and renewal'],
    frameworks: ['CPCB Standards', 'SPCB CTO', 'ISO 14001'],
  },
  {
    num: '05',
    icon: Volume2,
    title: 'Noise & Vibration Control',
    badge: 'EPA Noise Rules',
    color: '#DC2626',
    accentBg: '#FEF2F2',
    desc: 'Noise and vibration impact assessment for industrial facilities, construction projects, and infrastructure operations, with mitigation plan development and compliance with prescribed noise standards.',
    keyAreas: ['Baseline noise and vibration measurement survey', 'Impact prediction and source attribution analysis', 'Engineering control and barrier specification advisory', 'Night-time and sensitive receptor compliance review'],
    frameworks: ['EPA Noise Rules', 'CPCB Guidelines', 'GRI 304'],
  },
  {
    num: '06',
    icon: FileCheck,
    title: 'Environmental Clearances',
    badge: 'EC / CTE / CTO',
    color: '#2E8AEA',
    accentBg: '#EEF4FF',
    desc: 'End-to-end support for environmental impact assessment, environmental clearance, consent to establish, and consent to operate applications for industrial and infrastructure projects.',
    keyAreas: ['EIA scoping and terms of reference preparation', 'Public hearing preparation and documentation support', 'EC/CTE/CTO application drafting and filing', 'Post-clearance compliance monitoring and reporting'],
    frameworks: ['EIA Notification 2006', 'EPA 1986', 'CPCB Guidelines'],
  },
  {
    num: '07',
    icon: BarChart2,
    title: 'Life Cycle Assessment',
    badge: 'ISO 14040 / 14044',
    color: '#16A34A',
    accentBg: '#F0FDF4',
    desc: 'ISO 14040/14044-aligned life cycle assessment for products, processes, and packaging, covering cradle-to-gate, cradle-to-grave, and hotspot analysis for environmental footprint reduction.',
    keyAreas: ['System boundary definition and goal scoping', 'Life cycle inventory data collection and modelling', 'Impact category analysis and hotspot identification', 'Eco-design and carbon footprint reduction recommendations'],
    frameworks: ['ISO 14040', 'ISO 14044', 'GHG Protocol'],
  },
  {
    num: '08',
    icon: ShoppingBag,
    title: 'Green Procurement Policy',
    badge: 'ISO 20400 / BRSR',
    color: '#92400E',
    accentBg: '#FEF3C7',
    desc: 'Advisory on green procurement policy design, supplier environmental pre-qualification criteria, lifecycle-cost-based procurement frameworks, and alignment to BRSR supply chain disclosure requirements.',
    keyAreas: ['Green procurement criteria and category prioritisation', 'Supplier environmental pre-qualification questionnaire', 'Lifecycle costing and total cost of ownership methodology', 'BRSR supply chain and EPR policy integration'],
    frameworks: ['GRI 204', 'BRSR Core', 'ISO 20400'],
  },
]

export default function ByProcessPage() {
  return (
    <main>
      {/* ─── HERO: Dark navy with 2-column grid ─── */}
      <section className="bg-[#0D1B3E] pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 100% 0%, #2E8AEA18 0%, transparent 50%), radial-gradient(ellipse at 0% 100%, #7516EA18 0%, transparent 55%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-10">
            <Link href="/solutions/" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline">Solutions</Link>
            <span className="text-white/15">/</span>
            <span className="text-[11px] text-white/50">By Process</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#5BA8EF] block mb-6">By-Process Solutions</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                Process-level environmental advisory
              </h1>
              <p className="text-lg text-white/45 leading-relaxed mb-8">
                Eight specialist solution areas covering every operational environmental obligation — from energy audits and ETP setup to environmental clearances, LCA, and green procurement.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                  Start a Conversation <ArrowRight size={14} />
                </Link>
                <Link href="#solutions" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors no-underline">
                  Browse All 8 <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: 4-stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '8', lbl: 'Process areas', sub: 'Energy to procurement' },
                { val: 'ISO 50001', lbl: 'Energy standard', sub: 'BEE PAT aligned' },
                { val: 'EC / CTO', lbl: 'Clearance support', sub: 'EIA to consent' },
                { val: 'LCA', lbl: 'Product assessment', sub: 'ISO 14040 / 14044' },
              ].map((s) => (
                <div key={s.lbl} className="rounded-xl border border-white/8 bg-white/4 p-5">
                  <div className="font-display font-bold text-xl text-[#5BA8EF] mb-0.5">{s.val}</div>
                  <div className="text-xs font-semibold text-white/60 mb-0.5">{s.lbl}</div>
                  <div className="text-[10px] text-white/25">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID: 2-column cards ─── */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-12">
            <span className="section-label mb-5 inline-flex">All Eight Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3">
              Pick the process area you need
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon
              return (
                <div key={sol.num}
                  className="group rounded-2xl border border-slate-border/50 bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 overflow-hidden flex">
                  {/* Left accent strip with number */}
                  <div className="w-16 flex-shrink-0 flex flex-col items-center justify-between py-6 px-2" style={{ backgroundColor: sol.color }}>
                    <span className="font-display font-bold text-[11px] text-white/70 writing-mode-vertical">{sol.num}</span>
                    <div className="text-white">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-display font-bold text-[17px] text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors leading-tight">{sol.title}</h3>
                      <span className="text-[9px] font-bold tracking-wide uppercase flex-shrink-0 px-2 py-0.5 rounded-full mt-0.5" style={{ color: sol.color, backgroundColor: sol.accentBg }}>
                        {sol.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-body/60 leading-relaxed mb-4 flex-1">{sol.desc}</p>

                    <div className="space-y-1.5 mb-4">
                      {sol.keyAreas.slice(0, 3).map((area) => (
                        <div key={area} className="flex items-start gap-2">
                          <CheckCircle2 size={11} className="mt-0.5 flex-shrink-0" style={{ color: sol.color }} />
                          <span className="text-[11px] text-slate-body/60 leading-tight">{area}</span>
                        </div>
                      ))}
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
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── STANDARDS BAR ─── */}
      <section className="py-12 bg-slate-bg border-t border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Standards & regulations</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {['BEE PAT Scheme', 'ISO 50001', 'ISO 14040 LCA', 'ISO 20400', 'CPCB Standards', 'EIA Notification 2006', 'SWM Rules 2016', 'HW Rules 2016', 'EPA 1986', 'GRI 302 & 305'].map((f) => (
                <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(circle at 90% 50%, #2E8AEA 0%, transparent 55%)' }} />
        <div className="max-w-site mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#5BA8EF] block mb-5">Multi-Process Programmes</span>
            <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
              Need a combination of process solutions?
            </h2>
            <p className="text-white/45 leading-relaxed">
              We design multi-process engagement programmes covering your priority compliance gaps and environmental management needs — from single-site audits to portfolio-wide clearance programmes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link href="/contact/"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              Get in Touch <ArrowRight size={14} />
            </Link>
            <Link href="/solutions/"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white/50 hover:text-white no-underline border border-white/10 px-6 py-3 rounded-lg transition-colors">
              All Solutions <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
