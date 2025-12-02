import Image from 'next/image';
import styled from '@emotion/styled';

export const containerStyle = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  font-family: var(--font-geist-sans), sans-serif;

  @media (prefers-color-scheme: dark) {
    background-color: #000000;
  }
`;

export const mainStyle = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 48rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 4rem;
  background-color: #ffffff;

  @media (prefers-color-scheme: dark) {
    background-color: #000000;
  }

  @media (min-width: 640px) {
    align-items: flex-start;
  }
`;

export const logoStyle = styled(Image)`
  @media (prefers-color-scheme: dark) {
    filter: invert(1);
  }
`;

export const contentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  @media (min-width: 640px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const headingStyle = styled.h1`
  max-width: 20rem;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: -0.025em;
  color: #000000;

  @media (prefers-color-scheme: dark) {
    color: #fafafa;
  }
`;

export const paragraphStyle = styled.p`
  max-width: 28rem;
  font-size: 1.125rem;
  line-height: 2rem;
  color: #52525b;

  @media (prefers-color-scheme: dark) {
    color: #a1a1aa;
  }
`;

export const linkStyle = styled.a`
  font-weight: 500;
  color: #09090b;
  text-decoration: none;

  @media (prefers-color-scheme: dark) {
    color: #fafafa;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const buttonsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const primaryButtonStyle = styled.button`
  display: flex;
  height: 3rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 9999px;
  background-color: #171717;
  padding: 0 1.25rem;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #383838;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #cccccc;
    }
  }

  @media (min-width: 768px) {
    width: 158px;
  }
`;

export const secondaryButtonStyle = styled.button`
  display: flex;
  height: 3rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 1.25rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.04);
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.145);

    &:hover {
      background-color: #1a1a1a;
    }
  }

  @media (min-width: 768px) {
    width: 158px;
  }
`;
