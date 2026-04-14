import Link from 'next/link'
import { ArrowRight, Leaf, Globe, Settings } from 'lucide-react'

export const metadata = {
  title: 'ESG Solutions | Environmental, Biodiversity, and Process Solutions',
  description:
    'ESG Astraa solutions across environmental sustainability, biodiversity & nature, and by-process consulting — from GHG reduction to water stewardship and energy audits.',
}

const SOLUTION_CATEGORIES = [
  {
    slug: 'environmental',
    icon: Leaf,
    color: '#16A34A',
    bg: '#F0FDF4',
    label: 'Category 01',
    title: 'Environmental',
    desc: 'End-to-end advisory on supply chain ESG alignment, emissions reduction, wastewater management, renewable energy transition, and circular economy frameworks for industrial and commercial organisations.',
    solutions: [
      { name: 'Sustainable Supply Chain', detail: 'Scope 3 & supplier ESG alignment' },
      { name: 'Wastewater Management', detail: 'Treatment & zero-liquid discharge' },
      { name: 'GHG Emission Reduction', detail: 'Scope 1, 2 & 3 mitigation plans' },
      { name: 'Renewable Energy Solutions', detail: 'Solar, wind & green procurement' },
      { name: 'Circular Economy & Waste', detail: 'Zero-waste & recycling frameworks' },
    ],
    metrics: [
      { val: 'Scope 1–3', lbl: 'Emissions coverage' },
      { val: 'ZLD', lbl: 'Wastewater target' },
      { val: 'RE100', lbl: 'Energy benchmark' },
    ],
  },
  {
    slug: 'biodiversity-nature',
    icon: Globe,
    color: '#0D9488',
    bg: '#F0FDFA',
    label: 'Category 02',
    title: 'Biodiversity & Nature',
    desc: 'TNFD-aligned nature risk assessments, zero-deforestation supply chain design, water stewardship planning, and ecological restoration linkages for businesses with nature-related exposure.',
    solutions: [
      { name: 'Biodiversity Assessment', detail: 'TNFD-aligned nature risk analysis' },
      { name: 'Land Use & Deforestation', detail: 'Zero-deforestation supply chains' },
      { name: 'Water Stewardship', detail: 'Risk, harvesting & neutrality plans' },
      { name: 'Ecological Restoration', detail: 'Nature-positive project linkages' },
    ],
    metrics: [
      { val: 'TNFD', lbl: 'Framework aligned' },
      { val: 'EUDR', lbl: 'Trade compliance' },
      { val: 'Net+', lbl: 'Nature-positive' },
    ],
  },
  {
    slug: 'by-process',
    icon: Settings,
    color: '#2E8AEA',
    bg: '#EFF6FF',
    label: 'Category 03',
    title: 'By Process',
    desc: 'Operational-level advisory covering energy audits, air quality, solid waste, ETP/STP plant setup, noise control, environmental clearances, life cycle assessment, and green procurement standards.',
    solutions: [
      { name: 'Energy Audit & Management', detail: 'Identify savings & efficiency gaps' },
      { name: 'Air Quality Monitoring', detail: 'Ambient & stack emission analysis' },
      { name: 'Solid Waste Processing', detail: 'Segregation, disposal & compliance' },
      { name: 'ETP / STP Plant Setup', detail: 'Design, commissioning & compliance' },
      { name: 'Noise & Vibration Control', detail: 'Assessment & mitigation plans' },
      { name: 'Environmental Clearances', detail: 'EC, CTE, CTO application support' },
      { name: 'Life Cycle Assessment', detail: 'Product & process LCA analysis' },
      { name: 'Green Procurement Policy', detail: 'Responsible sourcing standards' },
    ],
    metrics: [
      { val: 'ISO 14001', lbl: 'EMS standard' },
      { val: 'BEE', lbl: 'Energy benchmark' },
      { val: 'EC/CTO', lbl: 'Clearance support' },
    ],
  },
]

export default function SolutionsPage() {
  return (
    <main>
      <section className="bg-[#0D1B3E] pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #2E8AEA 0%, transparent 60%), radial-gradient(circle at 20% 80%, #7516EA 0%, transparent 50%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#5BA8EF] block mb-5">Solutions</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.06] mb-6 tracking-tight max-w-3xl">
            Environmental and process solutions
          </h1>
          <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
            Three practice areas covering the full spectrum of operational ESG — from nature risk and supply chain to facility-level process compliance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              Discuss Your Requirements <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid gap-8">
            {SOLUTION_CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <Link key={cat.slug} href={`/solutions/${cat.slug}/`}
                  className="group block no-underline rounded-2xl border border-slate-border/50 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="grid lg:grid-cols-[1fr_2fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-border/30">
                    <div className="p-10 flex flex-col justify-between" style={{ backgroundColor: cat.bg }}>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.16em] uppercase mb-4 block" style={{ color: cat.color }}>{cat.label}</span>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white" style={{ background: cat.color }}>
                          <Icon size={22} />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mb-3 group-hover:text-[#2E8AEA] transition-colors">
                          {cat.title}
                        </h2>
                        <p className="text-sm text-slate-body/65 leading-relaxed mb-8">
                          {cat.desc}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {cat.metrics.map((m) => (
                          <div key={m.lbl} className="bg-white rounded-lg p-3 text-center border border-slate-border/30">
                            <div className="font-bold text-[11px] leading-tight" style={{ color: cat.color }}>{m.val}</div>
                            <div className="text-[9px] text-slate-body/45 mt-0.5 leading-tight">{m.lbl}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-10 bg-white">
                      <div className="grid sm:grid-cols-2 gap-4 h-full content-center">
                        {cat.solutions.map((sol) => (
                          <div key={sol.name} className="flex items-start gap-3 p-4 rounded-lg bg-slate-bg/60 hover:bg-slate-bg transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: cat.color }} />
                            <div>
                              <div className="font-semibold text-[#0D1B3E] text-sm leading-tight">{sol.name}</div>
                              <div className="text-xs text-slate-body/50 mt-0.5 leading-relaxed">{sol.detail}</div>
                            </div>
                          </div>
                        ))}
                        <div className="sm:col-span-2 mt-2 flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all" style={{ color: cat.color }}>
                          Explore {cat.title} Solutions <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#5BA8EF] block mb-4">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Find the right solution for your operations
              </h2>
              <p className="text-white/45 leading-relaxed">
                Our team can map the most relevant solution pathways against your industry, operational footprint, and regulatory context.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Book a Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/services/" className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold text-white/65 px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 transition-colors">
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
