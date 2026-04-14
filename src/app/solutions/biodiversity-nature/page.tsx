import Link from 'next/link'
import { ArrowRight, CheckCircle2, TreePine, MapPin, Droplets, Sprout } from 'lucide-react'

export const metadata = {
  title: 'Biodiversity & Nature Solutions | TNFD, Water Stewardship, Deforestation | ESG Astraa',
  description:
    'ESG Astraa biodiversity and nature solutions covering TNFD-aligned risk analysis, zero-deforestation supply chains, water stewardship, and ecological restoration for businesses.',
}

const SOLUTIONS = [
  {
    icon: TreePine,
    title: 'Biodiversity Assessment',
    badge: 'TNFD-Aligned Nature Risk',
    color: '#0D9488',
    desc: 'Structured biodiversity risk assessment aligned to the TNFD framework, identifying location-specific nature dependencies, impacts, risks, and response opportunities across operations and value chains.',
    keyAreas: [
      'Site-level nature dependency and impact screening',
      'TNFD LEAP approach implementation',
      'Biodiversity footprint and hotspot mapping',
      'Nature-related materiality disclosure support',
    ],
    frameworks: ['TNFD', 'GRI 304', 'SBTN'],
  },
  {
    icon: MapPin,
    title: 'Land Use & Deforestation',
    badge: 'Zero-Deforestation Supply Chains',
    color: '#92400E',
    desc: 'Advisory on EUDR compliance, zero-deforestation commitments, land conversion risk mapping, and traceability systems for agricultural commodity businesses with forest-risk supply chains.',
    keyAreas: [
      'EUDR compliance readiness assessment',
      'Deforestation risk mapping by commodity and origin',
      'Supplier traceability and certification advisory',
      'Jurisdictional approach and landscape engagement',
    ],
    frameworks: ['EUDR', 'GRI 304-2', 'Forest 500'],
  },
  {
    icon: Droplets,
    title: 'Water Stewardship',
    badge: 'Risk, Harvesting & Neutrality Plans',
    color: '#0369A1',
    desc: 'Context-based water stewardship advisory covering basin-level risk assessment, water harvesting programme design, neutrality target setting, and CDP Water Security disclosure support.',
    keyAreas: [
      'Water risk assessment using WRI Aqueduct and WWF tools',
      'Water balance and catchment-level impact mapping',
      'Rainwater harvesting and reuse programme design',
      'CDP Water Security and GRI 303 disclosure support',
    ],
    frameworks: ['CDP Water', 'GRI 303', 'AWS Standard'],
  },
  {
    icon: Sprout,
    title: 'Ecological Restoration',
    badge: 'Nature-Positive Project Linkages',
    color: '#16A34A',
    desc: 'Advisory on voluntary biodiversity credit markets, nature-positive commitments, compensatory afforestation, and ecosystem restoration project identification and development linkages.',
    keyAreas: [
      'Nature-positive strategy and commitment design',
      'Compensatory afforestation compliance advisory',
      'Biodiversity credit and voluntary nature market screening',
      'Restoration project identification and co-benefit assessment',
    ],
    frameworks: ['TNFD', 'GRI 304-3', 'Verra BCS'],
  },
]

const METRICS = [
  { val: 'TNFD', lbl: 'Framework aligned' },
  { val: 'EUDR', lbl: 'Trade compliance' },
  { val: 'Net+', lbl: 'Nature-positive target' },
  { val: '4', lbl: 'Solution areas' },
]

export default function BiodiversityNaturePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#042F2E] pt-32 pb-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 75% 40%, #0D9488 0%, transparent 60%), radial-gradient(circle at 15% 70%, #16A34A 0%, transparent 50%)' }} />
        <div className="max-w-site mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/solutions/" className="text-[11px] font-medium text-white/40 hover:text-white/70 transition-colors no-underline">Solutions</Link>
            <span className="text-white/20">/</span>
            <span className="text-[11px] font-medium text-white/70">Biodiversity & Nature</span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2DD4BF] block mb-5">Biodiversity & Nature Solutions</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.06] mb-6 tracking-tight max-w-3xl">
            Nature risk, water stewardship, and restoration advisory
          </h1>
          <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
            Four practice areas covering TNFD-aligned biodiversity risk, zero-deforestation supply chains, context-based water stewardship, and ecological restoration linkages.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] transition-colors">
              Discuss Your Requirements <ArrowRight size={15} />
            </Link>
            <Link href="/services/" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors no-underline">
              View Advisory Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((m) => (
              <div key={m.lbl}>
                <div className="font-display text-2xl font-bold text-[#2DD4BF] mb-1">{m.val}</div>
                <div className="text-xs text-white/40">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nature Matters */}
      <section className="py-16 bg-slate-bg border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'TNFD Disclosure', desc: 'Institutional investors and lenders are requiring TNFD-aligned nature-related risk disclosures for businesses with significant land, water, or biodiversity dependencies.' },
              { title: 'EUDR Compliance', desc: 'Exporters of forest-risk commodities to the EU face mandatory deforestation due diligence obligations under EUDR, requiring traceability to plot level.' },
              { title: 'Nature-Positive Targets', desc: 'Leading businesses are setting nature-positive commitments alongside net zero, requiring baseline biodiversity assessments and credible restoration linkages.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-border/40 p-6">
                <div className="w-8 h-1 rounded-full bg-[#0D9488] mb-4" />
                <h3 className="font-bold text-[#0D1B3E] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-body/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-flex">Our Nature Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3">
              Four biodiversity and nature practice areas
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon
              return (
                <div key={sol.title} className="bg-white rounded-2xl border border-slate-border/50 hover:shadow-xl hover:border-[#0D9488]/30 transition-all group p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: sol.color }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full bg-[#F0FDFA] text-[#0D9488]">{sol.badge}</span>
                      <h3 className="font-display font-bold text-xl text-[#0D1B3E] mt-2 group-hover:text-[#0D9488] transition-colors">{sol.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-body/65 leading-relaxed mb-6">{sol.desc}</p>

                  <div className="space-y-2.5 mb-6">
                    {sol.keyAreas.map((area) => (
                      <div key={area} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-[#0D9488] mt-0.5 flex-shrink-0" />
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
                    <Link href="/contact/" className="text-xs font-bold text-[#0D9488] hover:gap-3 flex items-center gap-1.5 no-underline transition-all">
                      Enquire <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              )
            })}
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
              {['TNFD', 'GRI 303 Water', 'GRI 304 Biodiversity', 'SBTN', 'EUDR', 'AWS Standard', 'CDP Water', 'Forest 500', 'Verra BCS'].map((f) => (
                <span key={f} className="text-sm font-semibold text-slate-body/45">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#042F2E]">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#2DD4BF] block mb-4">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Understand your nature-related risks and opportunities
              </h2>
              <p className="text-white/45 leading-relaxed">
                Our advisors can map your biodiversity exposure, water risk context, and deforestation obligations against TNFD, EUDR, and investor expectations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] transition-colors">
                Book a Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/solutions/" className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold text-white/65 px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 transition-colors">
                All Solutions <ArrowRight size={15} />
              </Link>
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
              { href: '/solutions/environmental/', title: 'Environmental', desc: 'GHG reduction, wastewater management, renewable energy, and circular economy frameworks.', color: '#16A34A' },
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
