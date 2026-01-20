/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* slate-200 / slate-700 */
        input: 'var(--color-input)', /* slate-200 / slate-700 */
        ring: 'var(--color-ring)', /* orange-600 / orange-500 */
        background: 'var(--color-background)', /* gray-50 / slate-900 */
        foreground: 'var(--color-foreground)', /* slate-800 / slate-100 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* blue-600 / blue-500 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* slate-600 / slate-500 */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* orange-600 / orange-500 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-600 / red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-600 / emerald-500 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-600 / amber-500 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-600 / red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-100 / slate-700 */
          foreground: 'var(--color-muted-foreground)', /* slate-500 / slate-400 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white / slate-800 */
          foreground: 'var(--color-card-foreground)', /* slate-800 / slate-100 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white / slate-800 */
          foreground: 'var(--color-popover-foreground)', /* slate-800 / slate-100 */
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)', /* 6px */
        md: 'var(--radius-md)', /* 12px */
        lg: 'var(--radius-lg)', /* 16px */
        xl: 'var(--radius-xl)', /* 24px */
      },
      fontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      boxShadow: {
        'elevation-1': '0 2px 4px rgba(15, 23, 42, 0.08)',
        'elevation-2': '0 4px 6px rgba(15, 23, 42, 0.08)',
        'elevation-3': '0 6px 12px rgba(15, 23, 42, 0.12)',
        'elevation-4': '0 12px 24px rgba(15, 23, 42, 0.16)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}