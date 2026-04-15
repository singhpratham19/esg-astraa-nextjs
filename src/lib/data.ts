type ContentSection = {
  title: string
  content?: string
  items?: string[]
}

type Service = {
  slug: string
  href: string
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
  materialTopics: { topic: string; metric: string; context: string }[]
  marketLeaderActions: string[]
  relevantServiceSlugs: string[]
}

export const NAV_LINKS = [
  { label: 'Platform', href: '/platform/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Services', href: '/services/' },
  { label: 'Solutions', href: '/solutions/' },
  { label: 'Our Ecosystem', href: '/ecosystem/' },
  { label: 'Insights', href: '/insights/' },
]

export const SERVICES: Service[] = [
  {
    slug: 'esg-strategy-transformation',
    href: '/services/strategy-advisory/#esg-strategy',
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
    href: '/services/strategy-advisory/#brsr-compliance',
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
    href: '/services/strategy-advisory/#carbon-advisory',
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
    href: '/services/strategy-advisory/#esg-risk',
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
    href: '/services/strategy-advisory/#sustainable-finance-strategy',
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
    href: '/services/strategy-advisory/#esg-data-strategy',
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
    desc: 'ESG consulting for manufacturing companies in India covering BRSR compliance, sustainable manufacturing practices, supply chain ESG risk management, circular economy advisory, and net zero roadmap development.',
    overview: 'Manufacturers in India sit at the centre of the country\'s ESG transition. They face direct scrutiny on energy intensity, worker safety, supply chain practices, EU CBAM exposure for exporters, and BRSR compliance obligations. ESG Astraa brings together sector-specific advisory, a proprietary ESG data and reporting platform, and deep regulatory expertise to help manufacturing businesses convert these pressures into measurable operating improvements and audit-ready disclosures. Our technology-enabled platform consolidates plant-level environmental, social, and governance data across sites so that BRSR reporting, OEM customer questionnaires, and internal management reviews operate from a single structured data source.',
    focus: [
      'BRSR Compliance for Listed Manufacturers',
      'Supply Chain ESG Risk Assessment and Supplier Due Diligence',
      'Scope 1 and Scope 2 Carbon Footprint Measurement',
      'Net Zero Roadmap Development for Manufacturing Operations',
      'Circular Economy and Resource Efficiency Advisory',
      'EU CBAM Readiness and Carbon Content Measurement',
    ],
    challenges: [
      'Fragmented plant-level environmental and safety data across manufacturing sites with no consolidated source of truth for BRSR and customer reporting',
      'Procurement exposure to supplier labour practices, traceability gaps, and growing ESG due diligence requirements from OEMs and export customers',
      'Pressure from global customers and export markets for product-level and facility-level sustainability disclosures and supplier code of conduct compliance',
      'Need to balance capital-intensive decarbonisation investments with margin discipline and competing business priorities across operations',
    ],
    opportunities: [
      'Build repeatable and technology-enabled BRSR reporting workflows that reduce annual data collection effort and improve disclosure accuracy for listed manufacturers',
      'Identify plant-level energy efficiency and fuel-switching opportunities with quantified ROI through our proprietary carbon accounting and decarbonisation modelling engine',
      'Strengthen supplier qualification and ESG monitoring processes through structured screening frameworks that satisfy BRSR Core and OEM due diligence requirements',
      'Use a credible ESG strategy and verified BRSR compliance track record to strengthen confidence with lenders, institutional investors, and strategic customers',
    ],
    regulatory: [
      'SEBI BRSR and BRSR Core mandatory requirements for top 1000 listed entities and value chain partners, with assurance obligations phasing in',
      'EU Carbon Border Adjustment Mechanism (CBAM) compliance obligations for Indian steel, aluminium, cement, chemicals, and fertiliser exporters',
      'Occupational health and safety, waste management, water use, and pollution control compliance requirements under Indian environmental and labour laws',
      'Growing OEM and export customer requirements for supplier ESG disclosures, facility audits, and responsible sourcing documentation',
    ],
    engagementHighlights: [
      'Multi-site ESG data architecture built on our technology-enabled platform for consolidated environmental, safety, and social reporting across manufacturing operations',
      'BRSR gap analysis, double materiality assessment, and 12 to 36 month roadmap design aligned to plant operations and production cycles',
      'Supplier ESG due diligence, risk segmentation, and ongoing monitoring using structured questionnaires, risk scoring tools, and our proprietary analytics engine',
      'Board-level reporting on decarbonisation progress, CBAM exposure, and BRSR compliance readiness using our benchmarking and peer comparison capabilities',
    ],
    materialTopics: [
      { topic: 'Energy and Emissions Intensity', metric: 'GRI 305-1 & 305-2', context: 'Power consumption, fuel mix, process emissions, and energy efficiency are core material topics for listed manufacturers because they affect both operating cost and BRSR disclosure obligations.' },
      { topic: 'Supply Chain Labour and Traceability', metric: 'GRI 408-1 & 409-1', context: 'Manufacturers face growing expectations to document supplier practices, worker conditions, and sourcing controls across value chains for BRSR Core, OEM qualification, and export market requirements.' },
      { topic: 'Waste, Circularity, and Resource Efficiency', metric: 'GRI 306-3 & 303-3', context: 'Waste handling compliance, water use management, scrap recovery programmes, and circular product design shape both regulatory risk and measurable margin improvement opportunities.' },
      { topic: 'Worker Health, Safety, and Workforce Standards', metric: 'GRI 403-9 & 403-10', context: 'Plant operations carry direct scrutiny on safety systems, incident disclosure, training compliance, and operating discipline from SEBI BRSR, OEM customers, and institutional investors.' },
    ],
    marketLeaderActions: [
      'Leading Indian manufacturers are deploying technology-enabled plant-level ESG dashboards for energy, waste, water, and safety data instead of relying on year-end manual consolidation across sites.',
      'Top players are establishing supplier ESG screening standards and code-of-conduct expectations earlier in procurement cycles to reduce value chain liability and satisfy BRSR Core requirements.',
      'Larger manufacturing groups are integrating net zero and energy transition plans into annual capex and budget planning rather than treating decarbonisation as a separate sustainability project.',
      'More mature businesses are consolidating BRSR reporting, OEM customer questionnaires, and internal ESG KPI reviews into a single technology-enabled workflow that reduces duplication and improves data quality.',
    ],
    relevantServiceSlugs: ['brsr-esg-compliance', 'carbon-advisory-credits', 'esg-risk-governance'],
  },
  {
    slug: 'energy-power',
    title: 'Energy and Power',
    icon: 'Zap',
    desc: 'ESG advisory for energy and power companies in India covering carbon footprint assessment, Carbon Credit Trading Scheme (CCTS) compliance, net zero pathway design, renewable energy transition planning, and BRSR disclosure support.',
    overview: 'Energy and power businesses in India operate under sustained climate scrutiny from investors, regulators, lenders, and international counterparties. Whether the priority is India\'s Carbon Credit Trading Scheme (CCTS) compliance, credible net zero transition planning, renewable energy integration, or BRSR disclosure quality, sector strategy needs to be technically grounded, asset-specific, and regulator-aware. ESG Astraa\'s technology-enabled platform powers precise emissions measurement and carbon market analysis, while our advisory team translates climate ambition into defensible financial, operational, and governance decisions that hold up to institutional scrutiny.',
    focus: [
      'Carbon Footprint Assessment for Power Generation and Energy Assets',
      'India Carbon Credit Trading Scheme (CCTS) Compliance Advisory',
      'Net Zero Pathway Design and Transition Roadmap Development',
      'Renewable Energy Integration Planning and RPO Compliance',
      'CBAM Readiness for Energy-Intensive Goods Exporters',
      'BRSR Disclosure for Listed Energy and Power Companies',
    ],
    challenges: [
      'Complex emissions baselines spanning generation, transmission, distribution, and distributed energy assets with inconsistent measurement methodologies across the portfolio',
      'Fast-evolving CCTS compliance framework and voluntary carbon market standards that require continuous regulatory tracking and early strategic positioning',
      'High stakeholder expectations from institutional investors, infrastructure lenders, and international customers around transition credibility and community impact management',
      'Competing capital allocation demands across decarbonisation investments, renewable scale-up, grid infrastructure, and traditional asset maintenance priorities',
    ],
    opportunities: [
      'Design credible and investor-grade net zero and energy transition pathways backed by our proprietary carbon accounting and decarbonisation scenario modelling platform',
      'Monetise verified emission reductions through India\'s carbon credit market and voluntary carbon mechanisms with structured project development and registry support',
      'Improve lender and investor confidence with sharper TCFD-aligned climate disclosures and independently verifiable emissions measurement methodology',
      'Align long-term capital allocation planning with CCTS compliance obligations, carbon market price scenarios, and India\'s renewable energy policy trajectory',
    ],
    regulatory: [
      'India\'s Carbon Credit Trading Scheme (CCTS) and sector-specific compliance obligations for power generation, industrial energy users, and energy-intensive businesses',
      'Climate disclosure expectations from institutional infrastructure investors, green bond markets, and international development finance institutions',
      'Renewable Purchase Obligations (RPO), grid integration mandates, energy efficiency targets under the Perform Achieve and Trade (PAT) scheme, and other national policy requirements',
      'International customer requirements for embedded emissions disclosures in energy-intensive traded goods subject to CBAM and supply chain sustainability expectations',
    ],
    engagementHighlights: [
      'Asset-level emissions measurement and reduction planning using ESG Astraa\'s proprietary carbon accounting engine with international emissions factor databases',
      'CCTS compliance readiness assessment, carbon credit project development screening, and VCS or Gold Standard registry documentation and registration support',
      'Transition strategy design that connects operational decarbonisation decisions with investor communication, green finance eligibility, and board-level governance',
      'Climate risk governance frameworks for board oversight of transition risk, CCTS exposure, physical climate risk, and long-term asset resilience planning',
    ],
    materialTopics: [
      { topic: 'Transition Strategy and Capital Allocation', metric: 'TCFD 1.1 & 1.2', context: 'Investors and infrastructure lenders assess energy companies on whether climate ambitions are backed by credible asset-level investment plans, technology choices, and financing commitments.' },
      { topic: 'Operational Emissions and Carbon Market Participation', metric: 'GRI 305-1, 305-2 & 305-3', context: 'Emissions measurement quality and methodology rigour determine both CCTS compliance obligations and the credibility of carbon credit claims in voluntary and compliance markets.' },
      { topic: 'Community Impact and Land Use Management', metric: 'GRI 411-1 & 412-1', context: 'Large power generation projects, transmission corridors, and renewable energy installations face scrutiny on community relations, land use, environmental impact, and project approval timelines.' },
      { topic: 'Climate Governance and Physical Resilience', metric: 'BRSR P7 & TCFD 2.1', context: 'Boards, lenders, and institutional investors expect structured oversight of climate transition risk, physical risk exposure, and long-term resilience planning for generation and distribution infrastructure.' },
    ],
    marketLeaderActions: [
      'Leading Indian energy companies are pairing net zero and CCTS compliance targets with asset-level investment roadmaps and project-specific financing structures that satisfy institutional lender requirements.',
      'Top operators are establishing verified and auditable emissions baselines using structured carbon accounting methodology before making public climate claims or entering carbon credit transactions.',
      'Mature businesses are strengthening board-level climate risk review processes, CCTS compliance tracking, and scenario planning for their generation and transmission asset portfolios.',
      'Market leaders are improving BRSR and TCFD disclosure quality for institutional infrastructure lenders, green bond investors, and multinational energy sector counterparties.',
    ],
    relevantServiceSlugs: ['carbon-advisory-credits', 'esg-strategy-transformation', 'sustainable-finance'],
  },
  {
    slug: 'healthcare-pharma',
    title: 'Healthcare and Pharma',
    icon: 'Heart',
    desc: 'ESG consulting for healthcare and pharmaceutical companies in India covering BRSR compliance, biomedical waste (BMW Rules) management, social impact measurement, API supplier ESG assessment, and responsible sourcing advisory.',
    overview: 'Healthcare and pharmaceutical organisations in India manage a complex set of ESG priorities spanning patient safety, biomedical waste compliance under the BMW Rules, pharmaceutical wastewater management, product integrity, patient access and affordability, API supply chain ethics, and workforce well-being. ESG Astraa brings sector-specific advisory expertise, technology-enabled data management tools, and deep regulatory knowledge to help pharma and hospital groups build structured ESG programmes, credible BRSR disclosures, and investor-grade sustainability narratives that go well beyond generic CSR reporting.',
    focus: [
      'BRSR Compliance for Listed Pharma and Healthcare Companies',
      'Biomedical Waste (BMW Rules) Management and Compliance Audit',
      'Social Impact Measurement and Patient Access Metrics',
      'API Supplier ESG Due Diligence and Responsible Sourcing',
      'Facility-Level Environmental Data Management and Baseline Setting',
    ],
    challenges: [
      'Inconsistent biomedical waste, pharmaceutical wastewater, and utility data across hospital networks and manufacturing facilities without centralised tracking systems',
      'Heightened BMW Rules enforcement and growing investor scrutiny on product stewardship, patient safety disclosure standards, and hazardous waste handling practices',
      'Supplier compliance risks in active pharmaceutical ingredient (API) sourcing, contract manufacturing operations, and regulated raw material procurement chains',
      'Difficulty quantifying complex social impact programmes into measurable patient and community outcome metrics suitable for BRSR and institutional investor reporting',
    ],
    opportunities: [
      'Strengthen ESG positioning through clear patient access, clinical quality, and biomedical waste compliance metrics tracked on ESG Astraa\'s technology-enabled data platform',
      'Build structured biomedical waste management and resource efficiency programmes that simultaneously satisfy BMW Rules and reduce facility-level operating costs',
      'Improve API supplier oversight and traceability across regulated value chains through structured ESG due diligence frameworks and supplier questionnaire tools',
      'Convert ESG performance data and social impact metrics into a stronger board and institutional investor narrative that demonstrates genuine commitment beyond CSR expenditure',
    ],
    regulatory: [
      'SEBI BRSR mandatory reporting requirements for listed healthcare and pharmaceutical companies with principal value indicators covering environmental and social performance',
      'Biomedical Waste Management Rules (BMW Rules) and enforcement obligations for hospitals, nursing homes, clinics, and pharmaceutical manufacturing facilities across India',
      'Growing stakeholder expectations on patient access, medicine affordability, clinical trial ethics, responsible marketing, and pharmaceutical workforce safety standards',
      'International pharmaceutical customer and institutional investor requirements on responsible API sourcing, contract manufacturer audits, and supply chain transparency documentation',
    ],
    engagementHighlights: [
      'Facility-level baseline assessment for biomedical waste streams, pharmaceutical effluent, water consumption, and energy intensity using structured data collection and our reporting platform',
      'Social impact measurement frameworks linked to patient outcome metrics, community health access indicators, and clinical safety performance for BRSR and investor reporting',
      'API supplier and contract manufacturer ESG screening covering quality systems, labour standards, BMW compliance, and product traceability using our structured due diligence tools',
      'BRSR disclosure drafting and assurance readiness support that integrates operational data with governance narratives and investor-facing sustainability communication',
    ],
    materialTopics: [
      { topic: 'Patient Safety and Product Responsibility', metric: 'GRI 416-1 & 416-2', context: 'Quality systems, pharmacovigilance, product stewardship, and patient-facing clinical safety outcomes are core material topics for listed pharma and hospital groups seeking credible institutional ESG ratings.' },
      { topic: 'Biomedical Waste and Environmental Compliance', metric: 'GRI 306-1, 306-2 & 306-3', context: 'Hospitals and pharma manufacturers face direct BMW Rules enforcement obligations and investor scrutiny on pharmaceutical wastewater treatment, hazardous waste handling, and utility consumption intensity.' },
      { topic: 'Patient Access, Affordability, and Business Ethics', metric: 'GRI 405-1 & 412-2', context: 'Stakeholders in India and globally expect a credible and evidenced position on medicine access, pricing practices, clinical trial ethics, and responsible marketing conduct.' },
      { topic: 'API Supplier Integrity and Supply Chain Traceability', metric: 'GRI 408-1 & 409-1', context: 'The pharmaceutical sector depends on highly regulated supply chains where quality system failures, labour issues, and sourcing transparency gaps can escalate rapidly to regulatory and reputational consequences.' },
    ],
    marketLeaderActions: [
      'Leading Indian pharma and hospital groups are building quantified social impact narratives tied to patient outcome data and access metrics rather than relying on CSR expenditure summaries and activity descriptions.',
      'Top healthcare operators are improving facility-level tracking for biomedical waste streams, pharmaceutical effluent, and utility consumption using technology-enabled data platforms instead of managing these only as compliance tasks.',
      'Mature pharmaceutical companies are implementing structured API supplier review programmes covering both quality systems and responsible sourcing factors to satisfy BRSR and global customer requirements.',
      'Larger healthcare organisations are consolidating patient safety disclosures, BMW compliance records, and ESG performance data into a single governance and management review process.',
    ],
    relevantServiceSlugs: ['brsr-esg-compliance', 'esg-risk-governance', 'esg-data-intelligence'],
  },
  {
    slug: 'infrastructure-real-estate',
    title: 'Infrastructure and Real Estate',
    icon: 'Building2',
    desc: 'ESG advisory for infrastructure and real estate companies in India covering green building certification (LEED, IGBC, GRIHA), environmental and social impact assessment (ESIA), EIA consulting, LARR social impact assessment, project-level ESG management, and sustainable construction advisory.',
    overview: 'Infrastructure and real estate projects in India face ESG expectations from design through operation. Investors, commercial occupiers, development finance institutions (DFIs), regulators, and communities increasingly expect visible performance on resource efficiency, green building certification, environmental clearance quality, social impact management, and climate resilience. ESG Astraa supports developers, contractors, and asset managers with technology-enabled project governance frameworks, LEED, IGBC, and GRIHA certification advisory, and ESIA consulting that makes sustainability a visible and bankable asset rather than a compliance overhead on project timelines.',
    focus: [
      'LEED, IGBC, and GRIHA Green Building Certification Advisory',
      'Environmental and Social Impact Assessment (ESIA) Consulting',
      'Environmental Impact Assessment (EIA) and Environmental Clearance Support',
      'LARR Act Social Impact Assessment (SIA) Advisory',
      'Project-Level ESG Governance and Portfolio Reporting',
      'Sustainable Construction Standards and Procurement Advisory',
    ],
    challenges: [
      'Project-by-project inconsistency in ESG data collection, environmental management systems, and sustainability reporting across large development portfolios',
      'Community, land acquisition, and resettlement compliance issues that escalate rapidly without structured LARR Act and FPIC processes managed proactively from project inception',
      'High embodied carbon in construction materials and significant operational energy implications across commercial, residential, and infrastructure asset classes',
      'Pressure from DFIs, institutional investors, and green bond markets for IFC Performance Standards-aligned ESIA documentation and project-level ESG reporting',
    ],
    opportunities: [
      'Embed LEED, IGBC, and GRIHA green building certification standards into design briefs and procurement requirements from the earliest project planning stages to reduce cost and schedule risk',
      'Improve commercial asset attractiveness, rental premiums, and occupier retention through quantified energy, water, and resilience performance tracked on our technology platform',
      'Develop repeatable portfolio-wide ESG governance standards and KPI frameworks that satisfy institutional investor reporting requirements across entire project portfolios',
      'Position real estate and infrastructure projects for DFI green financing, green bonds, and sustainability-linked instruments through credible ESIA documentation and certification credentials',
    ],
    regulatory: [
      'Environmental Impact Assessment (EIA) notification requirements and mandatory environmental clearance processes for specified infrastructure and real estate projects in India',
      'LARR Act Social Impact Assessment obligations for land acquisition, involuntary resettlement, and community impact management in infrastructure development',
      'LEED, IGBC, GRIHA, and other green building rating system requirements for DFI financing eligibility, institutional occupation, and premium commercial positioning',
      'SEBI BRSR reporting requirements for listed real estate developers and infrastructure companies covering environmental and social performance disclosures',
    ],
    engagementHighlights: [
      'Project ESG governance frameworks covering design, procurement, construction, and operational phases with our technology-enabled documentation and compliance tracking platform',
      'Portfolio-wide green building sustainability standards, energy performance benchmarking, and LEED or IGBC certification roadmaps for real estate asset managers and developers',
      'Community and stakeholder engagement planning for sensitive infrastructure projects, LARR Act land acquisition processes, and involuntary resettlement programmes',
      'LEED, IGBC, and GRIHA certification advisory from schematic design through commissioning to reduce timeline risk, certification costs, and documentation rework',
    ],
    materialTopics: [
      { topic: 'Environmental and Social Impact Assessment', metric: 'GRI 304-3 & 411-1', context: 'Land use, environmental clearances, biodiversity impact, community displacement, and resettlement management are critical material issues at the project approval and construction lifecycle phases.' },
      { topic: 'Embodied and Operational Carbon', metric: 'GRI 305-1 & 305-2', context: 'Institutional investors and DFIs increasingly require quantified views of construction-phase embodied carbon and operational building emissions as part of green finance eligibility screening and BRSR reporting.' },
      { topic: 'Worker Safety and Contractor Management', metric: 'GRI 403-9 & 403-10', context: 'Large contractor ecosystems in construction and infrastructure development create significant governance obligations around occupational safety systems, labour standards, and subcontractor oversight.' },
      { topic: 'Green Building Performance and Climate Resilience', metric: 'BRSR P6 & LEED Certification', context: 'LEED, IGBC, and GRIHA ratings are increasingly tied to commercial asset valuations, institutional tenant lease requirements, DFI green financing conditions, and long-term operational energy cost advantages.' },
    ],
    marketLeaderActions: [
      'Leading Indian real estate developers are embedding LEED and IGBC green building certification requirements into architectural design briefs and principal contractor selection criteria from the earliest project planning stages.',
      'Top infrastructure platforms are standardising ESIA and EIA documentation processes across all projects to reduce environmental clearance timelines and simplify DFI and institutional investor due diligence.',
      'Mature real estate businesses are deploying technology-enabled portfolio ESG dashboards that consolidate energy consumption, water use, waste data, and certification performance across their asset portfolios.',
      'Better-positioned developers are connecting green building certification performance and LEED operational data directly to green bond eligibility frameworks and long-term institutional financing strategy.',
    ],
    relevantServiceSlugs: ['esg-strategy-transformation', 'esg-risk-governance', 'sustainable-finance'],
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    icon: 'Landmark',
    desc: 'ESG advisory for banks, NBFCs, and financial institutions in India covering RBI climate risk compliance, green bond framework design (ICMA-aligned), sustainability-linked loan KPI structuring, financed emissions measurement (PCAF), and BRSR disclosure support.',
    overview: 'Banks, NBFCs, and financial institutions in India are expected to manage ESG risk within their own operations and across their financed portfolios. RBI climate risk guidance, SEBI BRSR requirements, India\'s green bond market growth, PCAF financed emissions standards, and institutional investor demand for portfolio climate alignment are reshaping how sustainable finance operates in India. ESG Astraa\'s CA-led sustainable finance team brings capital markets expertise, technology-enabled portfolio analytics, and deep regulatory knowledge to help institutions build credible green finance frameworks, defensible labelled products, and board-level climate governance that satisfies regulators and institutional counterparties.',
    focus: [
      'RBI Climate Risk Compliance and Governance Framework Design',
      'Green Bond and Sustainability-Linked Loan Framework (ICMA-Aligned)',
      'PCAF Financed Emissions Measurement and Portfolio Climate Alignment',
      'Portfolio Climate Risk Assessment and Transition Readiness Analysis',
      'BRSR Compliance for Listed Banks and Financial Institutions',
      'IFRS S1 and S2 Readiness for Indian Financial Institutions',
    ],
    challenges: [
      'Limited internal methodologies for PCAF financed emissions measurement, portfolio-level climate risk classification, and transition alignment analysis across lending books',
      'Need to design green and sustainability-linked lending products with robust KPIs that withstand second-party opinion scrutiny, institutional investor review, and regulatory expectations',
      'Fragmented data on financed emissions, sector climate exposure, and portfolio transition readiness that prevents clear reporting to boards and external stakeholders',
      'Board and investor pressure for consistent and defensible climate risk articulation that demonstrates genuine integration into credit decision-making and treasury management',
    ],
    opportunities: [
      'Launch ICMA-aligned green and sustainability-linked finance products with stronger institutional credibility through frameworks structured on ESG Astraa\'s technology-enabled platform',
      'Improve credit underwriting and capital allocation decisions using financed emissions data, portfolio climate transition risk analytics, and sector ESG intelligence',
      'Build a defensible sustainable finance narrative for institutional investors, DFI co-lending partners, and international counterparties that satisfies growing transparency expectations',
      'Align risk, treasury, sustainability, and business functions around a single RBI-compliant climate risk governance framework that prevents siloed decision-making',
    ],
    regulatory: [
      'RBI climate risk circular and evolving guidelines requiring banks and NBFCs to integrate climate-related financial risks into governance structures and enterprise risk management processes',
      'SEBI green bond framework, ICMA Green Bond Principles, and India Sovereign Green Bond Framework requirements for labelled finance instruments issued by Indian financial institutions',
      'SEBI BRSR mandatory disclosure requirements for listed banks, NBFCs, and financial services companies including governance, environmental, and social performance reporting',
      'Global PCAF standard, IFRS S1 and S2 requirements, and financed emissions disclosure expectations from institutional asset managers, international DFIs, and sustainability rating agencies',
    ],
    engagementHighlights: [
      'Green bond and sustainability-linked loan framework design aligned to ICMA principles, India Sovereign Green Bond Framework, CBI standards, and RBI regulatory guidance',
      'PCAF financed emissions methodology design, portfolio climate risk analytics, and sector transition exposure assessment using our proprietary ESG data and analytics platform',
      'Internal governance design covering green product approval processes, KPI monitoring protocols, reporting workflows, and verification requirements for labelled finance instruments',
      'Investor and lender communication support for ESG strategy articulation, climate risk disclosure, sustainable finance portfolio reporting, and BRSR compliance documentation',
    ],
    materialTopics: [
      { topic: 'Climate Risk and Financed Portfolio Exposure', metric: 'PCAF 2.2 & GRI 305-3', context: 'Institutions need a rigorous and auditable view of PCAF financed emissions by sector, climate transition risk concentration, and physical risk exposure across lending and investment portfolios.' },
      { topic: 'Green and Sustainability-Linked Product Governance', metric: 'ICMA Green Bond & BRSR P8', context: 'Labelled finance instruments require robust KPI frameworks, use-of-proceeds documentation, internal approval controls, and independent verification processes to defend against greenwashing risk.' },
      { topic: 'RBI Compliance and Climate Disclosure Quality', metric: 'TCFD 1.1 & BRSR P9', context: 'Regulators and institutional investors expect consistent and evidenced communication on climate risk strategy, financed emissions methodology, product credibility, and transition portfolio alignment progress.' },
      { topic: 'Governance Across Risk, Treasury, and Business Functions', metric: 'IFRS S2 & GRI 2-12', context: 'ESG and climate materiality in financial institutions depends critically on how well product teams, credit risk functions, treasury operations, and executive leadership are aligned around integrated governance frameworks.' },
    ],
    marketLeaderActions: [
      'Leading Indian banks and NBFCs are building RBI-compliant climate risk capabilities into credit risk assessment, treasury management, and business decision processes rather than treating climate as a standalone sustainability function.',
      'Top players are tightening governance around green and sustainability-linked lending products using structured KPI frameworks, ICMA alignment reviews, and second-party opinion processes before scaling product programmes.',
      'More advanced institutions are improving PCAF financed emissions measurement and portfolio climate alignment analysis using technology platforms that enable sector-level transition risk reporting to boards and investors.',
      'Market leaders are consolidating BRSR compliance, investor ESG communication, and green product portfolio reporting into a coherent and consistent disclosure approach across all stakeholder channels.',
    ],
    relevantServiceSlugs: ['sustainable-finance', 'esg-risk-governance', 'esg-data-intelligence'],
  },
  {
    slug: 'mining-metals',
    title: 'Mining and Metals',
    icon: 'Pickaxe',
    desc: 'ESG advisory for mining and metals companies in India covering Sustainable Development Framework (SDF) compliance, IBM annual reporting, FPIC community consent process design, mine closure and environmental remediation planning, and BRSR disclosure support.',
    overview: 'Mining and metals companies in India operate under concentrated ESG scrutiny because environmental impact, community relationships, FPIC obligations, worker safety, Sustainable Development Framework (SDF) compliance under the IBM framework, and mine closure planning are all directly tied to licence-to-operate stability and regulatory standing. ESG Astraa brings sector-specific advisory expertise, technology-enabled environmental data management, and practical knowledge of IBM, SDF, DGMS, and environmental clearance requirements to help mining businesses build credible, locally grounded ESG programmes that satisfy regulators, investors, and communities.',
    focus: [
      'Sustainable Development Framework (SDF) Compliance and IBM Annual Reporting',
      'FPIC Community Consent Process Design and Tribal Stakeholder Engagement',
      'Mine Closure Environmental and Social Planning',
      'Environmental Remediation Assessment and Monitoring',
      'Community Impact Assessment and Grievance Management',
      'BRSR Compliance for Listed Mining and Metals Companies',
    ],
    challenges: [
      'High-risk environmental footprints including land disturbance, tailings management, water use, and biodiversity impacts that require systematic documentation and strong operational controls',
      'Persistent FPIC obligations, community consent challenges, and land-related stakeholder sensitivities that directly affect licence-to-operate stability and project approval outcomes',
      'Need for proactive mine closure, environmental rehabilitation, and remediation planning well before these issues become crisis-level regulatory or investor relations problems',
      'Difficulty consolidating environmental, social, and SDF compliance data across multiple mine sites and operating entities for BRSR and IBM annual reporting requirements',
    ],
    opportunities: [
      'Improve licence-to-operate resilience through structured FPIC processes, community engagement programmes, and proactive stakeholder communication supported by our data and documentation platform',
      'Formalise mine closure, environmental rehabilitation, and remediation planning with regulatory-compliant documentation, timeline governance, and financial provision structuring',
      'Strengthen governance around high-consequence environmental and safety risks through systematic monitoring programmes, incident escalation protocols, and IBM SDF reporting disciplines',
      'Build clearer investor messaging on SDF compliance track record, environmental risk controls, and transition readiness to address ESG rating agency and institutional lender scrutiny',
    ],
    regulatory: [
      'IBM Sustainable Development Framework (SDF) compliance requirements and mandatory annual reporting obligations for all mining operations in India under the Mines and Minerals Act',
      'Environmental clearance obligations, environmental impact assessment (EIA) requirements, and mine-specific remediation and closure planning under Indian environmental law',
      'Community development obligations, FPIC requirements, and statutory stakeholder engagement processes for mining operations in scheduled tribal areas and forest regions',
      'SEBI BRSR reporting requirements for listed mining and metals companies covering occupational safety performance, environmental impact data, and community engagement disclosures',
    ],
    engagementHighlights: [
      'Site-level ESG risk assessments covering environmental remediation status, FPIC compliance processes, and community relations with structured governance escalation frameworks',
      'SDF compliance programme design, IBM annual report preparation, and regulatory documentation support using our technology-enabled compliance tracking and reporting platform',
      'Mine closure planning integrating environmental rehabilitation timelines, social transition programmes, long-term liability management, and IBM regulatory documentation requirements',
      'BRSR disclosure drafting and assurance readiness support that translates complex multi-site mining operations into credible, auditable, and investor-grade sustainability reporting',
    ],
    materialTopics: [
      { topic: 'Environmental Footprint and Remediation Planning', metric: 'GRI 304-2 & 303-3', context: 'Land disturbance, water use and contamination, waste management, tailings safety, and environmental rehabilitation planning are core material topics for mining companies facing IBM, regulatory, and investor scrutiny.' },
      { topic: 'Community Impact, FPIC, and Licence to Operate', metric: 'GRI 411-1 & 412-3', context: 'Community relationships, free prior and informed consent processes, and tribal engagement outcomes often directly determine whether mining operations retain long-term regulatory licences and operating stability.' },
      { topic: 'Worker Safety and Operational Discipline', metric: 'GRI 403-9 & 403-10', context: 'High-risk underground and surface mining operations create direct expectations around safety management systems, fatality prevention records, near-miss reporting, and DGMS regulatory compliance.' },
      { topic: 'Mine Closure, SDF Compliance, and Legacy Liabilities', metric: 'IBM SDF & GRI 304-3', context: 'Mine closure planning, environmental rehabilitation financial provisioning, and SDF compliance under the IBM framework are material for both regulators assessing operating licences and investors evaluating long-term financial liabilities.' },
    ],
    marketLeaderActions: [
      'Leading Indian mining and metals companies are formalising mine closure and environmental remediation planning earlier in the asset lifecycle, supported by documented financial provisions and IBM-compliant planning frameworks.',
      'Top operators are elevating FPIC community consent management and tribal stakeholder relations to board-level governance priority as licence-to-operate risks intensify across mining regions.',
      'Mature businesses are deploying technology-enabled environmental monitoring programmes, incident escalation systems, and IBM SDF annual reporting workflows to improve IBM audit outcomes and investor confidence.',
      'Better-positioned companies are improving BRSR disclosures on high-consequence environmental risks, tailings management, and worker safety controls to address institutional investor ESG screening and rating agency requirements.',
    ],
    relevantServiceSlugs: ['esg-risk-governance', 'carbon-advisory-credits', 'brsr-esg-compliance'],
  },
  {
    slug: 'it-technology',
    title: 'IT and Technology',
    icon: 'Cpu',
    desc: 'ESG advisory for IT and technology companies in India covering Scope 3 emissions accounting, CSRD compliance for Indian tech exporters, supply chain transparency, data centre sustainability, BRSR compliance for listed IT companies, and enterprise customer ESG questionnaire management.',
    overview: 'Technology companies in India often appear asset-light but carry substantial ESG footprints through purchased goods and services, cloud and data centre energy consumption, supply chain inputs, talent and workforce practices, and the growing sustainability requirements of global enterprise customers. CSRD obligations from EU-headquartered clients, enterprise procurement questionnaires, BRSR compliance for listed IT companies, and institutional investor scrutiny on governance and digital ethics are reshaping ESG expectations across the sector. ESG Astraa supports technology businesses with structured Scope 3 accounting frameworks, CSRD readiness advisory, and our technology-enabled data platform to build differentiated positioning with enterprise customers and institutional investors.',
    focus: [
      'Scope 3 Emissions Accounting for Software, Services, and Platform Business Models',
      'CSRD Readiness Advisory for Indian IT and Technology Exporters',
      'Supply Chain Transparency and Supplier ESG Due Diligence',
      'Data Centre and Digital Infrastructure Sustainability Metrics',
      'BRSR Compliance for Listed Information Technology Companies',
      'Enterprise Customer ESG Questionnaire Response Pack Development',
    ],
    challenges: [
      'Large Scope 3 carbon footprints concentrated in purchased goods, cloud infrastructure, hardware procurement, and business travel with limited supplier data availability for accurate measurement',
      'Growing CSRD compliance requirements from EU-headquartered enterprise customers that demand structured ESG data, human rights due diligence documentation, and audit-ready disclosure processes',
      'Tension between rapid business and headcount growth and the ESG data quality, governance maturity, and reporting discipline that institutional investors and large enterprise customers expect',
      'Need to connect environmental sustainability metrics with people analytics, data privacy governance, AI ethics, and workforce inclusion topics in a coherent and credible ESG narrative',
    ],
    opportunities: [
      'Build differentiated positioning with enterprise customers and institutional investors through a structured Scope 3 measurement methodology supported by our proprietary ESG data and analytics platform',
      'Improve supplier transparency and procurement ESG standards at manageable scale using our technology-enabled supplier assessment and questionnaire management tools',
      'Track data centre energy intensity, renewable energy sourcing progress, and power usage effectiveness (PUE) with the rigour required by CSRD customer requirements and institutional ESG rating systems',
      'Prepare for global CSRD and ISSB disclosure requirements ahead of regulatory timelines to reduce future execution cost and competitive disadvantage in enterprise markets',
    ],
    regulatory: [
      'EU Corporate Sustainability Reporting Directive (CSRD) supply chain due diligence requirements for Indian IT and technology companies in EU enterprise customer supply chains',
      'SEBI BRSR mandatory reporting obligations for listed Indian IT companies covering Scope 1, Scope 2, and priority Scope 3 disclosures and supply chain sustainability metrics',
      'Enterprise customer procurement requirements for verified ESG performance data, supplier code of conduct compliance, data centre sustainability reporting, and third-party audit documentation',
      'Institutional investor and talent market expectations on workforce culture, inclusion metrics, data privacy governance, and AI ethics as ESG topics alongside environmental performance',
    ],
    engagementHighlights: [
      'Scope 3 emissions measurement frameworks specifically designed for software services, platform, and IT outsourcing business models using our proprietary ESG data and analytics platform',
      'CSRD readiness assessment, human rights due diligence gap analysis, and disclosure documentation support for Indian technology companies in EU enterprise customer supply chains',
      'Enterprise customer ESG questionnaire response pack development and supplier questionnaire management tools to reduce customer-facing friction and support enterprise sales processes',
      'Data centre and workplace sustainability KPI design, benchmarking against sector peers, and reporting support for investor communication and enterprise procurement qualification',
    ],
    materialTopics: [
      { topic: 'Scope 3 Emissions and Supply Chain Carbon Footprint', metric: 'GRI 305-3 & CSRD C.2', context: 'For most technology companies, the largest carbon footprint sits in purchased goods and services, cloud infrastructure energy, hardware manufacturing, business travel, and upstream supplier activity rather than direct operations.' },
      { topic: 'Data Centre Energy Efficiency and Renewable Sourcing', metric: 'GRI 302-1 & RE100', context: 'Data centre energy consumption, power usage effectiveness (PUE), and renewable energy sourcing are increasingly material for CSRD customer compliance, enterprise procurement decisions, and institutional investor ESG analysis.' },
      { topic: 'Governance, Data Privacy, AI Ethics, and Inclusion', metric: 'GRI 405-1 & 418-1', context: 'Workforce diversity, data privacy management, AI governance frameworks, and ethical business conduct sit alongside environmental topics in institutional investor reviews, enterprise procurement evaluations, and talent acquisition.' },
      { topic: 'Enterprise Customer and Supply Chain Disclosures', metric: 'CSRD & GRI 408-1', context: 'Global enterprise customers, government procurement bodies, and CSRD-obligated clients increasingly require structured and verified ESG questionnaire responses, responsible sourcing commitments, and audit-ready documentation.' },
    ],
    marketLeaderActions: [
      'Leading Indian IT companies are building structured Scope 3 measurement frameworks and enterprise customer ESG response packs instead of relying on rough emission estimates and informal questionnaire answers.',
      'Top technology players are investing in supplier ESG transparency programmes and Scope 3 accounting methodology improvements using technology platforms that reduce annual data collection burden and increase disclosure confidence.',
      'Mature IT organisations are developing rigorous data centre sustainability metrics, renewable energy procurement narratives, and digital infrastructure efficiency reporting for CSRD and institutional investor requirements.',
      'Larger technology companies are integrating governance, data privacy, workforce inclusion, and climate topics into unified ESG management frameworks for consistent institutional investor and enterprise customer communication.',
    ],
    relevantServiceSlugs: ['esg-data-intelligence', 'brsr-esg-compliance', 'esg-strategy-transformation'],
  },
  {
    slug: 'agriculture-food',
    title: 'Agriculture and Food',
    icon: 'Wheat',
    desc: 'ESG advisory for agriculture and food businesses in India covering sustainable sourcing strategy, water footprint and land use assessment, deforestation-free supply chain advisory, nature-related risk (TNFD), regenerative agriculture programmes, and BRSR compliance for listed agribusinesses.',
    overview: 'Agriculture and food businesses in India face ESG exposure across land use, water stress, farmer livelihoods, supply chain traceability, deforestation and biodiversity risk, packaging sustainability, and food safety governance. Global export buyers, institutional investors, and sustainability certification bodies are raising responsible sourcing standards, while SEBI BRSR requirements are adding disclosure obligations for listed agribusinesses. ESG Astraa supports food and agriculture companies with technology-enabled water and land use analysis, traceability frameworks, nature-related risk advisory, and BRSR compliance support to manage upstream supply chain risk and build credible, evidence-backed sustainability claims for export markets and investors.',
    focus: [
      'Sustainable Sourcing Strategy and Supply Chain Traceability',
      'Water Footprint Assessment and Land Use Hotspot Mapping',
      'Deforestation-Free and Nature-Positive Supply Chain Advisory',
      'Regenerative Agriculture and Smallholder Farmer Livelihood Programmes',
      'BRSR Compliance for Listed Agribusiness and Food Companies',
      'TNFD Nature-Related Risk Disclosure Advisory',
    ],
    challenges: [
      'Low-visibility supply chains with uneven traceability, smallholder farmer dependence, and limited digital documentation of sourcing origin, farming practices, and land conversion history',
      'Water stress concentration and land-use risk in key sourcing geographies that affect both supply chain continuity and eligibility for sustainability certification and export market access',
      'Growing global buyer, export customer, and institutional investor pressure for deforestation-free sourcing commitments, nature-positive claims, and documented traceability audit trails',
      'Difficulty converting complex sustainability programmes and farmer engagement initiatives into quantified business outcome metrics suitable for BRSR and investor sustainability reporting',
    ],
    opportunities: [
      'Build stronger responsible sourcing standards and documented supplier engagement programmes with traceability systems supported by ESG Astraa\'s technology-enabled supply chain data platform',
      'Quantify water use hotspots and land conversion risk areas using geospatial analytics and our ESG data platform to identify priority sourcing regions for intervention and resilience investment',
      'Develop credible deforestation-free and nature-positive sourcing narratives for export buyers, global certification bodies, and institutional investors backed by documented operational controls',
      'Link smallholder farmer livelihood programmes, community resilience initiatives, and supply continuity metrics to investor-facing sustainability reporting and BRSR disclosure requirements',
    ],
    regulatory: [
      'Export market and international buyer requirements for supply chain traceability documentation, deforestation-free sourcing verification, and responsible sourcing certification for Indian agricultural commodities',
      'Water use management, packaging sustainability, extended producer responsibility (EPR) obligations, and agricultural waste-related compliance requirements for Indian food and agribusiness companies',
      'SEBI BRSR mandatory reporting requirements for listed agribusiness and food companies covering supply chain environmental metrics, water stewardship, and farmer and community welfare disclosures',
      'Emerging TNFD nature-related financial disclosure expectations and biodiversity and ecosystem risk assessment frameworks becoming material for food sector institutional investors and lenders',
    ],
    engagementHighlights: [
      'Sourcing risk diagnostics and supply chain traceability gap analysis using our technology platform for supply origin documentation, supplier scoring, and certification readiness assessment',
      'Water use and land conversion hotspot mapping using geospatial data and ESG analytics to prioritise intervention across high-risk sourcing geographies and commodity categories',
      'Smallholder farmer and supply base engagement frameworks with structured documentation systems for responsible sourcing commitments, code of conduct compliance, and sustainability certification support',
      'BRSR and sustainability disclosure development that links operational sourcing practices, water stewardship data, and farmer welfare metrics to institutional investor and export customer expectations',
    ],
    materialTopics: [
      { topic: 'Supply Chain Traceability and Responsible Sourcing', metric: 'GRI 204-1 & EUDR', context: 'Traceability to farm or origin level, smallholder farmer engagement documentation, and sourcing control evidence are increasingly central to export market access, sustainability certification, and institutional ESG rating for food companies.' },
      { topic: 'Water Stress and Land Use Risk', metric: 'GRI 303-3 & TNFD', context: 'Water scarcity in key sourcing regions, land conversion pressure, and irrigation intensity shape both operational supply chain risk and growing institutional investor expectations on nature-related financial disclosure.' },
      { topic: 'Deforestation, Biodiversity, and Nature-Positive Claims', metric: 'GRI 304-2 & 304-3', context: 'Export buyers, global retailers, and institutional investors expect evidenced controls around land conversion, forest protection, and biodiversity management rather than broad sustainability commitments without documented operational controls.' },
      { topic: 'Farmer Livelihoods and Rural Community Resilience', metric: 'GRI 202-1 & 412-2', context: 'Smallholder farmer welfare, income stability programmes, and rural community resilience are material where supply chain continuity and quality standards depend directly on producer sustainability and climate adaptation capacity.' },
    ],
    marketLeaderActions: [
      'Leading Indian agriculture and food companies are tightening traceability standards and responsible sourcing documentation deeper into their supply bases, particularly for export-oriented commodities facing deforestation scrutiny from EU buyers.',
      'Top players are using geospatial and ESG data analytics to identify water stress and land conversion hotspots in key sourcing regions before they escalate into brand risk, certification loss, or supply continuity problems.',
      'More mature agribusiness companies are building structured smallholder farmer engagement and producer capability programmes that both improve supply quality and generate documented sustainability impact data for investor reporting.',
      'Market leaders are consolidating export customer sustainability questionnaires, BRSR environmental disclosures, and internal sourcing KPIs into a single technology-enabled reporting workflow to reduce duplication and improve data quality.',
    ],
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
