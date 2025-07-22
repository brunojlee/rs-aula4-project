import React from 'react';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '../lib/registry';
import ThemeRegistry from '../lib/theme-registry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atomic Design - Styled Components → MUI',
  description: 'Projeto didático para migração de styled-components para Material UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
