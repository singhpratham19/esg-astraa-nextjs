// Deep 4-section content for each industry microsite
// Structure: Overview | Services | Case Studies | Thought Leadership

export interface IndustryMaterialityItem {
  issue: string
  importance: 'Critical' | 'High' | 'Medium'
  desc: string
}

export interface IndustryServicePillar {
  title: string
  icon: string
  desc: string
  offerings: string[]
}

export interface IndustryCaseStudy {
  title: string
  tag: string
  challenge: string
  action: string
  result: string
  metrics: { val: string; lbl: string }[]
}

export interface IndustryInsightItem {
  type: 'Whitepaper' | 'Regulatory Update' | 'Thought Leadership' | 'Industry Report' | 'Expert Interview'
  title: string
  desc: string
  gated: boolean
  date: string
}

export interface IndustryDeepContent {
  slug: string
  overview: {
    headline: string
    body: string[]
    stateOfSector: { title: string; desc: string }[]
    regulatoryHighlights: { name: string; desc: string; urgency: string }[]
    materiality: IndustryMaterialityItem[]
    valueProp: { title: string; desc: string }[]
  }
  services: {
    intro: string
    pillars: IndustryServicePillar[]
  }
  caseStudies: IndustryCaseStudy[]
  thoughtLeadership: {
    intro: string
    insights: IndustryInsightItem[]
    expertPerspective: { name: string; role: string; quote: string; topic: string }
    checklistCTA: { title: string; desc: string; label: string }
  }
}

export const INDUSTRY_DEEP_CONTENT: Record<string, IndustryDeepContent> = {
  'manufacturing': {
    slug: 'manufacturing',
    overview: {
      headline: 'The Case for Sustainable Manufacturing in India',
      body: [
        'India\'s manufacturing sector is at an inflection point. As the government pursues its 2030 net-zero intensity targets, manufacturers face a convergence of regulatory pressure, export-market requirements, and investor scrutiny that makes ESG no longer optional.',
        'The shift from linear to circular production models — take, make, waste — to regenerative, closed-loop systems is redefining operational benchmarks. Companies that treat this as compliance-only will be outcompeted by those who see it as a value-creation lever.',
      ],
      stateOfSector: [
        { title: 'From Linear to Circular', desc: 'India\'s top manufacturers are under pressure to shift from single-use production cycles to closed-loop systems. Circular economy principles — product redesign, remanufacturing, material recovery — are becoming competitive differentiators, not just CSR activities.' },
        { title: 'Export Market Pressure', desc: 'EU CBAM, UK CBAM, and growing global standards mean that Indian exporters must now report embedded carbon in goods. Manufacturers without credible emissions data risk losing contracts with European OEMs and global supply chain partners.' },
        { title: 'Capital Market Signals', desc: 'ESG-linked lending, green bonds, and sustainability-indexed capital are shifting cost of capital for manufacturers. SEBI\'s BRSR Core requirements for top 150 listed companies signal India\'s own capital market evolution toward mandatory disclosure.' },
        { title: 'Worker Safety & Social License', desc: 'Workforce health, safety, and fair wages are no longer soft metrics. They drive operational continuity, export customer qualification, and increasingly, access to development finance institution (DFI) capital.' },
      ],
      regulatoryHighlights: [
        { name: 'SEBI BRSR & BRSR Core', desc: 'Mandatory for top 1000 NSE/BSE-listed companies. BRSR Core extends value-chain disclosure expectations to top 150 listed entities, requiring assured data on emissions, energy, water, and workforce metrics.', urgency: 'Active' },
        { name: 'EU CBAM', desc: 'Carbon Border Adjustment Mechanism applies to steel, aluminium, fertilizers, cement, and electricity. Indian exporters in these categories must report product carbon content or face tariffs at EU ports. Phase-in began October 2023.', urgency: 'Active' },
        { name: 'BIS & Product Standards', desc: 'Bureau of Indian Standards is expanding mandatory ecolabelling and energy efficiency requirements. Extended Producer Responsibility (EPR) obligations for plastics, e-waste, and batteries are tightening.', urgency: 'Escalating' },
        { name: 'Occupational Safety Rules', desc: 'Updated Factories Act provisions and industry-specific OHS standards are raising the baseline for health, safety, and welfare reporting — directly feeding into BRSR social disclosures.', urgency: 'Compliance' },
      ],
      materiality: [
        { issue: 'Greenhouse Gas Emissions (Scope 1 & 2)', importance: 'Critical', desc: 'Energy-intensive processes drive direct and indirect emissions that are material to BRSR, CBAM compliance, and investor ratings.' },
        { issue: 'Supply Chain ESG (Scope 3 & Value Chain)', importance: 'Critical', desc: 'Upstream supplier practices, material traceability, and downstream product carbon content are core to BRSR Core and customer due diligence.' },
        { issue: 'Energy Intensity & Efficiency', importance: 'Critical', desc: 'Energy cost as a share of production cost makes efficiency improvements directly material to both ESG performance and financial returns.' },
        { issue: 'Workforce Safety & Well-being', importance: 'High', desc: 'Industrial accident rates, health coverage, and wage standards are high-salience issues for investors, export customers, and regulators.' },
        { issue: 'Water Consumption & Discharge', importance: 'High', desc: 'Manufacturing is a major water user. Discharge quality and water intensity are material in water-stressed geographies and for ESG raters.' },
        { issue: 'Hazardous Waste Management', importance: 'High', desc: 'Proper disposal, treatment, and reporting of hazardous by-products is a legal and reputational requirement across most manufacturing sub-sectors.' },
        { issue: 'Circular Economy & Material Efficiency', importance: 'Medium', desc: 'Waste-to-landfill ratios, recycled content, and product take-back are emerging metrics for investor ESG scores and export customer qualification.' },
        { issue: 'Board Governance & ESG Oversight', importance: 'Medium', desc: 'Board-level accountability for ESG — policies, targets, and oversight mechanisms — is increasingly expected by institutional investors and BRSR assessors.' },
      ],
      valueProp: [
        { title: 'Operational Resilience', desc: 'ESG-integrated operations reduce exposure to regulatory disruption, supply chain failures, and resource-price volatility — building a more resilient manufacturing base.' },
        { title: 'Cost Reduction Through Efficiency', desc: 'Energy audits, water recycling, and waste reduction programmes consistently deliver 10–30% resource cost reductions alongside improved ESG scores.' },
        { title: 'Capital Access & Cost Advantage', desc: 'Manufacturers with credible ESG data access green finance, ESG-linked loans with lower rates, and DFI capital — creating a direct financial return on ESG investment.' },
        { title: 'Market & Customer Retention', desc: 'Export qualification, OEM supplier approval, and retail customer sustainability commitments all increasingly depend on verified ESG performance data.' },
      ],
    },
    services: {
      intro: 'Our manufacturing advisory practice delivers end-to-end ESG solutions — from baseline measurement to board-level disclosure — grounded in the operating reality of Indian manufacturing.',
      pillars: [
        {
          title: 'Decarbonisation & Energy Transition',
          icon: 'Flame',
          desc: 'Structured pathways to reduce energy intensity, transition fuel sources, and measure and report GHG emissions across Scope 1, 2, and 3.',
          offerings: [
            'Energy audits and baseline GHG assessments (Scope 1, 2, 3)',
            'Net-zero and carbon reduction roadmap design',
            'Renewable energy Power Purchase Agreement (PPA) advisory',
            'Fuel-switching and industrial heat decarbonisation analysis',
            'Science-Based Targets (SBTi) alignment and submission support',
            'CBAM product-level carbon content measurement',
          ],
        },
        {
          title: 'Circular Economy & Waste Optimisation',
          icon: 'Recycle',
          desc: 'Design and implement circular production strategies that reduce waste, recover material value, and meet EPR obligations.',
          offerings: [
            'Zero-waste-to-landfill strategy and implementation roadmap',
            'Product lifecycle assessments (LCA)',
            'Sustainable packaging redesign and EPR compliance',
            'Remanufacturing and take-back programme design',
            'Hazardous waste management and reporting systems',
            'Material efficiency benchmarking and improvement programmes',
          ],
        },
        {
          title: 'Supply Chain ESG & Social Diligence',
          icon: 'Network',
          desc: 'Build supply chain transparency, supplier ESG capability, and workforce standards that satisfy export customers and regulatory mandates.',
          offerings: [
            'Supplier ESG risk assessment and segmentation',
            'Ethical sourcing audits and corrective action programmes',
            'BRSR Core value-chain data collection and verification',
            'Workforce health, safety, and upskilling programme design',
            'Human rights and labour standards due diligence',
            'Supplier capacity building workshops and tools',
          ],
        },
        {
          title: 'ESG Reporting & Digital Transformation',
          icon: 'Database',
          desc: 'Deploy data infrastructure and reporting systems that automate ESG data collection, enable real-time monitoring, and produce audit-ready disclosures.',
          offerings: [
            'BRSR disclosure drafting and assurance support',
            'ESG data architecture and KPI framework design',
            'IoT and AI-enabled real-time resource monitoring advisory',
            'Integrated ESG reporting platform selection and implementation',
            'Third-party assurance preparation and management',
            'Board and investor ESG reporting packs',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'Reducing Carbon Intensity in Automotive Components Manufacturing',
        tag: 'Decarbonisation',
        challenge: 'A Tier-1 automotive components manufacturer faced escalating Scope 2 emissions due to inefficient thermal processing operations and dependence on grid electricity from coal-heavy sources. Rising energy costs and OEM customer ESG qualification requirements created urgent business pressure.',
        action: 'ESG Astraa conducted a full-plant energy and GHG baseline assessment, identifying thermal processing inefficiencies as the primary lever. We designed a waste-heat recovery system, advised on a 10MW rooftop solar PPA, and developed an BRSR-compliant emissions reporting architecture covering all three scopes.',
        result: 'The company achieved a 30% reduction in carbon footprint within 18 months, secured OEM customer ESG qualification, and generated ₹1.8Cr in annual energy cost savings. BRSR disclosures were completed on schedule with third-party assured emissions data.',
        metrics: [
          { val: '30%', lbl: 'Carbon footprint reduction' },
          { val: '₹1.8Cr', lbl: 'Annual energy savings' },
          { val: '18 months', lbl: 'To full BRSR compliance' },
        ],
      },
      {
        title: 'Scaling Circularity in Industrial Machinery Production',
        tag: 'Circular Economy',
        challenge: 'An industrial machinery manufacturer faced rising virgin material costs, increasing end-of-life product waste, and customer pressure for more sustainable supply chains. The company had no systematic take-back or remanufacturing capability and lacked EPR compliance readiness.',
        action: 'We developed a "Remanufacturing as a Service" business model, including a take-back programme, refurbishment workflow, and circular supply chain design. A product lifecycle assessment (LCA) was commissioned to quantify material reduction impacts and support marketing claims.',
        result: 'Virgin material reliance fell 40%, waste disposal costs decreased by ₹60L annually, and customer retention improved by 15% among sustainability-conscious buyers. The LCA results supported a successful sustainability-linked loan application at 35bps preferential rate.',
        metrics: [
          { val: '40%', lbl: 'Reduction in virgin material use' },
          { val: '₹60L', lbl: 'Annual waste disposal savings' },
          { val: '15%', lbl: 'Improvement in customer retention' },
        ],
      },
      {
        title: 'BRSR Implementation for a Listed Diversified Manufacturer',
        tag: 'Disclosure & Compliance',
        challenge: 'A top-500 NSE-listed diversified manufacturer faced SEBI\'s BRSR deadline with no prior reporting infrastructure, fragmented plant-level data, and no internal ESG function. Board pressure demanded rapid, audit-ready compliance without disrupting operations.',
        action: 'ESG Astraa deployed our 4-phase methodology: gap analysis across 12 manufacturing sites, data collection architecture design, multi-site ESG data aggregation, BRSR disclosure drafting, and assurance preparation — all within a 90-day engagement.',
        result: 'Full BRSR compliance achieved on schedule with assured disclosures submitted to SEBI. The reporting infrastructure is now embedded in the company\'s annual operating cycle, reducing future compliance effort by an estimated 60%.',
        metrics: [
          { val: '90 days', lbl: 'To full BRSR compliance' },
          { val: '142', lbl: 'Disclosure points addressed' },
          { val: '12 sites', lbl: 'Covered in data architecture' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our manufacturing research and advisory insights track the regulatory, operational, and strategic shifts reshaping how India\'s manufacturers approach sustainability.',
      insights: [
        { type: 'Whitepaper', title: 'The Factory of the Future: Where Industry 4.0 Meets Sustainability', desc: 'How automation, AI, and IoT intersect with circular economy principles and net-zero targets to define the next generation of Indian manufacturing. Includes case illustrations from automotive, textiles, and chemicals.', gated: true, date: 'March 2026' },
        { type: 'Regulatory Update', title: 'SEBI BRSR Core: Value Chain Obligations for Top 150 Listed Companies', desc: 'Practical guidance on what BRSR Core requires from manufacturers, what "value chain" means in practice, and how to build a compliant supplier data collection programme.', gated: false, date: 'February 2026' },
        { type: 'Industry Report', title: 'EU CBAM and Indian Manufacturers: Sector Impact Analysis', desc: 'A sector-by-sector analysis of how the EU Carbon Border Adjustment Mechanism affects Indian steel, aluminium, chemicals, and machinery exporters — with a readiness assessment framework.', gated: true, date: 'January 2026' },
        { type: 'Thought Leadership', title: 'Beyond Compliance: How Circular Economy Drives Manufacturing Competitiveness', desc: 'Commentary on how leading Indian manufacturers are using EPR, remanufacturing, and material efficiency not just to comply with regulations but to build structural cost advantages.', gated: false, date: 'December 2025' },
      ],
      expertPerspective: {
        name: 'Arjun Mehta',
        role: 'Lead Advisor, Manufacturing ESG Practice',
        quote: 'The manufacturers who will win the next decade are not the ones who comply with BRSR — they\'re the ones who embed circular logic into their operations, use ESG data to drive cost decisions, and treat supply chain transparency as a competitive weapon. BRSR is the floor, not the ceiling.',
        topic: 'On the strategic value of ESG in Indian manufacturing',
      },
      checklistCTA: {
        title: 'Manufacturing ESG Readiness Checklist',
        desc: 'A 40-point diagnostic covering BRSR disclosure gaps, emissions baseline status, supplier ESG readiness, and circular economy maturity — designed for CFOs, sustainability heads, and operations leaders.',
        label: 'Download Readiness Checklist',
      },
    },
  },

  'energy-power': {
    slug: 'energy-power',
    overview: {
      headline: 'India\'s Energy Transition: The ESG Imperative for Power Sector Players',
      body: [
        'India\'s energy sector is undergoing its most significant transformation in decades. With 500GW renewable capacity targeted by 2030, the Carbon Credit Trading Scheme (CCTS) going live, and global investor pressure intensifying, ESG is now central to energy sector strategy — not peripheral to it.',
        'For generators, transmitters, and developers alike, the questions are no longer whether to act on climate — but how to measure, price, and manage the transition in a way that satisfies regulators, investors, lenders, and communities simultaneously.',
      ],
      stateOfSector: [
        { title: 'The 500GW Transition', desc: 'India\'s commitment to 500GW of non-fossil capacity by 2030 is reshaping capital flows, procurement decisions, and grid management across the power sector. ESG strategy must now align with energy planning cycles.' },
        { title: 'Carbon Markets Going Live', desc: 'India\'s Carbon Credit Trading Scheme (CCTS) creates compliance obligations and monetisation opportunities for large energy sector emitters. Understanding the scheme\'s mechanics is now a business-critical capability.' },
        { title: 'Climate Finance Pressure', desc: 'DFIs, multilateral banks, and international investors are applying Paris-alignment tests to energy infrastructure investments. Projects without credible transition plans face elevated financing costs or outright exclusion.' },
        { title: 'Community & Land Risk', desc: 'Renewable energy projects are encountering increasing community resistance over land use, livelihood displacement, and cultural heritage — issues that require structured ESIA and stakeholder engagement to manage effectively.' },
      ],
      regulatoryHighlights: [
        { name: 'India CCTS', desc: 'The Carbon Credit Trading Scheme creates a compliance carbon market for designated industries. Energy sector entities must understand their obligations, baseline methodologies, and credit monetisation pathways.', urgency: 'Active' },
        { name: 'SEBI BRSR', desc: 'Listed energy companies face BRSR mandatory disclosure obligations. Climate-related financial disclosures aligned to TCFD are increasingly expected by institutional investors and rating agencies.', urgency: 'Active' },
        { name: 'RPO & REC Framework', desc: 'Renewable Purchase Obligations and Renewable Energy Certificates create compliance incentives for distribution companies and large industrial consumers — driving demand for RE supply and carbon accounting.', urgency: 'Compliance' },
        { name: 'International Disclosure Norms', desc: 'IFRS S2 (climate-related disclosures) and TCFD-aligned reporting are becoming expectations for energy companies seeking international capital, green bonds, or DFI project finance.', urgency: 'Escalating' },
      ],
      materiality: [
        { issue: 'Scope 1 & 2 GHG Emissions', importance: 'Critical', desc: 'Direct combustion and grid electricity emissions drive carbon intensity — core to CCTS compliance, investor ratings, and transition credibility.' },
        { issue: 'Carbon Market Participation', importance: 'Critical', desc: 'CCTS obligations and voluntary carbon market opportunities are financially material for both large emitters and renewable developers.' },
        { issue: 'Renewable Integration & Grid Resilience', importance: 'Critical', desc: 'Transition from fossil to renewable generation creates technical, financial, and operational risks that are material to investment decisions.' },
        { issue: 'Water Consumption (Thermal Plants)', importance: 'High', desc: 'Thermal power plants are significant water users. Water stress in sourcing geographies is a material operational and community risk.' },
        { issue: 'Community Impact & Land Rights', importance: 'High', desc: 'Energy infrastructure siting — especially for large-scale renewables — creates community, land, and livelihood risks requiring formal ESIA.' },
        { issue: 'Just Transition & Workforce', importance: 'High', desc: 'Retirement of coal assets and shift to new energy models creates workforce transition challenges — increasingly scrutinised by investors.' },
        { issue: 'Climate Physical Risk', importance: 'Medium', desc: 'Extreme weather events, water scarcity, and temperature changes affect asset performance — requiring physical risk disclosure and adaptation planning.' },
        { issue: 'Governance & Board Oversight', importance: 'Medium', desc: 'Board-level accountability for climate risk and transition strategy is a core expectation of TCFD-aligned investors and DFI lenders.' },
      ],
      valueProp: [
        { title: 'Transition Credibility with Capital', desc: 'A defensible net-zero or transition pathway unlocks DFI capital, green bonds, and sustainability-linked loans — directly reducing cost of capital for energy infrastructure.' },
        { title: 'Carbon Revenue Streams', desc: 'CCTS participation and voluntary carbon market projects can generate meaningful additional revenue from emissions reductions that are already occurring or planned.' },
        { title: 'Regulatory Risk Reduction', desc: 'Proactive engagement with India\'s evolving energy regulation — CCTS, RPO, BRSR — reduces compliance costs and builds constructive regulator relationships.' },
        { title: 'Investor & Lender Confidence', desc: 'Clear climate risk governance and disclosure positions energy companies favourably with the institutional investors and multilateral lenders who increasingly shape sector capital flows.' },
      ],
    },
    services: {
      intro: 'Our energy and power advisory practice combines deep sector knowledge with technical carbon and regulatory expertise to help energy companies navigate the transition profitably.',
      pillars: [
        {
          title: 'Net-Zero & Transition Planning',
          icon: 'TrendingDown',
          desc: 'Design credible, investable transition pathways aligned to India\'s NDC targets and international climate standards.',
          offerings: [
            'Scope 1, 2, and 3 GHG baseline and inventory development',
            'Net-zero and decarbonisation roadmap design',
            'Science-Based Targets (SBTi) alignment and submission',
            'Climate scenario analysis (1.5°C, 2°C, NDC-aligned)',
            'TCFD-aligned climate risk and opportunity disclosure',
            'Asset-level carbon intensity benchmarking',
          ],
        },
        {
          title: 'Carbon Markets & Credit Strategy',
          icon: 'BarChart2',
          desc: 'Navigate India\'s CCTS framework and voluntary carbon markets to meet obligations and generate additional revenue from verified reductions.',
          offerings: [
            'CCTS compliance strategy and carbon accounting design',
            'Carbon credit project development and feasibility',
            'VCS, Gold Standard, and CDM certification advisory',
            'Carbon credit portfolio strategy and trading advisory',
            'Voluntary carbon offset sourcing and quality assessment',
            'Carbon credit market monitoring and intelligence',
          ],
        },
        {
          title: 'Renewable Energy & ESG Finance',
          icon: 'Zap',
          desc: 'Structure renewable energy investments with the ESG credentials and disclosure frameworks needed for green finance access.',
          offerings: [
            'Green bond framework design (ICMA-aligned)',
            'Sustainability-linked loan KPI design and lender engagement',
            'DFI and multilateral lender ESG due diligence support',
            'Renewable energy project ESIA and community engagement',
            'Green hydrogen and storage project ESG frameworks',
            'Investor ESG reporting and investor day presentation support',
          ],
        },
        {
          title: 'Regulatory Compliance & Disclosure',
          icon: 'Shield',
          desc: 'Ensure full compliance with India\'s energy sector ESG regulations while building disclosure infrastructure for future-proofing.',
          offerings: [
            'BRSR disclosure for listed energy entities',
            'CCTS registration, reporting, and compliance management',
            'RPO tracking, REC accounting, and compliance advisory',
            'Assurance preparation for energy and emissions data',
            'Board governance frameworks for climate oversight',
            'Regulatory monitoring and horizon scanning for energy sector',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'Carbon Credit Strategy for a Renewable Energy Developer',
        tag: 'Carbon Markets',
        challenge: 'A 500MW wind and solar developer needed to monetise verified emissions reductions across their portfolio while preparing for India\'s CCTS framework. Existing GHG measurement was incomplete and not certification-ready.',
        action: 'ESG Astraa conducted a Scope 1/2 assessment across all assets, identified eligible reduction volumes, structured VCS project documentation, facilitated credit registration, and built a CCTS readiness framework ahead of scheme commencement.',
        result: 'Successfully registered carbon credits generating ₹4.8Cr in additional revenue in year one, with a clear CCTS compliance pathway established. Assurance-ready emissions data now supports the company\'s green bond issuance ambitions.',
        metrics: [
          { val: '₹4.8Cr', lbl: 'Carbon credit revenue, year 1' },
          { val: '1.2M tCO₂e', lbl: 'Verified and registered' },
          { val: 'VCS certified', lbl: 'Across portfolio' },
        ],
      },
      {
        title: 'TCFD-Aligned Climate Disclosure for a State Power Utility',
        tag: 'Climate Disclosure',
        challenge: 'A state power utility with significant thermal capacity needed to produce its first TCFD-aligned climate disclosure for DFI lenders and rating agencies. Internal capability for scenario analysis and physical risk assessment was non-existent.',
        action: 'We built a TCFD framework covering governance, strategy, risk management, and metrics. Conducted 1.5°C and 2°C scenario analysis on the thermal asset portfolio, assessed physical risk exposure across plants, and drafted the first investor-facing climate disclosure report.',
        result: 'TCFD report accepted by multilateral DFI for project finance review, enabling access to $120M in transition finance at preferential rates. Board governance for climate risk established with annual reporting cycle.',
        metrics: [
          { val: '$120M', lbl: 'Transition finance unlocked' },
          { val: 'First TCFD', lbl: 'Disclosure for a state utility' },
          { val: '3 scenarios', lbl: 'Modelled (1.5°C, 2°C, NDC)' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our energy practice publishes research and regulatory analysis at the intersection of India\'s energy transition and global climate finance standards.',
      insights: [
        { type: 'Industry Report', title: 'Carbon Markets in India: CCTS Framework, Opportunities & Corporate Strategy', desc: 'Comprehensive analysis of India\'s Carbon Credit Trading Scheme — mechanics, sector coverage, credit pricing scenarios, and corporate strategy recommendations for energy sector players.', gated: true, date: 'February 2026' },
        { type: 'Whitepaper', title: 'Net-Zero Pathways for Indian Energy Companies: A Sector Playbook', desc: 'Strategic analysis of decarbonisation pathways, renewable integration economics, and transition finance options for generators, developers, and distribution companies.', gated: true, date: 'January 2026' },
        { type: 'Regulatory Update', title: 'India CCTS: What Energy Companies Must Do Before the Scheme Opens', desc: 'A practical 10-step guide to CCTS registration, baseline setting, and compliance infrastructure for designated energy sector entities.', gated: false, date: 'December 2025' },
        { type: 'Thought Leadership', title: 'Green Hydrogen and ESG: Investment Readiness for India\'s Emerging Sector', desc: 'Expert commentary on how green hydrogen developers can build the ESG credentials and disclosure frameworks that global capital providers require.', gated: false, date: 'November 2025' },
      ],
      expertPerspective: {
        name: 'Priya Nair',
        role: 'Director, Carbon Advisory Practice',
        quote: 'India\'s carbon market is not just a compliance mechanism — it\'s a revenue opportunity for RE developers and an innovation driver for large emitters. The companies that understand CCTS mechanics, VCS certification, and DFI expectations will be first to benefit. The window to prepare is now.',
        topic: 'On India\'s Carbon Credit Trading Scheme and energy sector strategy',
      },
      checklistCTA: {
        title: 'Carbon Maturity Assessment',
        desc: 'A 30-minute diagnostic covering GHG measurement completeness, CCTS readiness, transition plan robustness, and climate disclosure quality — with a scored output and priority action list.',
        label: 'Schedule a Carbon Maturity Assessment',
      },
    },
  },

  'financial-services': {
    slug: 'financial-services',
    overview: {
      headline: 'ESG Integration in Financial Services: From Risk to Portfolio Strategy',
      body: [
        'India\'s financial institutions are moving from ESG-as-disclosure to ESG-as-strategy. RBI\'s climate risk guidance, SEBI\'s BRSR obligations for listed FIs, and growing global capital market norms around financed emissions are driving a step-change in how banks, NBFCs, and asset managers approach sustainability.',
        'The institutions that will lead are those that build genuine analytical capability — not just policy frameworks — to assess, disclose, and manage climate and ESG risk across their portfolios and balance sheets.',
      ],
      stateOfSector: [
        { title: 'Financed Emissions Accountability', desc: 'Portfolio climate alignment — measuring and disclosing the carbon intensity of loan and investment portfolios — is becoming an expectation from international investors, rating agencies, and DFI partners.' },
        { title: 'Green Product Race', desc: 'Banks and NBFCs are racing to launch labelled green, social, and sustainability-linked products. But poorly designed products with weak KPIs face greenwashing scrutiny from regulators and sophisticated investors.' },
        { title: 'RBI Climate Risk Trajectory', desc: 'RBI\'s 2023 circular on climate risk management signals the direction: risk frameworks, stress testing, and disclosures will follow. Proactive institutions are already building the internal capability to comply ahead of mandate.' },
        { title: 'International Capital Access', desc: 'DFIs, multilateral banks, and ESG-indexed funds are applying rigorous ESG screens to Indian FI investments. Access to this capital increasingly depends on credible ESG governance and disclosure.' },
      ],
      regulatoryHighlights: [
        { name: 'RBI Climate Risk Guidance', desc: 'RBI\'s 2023 circular requires banks and select NBFCs to integrate climate-related financial risks into governance, strategy, risk management, and disclosure frameworks — with formal timelines being developed.', urgency: 'Active' },
        { name: 'SEBI BRSR (Listed FIs)', desc: 'Listed banks, NBFCs, and asset managers face BRSR mandatory disclosure. Financial sector-specific KPIs include energy, emissions, waste, and increasingly, portfolio ESG metrics.', urgency: 'Active' },
        { name: 'IFRS S2 / TCFD', desc: 'International disclosure norms for climate-related financial risks and opportunities — including scenario analysis and Scope 3 financed emissions — are becoming baseline expectations for international investors.', urgency: 'Escalating' },
        { name: 'Green Bond & SLL Regulations', desc: 'SEBI\'s green bond framework and international ICMA Green Bond Principles govern the structuring, reporting, and claims permissible for labelled debt products — with use of proceeds and KPI scrutiny intensifying.', urgency: 'Compliance' },
      ],
      materiality: [
        { issue: 'Portfolio Climate Risk (Financed Emissions)', importance: 'Critical', desc: 'Climate-related credit risk across lending and investment portfolios is the most material ESG issue for financial institutions — and the one with the highest analytical complexity.' },
        { issue: 'Green Product Integrity', importance: 'Critical', desc: 'Ensuring that labelled green, social, and sustainability-linked products meet regulatory, investor, and framework standards — avoiding greenwashing exposure.' },
        { issue: 'Governance & Board ESG Oversight', importance: 'High', desc: 'Board-level accountability for ESG risk, strategy, and disclosure is a core expectation of RBI guidance and international investor standards.' },
        { issue: 'Climate Transition Risk in Lending', importance: 'High', desc: 'Concentration in carbon-intensive sectors creates transition risk in loan books — material for credit ratings, regulatory stress testing, and investor due diligence.' },
        { issue: 'Own Operations Emissions', importance: 'Medium', desc: 'Financial institutions\' direct environmental footprint — offices, data centres, business travel — is smaller than portfolio impact but material for BRSR and ESG ratings.' },
        { issue: 'Financial Inclusion & Social Impact', importance: 'Medium', desc: 'Lending to underserved segments, financial access metrics, and community impact are material for development-focused investors and DFI co-lenders.' },
        { issue: 'Cybersecurity & Data Governance', importance: 'High', desc: 'Data privacy, cybersecurity governance, and responsible AI use are ESG-adjacent issues with increasing materiality for governance ratings and regulatory scrutiny.' },
        { issue: 'Workforce Diversity & Fair Pay', importance: 'Medium', desc: 'Gender diversity, equitable pay, and leadership inclusion are scrutinised by ESG rating agencies and institutional investors with diversity mandates.' },
      ],
      valueProp: [
        { title: 'Access to Sustainable Capital', desc: 'Credible ESG frameworks unlock DFI co-lending, green bond issuance, and ESG-indexed fund flows — often at preferential cost-of-capital versus conventional funding.' },
        { title: 'Better Risk-Adjusted Lending', desc: 'Climate and ESG risk integration in underwriting improves credit decisions, reduces sector concentration risk, and builds a more resilient portfolio.' },
        { title: 'Product Differentiation', desc: 'Institutions with genuinely credible sustainability-linked products win mandates from corporate borrowers with ESG commitments and attract international co-lenders.' },
        { title: 'Regulatory Confidence', desc: 'Proactive engagement with RBI guidance and SEBI requirements reduces future compliance burden and builds a constructive relationship with regulators.' },
      ],
    },
    services: {
      intro: 'Our financial services ESG practice — led by CA-qualified sustainable finance specialists — helps banks, NBFCs, and asset managers build genuine ESG capability across product design, risk management, and disclosure.',
      pillars: [
        {
          title: 'Green & Sustainable Finance Frameworks',
          icon: 'Landmark',
          desc: 'Design, certify, and operationalise green bond, social bond, sustainability-linked loan, and ESG fund frameworks that meet regulatory and investor standards.',
          offerings: [
            'Green bond framework design (ICMA Green Bond Principles aligned)',
            'Sustainability-linked loan KPI design and lender engagement',
            'Second-party opinion (SPO) procurement and management',
            'Use-of-proceeds monitoring and reporting systems',
            'ESG fund classification and disclosure frameworks',
            'Green deposit programme design and compliance',
          ],
        },
        {
          title: 'Portfolio Climate Alignment',
          icon: 'PieChart',
          desc: 'Measure, analyse, and disclose the climate risk and emissions profile of lending and investment portfolios to meet investor, DFI, and regulatory expectations.',
          offerings: [
            'Financed emissions measurement (PCAF methodology)',
            'Portfolio climate scenario analysis (NGFS scenarios)',
            'Sector climate risk heat mapping and concentration analysis',
            'Climate stress testing framework design',
            'Paris alignment pathway design for loan book',
            'Investor-facing portfolio ESG reporting',
          ],
        },
        {
          title: 'ESG Risk Integration',
          icon: 'ShieldCheck',
          desc: 'Embed ESG and climate risk into credit underwriting, deal structuring, and risk governance frameworks across the institution.',
          offerings: [
            'ESG credit risk assessment tools and methodology',
            'Climate risk integration in credit policies and procedures',
            'ESG due diligence frameworks for project and infrastructure finance',
            'RBI climate risk circular compliance roadmap',
            'Board governance for climate risk and ESG oversight',
            'ESG risk appetite statement and policy design',
          ],
        },
        {
          title: 'BRSR & ESG Disclosure',
          icon: 'FileText',
          desc: 'Produce assured, investor-grade ESG disclosures that satisfy BRSR requirements, TCFD expectations, and DFI partner reporting standards.',
          offerings: [
            'BRSR disclosure for listed banks and NBFCs',
            'TCFD-aligned climate risk disclosure report',
            'IFRS S2 readiness assessment and gap analysis',
            'ESG ratings engagement and improvement advisory',
            'Annual report ESG section drafting and review',
            'Investor ESG communication and roadshow support',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'Green Bond Framework for a Mid-Tier NBFC',
        tag: 'Green Finance',
        challenge: 'A mid-tier NBFC sought to issue its first ₹500Cr green bond to fund renewable energy and green building projects, but lacked a sustainability framework, taxonomy alignment, and the investor-facing ESG narrative required for a successful issuance.',
        action: 'ESG Astraa designed a green bond framework aligned to ICMA Green Bond Principles, India\'s Sovereign Green Bond Framework, and CBI standards. We sourced a second-party opinion from an international reviewer, prepared the investor presentation, and designed use-of-proceeds monitoring and reporting infrastructure.',
        result: 'Successful ₹500Cr issuance with 1.4x oversubscription, establishing the institution as a credible green finance participant. The framework also positioned the NBFC for future ESG-linked co-lending with DFI partners.',
        metrics: [
          { val: '₹500Cr', lbl: 'Green bond issuance' },
          { val: '1.4x', lbl: 'Oversubscription' },
          { val: '12 weeks', lbl: 'Framework to issuance' },
        ],
      },
      {
        title: 'Climate Risk Integration for a Private Sector Bank',
        tag: 'Portfolio Alignment',
        challenge: 'A private sector bank with significant lending exposure to carbon-intensive sectors needed to assess its portfolio climate risk ahead of RBI guidance and an international DFI co-lending review. Internal capabilities for financed emissions and scenario analysis were absent.',
        action: 'We conducted PCAF-methodology financed emissions measurement across the corporate and project finance portfolio, ran NGFS scenario analysis, produced a sector climate risk heat map, and designed a climate risk integration framework for credit policies.',
        result: 'Portfolio climate risk report accepted by DFI partner for co-lending approval. Board adopted climate risk governance framework with quarterly reporting. The bank launched its first climate risk disclosure section in annual report.',
        metrics: [
          { val: 'PCAF', lbl: 'Financed emissions methodology' },
          { val: '₹8,000Cr', lbl: 'Portfolio coverage assessed' },
          { val: 'DFI approved', lbl: 'Co-lending access secured' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our financial services research covers the intersection of India\'s regulatory evolution, green finance market development, and global portfolio climate standards.',
      insights: [
        { type: 'Thought Leadership', title: 'The State of Green Finance in India: Taxonomy, Bonds & ESG-Linked Lending', desc: 'Expert commentary on India\'s green finance ecosystem — sovereign green bonds, market depth, taxonomy development, and the evolving landscape of ESG-linked capital for banks and NBFCs.', gated: false, date: 'November 2025' },
        { type: 'Regulatory Update', title: 'RBI Climate Risk Circular: What Banks and NBFCs Must Do Now', desc: 'A practical guide to building the governance, risk management, and disclosure infrastructure required by RBI\'s climate risk expectations — with timeline and priority actions.', gated: false, date: 'October 2025' },
        { type: 'Whitepaper', title: 'Financed Emissions: A Practitioner\'s Guide for Indian Banks', desc: 'How to measure, report, and set reduction targets for portfolio emissions using PCAF methodology — with India-specific sector data challenges and solutions.', gated: true, date: 'September 2025' },
        { type: 'Industry Report', title: 'ESG-Linked Lending in India: Market Trends & KPI Quality Analysis', desc: 'Analysis of India\'s growing SLL market — deal volumes, sector distribution, KPI design quality, and recommendations for credible product structuring.', gated: true, date: 'August 2025' },
      ],
      expertPerspective: {
        name: 'Riya Sharma CA',
        role: 'Head of Sustainable Finance Advisory',
        quote: 'Indian banks are at a turning point. RBI has signalled the direction; DFI partners are already applying climate screens; and sophisticated corporate borrowers are looking for financing partners who understand their sustainability journey. The institutions that build genuine ESG capability now — not just policy frameworks — will capture the green finance opportunity and manage the risk better than those who wait.',
        topic: 'On the strategic opportunity in sustainable finance for Indian FIs',
      },
      checklistCTA: {
        title: 'Sustainable Finance Readiness Assessment',
        desc: 'A diagnostic covering green product framework quality, portfolio climate risk measurement, RBI circular compliance status, and BRSR disclosure completeness — with a prioritised improvement roadmap.',
        label: 'Request a Sustainable Finance Assessment',
      },
    },
  },

  'healthcare-pharma': {
    slug: 'healthcare-pharma',
    overview: {
      headline: 'ESG in Healthcare & Pharma: Beyond Compliance to Patient and Planet Impact',
      body: [
        'India\'s healthcare and pharma sector manages one of the most complex ESG profiles of any industry — intersecting patient safety, product integrity, supply chain ethics, clinical waste, access and affordability, and workforce well-being in a single operating environment.',
        'With BRSR mandatory for listed pharma and hospital groups, BMW Rules tightening, and global customers scrutinising supply chain ESG practices, healthcare organisations need ESG strategies that are operationally credible, not just narratively appealing.',
      ],
      stateOfSector: [
        { title: 'Social Impact Accountability', desc: 'Investors and regulators are increasingly asking healthcare companies to quantify their social value — access metrics, patient outcomes, and community health impact — not just compliance with environmental rules.' },
        { title: 'Supply Chain Under Scrutiny', desc: 'API sourcing, chemical inputs, and contract manufacturing networks face rising due diligence requirements from global pharma majors, ESG raters, and export regulators — especially on labour standards and environmental practices.' },
        { title: 'Waste & Environmental Footprint', desc: 'Biomedical waste management, pharmaceutical effluent, and chemical waste handling are high-risk areas for healthcare organisations — with BMW Rules enforcement strengthening and ESG raters paying close attention.' },
        { title: 'Talent & Governance', desc: 'Workforce safety, equitable compensation, and ethical governance — especially around clinical trial practices, pricing, and access — are material ESG issues for pharma companies seeking global partnerships and investment.' },
      ],
      regulatoryHighlights: [
        { name: 'SEBI BRSR', desc: 'Listed pharma and healthcare companies face BRSR mandatory disclosure. Healthcare-specific KPIs include waste management, water use, workforce safety, and access to essential medicines metrics.', urgency: 'Active' },
        { name: 'BMW Rules (Biomedical Waste)', desc: 'Biomedical Waste Management Rules mandate colour-coded segregation, treatment, and authorisation for all healthcare entities — with enforcement increasingly linked to licensing and institutional reputation.', urgency: 'Active' },
        { name: 'Drug Pricing & Access', desc: 'NPPA price controls and access-to-medicines advocacy create governance and reputational risk for pharma companies — increasingly reflected in ESG ratings and investor stewardship.', urgency: 'Escalating' },
        { name: 'Global Customer ESG Requirements', desc: 'Multinational pharma majors and hospital chains are requiring API suppliers and contract manufacturers to meet supply chain ESG standards — including audits, certifications, and sustainability data.', urgency: 'Compliance' },
      ],
      materiality: [
        { issue: 'Biomedical & Hazardous Waste', importance: 'Critical', desc: 'Clinical waste management is a core regulatory and environmental issue for hospitals and pharma manufacturers — with direct licensing and reputational risk.' },
        { issue: 'Product Safety & Pharmacovigilance', importance: 'Critical', desc: 'Drug quality, adverse event reporting, and recall management are governance-adjacent ESG issues with direct patient harm potential.' },
        { issue: 'Access & Affordability', importance: 'High', desc: 'Access to essential medicines, pricing practices, and geographic reach are material for pharma companies — scrutinised by investors with social mandates and development-focused ESG raters.' },
        { issue: 'Supply Chain Ethics & Traceability', importance: 'High', desc: 'API sourcing, chemical inputs, and contract manufacturing labour practices are exposed to ESG due diligence from global customers and index methodologies.' },
        { issue: 'Water Use & Pharmaceutical Effluent', importance: 'High', desc: 'Pharma manufacturing is water-intensive and generates chemical effluent — both high-risk from regulatory and ESG rating perspectives.' },
        { issue: 'Workforce Safety & Fair Treatment', importance: 'High', desc: 'Hospital and manufacturing workforce safety, equitable pay, and non-discrimination are material social KPIs for BRSR and ESG raters.' },
        { issue: 'Energy & GHG Emissions', importance: 'Medium', desc: 'Energy use in manufacturing, cold chain operations, and hospital infrastructure drives GHG emissions — increasingly measured and reported under BRSR.' },
        { issue: 'Clinical Trial Ethics & Governance', importance: 'Medium', desc: 'Trial participant rights, informed consent, and post-trial access are governance-adjacent ESG issues for pharma companies with significant clinical R&D.' },
      ],
      valueProp: [
        { title: 'Regulatory & Licensing Security', desc: 'Credible ESG practices — especially in waste management and environmental compliance — reduce licensing risk and regulatory disruption for healthcare operations.' },
        { title: 'Global Supply Chain Access', desc: 'Meeting the ESG due diligence requirements of multinational pharma partners and hospital procurement systems opens access to higher-value supply contracts.' },
        { title: 'Investor & Lender Confidence', desc: 'A well-structured ESG programme with credible social impact metrics builds the investor confidence that supports equity valuations and green/social finance access.' },
        { title: 'Brand & Talent Advantage', desc: 'Healthcare organisations with authentic ESG commitments — visible in waste practices, access metrics, and workplace standards — attract talent and maintain consumer trust more effectively.' },
      ],
    },
    services: {
      intro: 'Our healthcare and pharma advisory practice combines regulatory depth with operational pragmatism — delivering ESG programmes that work in clinical and manufacturing environments.',
      pillars: [
        {
          title: 'BRSR & ESG Disclosure',
          icon: 'ClipboardCheck',
          desc: 'Design and implement BRSR reporting systems calibrated to the specific metrics, risks, and governance expectations of listed healthcare and pharma entities.',
          offerings: [
            'BRSR gap analysis and disclosure roadmap',
            'Healthcare-specific ESG KPI framework design',
            'Data collection architecture for clinical and manufacturing sites',
            'BRSR disclosure drafting and assurance preparation',
            'ESG ratings engagement and score improvement advisory',
            'Board ESG governance framework design',
          ],
        },
        {
          title: 'Clinical Waste & Environmental Management',
          icon: 'Trash2',
          desc: 'Build compliant, efficient biomedical and hazardous waste management systems that satisfy BMW Rules, BRSR disclosure, and accreditation requirements.',
          offerings: [
            'BMW Rules compliance audit and gap assessment',
            'Waste management system design and SOP development',
            'Colour-coded segregation and treatment programme',
            'Pharmaceutical effluent and chemical waste advisory',
            'Water use benchmarking and efficiency improvement',
            'Environmental compliance training and awareness programmes',
          ],
        },
        {
          title: 'Social Impact & Access Measurement',
          icon: 'Heart',
          desc: 'Develop robust, investor-credible frameworks to measure, report, and improve the social impact of healthcare services and pharma product access.',
          offerings: [
            'Social impact framework design aligned to GRI, SASB, and IFC',
            'Access and affordability metrics development',
            'Patient outcome and community health KPI design',
            'CSR programme impact assessment and reporting',
            'Stakeholder engagement framework for communities',
            'Social impact data collection and verification',
          ],
        },
        {
          title: 'Supply Chain ESG Due Diligence',
          icon: 'Network',
          desc: 'Build supply chain visibility and supplier ESG capability to meet global customer requirements and BRSR Core value-chain expectations.',
          offerings: [
            'API and chemical supplier ESG risk assessment',
            'Supplier audit design and management',
            'Contract manufacturer ESG qualification framework',
            'Labour rights and safe conditions supplier screening',
            'Traceability system design for regulated inputs',
            'Supplier capacity building and corrective action',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'BRSR Implementation for a Listed Pharma Manufacturer',
        tag: 'Disclosure & Compliance',
        challenge: 'A listed mid-cap pharma company with manufacturing sites across three states faced BRSR mandatory disclosure with no ESG data infrastructure, limited internal capability, and no clear owner for sustainability reporting.',
        action: 'ESG Astraa conducted a BRSR gap analysis, designed site-level data collection templates, built a central ESG data management system, drafted the full BRSR disclosure, and prepared the company for limited assurance on selected KPIs.',
        result: 'First BRSR submitted on schedule with limited assurance. ESG rating improved from below-average to sector-average in the same year. Internal ESG function established with clear ownership and annual reporting cycle.',
        metrics: [
          { val: 'First BRSR', lbl: 'Submitted on schedule' },
          { val: '3 states', lbl: 'Multi-site data architecture' },
          { val: 'Assured', lbl: 'Selected KPIs under limited assurance' },
        ],
      },
      {
        title: 'BMW Rules Compliance Programme for a Hospital Group',
        tag: 'Environmental Management',
        challenge: 'A multi-city private hospital group received regulator notices for inconsistent biomedical waste segregation across 8 facilities. Risk of licensing disruption and NABH accreditation impact was acute. BRSR disclosure requirements added urgency.',
        action: 'ESG Astraa conducted a full BMW Rules compliance audit across all facilities, redesigned waste segregation SOPs, deployed staff training at facility level, established waste contractor agreements, and built BRSR-compliant waste reporting infrastructure.',
        result: 'All regulatory notices resolved within 60 days. Standardised BMW compliance programme embedded across 8 facilities. Waste data now feeds directly into BRSR reporting with verified metrics.',
        metrics: [
          { val: '60 days', lbl: 'To resolve all regulatory notices' },
          { val: '8 facilities', lbl: 'BMW compliance standardised' },
          { val: 'BRSR-ready', lbl: 'Waste data infrastructure built' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our healthcare ESG research covers India\'s evolving regulatory landscape, social impact measurement practice, and ESG integration challenges specific to pharma and hospital operations.',
      insights: [
        { type: 'Industry Report', title: 'ESG in Indian Pharma: Material Issues, Rating Methodologies, and Strategic Priorities', desc: 'A sector-specific analysis of the ESG issues that matter most for Indian pharma companies — from access and affordability to supply chain labour and environmental compliance.', gated: true, date: 'February 2026' },
        { type: 'Regulatory Update', title: 'BMW Rules Update: What Healthcare Organisations Must Know', desc: 'A practical guide to the latest Biomedical Waste Management Rules, enforcement trends, and how to integrate BMW compliance into BRSR ESG disclosures.', gated: false, date: 'January 2026' },
        { type: 'Thought Leadership', title: 'Measuring Social Impact in Healthcare: Beyond CSR Narratives', desc: 'Expert commentary on how hospitals and pharma companies can build investor-credible social impact frameworks — moving from anecdote to evidence.', gated: false, date: 'November 2025' },
        { type: 'Whitepaper', title: 'Supply Chain ESG for Indian Pharma Manufacturers: A Due Diligence Framework', desc: 'How to build supplier ESG assessment, audit, and corrective action programmes that meet multinational customer requirements and BRSR Core expectations.', gated: true, date: 'October 2025' },
      ],
      expertPerspective: {
        name: 'Dr. Kavita Rao',
        role: 'Senior Advisor, Healthcare ESG Practice',
        quote: 'Healthcare\'s ESG challenge is unique — you\'re managing environmental compliance, patient safety, supply chain ethics, and social impact accountability in parallel. The organisations that get ahead will be those that stop treating these as separate compliance obligations and start seeing them as one integrated operating standard.',
        topic: 'On the operational reality of ESG in Indian healthcare',
      },
      checklistCTA: {
        title: 'Healthcare ESG Readiness Checklist',
        desc: 'A 35-point diagnostic covering BMW Rules compliance status, BRSR disclosure gaps, social impact measurement maturity, and supply chain ESG readiness — with priority actions for CFOs and sustainability teams.',
        label: 'Download Healthcare ESG Checklist',
      },
    },
  },

  'infrastructure-real-estate': {
    slug: 'infrastructure-real-estate',
    overview: {
      headline: 'Green Infrastructure: ESG as a Capital and Operational Imperative',
      body: [
        'India\'s ₹111 lakh crore National Infrastructure Pipeline represents the largest infrastructure investment wave in the country\'s history. ESG considerations are shaping which projects get financed, at what cost, and on what terms — making sustainability advisory a prerequisite for project viability, not an add-on.',
        'For developers, contractors, and asset owners, the key challenge is embedding ESG into project design, procurement, and operations consistently — not just for flagship projects, but across portfolios.',
      ],
      stateOfSector: [
        { title: 'Green Finance Requirements', desc: 'DFIs, multilateral lenders, and ESG-linked debt providers are applying Environmental and Social (E&S) standards to infrastructure projects as a condition of finance. Projects without ESIA or green credentials face exclusion from preferred capital pools.' },
        { title: 'Embodied Carbon Pressure', desc: 'Construction is responsible for ~40% of global CO₂ emissions. Embodied carbon in materials — concrete, steel, glass — is increasingly scrutinised by institutional investors and green building certification systems.' },
        { title: 'Community & Displacement Risk', desc: 'Land acquisition, community displacement, and cultural heritage impact are the highest-profile ESG risks in infrastructure development — and the ones most likely to cause project delays, cost overruns, or cancellation.' },
        { title: 'Green Building Adoption', desc: 'IGBC, GRIHA, and LEED certification are becoming standard requirements for Grade-A commercial real estate. Tenants, investors, and lenders are applying green building screens to acquisition and financing decisions.' },
      ],
      regulatoryHighlights: [
        { name: 'EIA & ESIA Requirements', desc: 'Environmental Impact Assessment is mandatory for Category A and B projects under the Environment Protection Act. Social Impact Assessment is required for land acquisition under the LARR Act — both are critical for project clearances.', urgency: 'Active' },
        { name: 'Green Building Codes', desc: 'ECBC (Energy Conservation Building Code) and GRIHA standards are becoming mandatory for government buildings and recommended for private commercial projects — influencing design, procurement, and operations.', urgency: 'Compliance' },
        { name: 'SEBI BRSR (Listed Developers)', desc: 'Listed real estate and infrastructure companies face BRSR mandatory disclosure. Asset-level energy, water, and GHG metrics across the portfolio are increasingly required.', urgency: 'Active' },
        { name: 'DFI E&S Standards', desc: 'World Bank Group, ADB, and bilateral DFIs apply IFC Performance Standards as conditions for project finance — requiring comprehensive ESIA, stakeholder engagement, and environmental management plans.', urgency: 'Active' },
      ],
      materiality: [
        { issue: 'Land Acquisition & Community Impact', importance: 'Critical', desc: 'Community displacement, livelihood impact, and resettlement — the highest-risk ESG issues for infrastructure projects, with potential for project delay or cancellation.' },
        { issue: 'Environmental Impact & Biodiversity', importance: 'Critical', desc: 'Site-level environmental impact — soil, water, biodiversity — requires formal ESIA and ongoing monitoring as a condition for regulatory clearance and DFI finance.' },
        { issue: 'Embodied Carbon & Material Choices', importance: 'High', desc: 'Material selection — concrete, steel, aluminium — drives construction-phase carbon footprint and is increasingly scrutinised by green certification systems and institutional investors.' },
        { issue: 'Operational Energy & Carbon', importance: 'High', desc: 'Building and infrastructure operational energy consumption drives long-term carbon footprint and is material for green building certification and asset investor ESG screens.' },
        { issue: 'Worker Safety in Construction', importance: 'High', desc: 'Construction site safety — injuries, fatalities, working conditions — is a high-salience ESG issue for investors, DFI lenders, and project insurance providers.' },
        { issue: 'Water Management', importance: 'High', desc: 'Water use in construction and building operations, combined with stormwater management, is material for both ESIA requirements and green building ratings.' },
        { issue: 'Waste in Construction & Demolition', importance: 'Medium', desc: 'Construction and demolition waste management is a regulatory requirement and increasingly an ESG differentiator for developers.' },
        { issue: 'Green Finance Framework Quality', importance: 'Medium', desc: 'The credibility of green or sustainability-linked financing frameworks affects both the cost of capital and the reputational positioning of the developer.' },
      ],
      valueProp: [
        { title: 'Preferred Capital Access', desc: 'Projects and developers with credible E&S frameworks access DFI finance, green bonds, and ESG-linked debt at preferential terms — directly reducing project financing costs.' },
        { title: 'Faster Project Clearances', desc: 'Well-prepared ESIA and stakeholder engagement documentation reduces regulatory review time, community opposition, and project delay risk.' },
        { title: 'Asset Value Premium', desc: 'Green-certified commercial real estate commands occupier rent premiums and investor valuation premiums versus non-certified comparable assets — a measurable financial return on ESG investment.' },
        { title: 'Risk Reduction at Scale', desc: 'Systematic ESG standards across a project portfolio reduce the tail risk of high-profile community conflict, environmental incident, or regulatory sanction.' },
      ],
    },
    services: {
      intro: 'Our infrastructure and real estate advisory practice helps developers, contractors, and asset owners embed ESG from project design through operations — and access the capital that ESG credentials unlock.',
      pillars: [
        {
          title: 'ESIA & Project ESG Clearance',
          icon: 'MapPin',
          desc: 'Comprehensive environmental and social impact assessment and management planning for infrastructure projects — meeting regulatory, DFI, and investor standards.',
          offerings: [
            'EIA and ESIA scoping, study, and report preparation',
            'Social Impact Assessment (SIA) under LARR Act',
            'Community engagement and stakeholder mapping',
            'Resettlement and Rehabilitation (R&R) plan design',
            'Environmental Management Plan (EMP) design and monitoring',
            'DFI E&S due diligence support (IFC Performance Standards)',
          ],
        },
        {
          title: 'Green Building Certification',
          icon: 'Building',
          desc: 'Navigate green building certification systems to achieve LEED, IGBC, or GRIHA ratings that support financing, occupier, and investor requirements.',
          offerings: [
            'Green building rating strategy and system selection',
            'LEED, IGBC Green Building, and GRIHA certification advisory',
            'Energy modelling and efficiency design advisory',
            'Water efficiency and harvesting system design review',
            'Materials and embodied carbon assessment',
            'Indoor environment quality and health feature design',
          ],
        },
        {
          title: 'Sustainable Construction & Procurement',
          icon: 'HardHat',
          desc: 'Design and embed ESG standards in construction procurement, contractor management, and site operations to deliver credible sustainability performance.',
          offerings: [
            'ESG requirements in contractor selection and tender documents',
            'Site-level environmental and social management systems',
            'Construction waste management plans and C&D waste compliance',
            'Worker health, safety, and welfare programme design',
            'Construction GHG accounting and embodied carbon tracking',
            'Sustainable materials sourcing and supply chain standards',
          ],
        },
        {
          title: 'Green Finance & ESG Reporting',
          icon: 'DollarSign',
          desc: 'Structure green and sustainable financing frameworks and build the ESG reporting infrastructure that DFIs, investors, and BRSR require.',
          offerings: [
            'Green bond and sustainability-linked financing framework design',
            'DFI project ESG documentation and compliance management',
            'BRSR disclosure for listed real estate and infrastructure companies',
            'Portfolio ESG KPI design and reporting systems',
            'Asset-level energy, water, and carbon performance tracking',
            'Investor ESG due diligence preparation and response',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'ESIA for a National Highway Expansion Project',
        tag: 'Environmental & Social Assessment',
        challenge: 'A highway developer needed a comprehensive ESIA for a 120km four-laning project affecting 14 villages, with biodiversity-sensitive sections and a politically contested land acquisition process.',
        action: 'ESG Astraa conducted the full ESIA — environmental baseline, biodiversity survey, Social Impact Assessment, community engagement across all 14 affected villages, R&R plan design, and Environmental Management Plan. We coordinated the regulatory submission process and managed stakeholder consultations.',
        result: 'Project clearance received within 8 months — 30% faster than sector average. R&R plan accepted by all affected communities with zero objections filed in the regulatory review period. DFI approved project finance based on ESIA quality.',
        metrics: [
          { val: '8 months', lbl: 'To project clearance' },
          { val: '14 villages', lbl: 'Stakeholder consultation coverage' },
          { val: 'DFI approved', lbl: 'Project finance secured' },
        ],
      },
      {
        title: 'LEED Platinum Certification for Grade-A Commercial Complex',
        tag: 'Green Building',
        challenge: 'A real estate developer needed LEED Platinum certification for a 2.5 lakh sq ft commercial development to meet occupier ESG requirements and access green building financing at preferential rates.',
        action: 'ESG Astraa provided LEED BD+C advisory from design stage — energy modelling, water efficiency design review, materials assessment, construction waste plan, and commissioning support. We managed the USGBC documentation and review process.',
        result: 'LEED Platinum achieved with 85 points. Developer secured a green building loan at 40bps preferential rate versus comparable conventional facility. Anchor tenant signed at 8% rent premium versus non-certified comparable space.',
        metrics: [
          { val: 'LEED Platinum', lbl: '85 points achieved' },
          { val: '40bps', lbl: 'Green financing rate saving' },
          { val: '8%', lbl: 'Occupier rent premium' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our infrastructure and real estate research tracks the evolving standards, financing norms, and operational practices shaping sustainable development in India.',
      insights: [
        { type: 'Industry Report', title: 'Green Building Economics: Making the Business Case for ESG in Indian Real Estate', desc: 'Data-driven analysis of green certification costs, energy savings, rent premiums, and financing advantages for Grade-A commercial real estate in India\'s major markets.', gated: true, date: 'January 2026' },
        { type: 'Regulatory Update', title: 'ESIA Requirements Under LARR and EIA Notification: A Practical Compliance Guide', desc: 'A step-by-step guide to Environmental and Social Impact Assessment requirements for infrastructure projects — covering process, timeline, and documentation standards.', gated: false, date: 'December 2025' },
        { type: 'Whitepaper', title: 'Embodied Carbon in Indian Construction: Measurement, Benchmarks, and Reduction Pathways', desc: 'The first India-focused analysis of construction-phase carbon — how to measure it, how Indian projects compare internationally, and how to reduce it through material choices.', gated: true, date: 'November 2025' },
        { type: 'Thought Leadership', title: 'DFI Finance and ESG: How IFC Performance Standards Shape Indian Infrastructure Projects', desc: 'Expert guide to IFC Performance Standards, how DFIs apply them in India, and what developers must do to access multilateral project finance.', gated: false, date: 'October 2025' },
      ],
      expertPerspective: {
        name: 'Vikram Bose',
        role: 'Director, Infrastructure ESG Advisory',
        quote: 'India\'s infrastructure investment wave is the biggest opportunity — and the biggest ESG risk — in the sector\'s history. The projects that get financed, cleared, and built on time will be the ones with rigorous E&S processes from day one. ESIA and community engagement aren\'t just compliance; they\'re the difference between a project that proceeds and one that stalls.',
        topic: 'On the role of ESIA in India\'s infrastructure investment cycle',
      },
      checklistCTA: {
        title: 'Infrastructure Project ESG Readiness Assessment',
        desc: 'A 30-point diagnostic covering ESIA completeness, DFI compliance status, green building certification readiness, and financing framework quality — with a prioritised action plan.',
        label: 'Request a Project ESG Assessment',
      },
    },
  },

  'mining-metals': {
    slug: 'mining-metals',
    overview: {
      headline: 'Mining & Metals ESG: Licence to Operate in a Scrutinised Sector',
      body: [
        'India\'s mining and metals sector faces some of the most concentrated ESG scrutiny of any industry. Environmental footprint, community relationships, worker safety, and mine closure planning are not peripheral concerns — they are core to the sector\'s licence to operate.',
        'The Sustainable Development Framework (SDF) mandated for major mining operations, growing investor scrutiny on source and production practices, and tightening environmental regulations are converging to make ESG strategy a operational priority — not just a reporting exercise.',
      ],
      stateOfSector: [
        { title: 'Licence to Operate Under Pressure', desc: 'Community opposition, environmental non-compliance, and poor stakeholder relations are the primary causes of mining project delays and cancellations in India. ESG programmes are the most effective risk management tool available.' },
        { title: 'SDF Compliance', desc: 'India\'s Sustainable Development Framework for mining requires operators to invest in community development, environmental protection, and stakeholder engagement — with annual reporting obligations that are increasingly scrutinised.' },
        { title: 'Global Customer Scrutiny', desc: 'International buyers of Indian minerals and metals — from steel and aluminium to rare earths and industrial minerals — are applying supply chain ESG screens that require verified environmental and social performance data.' },
        { title: 'Mine Closure Planning', desc: 'Regulators and investors are increasingly focused on mine closure planning — both the financial provisioning and the environmental/community transition plans that determine post-closure outcomes for affected communities.' },
      ],
      regulatoryHighlights: [
        { name: 'Mines Act & Safety Standards', desc: 'Mines Act provisions, DGMS regulations, and industry-specific safety standards set baseline requirements for worker health, safety, and emergency management — directly feeding into ESG disclosures.', urgency: 'Active' },
        { name: 'Sustainable Development Framework', desc: 'IBM\'s SDF requires major mine operators to commit 2% of profits to community and environmental programmes, with annual reporting on investments and outcomes.', urgency: 'Active' },
        { name: 'Environmental Clearances & Consent to Operate', desc: 'Environmental clearances, consent to establish, and consent to operate create ongoing compliance obligations around air, water, soil, and biodiversity management — all core ESG metrics.', urgency: 'Compliance' },
        { name: 'SEBI BRSR (Listed Miners)', desc: 'Listed mining and metals companies face BRSR mandatory disclosure — including site-level environmental data, community investment, and workforce safety metrics.', urgency: 'Active' },
      ],
      materiality: [
        { issue: 'Environmental Footprint & Remediation', importance: 'Critical', desc: 'Soil contamination, water body impact, dust, and biodiversity damage are critical licence-to-operate risks requiring ongoing monitoring, management, and remediation planning.' },
        { issue: 'Community Relations & Land Rights', importance: 'Critical', desc: 'Community consent, FPIC (Free, Prior, Informed Consent) for tribal communities, livelihood impact, and cultural heritage are the highest-risk ESG dimensions for mining operations.' },
        { issue: 'Worker Safety & Health', importance: 'Critical', desc: 'Mining has one of the highest occupational fatality rates of any sector. Injury rates, fatalities, occupational disease, and safety culture are material for investors and regulators.' },
        { issue: 'Mine Closure & Legacy Risk', importance: 'High', desc: 'Inadequate closure planning creates long-term environmental and financial liabilities — increasingly scrutinised by regulators and investors.' },
        { issue: 'GHG Emissions (Scope 1 & 2)', importance: 'High', desc: 'Mining operations drive significant Scope 1 emissions from diesel, blasting, and processing — and Scope 2 from grid electricity. Decarbonisation is a growing investor expectation.' },
        { issue: 'Water Management', importance: 'High', desc: 'Water abstraction, acid mine drainage, and tailings facility management are high-impact environmental issues requiring ongoing monitoring and reporting.' },
        { issue: 'Biodiversity & Ecosystem Services', importance: 'High', desc: 'Mining operations in ecologically sensitive areas face escalating regulatory and investor scrutiny on biodiversity net gain and ecosystem restoration.' },
        { issue: 'Supply Chain Traceability', importance: 'Medium', desc: 'Global customers are requiring verified sourcing data — from minerals to metals — to meet their own supply chain ESG commitments and regulatory obligations.' },
      ],
      valueProp: [
        { title: 'Licence-to-Operate Resilience', desc: 'Strong community engagement, environmental compliance, and transparent communication reduce the risk of operational disruptions, protests, and regulatory sanctions.' },
        { title: 'Project Finance Access', desc: 'DFI and international project finance for mining operations requires IFC Performance Standards compliance — ESG advisory that delivers this unlocks a significant capital pool.' },
        { title: 'Customer Qualification', desc: 'International metals and minerals buyers are applying ESG screens to sourcing decisions. Verified ESG performance data enables qualification for higher-value contracts.' },
        { title: 'Closure Risk Management', desc: 'Early-stage closure planning and environmental provisioning reduces the financial liability and reputational risk of mine closure — creating quantifiable value for operators and investors.' },
      ],
    },
    services: {
      intro: 'Our mining and metals ESG practice combines environmental and social expertise with deep regulatory knowledge to help operators manage risk, meet obligations, and build stakeholder confidence.',
      pillars: [
        {
          title: 'Environmental Assessment & Remediation',
          icon: 'Leaf',
          desc: 'Site-level environmental risk assessment, monitoring system design, and remediation planning to meet regulatory requirements and investor expectations.',
          offerings: [
            'Site environmental baseline assessment and monitoring',
            'Soil, water, and air quality impact assessment',
            'Acid mine drainage management and prevention planning',
            'Tailings storage facility ESG risk assessment',
            'Biodiversity impact assessment and net-gain strategy',
            'Mine remediation planning and financial provisioning advisory',
          ],
        },
        {
          title: 'Community Impact & Engagement',
          icon: 'Users',
          desc: 'Design and implement community engagement, impact assessment, and investment programmes that build genuine social licence to operate.',
          offerings: [
            'Community impact assessment and baseline studies',
            'FPIC process design for tribal and affected communities',
            'SDF compliance programme design and reporting',
            'Livelihood restoration programme design',
            'Grievance mechanism design and implementation',
            'Community investment strategy and impact monitoring',
          ],
        },
        {
          title: 'Mine Closure & Legacy Planning',
          icon: 'Archive',
          desc: 'Develop comprehensive mine closure plans that address environmental, social, and financial dimensions — meeting regulatory and investor requirements.',
          offerings: [
            'Mine closure plan design (environmental and social)',
            'Closure financial provisioning and fund structure advisory',
            'Post-closure land use planning and community transition',
            'Progressive rehabilitation planning and monitoring',
            'Legacy contamination risk assessment and management',
            'Closure performance bond and regulatory submission support',
          ],
        },
        {
          title: 'ESG Disclosure & Investor Reporting',
          icon: 'BarChart',
          desc: 'Build the data infrastructure and disclosure frameworks to report credibly on mining ESG performance to regulators, investors, and global customers.',
          offerings: [
            'BRSR disclosure for listed mining and metals companies',
            'Site-level ESG KPI framework and data collection systems',
            'SDF annual report preparation and submission',
            'ICMM framework alignment and voluntary reporting',
            'Investor ESG due diligence support and rating improvement',
            'Supply chain traceability framework for customer qualification',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'Community Engagement Programme for a Greenfield Mineral Project',
        tag: 'Social Impact',
        challenge: 'A greenfield mineral project faced significant community opposition due to historical grievances with mining in the region, inadequate FPIC processes with tribal communities, and a previous developer\'s poor environmental record. Project commencement was blocked pending social licence resolution.',
        action: 'ESG Astraa designed a comprehensive community engagement programme — conducting social baseline studies, establishing FPIC consultations with gram sabhas and tribal councils, designing a community investment strategy, and creating a transparent grievance mechanism.',
        result: 'Community consent obtained across all affected villages within 6 months. Community investment programme launched with measurable livelihood outcomes. Project received environmental clearance with community support documentation accepted by regulators.',
        metrics: [
          { val: '6 months', lbl: 'To community consent' },
          { val: '8 villages', lbl: 'FPIC consultations completed' },
          { val: 'Clearance', lbl: 'Environmental approval secured' },
        ],
      },
      {
        title: 'SDF Compliance & Annual Reporting for a Coal Mining Operator',
        tag: 'Regulatory Compliance',
        challenge: 'A coal mining operator with multiple mines was non-compliant with IBM Sustainable Development Framework reporting requirements and had invested SDF funds without documented outcomes — creating regulatory risk and reputational exposure with investors.',
        action: 'ESG Astraa conducted an SDF compliance audit, designed a retroactive impact documentation framework, restructured the SDF investment programme with measurable outcomes, and built an annual reporting system aligned to IBM requirements.',
        result: 'SDF compliance restored with full IBM submission. Investor ESG questionnaire responses improved to reflect credible community investment data. Regulatory risk resolved.',
        metrics: [
          { val: 'IBM compliant', lbl: 'SDF reporting restored' },
          { val: '₹8.5Cr', lbl: 'SDF investment documented' },
          { val: 'Risk resolved', lbl: 'Regulatory standing restored' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our mining and metals research tracks the regulatory, community, and environmental developments shaping ESG requirements for India\'s extractive industries.',
      insights: [
        { type: 'Thought Leadership', title: 'Mine Closure ESG: Why Indian Operators Must Plan Earlier', desc: 'Expert commentary on the financial, environmental, and community risks of inadequate mine closure planning — and what best-practice early-stage planning looks like.', gated: false, date: 'February 2026' },
        { type: 'Regulatory Update', title: 'SDF Compliance and IBM Reporting: What Mining Operators Need to Know', desc: 'Practical guide to Sustainable Development Framework obligations — SDF fund calculation, permissible investments, reporting timelines, and IBM expectations.', gated: false, date: 'January 2026' },
        { type: 'Industry Report', title: 'Community Relations and Mining Licence Risk in India: Evidence from 20 Projects', desc: 'Evidence-based analysis of how community engagement quality affects project clearance timelines, litigation risk, and operational disruption — drawing on 20 Indian case examples.', gated: true, date: 'November 2025' },
        { type: 'Whitepaper', title: 'Biodiversity and Mining: Net Gain Requirements and India\'s Evolving Standards', desc: 'How global biodiversity standards — TNFD, IUCN, and IFC Performance Standard 6 — are being applied to mining projects in India and what operators need to do.', gated: true, date: 'October 2025' },
      ],
      expertPerspective: {
        name: 'Suresh Pillai',
        role: 'Director, Mining & Environmental Advisory',
        quote: 'The mining operators who survive the next decade will be those who treat community relations as a core business function, not a government affairs problem. The ones who plan closure from day one, invest in environmental monitoring, and build genuine trust with affected communities will hold their licence to operate. The ones who don\'t will face delays, litigation, and capital withdrawal.',
        topic: 'On the business case for community engagement in Indian mining',
      },
      checklistCTA: {
        title: 'Mining ESG Maturity Assessment',
        desc: 'A sector-calibrated diagnostic covering SDF compliance, community engagement quality, environmental management systems, mine closure planning, and BRSR disclosure readiness.',
        label: 'Request a Mining ESG Assessment',
      },
    },
  },

  'it-technology': {
    slug: 'it-technology',
    overview: {
      headline: 'ESG in Indian IT & Technology: From Customer Requirement to Competitive Advantage',
      body: [
        'India\'s IT and technology sector may appear asset-light, but its ESG footprint is substantial — dominated by Scope 3 value chain emissions, data centre energy use, and the rapidly growing expectations of global enterprise customers and EU regulators.',
        'The EU\'s Corporate Sustainability Reporting Directive (CSRD) will affect Indian IT exporters serving European clients. Enterprise customers are embedding ESG requirements in procurement contracts. And talent markets increasingly favour employers with credible sustainability commitments.',
      ],
      stateOfSector: [
        { title: 'Scope 3 Dominates the Footprint', desc: 'For most IT companies, 85%+ of GHG emissions sit in the value chain — purchased goods, business travel, employee commuting, and use of sold products. Measuring and managing Scope 3 is the defining ESG challenge for the sector.' },
        { title: 'CSRD Affects Indian Exporters', desc: 'CSRD requires large EU companies to report on supply chain sustainability — including their Indian IT service providers. Indian IT companies supplying European enterprises are already receiving ESG questionnaires and audit requests.' },
        { title: 'Enterprise Procurement ESG Screens', desc: 'Global financial services, consumer goods, and technology companies are embedding ESG requirements in IT procurement — covering emissions, diversity, data ethics, and supply chain standards. Qualification depends on meeting these criteria.' },
        { title: 'Data Centre Energy Intensity', desc: 'Hyperscale and co-location data centres are significant energy consumers. RE100 commitments from global tech customers are driving demand for renewable energy sourcing and Power Usage Effectiveness (PUE) improvements.' },
      ],
      regulatoryHighlights: [
        { name: 'EU CSRD (Indirect Impact)', desc: 'CSRD requires large EU companies to report on material value chain sustainability — including their Indian IT suppliers. Indian IT exporters must be prepared to respond to CSRD-driven data requests and supply chain audits.', urgency: 'Active' },
        { name: 'SEBI BRSR (Listed IT)', desc: 'Listed IT companies face BRSR mandatory disclosure. IT-specific KPIs include data centre energy, travel emissions, diversity metrics, and supply chain ESG data.', urgency: 'Active' },
        { name: 'EU AI Act & Data Governance', desc: 'EU AI Act and GDPR create governance and compliance obligations for Indian IT companies providing AI and data services to European customers — increasingly treated as ESG governance issues.', urgency: 'Escalating' },
        { name: 'RE100 & Science-Based Targets', desc: 'Enterprise customer commitments to RE100 and SBTi create downstream pressure on Indian IT suppliers to procure renewable energy and set scope-aligned reduction targets.', urgency: 'Compliance' },
      ],
      materiality: [
        { issue: 'Scope 3 GHG Emissions', importance: 'Critical', desc: 'Value chain emissions — purchased goods, services, business travel, and use of sold products — dominate the IT sector\'s climate footprint and are the primary disclosure and reduction challenge.' },
        { issue: 'Customer ESG Requirements (CSRD)', importance: 'Critical', desc: 'EU CSRD-driven data requests and ESG questionnaires from enterprise customers are creating direct business risk for Indian IT companies unable to respond credibly.' },
        { issue: 'Data Centre Energy & Renewable Power', importance: 'High', desc: 'Data centre energy consumption and the source of power (renewable vs grid) are material for climate disclosures and increasingly for customer and investor qualification.' },
        { issue: 'Data Privacy & Cybersecurity', importance: 'High', desc: 'Data governance, privacy compliance, and cybersecurity controls are ESG-adjacent governance issues with direct customer and regulatory risk.' },
        { issue: 'Workforce Diversity & Inclusion', importance: 'High', desc: 'Gender diversity, inclusive hiring, equitable pay, and leadership diversity are high-salience ESG issues for talent attraction and institutional investor engagement.' },
        { issue: 'AI Ethics & Responsible Technology', importance: 'High', desc: 'Responsible AI deployment, algorithmic fairness, and ethical data use are increasingly material for ESG ratings and enterprise customer procurement.' },
        { issue: 'Supply Chain Transparency', importance: 'Medium', desc: 'Hardware procurement, subcontractor ESG practices, and supply chain labour standards are under growing scrutiny from customers and ESG rating agencies.' },
        { issue: 'Employee Well-being & Mental Health', importance: 'Medium', desc: 'Hybrid work policies, mental health support, and employee satisfaction are material for talent retention and employer brand in a competitive IT labour market.' },
      ],
      valueProp: [
        { title: 'Customer Retention & New Mandates', desc: 'IT companies that can respond credibly to ESG procurement requirements and CSRD data requests will retain enterprise relationships and win new contracts over less-prepared competitors.' },
        { title: 'Talent Differentiation', desc: 'Credible sustainability commitments — RE100 progress, diversity metrics, ethical AI governance — improve employer brand in a competitive IT talent market where values alignment matters.' },
        { title: 'Investor & Rating Performance', desc: 'ESG rating improvements translate to index inclusion, lower cost of capital for listed IT companies, and improved positioning with ESG-mandated institutional investors.' },
        { title: 'Regulatory Preparedness', desc: 'Early CSRD and BRSR compliance preparation reduces the reactive cost and reputational risk of last-minute ESG data scrambles when customer or regulatory deadlines arrive.' },
      ],
    },
    services: {
      intro: 'Our IT and technology ESG practice helps companies measure their real footprint, respond to customer and regulatory requirements, and build ESG programmes that create genuine business value.',
      pillars: [
        {
          title: 'Scope 3 Emissions Accounting',
          icon: 'Globe',
          desc: 'Measure, report, and set reduction targets for value chain emissions — the dominant ESG challenge for technology companies.',
          offerings: [
            'Scope 1, 2, and 3 GHG inventory development (GHG Protocol)',
            'Scope 3 category prioritisation and data collection design',
            'Business travel and commuting emissions measurement',
            'Supply chain (upstream Scope 3) emissions estimation',
            'Data centre energy and emissions measurement',
            'SBTi target setting and validation support',
          ],
        },
        {
          title: 'CSRD & Customer ESG Compliance',
          icon: 'FileCheck',
          desc: 'Build the data, processes, and documentation required to respond credibly to CSRD-driven supply chain requests and enterprise ESG questionnaires.',
          offerings: [
            'CSRD double materiality assessment for Indian IT exporters',
            'ESRS disclosure gap analysis and roadmap',
            'Customer ESG questionnaire response pack design',
            'Supply chain ESG data collection and management system',
            'Third-party ESG audit preparation and support',
            'ESG data room design for enterprise procurement',
          ],
        },
        {
          title: 'Data Centre Sustainability',
          icon: 'Server',
          desc: 'Improve data centre energy efficiency, renewable sourcing, and operational sustainability to meet customer and investor expectations.',
          offerings: [
            'PUE benchmarking and efficiency improvement advisory',
            'Renewable energy sourcing strategy (PPAs, RECs)',
            'RE100 and IREC compliance pathway design',
            'Data centre carbon footprint measurement and reporting',
            'Cooling system and hardware lifecycle ESG assessment',
            'Green data centre certification advisory',
          ],
        },
        {
          title: 'BRSR & ESG Disclosure',
          icon: 'LineChart',
          desc: 'Build BRSR-compliant disclosure infrastructure and broader ESG reporting that satisfies investors, customers, and rating agencies.',
          offerings: [
            'BRSR gap analysis and disclosure roadmap for IT companies',
            'IT sector-specific KPI framework (GRI, SASB IT standards)',
            'Diversity, inclusion, and equity metric design and reporting',
            'AI ethics and responsible technology governance framework',
            'ESG ratings engagement and score improvement advisory',
            'Annual report and ESG report design and drafting',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'CSRD Readiness Programme for a Mid-Size IT Services Company',
        tag: 'Regulatory Compliance',
        challenge: 'A mid-size IT services company with 60% revenue from European clients received CSRD-aligned ESG questionnaires from three major customers simultaneously. The company had no ESG measurement programme, no BRSR disclosure, and no process for responding to supply chain ESG data requests.',
        action: 'ESG Astraa conducted a CSRD double materiality assessment, built a Scope 1, 2, and 3 GHG inventory, designed customer-specific ESG response packs, established a BRSR disclosure programme, and trained the sustainability and procurement teams.',
        result: 'All three customer ESG audits passed with full data responses. BRSR submitted on schedule. Scope 3 measurement programme established as a repeatable internal capability.',
        metrics: [
          { val: '3 customer', lbl: 'ESG audits passed' },
          { val: 'Scope 1-3', lbl: 'Full GHG inventory built' },
          { val: 'BRSR', lbl: 'First disclosure submitted' },
        ],
      },
      {
        title: 'RE100 Pathway Design for a Technology Product Company',
        tag: 'Renewable Energy',
        challenge: 'An Indian technology product company with enterprise customers committed to RE100 faced pressure to demonstrate renewable energy sourcing across its India operations. Existing renewable procurement was ad hoc with no verifiable REC framework.',
        action: 'ESG Astraa assessed current energy procurement, identified PPA and REC procurement options, designed an RE100 credible pathway, and established a renewable energy reporting framework aligned to GHG Protocol Scope 2 guidance.',
        result: 'RE100 roadmap accepted by three key enterprise customers. First tranche of Green Attribute Certificates (I-RECs) procured and retired. Scope 2 market-based emissions reduced by 40% in year one.',
        metrics: [
          { val: '40%', lbl: 'Scope 2 (market-based) reduction' },
          { val: 'RE100', lbl: 'Pathway accepted by customers' },
          { val: 'I-REC', lbl: 'Certificates procured & retired' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our IT and technology ESG practice publishes research on the regulatory, customer, and operational ESG challenges facing Indian technology companies.',
      insights: [
        { type: 'Regulatory Update', title: 'EU CSRD: What Indian IT Companies Must Do Now', desc: 'A practical guide to EU CSRD\'s impact on Indian IT exporters — who is affected, what data customers will request, and how to build the internal capability to respond.', gated: false, date: 'March 2026' },
        { type: 'Whitepaper', title: 'Scope 3 Emissions in Indian IT: Measurement Methods, Data Challenges, and Reduction Pathways', desc: 'The first India-focused analysis of Scope 3 emissions in IT services and product companies — with practical measurement approaches and reduction strategy options.', gated: true, date: 'January 2026' },
        { type: 'Industry Report', title: 'Enterprise ESG Procurement in IT: What Indian Vendors Must Prepare For', desc: 'Analysis of ESG requirements embedded in enterprise IT procurement contracts — covering emissions, diversity, data ethics, and supply chain standards across major global buyers.', gated: true, date: 'November 2025' },
        { type: 'Thought Leadership', title: 'AI Ethics and ESG: Why Responsible AI Is Becoming a Material Risk Issue', desc: 'Expert commentary on how algorithmic fairness, AI governance, and ethical data use are entering ESG rating methodologies and investor due diligence for technology companies.', gated: false, date: 'October 2025' },
      ],
      expertPerspective: {
        name: 'Anil Krishnamurthy',
        role: 'Senior Advisor, Technology ESG Practice',
        quote: 'CSRD is the single most important ESG development for Indian IT exporters right now. European customers are not waiting — they\'re already sending questionnaires, conducting audits, and making vendor decisions based on ESG data quality. The companies that build measurement and reporting capability now will win; the ones who treat it as future-state will lose contracts.',
        topic: 'On the urgency of CSRD preparedness for Indian IT exporters',
      },
      checklistCTA: {
        title: 'IT ESG & CSRD Readiness Assessment',
        desc: 'A 35-point diagnostic covering Scope 3 measurement completeness, CSRD data readiness, customer questionnaire response capability, BRSR disclosure status, and renewable energy sourcing progress.',
        label: 'Download IT ESG Readiness Checklist',
      },
    },
  },

  'agriculture-food': {
    slug: 'agriculture-food',
    overview: {
      headline: 'Sustainable Agriculture & Food: Meeting Global Standards from Farm to Fork',
      body: [
        'India\'s agriculture and food sector faces a convergence of ESG pressures: the EU Deforestation Regulation (EUDR) affecting commodity exports, growing water stress across sourcing regions, smallholder supply chain opacity, and brand-level consumer sustainability expectations.',
        'The organisations that will sustain access to global markets and institutional capital are those that build verifiable sourcing standards, credible impact data, and traceable supply chains — not just aspirational sustainability narratives.',
      ],
      stateOfSector: [
        { title: 'EUDR and Export Market Access', desc: 'The EU Deforestation Regulation requires exporters of cocoa, coffee, palm oil, soy, beef, timber, and rubber — and derived products — to provide verifiable due diligence data on deforestation-free sourcing. Compliance is a market access requirement, not optional.' },
        { title: 'Water Stress and Smallholder Risk', desc: 'India\'s agriculture sector accounts for 80% of freshwater use. Sourcing from water-stressed regions creates operational and reputational risk. Smallholder supply chains — often the foundation of India\'s agri exports — have limited traceability and data transparency.' },
        { title: 'Consumer Brand Pressure', desc: 'Retail food brands and foodservice companies are making public commitments to regenerative sourcing, deforestation-free supply chains, and farmer livelihood standards. Their Indian suppliers are the implementation challenge.' },
        { title: 'Nature and Biodiversity Disclosure', desc: 'TNFD (Taskforce on Nature-related Financial Disclosures) and EU nature restoration goals are creating a new frontier of biodiversity-related disclosure expectations that will increasingly reach agri supply chains.' },
      ],
      regulatoryHighlights: [
        { name: 'EU Deforestation Regulation (EUDR)', desc: 'EUDR requires companies placing regulated commodities in the EU market to conduct due diligence proving deforestation-free sourcing after December 2020, supported by geolocation data and supply chain documentation.', urgency: 'Active' },
        { name: 'SEBI BRSR (Listed Agri/Food)', desc: 'Listed agricultural companies and food processors face BRSR mandatory disclosure — including water use, waste, supplier ESG practices, and farmer livelihoods.', urgency: 'Active' },
        { name: 'Food Safety & Traceability', desc: 'FSSAI traceability requirements and export food safety standards create the compliance infrastructure on which ESG sourcing traceability can be built.', urgency: 'Compliance' },
        { name: 'Water Use & Irrigation Regulation', desc: 'State water policies, groundwater regulation, and irrigation water pricing are tightening — creating compliance and operational risk for water-intensive crops in stressed regions.', urgency: 'Escalating' },
      ],
      materiality: [
        { issue: 'Deforestation & Land Use Change', importance: 'Critical', desc: 'For companies supplying EUDR-regulated commodities, deforestation-free sourcing verification is a market access requirement with significant legal and commercial consequences.' },
        { issue: 'Water Use & Scarcity', importance: 'Critical', desc: 'Agriculture\'s dominant share of freshwater use makes water intensity, efficiency, and sourcing geography material for investors, customers, and regulators.' },
        { issue: 'Supply Chain Traceability', importance: 'Critical', desc: 'Smallholder-dominated supply chains with limited traceability are the core operational challenge for agri ESG — and the primary barrier to EUDR compliance.' },
        { issue: 'Farmer Livelihoods & Smallholder Welfare', importance: 'High', desc: 'Farmer income stability, fair pricing, and welfare are increasingly scrutinised by brand customers, development investors, and ESG rating agencies.' },
        { issue: 'GHG Emissions from Agriculture', importance: 'High', desc: 'Enteric fermentation, rice cultivation, fertiliser application, and soil carbon release create significant GHG emissions — increasingly measured and reported in Scope 3 food company disclosures.' },
        { issue: 'Biodiversity & Ecosystem Impact', importance: 'High', desc: 'Conversion of natural habitats, pesticide use, and soil degradation are material issues for biodiversity disclosure (TNFD) and nature-sensitive investors.' },
        { issue: 'Packaging & Waste', importance: 'Medium', desc: 'Plastic packaging in food processing, single-use materials, and food waste are downstream ESG issues with increasing consumer, regulatory, and investor scrutiny.' },
        { issue: 'Food Safety & Quality', importance: 'Medium', desc: 'Product safety incidents create material governance and reputational risks — ESG frameworks increasingly treat food safety governance as a material issue.' },
      ],
      valueProp: [
        { title: 'EU Export Market Access', desc: 'EUDR compliance is a prerequisite for continued access to the EU market for regulated commodity exporters — advisory that delivers compliance protects a strategically important revenue stream.' },
        { title: 'Brand Customer Retention', desc: 'Global food brands are increasingly qualifying suppliers on sourcing standards, traceability, and farmer welfare — ESG advisory that delivers these capabilities protects existing contracts and enables new ones.' },
        { title: 'Capital Access for Agri Finance', desc: 'Sustainability-linked agriculture finance, DFI rural lending programmes, and green bonds for food supply chain investments all require verifiable ESG performance data.' },
        { title: 'Supply Chain Resilience', desc: 'Traceability, farmer relationship programmes, and water risk management build supply chain resilience against sourcing disruptions — a measurable operational value.' },
      ],
    },
    services: {
      intro: 'Our agriculture and food ESG practice helps companies build traceable, sustainable supply chains that meet global standards — from EUDR compliance to regenerative sourcing programmes.',
      pillars: [
        {
          title: 'Sustainable Sourcing & Traceability',
          icon: 'Sprout',
          desc: 'Design and implement sourcing standards, traceability systems, and supplier engagement programmes that meet EUDR and customer ESG requirements.',
          offerings: [
            'Sourcing risk assessment and deforestation exposure mapping',
            'EUDR due diligence programme design and implementation',
            'Supply chain traceability system advisory and design',
            'Supplier ESG assessment and engagement programme',
            'Farmer certification and standards programme design',
            'Responsible sourcing policy development and embedding',
          ],
        },
        {
          title: 'Water & Land Risk Management',
          icon: 'Droplets',
          desc: 'Assess and manage water and land use risks across sourcing geographies — meeting investor disclosure expectations and operational resilience goals.',
          offerings: [
            'Water footprint assessment by crop and sourcing region',
            'Water stress mapping and sourcing risk analysis',
            'Irrigation efficiency and water conservation programme design',
            'Land use change and deforestation monitoring frameworks',
            'TNFD nature-related risk assessment for agri operations',
            'Biodiversity impact assessment and restoration advisory',
          ],
        },
        {
          title: 'Regenerative Agriculture Advisory',
          icon: 'TreePine',
          desc: 'Design and scale regenerative agriculture programmes that deliver measurable soil, water, and biodiversity improvements alongside farmer resilience.',
          offerings: [
            'Regenerative practice assessment and farmer engagement design',
            'Soil carbon measurement and sequestration project design',
            'Agroforestry and intercropping programme advisory',
            'Farmer resilience and livelihood programme design',
            'Impact measurement framework for regenerative programmes',
            'Carbon credit potential assessment for agri projects',
          ],
        },
        {
          title: 'ESG Reporting & BRSR Disclosure',
          icon: 'FileText',
          desc: 'Build the data systems and disclosure frameworks to report credibly on agri supply chain ESG performance to regulators, investors, and brand customers.',
          offerings: [
            'BRSR gap analysis and disclosure for listed agri and food companies',
            'Agri-specific ESG KPI framework (SASB Agri standards)',
            'GHG emissions accounting for agriculture and food processing',
            'Supplier ESG data collection and aggregation systems',
            'ESG report drafting for brand-facing sustainability communications',
            'Investor ESG due diligence preparation and rating improvement',
          ],
        },
      ],
    },
    caseStudies: [
      {
        title: 'EUDR Compliance Programme for a Spices Exporter',
        tag: 'Regulatory Compliance',
        challenge: 'A leading Indian spices exporter supplying European retail customers received EUDR compliance requirements covering their pepper and cardamom sourcing. The company had no supply chain traceability, geolocation data on farms, or deforestation monitoring capability.',
        action: 'ESG Astraa designed a EUDR due diligence programme — mapping the supply chain to farm level, implementing geolocation data collection, assessing deforestation risk by sourcing geography, establishing a supplier due diligence protocol, and preparing the EUDR statement of due diligence.',
        result: 'EUDR due diligence programme accepted by three European retail customers. Sourcing contracts maintained and one new contract secured on the basis of verified traceability capability. Deforestation-free sourcing evidence prepared for EU market entry.',
        metrics: [
          { val: '3 customers', lbl: 'EUDR requirements satisfied' },
          { val: 'Farm-level', lbl: 'Traceability achieved' },
          { val: 'Contract', lbl: 'New export mandate secured' },
        ],
      },
      {
        title: 'Water Footprint Reduction Programme for a Rice Processor',
        tag: 'Water Management',
        challenge: 'A large basmati rice processor sourcing from water-stressed Punjab and Haryana faced investor pressure to disclose and reduce water intensity in their supply chain. Current water use data covered processing operations only — not upstream agricultural sourcing.',
        action: 'ESG Astraa conducted a full supply chain water footprint assessment (blue, green, and grey water), identified sourcing hotspots, designed a farmer engagement programme on water-efficient cultivation, and built a BRSR-aligned water KPI reporting framework.',
        result: 'Full supply chain water footprint disclosed for the first time in BRSR. Farmer water efficiency programme launched across 500+ supplier farms. Processing water intensity reduced by 18% through efficiency improvements identified in assessment.',
        metrics: [
          { val: '18%', lbl: 'Processing water intensity reduction' },
          { val: '500+ farms', lbl: 'Water efficiency programme coverage' },
          { val: 'BRSR', lbl: 'Full water footprint disclosed' },
        ],
      },
    ],
    thoughtLeadership: {
      intro: 'Our agriculture and food ESG research covers India\'s regulatory exposure to global standards, water and land risk, and the commercial imperative of sustainable sourcing.',
      insights: [
        { type: 'Regulatory Update', title: 'EU Deforestation Regulation: A Compliance Roadmap for Indian Agri Exporters', desc: 'A step-by-step guide to EUDR compliance for Indian exporters of regulated commodities — covering due diligence process, data requirements, and timeline.', gated: false, date: 'March 2026' },
        { type: 'Industry Report', title: 'Water Risk in Indian Agriculture: Sourcing Hotspots and Supply Chain Exposure', desc: 'Data-driven analysis of water stress across India\'s major crop sourcing geographies — with implications for agri companies\' ESG disclosure and operational resilience.', gated: true, date: 'January 2026' },
        { type: 'Whitepaper', title: 'Regenerative Agriculture and ESG Value Creation: Evidence from Indian Supply Chains', desc: 'How regenerative practices can deliver measurable ESG improvements — soil carbon, water efficiency, biodiversity — alongside improved farmer resilience and brand sustainability credentials.', gated: true, date: 'November 2025' },
        { type: 'Thought Leadership', title: 'Smallholder Traceability: The Practical Challenge at the Heart of Agri ESG', desc: 'Expert commentary on the operational complexity of traceability in smallholder-dominated Indian supply chains — with practical approaches to building credible data at scale.', gated: false, date: 'October 2025' },
      ],
      expertPerspective: {
        name: 'Meera Krishnan',
        role: 'Director, Agri & Food ESG Advisory',
        quote: 'EUDR is the most concrete proof yet that ESG in agriculture is a market access issue, not just a values question. Indian exporters who cannot demonstrate deforestation-free sourcing with verifiable data will lose European contracts — it\'s that direct. But traceability built for EUDR compliance also creates the foundation for a resilient, trusted supply chain that serves the business for decades.',
        topic: 'On the commercial imperative of EUDR compliance for Indian agri exporters',
      },
      checklistCTA: {
        title: 'Agri ESG & EUDR Readiness Assessment',
        desc: 'A 30-point diagnostic covering EUDR due diligence readiness, supply chain traceability depth, water footprint measurement status, and BRSR disclosure completeness — with a priority action plan.',
        label: 'Download Agri ESG Readiness Checklist',
      },
    },
  },
}
