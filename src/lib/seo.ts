export const SITE_NAME = 'ESG Astraa'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://esgastraa.com'

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}
