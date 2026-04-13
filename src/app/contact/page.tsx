'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formType, setFormType] = useState<'consultation' | 'assessment'>('consultation')

  return (
    <>
      {/* Hero with photo */}
      <section className="relative bg-[#00338D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/handshake.jpg"
            alt="ESG consulting partnership"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00338D]/95 to-[#00338D]/70" />
        </div>
        <div className="max-w-site mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-[#0091DA]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">Contact Us</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.08] mb-5">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              Every meaningful engagement begins with understanding your unique ESG challenges. Speak directly with our advisory team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {/* Toggle */}
              <div className="flex gap-0 mb-10 border border-slate-border/60 w-fit">
                <button
                  onClick={() => setFormType('consultation')}
                  className={`font-semibold text-sm px-6 py-2.5 transition-all ${formType === 'consultation' ? 'bg-[#00338D] text-white' : 'bg-white text-slate-body/60 hover:bg-[#F5F7FA]'}`}
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => setFormType('assessment')}
                  className={`font-semibold text-sm px-6 py-2.5 transition-all ${formType === 'assessment' ? 'bg-[#00338D] text-white' : 'bg-white text-slate-body/60 hover:bg-[#F5F7FA]'}`}
                >
                  Request Assessment
                </button>
              </div>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A2E] mb-2 tracking-wide uppercase">Full Name *</label>
                    <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-slate-border text-sm focus:outline-none focus:border-[#00338D] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A2E] mb-2 tracking-wide uppercase">Company *</label>
                    <input type="text" placeholder="Organisation name" className="w-full px-4 py-3 border border-slate-border text-sm focus:outline-none focus:border-[#00338D] transition-colors" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A2E] mb-2 tracking-wide uppercase">Work Email *</label>
                    <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-slate-border text-sm focus:outline-none focus:border-[#00338D] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1A2E] mb-2 tracking-wide uppercase">Role / Title *</label>
                    <input type="text" placeholder="Your designation" className="w-full px-4 py-3 border border-slate-border text-sm focus:outline-none focus:border-[#00338D] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A2E] mb-2 tracking-wide uppercase">
                    {formType === 'consultation' ? 'Inquiry Type' : 'Assessment Type'}
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-border text-sm text-slate-body focus:outline-none focus:border-[#00338D] transition-colors bg-white">
                    {formType === 'consultation' ? (
                      <>
                        <option>ESG Strategy &amp; Transformation</option>
                        <option>BRSR &amp; ESG Compliance</option>
                        <option>Carbon Advisory &amp; Credits</option>
                        <option>ESG Risk &amp; Governance</option>
                        <option>Sustainable Finance Advisory</option>
                        <option>General Inquiry</option>
                      </>
                    ) : (
                      <>
                        <option>ESG Readiness Assessment</option>
                        <option>Carbon Footprint Assessment</option>
                        <option>BRSR Gap Analysis</option>
                        <option>Green Finance Readiness</option>
                      </>
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A2E] mb-2 tracking-wide uppercase">Message</label>
                  <textarea rows={4} placeholder="Tell us about your ESG challenges or requirements..." className="w-full px-4 py-3 border border-slate-border text-sm focus:outline-none focus:border-[#00338D] transition-colors resize-none" />
                </div>
                <button className="btn-primary w-full justify-center text-sm">
                  {formType === 'consultation' ? 'Book Consultation' : 'Request Assessment'} <ArrowRight size={15} />
                </button>
                <p className="text-xs text-slate-body/40 text-center">
                  Every submission receives a personalised response from a named consultant within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-[#1A1A2E] p-8 md:p-10 text-white">
                <div className="w-8 h-[3px] bg-[#0091DA] mb-6" />
                <h3 className="font-display font-bold text-xl mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail size={16} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-sm text-white/70">advisory@esgastraa.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={16} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-sm text-white/70">+91 (20) XXXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={16} className="text-[#0091DA] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Office</p>
                      <p className="text-sm text-white/70">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="font-semibold text-sm text-white mb-5">What to Expect</h4>
                  <div className="space-y-4">
                    {[
                      { step: '1', text: 'We review your inquiry within 24 hours' },
                      { step: '2', text: 'A named consultant contacts you directly' },
                      { step: '3', text: 'Initial 30-minute discovery call at no cost' },
                      { step: '4', text: 'Tailored proposal within one week' },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3">
                        <span className="font-bold text-xs text-white bg-[#0091DA] w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">{s.step}</span>
                        <p className="text-sm text-white/50">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
