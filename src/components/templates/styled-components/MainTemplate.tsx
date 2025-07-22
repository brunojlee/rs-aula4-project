import React from 'react';
import styled from 'styled-components';
import { mainTemplateStyles, mainContentStyles } from '../../../themes/shared-styles';

const MainContainer = styled.div`
  ${mainTemplateStyles}
`;

const MainContent = styled.main`
  ${mainContentStyles}
`;

interface MainTemplateProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const SCMainTemplate: React.FC<MainTemplateProps> = ({ header, children }) => {
  return (
    <MainContainer>
      {header}
      <MainContent>
        {children}
      </MainContent>
    </MainContainer>
  );
};
