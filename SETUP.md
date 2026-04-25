# Nuvance Odontologia - Setup & Customização

## 📋 Visão Geral

Landing page premium para a clínica Nuvance Odontologia, especializada em implantes dentários, facetas e estética dental.

**Stack:** React 19 + Tailwind CSS 4 + TypeScript + Wouter

---

## 🎨 Design System

### Paleta de Cores
- **Navy Blue (Primária):** `#001f3f` - Confiança e profissionalismo
- **Gold (Acentos):** `#d4af37` - Transformação e elegância
- **Branco (Fundo):** `#ffffff` - Limpeza e higiene
- **Light Gray (Secundário):** `#f8f9fa` - Seções alternadas

### Tipografia
- **Títulos:** Playfair Display (serif elegante)
- **Corpo:** Inter (sans-serif limpo)

---

## 📁 Estrutura de Arquivos

```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navegação
│   │   │   ├── Footer.tsx          # Rodapé
│   │   │   └── SectionWrapper.tsx  # Envoltório de seções
│   │   └── ui/
│   │       ├── NuvanceButton.tsx   # Botões (3 variantes)
│   │       └── NuvanceCard.tsx     # Cards reutilizáveis
│   ├── pages/
│   │   └── Home.tsx                # Landing page completa
│   ├── App.tsx                     # Router principal
│   └── index.css                   # Estilos globais + paleta
└── index.html
```

---

## 🖼️ Adicionando Assets

A landing page tem placeholders para imagens em 4 locais principais:

### 1. **Hero Section Background**
- **Localização:** `Home.tsx`, linha ~29
- **Tamanho recomendado:** 1200x700px
- **Descrição:** Clínica dentária moderna, profissional
- **Como adicionar:**
```tsx
backgroundImage: "url('SEU_URL_AQUI')"
```

### 2. **Seção Sobre - Imagem**
- **Localização:** `Home.tsx`, linha ~90
- **Tamanho recomendado:** 500x400px
- **Descrição:** Clínica / Profissionais
- **Como adicionar:** Substitua o placeholder `<div>` por:
```tsx
<img 
  src="SEU_URL_AQUI" 
  alt="Clínica Nuvance" 
  className="w-full h-full object-cover rounded-lg"
/>
```

### 3. **Casos de Sucesso - Antes/Depois**
- **Localização:** `Home.tsx`, linha ~280
- **Tamanho recomendado:** 400x300px cada
- **Descrição:** Antes e depois de transformações
- **Como adicionar:** Substitua os 3 placeholders por imagens reais

### 4. **Infraestrutura - Imagem**
- **Localização:** `Home.tsx`, linha ~340
- **Tamanho recomendado:** 500x400px
- **Descrição:** Interior da clínica / Equipamentos

---

## 🎯 Seções da Landing Page

1. **Header** - Navegação sticky com logo e menu mobile
2. **Hero** - Apresentação principal com CTAs
3. **Sobre** - Missão, valores e diferenciais
4. **Profissionais** - Dr. Thiago e Dra. Juliana
5. **Especialidades** - 4 serviços principais
6. **Casos de Sucesso** - Transformações (antes/depois)
7. **Infraestrutura** - Tecnologia e equipamentos
8. **Contato** - CTA e informações de contato
9. **Footer** - Links e dados de contato

---

## 🔧 Componentes Reutilizáveis

### SectionWrapper
Envoltório padrão para todas as seções.

```tsx
<SectionWrapper bgColor="white" id="sobre">
  {/* Conteúdo */}
</SectionWrapper>
```

**Props:**
- `bgColor`: "white" | "light-gray" | "navy" | "gold"
- `className`: Classes Tailwind adicionais
- `id`: ID da seção (para navegação)

### NuvanceButton
Botão com 3 variantes de estilo.

```tsx
<NuvanceButton variant="primary" size="lg">
  Agendar Consulta
</NuvanceButton>
```

**Variantes:**
- `primary`: Navy com texto branco (CTA principal)
- `secondary`: Gold com texto navy (CTA secundária)
- `outline`: Borda navy com fundo transparente

**Tamanhos:**
- `sm`: Pequeno
- `md`: Médio (padrão)
- `lg`: Grande

### NuvanceCard
Card reutilizável com hover effects.

```tsx
<NuvanceCard variant="elevated" hover>
  {/* Conteúdo */}
</NuvanceCard>
```

**Variantes:**
- `default`: Off-white com sombra sutil
- `elevated`: Branco com sombra pronunciada
- `bordered`: Borda navy com fundo branco

---

## 📱 Responsividade

O site é totalmente responsivo:
- **Mobile:** < 768px (1 coluna)
- **Tablet:** 768px - 1024px (2 colunas)
- **Desktop:** > 1024px (3-4 colunas)

---

## 🚀 Desenvolvimento

### Iniciar servidor local
```bash
npm run dev
```

### Build para produção
```bash
npm run build
```

### Verificar tipos TypeScript
```bash
npm run check
```

---

## 📞 Informações de Contato

- **Telefone:** (85) 3025-1414
- **WhatsApp:** (85) 99825-1414
- **Endereço:** Av. Godofredo Maciel, 4000 - Fortaleza, CE
- **Horário:** Seg-Sex 8h-18h | Sábado 8h-13h

---

## 🎨 Customizações Comuns

### Mudar cores
Edite `/client/src/index.css` nas variáveis CSS:
```css
--primary: #001f3f;      /* Navy */
--secondary: #d4af37;    /* Gold */
--background: #ffffff;   /* Branco */
```

### Adicionar nova seção
1. Crie um novo componente em `components/`
2. Importe em `Home.tsx`
3. Adicione entre as seções existentes
4. Use `SectionWrapper` como envoltório

### Modificar tipografia
Edite `index.css` nas regras `h1`, `h2`, `h3` ou altere as fontes no `index.html`

---

## ✅ Checklist de Finalização

- [ ] Adicionar imagens do hero
- [ ] Adicionar fotos dos profissionais
- [ ] Adicionar casos de sucesso (antes/depois)
- [ ] Adicionar imagem da infraestrutura
- [ ] Testar responsividade em mobile
- [ ] Testar links de navegação
- [ ] Configurar WhatsApp/Telefone reais
- [ ] Adicionar Google Analytics (opcional)
- [ ] Deploy em produção

---

## 📝 Notas

- Todos os componentes estão comentados com explicações
- Use `hover` prop em `NuvanceCard` para efeitos interativos
- Seções alternam entre `white` e `light-gray` para melhor visual
- Navegação é sticky e mobile-responsive
- Todos os CTAs levam para a seção de contato

---

**Desenvolvido com ❤️ para Nuvance Odontologia**
