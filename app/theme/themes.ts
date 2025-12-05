import { Theme } from './types';

const baseTheme = {
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    xxl: '4rem',     // 64px
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
  typography: {
    fontFamily: {
      primary: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: 'var(--font-geist-mono), "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '2rem',    // 32px
      '4xl': '2.5rem',  // 40px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
  },
  borderRadius: '0.5rem',
  transition: 'all 0.2s ease-in-out',
};

export const lightTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#2563eb',      // Blue 600
    secondary: '#64748b',    // Slate 500
    accent: '#8b5cf6',       // Violet 500
    background: '#ffffff',   // White
    surface: '#f8fafc',      // Slate 50
    text: {
      primary: '#0f172a',    // Slate 900
      secondary: '#475569',  // Slate 600
      accent: '#2563eb',     // Blue 600
    },
    border: '#e2e8f0',       // Slate 200
    shadow: 'rgba(0, 0, 0, 0.1)',
    success: '#10b981',      // Emerald 500
    warning: '#f59e0b',      // Amber 500
    error: '#ef4444',        // Red 500
  },
};

export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    primary: '#3b82f6',      // Blue 500
    secondary: '#64748b',    // Slate 500
    accent: '#a855f7',       // Violet 500
    background: '#0f172a',   // Slate 900
    surface: '#1e293b',      // Slate 800
    text: {
      primary: '#f8fafc',    // Slate 50
      secondary: '#cbd5e1',  // Slate 300
      accent: '#60a5fa',     // Blue 400
    },
    border: '#334155',       // Slate 700
    shadow: 'rgba(0, 0, 0, 0.3)',
    success: '#34d399',      // Emerald 400
    warning: '#fbbf24',      // Amber 400
    error: '#f87171',        // Red 400
  },
};