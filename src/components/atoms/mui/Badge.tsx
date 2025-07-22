import { styled } from '@mui/material/styles';
import React from 'react';
import { BadgeProps } from '../../../types';

const MUIStyledBadge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant: string }>(({ variant }) => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: '2px 6px',
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  height: '20px',
  fontSize: '12px',
  fontWeight: 600,
  borderRadius: '10px',
  lineHeight: 1,
  ...(variant === 'default' && {
    background: '#6c757d',
    color: 'white',
  }),
  ...(variant === 'success' && {
    background: '#28a745',
    color: 'white',
  }),
  ...(variant === 'error' && {
    background: '#dc3545',
    color: 'white',
  }),
  ...(variant === 'warning' && {
    background: '#ffc107',
    color: '#212529',
  }),
}));

export const MUIBadge: React.FC<BadgeProps> = ({
  count,
  max = 99,
  variant = 'default',
}) => {
  const displayCount = count > max ? `${max}+` : count.toString();

  return <MUIStyledBadge variant={variant}>{displayCount}</MUIStyledBadge>;
};
