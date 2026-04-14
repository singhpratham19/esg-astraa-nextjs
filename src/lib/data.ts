type ContentSection = {
  title: string
  content?: string
  items?: string[]
}

type Service = {
  slug: string
  title: string
  shortTitle: string
  icon: string
  desc: string
  hero: string
  sections: ContentSection[]
  idealFor: string[]
  deliverables: string[]
  cta: string
}

type Industry = {
  slug: string
  title: string
  icon: string
  desc: string
  overview: string
  focus: string[]
  challenges: string[]
  opportunities: string[]
  regulatory: string[]
  engagementHighlights: string[]
  relevantServiceSlugs: string[]
}

export const NAV_LINKS = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'About', href: '/about/' },
]

export const SERVICES: Service[] = [
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
      { title: 'Typical Engagement Triggers', items: ['Board or promoter mandate to formalise ESG strategy', 'Need to prioritise sustainability investments across business units', 'Investor pressure for a clearer ESG narrative and KPI framework', 'Post-compliance requirement to convert reporting into a business roadmap'] },
      { title: 'Data-Backed Methodology', content: 'Our engagements are powered by proprietary analytics and benchmarking tools that provide quantified baselines, peer comparisons, and progress tracking.' },
      { title: 'Business Outcomes', content: 'Clients leave with a decision-ready ESG agenda that links material issues to capital allocation, governance ownership, operating priorities, and measurable value creation milestones.' },
    ],
    idealFor: ['Listed companies building a first formal ESG strategy', 'Growth-stage businesses preparing for investor diligence', 'Promoter-led enterprises aligning sustainability with expansion plans', 'Leadership teams that need a practical roadmap instead of high-level messaging'],
    deliverables: ['Materiality matrix with stakeholder input summary', 'ESG maturity assessment and peer benchmark snapshot', '12-to-36-month roadmap with phased initiatives and owners', 'Board-ready strategy deck with KPI architecture'],
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
      { title: 'Where Programmes Usually Break Down', items: ['Fragmented data ownership across HR, EHS, procurement, and finance', 'Inconsistent evidence trails for assured disclosures', 'No operating calendar for recurring quarterly and annual data collection', 'Manual drafting processes that create review delays and version-control gaps'] },
      { title: 'Technology-Enhanced Delivery', content: 'Our proprietary data management capabilities streamline multi-framework reporting, reducing data collection cycles and improving disclosure accuracy.' },
      { title: 'What Good Looks Like', content: 'A robust compliance programme produces repeatable workflows, traceable source documents, clearly owned data points, and disclosures that withstand internal review, assurance scrutiny, and investor follow-up.' },
    ],
    idealFor: ['Listed entities preparing for first-time BRSR or BRSR Core requirements', 'Companies with compressed disclosure timelines and limited internal ESG bandwidth', 'Export-oriented businesses aligning Indian reporting with global frameworks', 'Teams moving from consultant-led report writing to internal operating discipline'],
    deliverables: ['Disclosure gap register mapped to BRSR principles and leadership indicators', 'Data request templates and evidence library structure', 'Drafted and reviewed disclosure narratives with management inputs', 'Assurance-readiness tracker for controls, owners, and supporting documents'],
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
      { title: 'Priority Use Cases', items: ['Establishing a verified baseline for net-zero or decarbonisation commitments', 'Evaluating carbon credits as a bridge while operational reductions scale', 'Preparing exporters for embedded-emissions disclosure and CBAM exposure', 'Screening reduction projects for registry eligibility and commercial viability'] },
      { title: 'Market Intelligence', content: 'We provide ongoing intelligence on carbon price trends, credit vintage quality, and registry landscapes to inform strategic credit portfolio decisions.' },
      { title: 'Decision Support', content: 'Our advisory clarifies where to reduce, where to offset, how to assess credit quality, and how to communicate carbon claims without creating greenwashing or procurement risks.' },
    ],
    idealFor: ['Manufacturers and exporters needing auditable emissions measurement', 'Energy, infrastructure, and industrial businesses evaluating carbon projects', 'Corporate sustainability teams building internal carbon governance processes', 'Finance leaders assessing cost and risk implications of carbon exposure'],
    deliverables: ['Scope 1, 2, and priority Scope 3 emissions inventory', 'Marginal abatement and decarbonisation opportunity assessment', 'Carbon credit procurement or project-screening memo', 'CBAM and carbon-market readiness roadmap'],
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
      { title: 'Key Risk Themes We Address', items: ['Climate transition and physical risks affecting operations and financing', 'Human-rights and labour issues in extended supply chains', 'Disclosure governance, internal controls, and accountability gaps', 'Reputational and stakeholder escalation risks linked to ESG incidents'] },
      { title: 'Operating Model Design', content: 'We help management define committee charters, reporting cadences, escalation thresholds, risk ownership, and board information flows so ESG oversight becomes a standing management discipline.' },
    ],
    idealFor: ['Boards formalising ESG oversight and committee structures', 'Risk teams integrating ESG into enterprise risk management', 'Procurement-led organisations facing value chain scrutiny', 'Management teams preparing for deeper lender, investor, or customer diligence'],
    deliverables: ['ESG risk register integrated with enterprise risk categories', 'Board and management governance charters with role clarity', 'Supply chain screening methodology and due-diligence questionnaires', 'Escalation and reporting protocol for material ESG issues'],
    cta: 'Book Governance Advisory Session',
  },
  {
    slug: 'sustainable-finance',
    title: 'Sustainable Finance Advisory',
    shortTitle: 'Sustainable Finance',
    icon: 'TrendingUp',
    desc: 'Green bond structuring, ESG-linked lending, taxonomy alignment, transaction ESG due diligence — led by a CA-backed team with deep capital markets expertise.',
    hero: 'Where sustainability strategy meets capital markets. CA-led, finance-first advisory for ESG-linked capital structures, green bonds, and transaction due diligence.',
    sections: [
      { title: 'CA-Backed Financial Expertise', content: 'Our sustainable finance practice is led by Chartered Accountants with deep capital markets, structured finance, and IFRS/Ind AS expertise. We translate ESG into the language of deal rooms, credit committees, and investor mandates — not just sustainability reports.' },
      { title: 'Market Context', content: 'Green bonds, sustainability-linked loans, India\'s Sovereign Green Bond Framework, and RBI climate risk guidance are reshaping how capital flows. The ISSB\'s IFRS S1 and S2 standards are now entering Indian regulatory thinking, creating new disclosure and measurement obligations for financial institutions.' },
      { title: 'Service Components', items: ['Green Bond & SLB Framework Design (ICMA-aligned)', 'ESG-Linked Lending KPI Structuring', 'India Green Taxonomy & IFRS S2 Alignment', 'Transaction ESG Due Diligence (M&A, PE, VC)', 'Climate Risk Financial Modelling (TCFD scenarios)', 'BRSR & ISSB Alignment for Financial Institutions', 'Investor ESG Engagement & Reporting', 'Impact Measurement & Management (IMM)'] },
      { title: 'Transaction ESG Due Diligence', content: 'For PE firms, strategic acquirers, and lenders, we conduct pre-deal ESG due diligence that identifies material ESG risks and opportunities — covering governance, environmental liabilities, labour practices, and climate exposure. Our CA background ensures findings are financially quantified, not just qualitative checklists.' },
      { title: 'Green Finance Instruments We Support', items: ['Green Bonds (ICMA Green Bond Principles, India Sovereign Framework, CBI)', 'Sustainability-Linked Bonds and Loans (KPI design, target calibration, verification)', 'Social and Sustainability Bonds', 'ESG-linked working capital and capex credit facilities', 'Impact-linked instruments for DFI and development finance transactions'] },
      { title: 'IFRS S1 & S2 Readiness', content: 'With ISSB standards entering regulatory discourse globally and India aligning its disclosure framework, financial institutions need early preparation. We provide gap assessments, governance design, and disclosure support for IFRS S1 (general sustainability) and S2 (climate-related) requirements.' },
      { title: 'Capital Market Outcomes', content: 'Well-structured sustainable finance programmes strengthen credibility with lenders and investors, reduce execution friction, and help management defend why ESG-linked capital structures are financially material — with numbers, not just narratives.' },
    ],
    idealFor: ['NBFCs, banks, and corporates evaluating labelled financing options', 'PE and VC firms integrating ESG due diligence into deal processes', 'Treasury and finance teams needing sustainability KPIs that withstand scrutiny', 'Issuers preparing for second-party opinion and investor diligence', 'Financial institutions navigating IFRS S2 and RBI climate risk expectations', 'CFOs and Boards translating climate strategy into capital allocation decisions'],
    deliverables: ['Green or sustainability-linked finance framework (ICMA-aligned)', 'Transaction ESG due diligence report with financially quantified risk findings', 'Eligibility and India Green Taxonomy alignment assessment', 'KPI and target-setting note with assurance and governance controls', 'IFRS S1/S2 gap assessment and readiness roadmap', 'Investor-facing ESG and climate-risk briefing materials'],
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
      { title: 'Common Analytics Questions', items: ['How do we compare with peers on emissions, diversity, and governance metrics?', 'Which KPIs matter most for our sector and reporting obligations?', 'Where are the data-quality gaps preventing confident disclosure?', 'How should leadership track ESG progress between reporting cycles?'] },
      { title: 'Decision Utility', content: 'The output is not just a dashboard. It is management intelligence that helps leadership prioritise interventions, allocate resources, and track whether ESG initiatives are actually improving performance.' },
    ],
    idealFor: ['Companies with fragmented ESG spreadsheets and no single source of truth', 'Leadership teams that need board-ready performance views', 'Sustainability functions seeking benchmark-led target setting', 'Compliance programmes that need stronger data integrity and tracking'],
    deliverables: ['ESG KPI framework tailored to business model and sector', 'Peer benchmark pack with variance commentary', 'Management dashboard or reporting templates', 'Data-quality improvement recommendations and governance model'],
    cta: 'Book Consultation to Experience Our Capabilities',
  },
]

export const INDUSTRIES: Industry[] = [
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: 'Factory',
    desc: 'BRSR compliance, supply chain ESG, emission reduction, energy transition',
    overview: 'Manufacturers sit at the center of India’s ESG transition because they face direct scrutiny on energy intensity, worker safety, supply chain practices, and export-market compliance. We help teams convert those pressures into disciplined operating improvements and credible disclosures.',
    focus: ['BRSR Implementation', 'Supply Chain ESG Assessment', 'Scope 1/2 Emission Reduction', 'Energy Transition Roadmaps', 'Circular Economy Advisory'],
    challenges: ['Fragmented plant-level environmental and safety data across sites', 'Procurement exposure to supplier labour, traceability, and due-diligence risks', 'Pressure from OEMs and export customers for product and facility-level disclosures', 'Need to balance capex-heavy decarbonisation choices with margin discipline'],
    opportunities: ['Build repeatable BRSR and customer-disclosure workflows', 'Identify plant efficiency and fuel-switching opportunities with measurable ROI', 'Strengthen supplier qualification and monitoring processes', 'Use ESG strategy to support lender, investor, and customer confidence'],
    regulatory: ['SEBI BRSR and BRSR Core expectations for listed entities and value chains', 'CBAM exposure for export-linked sectors', 'Occupational health, waste, and pollution-control compliance requirements', 'Growing customer demand for supplier disclosures and product traceability'],
    engagementHighlights: ['Cross-site data architecture for environmental and social metrics', 'Materiality and roadmap design aligned to plant operations', 'Supplier ESG due diligence and segmentation', 'Board-level reporting on decarbonisation progress and compliance readiness'],
    relevantServiceSlugs: ['brsr-esg-compliance', 'carbon-advisory-credits', 'esg-risk-governance'],
  },
  {
    slug: 'energy-power',
    title: 'Energy & Power',
    icon: 'Zap',
    desc: 'Carbon accounting, renewable integration, regulatory compliance, net-zero pathways',
    overview: 'Energy and power businesses operate under constant climate scrutiny. Whether the mandate is transition planning, renewable scale-up, carbon-market participation, or disclosure readiness, sector strategy needs to be technically grounded and regulator-aware.',
    focus: ['Carbon Footprint Assessment', 'Renewable Integration Planning', 'CCTS Compliance', 'Net-Zero Pathway Design', 'CBAM Readiness'],
    challenges: ['Complex emissions baselines across generation, transmission, and distributed assets', 'Fast-evolving carbon-market and compliance frameworks', 'High stakeholder expectations around transition credibility and community impact', 'Need to prioritise decarbonisation investments across multiple asset classes'],
    opportunities: ['Design credible net-zero and transition pathways', 'Monetise eligible reductions through carbon-market mechanisms', 'Improve investor and lender confidence with sharper climate disclosures', 'Align capital planning with long-term carbon and energy scenarios'],
    regulatory: ['India’s Carbon Credit Trading Scheme and related sector obligations', 'Climate-disclosure expectations from investors and lenders', 'Grid integration, renewable procurement, and energy-efficiency mandates', 'International customer pressure on embedded emissions for traded energy-intensive goods'],
    engagementHighlights: ['Asset-level emissions measurement and reduction planning', 'Carbon-credit and project-development screening', 'Transition strategy that ties operations to finance and investor messaging', 'Governance frameworks for board oversight of climate and energy risk'],
    relevantServiceSlugs: ['carbon-advisory-credits', 'esg-strategy-transformation', 'sustainable-finance'],
  },
  {
    slug: 'healthcare-pharma',
    title: 'Healthcare & Pharma',
    icon: 'Heart',
    desc: 'Clinical waste management, social impact metrics, BRSR for pharma',
    overview: 'Healthcare and pharma organisations manage a complex mix of environmental, social, and governance issues: patient safety, product integrity, access, waste handling, supply chain ethics, and workforce well-being. Effective ESG strategy in this sector has to respect both operational risk and social impact.',
    focus: ['Clinical Waste ESG Assessment', 'Social Impact Measurement', 'BRSR for Pharma', 'Supplier ESG Due Diligence'],
    challenges: ['Difficult-to-standardise waste, water, and energy data across facilities', 'Heightened scrutiny around product stewardship and patient-facing impact', 'Supplier compliance risks in raw materials and manufacturing inputs', 'Need to articulate social value without relying on generic CSR narratives'],
    opportunities: ['Strengthen ESG positioning with clear access, quality, and safety metrics', 'Build practical waste and resource-efficiency programmes at facility level', 'Improve supplier oversight in regulated value chains', 'Translate ESG performance into a stronger narrative for boards and investors'],
    regulatory: ['BRSR reporting expectations for listed healthcare and pharma entities', 'Biomedical and hazardous waste management obligations', 'Growing stakeholder focus on access, affordability, ethics, and workforce standards', 'Global customer and investor expectations on responsible supply chains'],
    engagementHighlights: ['Facility-level baseline setting for resource use and waste streams', 'Social impact frameworks linked to patient and community outcomes', 'Supplier screening focused on quality, labour, and traceability', 'Disclosure support that connects operations with governance and stakeholder expectations'],
    relevantServiceSlugs: ['brsr-esg-compliance', 'esg-risk-governance', 'esg-data-intelligence'],
  },
  {
    slug: 'infrastructure-real-estate',
    title: 'Infrastructure & Real Estate',
    icon: 'Building2',
    desc: 'Green building certification, project-level ESG, ESIA',
    overview: 'Infrastructure and real estate projects face ESG pressure from design through operation. Investors, occupiers, regulators, and communities increasingly expect visible performance on resource efficiency, resilience, safety, and social impact.',
    focus: ['Green Building Certification', 'Project-Level ESG Assessment', 'Environmental & Social Impact Assessment', 'Sustainable Construction Advisory'],
    challenges: ['Project-by-project inconsistency in ESG controls and reporting', 'Community and land-use issues that escalate quickly if not managed well', 'High embodied carbon and operational energy implications across assets', 'Need to satisfy both compliance and investor-grade reporting expectations'],
    opportunities: ['Embed ESG requirements early in project planning and procurement', 'Improve asset attractiveness through energy, water, and resilience performance', 'Develop repeatable governance and reporting standards across project portfolios', 'Position projects for greener financing and more credible stakeholder engagement'],
    regulatory: ['Environmental and social impact assessment requirements', 'Green building and sustainable design standards', 'Construction safety, labour, and community-impact obligations', 'Lender and investor due diligence on project-level ESG risk'],
    engagementHighlights: ['Project governance models for ESG from bid to operations', 'Portfolio-wide sustainability standards and KPI frameworks', 'Stakeholder engagement planning for sensitive projects and sites', 'Advisory on certification, reporting, and capital-provider expectations'],
    relevantServiceSlugs: ['esg-strategy-transformation', 'esg-risk-governance', 'sustainable-finance'],
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    icon: 'Landmark',
    desc: 'ESG-linked lending, portfolio alignment, RBI climate risk',
    overview: 'Financial institutions are expected to manage ESG risk both within their operations and across financed portfolios. That means governance, product design, climate-risk capability, and stakeholder communication all need to mature together.',
    focus: ['ESG-Linked Lending Strategy', 'Portfolio Climate Alignment', 'RBI Climate Risk Compliance', 'Green Finance Framework Design'],
    challenges: ['Limited internal methodologies for climate and ESG risk integration', 'Need to design credible lending and investment products without weak KPIs', 'Fragmented data on financed emissions and portfolio exposure', 'Pressure from boards, regulators, and investors for clear climate-risk articulation'],
    opportunities: ['Launch labelled products with stronger sustainability credibility', 'Improve portfolio and underwriting decisions with better climate intelligence', 'Build a defensible sustainable-finance narrative for investors and partners', 'Align risk, treasury, sustainability, and business teams around one framework'],
    regulatory: ['RBI guidance and evolving expectations on climate-related financial risk', 'Investor demand for portfolio transparency and transition alignment', 'Global market norms around financed emissions and taxonomy alignment', 'Governance expectations for product-level ESG claims and disclosures'],
    engagementHighlights: ['Framework design for green, social, and sustainability-linked products', 'Climate-risk and portfolio-alignment analytics', 'Internal governance for KPI approval, monitoring, and reporting', 'Investor and lender communication support'],
    relevantServiceSlugs: ['sustainable-finance', 'esg-risk-governance', 'esg-data-intelligence'],
  },
  {
    slug: 'mining-metals',
    title: 'Mining & Metals',
    icon: 'Pickaxe',
    desc: 'Environmental remediation, community impact, SDF compliance',
    overview: 'Mining and metals companies operate under concentrated ESG scrutiny because environmental impact, community relationships, worker safety, and closure planning are all core to licence-to-operate risk. ESG in this sector has to be operationally serious and locally grounded.',
    focus: ['Environmental Remediation', 'Community Impact Assessment', 'SDF Compliance Advisory', 'Mine Closure ESG Planning'],
    challenges: ['High-risk environmental and biodiversity footprints', 'Persistent community and land-related stakeholder sensitivity', 'Need for stronger closure planning and legacy-risk management', 'Difficulty consolidating environmental, social, and governance data across sites'],
    opportunities: ['Improve licence-to-operate resilience through stronger community engagement', 'Formalise closure and remediation planning before it becomes a crisis issue', 'Strengthen governance around high-consequence environmental risks', 'Create clearer investor messaging on risk controls and transition readiness'],
    regulatory: ['Mine-specific environmental, remediation, and closure obligations', 'Community development and stakeholder engagement expectations', 'Health and safety governance requirements for high-risk operations', 'Growing customer and investor scrutiny on source and production practices'],
    engagementHighlights: ['Site-level risk assessments with governance escalation pathways', 'Community-impact and stakeholder-engagement design', 'Mine closure planning integrated with environmental and social priorities', 'Disclosure support that translates complex operations into credible reporting'],
    relevantServiceSlugs: ['esg-risk-governance', 'carbon-advisory-credits', 'brsr-esg-compliance'],
  },
  {
    slug: 'it-technology',
    title: 'IT & Technology',
    icon: 'Cpu',
    desc: 'Scope 3 emissions, supply chain transparency, CSRD preparation',
    overview: 'Technology companies often appear asset-light, but their ESG footprint can be substantial through purchased goods, data centres, travel, talent, privacy, and global customer expectations. Strong ESG programmes in this sector depend on better data discipline and supply chain transparency.',
    focus: ['Scope 3 Emissions Accounting', 'Supply Chain Transparency', 'CSRD Preparation', 'Data Centre Sustainability'],
    challenges: ['Large Scope 3 footprints with limited supplier data quality', 'Customer questionnaires and procurement requirements from global clients', 'Tension between rapid growth and maturing governance and reporting controls', 'Need to connect environmental metrics with people, privacy, and ethics topics'],
    opportunities: ['Build differentiated positioning with enterprise customers and investors', 'Improve procurement and supplier transparency at manageable cost', 'Track energy, travel, and digital infrastructure performance more rigorously', 'Prepare earlier for global disclosure expectations before they become urgent'],
    regulatory: ['CSRD and multinational customer expectations for non-EU suppliers', 'Data privacy, governance, and ethical-use concerns intersecting with ESG narratives', 'Employee and talent-market expectations on culture and inclusion', 'Demand for transparent emissions and supplier disclosures in enterprise procurement'],
    engagementHighlights: ['Scope 3 measurement frameworks tuned to tech business models', 'Customer-response packs for ESG and supply chain questionnaires', 'Data centre and workplace sustainability KPI design', 'Governance and disclosure support for fast-scaling businesses'],
    relevantServiceSlugs: ['esg-data-intelligence', 'brsr-esg-compliance', 'esg-strategy-transformation'],
  },
  {
    slug: 'agriculture-food',
    title: 'Agriculture & Food',
    icon: 'Wheat',
    desc: 'Sustainable sourcing, water footprint, deforestation-free supply chains',
    overview: 'Agriculture and food businesses face ESG exposure across land use, water, farmer livelihoods, supply chain traceability, packaging, and food safety. Sector strategy needs to cover both upstream sourcing risk and downstream brand and customer expectations.',
    focus: ['Sustainable Sourcing Strategy', 'Water Footprint Assessment', 'Deforestation-Free Supply Chains', 'Regenerative Agriculture Advisory'],
    challenges: ['Low-visibility supply chains with uneven traceability and smallholder dependence', 'Water stress and land-use risk across sourcing regions', 'Growing global pressure for deforestation-free and nature-sensitive sourcing', 'Difficulty translating sustainability activity into measurable procurement and brand outcomes'],
    opportunities: ['Create stronger sourcing standards and supplier engagement programmes', 'Quantify water and land-use hotspots to prioritise interventions', 'Build more credible sustainability narratives for customers and export buyers', 'Link farmer and community initiatives to business continuity and resilience goals'],
    regulatory: ['Customer and export-market expectations around traceability and deforestation', 'Water-use, packaging, and waste-related obligations', 'Heightened investor and brand scrutiny on sourcing resilience and livelihoods', 'Emerging biodiversity and nature-related disclosure conversations'],
    engagementHighlights: ['Sourcing-risk and traceability diagnostics', 'Water and land-use hotspot mapping', 'Supplier and producer engagement frameworks', 'Advisory that links operational realities with market-facing ESG claims'],
    relevantServiceSlugs: ['esg-strategy-transformation', 'carbon-advisory-credits', 'esg-risk-governance'],
  },
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
  { name: 'CA — Sustainable Finance', role: 'Sustainable Finance & Transaction Advisory', bio: 'Chartered Accountant with capital markets expertise. Leads green bond structuring, ESG-linked lending, IFRS S2 readiness, and transaction ESG due diligence for PE/M&A mandates.' },
]

export const IMPACT_NUMBERS = [
  { value: '50+', label: 'Organisations Advised' },
  { value: '₹500Cr+', label: 'Green Finance Structured' },
  { value: '1.2M', label: 'tCO₂e Measured & Verified' },
  { value: '142', label: 'ESG Disclosures Delivered' },
]

export const FRAMEWORKS = ['GRI', 'ISSB', 'BRSR', 'TCFD', 'CSRD', 'CDP', 'SASB']
