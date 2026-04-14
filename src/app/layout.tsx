import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ESG Advisory, BRSR Consulting, Sustainable Finance`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'ESG Astraa is an ESG advisory firm in India offering BRSR consulting, sustainable finance advisory, carbon accounting, ESG reporting, and sector-specific ESG strategy support.',
  keywords: [
    'ESG advisory',
    'ESG consulting India',
    'BRSR consulting',
    'sustainable finance advisory',
    'ESG reporting',
    'carbon accounting',
    'ESG strategy',
    'ESG risk and governance',
  ],
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${SITE_NAME} | ESG Advisory, BRSR Consulting, Sustainable Finance`,
    description:
      'ESG advisory in India for BRSR, ESG reporting, carbon strategy, governance, and sustainable finance.',
    siteName: SITE_NAME,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | ESG Advisory, BRSR Consulting, Sustainable Finance`,
    description:
      'ESG advisory in India for BRSR, carbon strategy, governance, and sustainable finance.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'business',
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
