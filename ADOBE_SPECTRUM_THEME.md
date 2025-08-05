# Tema Adobe React Spectrum para MUI

Este projeto implementa um tema completo do Material-UI (MUI) inspirado fielmente no design system do Adobe React Spectrum, proporcionando uma experiência visual uniforme, sofisticada e minimalista.

## 🎨 Características do Design

### Cores
- **Paleta Principal**: Baseada nas cores oficiais do Adobe React Spectrum
- **Azul Primário**: `#03A9F4` - Cor principal para ações e elementos de destaque
- **Cinzas**: Escala completa de cinzas para textos, bordas e fundos
- **Cores Semânticas**: Verde (sucesso), Vermelho (erro), Laranja (aviso), Roxo (info)

### Tipografia
- **Fonte Principal**: Source Sans Pro (fallback para Adobe Clean)
- **Hierarquia**: Sistema de tamanhos bem definido (h1-h6, body1, body2, etc.)
- **Pesos**: 300 (light), 400 (regular), 500 (medium), 700 (bold)
- **Espaçamento**: Line-height otimizado para legibilidade

### Espaçamento
- **Sistema Base**: 8px como unidade fundamental
- **Consistência**: Todos os espaçamentos seguem múltiplos de 8px
- **Responsividade**: Adaptação automática para diferentes tamanhos de tela

### Bordas e Sombras
- **Border Radius**: 4px (small), 6px (medium), 8px (large), 12px (xlarge)
- **Sombras**: Sistema de elevação com 24 níveis de profundidade
- **Transições**: Curvas de animação suaves (cubic-bezier)

## 🧩 Componentes Customizados

### Botões
- Bordas arredondadas (6px)
- Estados hover, active e focus bem definidos
- Transições suaves
- Sem text-transform (mantém case original)

### Cards
- Sombras sutis com elevação
- Bordas arredondadas (8px)
- Efeito hover com elevação aumentada
- Bordas cinzas claras

### Campos de Texto
- Estados focus com borda azul
- Placeholder com cor cinza média
- Transições suaves nos estados

### Tabelas
- Cabeçalhos com fundo cinza claro
- Bordas sutis entre células
- Tipografia otimizada para dados

### Diálogos
- Bordas arredondadas (12px)
- Sombras profundas
- Espaçamento interno consistente

### Chips
- Bordas arredondadas (6px)
- Estados hover e selected
- Cores semânticas para diferentes tipos

### Switches e Checkboxes
- Cores consistentes com o tema
- Estados disabled bem definidos
- Tamanhos otimizados

## 📱 Responsividade

O tema é totalmente responsivo e inclui:
- Breakpoints otimizados para mobile, tablet e desktop
- Componentes que se adaptam automaticamente
- Drawer responsivo para navegação mobile
- Grid system flexível

## ♿ Acessibilidade

- **Contraste**: Cores com contraste adequado (WCAG AA)
- **Focus**: Indicadores visuais claros para navegação por teclado
- **Tipografia**: Tamanhos de fonte legíveis
- **Semântica**: Estrutura HTML semântica

## 🎯 Página de Dashboard

A página de dashboard demonstra todas as características do tema:

### Seções Principais
1. **Métricas**: Cards com indicadores visuais e tendências
2. **Projetos**: Tabela com progresso e ações
3. **Atividades**: Lista de atividades recentes
4. **Configurações**: Formulários e controles

### Componentes Utilizados
- AppBar com navegação
- Drawer lateral responsivo
- Cards com métricas
- Tabelas com dados
- Formulários com validação
- Alertas e notificações
- Tabs para organização
- Accordion para configurações avançadas

## 🚀 Como Usar

1. **Importar o tema**:
```typescript
import theme from '@core/theme/theme';
```

2. **Aplicar no ThemeProvider**:
```typescript
<ThemeProvider theme={theme}>
  <CssBaseline />
  {children}
</ThemeProvider>
```

3. **Usar componentes MUI**:
```typescript
import { Button, Card, TextField } from '@mui/material';

// Todos os componentes já estão estilizados automaticamente
<Button variant="contained">Botão Primário</Button>
<Card>Conteúdo do Card</Card>
<TextField label="Campo de texto" />
```

## 🎨 Personalização

O tema é facilmente personalizável através do arquivo `src/@core/theme/theme.ts`:

- **Cores**: Modificar a paleta `spectrumColors`
- **Tipografia**: Ajustar `typography`
- **Espaçamento**: Alterar `spacing`
- **Componentes**: Customizar `components`

## 📋 Checklist de Implementação

- [x] Paleta de cores Adobe React Spectrum
- [x] Tipografia Source Sans Pro
- [x] Sistema de espaçamento 8px
- [x] Border radius consistente
- [x] Sistema de sombras
- [x] Componentes MUI customizados
- [x] Responsividade
- [x] Acessibilidade
- [x] Página de demonstração
- [x] Documentação completa

## 🔗 Referências

- [Adobe React Spectrum Design System](https://spectrum.adobe.com/)
- [Material-UI Documentation](https://mui.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Resultado**: Um tema MUI completamente personalizado que reflete fielmente o design visual do Adobe React Spectrum, proporcionando uma experiência de usuário moderna, consistente e profissional. 