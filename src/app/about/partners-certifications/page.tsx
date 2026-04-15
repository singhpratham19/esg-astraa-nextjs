import Link from 'next/link'
import { FRAMEWORKS } from '@/lib/data'
import { ArrowRight, CheckCircle, Award, Globe, BookOpen, Building2, Leaf, BarChart3, Shield } from 'lucide-react'

export const metadata = { title: 'Partners & Certifications — ESG Astraa' }

const FRAMEWORK_DETAILS = [
  {
    code: 'GRI',
    name: 'Global Reporting Initiative',
    desc: 'The GRI Standards are the most widely adopted global framework for sustainability reporting. Our team is trained in GRI 2021 Universal Standards and Sector Standards, and we have advised organisations across manufacturing, financial services, and energy on GRI-aligned disclosure.',
    tags: ['Disclosure Framework', 'Universal Standards', 'Sector Standards'],
    color: '#2E8AEA',
  },
  {
    code: 'ISSB',
    name: 'International Sustainability Standards Board',
    desc: 'IFRS S1 and S2 represent the emerging global baseline for sustainability-related financial disclosures. As Indian regulators align BRSR Core with ISSB frameworks, we prepare organisations for this transition — combining financial reporting expertise with sustainability domain knowledge.',
    tags: ['IFRS S1', 'IFRS S2', 'Climate Disclosures'],
    color: '#7516EA',
  },
  {
    code: 'BRSR',
    name: 'Business Responsibility & Sustainability Report',
    desc: 'SEBI\'s BRSR framework is the primary sustainability disclosure mandate for listed Indian companies. We have extensive experience across BRSR Core (top 150 companies) and the broader BRSR format — including the BRSR Core KPIs, supply chain disclosures, and assurance requirements.',
    tags: ['SEBI Mandate', 'BRSR Core', 'Supply Chain'],
    color: '#10B981',
  },
  {
    code: 'TCFD',
    name: 'Task Force on Climate-related Financial Disclosures',
    desc: 'TCFD has become the baseline for climate-related financial risk disclosure globally. Our advisory integrates TCFD recommendations into governance, risk management, strategy, and metrics & targets — aligning with both RBI climate risk guidelines and international investor expectations.',
    tags: ['Climate Risk', 'Financial Disclosure', 'Scenario Analysis'],
    color: '#F59E0B',
  },
  {
    code: 'CSRD',
    name: 'Corporate Sustainability Reporting Directive',
    desc: 'The EU\'s CSRD affects Indian companies with significant EU operations or supply chain relationships. We advise on double materiality assessment, ESRS alignment, and CSRD readiness for Indian companies navigating extraterritorial obligations.',
    tags: ['EU Regulation', 'Double Materiality', 'ESRS'],
    color: '#EF4444',
  },
  {
    code: 'CDP',
    name: 'Carbon Disclosure Project',
    desc: 'CDP questionnaires on climate change, water security, and forests are scrutinised by institutional investors. We assist organisations in achieving higher CDP scores through data quality improvement, disclosure strategy, and response preparation.',
    tags: ['Climate', 'Water', 'Forests'],
    color: '#06B6D4',
  },
]

const PARTNERSHIPS = [
  {
    icon: <Leaf size={20} />,
    title: 'Carbon Registry Partnerships',
    desc: 'We maintain active working relationships with leading carbon registries to support verification, registration, and trading of carbon credits for our advisory clients.',
    partners: [
      { name: 'Verra (VCS)', detail: 'Verified Carbon Standard — the world\'s most widely used voluntary carbon market program. We support project developers and buyers in VCS-aligned credit generation and procurement.' },
      { name: 'Gold Standard', detail: 'Supporting organisations in registering high-quality carbon offset projects that meet both climate and sustainable development criteria under Gold Standard certification.' },
      { name: 'BEE India (PAT Scheme)', detail: 'Advisory on India\'s Perform, Achieve and Trade (PAT) scheme — helping energy-intensive industries navigate energy saving certificates (ESCerts) and compliance obligations.' },
    ],
    color: '#10B981',
  },
  {
    icon: <Building2 size={20} />,
    title: 'Industry Body Affiliations',
    desc: 'Active engagement with Indian and international industry bodies allows ESG Astraa to contribute to policy development and stay ahead of evolving regulatory frameworks.',
    partners: [
      { name: 'CII — Confederation of Indian Industry', detail: 'Working with CII on ESG policy advocacy, sustainability guidance for member organisations, and industry benchmarking initiatives across manufacturing and infrastructure sectors.' },
      { name: 'FICCI — Federation of Indian Chambers', detail: 'Participation in FICCI\'s sustainability task forces and contribution to national policy frameworks on climate risk, green finance, and corporate reporting standards.' },
      { name: 'ASSOCHAM', detail: 'Advisory contributions to ASSOCHAM committees on ESG compliance, BRSR implementation guidance, and capacity building for India Inc\'s sustainability transition.' },
    ],
    color: '#2E8AEA',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Academic & Research Partnerships',
    desc: 'Collaboration with research institutions ensures our methodology reflects the latest in sustainability science, measurement techniques, and emerging regulatory frameworks.',
    partners: [
      { name: 'IIM Research Collaborations', detail: 'Joint research initiatives with Indian management institutes on ESG disclosure quality, sustainability governance effectiveness, and the financial materiality of ESG factors.' },
      { name: 'IIT Environmental Institutes', detail: 'Technical collaboration on lifecycle assessment (LCA), emissions modelling, and environmental impact quantification methodologies used in our carbon advisory work.' },
      { name: 'Global Sustainability Think-Tanks', detail: 'Engagement with international sustainability research organisations on emerging frameworks, ISSB convergence, and biodiversity disclosure standards.' },
    ],
    color: '#7516EA',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Data & Technology Alliances',
    desc: 'Our proprietary data infrastructure is supported by partnerships with data providers and technology platforms that enable benchmarking, emissions calculation, and KPI tracking.',
    partners: [
      { name: 'ESG Data Providers', detail: 'Working relationships with leading ESG data and ratings providers to benchmark client performance and integrate market intelligence into advisory recommendations.' },
      { name: 'Emissions Calculation Platforms', detail: 'Integration partnerships with internationally recognised Scope 1, 2, and 3 emissions calculation platforms to ensure methodology consistency and auditability.' },
      { name: 'Regulatory Intelligence Services', detail: 'Subscriptions to regulatory monitoring services tracking SEBI, MCA, RBI, EU CSRD, SEC climate rules, and global ESG reporting developments in real time.' },
    ],
    color: '#F59E0B',
  },
]

export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#0D1B3E' }} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #7516EA 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-site mx-auto px-6 relative">
          <Link href="/about/" className="text-sm text-white/40 font-medium mb-6 inline-flex items-center gap-1 no-underline hover:text-white/70 transition-colors">
            ← About ESG Astraa
          </Link>
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-5 mt-4">Partners & Certifications</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.06] mb-6 max-w-3xl">
            Credibility built on frameworks, registries, and relationships.
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl">
            Our advisory credibility is reinforced by framework expertise, registry partnerships, industry body affiliations, and research collaborations — giving every engagement access to the depth and networks that matter.
          </p>
        </div>
      </section>

      {/* Framework Stats */}
      <section className="py-14 bg-white border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200/40">
            {[
              { stat: '6+', label: 'Major Frameworks', sub: 'GRI, ISSB, BRSR, TCFD, CSRD, CDP' },
              { stat: '50+', label: 'Organisations Advised', sub: 'Across all framework mandates' },
              { stat: '8', label: 'Industry Sectors', sub: 'Sector-specific expertise' },
              { stat: '4', label: 'Registry Partnerships', sub: 'VCS, Gold Standard, BEE, others' },
            ].map((item) => (
              <div key={item.label} className="bg-white px-8 py-8 text-center">
                <div className="font-display text-4xl font-bold mb-1"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {item.stat}
                </div>
                <p className="text-sm font-bold text-[#0D1B3E] mb-1">{item.label}</p>
                <p className="text-xs text-slate-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Certifications */}
      <section className="py-24 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">Framework Expertise</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E]">Framework Certifications & Alignments</h2>
            <p className="text-slate-600/60 mt-3 max-w-lg text-sm">
              We maintain active expertise across all major sustainability reporting frameworks — not shallow familiarity, but deep capability built through hundreds of client engagements.
            </p>
          </div>

          {/* Framework Bar */}
          <div className="flex flex-wrap gap-3 mb-14">
            {FRAMEWORKS.map((f) => (
              <div key={f} className="px-5 py-3 border border-slate-200/60 bg-white">
                <span className="font-bold text-sm text-[#0D1B3E] tracking-wide">{f}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FRAMEWORK_DETAILS.map((fw) => (
              <div key={fw.code} className="bg-white border border-slate-200/60 p-8 group hover:border-[#2E8AEA]/30 transition-all hover:shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 px-3 py-1.5 rounded font-display font-bold text-sm border"
                    style={{ color: fw.color, borderColor: fw.color + '30', background: fw.color + '10' }}>
                    {fw.code}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D1B3E] text-sm leading-tight">{fw.name}</h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {fw.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600/60 leading-relaxed">{fw.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="py-24 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">Partnership Ecosystem</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E]">Our Network & Affiliations</h2>
            <p className="text-slate-600/60 mt-3 max-w-lg text-sm">
              Strategic relationships across carbon registries, industry bodies, academic institutions, and data providers that strengthen every engagement.
            </p>
          </div>

          <div className="space-y-10">
            {PARTNERSHIPS.map((category) => (
              <div key={category.title} className="border border-slate-200/60 overflow-hidden">
                {/* Category Header */}
                <div className="flex items-start gap-4 p-8 border-b border-slate-200/60 bg-[#F8F9FC]">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: category.color + '15', color: category.color }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D1B3E]">{category.title}</h3>
                    <p className="text-sm text-slate-600/60 mt-1 leading-relaxed">{category.desc}</p>
                  </div>
                </div>

                {/* Partners */}
                <div className="grid md:grid-cols-3 gap-px bg-slate-200/40">
                  {category.partners.map((partner) => (
                    <div key={partner.name} className="bg-white p-7">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle size={13} style={{ color: category.color }} className="flex-shrink-0" />
                        <h4 className="font-semibold text-sm text-[#0D1B3E]">{partner.name}</h4>
                      </div>
                      <p className="text-xs text-slate-600/55 leading-relaxed">{partner.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#2E8AEA] mb-4">Advisory Board</p>
            <h2 className="font-display text-3xl font-bold text-[#0D1B3E]">Independent Advisory Oversight</h2>
            <p className="text-slate-600/60 mt-3 max-w-lg text-sm">
              ESG Astraa's advisory board provides independent oversight on methodology quality, regulatory positioning, and strategic direction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200/40">
            {[
              { role: 'Regulatory Advisory', desc: 'Former regulatory officials and policy experts advising on SEBI, RBI, and MCA compliance alignment and regulatory evolution.', icon: <Shield size={18} /> },
              { role: 'Academic Advisory', desc: 'Sustainability science and climate economics academics ensuring methodology reflects the latest in measurement and reporting research.', icon: <BookOpen size={18} /> },
              { role: 'Industry Advisory', desc: 'Senior industry practitioners from manufacturing, financial services, and infrastructure sectors advising on practical implementation.', icon: <Globe size={18} /> },
            ].map((board) => (
              <div key={board.role} className="bg-white p-9">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, #2E8AEA15, #7516EA15)', color: '#2E8AEA' }}>
                  {board.icon}
                </div>
                <h3 className="font-display font-bold text-[#0D1B3E] mb-3">{board.role}</h3>
                <p className="text-sm text-slate-600/55 leading-relaxed">{board.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Note */}
      <section className="py-14 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="flex items-start gap-5 max-w-3xl">
            <Award size={24} className="text-[#2E8AEA] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-[#0D1B3E] mb-2">Professional Accreditation</h3>
              <p className="text-sm text-slate-600/65 leading-relaxed">
                Our advisory team holds professional qualifications including Chartered Accountancy (ICAI), Chartered Financial Analyst (CFA), sustainability certifications (GRI, TCFD), and domain-specific credentials. CA firm backing ensures financial advisory meets the highest professional standards under ICAI regulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">Interested in partnership?</h2>
            <p className="text-white/50 text-sm">Explore collaboration opportunities with ESG Astraa — advisory partnerships, research collaborations, or co-delivery arrangements.</p>
          </div>
          <Link href="/contact/"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
