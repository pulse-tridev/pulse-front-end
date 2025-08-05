# Adobe React Spectrum Theme - Estrutura Modular

Este diretório contém o tema personalizado do MUI inspirado no Adobe React Spectrum, organizado em módulos separados para melhor manutenibilidade e escalabilidade.

## 📁 Estrutura de Arquivos

```
src/@core/theme/
├── index.ts          # Exportações principais
├── theme.ts          # Arquivo principal do tema
├── palette.ts        # Cores e paleta
├── typography.ts     # Tipografia
├── spacing.ts        # Espaçamentos, border-radius e sombras
├── components.ts     # Overrides dos componentes MUI
└── README.md         # Esta documentação
```

## 🎨 Módulos

### `palette.ts`
- **Cores do Adobe React Spectrum**: Definição completa da paleta de cores
- **Função `createPalette()`**: Cria a configuração de paleta para o MUI
- **Exporta `spectrumColors`**: Objeto com todas as cores disponíveis

### `typography.ts`
- **Sistema de Tipografia**: Baseado no Adobe React Spectrum
- **Função `createTypography()`**: Cria a configuração de tipografia para o MUI
- **Fontes**: Adobe Clean (fallback para Source Sans Pro)

### `spacing.ts`
- **Sistema de Espaçamento**: Base unit de 8px
- **Border Radius**: Valores padronizados (none, small, medium, large, xlarge)
- **Sombras**: Array com 25 níveis de elevação

### `components.ts`
- **Overrides dos Componentes**: Customizações específicas para cada componente MUI
- **Estilos Adobe React Spectrum**: Aplicados a todos os componentes padrão
- **Responsividade**: Incluída automaticamente

### `theme.ts`
- **Arquivo Principal**: Combina todos os módulos
- **Configuração Final**: Cria o tema completo do MUI

### `index.ts`
- **Exportações Centralizadas**: Facilita importações em outros arquivos
- **API Pública**: Expõe apenas o necessário

## 🚀 Como Usar

### Importação Básica
```typescript
import { theme } from "@core/theme";
```

### Importação de Módulos Específicos
```typescript
import { spectrumColors } from "@core/theme";
import { spacing, borderRadius } from "@core/theme";
import { createPalette } from "@core/theme";
```

### Uso em Componentes
```typescript
import { useTheme } from "@mui/material/styles";
import { spectrumColors } from "@core/theme";

const MyComponent = () => {
  const theme = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: spectrumColors.blue[50],
      padding: theme.spacing(2)
    }}>
      Conteúdo
    </div>
  );
};
```

## 🎯 Benefícios da Estrutura Modular

1. **Manutenibilidade**: Cada aspecto do tema está em seu próprio arquivo
2. **Escalabilidade**: Fácil adicionar novos componentes ou modificar existentes
3. **Reutilização**: Módulos podem ser importados independentemente
4. **Organização**: Código mais limpo e fácil de navegar
5. **Testabilidade**: Cada módulo pode ser testado isoladamente
6. **Colaboração**: Múltiplos desenvolvedores podem trabalhar em módulos diferentes

## 🔧 Customização

### Adicionar Novas Cores
```typescript
// Em palette.ts
export const spectrumColors = {
  // ... cores existentes
  custom: {
    50: "#f0f9ff",
    500: "#3b82f6",
    900: "#1e3a8a",
  },
};
```

### Adicionar Novo Componente
```typescript
// Em components.ts
export const createComponents = () => ({
  // ... componentes existentes
  MuiCustomComponent: {
    styleOverrides: {
      root: {
        // estilos personalizados
      },
    },
  },
});
```

### Modificar Tipografia
```typescript
// Em typography.ts
export const createTypography = () => ({
  // ... configurações existentes
  customVariant: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1.4,
  },
});
```

## 📋 Convenções

- **Nomenclatura**: Use camelCase para funções e PascalCase para tipos
- **Comentários**: Documente funções complexas e decisões de design
- **Imports**: Organize imports por tipo (React, MUI, locais)
- **Exports**: Use named exports para melhor tree-shaking
- **Tipos**: Defina tipos TypeScript quando necessário

## 🔄 Atualizações

Para atualizar o tema:

1. **Cores**: Modifique `palette.ts`
2. **Tipografia**: Modifique `typography.ts`
3. **Componentes**: Modifique `components.ts`
4. **Espaçamentos**: Modifique `spacing.ts`
5. **Tema Principal**: Modifique `theme.ts` se necessário

O tema será automaticamente aplicado a todos os componentes MUI na aplicação. 