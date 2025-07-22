# Atomic Design com Next.js 15 - Styled Components → Material UI

## 🎯 Objetivo
Este projeto demonstra como migrar componentes de **styled-components** para **Material UI v6** mantendo-os **visualmente idênticos**, usando a metodologia **Atomic Design**.

## 🚀 Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Executar em desenvolvimento
npm run dev

# 3. Abrir no navegador
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├─ app/                 # App Router Next.js 15
│  ├─ page.tsx          # Home
│  ├─ styled-demo/      # Demo styled-components
│  ├─ mui-demo/         # Demo Material UI  
│  └─ comparison/       # Comparação lado a lado
├─ components/
│  ├─ atoms/            # Button, Input, Badge, Text
│  ├─ molecules/        # SearchBar, InputField
│  ├─ organisms/        # Header, LoginForm
│  └─ templates/        # AuthTemplate, MainTemplate
├─ lib/                 # Registries SSR
├─ themes/              # Temas e estilos compartilhados
└─ types/               # Tipos TypeScript
```

## 🎨 Componentes Implementados

| Camada | Styled Components | Material UI |
|--------|------------------|-------------|
| **Atoms** | Button, Input, Badge, Text | ✅ Idênticos |
| **Molecules** | SearchBar, InputField | ✅ Idênticos |
| **Organisms** | Header, LoginForm | ✅ Idênticos |
| **Templates** | AuthTemplate, MainTemplate | ✅ Idênticos |

## 🔄 Roteiro da Aula

1. **Home** - Navegar pelo projeto
2. **Styled Demo** - Ver componentes styled-components
3. **MUI Demo** - Ver equivalentes Material UI
4. **Comparison** - Comparar lado a lado

## ⚡ Principais Features

- ✅ Next.js 15 com App Router
- ✅ TypeScript configurado
- ✅ Tema claro/escuro unificado
- ✅ SSR com styled-components
- ✅ Componentes visualmente idênticos
- ✅ APIs de props iguais para facilitar migração
