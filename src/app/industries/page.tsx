import Link from 'next/link'
import { INDUSTRIES } from '@/lib/data'
import { ArrowRight, ArrowUpRight, Factory, Zap, Heart, Building2, Landmark, Mountain, Cpu, Leaf, CheckCircle2 } from 'lucide-react'

export const metadata = { title: 'Industries — ESG Astraa' }

const INDUSTRY_META: Record<string, {
  icon: React.ReactElement
  color: string
  bg: string
  tagline: string
  metrics: { val: string; lbl: string }[]
}> = {
  'manufacturing': {
    icon: <Factory size={22} />,
    color: '#2E8AEA',
    bg: '#EEF5FF',
    tagline: 'BRSR, supply chain ESG, Scope 1/2 reduction, energy transition — for India\'s listed and export-oriented manufacturers.',
    metrics: [
      { val: '17%', lbl: 'Of Indian GDP from sector' },
      { val: '40%', lbl: 'India\'s GHG from sector' },
      { val: 'CBAM', lbl: 'EU export compliance' },
    ],
  },
  'energy-power': {
    icon: <Zap size={22} />,
    color: '#0D9488',
    bg: '#F0FDFA',
    tagline: 'Carbon accounting, CCTS compliance, renewable integration, net-zero pathways — for generators, transmitters, and energy developers.',
    metrics: [
      { val: '500GW', lbl: 'India\'s 2030 RE target' },
      { val: '45%', lbl: 'Emission intensity cut by 2030' },
      { val: 'CCTS', lbl: 'Carbon market live' },
    ],
  },
  'healthcare-pharma': {
    icon: <Heart size={22} />,
    color: '#7516EA',
    bg: '#F5F0FF',
    tagline: 'Clinical waste ESG, patient-impact metrics, BRSR for pharma, responsible supply chains — for hospitals and life sciences.',
    metrics: [
      { val: '₹5.6L Cr', lbl: 'Pharma market by 2030' },
      { val: '1000+', lbl: 'Listed cos. under BRSR' },
      { val: 'BMW', lbl: 'Waste rules tightening' },
    ],
  },
  'infrastructure-real-estate': {
    icon: <Building2 size={22} />,
    color: '#1A6DC4',
    bg: '#EFF6FF',
    tagline: 'Green building certification, ESIA, project-level ESG, sustainable construction — for developers, contractors, and asset owners.',
    metrics: [
      { val: '₹111L Cr', lbl: 'NIP pipeline' },
      { val: '40%', lbl: 'Global CO₂ from buildings' },
      { val: 'ESIA', lbl: 'Mandatory for major projects' },
    ],
  },
  'financial-services': {
    icon: <Landmark size={22} />,
    color: '#0D1B3E',
    bg: '#F1F5F9',
    tagline: 'ESG-linked lending, portfolio climate alignment, RBI climate risk, green bond frameworks — for banks, NBFCs, and asset managers.',
    metrics: [
      { val: 'RBI', lbl: 'Climate risk guidelines' },
      { val: 'IFRS S2', lbl: 'Disclosure standard' },
      { val: 'PCAF', lbl: 'Financed emissions standard' },
    ],
  },
  'mining-metals': {
    icon: <Mountain size={22} />,
    color: '#92400E',
    bg: '#FEF3C7',
    tagline: 'Environmental remediation, community impact, mine closure ESG, SDF compliance — for mining operators and metals producers.',
    metrics: [
      { val: '15%', lbl: 'India\'s GHG from sector' },
      { val: '2%', lbl: 'Profits mandated for SDF' },
      { val: 'High', lbl: 'Community ESG risk' },
    ],
  },
  'it-technology': {
    icon: <Cpu size={22} />,
    color: '#7516EA',
    bg: '#F5F0FF',
    tagline: 'Scope 3 emissions, CSRD preparation, data centre sustainability, supply chain transparency — for IT services and product companies.',
    metrics: [
      { val: '85%', lbl: 'Emissions in Scope 3' },
      { val: 'CSRD', lbl: 'EU affecting Indian exporters' },
      { val: 'RE100', lbl: 'Customer energy pressure' },
    ],
  },
  'agriculture-food': {
    icon: <Leaf size={22} />,
    color: '#16A34A',
    bg: '#F0FDF4',
    tagline: 'Sustainable sourcing, water footprint, deforestation-free supply chains, regenerative agriculture — for agri and food businesses.',
    metrics: [
      { val: '80%', lbl: 'Freshwater from agriculture' },
      { val: '18%', lbl: 'India\'s GHG from sector' },
      { val: 'EUDR', lbl: 'Deforestation regulation' },
    ],
  },
}

export default function IndustriesPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-white border-b border-slate-border/50 pt-32 pb-20">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <span className="section-label mb-6 inline-flex">Industry Expertise</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-[#0D1B3E] leading-[1.06] tracking-tight mt-3 mb-6">
                Sector-Specific<br />ESG Advisory
              </h1>
              <p className="text-lg text-slate-body/60 leading-relaxed max-w-lg">
                Generic advisory misses what matters. Our sector-specialist teams deliver focused ESG advisory grounded in your industry's operating reality, regulatory environment, and stakeholder expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-border/30 border border-slate-border/30 rounded-xl overflow-hidden">
              {[
                { val: '8', lbl: 'Industry Specialisations' },
                { val: '50+', lbl: 'Sector Engagements' },
                { val: '7', lbl: 'ESG Framework Alignments' },
                { val: '100%', lbl: 'India-Focused Advisory' },
              ].map((s) => (
                <div key={s.lbl} className="bg-white p-8">
                  <div className="font-display text-3xl font-bold gradient-text mb-1">{s.val}</div>
                  <div className="text-xs text-slate-body/50 leading-tight">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY GRID ── */}
      <section className="py-24 bg-slate-bg">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-16">
            <span className="section-label mb-5 inline-flex">All Sectors</span>
            <div className="flex flex-col md:flex-row md:items-end gap-4 mt-3">
              <h2 className="font-display text-4xl font-bold text-[#0D1B3E] flex-1">
                Our Industry Practices
              </h2>
              <p className="text-slate-body/55 text-sm max-w-xs leading-relaxed">
                Each practice combines sector domain knowledge with our proprietary 4-phase ESG methodology.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => {
              const meta = INDUSTRY_META[ind.slug]
              return (
                <Link key={ind.slug} href={`/industries/${ind.slug}/`}
                  className="group bg-white rounded-xl border border-slate-border/60 p-8 hover:shadow-xl hover:border-transparent transition-all no-underline flex flex-col relative overflow-hidden">
                  {/* Top color accent */}
                  <div className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${meta?.color}, #7516EA)` }} />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors"
                    style={{ background: meta?.bg, color: meta?.color }}>
                    {meta?.icon}
                  </div>

                  {/* Industry name */}
                  <h3 className="font-display font-bold text-lg text-[#0D1B3E] mb-2 group-hover:text-[#2E8AEA] transition-colors">
                    {ind.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-slate-body/55 leading-relaxed mb-6 flex-1">
                    {meta?.tagline}
                  </p>

                  {/* Focus areas */}
                  <div className="space-y-2 mb-6 border-t border-slate-border/40 pt-5">
                    {ind.focus.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={12} style={{ color: meta?.color }} className="flex-shrink-0" />
                        <span className="text-xs text-slate-body/65">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics + CTA */}
                  <div className="border-t border-slate-border/40 pt-5">
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {meta?.metrics.map((m) => (
                        <div key={m.lbl} className="bg-slate-bg rounded-lg px-2.5 py-2.5 text-center">
                          <div className="font-display font-bold text-xs leading-tight" style={{ color: meta?.color }}>{m.val}</div>
                          <div className="text-[9px] text-slate-body/40 leading-tight mt-0.5">{m.lbl}</div>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-3 transition-all"
                      style={{ color: meta?.color }}>
                      Explore Practice <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY SECTOR-SPECIFIC ── */}
      <section className="py-24 bg-white border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="section-label mb-5 inline-flex">Our Approach</span>
              <h2 className="font-display text-4xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-6">
                Why Industry-Specific Advisory Matters
              </h2>
              <p className="text-slate-body/65 leading-relaxed mb-5">
                A manufacturing BRSR programme and a financial services ESG integration look nothing alike. The material issues, regulatory obligations, stakeholder expectations, and value levers are fundamentally different.
              </p>
              <p className="text-slate-body/55 leading-relaxed mb-8">
                Generic ESG advice misses what actually drives investor decisions, regulatory compliance, and competitive advantage in your sector. Our industry-specialist teams bring the domain depth that generic frameworks miss.
              </p>
              <Link href="/contact/" className="btn-primary inline-flex">
                Discuss Your Sector <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-0 divide-y divide-slate-border/40 border border-slate-border/40 rounded-xl overflow-hidden">
              {[
                {
                  num: '01',
                  title: 'Sector Materiality Mapping',
                  desc: 'We identify the ESG factors that genuinely affect your sector — emissions intensity for energy, supply chain labour for manufacturing, financed emissions for banks — not generic sustainability checklists.',
                },
                {
                  num: '02',
                  title: 'Regulation-Calibrated Advisory',
                  desc: 'SEBI BRSR for listed companies, RBI climate risk for banks, CCTS for emitters, CSRD for exporters — we know which regulations bite hardest in your sector.',
                },
                {
                  num: '03',
                  title: 'Sector Peer Benchmarking',
                  desc: 'We compare your ESG performance against calibrated sector peers — the kind of benchmarks that hold up with boards, investors, and rating agencies.',
                },
                {
                  num: '04',
                  title: 'Value Creation, Not Just Compliance',
                  desc: 'ESG is not just risk management. We identify where sustainability creates measurable business value — green finance access, supply chain resilience, talent retention.',
                },
              ].map((item) => (
                <div key={item.num} className="p-8 bg-white hover:bg-slate-bg transition-colors group">
                  <div className="flex gap-6 items-start">
                    <span className="text-sm font-bold gradient-text flex-shrink-0 pt-0.5">{item.num}</span>
                    <div>
                      <h4 className="font-bold text-[#0D1B3E] mb-2 group-hover:text-[#2E8AEA] transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-body/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL ── */}
      <section className="py-24 bg-slate-bg border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-5 inline-flex justify-center">How We Engage</span>
            <h2 className="font-display text-4xl font-bold text-[#0D1B3E] mt-3 mb-4">
              A Sector Engagement, Step by Step
            </h2>
            <p className="text-slate-body/55 leading-relaxed">
              Every engagement follows our proven 4-phase methodology — adapted to the specific operating reality, regulatory context, and stakeholder landscape of your sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01',
                title: 'Sector Diagnostic',
                desc: 'We map ESG maturity against sector peers, identify material issues specific to your industry, and benchmark disclosure quality against best-in-class.',
                deliverable: 'Sector materiality matrix & peer benchmark report',
              },
              {
                num: '02',
                title: 'Strategy & Roadmap',
                desc: 'We build a data-informed ESG roadmap calibrated to your sector\'s regulatory timeline, stakeholder expectations, and business planning cycle.',
                deliverable: 'Board-ready ESG strategy & 12–36 month roadmap',
              },
              {
                num: '03',
                title: 'Implementation',
                desc: 'Hands-on execution support — data architecture, governance structures, disclosure drafting, and assurance preparation — all adapted to sector operating realities.',
                deliverable: 'Operational ESG programme with owned workflows',
              },
              {
                num: '04',
                title: 'Measure & Report',
                desc: 'Continuous KPI tracking, peer benchmarking, regulatory monitoring, and stakeholder communication — powered by our proprietary analytics infrastructure.',
                deliverable: 'Dashboard, disclosure pack & board reporting',
              },
            ].map((p) => (
              <div key={p.num}
                className="bg-white border border-slate-border/50 rounded-xl p-8 hover:shadow-lg hover:border-[#2E8AEA]/30 transition-all group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                <span className="font-display text-4xl font-bold gradient-text mb-6">{p.num}</span>
                <h4 className="font-display font-bold text-lg text-[#0D1B3E] mb-3">{p.title}</h4>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-5 flex-1">{p.desc}</p>
                <div className="pt-4 border-t border-slate-border/40">
                  <p className="text-xs text-[#7516EA] font-semibold leading-relaxed">{p.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORKS ── */}
      <section className="py-14 bg-white border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-slate-body/35 flex-shrink-0">
              Advisory aligned to
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3 items-center">
              {['SEBI BRSR', 'GRI Standards', 'ISSB / IFRS S1 & S2', 'TCFD', 'EU CSRD', 'CDP', 'SASB', 'ICMA Green Bond Principles'].map((f) => (
                <span key={f} className="text-sm font-semibold text-slate-body/45">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1a2f5e 100%)' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #2E8AEA, transparent)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #7516EA, transparent)', transform: 'translate(-20%, 20%)' }} />
        <div className="max-w-site mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#5BA8EF] block mb-4">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Discuss Your Sector&apos;s ESG Priorities
              </h2>
              <p className="text-white/45 leading-relaxed">
                Our sector-specialist advisory team is ready to understand your unique challenges, regulatory exposure, and value creation opportunities. Start with a 30-minute sector consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/contact/" className="btn-primary justify-center text-center">
                Book a Sector Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/services/"
                className="btn-outline justify-center text-center"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)' }}>
                Explore Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
