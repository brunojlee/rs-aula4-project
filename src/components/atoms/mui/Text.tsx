import { styled } from '@mui/material/styles';
import React from 'react';
import { TextProps } from '../../../types';

const MUIStyledText = styled('span', {
  shouldForwardProp: (prop) => !['variant', 'color'].includes(prop as string),
})<{ variant: string; color: string }>(({ variant, color }) => ({
  // Base styles
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  lineHeight: 1.5,

  // Variant styles
  ...(variant === 'body' && {
    fontSize: '16px',
    fontWeight: 400,
  }),

  ...(variant === 'heading' && {
    fontSize: '24px',
    fontWeight: 600,
  }),

  ...(variant === 'caption' && {
    fontSize: '14px',
    fontWeight: 400,
  }),

  // Color styles
  ...(color === 'primary' && {
    color: '#212529',
  }),

  ...(color === 'secondary' && {
    color: '#6c757d',
  }),

  ...(color === 'error' && {
    color: '#dc3545',
  }),
}));

export const MUIText: React.FC<TextProps> = ({
  variant = 'body',
  color = 'primary',
  children,
}) => {
  return (
    <MUIStyledText variant={variant} color={color}>
      {children}
    </MUIStyledText>
  );
};
