'use client';

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { MUIMainTemplate } from '../../components/templates/mui';
import { MUIHeader } from '../../components/organisms/mui';
import { MUIButton, MUIInput, MUIBadge, MUIText } from '../../components/atoms/mui';
import { MUISearchBar, MUIInputField } from '../../components/molecules/mui';
import { MUILoginForm } from '../../components/organisms/mui';
import { useTheme } from '../../lib/theme-registry';

const DemoContainer = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`;

const Section = styled('section')`
  margin-bottom: 48px;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled('h2')`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #007bff;
`;

const ComponentGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  align-items: start;
`;

const ComponentDemo = styled('div')`
  padding: 20px;
  border: 2px dashed #e9ecef;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ComponentLabel = styled('h4')`
  font-size: 16px;
  font-weight: 500;
  color: #495057;
  margin-bottom: 8px;
`;

export default function MUIDemoPage() {
  const { toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  const handleLogin = (data: { email: string; password: string }) => {
    alert(`Login com: ${data.email}`);
  };

  const handleSearch = (value: string) => {
    alert(`Pesquisar: ${value}`);
  };

  return (
    <MUIMainTemplate header={<MUIHeader onThemeToggle={toggleTheme} />}>
      <DemoContainer>
        <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '32px', textAlign: 'center' }}>
          Demo: Material UI
        </h1>

        {/* ATOMS */}
        <Section>
          <SectionTitle>⚛️ Atoms</SectionTitle>
          <ComponentGrid>
            <ComponentDemo>
              <ComponentLabel>Buttons</ComponentLabel>
              <MUIButton variant="primary">Primary</MUIButton>
              <MUIButton variant="secondary">Secondary</MUIButton>
              <MUIButton variant="primary" size="sm">Small</MUIButton>
              <MUIButton variant="primary" disabled>Disabled</MUIButton>
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>Inputs</ComponentLabel>
              <MUIInput placeholder="Digite algo..." />
              <MUIInput placeholder="Com erro..." error />
              <MUIInput placeholder="Disabled" disabled />
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>Badges</ComponentLabel>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <MUIBadge count={5} />
                <MUIBadge count={10} variant="success" />
                <MUIBadge count={999} max={99} variant="error" />
                <MUIBadge count={3} variant="warning" />
              </div>
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>Text</ComponentLabel>
              <MUIText variant="heading">Heading Text</MUIText>
              <MUIText variant="body">Body text normal</MUIText>
              <MUIText variant="caption" color="secondary">Caption text</MUIText>
              <MUIText variant="body" color="error">Error text</MUIText>
            </ComponentDemo>
          </ComponentGrid>
        </Section>

        {/* MOLECULES */}
        <Section>
          <SectionTitle>🧬 Molecules</SectionTitle>
          <ComponentGrid>
            <ComponentDemo>
              <ComponentLabel>SearchBar</ComponentLabel>
              <MUISearchBar
                placeholder="Buscar produtos..."
                value={searchValue}
                onChange={setSearchValue}
                onSearch={handleSearch}
              />
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>InputField</ComponentLabel>
              <MUIInputField
                label="Nome completo"
                placeholder="Digite seu nome"
                required
              />
              <MUIInputField
                label="Email"
                placeholder="seu@email.com"
                error="Email é obrigatório"
                required
              />
            </ComponentDemo>
          </ComponentGrid>
        </Section>

        {/* ORGANISMS */}
        <Section>
          <SectionTitle>🦠 Organisms</SectionTitle>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MUILoginForm onSubmit={handleLogin} />
          </div>
        </Section>
      </DemoContainer>
    </MUIMainTemplate>
  );
}
