import type { MetadataRoute } from 'next'
import { CASE_STUDIES, INDUSTRIES, INSIGHTS_CATEGORIES, SERVICES } from '@/lib/data'
import { absoluteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about/',
    '/about/our-team/',
    '/about/our-methodology/',
    '/about/how-we-measure-emissions/',
    '/about/esg-data-analytics-approach/',
    '/about/partners-certifications/',
    '/services/',
    '/industries/',
    '/insights/',
    '/case-studies/',
    '/contact/',
    '/contact/book-consultation/',
    '/contact/request-assessment/',
    '/privacy-policy/',
    '/terms-of-service/',
  ]

  const now = new Date()

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: route === '/' ? 'weekly' as const : 'monthly' as const,
      priority: route === '/' ? 1 : 0.7,
    })),
    ...SERVICES.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}/`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...INDUSTRIES.map((industry) => ({
      url: absoluteUrl(`/industries/${industry.slug}/`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...CASE_STUDIES.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}/`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...INSIGHTS_CATEGORIES.map((category) => ({
      url: absoluteUrl(`/insights/${category.slug}/`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
