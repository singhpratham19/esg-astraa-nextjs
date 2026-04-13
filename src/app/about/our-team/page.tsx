import Link from 'next/link'
import { TEAM_MEMBERS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Our Team — ESG Astraa' }

export default function TeamPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-bg via-white to-violet/5 py-24 md:py-32">
        <div className="max-w-site mx-auto px-6">
          <Link href="/about/" className="text-sm text-violet font-display font-medium mb-6 inline-flex items-center gap-1 no-underline">← About</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-base mt-4 mb-6 max-w-3xl">Our Advisory Team</h1>
          <p className="text-lg text-slate-body/70 max-w-2xl leading-relaxed">
            Our team combines deep ESG domain expertise with industry-specific knowledge and data analytics capabilities.
          </p>
        </div>
      </section>
      <section className="py-section bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((tm) => (
              <div key={tm.name} className="card-hover rounded-2xl border border-slate-border/60 bg-white p-8 flex gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet/15 to-coral/15 flex-shrink-0 flex items-center justify-center">
                  <span className="font-display font-bold text-violet/40 text-xl">{tm.name.split(' ').map(w => w[0]).join('')}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-base">{tm.name}</h3>
                  <p className="text-xs text-violet font-display font-semibold mt-1 mb-3">{tm.role}</p>
                  <p className="text-sm text-slate-body/60 leading-relaxed">{tm.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-bg text-center">
        <div className="max-w-site mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-base mb-4">Join Our Team</h2>
          <p className="text-slate-body/60 text-sm mb-8 max-w-md mx-auto">We&apos;re always looking for talented ESG professionals to join our advisory practice.</p>
          <Link href="/contact/" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
