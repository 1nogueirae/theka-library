# Theka Library
> [DESCRIÇÃO SIMPLES]

## 📋 Sobre o Projeto

[descrição detalhada do projeto]

## 🚀 Tecnologias Utilizadas

### Core

- **React** - Biblioteca para construir a interface
- **TypeScript (TSX)** - Linguagem de Programação
- **CSS Modules** - Estilos isolados por componente, com variáveis globais do Style Guide em `style.css`

### Utilitários

- **Vite** - Servidor de desenvolvimento e build
- **ESLint** - Verificação e padronização do código
- **Husky** - Git hooks versionados no projeto (validação das mensagens de commit)

## ▶️ Como Rodar o Projeto

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento
npm run build   # checa os tipos (tsc) e gera a pasta dist/
npm run preview # visualiza o build
npm run lint    # verifica o código com ESLint
```

> O `npm install` também configura o Husky automaticamente (script `prepare`), ativando o hook de commits.

## 📝 Padrão de Commits

Os commits seguem o [Conventional Commits](https://www.conventionalcommits.org/pt-br/). O hook `.husky/commit-msg` bloqueia mensagens fora do formato:

```
<tipo>(<escopo opcional>): <descrição>
```

Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`, `revert`.

Exemplos:

```bash
git commit -m "feat(catalogo): adicionar listagem de livros"
git commit -m "fix: corrigir alinhamento do header"
git commit -m "docs(readme): atualizar instruções de instalação"
```

## 📁 Estrutura do Projeto

```
theka-library
├── .husky/                # Git hooks do projeto (commit-msg)
├── node_modules/          # Dependências instaladas pelo npm
├── src/                   # Código-fonte da aplicação
│   ├── assets/            # Arquivos de mídia
│   │   ├── icons/         # Ícones em SVG
│   │   └── images/        # Imagens (logos, ilustrações, fotos)
│   ├── components/        # Componentes reutilizáveis (botões, cards, navbar)
│   ├── hooks/             # Hooks personalizados (useAuth, useLivros)
│   ├── pages/             # Páginas (telas) do site
│   ├── services/          # Comunicação com o back-end (fetch/axios)
│   ├── App.tsx            # Componente principal da aplicação
│   ├── main.tsx           # Ponto de entrada do React
│   └── style.css          # Estilos globais (variáveis do Style Guide)
├── index.html             # Página HTML base (contém a div #root e carrega as fontes)
├── eslint.config.js       # Configuração do ESLint
├── tsconfig.json          # Configuração base do TypeScript (referencia os dois abaixo)
├── tsconfig.app.json      # TypeScript do código da aplicação (src/)
├── tsconfig.node.json     # TypeScript dos arquivos de configuração (vite.config.ts)
├── vite.config.ts         # Configuração do Vite
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências e scripts
├── package-lock.json      # Versões exatas das dependências instaladas
└── README.md              # Documentação do projeto
```

Cada pasta de desenvolvimento tem um documento `.md` com o nome dela explicando para que serve e o que colocar ali (ex.: `src/components/components.md`).

## 👤 Desenvolvedor

- Emanuel Lucas Nogueira da Silva

© **EJECT**
