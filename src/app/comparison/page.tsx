'use client';

import { useState } from 'react';
import styled from 'styled-components';
import {
  MUIBadge,
  MUIButton,
  MUIInput,
  MUIText,
} from '../../components/atoms/mui';
import {
  SCBadge,
  SCButton,
  SCInput,
  SCText,
} from '../../components/atoms/styled-components';
import { MUIInputField, MUISearchBar } from '../../components/molecules/mui';
import {
  SCInputField,
  SCSearchBar,
} from '../../components/molecules/styled-components';
import { MUILoginForm } from '../../components/organisms/mui';
import {
  SCHeader,
  SCLoginForm,
} from '../../components/organisms/styled-components';
import { SCMainTemplate } from '../../components/templates/styled-components';
import { useTheme } from '../../lib/theme-registry';

// Types for styled components

interface AlertBoxProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
}

interface ProgressBarProps {
  progress?: number;
}

const ComparisonContainer = styled.div`
  max-width: 1400px;
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
  text-align: center;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ComparisonSide = styled.div`
  padding: 16px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  background: #f8f9fa;
  min-height: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`;

const SideTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  color: #495057;
`;

const ComponentGroup = styled.div`
  margin-bottom: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #6c757d;
`;

const ComponentRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  flex: 1;
  align-items: stretch;
`;

const Note = styled.div`
  background: #e7f3ff;
  border: 1px solid #b8daff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  font-size: 14px;
  color: #0c5460;
`;

// Additional styled components
const CardComponent = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const AlertBox = styled.div<AlertBoxProps>`
  background: ${(props) =>
    props.variant === 'success'
      ? '#d4edda'
      : props.variant === 'warning'
      ? '#fff3cd'
      : props.variant === 'error'
      ? '#f8d7da'
      : '#d1ecf1'};
  border: 1px solid
    ${(props) =>
      props.variant === 'success'
        ? '#c3e6cb'
        : props.variant === 'warning'
        ? '#ffeeba'
        : props.variant === 'error'
        ? '#f5c6cb'
        : '#bee5eb'};
  color: ${(props) =>
    props.variant === 'success'
      ? '#155724'
      : props.variant === 'warning'
      ? '#856404'
      : props.variant === 'error'
      ? '#721c24'
      : '#0c5460'};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  font-weight: 500;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  background: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
  height: 8px;
  width: 100%;
  margin-bottom: 12px;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${(props) => props.progress || 0}%;
    background: linear-gradient(90deg, #007bff, #0056b3);
    border-radius: 20px;
    transition: width 0.3s ease;
  }
`;

export default function ComparisonPage() {
  const { toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    alert(`Pesquisar: ${value}`);
  };

  return (
    <SCMainTemplate header={<SCHeader onThemeToggle={toggleTheme} />}>
      <ComparisonContainer>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Comparação: Styled Components ↔ Material UI
        </h1>

        <Note>
          <strong>🎯 Objetivo:</strong> Os componentes abaixo são{' '}
          <strong>visualmente idênticos</strong> mas implementados com
          tecnologias diferentes. Compare o código-fonte para entender como
          migrar de styled-components para MUI mantendo a mesma aparência e API.
        </Note>

        {/* ATOMS COMPARISON */}
        <Section>
          <SectionTitle>⚛️ Atoms Comparison</SectionTitle>
          <ComparisonGrid>
            <ComparisonSide>
              <SideTitle>Styled Components</SideTitle>

              <ComponentGroup>
                <GroupTitle>Buttons</GroupTitle>
                <ComponentRow>
                  <SCButton variant="primary">Primary Button</SCButton>
                  <SCButton variant="secondary">Secondary Button</SCButton>
                  <SCButton variant="primary" size="sm">
                    Small Button
                  </SCButton>
                </ComponentRow>
              </ComponentGroup>

              <ComponentGroup>
                <GroupTitle>Inputs</GroupTitle>
                <ComponentRow>
                  <SCInput placeholder="Normal input..." />
                  <SCInput placeholder="Error state..." error />
                </ComponentRow>
              </ComponentGroup>

              <ComponentGroup>
                <GroupTitle>Badges & Text</GroupTitle>
                <ComponentRow>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <SCBadge count={5} />
                    <SCBadge count={10} variant="success" />
                    <SCBadge count={999} max={99} variant="error" />
                  </div>
                  <SCText variant="heading">Heading Text</SCText>
                  <SCText variant="body" color="secondary">
                    Secondary text
                  </SCText>
                </ComponentRow>
              </ComponentGroup>
            </ComparisonSide>

            <ComparisonSide>
              <SideTitle>Material UI</SideTitle>

              <ComponentGroup>
                <GroupTitle>Buttons</GroupTitle>
                <ComponentRow>
                  <MUIButton variant="primary">Primary Button</MUIButton>
                  <MUIButton variant="secondary">Secondary Button</MUIButton>
                  <MUIButton variant="primary" size="sm">
                    Small Button
                  </MUIButton>
                </ComponentRow>
              </ComponentGroup>

              <ComponentGroup>
                <GroupTitle>Inputs</GroupTitle>
                <ComponentRow>
                  <MUIInput placeholder="Normal input..." />
                  <MUIInput placeholder="Error state..." error />
                </ComponentRow>
              </ComponentGroup>

              <ComponentGroup>
                <GroupTitle>Badges & Text</GroupTitle>
                <ComponentRow>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <MUIBadge count={5} />
                    <MUIBadge count={10} variant="success" />
                    <MUIBadge count={999} max={99} variant="error" />
                  </div>
                  <MUIText variant="heading">Heading Text</MUIText>
                  <MUIText variant="body" color="secondary">
                    Secondary text
                  </MUIText>
                </ComponentRow>
              </ComponentGroup>
            </ComparisonSide>
          </ComparisonGrid>
        </Section>

        {/* MOLECULES COMPARISON */}
        <Section>
          <SectionTitle>🧬 Molecules Comparison</SectionTitle>
          <ComparisonGrid>
            <ComparisonSide>
              <SideTitle>Styled Components</SideTitle>

              <ComponentGroup>
                <GroupTitle>SearchBar</GroupTitle>
                <SCSearchBar
                  placeholder="Buscar produtos..."
                  value={searchValue}
                  onChange={setSearchValue}
                  onSearch={handleSearch}
                />
              </ComponentGroup>

              <ComponentGroup>
                <GroupTitle>InputField</GroupTitle>
                <ComponentRow>
                  <SCInputField
                    label="Nome completo"
                    placeholder="Digite seu nome"
                    required
                  />
                  <SCInputField
                    label="Email"
                    placeholder="seu@email.com"
                    error="Campo obrigatório"
                    required
                  />
                </ComponentRow>
              </ComponentGroup>
            </ComparisonSide>

            <ComparisonSide>
              <SideTitle>Material UI</SideTitle>

              <ComponentGroup>
                <GroupTitle>SearchBar</GroupTitle>
                <MUISearchBar
                  placeholder="Buscar produtos..."
                  value={searchValue}
                  onChange={setSearchValue}
                  onSearch={handleSearch}
                />
              </ComponentGroup>

              <ComponentGroup>
                <GroupTitle>InputField</GroupTitle>
                <ComponentRow>
                  <MUIInputField
                    label="Nome completo"
                    placeholder="Digite seu nome"
                    required
                  />
                  <MUIInputField
                    label="Email"
                    placeholder="seu@email.com"
                    error="Campo obrigatório"
                    required
                  />
                </ComponentRow>
              </ComponentGroup>
            </ComparisonSide>
          </ComparisonGrid>
        </Section>

        {/* ORGANISMS COMPARISON */}
        <Section>
          <SectionTitle>🧩 Organisms (Organismos)</SectionTitle>
          <ComparisonGrid>
            <ComparisonSide>
              <SideTitle>Styled Components</SideTitle>

              <ComponentGroup>
                <GroupTitle>Login Form</GroupTitle>
                <ComponentRow>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '20px',
                      minHeight: '400px',
                      alignItems: 'flex-start',
                      width: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                      <SCLoginForm
                        onSubmit={(data) => alert(`Login: ${data.email}`)}
                      />
                    </div>
                  </div>
                </ComponentRow>
              </ComponentGroup>
            </ComparisonSide>

            <ComparisonSide>
              <SideTitle>Material UI</SideTitle>

              <ComponentGroup>
                <GroupTitle>Login Form</GroupTitle>
                <ComponentRow>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '20px',
                      minHeight: '400px',
                      alignItems: 'flex-start',
                      width: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                      <MUILoginForm
                        onSubmit={(data) => alert(`Login: ${data.email}`)}
                      />
                    </div>
                  </div>
                </ComponentRow>
              </ComponentGroup>
            </ComparisonSide>
          </ComparisonGrid>
        </Section>

        {/* ADDITIONAL STYLED COMPONENTS */}
        <Section>
          <SectionTitle>🎨 Additional Styled Components</SectionTitle>

          {/* Card Component Comparison */}
          <div style={{ marginBottom: '32px' }}>
            <h4
              style={{
                marginBottom: '16px',
                color: '#007bff',
                fontSize: '18px',
                textAlign: 'center',
              }}
            >
              Card Component Comparison
            </h4>
            <ComparisonGrid>
              <ComparisonSide>
                <SideTitle>Styled Components</SideTitle>
                <CardComponent>
                  <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>
                    Styled Components Card
                  </h3>
                  <p
                    style={{
                      margin: '0 0 16px 0',
                      color: '#666',
                      lineHeight: '1.5',
                    }}
                  >
                    Este é um card feito com styled-components. Passe o mouse
                    sobre este card para ver a animação de hover.
                  </p>
                  <button
                    style={{
                      background: '#007bff',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    SC Action
                  </button>
                </CardComponent>
              </ComparisonSide>
            </ComparisonGrid>
          </div>

          <div style={{ display: 'grid', gap: '24px' }}>
            {/* Card Component */}
            <div>
              <h4
                style={{
                  marginBottom: '16px',
                  color: '#007bff',
                  fontSize: '18px',
                }}
              >
                Individual Card Examples
              </h4>
              <CardComponent>
                <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>
                  Card Title
                </h3>
                <p
                  style={{
                    margin: '0 0 16px 0',
                    color: '#666',
                    lineHeight: '1.5',
                  }}
                >
                  Este é um exemplo de card component com hover effects e
                  shadow. Passe o mouse sobre este card para ver a animação.
                </p>
                <button
                  style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Action Button
                </button>
              </CardComponent>
            </div>

            {/* Alert Box Component */}
            <div>
              <h4
                style={{
                  marginBottom: '16px',
                  color: '#007bff',
                  fontSize: '18px',
                }}
              >
                Alert Box Component
              </h4>
              <AlertBox variant="success">
                ✅ Success: Operation completed successfully!
              </AlertBox>
              <AlertBox variant="warning">
                ⚠️ Warning: Please check your input data.
              </AlertBox>
              <AlertBox variant="error">
                ❌ Error: Something went wrong. Please try again.
              </AlertBox>
              <AlertBox variant="info">
                ℹ️ Info: Here&apos;s some useful information for you.
              </AlertBox>
            </div>

            {/* Progress Bar Component */}
            <div>
              <h4
                style={{
                  marginBottom: '16px',
                  color: '#007bff',
                  fontSize: '18px',
                }}
              >
                Progress Bar Component
              </h4>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  25% Complete
                </span>
                <ProgressBar progress={25} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  60% Complete
                </span>
                <ProgressBar progress={60} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  85% Complete
                </span>
                <ProgressBar progress={85} />
              </div>
              <div>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  100% Complete
                </span>
                <ProgressBar progress={100} />
              </div>
            </div>
          </div>
        </Section>
      </ComparisonContainer>
    </SCMainTemplate>
  );
}
