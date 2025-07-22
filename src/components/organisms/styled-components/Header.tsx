import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {
  headerStyles,
  logoStyles,
  navStyles,
} from '../../../themes/shared-styles';
import { HeaderProps } from '../../../types';
import { SCButton } from '../../atoms/styled-components';

const HeaderContainer = styled.header`
  ${headerStyles}
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const Logo = styled.h1`
  ${logoStyles}
  cursor: pointer;
`;

const Nav = styled.nav`
  ${navStyles}
  min-width: 0;
  flex-shrink: 1;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 12px;
  min-width: 0;
  flex-shrink: 1;
  overflow: hidden;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  font-size: 13px;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: #f8f9fa;
    color: #007bff;
  }

  &.active {
    background: #007bff;
    color: white;
  }
`;

export const SCHeader: React.FC<HeaderProps> = ({ onThemeToggle }) => {
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
        <SCButton variant="secondary" size="sm" onClick={onThemeToggle}>
          🌓 Tema
        </SCButton>
      </Nav>
    </HeaderContainer>
  );
};
