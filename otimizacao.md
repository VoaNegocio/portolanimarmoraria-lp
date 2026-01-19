# 🧠 KNOWLEDGE BASE: Visual, Performance & SEO
> 🚀 **SUPER BANCO DE DADOS DE OTIMIZAÇÃO**
> Este arquivo é a fonte central de verdade para a VOA Negócio Digital.
> **INSTRUÇÃO PARA A I.A.:** Antes de iniciar qualquer tarefa de código, CONSULTE este arquivo para aprender com erros passados. Ao finalizar uma tarefa, ALIMENTE este arquivo com novos aprendizados.
>
> **Escopo:** Landing Pages, Sites Institucionais e Softwares (SaaS).
> **Meta:** Acumular inteligência coletiva para nunca cometer o mesmo erro duas vezes e garantir excelência técnica (Performance 90+, Acessibilidade, SEO e UX Premium) em todos os projetos.

---

## 🤖 Protocolo de Atualização (Instrução para IA)
Quando o usuário solicitar "adicione aqui", siga este padrão rigorosamente:
1.  **Identifique o Projeto e Ciclo**: Em qual projeto estamos trabalhando? (Ex: Portolani, DRC Pro). Qual feature ou otimização foi realizada?
2.  **Encontre a Seção do Projeto**: Adicione o log apenas dentro do bloco do projeto correspondente. Se não existir, crie um novo `## 🏗️ Projeto: [Nome]`.
3.  **Liste os Erros (❌)**: O que estava quebrado, lento ou errado antes? Seja técnico.
4.  **Liste os Acertos (✅)**: Qual foi a solução técnica exata? (Ex: tags usadas, scripts, comandos).
5.  **Regras de Ouro (💡)**: Transforme a solução em uma regra universal para o futuro.
6.  **Adicione ao Final do Projeto**: Insira o novo bloco antes da próxima seção de projeto ou do final.

---

## 🛠️ Guia de Comandos (Cheat Sheet)

### 1. Otimização de Imagens (WebP)
Converta imagens pesadas (PNG/JPG) para WebP de nova geração.
```bash
# Converter imagem única mantendo qualidade (q=75)
ffmpeg -i input.png -quality 75 output.webp

# Converter todas as PNGs de uma pasta (loop)
for file in *.png; do ffmpeg -i "$file" -quality 75 "${file%.png}.webp"; done
```

### 2. Compressão de Vídeo (Otimizado para Web)
Reduz drasticamente o tamanho sem perder qualidade visual perceptível.
```bash
# Codec h264, CRF 28 (equilíbrio ideal tamanho/qualidade), preset faster
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset faster -acodec aac -b:a 128k output_opt.mp4
```

### 3. Teste de Performance (Lighthouse CLI)
Rode sempre contra o build de **produção**, nunca em dev.
```bash
# 1. Buildar o projeto
npm run build
# 2. Servir o preview
npm run preview
# 3. Rodar auditoria (em outro terminal)
npx lighthouse http://localhost:4173 --output json --output-path ./report.json --device=mobile --chrome-flags="--headless"
```

---

## 📂 Registro de Aprendizados (Log por Projeto)

### 🏗️ Projeto: DRC Pro (Engenharia)

#### 📅 Ciclo: Otimização Mobile DRC Pro (Jan 2026)
*LCP, Scripts de Terceiros e WebP Init*
... (Conteúdo mantido implicitamente, mas reorganizado. Vou reescrever os blocos para garantir a ordem correta).
<REPLACING_WITH_FULL_STRUCTURE_BELOW>

### 🏗️ Projeto: DRC Pro (Engenharia)

#### 📅 Ciclo: Otimização Mobile (Jan 2026 - 1.0)
*Foco: LCP, WebP e Scripts*

**❌ O que Erramos / Problemas Encontrados**
1.  **Imagem Hero Gigante**: PNG de 750KB no LCP causou 24s de load em 3G.
2.  **Scripts (GTM/Clarity)**: Travavam a thread principal (TBT alto) ao carregar imediatamente.
3.  **Fontes Bloqueantes**: Google Fonts padrão gerava 854ms de tela branca.

**✅ O que Acertamos / Soluções Aplicadas**
1.  **Hero WebP**: Conversão reduziu para 40KB (95% menos).
2.  **Lazy Load GTM**: Adiado para 3.5s ou interação.
3.  **Fonts Async**: Hack `media="print"` zerou o bloqueio.

**💡 O APRENDIZADO**
*   **Regra do LCP**: Elemento principal < 100KB e com `preload`.
*   **Regra dos Scripts**: Adie GTM/Analytics para >3s se o TBT estiver alto.

---

#### 📅 Ciclo: Refinamento Mobile & Imagens (Jan 2026 - 1.4)
*Foco: Imagens Responsivas e Logo*

**❌ O que Erramos**
1.  **Imagens Gigantes Mobile**: Hero desktop (1920px) carregando no celular.
2.  **Logo Pesado**: Logo do header apenas redimensionado via CSS.
3.  **Preload Único**: Baixava imagem desktop no mobile.

**✅ O que Acertamos**
1.  **Tag Picture**: `<picture>` servindo imagem 800px para mobile.
2.  **Preload Media**: `link rel="preload" media="(max-width: 768px)"` para baixar o correto.
3.  **Logos Físicos**: Criado `logodrcpro-small.png` com tamanho real de exibição.

**💡 O APRENDIZADO**
*   **Regra do Picture**: Use `<picture>` para trocar o arquivo físico do LCP entre dispositivos.
*   **Regra da Física**: Se exibe em 300px, o arquivo deve ter ~300px (ou 2x para retina), nunca 1000px.

---

#### 📅 Ciclo: Rumo ao Score 100 (Jan 2026 - 1.5)
*Foco: Prioridade de Fetch e Logos Footer*

**❌ O que Erramos**
1.  **Gordura Mobile**: Hero mobile ainda tinha 1024px (exibe 600px).
2.  **Prioridade LCP**: Navegador não priorizava o download da imagem Hero.
3.  **GTM Colidindo**: 3.5s ainda era cedo para redes lentas.

**✅ O que Acertamos**
1.  **Fetch Priority**: `fetchpriority="high"` na tag `<img>` do LCP.
2.  **GTM 5s**: Aumentado delay para 5 segundos.
3.  **Logo Footer**: Criado versão específica de 150px.

**💡 O APRENDIZADO**
*   **Regra do Fetch**: Sempre use `fetchpriority="high"` na imagem LCP.
*   **Regra do GTM**: Empurre para 5s se o site carrega visualmente rápido.

---

### 🏗️ Projeto: Portolani Marmoraria

#### 📅 Ciclo: Ajuste Fino & Core Web Vitals (Jan 2026 - 1.6)
*Foco: Animações, Unsplash e TBT*

**❌ O que Erramos**
1.  **Reflow em Animações**: Botão WhatsApp usando `box-shadow` causava lag.
2.  **Imagens Unsplash**: URL crua baixava imagem de 2600px (`HowItWorks`).
3.  **Layout Shifts**: Logos sem `width/height` explícitos.

**✅ O que Acertamos**
1.  **GPU Animation**: Uso de `transform/opacity` no pseudo-elemento do botão.
2.  **Unsplash Params**: Adicionado `&w=800` na URL.
3.  **CLS Fix**: Adicionado atributos de dimensão em todas as tags `<img>`.

**💡 O APRENDIZADO**
*   **Regra da Animação**: Nunca anime propriedades de layout (width, margin, box-shadow). Use `transform`.
*   **Regra do Unsplash**: Sempre parametrize a URL (`w=800`).

---

#### 📅 Ciclo: Acessibilidade & Polimento (Jan 2026 - 1.7/1.8)
*Foco: Acessibilidade, Contraste e Compressão Ultra*

**❌ O que Erramos**
1.  **Botões Vazios**: Ícones sem `aria-label`.
2.  **Toque Mobile**: Dots do carrossel muito pequenos.
3.  **Compressão Conservadora**: Imagens WebP qualidade 80 ainda acusavam "Oportunidade de economia".

**✅ O que Acertamos**
1.  **A11y**: Adicionado `aria-label` e padding touch invisível.
2.  **Ultra Compressão**: `hero3-mobile` (q=55, 30KB) e `areagourmet` (q=40, 90KB).
3.  **Contraste**: Ajuste de cores no footer e links.

**💡 O APRENDIZADO**
*   **Regra do Dedo Gordo**: Mínimo 44px de área de toque (use padding se necessário).
*   **Regra do LCP Mobile**: Qualidade 40-55 em WebP é aceitável para fundos mobile se garantir performance.
*   **Regra do Botão**: Ícone sozinho exige `aria-label`.

---

#### 📅 Ciclo: Polimento Final & Resultados (Jan 2026 - 1.9)
*Foco: Eliminar warnings residuais (Nuclear Compression)*

**❌ O que Erramos**
1.  **Imagens Resistentes**: Mesmo com q=40, `areagourmet.webp` ainda acusava "economia de 18KB".
2.  **JS Unused Code**: Aviso padrão do bundle (normal para SPA), mas mitigável.

**✅ O que Acertamos**
1.  **Compressão Nuclear**: Reduzimos `areagourmet` para 900px e q=30 (Result: ~65KB). Como a imagem tem overlay escuro (`bg-black/20`), a perda de qualidade é imperceptível.
2.  **Resultados Finais**:
    *   🚀 **Performance**: 93
    *   ♿ **Acessibilidade**: 95
    *   🛡️ **Práticas**: 100
    *   🔍 **SEO**: 91

**💡 O APRENDIZADO**
*   **Regra da Sobreposição (Overlay)**: Se a imagem de fundo tem uma camada escura por cima, você pode reduzir a qualidade para **30%** sem medo. O olho humano não percebe os artefatos na sombra.
*   **Regra do Limite SPA**: Em Single Page Apps, o teto de performance mobile é ~90-95 devido ao tempo de boot do JS. Não se frustre tentando chegar a 100 sem SSR.

---

### [Próximo Cíclo...]
*Adicione novos aprendizados aqui, respeitando a seção do projeto.*
