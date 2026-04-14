import Link from 'next/link'
import { ArrowRight, CheckCircle2, Leaf, Wind, Zap, Recycle, Droplets } from 'lucide-react'

export const metadata = {
  title: 'Environmental Solutions | GHG Reduction, Wastewater, Renewable Energy | ESG Astraa',
  description:
    'ESG Astraa environmental solutions covering sustainable supply chain, wastewater management, GHG emission reduction, renewable energy transition, and circular economy advisory.',
}

const SOLUTIONS = [
  {
    icon: Leaf,
    title: 'Sustainable Supply Chain',
    badge: 'Scope 3 & Supplier ESG',
    color: '#16A34A',
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
    icon: Droplets,
    title: 'Wastewater Management',
    badge: 'Treatment & Zero Liquid Discharge',
    color: '#0369A1',
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
    icon: Wind,
    title: 'GHG Emission Reduction',
    badge: 'Scope 1, 2 & 3 Mitigation',
    color: '#16A34A',
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
    icon: Zap,
    title: 'Renewable Energy Solutions',
    badge: 'Solar, Wind & Green Procurement',
    color: '#CA8A04',
    desc: 'Advisory on renewable energy strategy, RPO compliance, power purchase agreement structuring, rooftop solar assessment, and green tariff procurement for industrial consumers.',
    keyAreas: [
      'Renewable energy potential and feasibility assessment',
      'RPO compliance strategy and gap analysis',
      'PPA structuring and green tariff advisory',
      'RE100 and CDP CDP Climate response alignment',
    ],
    frameworks: ['RE100', 'RPO Regulations', 'CDP Climate'],
  },
  {
    icon: Recycle,
    title: 'Circular Economy & Waste',
    badge: 'Zero-Waste & Recycling Frameworks',
    color: '#16A34A',
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

const METRICS = [
  { val: 'Scope 1–3', lbl: 'Emissions coverage' },
  { val: 'ZLD', lbl: 'Wastewater target' },
  { val: 'RE100', lbl: 'Energy benchmark' },
  { val: '5', lbl: 'Solution areas' },
]

export default function EnvironmentalSolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#052E16] pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 75% 50%, #16A34A 0%, transparent 60%), radial-gradient(circle at 15% 80%, #0D9488 0%, transparent 50%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/solutions/" className="text-[11px] font-medium text-white/40 hover:text-white/70 transition-colors no-underline">Solutions</Link>
            <span className="text-white/20">/</span>
            <span className="text-[11px] font-medium text-white/70">Environmental</span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#4ADE80] block mb-5">Environmental Solutions</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.06] mb-6 tracking-tight max-w-3xl">
            Environmental advisory from emissions to waste
          </h1>
          <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
            Five interconnected solution areas covering GHG measurement, supply chain ESG, wastewater compliance, renewable energy transition, and circular economy frameworks.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] transition-colors">
              Discuss Your Requirements <ArrowRight size={15} />
            </Link>
            <Link href="/services/" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors no-underline">
              View Advisory Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((m) => (
              <div key={m.lbl}>
                <div className="font-display text-2xl font-bold text-[#4ADE80] mb-1">{m.val}</div>
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
            <span className="section-label mb-5 inline-flex">Our Environmental Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3">
              Five areas of environmental advisory
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon
              return (
                <div key={sol.title} className="bg-white rounded-2xl border border-slate-border/50 hover:shadow-xl hover:border-[#16A34A]/30 transition-all group p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: sol.color }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full bg-[#F0FDF4] text-[#16A34A]">{sol.badge}</span>
                      <h3 className="font-display font-bold text-xl text-[#0D1B3E] mt-2 group-hover:text-[#16A34A] transition-colors">{sol.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-body/65 leading-relaxed mb-6">{sol.desc}</p>

                  <div className="space-y-2.5 mb-6">
                    {sol.keyAreas.map((area) => (
                      <div key={area} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-[#16A34A] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-body/65 leading-tight">{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-slate-border/30 flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {sol.frameworks.map((f) => (
                        <span key={f} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-bg text-slate-body/50">{f}</span>
                      ))}
                    </div>
                    <Link href="/contact/" className="text-xs font-bold text-[#16A34A] hover:gap-3 flex items-center gap-1.5 no-underline transition-all">
                      Enquire <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              )
            })}

            {/* CTA Card */}
            <div className="bg-[#052E16] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#4ADE80] block mb-4">Get Started</span>
                <h3 className="font-display text-2xl font-bold text-white leading-tight mb-4">
                  Not sure which environmental solution fits your needs?
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Our team maps the right solution to your industry footprint, regulatory exposure, and reporting obligations.
                </p>
              </div>
              <Link href="/contact/" className="mt-8 inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#16A34A] hover:bg-[#15803D] transition-colors self-start">
                Book a Consultation <ArrowRight size={15} />
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
              Frameworks covered
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3 items-center">
              {['GHG Protocol', 'ISO 14001', 'GRI 303 Water', 'GRI 305 Emissions', 'GRI 306 Waste', 'SBTi', 'RE100', 'BRSR P6 & P7', 'EPR Rules 2022', 'CPCB Standards'].map((f) => (
                <span key={f} className="text-sm font-semibold text-slate-body/45">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-[#0D1B3E] mb-8">Explore other solution areas</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { href: '/solutions/biodiversity-nature/', title: 'Biodiversity & Nature', desc: 'TNFD-aligned nature risk, water stewardship, and zero-deforestation supply chains.', color: '#0D9488' },
              { href: '/solutions/by-process/', title: 'By Process', desc: 'Energy audits, air quality, ETP/STP setup, environmental clearances, and LCA.', color: '#2E8AEA' },
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
