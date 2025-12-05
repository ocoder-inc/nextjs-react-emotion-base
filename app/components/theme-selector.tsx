'use client';

import React from 'react';
import { useTheme } from '../theme/theme-provider';
import { 
  themeButton, 
  themeDropdown, 
  themeOption, 
  themeIcon 
} from './theme-selector.styles';

const ThemeSelector: React.FC = () => {
  const { mode, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = [
    { 
      value: 'light' as const, 
      label: 'Light',
      icon: '☀️'
    },
    { 
      value: 'dark' as const, 
      label: 'Dark',
      icon: '🌙'
    },
    { 
      value: 'system' as const, 
      label: 'System',
      icon: '💻'
    }
  ];

  const currentTheme = themes.find(theme => theme.value === mode) || themes[2];

  const handleThemeSelect = (themeMode: 'light' | 'dark' | 'system') => {
    setTheme(themeMode);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-theme-selector]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div data-theme-selector style={{ position: 'relative' }}>
      <button
        css={themeButton}
        onClick={handleToggle}
        aria-label={`Current theme: ${currentTheme.label}. Click to change theme.`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span css={themeIcon}>{currentTheme.icon}</span>
        <span>{currentTheme.label}</span>
        <span css={{ 
          marginLeft: '8px', 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease'
        }}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div css={themeDropdown} role="listbox" aria-label="Theme options">
          {themes.map((theme) => (
            <button
              key={theme.value}
              css={themeOption}
              onClick={() => handleThemeSelect(theme.value)}
              role="option"
              aria-selected={mode === theme.value}
              data-selected={mode === theme.value}
            >
              <span css={themeIcon}>{theme.icon}</span>
              <span>{theme.label}</span>
              {mode === theme.value && (
                <span css={{ marginLeft: 'auto', color: 'inherit' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;