import React from 'react';
import styled from 'styled-components';
import { authTemplateStyles } from '../../../themes/shared-styles';

const AuthContainer = styled.div`
  ${authTemplateStyles}
`;

interface AuthTemplateProps {
  children: React.ReactNode;
}

export const SCAuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <AuthContainer>
      {children}
    </AuthContainer>
  );
};
