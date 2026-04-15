import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2, TreePine, MapPin, Droplets, Sprout } from 'lucide-react'

export const metadata = {
  title: 'Biodiversity & Nature Solutions | TNFD, Water Stewardship, Deforestation | ESG Astraa',
  description:
    'ESG Astraa biodiversity and nature solutions covering TNFD-aligned risk analysis, zero-deforestation supply chains, water stewardship, and ecological restoration for businesses.',
}

const SOLUTIONS = [
  {
    num: '01',
    icon: TreePine,
    title: 'Biodiversity Assessment',
    badge: 'TNFD-Aligned Nature Risk',
    color: '#0D9488',
    metric: { val: 'TNFD LEAP', sub: 'Locate · Evaluate · Assess · Prepare' },
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
    num: '02',
    icon: MapPin,
    title: 'Land Use & Deforestation',
    badge: 'Zero-Deforestation Supply Chains',
    color: '#92400E',
    metric: { val: 'EUDR', sub: 'EU Deforestation Regulation compliance' },
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
    num: '03',
    icon: Droplets,
    title: 'Water Stewardship',
    badge: 'Risk, Harvesting & Neutrality',
    color: '#0369A1',
    metric: { val: 'AWS Standard', sub: 'Alliance for Water Stewardship' },
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
    num: '04',
    icon: Sprout,
    title: 'Ecological Restoration',
    badge: 'Nature-Positive Project Linkages',
    color: '#16A34A',
    metric: { val: 'Nature+', sub: 'Nature-positive commitment design' },
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

export default function BiodiversityNaturePage() {
  return (
    <main>
      {/* ─── HERO: Full-bleed dark with large typography ─── */}
      <section className="bg-[#042F2E] pt-36 pb-0 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 60% 0%, #0D948840 0%, transparent 55%), radial-gradient(ellipse at 0% 100%, #16A34A30 0%, transparent 55%)' }} />

        <div className="max-w-site mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link href="/solutions/" className="text-[11px] text-white/30 hover:text-white/60 transition-colors no-underline">Solutions</Link>
            <span className="text-white/15">/</span>
            <span className="text-[11px] text-white/50">Biodiversity & Nature</span>
          </div>

          <div className="max-w-3xl mb-14">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2DD4BF] block mb-6">Biodiversity & Nature Solutions</span>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
              Nature risk,<br />water, and<br /><span className="text-[#2DD4BF]">restoration</span>
            </h1>
            <p className="text-xl text-white/45 leading-relaxed mb-10 max-w-xl">
              Four practice areas for businesses with biodiversity exposure, deforestation obligations, water stress risk, and nature-positive commitments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/" className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] transition-colors">
                Talk to Our Team <ArrowRight size={14} />
              </Link>
              <Link href="#solutions" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors no-underline">
                View Solutions ↓
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom stats band */}
        <div className="border-t border-white/8 bg-white/3">
          <div className="max-w-site mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-px">
            {[
              { val: 'TNFD', lbl: 'Framework aligned' },
              { val: 'EUDR', lbl: 'Trade compliance' },
              { val: 'AWS', lbl: 'Water standard' },
              { val: '4', lbl: 'Solution areas' },
            ].map((s) => (
              <div key={s.lbl} className="px-6 py-4">
                <div className="font-display font-bold text-xl text-[#2DD4BF]">{s.val}</div>
                <div className="text-[10px] text-white/30 mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS: Large numbered cards stacked ─── */}
      <section id="solutions" className="bg-white">
        {SOLUTIONS.map((sol, i) => {
          const Icon = sol.icon
          return (
            <div key={sol.num} className="border-b border-slate-border/30">
              <div className="max-w-site mx-auto px-6">
                <div className="grid lg:grid-cols-[280px_1fr] gap-0 divide-x divide-slate-border/30">
                  {/* Left sidebar */}
                  <div className="py-12 pr-10 flex flex-col justify-between gap-8">
                    <div>
                      <span className="font-display font-bold text-7xl text-slate-border/15 block leading-none mb-6">{sol.num}</span>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: sol.color }}>
                        <Icon size={22} />
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase rounded-full px-2.5 py-1" style={{ color: sol.color, background: `${sol.color}15` }}>
                        {sol.badge}
                      </span>
                    </div>

                    {/* Metric card */}
                    <div className="rounded-xl p-5 border border-slate-border/40 bg-slate-bg">
                      <div className="font-display font-bold text-lg mb-1" style={{ color: sol.color }}>{sol.metric.val}</div>
                      <div className="text-[10px] text-slate-body/45 leading-tight mb-3">{sol.metric.sub}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {sol.frameworks.map((f) => (
                          <span key={f} className="text-[9px] font-bold text-slate-body/40 border border-slate-border/50 px-2 py-0.5 rounded">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="py-12 pl-10">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">{sol.title}</h2>
                    <p className="text-slate-body/60 leading-relaxed mb-8 max-w-2xl">{sol.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                      {sol.keyAreas.map((area) => (
                        <div key={area} className="flex items-start gap-3 p-4 rounded-xl border border-slate-border/40 hover:border-[#0D9488]/30 hover:bg-[#F0FDFA] transition-colors group">
                          <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 transition-colors" style={{ color: sol.color }} />
                          <span className="text-sm text-slate-body/65 leading-tight">{area}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Link href="/contact/"
                        className="inline-flex items-center gap-2 text-sm font-bold no-underline hover:gap-3 transition-all"
                        style={{ color: sol.color }}>
                        Enquire about this solution <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ─── WHY NATURE NOW ─── */}
      <section className="py-24 bg-slate-bg border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <span className="section-label mb-5 inline-flex">Why It Matters Now</span>
              <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mt-3 leading-tight">
                Nature risk is moving from voluntary to mandatory
              </h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-5">
              {[
                { title: 'TNFD Disclosures', desc: 'Institutional investors and lenders are requiring TNFD-aligned nature disclosures for businesses with material land, water, or biodiversity dependencies.' },
                { title: 'EUDR Obligations', desc: 'Exporters of forest-risk commodities to the EU face mandatory deforestation due diligence, requiring supply chain traceability to plot level.' },
                { title: 'Nature-Positive Targets', desc: 'Leading businesses are setting nature-positive commitments alongside net zero goals, requiring credible biodiversity baselines and restoration plans.' },
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

      {/* ─── FRAMEWORKS ─── */}
      <section className="py-12 bg-white border-b border-slate-border/40">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-body/30 flex-shrink-0">Frameworks covered</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {['TNFD', 'GRI 303 Water', 'GRI 304 Biodiversity', 'SBTN', 'EUDR', 'AWS Standard', 'CDP Water', 'Forest 500', 'Verra BCS'].map((f) => (
                <span key={f} className="text-xs font-semibold text-slate-body/40">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[#042F2E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0D9488 0%, transparent 60%)' }} />
        <div className="max-w-site mx-auto px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2DD4BF] block mb-5">Get Started</span>
            <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
              Understand your nature-related risks and opportunities
            </h2>
            <p className="text-white/45 leading-relaxed">
              Our advisors map your biodiversity exposure, water risk context, and deforestation obligations against TNFD, EUDR, and investor expectations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white px-6 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] transition-colors">
              Book a Consultation <ArrowRight size={14} />
            </Link>
            <Link href="/solutions/" className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white/50 hover:text-white no-underline transition-colors border border-white/10 px-6 py-3 rounded-lg">
              All Solutions <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
