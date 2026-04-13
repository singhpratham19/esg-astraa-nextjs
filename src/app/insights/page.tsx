import Link from 'next/link'
import { INSIGHTS_CATEGORIES } from '@/lib/data'
import { ArrowRight, BookOpen } from 'lucide-react'

export const metadata = { title: 'Insights — ESG Astraa' }

const FEATURED_INSIGHTS = [
  { slug: 'esg-manufacturing-whitepaper', category: 'Whitepaper', title: 'ESG in Indian Manufacturing: From Compliance to Competitive Advantage', desc: 'An in-depth 40-page analysis examining how India\'s manufacturing sector can leverage BRSR compliance, carbon reduction, and supply chain ESG to build competitive moats.', date: 'March 2026', gated: true },
  { slug: 'carbon-markets-india', category: 'Industry Report', title: 'Carbon Markets in India: CCTS Framework, Opportunities & Strategy', desc: 'Comprehensive analysis of India\'s Carbon Credit Trading Scheme, voluntary market dynamics, and corporate carbon strategy recommendations.', date: 'February 2026', gated: true },
  { slug: 'brsr-core-value-chain', category: 'Regulatory Update', title: 'SEBI BRSR Core: Value Chain Implications for Top 150 Listed Companies', desc: 'Practical guidance on BRSR Core requirements, timeline, and their impact on supply chain ESG management and vendor compliance.', date: 'January 2026', gated: false },
  { slug: 'esg-energy-sector', category: 'Whitepaper', title: 'ESG Transformation in India\'s Energy Sector: Net-Zero Pathways', desc: 'Strategic analysis of decarbonisation pathways, renewable integration economics, and regulatory compliance for Indian energy companies.', date: 'December 2025', gated: true },
  { slug: 'green-finance-india', category: 'Thought Leadership', title: 'The State of Green Finance in India: Taxonomy, Bonds & ESG-Linked Lending', desc: 'Expert commentary on India\'s green finance ecosystem, sovereign green bonds, and the evolving landscape of ESG-linked capital.', date: 'November 2025', gated: false },
  { slug: 'eu-cbam-india-exporters', category: 'Regulatory Update', title: 'EU CBAM: What Indian Exporters Need to Know', desc: 'A practical guide to the EU Carbon Border Adjustment Mechanism and its implications for Indian manufacturers and exporters.', date: 'October 2025', gated: false },
]

export default function InsightsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <span className="section-label mb-4 inline-block">Insights</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-2xl">
            Research, Analysis & Thought Leadership
          </h1>
          <p className="text-lg text-slate-body/70 max-w-xl leading-relaxed">
            Insight-led advisory starts with rigorous research. Explore our whitepapers, industry reports, benchmarks, and regulatory updates.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-slate-border/60 bg-white sticky top-[72px] z-40">
        <div className="max-w-site mx-auto px-6 py-4 flex flex-wrap gap-3">
          <span className="text-xs font-display font-semibold px-4 py-2 rounded-full bg-violet text-white cursor-pointer">All</span>
          {INSIGHTS_CATEGORIES.map((c) => (
            <span key={c.slug} className="text-xs font-display font-semibold px-4 py-2 rounded-full bg-slate-bg text-slate-body/60 hover:bg-violet/8 hover:text-violet cursor-pointer transition-colors">
              {c.title}
            </span>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6">
          {/* Hero Card */}
          <div className="card-hover rounded-2xl border border-slate-border/60 bg-white overflow-hidden mb-8">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-violet/12 to-coral/12 flex items-center justify-center">
                <BookOpen size={140} className="text-violet/30" strokeWidth={0.5} />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-display font-semibold text-coral tracking-wider uppercase">{FEATURED_INSIGHTS[0].category}</span>
                  {FEATURED_INSIGHTS[0].gated && <span className="text-[10px] font-semibold bg-violet/8 text-violet px-2 py-0.5 rounded">Gated</span>}
                </div>
                <h2 className="font-display text-2xl font-bold text-base mb-4 leading-snug">{FEATURED_INSIGHTS[0].title}</h2>
                <p className="text-sm text-slate-body/70 leading-relaxed mb-6">{FEATURED_INSIGHTS[0].desc}</p>
                <div className="flex items-center gap-4">
                  <button className="btn-primary text-sm">Download Whitepaper <ArrowRight size={14} /></button>
                  <span className="text-xs text-slate-body/40">{FEATURED_INSIGHTS[0].date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_INSIGHTS.slice(1).map((a) => (
              <div key={a.slug} className="card-hover rounded-2xl border border-slate-border/60 bg-white overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-violet/10 to-coral/10 flex items-center justify-center">
                  <BookOpen size={80} className="text-violet/20" strokeWidth={0.5} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-display font-semibold text-coral tracking-wider uppercase">{a.category}</span>
                    {a.gated && <span className="text-[10px] font-semibold bg-violet/8 text-violet px-2 py-0.5 rounded">Gated</span>}
                  </div>
                  <h3 className="font-display font-bold text-base leading-snug mb-3">{a.title}</h3>
                  <p className="text-sm text-slate-body/60 leading-relaxed mb-4 line-clamp-3">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-violet font-display font-semibold cursor-pointer hover:underline">Read More →</span>
                    <span className="text-xs text-slate-body/30">{a.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-base text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Subscribe to Regulatory Updates</h2>
          <p className="text-white/40 text-sm mb-8 max-w-md mx-auto">SEBI, RBI, MCA, EU CBAM, and CSRD compliance tracking — delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Work email" className="w-full sm:flex-1 px-5 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet/50" />
            <button className="btn-primary bg-coral hover:bg-coral-light whitespace-nowrap !py-3">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}
