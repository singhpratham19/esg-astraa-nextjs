import Link from 'next/link'
import Image from 'next/image'
import { INDUSTRIES } from '@/lib/data'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = { title: 'Industries — ESG Astraa' }

const REGULATORY_FOCUS: Record<string, string[]> = {
  'manufacturing': ['BRSR compliance', 'Supply chain ESG', 'Energy efficiency'],
  'energy-power': ['Net-zero pathways', 'Renewable integration', 'CCTS framework'],
  'healthcare-pharma': ['Clinical waste ESG', 'Social impact metrics', 'BRSR for pharma'],
  'infrastructure-real-estate': ['Green building cert', 'ESIA compliance', 'Project-level ESG'],
  'financial-services': ['ESG-linked lending', 'Portfolio alignment', 'RBI climate risk'],
  'mining-metals': ['Environmental remediation', 'Community impact', 'SDF compliance'],
  'it-technology': ['Scope 3 emissions', 'Supply chain transparency', 'CSRD preparation'],
  'agriculture-food': ['Sustainable sourcing', 'Water footprint', 'Deforestation-free'],
}

const INDUSTRY_ICONS: Record<string, string> = {
  'manufacturing': '🏭',
  'energy-power': '⚡',
  'healthcare-pharma': '🏥',
  'infrastructure-real-estate': '🏢',
  'financial-services': '🏦',
  'mining-metals': '⛏️',
  'it-technology': '💻',
  'agriculture-food': '🌾',
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="relative bg-[#00338D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/city-skyline.jpg"
            alt="Industry and business skyline"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00338D]/95 to-[#00338D]/60" />
        </div>
        <div className="max-w-site mx-auto px-6 py-32 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-[#0091DA]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">Industry Expertise</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-6">
              Sector-Specific ESG Advisory<br />Tailored to Your Industry
            </h1>
            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
              Each sector faces distinct ESG challenges, regulatory requirements, and stakeholder expectations. Our industry-specialist teams deliver focused advisory that addresses your material issues.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-3 gap-8 md:gap-12 max-w-xl">
            {[
              { number: '8', label: 'Industry Specialisations' },
              { number: '50+', label: 'Sector Engagements' },
              { number: '7', label: 'Framework Alignments' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs text-white/45">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <span className="section-label mb-5 inline-block">Our Sectors</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4">
              Eight Industry Specialisations
            </h2>
            <p className="text-slate-body/60 mt-3 max-w-xl">
              Deep domain expertise across sectors driving India&apos;s ESG transition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-border/40">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                className="group bg-white p-8 hover:bg-[#F5F7FA] transition-colors no-underline relative"
              >
                <div className="text-4xl mb-5">{INDUSTRY_ICONS[ind.slug]}</div>
                <h2 className="font-display font-bold text-base text-[#1A1A2E] group-hover:text-[#00338D] transition-colors mb-2">
                  {ind.title}
                </h2>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-5">{ind.desc}</p>
                <div className="space-y-2 mb-6">
                  {(REGULATORY_FOCUS[ind.slug] || []).slice(0, 3).map((focus) => (
                    <div key={focus} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-body/65">{focus}</span>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[#00338D] text-xs font-semibold group-hover:gap-3 transition-all">
                  Explore Advisory <ArrowRight size={12} />
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00338D] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Specialisation — Photo Split */}
      <section className="bg-[#F5F7FA] border-y border-slate-border/50">
        <div className="max-w-site mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[400px] lg:min-h-0">
              <Image
                src="/images/report-writing.jpg"
                alt="ESG industry advisory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#00338D]/25" />
            </div>
            <div className="px-10 md:px-16 py-16 lg:py-20 flex flex-col justify-center">
              <span className="section-label mb-5 inline-block">Our Approach</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-4 mb-10">
                Why Industry Expertise Matters
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Regulatory Clarity', desc: 'Deep understanding of sector-specific requirements — BRSR, CSRD, CCTS, RBI guidelines, and industry standards.' },
                  { title: 'Material Issue Identification', desc: 'We identify ESG factors that truly impact your sector, not generic sustainability metrics that miss the point.' },
                  { title: 'Peer Benchmarking', desc: 'Compare your ESG performance against industry peers using our proprietary data, calibrated to your sector.' },
                  { title: 'Value Creation Pathways', desc: 'ESG isn\'t just risk mitigation — we identify how your sector creates value through sustainable operations.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <CheckCircle size={18} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#1A1A2E] text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-body/65 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="w-8 h-[3px] bg-[#0091DA] mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Discuss Your Sector&apos;s ESG Strategy
            </h2>
            <p className="text-white/40 text-sm">
              Our sector-specialist advisory team is ready to understand your unique challenges and opportunities.
            </p>
          </div>
          <Link href="/contact/" className="btn-primary text-sm whitespace-nowrap flex-shrink-0">
            Book a Sector Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
