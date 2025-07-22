import { styled } from '@mui/material/styles';
import React from 'react';

const AuthContainer = styled('div')(() => ({
  boxSizing: 'border-box',
  margin: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f8f9fa',
  padding: '20px',
}));

interface AuthTemplateProps {
  children: React.ReactNode;
}

export const MUIAuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return <AuthContainer>{children}</AuthContainer>;
};
