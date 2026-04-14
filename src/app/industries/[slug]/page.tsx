import Link from 'next/link'
import { INDUSTRIES, SERVICES } from '@/lib/data'
import { INDUSTRY_DEEP_CONTENT } from '@/lib/industry-content'
import {
  ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight,
  AlertTriangle, Lightbulb, ShieldCheck, TrendingUp,
  BookOpen, Download, MessageSquareQuote, ClipboardList,
  Star, Users, Zap, Leaf
} from 'lucide-react'
import { notFound } from 'next/navigation'
import IndustrySubNav from '@/components/IndustrySubNav'

const INDUSTRY_ACCENT: Record<string, string> = {
  'manufacturing': '#2E8AEA',
  'energy-power': '#0D9488',
  'healthcare-pharma': '#7516EA',
  'infrastructure-real-estate': '#1A6DC4',
  'financial-services': '#0D1B3E',
  'mining-metals': '#92400E',
  'it-technology': '#7516EA',
  'agriculture-food': '#16A34A',
}

const INDUSTRY_STATS: Record<string, { val: string; lbl: string }[]> = {
  'manufacturing': [
    { val: '1000+', lbl: 'Companies under SEBI BRSR mandate' },
    { val: '40%', lbl: 'Of India\'s emissions from sector' },
    { val: 'CBAM', lbl: 'EU border adjustment affecting exporters' },
  ],
  'energy-power': [
    { val: 'CCTS', lbl: 'India\'s Carbon Credit Trading Scheme' },
    { val: '500GW', lbl: 'India\'s 2030 renewable target' },
    { val: '45%', lbl: 'Emission intensity reduction by 2030' },
  ],
  'healthcare-pharma': [
    { val: '₹5.6L Cr', lbl: 'India pharma market by 2030' },
    { val: 'BMW Rules', lbl: 'Biomedical waste standards tightening' },
    { val: 'BRSR', lbl: 'Mandated for top 1000 listed companies' },
  ],
  'infrastructure-real-estate': [
    { val: '₹111L Cr', lbl: 'NIP infrastructure investment pipeline' },
    { val: 'ESIA', lbl: 'Mandatory for all major projects' },
    { val: '40%', lbl: 'Of global CO₂ from built environment' },
  ],
  'financial-services': [
    { val: 'RBI', lbl: 'Climate risk guidelines for banks' },
    { val: 'IFRS S2', lbl: 'Climate disclosure standard incoming' },
    { val: '₹500Cr+', lbl: 'Green bond issuances facilitated' },
  ],
  'mining-metals': [
    { val: 'SDF', lbl: 'Sustainable Development Framework mandated' },
    { val: '15%', lbl: 'Of India\'s GHG from mining & metals' },
    { val: 'CSR', lbl: 'Community investment obligations intensifying' },
  ],
  'it-technology': [
    { val: '85%', lbl: 'Of IT sector emissions are Scope 3' },
    { val: 'CSRD', lbl: 'EU disclosure affecting Indian IT exporters' },
    { val: 'RE100', lbl: 'Enterprise customer pressure on renewables' },
  ],
  'agriculture-food': [
    { val: '18%', lbl: 'Of India\'s GHG from agriculture' },
    { val: 'EUDR', lbl: 'EU Deforestation Regulation active' },
    { val: '80%', lbl: 'Of freshwater use from agricultural sector' },
  ],
}

const IMPORTANCE_COLOR: Record<string, string> = {
  'Critical': '#EF4444',
  'High': '#F59E0B',
  'Medium': '#2E8AEA',
}

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug)
  return { title: ind ? `${ind.title} ESG Advisory — ESG Astraa` : 'Industry — ESG Astraa' }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const ind = INDUSTRIES.find((i) => i.slug === params.slug)
  if (!ind) return notFound()

  const content = INDUSTRY_DEEP_CONTENT[ind.slug]
  const accent = INDUSTRY_ACCENT[ind.slug] || '#2E8AEA'
  const stats = INDUSTRY_STATS[ind.slug] || []

  const relatedServices = ind.relevantServiceSlugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s))

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-0"
        style={{ background: 'linear-gradient(150deg, #0D1B3E 0%, #112244 50%, #0D1B3E 100%)' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        {/* Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}15, transparent 70%)`, transform: 'translate(20%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7516EA12, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

        <div className="max-w-site mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/30 font-medium mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors no-underline">Home</Link>
            <ChevronRight size={12} />
            <Link href="/industries/" className="hover:text-white/60 transition-colors no-underline">Industries</Link>
            <ChevronRight size={12} />
            <span className="text-white/45">{ind.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-end pb-16">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6"
                style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>
                Industry ESG Advisory
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-5">
                {ind.title}<br />
                <span style={{ color: accent }}>ESG Advisory</span>
              </h1>
              <p className="text-base text-white/50 leading-relaxed max-w-lg mb-10">
                {content?.overview.headline}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="btn-primary">
                  Book Sector Consultation <ArrowRight size={16} />
                </Link>
                <Link href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[6px] text-sm font-semibold border transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.55)' }}>
                  Explore Services <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.lbl} className="bg-white/[0.04] p-7 text-center hover:bg-white/[0.07] transition-colors">
                  <div className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{s.val}</div>
                  <div className="text-[11px] text-white/35 leading-snug">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <IndustrySubNav accent={accent} />

      {/* ══════════════════════════════════════════
          SECTION 1: OVERVIEW
      ══════════════════════════════════════════ */}
      <section id="overview" className="scroll-mt-32">

        {/* State of sector */}
        <div className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                <span className="section-label mb-5 inline-flex">Sector Overview</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-5">
                  The State of ESG in {ind.title}
                </h2>
                {content?.overview.body.map((p, i) => (
                  <p key={i} className="text-slate-body/65 leading-[1.85] text-[15px] mb-5">{p}</p>
                ))}
                <Link href="/contact/"
                  className="inline-flex items-center gap-2 text-sm font-bold mt-3 hover:gap-3 transition-all no-underline"
                  style={{ color: accent }}>
                  Discuss Our {ind.title} Practice <ArrowRight size={14} />
                </Link>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
                {content?.overview.stateOfSector.map((item, i) => (
                  <div key={i} className="bg-slate-bg border border-slate-border/50 rounded-xl p-7 hover:shadow-md hover:border-[#2E8AEA]/25 transition-all group">
                    <span className="text-xs font-bold gradient-text block mb-3">0{i + 1}</span>
                    <h4 className="font-bold text-[#0D1B3E] mb-2 group-hover:text-[#2E8AEA] transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-body/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Landscape */}
        <div className="py-24 bg-slate-bg border-y border-slate-border/50">
          <div className="max-w-site mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-label mb-5 inline-flex justify-center">Regulatory Landscape</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3 mb-4">
                What Drives ESG Obligations in {ind.title}
              </h2>
              <p className="text-slate-body/55 leading-relaxed">
                We track regulatory developments across all relevant jurisdictions — so our advisory reflects the requirements that will actually affect your organisation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {content?.overview.regulatoryHighlights.map((reg, i) => (
                <div key={i} className="bg-white border border-slate-border/50 rounded-xl p-8 hover:shadow-md hover:border-[#2E8AEA]/25 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: `linear-gradient(135deg, ${accent}cc, #7516EAcc)` }}>
                        <ShieldCheck size={16} />
                      </div>
                      <h4 className="font-display font-bold text-[#0D1B3E]">{reg.name}</h4>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: reg.urgency === 'Active' ? '#FEF2F2' : reg.urgency === 'Escalating' ? '#FFFBEB' : '#EEF5FF',
                        color: reg.urgency === 'Active' ? '#DC2626' : reg.urgency === 'Escalating' ? '#D97706' : '#2E8AEA',
                      }}>
                      {reg.urgency}
                    </span>
                  </div>
                  <p className="text-sm text-slate-body/65 leading-relaxed">{reg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Materiality Matrix */}
        <div className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-2">
                <span className="section-label mb-5 inline-flex">Materiality</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] leading-tight mt-3 mb-5">
                  ESG Materiality for {ind.title}
                </h2>
                <p className="text-slate-body/60 leading-relaxed mb-6">
                  Effective ESG strategy starts by identifying which issues are genuinely material to your sector — driving regulatory exposure, investor scrutiny, and business value. Our sector materiality maps are built from primary regulatory research and investor engagement data.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { label: 'Critical', color: '#EF4444' },
                    { label: 'High', color: '#F59E0B' },
                    { label: 'Medium', color: '#2E8AEA' },
                  ].map((imp) => (
                    <div key={imp.label} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: imp.color }} />
                      <span className="text-xs font-semibold text-slate-body/55">{imp.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 space-y-2">
                {content?.overview.materiality.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-slate-border/40 bg-white hover:bg-slate-bg hover:border-slate-border/60 transition-all group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: IMPORTANCE_COLOR[item.importance] }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h4 className="font-bold text-sm text-[#0D1B3E]">{item.issue}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            background: `${IMPORTANCE_COLOR[item.importance]}15`,
                            color: IMPORTANCE_COLOR[item.importance],
                          }}>
                          {item.importance}
                        </span>
                      </div>
                      <p className="text-xs text-slate-body/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="py-24 bg-[#0D1B3E] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${accent}10, transparent)`, transform: 'translate(20%, -30%)' }} />
          <div className="max-w-site mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase mb-5 block" style={{ color: accent }}>Value Proposition</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                The Business Case for ESG in {ind.title}
              </h2>
              <p className="text-white/40 leading-relaxed">
                ESG integration is not a cost — it is an investment with measurable returns across risk, capital, operations, and market position.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {content?.overview.valueProp.map((v, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-8 hover:bg-white/5 hover:border-white/20 transition-all group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 text-white"
                    style={{ background: `${accent}30` }}>
                    {[<TrendingUp key={0} size={18} />, <Zap key={1} size={18} />, <Leaf key={2} size={18} />, <Users key={3} size={18} />][i % 4]}
                  </div>
                  <h4 className="font-display font-bold text-white mb-3">{v.title}</h4>
                  <p className="text-sm text-white/45 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges & Opportunities */}
        <div className="py-24 bg-white">
          <div className="max-w-site mx-auto px-6">
            <div className="text-center mb-14">
              <span className="section-label mb-5 inline-flex justify-center">Sector Landscape</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B3E] mt-3">
                Challenges &amp; Opportunities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-border/50 rounded-xl overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-border/40 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white bg-red-500">
                    <AlertTriangle size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D1B3E]">Key ESG Challenges</h3>
                    <p className="text-xs text-slate-body/40">Sector-specific pressure points</p>
                  </div>
                </div>
                <div className="divide-y divide-slate-border/30">
                  {ind.challenges.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 px-8 py-5">
                      <span className="text-xs font-bold text-slate-body/20 mt-0.5 flex-shrink-0 tabular-nums">0{i + 1}</span>
                      <p className="text-sm text-slate-body/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-border/50 rounded-xl overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-border/40 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
                    style={{ background: `linear-gradient(135deg, ${accent}, #7516EA)` }}>
                    <Lightbulb size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D1B3E]">Value Creation Opportunities</h3>
                    <p className="text-xs text-slate-body/40">Where ESG advisory drives impact</p>
                  </div>
                </div>
                <div className="divide-y divide-slate-border/30">
                  {ind.opportunities.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 px-8 py-5">
                      <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: accent }} />
                      <p className="text-sm text-slate-body/70 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2: SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="scroll-mt-32 bg-slate-bg border-t border-slate-border/50">
        <div className="py-24">
          <div className="max-w-site mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
              <div>
                <span className="section-label mb-5 inline-flex">Our Services</span>
                <h2 className="font-display text-4xl font-bold text-[#0D1B3E] leading-tight mt-3">
                  How We Help {ind.title} Organisations
                </h2>
              </div>
              <p className="text-slate-body/55 leading-relaxed">
                {content?.services.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {content?.services.pillars.map((pillar, i) => (
                <div key={i} className="bg-white border border-slate-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:border-transparent transition-all group">
                  {/* Accent bar */}
                  <div className="h-[3px] w-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${accent}, #7516EA)` }} />

                  <div className="p-8">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                        style={{ background: `linear-gradient(135deg, ${accent}, #7516EA)` }}>
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-[#0D1B3E] group-hover:text-[#2E8AEA] transition-colors">{pillar.title}</h3>
                        <p className="text-sm text-slate-body/55 leading-relaxed mt-1">{pillar.desc}</p>
                      </div>
                    </div>

                    <div className="border-t border-slate-border/40 pt-6 space-y-3">
                      {pillar.offerings.map((o, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                          <span className="text-sm text-slate-body/65 leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <Link href="/contact/"
                      className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all no-underline"
                      style={{ color: accent }}>
                      Discuss This Service <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Related services from global services */}
            {relatedServices.length > 0 && (
              <div className="mt-16 pt-12 border-t border-slate-border/40">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display font-bold text-xl text-[#0D1B3E]">Related Advisory Practices</h3>
                  <Link href="/services/" className="text-sm font-bold text-[#2E8AEA] hover:gap-3 inline-flex items-center gap-2 transition-all">
                    All Services <ArrowUpRight size={14} />
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {relatedServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}/`}
                      className="group block bg-white border border-slate-border/50 rounded-xl p-7 hover:shadow-lg hover:border-[#2E8AEA]/30 transition-all no-underline">
                      <h4 className="font-bold text-[#0D1B3E] mb-2 group-hover:text-[#2E8AEA] transition-colors">{s.shortTitle}</h4>
                      <p className="text-xs text-slate-body/55 leading-relaxed mb-4">{s.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all" style={{ color: accent }}>
                        Learn More <ArrowRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3: CASE STUDIES
      ══════════════════════════════════════════ */}
      <section id="case-studies" className="scroll-mt-32 py-24 bg-white border-t border-slate-border/50">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-5 mb-16">
            <div className="flex-1">
              <span className="section-label mb-5 inline-flex">Proven Impact</span>
              <h2 className="font-display text-4xl font-bold text-[#0D1B3E] leading-tight mt-3">
                Case Studies
              </h2>
            </div>
            <p className="text-slate-body/50 text-sm max-w-xs leading-relaxed flex-shrink-0">
              Representative engagements illustrating the kind of advisory and measurable outcomes we deliver for {ind.title.toLowerCase()} clients.
            </p>
          </div>

          <div className="space-y-8">
            {content?.caseStudies.map((cs, i) => (
              <div key={i} className="bg-white border border-slate-border/50 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                {/* Top accent */}
                <div className="h-[4px] w-full" style={{ background: `linear-gradient(90deg, ${accent}, #7516EA)` }} />

                <div className="p-10">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase mb-3 block"
                        style={{ color: accent }}>{cs.tag}</span>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-[#0D1B3E] leading-snug">{cs.title}</h3>
                    </div>
                    <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                      {cs.metrics.map((m) => (
                        <div key={m.lbl} className="text-center bg-slate-bg border border-slate-border/50 rounded-xl px-5 py-4 min-w-[100px]">
                          <div className="font-display font-bold text-lg gradient-text">{m.val}</div>
                          <div className="text-[10px] text-slate-body/45 leading-tight mt-1">{m.lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle size={14} className="text-red-400" />
                        <span className="text-xs font-bold text-slate-body/40 tracking-wider uppercase">Challenge</span>
                      </div>
                      <p className="text-sm text-slate-body/65 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb size={14} style={{ color: accent }} />
                        <span className="text-xs font-bold text-slate-body/40 tracking-wider uppercase">Our Approach</span>
                      </div>
                      <p className="text-sm text-slate-body/65 leading-relaxed">{cs.action}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Star size={14} className="text-emerald-500" />
                        <span className="text-xs font-bold text-slate-body/40 tracking-wider uppercase">Outcome</span>
                      </div>
                      <p className="text-sm text-slate-body/65 leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  {/* Mobile metrics */}
                  <div className="md:hidden flex flex-wrap gap-3 mt-6 pt-6 border-t border-slate-border/40">
                    {cs.metrics.map((m) => (
                      <div key={m.lbl} className="text-center bg-slate-bg border border-slate-border/50 rounded-xl px-4 py-3">
                        <div className="font-display font-bold gradient-text">{m.val}</div>
                        <div className="text-[10px] text-slate-body/45 leading-tight mt-1">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to contact */}
          <div className="mt-14 rounded-xl border border-slate-border/50 p-10 bg-slate-bg flex flex-col md:flex-row items-center gap-8 justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-[#0D1B3E] mb-2">Ready to Discuss Your Engagement?</h3>
              <p className="text-sm text-slate-body/55 leading-relaxed max-w-md">
                Our {ind.title.toLowerCase()} advisory team is ready to understand your specific challenges and design a tailored engagement.
              </p>
            </div>
            <Link href="/contact/" className="btn-primary flex-shrink-0">
              Book a Sector Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4: THOUGHT LEADERSHIP
      ══════════════════════════════════════════ */}
      <section id="insights" className="scroll-mt-32 border-t border-slate-border/50">

        {/* Insights grid */}
        <div className="py-24 bg-slate-bg">
          <div className="max-w-site mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end gap-5 mb-14">
              <div className="flex-1">
                <span className="section-label mb-5 inline-flex">Research &amp; Analysis</span>
                <h2 className="font-display text-4xl font-bold text-[#0D1B3E] leading-tight mt-3">
                  {ind.title} Insights
                </h2>
              </div>
              <p className="text-slate-body/50 text-sm max-w-xs leading-relaxed flex-shrink-0">
                {content?.thoughtLeadership.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {content?.thoughtLeadership.insights.map((ins, i) => (
                <Link key={i} href="/insights/"
                  className="group bg-white border border-slate-border/50 rounded-xl overflow-hidden hover:shadow-lg hover:border-transparent transition-all no-underline relative">
                  <div className="h-[3px] w-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${accent}, #7516EA)` }} />
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EEF5FF]">
                          <BookOpen size={18} className="text-[#2E8AEA]" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.12em] uppercase" style={{ color: accent }}>
                          {ins.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {ins.gated && (
                          <span className="text-[10px] font-bold bg-[#EEF5FF] text-[#2E8AEA] px-2.5 py-1 rounded-full flex-shrink-0">
                            Gated
                          </span>
                        )}
                        <span className="text-[10px] text-slate-body/35">{ins.date}</span>
                      </div>
                    </div>
                    <h4 className="font-display font-bold text-[#0D1B3E] leading-snug mb-3 group-hover:text-[#2E8AEA] transition-colors">
                      {ins.title}
                    </h4>
                    <p className="text-sm text-slate-body/55 leading-relaxed mb-5">{ins.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-3 transition-all" style={{ color: accent }}>
                      {ins.gated ? <><Download size={12} /> Download Report</> : <>Read More <ArrowUpRight size={12} /></>}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/insights/" className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] hover:gap-3 transition-all">
                View All {ind.title} Insights <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Expert Perspective */}
        {content?.thoughtLeadership.expertPerspective && (
          <div className="py-24 bg-white border-t border-slate-border/50">
            <div className="max-w-site mx-auto px-6">
              <div className="grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-2">
                  <span className="section-label mb-5 inline-flex">Expert Perspective</span>
                  <h2 className="font-display text-3xl font-bold text-[#0D1B3E] mt-3 mb-4">
                    Our Practitioners on {ind.title} ESG
                  </h2>
                  <p className="text-slate-body/55 leading-relaxed mb-6">
                    Our sector leads bring deep domain expertise and first-hand advisory experience from engagements across India and international markets.
                  </p>
                  <div className="flex items-center gap-4 p-5 bg-slate-bg rounded-xl border border-slate-border/40">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${accent}, #7516EA)` }}>
                      {content.thoughtLeadership.expertPerspective.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#0D1B3E] text-sm">{content.thoughtLeadership.expertPerspective.name}</div>
                      <div className="text-xs text-slate-body/50">{content.thoughtLeadership.expertPerspective.role}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-slate-bg border border-slate-border/50 rounded-xl p-10 relative">
                    <MessageSquareQuote size={40} className="text-slate-border mb-6" />
                    <blockquote className="font-display text-xl text-[#0D1B3E] leading-relaxed mb-6 italic">
                      &ldquo;{content.thoughtLeadership.expertPerspective.quote}&rdquo;
                    </blockquote>
                    <p className="text-xs font-bold text-slate-body/35 tracking-wider uppercase">
                      {content.thoughtLeadership.expertPerspective.topic}
                    </p>
                    {/* Accent line */}
                    <div className="absolute bottom-0 left-10 right-10 h-[3px] rounded-full opacity-30"
                      style={{ background: `linear-gradient(90deg, ${accent}, #7516EA)` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Checklist CTA */}
        <div className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1a2f5e 100%)' }}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${accent}10, transparent)`, transform: 'translate(20%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, #7516EA08, transparent)', transform: 'translate(-20%, 20%)' }} />

          <div className="max-w-site mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ClipboardList size={36} className="mb-6 opacity-60" style={{ color: accent }} />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  {content?.thoughtLeadership.checklistCTA.title}
                </h2>
                <p className="text-white/45 leading-relaxed mb-8">
                  {content?.thoughtLeadership.checklistCTA.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact/" className="btn-primary">
                    {content?.thoughtLeadership.checklistCTA.label} <Download size={15} />
                  </Link>
                  <Link href="/insights/"
                    className="btn-outline"
                    style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}>
                    Browse All Insights
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider uppercase text-white/30 mb-5">What you&apos;ll receive</div>
                {[
                  'Sector-calibrated ESG maturity diagnostic',
                  'Priority action recommendations by regulatory urgency',
                  'Benchmark positioning versus sector peers',
                  'Complimentary 30-minute advisory debrief',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: accent }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/55 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
