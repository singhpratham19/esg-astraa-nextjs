import Link from 'next/link'
import { ArrowRight, CheckCircle2, Leaf, Wind, Zap, Recycle, Droplets, ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Environmental Solutions | GHG Reduction, Wastewater, Renewable Energy | ESG Astraa',
  description:
    'ESG Astraa environmental solutions covering sustainable supply chain, wastewater management, GHG emission reduction, renewable energy transition, and circular economy advisory for Indian businesses.',
}

const SOLUTIONS = [
  {
    num: '01',
    icon: Leaf,
    title: 'Sustainable Supply Chain',
    badge: 'Scope 3 & Supplier ESG',
    stat: { val: 'Scope 3', sub: 'Category 1–15 coverage' },
    desc: 'End-to-end advisory on supplier ESG screening, Scope 3 emissions quantification, and value chain transparency for BRSR Core and export market compliance.',
    keyAreas: [
      'Supplier ESG risk scoring and tiering',
      'Scope 3 category mapping and measurement',
      'Supplier code of conduct development',
      'BRSR Core supply chain disclosure support',
    ],
    frameworks: ['GRI 308', 'GRI 414', 'BRSR Core'],
  },
  {
    num: '02',
    icon: Droplets,
    title: 'Wastewater Management',
    badge: 'Treatment & Zero Liquid Discharge',
    stat: { val: 'ZLD', sub: 'Zero liquid discharge target' },
    desc: 'Technical advisory and compliance support for industrial wastewater treatment, effluent quality management, and zero liquid discharge system design and commissioning.',
    keyAreas: [
      'Effluent characterisation and treatment pathway design',
      'ZLD feasibility and technology selection',
      'CPCB/SPCB compliance documentation',
      'Ongoing monitoring programme design',
    ],
    frameworks: ['CPCB Standards', 'ISO 14001', 'GRI 303'],
  },
  {
    num: '03',
    icon: Wind,
    title: 'GHG Emission Reduction',
    badge: 'Scope 1, 2 & 3 Mitigation',
    stat: { val: 'SBTi', sub: 'Science-based target alignment' },
    desc: 'Structured decarbonisation advisory from emissions baseline to reduction roadmap, covering Scope 1, 2, and priority Scope 3 categories with technology and financial analysis.',
    keyAreas: [
      'GHG inventory development and verification',
      'Marginal abatement cost curve analysis',
      'Science-based target setting (SBTi alignment)',
      'Net zero and decarbonisation roadmap design',
    ],
    frameworks: ['GHG Protocol', 'SBTi', 'BRSR P6'],
  },
  {
    num: '04',
    icon: Zap,
    title: 'Renewable Energy Solutions',
    badge: 'Solar, Wind & Green Procurement',
    stat: { val: 'RE100', sub: 'Renewable energy benchmark' },
    desc: 'Advisory on renewable energy strategy, RPO compliance, power purchase agreement structuring, rooftop solar assessment, and green tariff procurement for industrial consumers.',
    keyAreas: [
      'Renewable energy potential and feasibility assessment',
      'RPO compliance strategy and gap analysis',
      'PPA structuring and green tariff advisory',
      'RE100 and CDP Climate response alignment',
    ],
    frameworks: ['RE100', 'RPO Regulations', 'CDP Climate'],
  },
  {
    num: '05',
    icon: Recycle,
    title: 'Circular Economy & Waste',
    badge: 'Zero-Waste & Recycling Frameworks',
    stat: { val: 'EPR', sub: 'Extended producer responsibility' },
    desc: 'Circular economy strategy, EPR compliance, waste reduction programme design, and material recovery optimisation for manufacturing, FMCG, and infrastructure businesses.',
    keyAreas: [
      'Waste audit and material flow analysis',
      'EPR compliance strategy and documentation',
      'Circular product and packaging design advisory',
      'Zero-waste-to-landfill programme development',
    ],
    frameworks: ['GRI 306', 'EPR Rules 2022', 'ISO 14001'],
  },
]

export default function EnvironmentalSolutionsPage() {
  return (
    <main>
      {/* ─── HERO: Full-bleed split with large stat panel ─── */}
      <section className="bg-[#052E16] min-h-[92vh] flex flex-col justify-end pt-36 overflow-hidden relative">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 100% 0%, #16A34A22 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, #0D948840 0%, transparent 60%)' }} />

        {/* Breadcrumb */}
        <div className="max-w-site mx-auto px-6 relative w-full">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/solutions/" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline">Solutions</Link>
            <span className="text-white/15">/</span>
            <span className="text-[11px] text-white/50">Environmental</span>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end pb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#16A34A] flex items-center justify-center text-white">
                  <Leaf size={20} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4ADE80]">Environmental Solutions</span>
              </div>
              <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
                Environmental<br /><span className="text-[#4ADE80]">advisory</span><br />end to end
              </h1>
              <p className="text-lg text-white/50 leading-relaxed max-w-lg mb-8">
                Five integrated solution areas spanning supply chain ESG, GHG reduction, wastewater compliance, renewable energy transition, and circular economy — built for Indian industrial operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] transition-colors">
                  Start a Conversation <ArrowRight size={14} />
                </Link>
                <Link href="#solutions" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors no-underline">
                  Explore Solutions ↓
                </Link>
              </div>
            </div>

            {/* Stat panel */}
            <div className="grid grid-cols-2 gap-3 mb-2">
              {[
                { val: '5', lbl: 'Solution areas' },
                { val: 'GHG Protocol', lbl: 'Emissions standard' },
                { val: 'ZLD', lbl: 'Wastewater target' },
                { val: 'SBTi Ready', lbl: 'Decarbonisation' },
              ].map((s) => (
                <div key={s.lbl} className="rounded-xl border border-white/8 bg-white/5 p-5">
                  <div className="font-display font-bold text-xl text-[#4ADE80] mb-1">{s.val}</div>
                  <div className="text-[10px] text-white/35 leading-tight">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom edge accent */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#16A34A]/40 to-transparent" />
      </section>

      {/* ─── SOLUTIONS: Alternating large sections ─── */}
      <section id="solutions" className="bg-white">
        {SOLUTIONS.map((sol, i) => {
          const Icon = sol.icon
          const isEven = i % 2 === 0
          return (
            <div key={sol.num} className={`border-b border-slate-border/40 ${isEven ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
              <div className="max-w-site mx-auto px-6 py-16">
                <div className={`grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Left: number + icon + stat */}
                  <div className={`flex flex-col gap-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-start gap-5">
                      <span className="font-display font-bold text-[80px] leading-none text-slate-border/20">{sol.num}</span>
                      <div className="pt-4">
                        <div className="w-12 h-12 rounded-xl bg-[#052E16] flex items-center justify-center text-[#4ADE80] mb-4">
                          <Icon size={22} />
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#16A34A]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                          <span className="text-[10px] font-bold text-[#16A34A] tracking-wide">{sol.badge}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metric card */}
                    <div className="rounded-xl bg-[#052E16] p-6 max-w-xs">
                      <div className="font-display font-bold text-2xl text-[#4ADE80] mb-1">{sol.stat.val}</div>
                      <div className="text-xs text-white/40">{sol.stat.sub}</div>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {sol.frameworks.map((f) => (
                          <span key={f} className="text-[9px] font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">{sol.title}</h2>
                    <p className="text-slate-body/65 leading-relaxed mb-8">{sol.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {sol.keyAreas.map((area) => (
                        <div key={area} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#F0FDF4] border border-[#16A34A]/15">
                          <CheckCircle2 size={14} className="text-[#16A34A] mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-slate-body/70 leading-tight">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ─── FRAMEWORKS BAR ─── */}
      <section className="py-12 bg-slate-bg border-t border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Standards covered</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {['GHG Protocol', 'ISO 14001', 'GRI 303', 'GRI 305', 'GRI 306', 'SBTi', 'RE100', 'BRSR P6 & P7', 'EPR Rules 2022', 'CPCB'].map((f) => (
                <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[#052E16] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #16A34A 0%, transparent 60%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#4ADE80] block mb-5">Next Steps</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to act on your environmental priorities?
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 text-lg">
              Our environmental team can map the right solution areas to your industry footprint, regulatory obligations, and sustainability targets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] transition-colors">
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/solutions/" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white no-underline transition-colors">
                All Solutions <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
