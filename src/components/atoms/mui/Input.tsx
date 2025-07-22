import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import React from 'react';
import { InputProps } from '../../../types';

const MUIStyledInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== 'error',
})<{ error?: boolean }>(({ error }) => ({
  // Base styles
  boxSizing: 'border-box',
  margin: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  display: 'block',
  width: '100%',
  fontSize: '16px',
  borderRadius: '8px',
  background: 'white',
  transition: 'all 0.2s ease-in-out',
  padding: '12px 16px',
  border: error ? '2px solid #dc3545' : '2px solid #e9ecef',
  boxShadow: error ? '0 0 0 3px rgba(220, 53, 69, 0.1)' : 'none',
  minHeight: 'auto',
  lineHeight: 1.5,

  // Reset MUI default styles
  '& input': {
    padding: 0,
    margin: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    color: 'inherit',
    height: 'auto',
  },

  '&:focus': {
    outline: 'none',
    borderColor: error ? '#dc3545' : '#007bff',
    boxShadow: error
      ? '0 0 0 3px rgba(220, 53, 69, 0.1)'
      : '0 0 0 3px rgba(0, 123, 255, 0.1)',
  },

  '&:disabled': {
    background: '#f8f9fa',
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  '&::placeholder': {
    color: '#6c757d',
  },
}));

export const MUIInput: React.FC<InputProps> = ({
  placeholder,
  value,
  disabled = false,
  error = false,
  onChange,
}) => {
  return (
    <MUIStyledInput
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      error={error}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
