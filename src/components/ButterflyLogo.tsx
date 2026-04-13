import React from 'react'

interface ButterflyLogoProps {
  size?: number
  variant?: 'white' | 'gradient' | 'dark'
  className?: string
}

export default function ButterflyLogo({
  size = 36,
  variant = 'white',
  className = '',
}: ButterflyLogoProps) {
  const gradientId = `butterfly-grad-${Math.random().toString(36).substr(2, 5)}`

  const strokeColor =
    variant === 'white'
      ? '#FFFFFF'
      : variant === 'dark'
      ? '#232234'
      : `url(#${gradientId})`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {variant === 'gradient' && (
        <defs>
          <linearGradient id={gradientId} x1="24" y1="0" x2="24" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#2E8AEA" />
            <stop offset="60%"  stopColor="#7516EA" />
            <stop offset="100%" stopColor="#9B30FF" />
          </linearGradient>
        </defs>
      )}
      {/* Upper wings — larger, pointing up */}
      <ellipse cx="24" cy="22" rx="16" ry="6" stroke={strokeColor} strokeWidth="1.8"
        transform="rotate(-30 24 22)" />
      <ellipse cx="24" cy="22" rx="16" ry="6" stroke={strokeColor} strokeWidth="1.8"
        transform="rotate(30 24 22)" />

      {/* Middle wings — horizontal */}
      <ellipse cx="24" cy="26" rx="14" ry="5" stroke={strokeColor} strokeWidth="1.8"
        transform="rotate(0 24 26)" />

      {/* Lower wings — smaller, pointing down */}
      <ellipse cx="24" cy="30" rx="12" ry="5" stroke={strokeColor} strokeWidth="1.8"
        transform="rotate(30 24 30)" />
      <ellipse cx="24" cy="30" rx="12" ry="5" stroke={strokeColor} strokeWidth="1.8"
        transform="rotate(-30 24 30)" />

      {/* Central body/stem */}
      <line x1="24" y1="26" x2="24" y2="52" stroke={strokeColor} strokeWidth="1.8"
        strokeLinecap="round" />
    </svg>
  )
}
