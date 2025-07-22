import { css } from 'styled-components';

// Base styles que serão aplicados em ambas as implementações
export const resetStyles = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

// Button styles
export const buttonBaseStyles = css`
  ${resetStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  font-family: inherit;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const buttonPrimaryStyles = css`
  ${buttonBaseStyles}
  background: #007bff;
  color: white;

  &:hover:not(:disabled) {
    background: #0056b3;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    background: #004499;
    transform: translateY(0);
  }
`;

export const buttonSecondaryStyles = css`
  ${buttonBaseStyles}
  background: #6c757d;
  color: white;

  &:hover:not(:disabled) {
    background: #545b62;
    transform: translateY(-1px);
  }
`;

export const buttonSizes = {
  sm: css`
    padding: 8px 16px;
    font-size: 14px;
    min-height: 32px;
  `,
  md: css`
    padding: 12px 24px;
    font-size: 16px;
    min-height: 40px;
  `,
  lg: css`
    padding: 16px 32px;
    font-size: 18px;
    min-height: 48px;
  `,
};

// Input styles
export const inputBaseStyles = css`
  ${resetStyles}
  display: block;
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &:disabled {
    background: #f8f9fa;
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #6c757d;
  }
`;

export const inputErrorStyles = css`
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
`;

// Badge styles
export const badgeBaseStyles = css`
  ${resetStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  line-height: 1;
`;

export const badgeVariants = {
  default: css`
    background: #6c757d;
    color: white;
  `,
  success: css`
    background: #28a745;
    color: white;
  `,
  error: css`
    background: #dc3545;
    color: white;
  `,
  warning: css`
    background: #ffc107;
    color: #212529;
  `,
};

// Text styles
export const textBaseStyles = css`
  ${resetStyles}
  line-height: 1.5;
`;

export const textVariants = {
  body: css`
    font-size: 16px;
    font-weight: 400;
  `,
  heading: css`
    font-size: 24px;
    font-weight: 600;
  `,
  caption: css`
    font-size: 14px;
    font-weight: 400;
  `,
};

export const textColors = {
  primary: css`
    color: #212529;
  `,
  secondary: css`
    color: #6c757d;
  `,
  error: css`
    color: #dc3545;
  `,
};

// SearchBar styles
export const searchBarStyles = css`
  ${resetStyles}
  display: flex;
  width: 100%;
  max-width: 400px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: white;
  overflow: hidden;
  transition: border-color 0.2s ease-in-out;

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

export const searchInputStyles = css`
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #6c757d;
  }
`;

export const searchButtonStyles = css`
  ${resetStyles}
  padding: 12px 16px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

// InputField (molecule) styles
export const inputFieldStyles = css`
  ${resetStyles}
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const labelStyles = css`
  font-size: 14px;
  font-weight: 500;
  color: #495057;
`;

export const errorTextStyles = css`
  font-size: 14px;
  color: #dc3545;
`;

// Header styles
export const headerStyles = css`
  ${resetStyles}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const logoStyles = css`
  font-size: 24px;
  font-weight: 700;
  color: #007bff;
`;

export const navStyles = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// LoginForm styles
export const formStyles = css`
  ${resetStyles}
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

export const formTitleStyles = css`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  color: #212529;
`;

// Template styles
export const authTemplateStyles = css`
  ${resetStyles}
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
`;

export const mainTemplateStyles = css`
  ${resetStyles}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const mainContentStyles = css`
  flex: 1;
  padding: 32px 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
