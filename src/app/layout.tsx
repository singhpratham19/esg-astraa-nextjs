import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ESG Astraa — Strategic ESG Advisory',
  description: 'ESG Astraa is a strategic ESG advisory firm combining deep domain expertise with proprietary data-backed methodologies for emerging markets.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
