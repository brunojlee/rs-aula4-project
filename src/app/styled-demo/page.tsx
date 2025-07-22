'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { SCMainTemplate } from '../../components/templates/styled-components';
import { SCHeader } from '../../components/organisms/styled-components';
import { SCButton, SCInput, SCBadge, SCText } from '../../components/atoms/styled-components';
import { SCSearchBar, SCInputField } from '../../components/molecules/styled-components';
import { SCLoginForm } from '../../components/organisms/styled-components';
import { useTheme } from '../../lib/theme-registry';

const DemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`;

const Section = styled.section`
  margin-bottom: 48px;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #007bff;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  align-items: start;
`;

const ComponentDemo = styled.div`
  padding: 20px;
  border: 2px dashed #e9ecef;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ComponentLabel = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #495057;
  margin-bottom: 8px;
`;

export default function StyledDemoPage() {
  const { toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  const handleLogin = (data: { email: string; password: string }) => {
    alert(`Login com: ${data.email}`);
  };

  const handleSearch = (value: string) => {
    alert(`Pesquisar: ${value}`);
  };

  return (
    <SCMainTemplate header={<SCHeader onThemeToggle={toggleTheme} />}>
      <DemoContainer>
        <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '32px', textAlign: 'center' }}>
          Demo: Styled Components
        </h1>

        {/* ATOMS */}
        <Section>
          <SectionTitle>⚛️ Atoms</SectionTitle>
          <ComponentGrid>
            <ComponentDemo>
              <ComponentLabel>Buttons</ComponentLabel>
              <SCButton variant="primary">Primary</SCButton>
              <SCButton variant="secondary">Secondary</SCButton>
              <SCButton variant="primary" size="sm">Small</SCButton>
              <SCButton variant="primary" disabled>Disabled</SCButton>
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>Inputs</ComponentLabel>
              <SCInput placeholder="Digite algo..." />
              <SCInput placeholder="Com erro..." error />
              <SCInput placeholder="Disabled" disabled />
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>Badges</ComponentLabel>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <SCBadge count={5} />
                <SCBadge count={10} variant="success" />
                <SCBadge count={999} max={99} variant="error" />
                <SCBadge count={3} variant="warning" />
              </div>
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>Text</ComponentLabel>
              <SCText variant="heading">Heading Text</SCText>
              <SCText variant="body">Body text normal</SCText>
              <SCText variant="caption" color="secondary">Caption text</SCText>
              <SCText variant="body" color="error">Error text</SCText>
            </ComponentDemo>
          </ComponentGrid>
        </Section>

        {/* MOLECULES */}
        <Section>
          <SectionTitle>🧬 Molecules</SectionTitle>
          <ComponentGrid>
            <ComponentDemo>
              <ComponentLabel>SearchBar</ComponentLabel>
              <SCSearchBar
                placeholder="Buscar produtos..."
                value={searchValue}
                onChange={setSearchValue}
                onSearch={handleSearch}
              />
            </ComponentDemo>

            <ComponentDemo>
              <ComponentLabel>InputField</ComponentLabel>
              <SCInputField
                label="Nome completo"
                placeholder="Digite seu nome"
                required
              />
              <SCInputField
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
            <SCLoginForm onSubmit={handleLogin} />
          </div>
        </Section>
      </DemoContainer>
    </SCMainTemplate>
  );
}
