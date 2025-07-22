import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';
import { HeaderProps } from '../../../types';
import { MUIButton } from '../../atoms/mui';

const HeaderContainer = styled('header')(() => ({
  boxSizing: 'border-box',
  margin: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  background: 'white',
  borderBottom: '1px solid #e9ecef',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
}));

const Logo = styled('h1')(() => ({
  fontSize: '24px',
  fontWeight: 700,
  color: '#007bff',
  cursor: 'pointer',
}));

const Nav = styled('nav')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  minWidth: 0,
  flexShrink: 1,
}));

const NavLinks = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginRight: '12px',
  minWidth: 0,
  flexShrink: 1,
  overflow: 'hidden',
}));

const NavLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#495057',
  fontWeight: 500,
  padding: '6px 8px',
  borderRadius: '6px',
  transition: 'all 0.2s ease-in-out',
  fontSize: '13px',
  whiteSpace: 'nowrap',
  flexShrink: 0,

  '&:hover': {
    background: '#f8f9fa',
    color: '#007bff',
  },

  '&.active': {
    background: '#007bff',
    color: 'white',
  },
}));

export const MUIHeader: React.FC<HeaderProps> = ({ onThemeToggle }) => {
  return (
    <HeaderContainer>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Logo>Atomic Design</Logo>
      </Link>
      <Nav>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/styled-demo">Styled Demo</NavLink>
          <NavLink href="/mui-demo">MUI Demo</NavLink>
          <NavLink href="/comparison">Comparação</NavLink>
        </NavLinks>
        <MUIButton variant="secondary" size="sm" onClick={onThemeToggle}>
          🌓 Tema
        </MUIButton>
      </Nav>
    </HeaderContainer>
  );
};
