'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Theme, ThemeMode } from './types';
import { lightTheme, darkTheme } from './themes';

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  effectiveMode: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

const STORAGE_KEY = 'theme-mode';

export function ThemeProvider({ children, defaultMode = 'system' }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on client-side
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode;
    if (stored && (stored === 'light' || stored === 'dark' || stored === 'system')) {
      setMode(stored);
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setSystemPreference(prefersDark ? 'dark' : 'light');
    setMounted(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Save to localStorage whenever mode changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  }, [mode, mounted]);

  // Determine the effective theme (what actually gets applied)
  const effectiveMode = mode === 'system' ? systemPreference : mode;
  const theme = effectiveMode === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setMode(prevMode => {
      switch (prevMode) {
        case 'light': return 'dark';
        case 'dark': return 'system';
        case 'system': return 'light';
        default: return 'light';
      }
    });
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  const value: ThemeContextType = {
    theme,
    mode,
    effectiveMode,
    toggleTheme,
    setTheme,
  };

  // Prevent hydration mismatch by rendering a basic version during SSR
  if (!mounted) {
    return (
      <EmotionThemeProvider theme={lightTheme}>
        <ThemeContext.Provider value={value}>
          {children}
        </ThemeContext.Provider>
      </EmotionThemeProvider>
    );
  }

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}