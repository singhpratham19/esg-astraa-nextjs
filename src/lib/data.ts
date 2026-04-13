export const NAV_LINKS = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'About', href: '/about/' },
]

export const SERVICES = [
  {
    slug: 'esg-strategy-transformation',
    title: 'ESG Strategy & Transformation',
    shortTitle: 'Strategy & Transformation',
    icon: 'Target',
    desc: 'Core advisory on ESG integration into corporate strategy, materiality assessment, roadmap development',
    hero: 'From regulatory obligation to competitive advantage — we architect ESG strategies that create lasting business value.',
    sections: [
      { title: 'Strategic Framing', content: 'ESG is no longer a compliance checkbox. It is a business value driver that shapes access to capital, talent retention, and market positioning. Our advisory begins with reframing ESG as a strategic lever.' },
      { title: 'Our Framework', content: 'Our proprietary 4-phase approach — Assess → Strategise → Implement → Measure — provides a structured pathway from current-state diagnosis to measurable ESG outcomes.' },
      { title: 'Service Components', items: ['Materiality Assessment', 'ESG Maturity Benchmarking', 'Roadmap Development', 'Stakeholder Engagement', 'Integration into Corporate Governance'] },
      { title: 'Data-Backed Methodology', content: 'Our engagements are powered by proprietary analytics and benchmarking tools that provide quantified baselines, peer comparisons, and progress tracking.' },
    ],
    cta: 'Book a Strategy Workshop',
  },
  {
    slug: 'brsr-esg-compliance',
    title: 'BRSR & ESG Compliance',
    shortTitle: 'BRSR & Compliance',
    icon: 'FileCheck',
    desc: 'SEBI BRSR reporting, GRI, ISSB, CSRD, TCFD alignment, regulatory readiness, disclosure management',
    hero: 'Building sustainable reporting architectures — not just ticking boxes. We make compliance a foundation for strategic value.',
    sections: [
      { title: 'Regulatory Context', content: 'SEBI\'s BRSR mandate covers the top 1000 listed companies. BRSR Core extends to value chain partners. Exporters face CSRD exposure. We navigate this complexity with precision.' },
      { title: 'Service Components', items: ['BRSR Gap Analysis', 'Data Collection Architecture', 'Report Drafting & Assurance-Readiness', 'Reasonable Assurance Support', 'Multi-Framework Alignment'] },
      { title: 'Multi-Framework Alignment', content: 'We map BRSR disclosures to GRI, ISSB, TCFD, CDP, and SASB frameworks — ensuring a single reporting effort satisfies multiple stakeholder requirements.' },
      { title: 'Technology-Enhanced Delivery', content: 'Our proprietary data management capabilities streamline multi-framework reporting, reducing data collection cycles and improving disclosure accuracy.' },
    ],
    cta: 'Download BRSR Readiness Checklist',
  },
  {
    slug: 'carbon-advisory-credits',
    title: 'Carbon Advisory & Credits',
    shortTitle: 'Carbon & Credits',
    icon: 'Leaf',
    desc: 'Carbon footprint assessment, credit sourcing and brokerage, VCS/Gold Standard project development, CBAM readiness',
    hero: 'Deep carbon market expertise combined with proprietary measurement capabilities. Strategic advisory, not transactional brokerage.',
    sections: [
      { title: 'Market Context', content: 'Voluntary and compliance carbon markets are converging. India\'s Carbon Credit Trading Scheme (CCTS) framework and EU CBAM create new compliance obligations and value opportunities.' },
      { title: 'Service Components', items: ['Carbon Footprint Assessment (Scope 1/2/3)', 'Carbon Credit Sourcing & Brokerage (VCS, Gold Standard)', 'Carbon Reduction Roadmap', 'CBAM Readiness Advisory', 'Project Development Support'] },
      { title: 'Methodology', content: 'Our proprietary emissions modelling engine powers precise Scope 1/2/3 accounting, verified against international standards and emission factor databases.' },
      { title: 'Market Intelligence', content: 'We provide ongoing intelligence on carbon price trends, credit vintage quality, and registry landscapes to inform strategic credit portfolio decisions.' },
    ],
    cta: 'Request Carbon Footprint Assessment',
  },
  {
    slug: 'esg-risk-governance',
    title: 'ESG Risk & Governance',
    shortTitle: 'Risk & Governance',
    icon: 'Shield',
    desc: 'Board advisory, ESG risk frameworks, due diligence, supply chain ESG assessment, governance structures',
    hero: 'Governance-first ESG advisory. We speak the language of risk committees, board oversight, and fiduciary responsibility.',
    sections: [
      { title: 'Governance Imperative', content: 'ESG risk governance is a board-level priority driven by regulatory mandates, investor expectations, and supply chain scrutiny. We help boards build robust ESG oversight structures.' },
      { title: 'Service Components', items: ['ESG Risk Assessment Framework', 'Board ESG Committee Advisory', 'Supply Chain ESG Due Diligence', 'ESG Integration into ERM', 'Stakeholder Mapping & Engagement'] },
      { title: 'Framework Alignment', content: 'We integrate ESG risk management with COSO ERM frameworks, TCFD risk categories, and SEBI governance requirements for comprehensive coverage.' },
    ],
    cta: 'Book Governance Advisory Session',
  },
  {
    slug: 'sustainable-finance',
    title: 'Sustainable Finance Advisory',
    shortTitle: 'Sustainable Finance',
    icon: 'TrendingUp',
    desc: 'Green bond advisory, ESG-linked lending strategy, taxonomy alignment, investor engagement',
    hero: 'Where sustainability strategy meets capital markets. Sophisticated, finance-literate advisory for ESG-linked capital structures.',
    sections: [
      { title: 'Market Context', content: 'Green bonds, sustainability-linked loans, India\'s Green Taxonomy, and RBI climate risk guidance are reshaping how capital flows. We help organisations access and structure green finance.' },
      { title: 'Service Components', items: ['Green Bond Framework Design', 'ESG-Linked Lending Strategy', 'Taxonomy Alignment Assessment', 'Investor ESG Engagement', 'Climate Risk Financial Modelling'] },
      { title: 'Data Advantage', content: 'Our analytics capabilities enable precise climate risk quantification for financial decision-making, supporting credible green finance frameworks.' },
    ],
    cta: 'Request Green Finance Assessment',
  },
  {
    slug: 'esg-data-intelligence',
    title: 'ESG Data & Intelligence',
    shortTitle: 'Data & Intelligence',
    icon: 'BarChart3',
    desc: 'Proprietary benchmarking, KPI tracking, industry analytics — positioned as consulting support',
    hero: 'Our consulting engagements are powered by proprietary data infrastructure that separates insight from assumption.',
    sections: [
      { title: 'Capabilities', items: ['ESG Benchmarking Engine', 'Industry KPI Tracking', 'Peer Comparison Analytics', 'Custom Dashboard Reporting'] },
      { title: 'How It Works', content: 'Within every engagement, our data capabilities provide the analytical backbone — from baseline measurement to progress tracking and peer benchmarking.' },
      { title: 'Methodology', content: 'Rigorous data sourcing, validation, and analytical frameworks ensure every recommendation is grounded in verifiable evidence and industry-calibrated benchmarks.' },
    ],
    cta: 'Book Consultation to Experience Our Capabilities',
  },
]

export const INDUSTRIES = [
  { slug: 'manufacturing', title: 'Manufacturing', icon: 'Factory', desc: 'BRSR compliance, supply chain ESG, emission reduction, energy transition', focus: ['BRSR Implementation', 'Supply Chain ESG Assessment', 'Scope 1/2 Emission Reduction', 'Energy Transition Roadmaps', 'Circular Economy Advisory'] },
  { slug: 'energy-power', title: 'Energy & Power', icon: 'Zap', desc: 'Carbon accounting, renewable integration, regulatory compliance, net-zero pathways', focus: ['Carbon Footprint Assessment', 'Renewable Integration Planning', 'CCTS Compliance', 'Net-Zero Pathway Design', 'CBAM Readiness'] },
  { slug: 'healthcare-pharma', title: 'Healthcare & Pharma', icon: 'Heart', desc: 'Clinical waste management, social impact metrics, BRSR for pharma', focus: ['Clinical Waste ESG Assessment', 'Social Impact Measurement', 'BRSR for Pharma', 'Supplier ESG Due Diligence'] },
  { slug: 'infrastructure-real-estate', title: 'Infrastructure & Real Estate', icon: 'Building2', desc: 'Green building certification, project-level ESG, ESIA', focus: ['Green Building Certification', 'Project-Level ESG Assessment', 'Environmental & Social Impact Assessment', 'Sustainable Construction Advisory'] },
  { slug: 'financial-services', title: 'Financial Services', icon: 'Landmark', desc: 'ESG-linked lending, portfolio alignment, RBI climate risk', focus: ['ESG-Linked Lending Strategy', 'Portfolio Climate Alignment', 'RBI Climate Risk Compliance', 'Green Finance Framework Design'] },
  { slug: 'mining-metals', title: 'Mining & Metals', icon: 'Pickaxe', desc: 'Environmental remediation, community impact, SDF compliance', focus: ['Environmental Remediation', 'Community Impact Assessment', 'SDF Compliance Advisory', 'Mine Closure ESG Planning'] },
  { slug: 'it-technology', title: 'IT & Technology', icon: 'Cpu', desc: 'Scope 3 emissions, supply chain transparency, CSRD preparation', focus: ['Scope 3 Emissions Accounting', 'Supply Chain Transparency', 'CSRD Preparation', 'Data Centre Sustainability'] },
  { slug: 'agriculture-food', title: 'Agriculture & Food', icon: 'Wheat', desc: 'Sustainable sourcing, water footprint, deforestation-free supply chains', focus: ['Sustainable Sourcing Strategy', 'Water Footprint Assessment', 'Deforestation-Free Supply Chains', 'Regenerative Agriculture Advisory'] },
]

export const INSIGHTS_CATEGORIES = [
  { slug: 'whitepapers', title: 'Whitepapers', desc: 'Gated, in-depth research documents on ESG topics' },
  { slug: 'industry-reports', title: 'Industry Reports', desc: 'Sector-specific ESG landscape and compliance analysis' },
  { slug: 'esg-benchmarks', title: 'ESG Benchmarks', desc: 'Data-driven performance benchmarks by industry and geography' },
  { slug: 'thought-leadership', title: 'Thought Leadership', desc: 'Expert commentary, regulatory updates, trend analysis' },
  { slug: 'regulatory-updates', title: 'Regulatory Updates', desc: 'SEBI, RBI, MCA, EU CBAM, CSRD compliance tracking' },
]

export const CASE_STUDIES = [
  { slug: 'manufacturing-brsr', title: 'BRSR Implementation for a Leading Manufacturer', industry: 'Manufacturing', outcome: '100% BRSR compliance achieved in 90 days', metrics: ['90-day implementation', '142 disclosure points addressed', '₹2.3Cr value preservation'], challenge: 'A top-500 listed manufacturer faced SEBI BRSR deadline with zero reporting infrastructure. Board pressure demanded rapid compliance without disrupting operations.', approach: 'We deployed our 4-phase methodology — conducting a gap analysis, building data collection architecture, drafting disclosures, and preparing for assurance — all within 90 days.', result: 'Full BRSR compliance achieved on schedule with audit-ready documentation. The reporting infrastructure continues to serve annual disclosure cycles.' },
  { slug: 'energy-carbon-credits', title: 'Carbon Credit Strategy for an Energy Company', industry: 'Energy & Power', outcome: '₹4.8Cr carbon credit portfolio value generated', metrics: ['1.2M tCO2e measured', '₹4.8Cr credit value', 'VCS certification achieved'], challenge: 'A renewable energy developer needed to monetise carbon reductions across their wind farm portfolio while preparing for India\'s CCTS framework.', approach: 'Our carbon advisory team conducted Scope 1/2 assessment, identified eligible reduction projects, structured VCS documentation, and facilitated credit registration.', result: 'Successfully registered carbon credits generating ₹4.8Cr in additional revenue, with a clear pathway for CCTS compliance readiness.' },
  { slug: 'finance-green-bond', title: 'Green Bond Framework for a Financial Institution', industry: 'Financial Services', outcome: '₹500Cr green bond issuance facilitated', metrics: ['₹500Cr bond size', '3 framework certifications', '12-week delivery'], challenge: 'A mid-tier NBFC sought to issue its first green bond but lacked the sustainability framework, taxonomy alignment, and investor-facing ESG narrative.', approach: 'We designed the green bond framework aligned to ICMA Green Bond Principles, India\'s Sovereign Green Bond Framework, and CBI standards — then prepared the investor presentation.', result: 'Successful ₹500Cr issuance with oversubscription, establishing the institution as a credible green finance participant.' },
]

export const TEAM_MEMBERS = [
  { name: 'Lead Consultant', role: 'ESG Strategy & BRSR', bio: 'Deep expertise in ESG strategy, BRSR implementation, and corporate sustainability advisory across emerging markets.' },
  { name: 'Carbon Markets Lead', role: 'Carbon Advisory & Credits', bio: 'Specialised in voluntary and compliance carbon markets, CCTS framework, and project-level carbon accounting.' },
  { name: 'Governance Advisor', role: 'ESG Risk & Governance', bio: 'Board-level ESG governance advisory, risk framework design, and supply chain ESG due diligence.' },
  { name: 'Finance Specialist', role: 'Sustainable Finance', bio: 'Green bond structuring, ESG-linked lending, taxonomy alignment, and climate risk financial modelling.' },
]

export const IMPACT_NUMBERS = [
  { value: '50+', label: 'Organisations Advised' },
  { value: '1.2M', label: 'tCO2e Emissions Measured' },
  { value: '₹500Cr+', label: 'Green Finance Facilitated' },
  { value: '142', label: 'BRSR Disclosures Delivered' },
]

export const FRAMEWORKS = ['GRI', 'ISSB', 'BRSR', 'TCFD', 'CSRD', 'CDP', 'SASB']
