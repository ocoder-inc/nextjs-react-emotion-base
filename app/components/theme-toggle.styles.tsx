import styled from '@emotion/styled';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #ffffff;
  color: #000000;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    border-color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  [data-theme='dark'] & {
    background-color: #1f1f1f;
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.2);

    &:hover {
      background-color: #2a2a2a;
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;