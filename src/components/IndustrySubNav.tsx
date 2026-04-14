'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'insights', label: 'Insights' },
]

export default function IndustrySubNav({ accent }: { accent: string }) {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -75% 0px', threshold: 0 }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 120
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="border-b border-slate-border/50 bg-white sticky top-[72px] z-40">
      <div className="max-w-site mx-auto px-6">
        <div className="flex overflow-x-auto scrollbar-hide">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap"
              style={{
                borderBottomColor: active === s.id ? accent : 'transparent',
                color: active === s.id ? accent : 'rgba(74,85,104,0.55)',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
