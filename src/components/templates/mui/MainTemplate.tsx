import { styled } from '@mui/material/styles';
import React from 'react';

const MainContainer = styled('div')(() => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const MainContent = styled('main')(() => ({
  flex: 1,
  padding: '32px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
}));

interface MainTemplateProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const MUIMainTemplate: React.FC<MainTemplateProps> = ({
  header,
  children,
}) => {
  return (
    <MainContainer>
      {header}
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
};
