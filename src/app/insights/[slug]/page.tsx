import Link from 'next/link'
import { INSIGHTS_CATEGORIES } from '@/lib/data'
import { notFound } from 'next/navigation'

const CATEGORY_CONTENT: Record<string, { title: string; items: { title: string; desc: string; date: string }[] }> = {
  'case-studies': {
    title: 'Case Studies',
    items: [
      { title: 'BRSR Implementation for a Leading Manufacturer', desc: 'Full BRSR compliance achieved in 90 days — from zero reporting infrastructure to audit-ready documentation.', date: 'March 2026' },
      { title: 'Carbon Credit Strategy for an Energy Company', desc: '₹4.8Cr carbon credit portfolio value generated through VCS certification and CCTS readiness.', date: 'January 2026' },
      { title: 'Green Bond Framework for a Financial Institution', desc: '₹500Cr green bond issuance facilitated with ICMA alignment and investor-ready ESG narrative.', date: 'November 2025' },
    ],
  },
  whitepapers: {
    title: 'Whitepapers',
    items: [
      { title: 'ESG in Indian Manufacturing: From Compliance to Competitive Advantage', desc: 'A 40-page deep dive into BRSR implementation, carbon reduction strategies, and supply chain ESG for manufacturers.', date: 'March 2026' },
      { title: 'ESG Transformation in India\'s Energy Sector', desc: 'Net-zero pathways, renewable integration economics, and regulatory compliance for energy companies.', date: 'December 2025' },
    ],
  },
  'industry-reports': {
    title: 'Industry Reports',
    items: [
      { title: 'Carbon Markets in India: CCTS Framework & Opportunities', desc: 'Comprehensive analysis of India\'s carbon credit trading scheme and voluntary market dynamics.', date: 'February 2026' },
      { title: 'ESG Landscape in Indian Financial Services', desc: 'RBI climate risk guidance, ESG-linked lending trends, and portfolio alignment strategies.', date: 'November 2025' },
    ],
  },
  'esg-benchmarks': {
    title: 'ESG Benchmarks',
    items: [
      { title: 'Manufacturing Sector ESG Performance Benchmark 2025', desc: 'Peer comparison metrics across BRSR disclosures, emission intensities, and governance scores.', date: 'January 2026' },
    ],
  },
  'thought-leadership': {
    title: 'Thought Leadership',
    items: [
      { title: 'The State of Green Finance in India', desc: 'Expert commentary on taxonomy development, sovereign green bonds, and ESG-linked capital.', date: 'November 2025' },
      { title: 'Why ESG Governance Is a Board-Level Priority', desc: 'Analysis of regulatory pressure, investor expectations, and the governance imperative.', date: 'October 2025' },
    ],
  },
  'regulatory-updates': {
    title: 'Regulatory Updates',
    items: [
      { title: 'SEBI BRSR Core: Value Chain Implications', desc: 'Practical guidance on BRSR Core requirements and supply chain ESG management.', date: 'January 2026' },
      { title: 'EU CBAM: What Indian Exporters Need to Know', desc: 'A guide to the Carbon Border Adjustment Mechanism and its impact on Indian exports.', date: 'October 2025' },
    ],
  },
}

export function generateStaticParams() {
  return INSIGHTS_CATEGORIES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = INSIGHTS_CATEGORIES.find((c) => c.slug === params.slug)
  return { title: cat ? `${cat.title} — Insights — ESG Astraa` : 'Insights — ESG Astraa' }
}

export default function InsightsCategoryPage({ params }: { params: { slug: string } }) {
  const cat = INSIGHTS_CATEGORIES.find((c) => c.slug === params.slug)
  const content = CATEGORY_CONTENT[params.slug]
  if (!cat || !content) return notFound()

  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <Link href="/insights/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline">← All Insights</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6">{content.title}</h1>
          <p className="text-lg text-slate-body/70 max-w-xl">{cat.desc}</p>
        </div>
      </section>
      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6 space-y-6">
          {content.items.map((item) => (
            <div key={item.title} className="card-hover rounded-2xl border border-slate-border/60 bg-white p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div>
                  <h2 className="font-display font-bold text-xl text-base mb-2">{item.title}</h2>
                  <p className="text-sm text-slate-body/60">{item.desc}</p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-xs text-slate-body/30">{item.date}</span>
                  <button className="btn-primary text-sm !py-2.5 !px-5">Download</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
