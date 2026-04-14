import Link from 'next/link'
import { INDUSTRIES } from '@/lib/data'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  Heart,
  Landmark,
  Mountain,
  type LucideIcon,
  Wheat,
  Zap,
} from 'lucide-react'

export const metadata = {
  title: 'Industries Served | ESG Advisory for Manufacturing, Finance, Energy, Healthcare',
  description:
    'Explore ESG Astraa industry expertise across manufacturing, energy, healthcare, infrastructure, financial services, mining, technology, and agriculture.',
}

const INDUSTRY_META: Record<string, {
  icon: LucideIcon
  color: string
  tagline: string
  metrics: { val: string; lbl: string }[]
}> = {
  'manufacturing': {
    icon: Factory,
    color: '#2E8AEA',
    tagline: 'BRSR, supply chain ESG, Scope 1 and 2 reduction, and energy transition for listed and export-oriented manufacturers.',
    metrics: [
      { val: '17%', lbl: 'Of Indian GDP' },
      { val: '40%', lbl: 'India GHG share' },
      { val: 'CBAM', lbl: 'Export pressure' },
    ],
  },
  'energy-power': {
    icon: Zap,
    color: '#0D9488',
    tagline: 'Carbon accounting, CCTS readiness, renewable integration, and transition planning for energy businesses.',
    metrics: [
      { val: '500GW', lbl: '2030 RE target' },
      { val: '45%', lbl: 'Intensity goal' },
      { val: 'CCTS', lbl: 'Carbon market' },
    ],
  },
  'healthcare-pharma': {
    icon: Heart,
    color: '#7516EA',
    tagline: 'Clinical waste, patient impact, responsible sourcing, and BRSR support for healthcare and pharma.',
    metrics: [
      { val: '1000+', lbl: 'BRSR entities' },
      { val: 'BMW', lbl: 'Waste rules' },
      { val: 'Global', lbl: 'Supply scrutiny' },
    ],
  },
  'infrastructure-real-estate': {
    icon: Building2,
    color: '#1A6DC4',
    tagline: 'Project ESG, green building priorities, ESIA support, and sustainable construction advisory.',
    metrics: [
      { val: 'NIP', lbl: 'Project pipeline' },
      { val: '40%', lbl: 'Built env CO2' },
      { val: 'ESIA', lbl: 'Project review' },
    ],
  },
  'financial-services': {
    icon: Landmark,
    color: '#2E8AEA',
    tagline: 'ESG-linked lending, portfolio climate alignment, RBI climate risk, and green finance support.',
    metrics: [
      { val: 'RBI', lbl: 'Climate guidance' },
      { val: 'IFRS S2', lbl: 'Disclosure shift' },
      { val: 'PCAF', lbl: 'Portfolio focus' },
    ],
  },
  'mining-metals': {
    icon: Mountain,
    color: '#92400E',
    tagline: 'Environmental remediation, community impact, closure planning, and SDF-related ESG priorities.',
    metrics: [
      { val: 'SDF', lbl: 'Sector requirement' },
      { val: '15%', lbl: 'India GHG share' },
      { val: 'High', lbl: 'Licence risk' },
    ],
  },
  'it-technology': {
    icon: Cpu,
    color: '#7516EA',
    tagline: 'Scope 3 accounting, CSRD preparation, supply chain transparency, and data centre sustainability.',
    metrics: [
      { val: '85%', lbl: 'Scope 3 share' },
      { val: 'CSRD', lbl: 'Client pressure' },
      { val: 'RE100', lbl: 'Energy focus' },
    ],
  },
  'agriculture-food': {
    icon: Wheat,
    color: '#16A34A',
    tagline: 'Sourcing, water, traceability, and deforestation-related ESG priorities for agri and food businesses.',
    metrics: [
      { val: '18%', lbl: 'India GHG share' },
      { val: '80%', lbl: 'Freshwater use' },
      { val: 'EUDR', lbl: 'Trade pressure' },
    ],
  },
}

export default function IndustriesPage() {
  return (
    <main>
      <section className="bg-white pt-24 pb-0 overflow-hidden border-b border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch min-h-[70vh]">
            <div className="flex flex-col justify-center py-16 pr-6">
              <span className="section-label mb-6">Industry Expertise</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-[#0D1B3E] leading-[1.06] mb-6 tracking-tight">
                Sector specific ESG advisory
              </h1>
              <p className="text-lg text-slate-body/70 leading-relaxed mb-8 max-w-xl">
                Generic advice misses what matters. Our sector teams focus on the operating realities, regulations, and stakeholder expectations that shape ESG decisions in each industry.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  'Sector materiality and regulation mapped to real business priorities',
                  'Relevant service pathways for each industry instead of generic ESG menus',
                  'Industry-specific support across manufacturing, finance, energy, technology, and more',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#2E8AEA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-body/75 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center py-16">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { val: '8', lbl: 'Industry Specialisations' },
                  { val: '50+', lbl: 'Sector Engagements' },
                  { val: '7', lbl: 'Framework Alignments' },
                  { val: '100%', lbl: 'India Focused Advisory' },
                ].map((stat) => (
                  <div key={stat.lbl} className="rounded-xl border border-slate-border/60 bg-slate-bg p-8">
                    <div className="font-display text-3xl font-bold text-[#0D1B3E] mb-1">{stat.val}</div>
                    <div className="text-xs text-slate-body/45 leading-tight">{stat.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-5 mb-14">
            <div className="flex-1">
              <span className="section-label mb-5 inline-flex">All Sectors</span>
              <h2 className="font-display text-4xl font-bold text-[#0D1B3E] mt-3">
                Our industry practices
              </h2>
            </div>
            <p className="text-slate-body/50 text-sm max-w-xs leading-relaxed">
              Each practice connects sector context with the most relevant ESG advisory services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {INDUSTRIES.map((industry) => {
              const meta = INDUSTRY_META[industry.slug]
              const Icon = meta.icon
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}/`}
                  className="group bg-white rounded-xl border border-slate-border/60 hover:shadow-lg hover:border-transparent hover:-translate-y-1 transition-all duration-300 no-underline flex flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center text-white" style={{ background: meta.color }}>
                      <Icon size={20} />
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 flex-1">
                      {meta.metrics.map((metric) => (
                        <div key={metric.lbl} className="bg-slate-bg rounded-lg px-2 py-2 text-center">
                          <div className="font-bold text-[10px] leading-tight" style={{ color: meta.color }}>{metric.val}</div>
                          <div className="text-[8px] text-slate-body/40 leading-tight mt-0.5">{metric.lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-slate-body/55 leading-relaxed mb-5 flex-1">{meta.tagline}</p>

                  <div className="space-y-1.5 mb-5">
                    {industry.focus.slice(0, 2).map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={11} style={{ color: meta.color }} className="flex-shrink-0" />
                        <span className="text-[11px] text-slate-body/60 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-3 transition-all" style={{ color: meta.color }}>
                    Explore Practice <ArrowRight size={11} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-bg border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label mb-5 inline-flex">Our Approach</span>
              <h2 className="font-display text-4xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-6">
                Why industry specific advisory matters
              </h2>
              <p className="text-slate-body/65 leading-relaxed mb-8">
                A manufacturing BRSR program and a financial services ESG integration effort do not look the same. The material issues, regulatory obligations, and value levers are different. Our industry pages are built around those differences.
              </p>

              <Link href="/contact/" className="btn-primary inline-flex">
                Discuss Your Sector <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-0 divide-y divide-slate-border/40 border border-slate-border/40 rounded-xl overflow-hidden bg-white">
              {[
                { num: '01', title: 'Sector Materiality Mapping', desc: 'We identify the ESG factors that genuinely affect your sector and operating model.' },
                { num: '02', title: 'Regulation Calibrated Advisory', desc: 'We focus on the standards and regulatory themes that are most relevant in that industry.' },
                { num: '03', title: 'Peer And Market Context', desc: 'Our recommendations are shaped by how boards, investors, lenders, and customers look at that sector.' },
                { num: '04', title: 'Value Beyond Compliance', desc: 'We show where ESG work can support risk management, capital access, operations, and credibility.' },
              ].map((item) => (
                <div key={item.num} className="p-6 hover:bg-slate-bg/50 transition-colors group">
                  <div className="flex gap-5 items-start">
                    <span className="text-xs font-bold text-[#2E8AEA] flex-shrink-0 pt-0.5">{item.num}</span>
                    <div>
                      <h4 className="font-bold text-[#0D1B3E] mb-1 text-sm group-hover:text-[#2E8AEA] transition-colors">{item.title}</h4>
                      <p className="text-xs text-slate-body/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-5 inline-flex justify-center">How We Engage</span>
            <h2 className="font-display text-4xl font-bold text-[#0D1B3E] mt-3 mb-4">
              A sector engagement, step by step
            </h2>
            <p className="text-slate-body/55 leading-relaxed">
              Every engagement follows our four phase methodology, adapted to the operating reality and regulatory context of the sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Sector Diagnostic', desc: 'We review maturity, material issues, and disclosure quality against sector needs.', deliverable: 'Sector materiality map and peer benchmark' },
              { num: '02', title: 'Strategy And Roadmap', desc: 'We shape a roadmap calibrated to the sector timeline and management priorities.', deliverable: 'Board ready roadmap and action plan' },
              { num: '03', title: 'Implementation', desc: 'We support data architecture, governance, drafting, and operating workflows.', deliverable: 'Working ESG process with owners' },
              { num: '04', title: 'Measure And Report', desc: 'We support KPI tracking, reporting, and stakeholder communication.', deliverable: 'Dashboard, review pack, and reporting support' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-slate-border/50 rounded-xl p-8 hover:shadow-xl hover:border-[#2E8AEA]/30 transition-all group flex flex-col">
                <span className="font-display text-4xl font-bold text-[#2E8AEA] mb-6">{item.num}</span>
                <h4 className="font-display font-bold text-lg text-[#0D1B3E] mb-3">{item.title}</h4>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-5 flex-1">{item.desc}</p>
                <div className="pt-4 border-t border-slate-border/40">
                  <p className="text-xs text-[#00338D] font-semibold leading-relaxed">{item.deliverable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-slate-body/35 flex-shrink-0">
              Advisory aligned to
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3 items-center">
              {['SEBI BRSR', 'GRI Standards', 'ISSB / IFRS S1 & S2', 'TCFD', 'EU CSRD', 'CDP', 'SASB', 'ICMA Green Bond Principles'].map((framework) => (
                <span key={framework} className="text-sm font-semibold text-slate-body/45">{framework}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#5BA8EF] block mb-4">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Discuss your sector ESG priorities
              </h2>
              <p className="text-white/45 leading-relaxed">
                Our sector specialists can help you identify the most relevant challenges, service pathways, and reporting priorities for your industry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/contact/" className="btn-primary justify-center text-center">
                Book a Sector Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services/"
                className="btn-outline justify-center text-center"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)' }}
              >
                Explore Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
