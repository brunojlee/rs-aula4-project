import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import React from 'react';
import { ButtonProps } from '../../../types';

const MUIStyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop as string),
})<{ variant: string; size: string }>(({ variant, size }) => ({
  // Base styles
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  borderRadius: '8px',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:focus': {
    outline: '2px solid #007bff',
    outlineOffset: '2px',
  },

  // Variant styles
  ...(variant === 'primary' && {
    background: '#007bff',
    color: 'white',
    '&:hover:not(:disabled)': {
      background: '#0056b3',
      transform: 'translateY(-1px)',
    },
    '&:active:not(:disabled)': {
      background: '#004499',
      transform: 'translateY(0)',
    },
  }),

  ...(variant === 'secondary' && {
    background: '#6c757d',
    color: 'white',
    '&:hover:not(:disabled)': {
      background: '#545b62',
      transform: 'translateY(-1px)',
    },
    '&:active:not(:disabled)': {
      background: '#495057',
      transform: 'translateY(0)',
    },
  }),

  // Size styles
  ...(size === 'sm' && {
    padding: '8px 16px',
    fontSize: '14px',
    minHeight: '32px',
  }),

  ...(size === 'md' && {
    padding: '12px 24px',
    fontSize: '16px',
    minHeight: '40px',
  }),

  ...(size === 'lg' && {
    padding: '16px 32px',
    fontSize: '18px',
    minHeight: '48px',
  }),
}));

export const MUIButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <MUIStyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </MUIStyledButton>
  );
};
