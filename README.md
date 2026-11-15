# Theka Library
> Front-end da Theka, uma biblioteca comunitária com acervo de livros, desenvolvido no desafio de front-end do Trainee EJECT.

🔗 **Deploy:** [theka-library-eight.vercel.app](https://theka-library-eight.vercel.app)

## 📋 Sobre o Projeto

A Theka é uma biblioteca comunitária. Este projeto é a aplicação web dela: o usuário cria a conta, entra e navega pelo acervo, podendo buscar, filtrar, cadastrar, editar e remover livros. Também há uma página institucional "Sobre nós".

Os dados vêm da API da Theka, consumida com Axios e autenticada por JWT.

### Funcionalidades

- **Autenticação**
  - Cadastro de usuário
  - Login com JWT (token de acesso e de refresh salvos no `localStorage`)
  - Renovação automática do token de acesso quando ele expira
  - Logout pelo ícone de usuário da Navbar, com confirmação
  - Telas de recuperação e redefinição de senha (apenas interface)
  - Acervo protegido: sem login, `/collection` redireciona para `/login`
- **Acervo**
  - Carrossel de novidades
  - Listagem paginada de livros
  - Busca por título
  - Filtro por gênero e editora, com a opção "Todos" para limpar cada filtro
  - Detalhes do livro em modal
  - Cadastro, edição e remoção de livros, com upload de capa
- **Sobre nós**
  - Página institucional estática (história, valores, equipe e tópicos)
- **Layout responsivo**, com menu recolhível na Navbar em telas pequenas
- **Página não encontrada** para rotas inexistentes

### Rotas

| Rota | Tela |
| --- | --- |
| `/login` | Login (a rota `/` redireciona para cá) |
| `/signup` | Cadastro |
| `/recoverpassword` | Recuperar senha |
| `/resetpassword` | Redefinir senha |
| `/collection` | Acervo (exige login) |
| `/about` | Sobre nós |
| qualquer outra | Página não encontrada |

## 🚀 Tecnologias Utilizadas

### Core

- **React** - Biblioteca para construir a interface
- **TypeScript (TSX)** - Linguagem de Programação
- **CSS Modules** - Estilos isolados por componente, com variáveis globais do Style Guide em `style.css`

### Bibliotecas

- **React Router** - Navegação entre as telas
- **Axios** - Requisições à API, com interceptors para o token JWT
- **React Hook Form** - Formulários e validação

### Utilitários

- **Vite** - Servidor de desenvolvimento e build
- **vite-plugin-svgr** - Importa SVGs como componentes React (`icone.svg?react`)
- **ESLint** - Verificação e padronização do código
- **Husky** - Git hooks versionados no projeto (validação das mensagens de commit)

## ▶️ Como Rodar o Projeto

Crie um arquivo `.env` na raiz com o endereço da API:

```bash
VITE_API_BASE_URL=https://thekapitrainee.pythonanywhere.com/
```

Depois:

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento
npm run build   # checa os tipos (tsc) e gera a pasta dist/
npm run preview # visualiza o build
npm run lint    # verifica o código com ESLint
```

> O `npm install` também configura o Husky automaticamente (script `prepare`), ativando o hook de commits.

## ☁️ Deploy

O projeto está publicado na [Vercel](https://vercel.com), ligado ao repositório do GitHub.

- **Framework:** Vite, com build `npm run build` e saída em `dist/`
- **Variável de ambiente:** `VITE_API_BASE_URL`, configurada no painel da Vercel. Como o Vite embute a variável no build, um redeploy é necessário depois de alterá-la.
- **Rotas do React Router:** o `vercel.json` redireciona todas as rotas para o `index.html`, para que acessar ou recarregar uma rota como `/collection` não resulte em 404.

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
│   ├── components/        # Componentes reutilizáveis (botões, inputs, modais)
│   │   ├── forms/         # Formulários (login, cadastro, livro)
│   │   └── structure/     # Blocos das páginas (navbar, acervo, filtros, footer)
│   ├── pages/             # Páginas (telas) e layouts base
│   ├── services/          # Comunicação com a API (axios)
│   ├── types/             # Tipos TypeScript dos dados da API
│   ├── utils/             # Funções auxiliares
│   ├── App.tsx            # Componente principal da aplicação
│   ├── main.tsx           # Ponto de entrada do React
│   └── style.css          # Estilos globais (variáveis do Style Guide)
├── .env                   # Endereço da API (não versionado)
├── index.html             # Página HTML base (contém a div #root e carrega as fontes)
├── eslint.config.js       # Configuração do ESLint
├── tsconfig.json          # Configuração base do TypeScript (referencia os dois abaixo)
├── tsconfig.app.json      # TypeScript do código da aplicação (src/)
├── tsconfig.node.json     # TypeScript dos arquivos de configuração (vite.config.ts)
├── vite.config.ts         # Configuração do Vite
├── vercel.json            # Configuração do deploy na Vercel (rewrite das rotas)
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências e scripts
├── package-lock.json      # Versões exatas das dependências instaladas
└── README.md              # Documentação do projeto
```

## 👤 Desenvolvedor

- Emanuel Lucas Nogueira da Silva

© **EJECT**
