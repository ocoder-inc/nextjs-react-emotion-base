import { css } from '@emotion/react';
import { Theme } from '../theme/types';

export const themeButton = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

  &:hover {
    background: ${theme.colors.background.hover};
    border-color: ${theme.colors.primary};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primary}20;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const themeDropdown = (theme: Theme) => css`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  z-index: 1000;
  overflow: hidden;
  min-width: 120px;
`;

export const themeOption = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background: transparent;
  border: none;
  color: ${theme.colors.text.primary};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${theme.colors.background.hover};
  }

  &:focus {
    outline: none;
    background: ${theme.colors.background.hover};
  }

  &[data-selected="true"] {
    background: ${theme.colors.primary}10;
    color: ${theme.colors.primary};
    font-weight: 500;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const themeIcon = css`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;