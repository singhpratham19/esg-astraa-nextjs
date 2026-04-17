import Link from 'next/link'
import { ArrowRight, CheckCircle, ClipboardCheck, LayoutDashboard, Database, BarChart3, FileOutput, PlayCircle, Zap, Shield, Globe, TrendingUp, Bell, Lock, RefreshCw, Layers } from 'lucide-react'

export const metadata = { title: 'Platform — ESG Astraa | ESG Intelligence Suite' }

const PLATFORMS = [
  {
    id: 'audit-automation',
    label: 'Audit Automation',
    icon: ClipboardCheck,
    tagline: 'End-to-end ESG audit engine',
    headline: 'Automate every layer of your ESG audit.',
    description:
      'Replace manual, error-prone ESG audits with an intelligent engine that collects evidence, maps disclosures to frameworks, and flags gaps — before regulators do.',
    gradient: 'from-[#2E8AEA] to-[#1a6fc4]',
    accentColor: '#2E8AEA',
    features: [
      'Automated evidence collection across business units',
      'GRI, BRSR, ISSB & TCFD framework mapping',
      'Real-time gap detection & remediation alerts',
      'Audit trail with version-controlled documentation',
      'Third-party assurance readiness reports',
    ],
    stat: { value: '80%', label: 'Reduction in audit prep time' },
  },
  {
    id: 'reporting-dashboard',
    label: 'Reporting Dashboard',
    icon: LayoutDashboard,
    tagline: 'Real-time ESG KPI tracking',
    headline: 'One dashboard. Every ESG metric.',
    description:
      'A boardroom-ready command centre that surfaces your most critical ESG KPIs in real time — from carbon intensity to board diversity — with drill-down granularity.',
    gradient: 'from-[#7516EA] to-[#5a10c4]',
    accentColor: '#7516EA',
    features: [
      'Live KPI widgets with threshold alerts',
      'Scope 1, 2 & 3 emissions tracking',
      'Peer benchmarking & industry comparisons',
      'Custom board & investor report exports',
      'Trend analysis with forecast overlays',
    ],
    stat: { value: '360°', label: 'ESG visibility across your organisation' },
  },
  {
    id: 'data-management',
    label: 'Data Management',
    icon: Database,
    tagline: 'Integrate & centralise ESG data',
    headline: 'One source of truth for all ESG data.',
    description:
      'Connect disparate data streams — ERP, IoT, HR, finance — into a single governed data lake purpose-built for ESG disclosure and assurance.',
    gradient: 'from-[#0D9488] to-[#0a7a71]',
    accentColor: '#0D9488',
    features: [
      'Pre-built connectors for SAP, Oracle & Workday',
      'Automated data validation & anomaly detection',
      'Role-based access controls & data lineage',
      'Multi-site & multi-currency consolidation',
      'API-first architecture for custom integrations',
    ],
    stat: { value: '200+', label: 'Data connectors available' },
  },
  {
    id: 'compliance-tracker',
    label: 'Compliance Tracker',
    icon: BarChart3,
    tagline: 'Monitor regulatory deadlines',
    headline: 'Never miss a regulatory deadline.',
    description:
      'A living compliance calendar that tracks SEBI BRSR, RBI climate risk, CSRD, and 40+ global regulations — with automated reminders and obligation mapping.',
    gradient: 'from-[#EA8C2E] to-[#c47218]',
    accentColor: '#EA8C2E',
    features: [
      'Real-time regulatory update monitoring',
      'Obligation-to-task assignment workflows',
      'BRSR, CSRD, TCFD & RBI deadline calendar',
      'Compliance health score by jurisdiction',
      'Board-ready compliance summary reports',
    ],
    stat: { value: '40+', label: 'Regulations tracked in real time' },
  },
  {
    id: 'report-builder',
    label: 'Custom Report Builder',
    icon: FileOutput,
    tagline: 'Tailored output for any audience',
    headline: 'Publish board-ready ESG reports in hours.',
    description:
      'Drag-and-drop report composer with framework-specific templates. Generate investor decks, regulator submissions, and sustainability reports — all from one platform.',
    gradient: 'from-[#EA2E6B] to-[#c41855]',
    accentColor: '#EA2E6B',
    features: [
      'GRI, BRSR, ISSB & CDP report templates',
      'Drag-and-drop section composer',
      'Auto-populated data from connected modules',
      'Multi-format export (PDF, XBRL, HTML)',
      'Stakeholder-specific disclosure controls',
    ],
    stat: { value: '10×', label: 'Faster report generation vs. manual' },
  },
]

const TRUST_BADGES = [
  { icon: Lock, label: 'SOC 2 Type II' },
  { icon: Shield, label: 'ISO 27001' },
  { icon: Globe, label: 'GDPR Compliant' },
  { icon: RefreshCw, label: '99.9% Uptime SLA' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Connect Your Data', desc: 'Link your ERP, HRMS, finance systems, and IoT sensors through 200+ pre-built connectors in under a day.' },
  { step: '02', title: 'Configure Frameworks', desc: 'Select the disclosure frameworks relevant to your jurisdiction — BRSR, GRI, ISSB, TCFD, CSRD — and map your KPIs.' },
  { step: '03', title: 'Automate & Monitor', desc: 'Let the platform collect, validate, and surface your ESG data continuously with real-time alerts on gaps.' },
  { step: '04', title: 'Report & Assure', desc: 'Generate board-ready reports, submit to regulators, and prepare for third-party assurance — all in one place.' },
]

export default function PlatformPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#0D1B3E' }} className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.06]"
            style={{ background: 'radial-gradient(circle at top right, #2E8AEA, transparent 60%)' }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.04]"
            style={{ background: 'radial-gradient(circle at bottom left, #7516EA, transparent 65%)' }} />
        </div>

        <div className="max-w-site mx-auto px-6 relative">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/20 mb-6">ESG Intelligence Suite</p>
          <h1 className="font-display font-bold text-white leading-[1.05] tracking-tight max-w-4xl mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            One platform.{' '}
            <span style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Every ESG need.
            </span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed max-w-2xl mb-10">
            From audit automation to board-ready reporting — ESG Astraa's integrated platform replaces fragmented spreadsheets with a single, audit-grade intelligence suite built for Indian regulatory complexity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/request-demo/"
              className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3.5 rounded-lg transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
              Request a Demo <ArrowRight size={15} />
            </Link>
            <Link href="#modules"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white px-7 py-3.5 rounded-lg border border-white/10 hover:border-white/20 transition-all">
              Explore Modules <ArrowRight size={15} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-14 pt-14 border-t border-white/[0.06]">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/30">
                <Icon size={14} />
                <span className="text-xs font-semibold tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM STATS ───────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200/60">
            {[
              { value: '5', label: 'Integrated Modules' },
              { value: '40+', label: 'Regulations Tracked' },
              { value: '200+', label: 'Data Connectors' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((s) => (
              <div key={s.label} className="px-10 py-10 text-center">
                <p className="font-display font-bold text-[#0D1B3E] mb-1" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>{s.value}</p>
                <p className="text-xs font-semibold text-slate-400 tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM MODULES ─────────────────────────────────── */}
      <section id="modules" className="py-28 bg-[#F8F9FC]">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-4">Platform Modules</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              Five modules. One unified workflow.
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-[1.0625rem]">
              Each module works independently or as part of an end-to-end ESG workflow — designed to scale with your reporting maturity.
            </p>
          </div>

          <div className="space-y-6">
            {PLATFORMS.map((platform, idx) => {
              const Icon = platform.icon
              const isEven = idx % 2 === 0
              return (
                <div key={platform.id} id={platform.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>

                    {/* Content side */}
                    <div className={`p-10 lg:p-14 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${platform.accentColor}15` }}>
                          <Icon size={18} style={{ color: platform.accentColor }} />
                        </div>
                        <span className="text-xs font-bold tracking-[0.15em] uppercase"
                          style={{ color: platform.accentColor }}>
                          {platform.tagline}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-[#0D1B3E] leading-tight mb-4"
                        style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                        {platform.headline}
                      </h3>
                      <p className="text-slate-500 leading-relaxed mb-8 text-[1.0625rem]">
                        {platform.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {platform.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: platform.accentColor }} />
                            <span className="text-sm text-slate-600">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href={`/platform/${platform.id}/`}
                        className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                        style={{ color: platform.accentColor }}>
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Visual side */}
                    <div className={`relative min-h-[340px] lg:min-h-0 flex items-center justify-center p-10 lg:p-14 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}
                      style={{ background: `linear-gradient(135deg, ${platform.accentColor}08, ${platform.accentColor}14)` }}>

                      {/* Decorative grid lines */}
                      <div className="absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage: `linear-gradient(${platform.accentColor} 1px, transparent 1px), linear-gradient(90deg, ${platform.accentColor} 1px, transparent 1px)`,
                          backgroundSize: '40px 40px',
                        }} />

                      {/* Central stat */}
                      <div className="relative text-center">
                        <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${platform.accentColor}, ${platform.accentColor}cc)` }}>
                          <Icon size={36} color="white" />
                        </div>
                        <p className="font-display font-bold text-[#0D1B3E]"
                          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                          {platform.stat.value}
                        </p>
                        <p className="text-sm text-slate-500 mt-1 max-w-[160px] mx-auto leading-snug">{platform.stat.label}</p>

                        {/* Module label badge */}
                        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                          style={{ background: `${platform.accentColor}15`, color: platform.accentColor }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: platform.accentColor }} />
                          {platform.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-4">How It Works</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight max-w-xl mx-auto"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              From raw data to board-ready disclosure in four steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200/40">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-white p-10 group hover:bg-[#F8F9FC] transition-colors">
                <p className="font-display font-bold mb-5"
                  style={{ fontSize: '3rem', background: 'linear-gradient(135deg, #2E8AEA, #7516EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {step.step}
                </p>
                <h3 className="font-display font-bold text-[#0D1B3E] mb-3 text-base">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────── */}
      <section className="py-28" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">Integrations & Security</p>
              <h2 className="font-display font-bold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
                Plugs into your existing stack. Secured to enterprise grade.
              </h2>
              <p className="text-white/40 leading-relaxed mb-10 text-[1.0625rem]">
                Pre-built connectors for SAP, Oracle, Salesforce, Workday, and 200+ more. All data is encrypted at rest and in transit, with role-based access controls and full audit trails.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lock, title: 'AES-256 Encryption', desc: 'Data at rest & in transit' },
                  { icon: Shield, title: 'SOC 2 Type II', desc: 'Annually audited controls' },
                  { icon: Layers, title: 'Role-Based Access', desc: 'Granular permission controls' },
                  { icon: TrendingUp, title: 'Data Lineage', desc: 'Full traceability & versioning' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <Icon size={16} className="text-[#2E8AEA] mb-3" />
                      <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-white/30 text-xs">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Integration logos grid */}
            <div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {['SAP', 'Oracle', 'Salesforce', 'Workday', 'Microsoft', 'Google', 'SEBI APIs', 'RBI Gateway', 'GRI Connect'].map((name) => (
                <div key={name} className="flex items-center justify-center p-8 text-center"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <p className="text-xs font-bold text-white/25 tracking-wide">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK COMPLIANCE ─────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-4">Regulatory Coverage</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight max-w-xl mx-auto"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}>
              Built for every framework. Updated in real time.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['SEBI BRSR', 'GRI Standards', 'ISSB / IFRS S1', 'TCFD', 'CSRD', 'CDP', 'RBI Climate', 'CBAM', 'SASB', 'PCAF', 'EUDR', 'UN SDGs'].map((fw) => (
              <div key={fw}
                className="bg-white border border-slate-200/60 rounded-xl px-4 py-4 text-center hover:border-[#2E8AEA]/30 hover:shadow-sm transition-all">
                <p className="text-xs font-bold text-[#0D1B3E] tracking-wide">{fw}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-8">Get Started</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              See the platform live — tailored to your industry.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-12 max-w-xl text-lg">
              Request a personalised demo. Our team will walk you through the modules most relevant to your regulatory obligations and reporting maturity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/request-demo/"
                className="inline-flex items-center gap-2 text-sm font-bold text-white px-8 py-4 rounded-lg transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                <PlayCircle size={15} /> Request a Demo
              </Link>
              <Link href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1B3E] px-8 py-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-[#F8F9FC] transition-all">
                Talk to an Expert <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
