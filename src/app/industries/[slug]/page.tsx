import Link from 'next/link'
import { INDUSTRIES, SERVICES } from '@/lib/data'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'

const INDUSTRY_IMAGES: Record<string, string> = {
  'manufacturing': '/images/industry-manufacturing.jpg',
  'energy-power': '/images/industry-energy.jpg',
  'healthcare-pharma': '/images/industry-healthcare.jpg',
  'infrastructure-real-estate': '/images/industry-infrastructure.jpg',
  'financial-services': '/images/industry-finance.jpg',
  'mining-metals': '/images/industry-mining.jpg',
  'it-technology': '/images/industry-technology.jpg',
  'agriculture-food': '/images/industry-agriculture.jpg',
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

  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link href="/industries/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline hover:gap-2 transition-all">
              ← All Industries
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-3xl leading-tight">
              {ind.title}
            </h1>
            <p className="text-lg text-slate-body/70 max-w-2xl leading-relaxed">
              {ind.desc}. We provide tailored ESG advisory that addresses the specific material issues, regulatory requirements, and value creation opportunities in your sector.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-80 h-64 rounded-2xl bg-gradient-to-br from-violet/15 to-coral/15 flex items-center justify-center shadow-xl text-6xl">
              {ind.slug === 'manufacturing' && '🏭'}
              {ind.slug === 'energy-power' && '⚡'}
              {ind.slug === 'healthcare-pharma' && '🏥'}
              {ind.slug === 'infrastructure-real-estate' && '🏢'}
              {ind.slug === 'financial-services' && '🏦'}
              {ind.slug === 'mining-metals' && '⛏️'}
              {ind.slug === 'it-technology' && '💻'}
              {ind.slug === 'agriculture-food' && '🌾'}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-base mb-8">Key Focus Areas</h2>
            <ul className="space-y-4">
              {ind.focus.map((f) => (
                <li key={f} className="flex items-start gap-4 p-5 rounded-xl border border-slate-border/60 bg-slate-bg/50">
                  <CheckCircle2 size={20} className="text-violet mt-0.5 flex-shrink-0" />
                  <span className="text-slate-body/80 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-section bg-slate-bg">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-base mb-8 text-center">Relevant Advisory Services</h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {SERVICES.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="card-hover block p-6 rounded-xl border border-slate-border/60 bg-white no-underline text-center">
                <h3 className="font-display font-semibold text-sm text-base mb-2">{s.shortTitle}</h3>
                <span className="text-xs text-violet font-display font-medium">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-base text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Discuss Your {ind.title} ESG Requirements
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            Our sector specialists understand the unique challenges facing {ind.title.toLowerCase()} organisations.
          </p>
          <Link href="/contact/" className="btn-primary bg-coral hover:bg-coral-light">
            Book Sector Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
