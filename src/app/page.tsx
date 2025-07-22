'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { SCButton } from '../components/atoms/styled-components';
import { SCHeader } from '../components/organisms/styled-components';
import { SCMainTemplate } from '../components/templates/styled-components';
import { useTheme } from '../lib/theme-registry';

const HomeContainer = styled.div`
  text-align: center;
  padding: 48px 24px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 48px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #6c757d;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #212529;
`;

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
  color: #6c757d;
`;

export default function HomePage() {
  const { toggleTheme } = useTheme();

  return (
    <SCMainTemplate header={<SCHeader onThemeToggle={toggleTheme} />}>
      <HomeContainer>
        <Title>Atomic Design</Title>
        <Description>
          Projeto didático que demonstra como migrar componentes de{' '}
          <strong>styled-components</strong> para{' '}
          <strong>Material UI v6</strong> mantendo-os visualmente idênticos
          usando a metodologia Atomic Design.
        </Description>

        <CardsGrid>
          <Card>
            <CardTitle>🧱 Styled Components</CardTitle>
            <CardDescription>
              Veja todos os componentes implementados com styled-components,
              desde atoms até templates completos.
            </CardDescription>
            <Link href="/styled-demo">
              <SCButton variant="primary" size="lg">
                Ver Demo SC
              </SCButton>
            </Link>
          </Card>

          <Card>
            <CardTitle>🎨 Material UI</CardTitle>
            <CardDescription>
              Explore os mesmos componentes recriados em MUI, mantendo
              exatamente a mesma aparência e API.
            </CardDescription>
            <Link href="/mui-demo">
              <SCButton variant="primary" size="lg">
                Ver Demo MUI
              </SCButton>
            </Link>
          </Card>

          <Card>
            <CardTitle>⚖️ Comparação</CardTitle>
            <CardDescription>
              Compare lado a lado os componentes para entender as diferenças e
              semelhanças na implementação.
            </CardDescription>
            <Link href="/comparison">
              <SCButton variant="secondary" size="lg">
                Comparar
              </SCButton>
            </Link>
          </Card>
        </CardsGrid>
      </HomeContainer>
    </SCMainTemplate>
  );
}
