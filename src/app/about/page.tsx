import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'About Us — ESG Astraa' }

/* ── Inline SVG Icons (minimalist line-art, no stock images) ── */

const IconBridge = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28h32M8 28V16a12 12 0 0 1 24 0v12" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 28V20M20 28V16M26 28V20" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="g1" x1="4" y1="16" x2="36" y2="28" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" />
    </linearGradient></defs>
  </svg>
)

const IconVision = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke="url(#g2)" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="8" stroke="url(#g2)" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="2.5" fill="url(#g2)" />
    <path d="M20 6V2M20 38v-4M6 20H2M38 20h-4" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="g2" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" />
    </linearGradient></defs>
  </svg>
)

const IconShield = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L6 10v10c0 9 6 14.5 14 17 8-2.5 14-8 14-17V10L20 4z" stroke="url(#g3)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 20l4 4 8-8" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs><linearGradient id="g3" x1="6" y1="4" x2="34" y2="31" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" />
    </linearGradient></defs>
  </svg>
)

const IconDiamond = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L36 20 20 36 4 20z" stroke="url(#g4)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 12L28 20 20 28 12 20z" stroke="url(#g4)" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="2" fill="url(#g4)" />
    <defs><linearGradient id="g4" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" />
    </linearGradient></defs>
  </svg>
)

const IconPillar = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 36h28M8 8h24M8 8v28M32 8v28" stroke="url(#g5)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 8v28M24 8v28" stroke="url(#g5)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M6 4h28" stroke="url(#g5)" strokeWidth="2" strokeLinecap="round" />
    <defs><linearGradient id="g5" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" />
    </linearGradient></defs>
  </svg>
)

const IconPulse = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20h8l4-10 4 20 4-14 4 8h8" stroke="url(#g6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="16" stroke="url(#g6)" strokeWidth="1" opacity="0.2" />
    <defs><linearGradient id="g6" x1="4" y1="10" x2="36" y2="30" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" />
    </linearGradient></defs>
  </svg>
)

/* ── Small value icons ── */
const IconIntegrity = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3L4 8v7c0 7 4.5 11 10 13 5.5-2 10-6 10-13V8L14 3z" stroke="url(#vi)" strokeWidth="1.2" strokeLinejoin="round" />
    <defs><linearGradient id="vi" x1="4" y1="3" x2="24" y2="21"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)
const IconInnovation = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3v4M22 6l-3 3M25 14h-4M6 6l3 3M3 14h4" stroke="url(#vn)" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="5" stroke="url(#vn)" strokeWidth="1.2" />
    <path d="M12 19v4h4v-4" stroke="url(#vn)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <defs><linearGradient id="vn" x1="3" y1="3" x2="25" y2="25"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)
const IconExcellence = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <polygon points="14,3 17,10 25,11 19,17 21,25 14,21 7,25 9,17 3,11 11,10" stroke="url(#ve)" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    <defs><linearGradient id="ve" x1="3" y1="3" x2="25" y2="25"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)
const IconAccountability = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="6" width="20" height="16" rx="2" stroke="url(#va)" strokeWidth="1.2" />
    <path d="M4 12h20M10 12v10M16 16h4M16 19h3" stroke="url(#va)" strokeWidth="1.2" strokeLinecap="round" />
    <defs><linearGradient id="va" x1="4" y1="6" x2="24" y2="22"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)

/* ── Service pillar icons ── */
const IconCompliance = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="4" width="20" height="24" rx="2" stroke="url(#sc)" strokeWidth="1.2" />
    <path d="M11 12h10M11 16h7M11 20h9" stroke="url(#sc)" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M20 22l2 2 4-4" stroke="url(#sc)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <defs><linearGradient id="sc" x1="6" y1="4" x2="26" y2="28"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)
const IconSoftware = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="6" width="24" height="18" rx="2" stroke="url(#ss)" strokeWidth="1.2" />
    <path d="M12 13l-4 4 4 4M20 13l4 4-4 4M17 11l-2 12" stroke="url(#ss)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <defs><linearGradient id="ss" x1="4" y1="6" x2="28" y2="24"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)
const IconCarbon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="11" stroke="url(#sca)" strokeWidth="1.2" />
    <path d="M16 8v8l6 4" stroke="url(#sca)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6l-2-2M22 6l2-2M16 4V2" stroke="url(#sca)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <defs><linearGradient id="sca" x1="5" y1="5" x2="27" y2="27"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)
const IconRisk = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 4L4 28h24L16 4z" stroke="url(#sr)" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M16 14v6M16 23v1" stroke="url(#sr)" strokeWidth="1.5" strokeLinecap="round" />
    <defs><linearGradient id="sr" x1="4" y1="4" x2="28" y2="28"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
  </svg>
)

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#0D1B3E' }} className="pt-40 pb-32 relative overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.04]"
            style={{ background: 'radial-gradient(circle at top right, #2E8AEA, transparent 60%)' }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] opacity-[0.03]"
            style={{ background: 'radial-gradient(circle at bottom left, #7516EA, transparent 65%)' }} />
        </div>

        <div className="max-w-site mx-auto px-6 relative">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/20 mb-10">About ESG Astraa</p>
          <h1 className="font-display font-bold text-white leading-[1.05] tracking-tight max-w-4xl"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            Strategic Sustainability &{' '}
            <span className="gradient-text">Digital Intelligence.</span>
          </h1>
          <p className="text-white/30 mt-10 text-lg leading-relaxed max-w-2xl">
            A technology-enabled consulting powerhouse designed to bridge the gap between complex corporate operations and sustainable excellence.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.8fr] gap-20 items-start">
            <div>
              <div className="mb-6"><IconBridge /></div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">Who We Are</p>
              <div className="w-10 h-[2px]" style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
            </div>
            <div>
              <p className="font-display font-bold text-[#0D1B3E] leading-snug mb-8"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)' }}>
                We provide a unique synthesis of strategic advisory and digital intelligence, backed by the foundational rigor of specialized financial audit practices.
              </p>
              <p className="text-slate-500 leading-relaxed text-[1.0625rem]">
                By integrating data-driven insights with audit-ready precision, we empower modern enterprises to navigate evolving regulatory landscapes including <strong className="text-[#0D1B3E] font-semibold">SEBI BRSR</strong> and <strong className="text-[#0D1B3E] font-semibold">GRI standards</strong> — transforming compliance into a strategic advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6"><IconVision /></div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">Vision & Mission</p>
            <div className="w-10 h-[2px] mx-auto" style={{ background: 'linear-gradient(90deg, #2E8AEA, #7516EA)' }} />
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-slate-200/50 max-w-4xl mx-auto">
            <div className="bg-white p-12">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2E8AEA] mb-5">Vision</p>
              <p className="text-slate-600 leading-relaxed">
                To serve as the global catalyst for a transparent economy where every business decision is rooted in environmental integrity, social equity, and long-term financial resilience.
              </p>
            </div>
            <div className="bg-white p-12">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2E8AEA] mb-5">Mission</p>
              <p className="text-slate-600 leading-relaxed">
                To simplify the corporate sustainability journey through integrated technology and expert financial assurance, driving value creation and net-zero transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ESG ASTRAA ADVANTAGE ─────────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="mb-16">
            <div className="mb-6"><IconShield /></div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">The ESG Astraa Advantage</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight max-w-2xl"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              We move beyond surface-level reporting to embed ESG principles into the financial and operational DNA of your organization.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200/40">
            {[
              {
                title: 'Professional Financial Rigor',
                desc: 'Our reporting and risk advisory are executed with the precision of experienced auditors, ensuring board-level confidence and regulatory accuracy.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="url(#a1)" strokeWidth="1.2" />
                    <path d="M3 9h18M8 9v11" stroke="url(#a1)" strokeWidth="1.2" />
                    <defs><linearGradient id="a1" x1="3" y1="4" x2="21" y2="20"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
                  </svg>
                ),
              },
              {
                title: 'Tech-Enabled Intelligence',
                desc: 'We leverage advanced analytics and automated frameworks to provide real-time KPI tracking and seamless sustainability disclosures.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="url(#a2)" strokeWidth="1.2" />
                    <path d="M8 14l3-4 3 2 3-4" stroke="url(#a2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs><linearGradient id="a2" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
                  </svg>
                ),
              },
              {
                title: 'End-to-End Assurance',
                desc: 'We facilitate the entire lifecycle of sustainability, from initial materiality assessments to final BRSR Core assurance.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="url(#a3)" strokeWidth="1.2" />
                    <path d="M5 12h14M12 5c-2 2.5-2 9.5 0 14M12 5c2 2.5 2 9.5 0 14" stroke="url(#a3)" strokeWidth="1.2" />
                    <defs><linearGradient id="a3" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
                  </svg>
                ),
              },
              {
                title: 'Actionable High-Density Insights',
                desc: 'We specialize in delivering precise, data-backed reports that satisfy both investors and regulators.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 18V8l5 4 3-6 3 4 5-4v12H4z" stroke="url(#a4)" strokeWidth="1.2" strokeLinejoin="round" />
                    <defs><linearGradient id="a4" x1="4" y1="6" x2="20" y2="18"><stop stopColor="#2E8AEA" /><stop offset="1" stopColor="#7516EA" /></linearGradient></defs>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-10 group hover:bg-[#F8F9FC] transition-colors">
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-display font-bold text-[#0D1B3E] text-sm mb-3 leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────── */}
      <section className="py-28 border-b border-slate-200/50" style={{ background: '#0D1B3E' }}>
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6"><IconDiamond /></div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">Core Values</p>
            <h2 className="font-display font-bold text-white leading-tight max-w-xl mx-auto"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
              The principles behind every engagement.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {[
              {
                icon: <IconIntegrity />,
                title: 'Integrity',
                desc: 'We maintain the highest professional standards in every audit and assessment we conduct.',
              },
              {
                icon: <IconInnovation />,
                title: 'Innovation',
                desc: 'We utilize cutting-edge climate tech to solve the most complex sustainability challenges.',
              },
              {
                icon: <IconExcellence />,
                title: 'Excellence',
                desc: 'We are committed to delivering high-density, precise insights for sustainable finance.',
              },
              {
                icon: <IconAccountability />,
                title: 'Accountability',
                desc: 'Every disclosure is backed by verifiable data, carbon footprint logic, and total financial transparency.',
              },
            ].map((item) => (
              <div key={item.title} className="p-10 hover:bg-white/5 transition-colors" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIZED SERVICE PILLARS ──────────────────────── */}
      <section className="py-28 bg-white border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,2.2fr] gap-20 items-start">
            <div>
              <div className="mb-6"><IconPillar /></div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">Our Specialized Service Pillars</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                Four pillars. One integrated advisory.
              </h2>
              <Link href="/services/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2E8AEA] mt-8 hover:gap-3 transition-all">
                Explore All Services <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-px bg-slate-200/40">
              {[
                {
                  icon: <IconCompliance />,
                  title: 'Regulatory Compliance',
                  desc: 'Expert guidance on BRSR, BRSR Core, and international GRI frameworks to ensure 100% compliance readiness.',
                  tags: ['BRSR', 'BRSR Core', 'GRI'],
                },
                {
                  icon: <IconSoftware />,
                  title: 'Sustainability Software Integration',
                  desc: 'Custom digital tools for real-time ESG data collection, reducing manual errors and streamlining the reporting cycle.',
                  tags: ['Real-time Data', 'Automation', 'Digital Tools'],
                },
                {
                  icon: <IconCarbon />,
                  title: 'Carbon Accounting & Net-Zero Roadmaps',
                  desc: 'Scientifically grounded logic to track carbon footprints and develop actionable decarbonization strategies.',
                  tags: ['Carbon Footprint', 'Net-Zero', 'Decarbonization'],
                },
                {
                  icon: <IconRisk />,
                  title: 'ESG Risk Management',
                  desc: 'Identifying and mitigating ESG-related financial risks to protect long-term enterprise value.',
                  tags: ['Risk Mitigation', 'Financial Risk', 'Enterprise Value'],
                },
              ].map((svc) => (
                <div key={svc.title} className="group flex gap-6 items-start bg-white p-9 hover:bg-[#F8F9FC] transition-colors">
                  <div className="flex-shrink-0 mt-1">{svc.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-[#0D1B3E] mb-2">{svc.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold tracking-wide text-slate-300 border border-slate-200 px-2.5 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS NOW ───────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] border-b border-slate-200/50">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.8fr] gap-20 items-center">
            <div>
              <div className="mb-6"><IconPulse /></div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-5">Why It Matters Now</p>
              <h2 className="font-display font-bold text-[#0D1B3E] leading-tight"
                style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                Sustainability is no longer a peripheral add-on — it is a financial imperative.
              </h2>
            </div>
            <div>
              <p className="text-slate-500 leading-relaxed text-lg">
                In an era of increased scrutiny, ESG Astraa ensures that your sustainability data is as reliable and rigorous as your financial data, providing a continuous loop of trust for stakeholders, investors, and regulators alike.
              </p>
              <div className="grid grid-cols-3 gap-px bg-slate-200/50 mt-12">
                {[
                  { label: 'Stakeholders', sub: 'Trust & Transparency' },
                  { label: 'Investors', sub: 'Data-Backed Confidence' },
                  { label: 'Regulators', sub: 'Full Compliance' },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-7 text-center">
                    <p className="font-display font-bold text-[#0D1B3E] text-sm mb-1">{item.label}</p>
                    <p className="text-[11px] text-slate-400">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2E8AEA] mb-8">Work With Us</p>
            <h2 className="font-display font-bold text-[#0D1B3E] leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ready to transform compliance into a strategic advantage?
            </h2>
            <p className="text-slate-500 leading-relaxed mb-12 max-w-xl text-lg">
              Book a complimentary consultation. We will assess your regulatory exposure, your current ESG position, and where integrated technology and expert assurance can drive the most value.
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
