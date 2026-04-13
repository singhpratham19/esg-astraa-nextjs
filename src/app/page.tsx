import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, INDUSTRIES, IMPACT_NUMBERS, FRAMEWORKS, CASE_STUDIES } from '@/lib/data'
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'

const INDUSTRY_ICONS: Record<string, string> = {
  'manufacturing': '🏭',
  'energy-power': '⚡',
  'healthcare-pharma': '🏥',
  'infrastructure-real-estate': '🏢',
  'financial-services': '🏦',
  'mining-metals': '⛏️',
  'it-technology': '💻',
  'agriculture-food': '🌾',
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-end bg-[#00338D] overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-consulting.jpg"
            alt="ESG consulting team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00338D]/95 via-[#00338D]/80 to-[#00338D]/40" />
        </div>

        <div className="max-w-site mx-auto px-6 relative z-10 pb-20 pt-48 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-[#0091DA]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">Strategic ESG Advisory · A MindEarth Company</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-7 tracking-tight">
              Turning ESG Complexity into<br />
              Strategic Advantage
            </h1>
            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
              Data-backed advisory that transforms environmental, social, and governance obligations into competitive advantage — across emerging markets.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact/" className="btn-primary text-sm">
                Book a Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/services/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition-colors border-b border-white/30 pb-0.5 hover:border-white/70">
                Our Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-20 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {IMPACT_NUMBERS.map((n) => (
              <div key={n.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{n.value}</div>
                <div className="text-xs text-white/45 tracking-wide">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK TRUST BAR ── */}
      <section className="border-b border-slate-border/60 bg-white">
        <div className="max-w-site mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-body/40 whitespace-nowrap">Framework Aligned</span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {FRAMEWORKS.map((f) => (
              <span key={f} className="font-bold text-xs text-slate-body/30 tracking-widest">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label mb-5 inline-block">Advisory Services</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight mt-4">
                Six Consulting Pillars
              </h2>
            </div>
            <Link href="/services/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00338D] hover:gap-3 transition-all">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-border/40">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group bg-white p-9 hover:bg-[#F5F7FA] transition-colors no-underline relative border-b border-slate-border/20"
              >
                <span className="block font-bold text-5xl text-slate-border/50 mb-5 group-hover:text-[#00338D]/15 transition-colors">0{i + 1}</span>
                <h3 className="font-display font-bold text-lg text-[#1A1A2E] mb-3 group-hover:text-[#00338D] transition-colors">{s.shortTitle}</h3>
                <p className="text-sm text-slate-body/60 leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00338D]/60 group-hover:text-[#00338D] group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={12} />
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00338D] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH / PHOTO SPLIT ── */}
      <section className="bg-[#F5F7FA] border-y border-slate-border/50">
        <div className="max-w-site mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Photo */}
            <div className="relative min-h-[480px] lg:min-h-0">
              <Image
                src="/images/team-meeting.jpg"
                alt="ESG advisory team meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#00338D]/20" />
            </div>
            {/* Content */}
            <div className="px-10 md:px-16 py-16 lg:py-20 flex flex-col justify-center">
              <span className="section-label mb-5 inline-block">Our Methodology</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight mt-4 mb-6">
                Data-Backed Advisory.<br />Measurable Outcomes.
              </h2>
              <p className="text-slate-body/70 leading-relaxed mb-10">
                We combine deep domain expertise with proprietary data infrastructure to deliver ESG advisory grounded in evidence, calibrated to your industry, and designed for long-term impact.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Assess — Baseline measurement and gap analysis',
                  'Strategise — Data-informed ESG roadmap',
                  'Implement — Hands-on execution support',
                  'Measure — Continuous monitoring and KPI tracking',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-body/75">{step}</span>
                  </div>
                ))}
              </div>
              <Link href="/about/" className="btn-primary self-start text-sm">
                Learn Our Approach <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label mb-5 inline-block">Sector Expertise</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight mt-4">
                Eight Industry Specialisations
              </h2>
            </div>
            <Link href="/industries/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00338D] hover:gap-3 transition-all">
              All Industries <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-slate-border/50">
            {INDUSTRIES.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                className="group bg-white p-7 hover:bg-[#00338D] transition-colors no-underline border-r border-b border-slate-border/50"
              >
                <div className="text-3xl mb-4">{INDUSTRY_ICONS[ind.slug]}</div>
                <h3 className="font-display font-semibold text-sm text-[#1A1A2E] group-hover:text-white transition-colors mb-2 leading-snug">{ind.title}</h3>
                <div className="w-6 h-[2px] bg-[#0091DA] group-hover:w-10 transition-all mt-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label mb-5 inline-block">Proven Results</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight mt-4">
                Client Outcomes
              </h2>
            </div>
            <Link href="/case-studies/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00338D] hover:gap-3 transition-all">
              All Case Studies <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}/`}
                className="group block bg-white border border-slate-border/60 hover:border-[#00338D]/30 hover:shadow-lg transition-all no-underline overflow-hidden"
              >
                <div className="h-1.5 w-full bg-[#00338D]" />
                <div className="p-8">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-body/40 block mb-4">{cs.industry}</span>
                  <h3 className="font-display font-bold text-base text-[#1A1A2E] mb-4 group-hover:text-[#00338D] transition-colors leading-snug">{cs.title}</h3>
                  <p className="text-sm font-semibold text-[#0091DA] mb-5">{cs.outcome}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span key={m} className="text-[11px] font-medium bg-[#F5F7FA] text-slate-body/70 px-3 py-1">{m}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / PHOTO ── */}
      <section className="bg-[#00338D] overflow-hidden">
        <div className="max-w-site mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="px-10 md:px-16 py-20 lg:py-24 flex flex-col justify-center">
              <div className="w-10 h-[3px] bg-[#0091DA] mb-8" />
              <blockquote className="font-display text-xl md:text-2xl text-white leading-relaxed font-medium mb-10">
                &ldquo;ESG Astraa brought strategic clarity to what felt like an overwhelming compliance exercise. Their data-backed approach transformed our BRSR reporting into a genuine value creation tool.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#0091DA] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">CSO</div>
                <div>
                  <p className="font-semibold text-sm text-white">Chief Sustainability Officer</p>
                  <p className="text-xs text-white/50">Leading Listed Manufacturer, India</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[380px] lg:min-h-0">
              <Image
                src="/images/board-meeting.jpg"
                alt="Business leadership meeting"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-[#00338D]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label mb-5 inline-block">Research &amp; Insights</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight mt-4">
                From Our Latest Research
              </h2>
            </div>
            <Link href="/insights/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00338D] hover:gap-3 transition-all">
              All Insights <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: 'Whitepaper', title: 'ESG in Indian Manufacturing: Compliance to Competitive Advantage', desc: 'An in-depth analysis of how India\'s manufacturing sector can transform ESG compliance into strategic value creation.', icon: 'W' },
              { tag: 'Industry Report', title: 'Carbon Markets in India: CCTS Framework & Opportunities', desc: 'Comprehensive analysis of India\'s evolving carbon credit trading scheme and what it means for corporates.', icon: 'R' },
              { tag: 'Regulatory Update', title: 'SEBI BRSR Core: Value Chain Implications for Listed Companies', desc: 'Practical guidance on BRSR Core requirements and their impact on supply chain ESG management.', icon: 'U' },
            ].map((a) => (
              <div key={a.title} className="group border border-slate-border/50 bg-white hover:border-[#00338D]/30 hover:shadow-md transition-all cursor-pointer overflow-hidden">
                <div className="h-44 bg-[#F5F7FA] flex items-center justify-center border-b border-slate-border/40 relative">
                  <span className="font-bold text-8xl text-[#00338D]/8">{a.icon}</span>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#00338D] bg-[#00338D]/10 px-3 py-1">{a.tag}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-[#1A1A2E] mb-3 leading-snug group-hover:text-[#00338D] transition-colors">{a.title}</h3>
                  <p className="text-sm text-slate-body/55 leading-relaxed mb-5">{a.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00338D]">
                    Read More <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="w-8 h-[3px] bg-[#0091DA] mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to transform your ESG strategy?
            </h2>
            <p className="text-white/40 text-sm">
              Book a complimentary 30-minute consultation with our advisory team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <Link href="/contact/" className="btn-primary text-sm whitespace-nowrap">
              Book Consultation <ArrowRight size={15} />
            </Link>
            <Link href="/insights/" className="btn-outline text-sm whitespace-nowrap" style={{borderColor:'rgba(255,255,255,0.3)', color:'rgba(255,255,255,0.7)'}}>
              View Research
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
