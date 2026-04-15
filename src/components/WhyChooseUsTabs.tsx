'use client'

import { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TAB_DATA = [
  {
    label: 'ESG Strategy',
    heading: 'Strategy built on data, not assumptions.',
    desc: 'We bring sector-calibrated ESG strategy grounded in proprietary benchmarking — not generic frameworks applied uniformly. Every engagement is designed for your regulatory context, stakeholder expectations, and competitive landscape.',
    points: [
      'Proprietary assessment frameworks across 8 industry sectors',
      'BRSR, ISSB, CSRD, TCFD, and GRI — all frameworks, one integrated team',
      '50+ organisations advised with fully customised (never templated) engagements',
      'Regulatory intelligence: SEBI, MCA, RBI, and CCTS in one workstream',
    ],
    cta: { label: 'ESG Strategy Services', href: '/services/strategy-advisory/' },
  },
  {
    label: 'Carbon Advisory',
    heading: 'Rigorous carbon accounting. Actionable decarbonisation.',
    desc: 'Carbon strategy requires measurement precision before it requires ambition. We quantify emissions accurately, identify abatement opportunities, and build the infrastructure companies need to track and report progress over time.',
    points: [
      '1.2M tCO₂e measured and third-party verified across client portfolios',
      'Scope 1, 2, and 3 quantification with internal data collection infrastructure',
      'India CCTS readiness: voluntary and compliance carbon market advisory',
      'Decarbonisation roadmap aligned to science-based targets and regulatory timelines',
    ],
    cta: { label: 'Carbon Advisory Services', href: '/services/strategy-advisory/#carbon-advisory' },
  },
  {
    label: 'Sustainable Finance',
    heading: 'ESG finance structured with financial discipline.',
    desc: 'Our sustainable finance team is led by Chartered Accountants with capital markets and IFRS expertise. We bring the same rigour to sustainability finance that banks and investors apply to financial transactions.',
    points: [
      '₹500Cr+ green finance structured and facilitated across client mandates',
      'CA-led team with deep capital markets, structured finance, and IFRS expertise',
      'Green bond, SLL, and SLB structuring aligned to ICMA and India Green Taxonomy',
      'Transaction ESG due diligence for PE, M&A, and lender mandates',
    ],
    cta: { label: 'Finance & Risk Services', href: '/services/finance-risk/' },
  },
  {
    label: 'Governance',
    heading: 'Governance frameworks boards can act on.',
    desc: 'ESG governance fails when it stays in the sustainability team. We build governance structures that integrate with board responsibilities, management reporting, and regulatory obligations across SEBI, the Companies Act, and BRSR requirements.',
    points: [
      'Board-ready BRSR and ESG disclosure with assurance readiness built in',
      'Governance gap analysis and ESG policy framework design for listed companies',
      'Stakeholder materiality assessments aligned to GRI, ISSB, and SEBI requirements',
      'SEBI LODR and Companies Act 2013 compliance integration into ESG governance',
    ],
    cta: { label: 'Governance Services', href: '/services/governance-social/' },
  },
]

export default function WhyChooseUsTabs() {
  const [active, setActive] = useState(0)
  const tab = TAB_DATA[active]

  return (
    <section className="py-28 bg-white border-y border-slate-border/50">
      <div className="max-w-site mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label mb-5 inline-flex">Why Choose ESG Astraa</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B3E] leading-tight mt-3">
            The difference across every service area
          </h2>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap gap-0 border-b border-slate-border/60 mb-14">
          {TAB_DATA.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`px-6 py-4 text-sm font-semibold tracking-wide transition-all border-b-2 -mb-px ${
                active === i
                  ? 'border-[#2E8AEA] text-[#2E8AEA]'
                  : 'border-transparent text-slate-body/50 hover:text-[#0D1B3E] hover:border-slate-border'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Narrative */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B3E] leading-snug mb-5">
              {tab.heading}
            </h3>
            <p className="text-slate-body/65 leading-relaxed mb-8 text-base">
              {tab.desc}
            </p>
            <Link
              href={tab.cta.href}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] hover:gap-3 transition-all"
            >
              {tab.cta.label} <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — Points */}
          <div className="space-y-5">
            {tab.points.map((pt) => (
              <div key={pt} className="flex gap-4 items-start p-5 rounded-xl bg-[#F8F9FC] border border-slate-border/50">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}
                >
                  <CheckCircle size={13} className="text-white" />
                </div>
                <p className="text-sm text-[#0D1B3E] leading-relaxed font-medium">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
