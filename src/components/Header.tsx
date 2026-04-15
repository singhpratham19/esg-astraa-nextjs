'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  ChevronDown, Menu, X, BarChart3, LayoutDashboard, Database, ClipboardCheck, FileOutput,
  PlayCircle, Factory, Zap, Heart, Building2, Landmark, Mountain, Cpu, Wheat, Target,
  FileCheck, Leaf, Shield, TrendingUp, Globe, Settings, BookOpen, BarChart2, Users,
  Repeat, Bell, DollarSign, Scale, ShieldCheck, Award, Receipt, Link2, Search, ShieldAlert,
  FileText, Droplets, Recycle, Truck, TreePine, ArrowRight,
} from 'lucide-react'
import ButterflyLogo from './ButterflyLogo'

type DropdownItem = {
  label: string
  desc: string
  href: string
  icon: React.ReactNode
  badge?: string
}

type Section = {
  title?: string
  href?: string
  items: DropdownItem[]
}

type NavItem = {
  label: string
  href: string
  noLink?: boolean
  dropdown?: {
    wide?: boolean
    sections: Section[]
  }
}

const NAV: NavItem[] = [
  {
    label: 'Platform',
    href: '/platform/',
    dropdown: {
      sections: [
        {
          title: 'Core Platform',
          items: [
            { label: 'Audit Automation', desc: 'End-to-end ESG audit engine', href: '/platform/audit-automation/', icon: <ClipboardCheck size={16} /> },
            { label: 'Reporting Dashboard', desc: 'Real-time ESG KPI tracking', href: '/platform/reporting/', icon: <LayoutDashboard size={16} /> },
            { label: 'Data Management', desc: 'Integrate & centralise ESG data', href: '/platform/data-management/', icon: <Database size={16} /> },
            { label: 'Compliance Tracker', desc: 'Monitor regulatory deadlines', href: '/platform/compliance/', icon: <BarChart3 size={16} /> },
            { label: 'Custom Report Builder', desc: 'Tailored output for any audience', href: '/platform/reports/', icon: <FileOutput size={16} /> },
          ],
        },
        {
          title: '',
          items: [
            { label: 'Request a Demo', desc: 'See the platform live', href: '/request-demo/', icon: <PlayCircle size={16} /> },
          ],
        },
      ],
    },
  },
  {
    label: 'Industries',
    href: '/industries/',
    dropdown: {
      sections: [
        {
          items: [
            { label: 'Manufacturing', desc: 'BRSR, supply chain, net zero', href: '/industries/manufacturing/', icon: <Factory size={16} /> },
            { label: 'Energy & Power', desc: 'CCTS, carbon markets, transition', href: '/industries/energy-power/', icon: <Zap size={16} /> },
            { label: 'Healthcare & Pharma', desc: 'BMW waste, patient impact, BRSR', href: '/industries/healthcare-pharma/', icon: <Heart size={16} /> },
            { label: 'Infrastructure & Real Estate', desc: 'ESIA, green buildings, LEED', href: '/industries/infrastructure-real-estate/', icon: <Building2 size={16} /> },
            { label: 'Financial Services', desc: 'RBI climate, PCAF, green bonds', href: '/industries/financial-services/', icon: <Landmark size={16} /> },
            { label: 'Mining & Metals', desc: 'SDF, FPIC, mine closure', href: '/industries/mining-metals/', icon: <Mountain size={16} /> },
            { label: 'IT & Technology', desc: 'Scope 3, CSRD, data centres', href: '/industries/it-technology/', icon: <Cpu size={16} /> },
            { label: 'Agriculture & Food', desc: 'EUDR, water, traceability', href: '/industries/agriculture-food/', icon: <Wheat size={16} /> },
          ],
        },
      ],
    },
  },
  {
    label: 'Services',
    href: '/services/',
    noLink: true,
    dropdown: {
      wide: true,
      sections: [
        {
          title: 'Strategy & Advisory',
          href: '/services/strategy-advisory/',
          items: [
            { label: 'ESG Strategy & Transformation', desc: 'Materiality, roadmap, integration', href: '/services/strategy-advisory/#esg-strategy', icon: <Target size={16} /> },
            { label: 'BRSR & ESG Compliance', desc: 'SEBI BRSR, GRI, ISSB reporting', href: '/services/strategy-advisory/#brsr-compliance', icon: <FileCheck size={16} /> },
            { label: 'Carbon Advisory & Credits', desc: 'Scope 1/2/3, CBAM, credits', href: '/services/strategy-advisory/#carbon-advisory', icon: <Leaf size={16} /> },
            { label: 'ESG Risk & Governance', desc: 'Board governance, supply chain risk', href: '/services/strategy-advisory/#esg-risk', icon: <Shield size={16} /> },
            { label: 'Sustainable Finance', desc: 'Green bonds, SLL, PCAF', href: '/services/strategy-advisory/#sustainable-finance-strategy', icon: <TrendingUp size={16} /> },
            { label: 'ESG Data & Intelligence', desc: 'KPI framework, benchmarks', href: '/services/strategy-advisory/#esg-data-strategy', icon: <BarChart3 size={16} /> },
          ],
        },
        {
          title: 'Finance & Risk',
          href: '/services/finance-risk/',
          items: [
            { label: 'ESG Financial Analysis', desc: 'PCAF financed emissions & ROI', href: '/services/finance-risk/#esg-financial-analysis', icon: <TrendingUp size={16} /> },
            { label: 'ESG Tax Advisory', desc: 'CBAM, carbon levy planning', href: '/services/finance-risk/#esg-tax-advisory', icon: <Receipt size={16} /> },
            { label: 'Green Finance & Bonds', desc: 'ICMA GBP, SEBI green debt', href: '/services/finance-risk/#green-finance-bonds', icon: <Landmark size={16} /> },
            { label: 'ESG-Linked Financing', desc: 'SLL structuring, RBI climate', href: '/services/finance-risk/#esg-linked-financing', icon: <Link2 size={16} /> },
            { label: 'ESG Due Diligence', desc: 'M&A and investment screening', href: '/services/finance-risk/#esg-due-diligence', icon: <Search size={16} /> },
            { label: 'Cyber Risk & Privacy', desc: 'ISO 27001, DPDP Act', href: '/services/finance-risk/#cyber-risk-privacy', icon: <ShieldAlert size={16} /> },
            { label: 'CA Firm Backed', desc: 'All financial advisory supported by our CA firm', href: '/services/finance-risk/', icon: <Award size={16} />, badge: 'CA Backed' },
          ],
        },
        {
          title: 'Governance & Social',
          href: '/services/governance-social/',
          items: [
            { label: 'Governance & Board Advisory', desc: 'Board ESG oversight, SEBI LODR', href: '/services/governance-social/#governance-board', icon: <Users size={16} /> },
            { label: 'ESG Policy Frameworks', desc: 'Policy design & implementation', href: '/services/governance-social/#esg-policy-frameworks', icon: <FileText size={16} /> },
            { label: 'DEI & Social Impact', desc: 'Diversity, inclusion & social metrics', href: '/services/governance-social/#dei-social-impact', icon: <Heart size={16} /> },
            { label: 'Human Rights Due Diligence', desc: 'UNGP compliance, value chains', href: '/services/governance-social/#human-rights-diligence', icon: <Scale size={16} /> },
            { label: 'Ethics & Anti-Corruption', desc: 'ISO 37001, integrity frameworks', href: '/services/governance-social/#ethics-anti-corruption', icon: <ShieldCheck size={16} /> },
            { label: 'BRSR Core Assurance', desc: 'India disclosure & verification', href: '/services/governance-social/#brsr-assurance', icon: <ClipboardCheck size={16} /> },
          ],
        },
      ],
    },
  },
  {
    label: 'Solutions',
    href: '/solutions/',
    dropdown: {
      sections: [
        {
          items: [
            { label: 'Energy Efficiency', desc: 'Audits, ISO 50001, BEE PAT', href: '/solutions/#energy-efficiency', icon: <Zap size={16} /> },
            { label: 'Renewable Energy', desc: 'Solar, wind, PPA, RPO compliance', href: '/solutions/#renewable-energy', icon: <Settings size={16} /> },
            { label: 'Water Conservation', desc: 'ZLD, rainwater harvesting, reuse', href: '/solutions/#water-conservation', icon: <Droplets size={16} /> },
            { label: 'Waste Management', desc: 'SWM Rules, EPR, zero waste', href: '/solutions/#waste-management', icon: <Recycle size={16} /> },
            { label: 'Green Fleet', desc: 'EV transition, Scope 3 logistics', href: '/solutions/#green-fleet', icon: <Truck size={16} /> },
            { label: 'Sustainable Procurement', desc: 'ISO 20400, supplier screening', href: '/solutions/#sustainable-procurement', icon: <Leaf size={16} /> },
            { label: 'Green Buildings', desc: 'LEED, GRIHA, facility retrofits', href: '/solutions/#green-buildings', icon: <Globe size={16} /> },
            { label: 'Ecological Restoration', desc: 'Afforestation, CAMPA, nature-positive', href: '/solutions/#ecological-restoration', icon: <TreePine size={16} /> },
          ],
        },
      ],
    },
  },
  {
    label: 'Our Ecosystem',
    href: '/ecosystem/',
    dropdown: {
      sections: [
        {
          items: [
            { label: 'About ESG Astraa', desc: 'Our mission, team, and approach', href: '/about/', icon: <Users size={16} /> },
            { label: 'Our Methodology', desc: 'How we deliver outcomes', href: '/about/our-methodology/', icon: <Repeat size={16} /> },
            { label: 'Partners & Certifications', desc: 'Frameworks and accreditations', href: '/about/partners-certifications/', icon: <ClipboardCheck size={16} /> },
            { label: 'Case Studies', desc: 'Client outcomes and results', href: '/case-studies/', icon: <BookOpen size={16} /> },
          ],
        },
      ],
    },
  },
  {
    label: 'Insights',
    href: '/insights/',
    dropdown: {
      sections: [
        {
          items: [
            { label: 'Whitepapers', desc: 'In-depth ESG research documents', href: '/insights/whitepapers/', icon: <BookOpen size={16} /> },
            { label: 'Industry Reports', desc: 'Sector ESG landscape analysis', href: '/insights/industry-reports/', icon: <BarChart2 size={16} /> },
            { label: 'ESG Benchmarks', desc: 'Data-driven performance benchmarks', href: '/insights/esg-benchmarks/', icon: <BarChart3 size={16} /> },
            { label: 'Thought Leadership', desc: 'Expert commentary and trends', href: '/insights/thought-leadership/', icon: <Users size={16} /> },
            { label: 'Regulatory Updates', desc: 'SEBI, RBI, CSRD tracking', href: '/insights/regulatory-updates/', icon: <Bell size={16} /> },
          ],
        },
      ],
    },
  },
]

/* ── Narrow dropdown (default) ── */
function DropdownMenu({ sections }: { sections: Section[] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200/80 overflow-hidden min-w-[280px]">
        {sections.map((section, si) => (
          <div key={si}>
            {section.title && (
              <div className="px-4 pt-4 pb-1">
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-400">{section.title}</span>
              </div>
            )}
            <div className="p-2">
              {section.items.map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors no-underline group/item">
                  <span className="text-[#2E8AEA] mt-0.5 flex-shrink-0 opacity-70 group-hover/item:opacity-100 transition-opacity">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-[#0D1B3E] group-hover/item:text-[#2E8AEA] transition-colors leading-tight">{item.label}</div>
                    <div className="text-xs text-slate-400 leading-tight mt-0.5">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
            {si < sections.length - 1 && <div className="border-t border-slate-100 mx-4" />}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Wide 3-column dropdown (Services) ── */
function WideDropdownMenu({ sections }: { sections: Section[] }) {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 pt-3 z-50" style={{ top: '72px' }}>
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200/80 overflow-hidden" style={{ width: '860px' }}>
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          {sections.map((section, si) => (
            <div key={si} className="flex flex-col">
              {/* Column header — clickable if href provided */}
              {section.title && (
                <div className="px-5 pt-5 pb-3 border-b border-slate-100">
                  {section.href ? (
                    <Link href={section.href}
                      className="group/col flex items-center gap-1.5 no-underline">
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#2E8AEA] group-hover/col:text-[#1a6fc4] transition-colors">{section.title}</span>
                      <ArrowRight size={10} className="text-[#2E8AEA] opacity-0 group-hover/col:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#2E8AEA]">{section.title}</span>
                  )}
                </div>
              )}
              {/* Items */}
              <div className="p-3 flex flex-col gap-0.5 flex-1">
                {section.items.map((item) => (
                  item.badge ? (
                    /* Special badge row (CA Firm Backed) */
                    <Link key={item.href} href={item.href}
                      className="flex items-start gap-3 px-3 py-3 mt-2 rounded-xl bg-[#F0FDF9] border border-[#0D9488]/15 hover:border-[#0D9488]/40 transition-colors no-underline group/item">
                      <span className="text-[#0D9488] mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#0D9488] leading-tight">{item.label}</span>
                          <span className="text-[9px] font-bold bg-[#0D9488] text-white px-1.5 py-0.5 rounded">{item.badge}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ) : (
                    <Link key={item.href} href={item.href}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors no-underline group/item">
                      <span className="text-[#2E8AEA] mt-0.5 flex-shrink-0 opacity-60 group-hover/item:opacity-100 transition-opacity">{item.icon}</span>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0D1B3E] group-hover/item:text-[#2E8AEA] transition-colors leading-tight">{item.label}</div>
                        <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NavItemDesktop({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }, [])

  if (!item.dropdown) {
    return (
      <Link href={item.href} className="text-[14px] font-medium text-white/80 hover:text-white transition-colors no-underline">
        {item.label}
      </Link>
    )
  }

  const isWide = item.dropdown.wide === true

  return (
    <div ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {item.noLink ? (
        <button className="flex items-center gap-1 text-[14px] font-medium text-white/80 hover:text-white transition-colors bg-transparent border-0 cursor-default p-0">
          {item.label}
          <ChevronDown size={13} className={`opacity-50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <Link href={item.href} className="flex items-center gap-1 text-[14px] font-medium text-white/80 hover:text-white transition-colors no-underline">
          {item.label}
          <ChevronDown size={13} className={`opacity-50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </Link>
      )}
      {open && (
        isWide
          ? <WideDropdownMenu sections={item.dropdown.sections} />
          : <DropdownMenu sections={item.dropdown.sections} />
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2847] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline flex-shrink-0">
          <ButterflyLogo size={32} variant="gradient" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <NavItemDesktop key={item.href} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <Link href="/auth/signin/" className="text-[14px] font-medium text-white/75 hover:text-white transition-colors no-underline">
            Sign In
          </Link>
          <Link href="/request-demo/"
            className="text-[13px] font-bold text-white px-5 py-2.5 rounded-lg transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
            Request Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#152038] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="max-w-site mx-auto px-5 py-4">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-white/10">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-3.5 text-sm font-medium text-white/80 bg-transparent border-0 cursor-pointer text-left">
                      {item.label}
                      <ChevronDown size={14} className={`opacity-50 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pb-3">
                        {item.dropdown.sections.map((section, si) => (
                          <div key={si}>
                            {section.title && (
                              <div className="px-3 pt-3 pb-1">
                                <span className="text-[9px] font-bold tracking-[0.16em] uppercase text-[#5BA8EF]">{section.title}</span>
                              </div>
                            )}
                            <div className="space-y-0.5">
                              {section.items.map((sub) => (
                                <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors no-underline">
                                  <span className="text-[#5BA8EF] flex-shrink-0">{sub.icon}</span>
                                  <span className="text-sm text-white/65">{sub.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setMobileOpen(false)}
                    className="block py-3.5 text-sm font-medium text-white/80 no-underline">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-5 pb-2 space-y-3">
              <Link href="/auth/signin/" onClick={() => setMobileOpen(false)}
                className="block text-center text-sm font-medium text-white/70 no-underline py-2">
                Sign In
              </Link>
              <Link href="/request-demo/" onClick={() => setMobileOpen(false)}
                className="block text-center text-[13px] font-bold text-white px-5 py-3 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #2E8AEA, #7516EA)' }}>
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
