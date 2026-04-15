import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = { title: 'Our Methodology — ESG Astraa' }

const PHASES = [
  {
    num: '01',
    title: 'Assess',
    tagline: 'Understand before you act.',
    desc: 'Every engagement begins with a rigorous baseline — not assumptions. We measure current ESG performance, identify regulatory gaps, and benchmark against industry peers using our proprietary data infrastructure.',
    points: [
      'Baseline ESG performance measurement across material topics',
      'Gap analysis against BRSR, GRI, ISSB, TCFD, and CSRD requirements',
      'Materiality assessment with board, management, and external stakeholder input',
      'Industry peer benchmarking using proprietary sector datasets',
      'Regulatory exposure mapping: SEBI, MCA, RBI, CCTS, and international requirements',
    ],
    deliverables: ['ESG Baseline Report', 'Materiality Matrix', 'Regulatory Gap Analysis', 'Peer Benchmarking Dashboard'],
  },
  {
    num: '02',
    title: 'Strategise',
    tagline: 'Roadmap aligned to business, not just compliance.',
    desc: 'Strategy is only useful if it connects ESG performance to commercial objectives. We build data-informed roadmaps that map targets to regulatory timelines, investor expectations, and competitive positioning.',
    points: [
      'ESG roadmap aligned to 3-year and 5-year business strategy cycles',
      'Target-setting against science-based and regulatory benchmarks',
      'Prioritisation of initiatives by impact, cost, and stakeholder value',
      'Resource, budget, and capability planning across business units',
      'Stakeholder communication and engagement strategy',
    ],
    deliverables: ['ESG Strategic Roadmap', 'Target Framework', 'Stakeholder Engagement Plan', 'Resource Allocation Model'],
  },
  {
    num: '03',
    title: 'Implement',
    tagline: 'Execution, not just recommendations.',
    desc: 'We stay through implementation — building the data systems, governance structures, and reporting capabilities required to deliver on strategy. Our team works alongside yours, not just in front of it.',
    points: [
      'ESG data collection architecture and internal reporting infrastructure',
      'Governance structure design: board committees, management accountability',
      'Policy framework drafting: ESG, climate, human rights, supplier code',
      'BRSR, GRI, ISSB, and TCFD disclosure drafting and assurance preparation',
      'Internal capability building: training, workshops, and system handover',
    ],
    deliverables: ['Data Architecture Design', 'Governance Framework', 'ESG Policy Suite', 'Assurance-Ready Disclosure Draft'],
  },
  {
    num: '04',
    title: 'Measure',
    tagline: 'Outcomes that are tracked, not assumed.',
    desc: 'We close the loop with continuous monitoring, performance tracking, and disclosure management. ESG performance should be measured as rigorously as financial performance — and reported with the same discipline.',
    points: [
      'Continuous KPI monitoring against approved targets and external benchmarks',
      'Annual and interim ESG disclosure management and submission support',
      'Regulatory update integration: new SEBI, RBI, or international requirements',
      'Third-party assurance readiness and audit support',
      'Investor and stakeholder ESG inquiry response management',
    ],
    deliverables: ['KPI Monitoring Dashboard', 'Annual Disclosure Package', 'Regulatory Update Tracker', 'Assurance Support File'],
  },
]

export default function MethodologyPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#0D1B3E' }} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #2E8AEA 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-site mx-auto px-6 relative">
          <Link href="/about/" className="text-sm text-white/40 font-medium mb-6 inline-flex items-center gap-1 no-underline hover:text-white/70 transition-colors">
            ← About ESG Astraa
          </Link>
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-5 mt-4">Our Methodology</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.06] mb-6 max-w-3xl">
            A framework built for measurable, auditable outcomes.
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl">
            Our 4-phase advisory framework is repeatable, rigorous, and designed to deliver results that survive regulatory scrutiny — not just internal sign-off.
          </p>
        </div>
      </section>

      {/* Phase Navigator */}
      <section className="py-4 bg-[#F8F9FC] border-b border-slate-200/60 sticky top-[72px] z-40">
        <div className="max-w-site mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {PHASES.map((p) => (
              <a key={p.num} href={`#phase-${p.num}`}
                className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-slate-500 hover:text-[#0D1B3E] hover:bg-white transition-all border-r border-slate-200/60 last:border-r-0 whitespace-nowrap no-underline group">
                <span className="text-xs font-bold text-slate-300 group-hover:text-[#2E8AEA] transition-colors">{p.num}</span>
                <span>{p.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      {PHASES.map((phase, i) => (
        <section key={phase.num} id={`phase-${phase.num}`}
          className={`py-24 border-b border-slate-200/50 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FC]'}`}>
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display font-bold text-7xl leading-none"
                    style={{ WebkitTextStroke: '1px #2E8AEA20', color: 'transparent' }}>
                    {phase.num}
                  </span>
                  <div>
                    <h2 className="font-display text-3xl font-bold text-[#0D1B3E]">{phase.title}</h2>
                    <p className="text-sm text-[#2E8AEA] font-semibold mt-1">{phase.tagline}</p>
                  </div>
                </div>
                <p className="text-slate-600/70 leading-relaxed mb-8">{phase.desc}</p>

                {/* Deliverables */}
                <div className="border border-slate-200/60 p-6">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 mb-4">Key Deliverables</p>
                  <div className="grid grid-cols-2 gap-2">
                    {phase.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }} />
                        <span className="text-xs text-slate-600/65 font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Points */}
              <div className="space-y-4">
                {phase.points.map((pt) => (
                  <div key={pt} className="flex gap-4 items-start p-5 bg-white border border-slate-200/50">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <p className="text-sm text-[#0D1B3E] leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How it differs */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">Why It Works</p>
            <h2 className="font-display text-3xl font-bold text-[#0D1B3E]">What makes this different</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200/40">
            {[
              {
                title: 'Data before strategy',
                desc: 'Most ESG projects begin with framework selection. We begin with measurement. You cannot strategise without accurate baseline data — so we build data infrastructure first.',
              },
              {
                title: 'Regulatory integration by design',
                desc: 'SEBI BRSR, RBI climate disclosures, CCTS readiness — Indian regulatory obligations are mapped into every phase, not added on at the end when it is too late to change course.',
              },
              {
                title: 'Assurance-ready from the start',
                desc: 'Third-party assurance is increasingly required. We structure every data collection process and disclosure draft with assurance in mind — so there are no surprises when auditors arrive.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-9 group hover:bg-[#0D1B3E] transition-colors cursor-default">
                <div className="w-8 h-[2px] mb-6 transition-colors"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                <h3 className="font-display font-bold text-[#0D1B3E] group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600/55 group-hover:text-white/55 leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Experience our methodology firsthand</h2>
            <p className="text-white/50 text-sm">Book a consultation to understand how our framework applies to your organisation.</p>
          </div>
          <Link href="/contact/"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
            Book Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
