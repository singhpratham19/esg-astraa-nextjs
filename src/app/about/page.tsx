import Link from 'next/link'
import { FRAMEWORKS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'About Us — ESG Astraa' }

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#0D1B3E' }} className="pt-40 pb-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[900px] h-[900px] opacity-[0.05]"
            style={{ background: 'radial-gradient(circle at top right, #2E8AEA, transparent 60%)' }} />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] opacity-[0.03]"
            style={{ background: 'radial-gradient(circle at bottom left, #7516EA, transparent 65%)' }} />
        </div>
        <div className="max-w-site mx-auto px-6 relative">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/25 mb-10">About ESG Astraa</p>
          <h1 className="font-display font-bold text-white leading-[1.02] tracking-tight max-w-4xl"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}>
            We help organisations<br />
            turn ESG into a<br />
            <span style={{
              background: 'linear-gradient(135deg, #2E8AEA 0%, #7516EA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>strategic advantage.</span>
          </h1>
          <p className="text-white/35 mt-10 text-lg leading-relaxed max-w-2xl">
            Strategic ESG advisory for India&apos;s listed companies, financial institutions, and growth-stage enterprises — combining regulatory depth with measurable execution.
          </p>
        </div>
      </section>

      {/* ── PURPOSE STATEMENT ────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.8fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">Our Purpose</p>
              <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
            </div>
            <div>
              <p className="font-display font-bold text-[#0D1B3E] leading-snug mb-8"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                ESG Astraa exists because the advisory market was producing frameworks without outcomes — and India&apos;s organisations deserved better.
              </p>
              <p className="text-slate-500 leading-relaxed text-lg">
                We are a strategic ESG advisory firm built for India&apos;s regulatory reality and global investor expectations. Our work is grounded in data, led by domain specialists, and measured by outcomes that hold up to scrutiny — from regulators, boards, and capital markets alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">Our Story</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                Founded on a gap the market wasn&apos;t filling.
              </h2>
            </div>
            <div className="lg:pt-24 space-y-6 text-slate-500 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              <p>
                ESG Astraa was founded after years of observing a consistent pattern across Indian boardrooms: sustainability consultants were being engaged, reports were being produced, and frameworks were being adopted — but strategy was absent, data was unreliable, and disclosures were not surviving investor or regulatory scrutiny.
              </p>
              <p>
                The problem was not a lack of intent. It was a lack of the right expertise — sector-calibrated, regulation-aware, and financially rigorous. Generic advisory from firms without India-specific depth was producing disclosures that were technically compliant but strategically hollow.
              </p>
              <p>
                We built ESG Astraa to fill that gap. To bring together ESG strategists, carbon accountants, chartered accountants, and governance specialists into a single advisory firm that could take an organisation from baseline measurement all the way through to assurance-ready disclosure — and do it with the rigour that India&apos;s evolving regulatory landscape demands.
              </p>
              <p>
                Today we advise listed companies, financial institutions, PE-backed businesses, and MNCs with India operations — across eight industry sectors, on mandates that range from BRSR compliance to green bond structuring to board-level ESG governance design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">Who We Are</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                Consulting-first.<br />Data-backed.<br />Execution-focused.
              </h2>
            </div>
            <div className="lg:pt-24 space-y-6 text-slate-500 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              <p>
                We are a strategic advisory firm — not a SaaS platform, not a reporting tool, and not a generalist consultancy that added sustainability to its service menu. ESG is our only practice, and it is structured around four deep specialisations: ESG strategy and regulatory compliance, carbon and climate advisory, sustainable finance, and governance.
              </p>
              <p>
                Every engagement is led by specialists in those domains. Our ESG strategists understand the intersection of SEBI BRSR, GRI, and ISSB. Our carbon team quantifies emissions with the precision required for third-party assurance. Our CA-led finance team structures green bonds, sustainability-linked loans, and PCAF-aligned financed emission disclosures. Our governance specialists build board frameworks that integrate ESG into fiduciary responsibility — not just sustainability reporting.
              </p>
              <p>
                We embed proprietary data infrastructure into every engagement. Benchmarks, peer comparisons, regulatory tracking, and KPI dashboards are not add-ons — they are the foundation of how we advise. Our clients do not receive opinions. They receive data-backed recommendations they can defend to any stakeholder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ─────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">Who We Work With</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight max-w-2xl"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              Built for organisations where ESG stakes are real.
            </h2>
            <p className="text-slate-500 mt-5 max-w-xl leading-relaxed">
              We work across organisation types and stages — from India&apos;s top-150 listed companies facing BRSR Core mandates to growth-stage enterprises preparing for institutional capital.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/50">
            {[
              {
                type: 'Listed Companies',
                desc: 'Top-150 and top-1000 BSE/NSE listed companies navigating SEBI BRSR Core mandates, ESG ratings, and institutional investor ESG due diligence. We bring both disclosure rigour and strategic depth.',
                tags: ['BRSR Core', 'SEBI LODR', 'ESG Ratings'],
              },
              {
                type: 'Financial Institutions',
                desc: 'Banks, NBFCs, and insurance companies managing RBI climate risk guidelines, PCAF-aligned financed emission disclosures, and sustainable finance product structuring under SEBI and ICMA frameworks.',
                tags: ['RBI Climate', 'PCAF', 'Green Finance'],
              },
              {
                type: 'PE & VC Backed Companies',
                desc: 'Portfolio companies preparing for institutional exit, ESG due diligence processes, and LP reporting requirements. We help build the ESG infrastructure that survives transaction scrutiny.',
                tags: ['ESG Due Diligence', 'LP Reporting', 'Exit Readiness'],
              },
              {
                type: 'MNCs with India Operations',
                desc: 'Multinationals navigating India-specific regulatory obligations — BRSR, EPR, CCTS — alongside global parent requirements under CSRD, TCFD, and CDP. We bridge both contexts.',
                tags: ['CSRD Alignment', 'BRSR', 'EPR Compliance'],
              },
              {
                type: 'Promoter-Driven Enterprises',
                desc: 'Family-owned and promoter-driven businesses building first-generation ESG governance — from materiality assessment and policy frameworks to voluntary sustainability reporting.',
                tags: ['Materiality', 'First Disclosure', 'Governance Design'],
              },
              {
                type: 'Infrastructure & Project Finance',
                desc: 'Developers and lenders on infrastructure projects requiring ESIA, green building certification, social impact assessment, and ESG compliance for multilateral and development finance.',
                tags: ['ESIA', 'Green Buildings', 'DFI Standards'],
              },
            ].map((item) => (
              <div key={item.type} className="bg-white p-9 group hover:bg-[#0D1B3E] transition-all duration-300">
                <div className="w-6 h-[2px] mb-6 transition-all"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                <h3 className="font-display font-bold text-[#0D1B3E] group-hover:text-white text-lg mb-3 transition-colors">{item.type}</h3>
                <p className="text-sm text-slate-500/70 group-hover:text-white/45 leading-relaxed mb-5 transition-colors">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag}
                      className="text-[10px] font-bold tracking-wide text-slate-400 group-hover:text-white/30 border border-slate-200 group-hover:border-white/10 px-2.5 py-1 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDIA & ESG ──────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.8fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">India & ESG</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Why India requires a different kind of ESG expertise.
              </h2>
            </div>
            <div className="lg:pt-16 space-y-8">
              <p className="text-slate-500 leading-relaxed text-lg">
                India&apos;s ESG regulatory environment is one of the most complex and fastest-evolving in the world. SEBI has mandated BRSR reporting for the top 1000 listed companies. The RBI has issued climate risk guidelines for financial institutions. The Ministry of Corporate Affairs is expanding sustainability reporting obligations. And the Carbon Credit Trading Scheme (CCTS) is introducing a domestic compliance carbon market with significant implications for energy-intensive industries.
              </p>
              <div className="grid md:grid-cols-2 gap-px bg-slate-200/50">
                {[
                  {
                    reg: 'SEBI BRSR & BRSR Core',
                    detail: 'Mandatory for top 1000 listed companies. BRSR Core applies to top 150 with third-party assurance requirements from FY 2023-24.',
                  },
                  {
                    reg: 'RBI Climate Risk Guidelines',
                    detail: 'Climate-related financial risk disclosure and stress testing requirements for scheduled commercial banks and select financial institutions.',
                  },
                  {
                    reg: 'Carbon Credit Trading Scheme',
                    detail: 'India\'s emerging domestic compliance carbon market, targeting energy-intensive sectors under the Bureau of Energy Efficiency framework.',
                  },
                  {
                    reg: 'MCA & Companies Act',
                    detail: 'Board-level sustainability governance, CSR reporting, and business responsibility disclosures under Companies Act 2013 and its amendments.',
                  },
                ].map((item) => (
                  <div key={item.reg} className="bg-white p-7 border-b border-slate-200/50 last:border-b-0">
                    <p className="font-display font-bold text-[#0D1B3E] text-sm mb-2">{item.reg}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 leading-relaxed">
                This regulatory environment sits alongside international obligations — CSRD extraterritoriality for Indian companies with EU operations, CDP questionnaires scrutinised by institutional investors, and ISSB standards increasingly expected by global capital markets. ESG Astraa is built to navigate both contexts simultaneously — and to translate between Indian regulatory requirements and international investor expectations without losing fidelity to either.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BELIEVE ──────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">What We Believe</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight max-w-xl"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              The principles that guide every engagement.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200/50">
            {[
              {
                title: 'Data before strategy.',
                body: 'You cannot set credible ESG targets without accurate baseline measurement. We build data infrastructure before we advise on direction — not after.',
              },
              {
                title: 'Regulation is not the ceiling.',
                body: 'Compliance is the floor. The organisations that treat ESG as a strategic lever — not a reporting obligation — consistently outperform those that do not.',
              },
              {
                title: 'Specialists, not generalists.',
                body: 'ESG spans regulatory, financial, scientific, and governance disciplines. No single generalist does this well. We field specialists and integrate their work.',
              },
              {
                title: 'Accountability must be measurable.',
                body: 'ESG governance fails when it cannot be measured. Every framework we build has KPIs, escalation paths, and disclosure obligations that survive board scrutiny.',
              },
              {
                title: 'India requires India expertise.',
                body: 'SEBI BRSR, RBI climate risk, MCA obligations, and the CCTS framework are not afterthoughts — they are the regulatory reality our clients operate in.',
              },
              {
                title: 'Outcomes outlast engagements.',
                body: 'We measure our success by what organisations can do after we leave — not by the thickness of the report we hand over.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-10">
                <div className="w-8 h-[2px] mb-7"
                  style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
                <h3 className="font-display font-bold text-[#0D1B3E] mb-4 text-lg leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,2.2fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">What We Do</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Four practice areas. One integrated advisory.
              </h2>
              <p className="text-slate-400 mt-5 text-sm leading-relaxed">
                Our practice areas are distinct specialisations — but integrated in delivery. No siloed recommendations. Every strategy connects ESG, carbon, finance, and governance into a coherent whole.
              </p>
              <Link href="/services/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] mt-8 hover:gap-3 transition-all">
                Explore All Services <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-px bg-slate-200/40">
              {[
                {
                  num: '01',
                  title: 'ESG Strategy & Reporting',
                  desc: 'Materiality assessment, ESG roadmap design, multi-framework disclosure (BRSR, GRI, ISSB, TCFD, CSRD), regulatory compliance, and assurance-readiness preparation.',
                  href: '/services/strategy-advisory/',
                  tags: ['BRSR', 'GRI', 'ISSB', 'TCFD'],
                },
                {
                  num: '02',
                  title: 'Carbon & Climate Advisory',
                  desc: 'Scope 1, 2, and 3 emissions quantification, science-based target setting, CCTS readiness, decarbonisation roadmaps, and carbon credit advisory for voluntary and compliance markets.',
                  href: '/services/strategy-advisory/#carbon-advisory',
                  tags: ['Scope 1/2/3', 'SBTi', 'CCTS', 'Carbon Credits'],
                },
                {
                  num: '03',
                  title: 'Sustainable Finance',
                  desc: 'Green bond and SLL structuring, PCAF financed emission accounting, ESG due diligence for PE and M&A transactions, and climate risk integration into financial statements.',
                  href: '/services/finance-risk/',
                  tags: ['Green Bonds', 'SLL', 'PCAF', 'ESG DD'],
                },
                {
                  num: '04',
                  title: 'Governance & Social',
                  desc: 'Board-level ESG governance design, SEBI LODR compliance, human rights due diligence, DEI frameworks, ESG policy suite development, and BRSR Core assurance preparation.',
                  href: '/services/governance-social/',
                  tags: ['Board Governance', 'SEBI LODR', 'HRDD', 'DEI'],
                },
              ].map((svc) => (
                <Link key={svc.num} href={svc.href}
                  className="group flex gap-8 items-start bg-white p-9 hover:bg-[#F8F9FC] transition-colors no-underline">
                  <span className="font-display font-bold text-xl flex-shrink-0 mt-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #2E8AEA, #7516EA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                    {svc.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="font-display font-bold text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors">{svc.title}</h3>
                      <ArrowRight size={16} className="text-slate-300 group-hover:text-[#2E8AEA] flex-shrink-0 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold tracking-wide text-slate-300 border border-slate-200 px-2.5 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section className="py-28 border-b border-slate-200/50" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">How We Work</p>
              <h2 className="font-display font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                A repeatable framework for measurable outcomes.
              </h2>
              <p className="text-white/30 mt-6 text-sm leading-relaxed">
                Every engagement follows four phases — from baseline to continuous measurement. No shortcuts. No templates applied without sector calibration.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
              {[
                {
                  num: '01',
                  title: 'Assess',
                  desc: 'Baseline ESG performance measurement, gap analysis against applicable frameworks, materiality assessment with stakeholder input, and peer benchmarking using proprietary sector data. No engagement begins with strategy before baseline is established.',
                },
                {
                  num: '02',
                  title: 'Strategise',
                  desc: 'Data-informed roadmap aligned to business strategy, regulatory timelines, and stakeholder expectations. Target-setting grounded in science-based benchmarks, regulatory requirements, and industry comparators — not aspiration.',
                },
                {
                  num: '03',
                  title: 'Implement',
                  desc: 'Hands-on execution across data collection architecture, governance structure design, policy framework drafting, and assurance-ready disclosure preparation. We stay through delivery — not just through recommendation.',
                },
                {
                  num: '04',
                  title: 'Measure',
                  desc: 'Continuous KPI monitoring, annual disclosure management, assurance-readiness support, and regulatory update integration. ESG performance tracked with the same rigour applied to financial performance.',
                },
              ].map((p) => (
                <div key={p.num}
                  className="flex gap-10 items-start p-10 hover:bg-white/5 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <span className="font-display font-bold text-2xl flex-shrink-0 mt-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #2E8AEA, #7516EA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-white text-xl mb-3">{p.title}</h3>
                    <p className="text-white/30 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ─────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-20 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-10">Our Track Record</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                The work speaks for itself.
              </h2>
              <p className="text-slate-400 mt-5 text-sm leading-relaxed">
                Across more than 50 engagements spanning eight industry sectors, our work has produced outcomes that are quantified, documented, and independently verifiable.
              </p>
              <Link href="/case-studies/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] mt-8 hover:gap-3 transition-all">
                View Case Studies <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-slate-200/40">
              {[
                {
                  figure: '50+',
                  label: 'Organisations Advised',
                  detail: 'Across listed companies, financial institutions, PE-backed businesses, and MNCs — spanning eight industry sectors and all major ESG service areas.',
                },
                {
                  figure: '1.2M tCO₂e',
                  label: 'Emissions Measured & Verified',
                  detail: 'Scope 1, 2, and 3 emissions quantified across client portfolios, with third-party verification completed for assurance-required engagements.',
                },
                {
                  figure: '₹500Cr+',
                  label: 'Green Finance Structured',
                  detail: 'Green bonds, sustainability-linked loans, and ESG-linked financing instruments structured and facilitated across manufacturing, infrastructure, and financial services clients.',
                },
                {
                  figure: '8',
                  label: 'Industry Sectors',
                  detail: 'Manufacturing, energy, financial services, healthcare, infrastructure, mining, IT, and agriculture — each with proprietary benchmarks, regulatory maps, and sector specialists.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-white p-9">
                  <p className="font-display font-bold mb-2"
                    style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      background: 'linear-gradient(135deg, #2E8AEA, #7516EA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                    {item.figure}
                  </p>
                  <p className="font-display font-bold text-[#0D1B3E] text-sm mb-3">{item.label}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORKS ───────────────────────────────────────── */}
      <section className="py-12 bg-[#F8F9FC] border-b border-slate-200/40">
        <div className="max-w-site mx-auto px-6 flex flex-col sm:flex-row items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-slate-300 whitespace-nowrap flex-shrink-0">
            Framework Aligned
          </p>
          <div className="w-px h-5 bg-slate-200 hidden sm:block flex-shrink-0" />
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {FRAMEWORKS.map((f) => (
              <span key={f} className="font-bold text-xs tracking-widest text-slate-300 hover:text-slate-500 transition-colors cursor-default">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-36 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-8">Work With Us</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Ready to build an ESG programme that holds up to scrutiny?
            </h2>
            <p className="text-slate-500 leading-relaxed mb-12 max-w-xl text-lg">
              Book a complimentary 30-minute consultation. We will assess your current position, your regulatory exposure, and where the highest-value ESG work lies for your organisation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-bold text-white px-8 py-4 rounded-lg transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Book a Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/services/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1B3E] px-8 py-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-[#F8F9FC] transition-all">
                Explore Our Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
