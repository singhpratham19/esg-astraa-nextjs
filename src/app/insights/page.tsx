import Link from 'next/link'
import Image from 'next/image'
import { INSIGHTS_CATEGORIES } from '@/lib/data'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'

export const metadata = { title: 'Insights — ESG Astraa' }

const FEATURED_INSIGHTS = [
  {
    slug: 'esg-manufacturing-whitepaper',
    category: 'Whitepaper',
    title: 'ESG in Indian Manufacturing: From Compliance to Competitive Advantage',
    desc: 'An in-depth 40-page analysis examining how India\'s manufacturing sector can leverage BRSR compliance, carbon reduction, and supply chain ESG to build competitive moats.',
    date: 'March 2026',
    gated: true,
    img: '/images/industry-manufacturing.jpg',
  },
  {
    slug: 'carbon-markets-india',
    category: 'Industry Report',
    title: 'Carbon Markets in India: CCTS Framework, Opportunities & Strategy',
    desc: 'Comprehensive analysis of India\'s Carbon Credit Trading Scheme, voluntary market dynamics, and corporate carbon strategy recommendations.',
    date: 'February 2026',
    gated: true,
    img: '/images/carbon-forest.jpg',
  },
  {
    slug: 'brsr-core-value-chain',
    category: 'Regulatory Update',
    title: 'SEBI BRSR Core: Value Chain Implications for Top 150 Listed Companies',
    desc: 'Practical guidance on BRSR Core requirements, timeline, and their impact on supply chain ESG management and vendor compliance.',
    date: 'January 2026',
    gated: false,
    img: '/images/report-writing.jpg',
  },
  {
    slug: 'esg-energy-sector',
    category: 'Whitepaper',
    title: 'ESG Transformation in India\'s Energy Sector: Net-Zero Pathways',
    desc: 'Strategic analysis of decarbonisation pathways, renewable integration economics, and regulatory compliance for Indian energy companies.',
    date: 'December 2025',
    gated: true,
    img: '/images/green-energy.jpg',
  },
  {
    slug: 'green-finance-india',
    category: 'Thought Leadership',
    title: 'The State of Green Finance in India: Taxonomy, Bonds & ESG-Linked Lending',
    desc: 'Expert commentary on India\'s green finance ecosystem, sovereign green bonds, and the evolving landscape of ESG-linked capital.',
    date: 'November 2025',
    gated: false,
    img: '/images/service-finance.jpg',
  },
  {
    slug: 'eu-cbam-india-exporters',
    category: 'Regulatory Update',
    title: 'EU CBAM: What Indian Exporters Need to Know',
    desc: 'A practical guide to the EU Carbon Border Adjustment Mechanism and its implications for Indian manufacturers and exporters.',
    date: 'October 2025',
    gated: false,
    img: '/images/industry-energy.jpg',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Whitepaper': '#2E8AEA',
  'Industry Report': '#7516EA',
  'Regulatory Update': '#0D9488',
  'Thought Leadership': '#9B30FF',
}

export default function InsightsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white border-b border-slate-border/50 pt-32 pb-16">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl">
            <span className="section-label mb-6 inline-flex">Research &amp; Insights</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#0D1B3E] leading-[1.06] mb-5 tracking-tight mt-3">
              Research, Analysis &amp;<br />Thought Leadership
            </h1>
            <p className="text-lg text-slate-body/65 leading-relaxed">
              Insight-led advisory starts with rigorous research. Explore our whitepapers, industry reports, benchmarks, and regulatory updates.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-b border-slate-border/50 bg-white sticky top-[72px] z-40">
        <div className="max-w-site mx-auto px-6 py-4 flex flex-wrap gap-2">
          <span className="text-xs font-bold px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ background: 'linear-gradient(135deg,#2E8AEA,#7516EA)' }}>All</span>
          {INSIGHTS_CATEGORIES.map((c) => (
            <span key={c.slug}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-slate-bg text-slate-body/60 hover:text-[#2E8AEA] hover:bg-[#EEF5FF] cursor-pointer transition-colors border border-slate-border/50">
              {c.title}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Hero Card */}
      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-border/60 hover:shadow-xl transition-all card-hover">
            <div className="relative min-h-[320px]">
              <Image
                src={FEATURED_INSIGHTS[0].img}
                alt={FEATURED_INSIGHTS[0].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/50 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white px-3 py-1.5 rounded-full"
                  style={{ background: CATEGORY_COLORS[FEATURED_INSIGHTS[0].category] || '#2E8AEA' }}>
                  {FEATURED_INSIGHTS[0].category}
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-wider uppercase"
                  style={{ color: CATEGORY_COLORS[FEATURED_INSIGHTS[0].category] }}>
                  {FEATURED_INSIGHTS[0].category}
                </span>
                {FEATURED_INSIGHTS[0].gated && (
                  <span className="text-[10px] font-bold bg-[#EEF5FF] text-[#2E8AEA] px-2.5 py-0.5 rounded-full">Gated Report</span>
                )}
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0D1B3E] mb-4 leading-snug">{FEATURED_INSIGHTS[0].title}</h2>
              <p className="text-sm text-slate-body/65 leading-relaxed mb-8">{FEATURED_INSIGHTS[0].desc}</p>
              <div className="flex items-center gap-4">
                <button className="btn-primary text-sm">
                  <Download size={14} /> Download Whitepaper
                </button>
                <span className="text-xs text-slate-body/40">{FEATURED_INSIGHTS[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_INSIGHTS.slice(1).map((a) => (
              <div key={a.slug}
                className="group rounded-2xl border border-slate-border/60 bg-white overflow-hidden card-hover hover:border-[#2E8AEA]/30 hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-white px-3 py-1.5 rounded-full"
                      style={{ background: CATEGORY_COLORS[a.category] || '#2E8AEA' }}>
                      {a.category}
                    </span>
                  </div>
                  {a.gated && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-bold bg-white/90 text-[#0D1B3E] px-2.5 py-1 rounded-full">Gated</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-[#0D1B3E] leading-snug mb-3 group-hover:text-[#2E8AEA] transition-colors">{a.title}</h3>
                  <p className="text-sm text-slate-body/60 leading-relaxed mb-5 line-clamp-2">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E8AEA] cursor-pointer">
                      {a.gated ? <><Download size={12} /> Download</> : <>Read More <ArrowUpRight size={12} /></>}
                    </span>
                    <span className="text-xs text-slate-body/35">{a.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1a2f5e 100%)' }}>
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Subscribe to Regulatory Updates</h2>
            <p className="text-white/45 text-sm">SEBI, RBI, MCA, EU CBAM, and CSRD compliance tracking — delivered to your inbox monthly.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <input type="email" placeholder="Work email address"
              className="w-full sm:w-64 px-5 py-3.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#2E8AEA]/50" />
            <button className="btn-primary whitespace-nowrap">Subscribe <ArrowRight size={14} /></button>
          </div>
        </div>
      </section>
    </main>
  )
}
