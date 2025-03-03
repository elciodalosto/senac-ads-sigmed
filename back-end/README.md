# 🏥 **SIGMED - SENAC**

Este projeto é um sistema para gerenciar a administração de medicamentos em ambientes hospitalares, facilitando a comunicação entre médicos, equipe de enfermagem e administradores de estoque.

---

## 📋 **Pré-requisitos**

- **Docker** e **Docker Compose** instalados.
- **Node.js** (recomendado: v18+) e **npm** ou **Yarn** instalados.
- **Prisma CLI**:
  ```bash
  npm install -g prisma
  ```

## 💻 **Passos para rodar o projeto**

- **1. Clone o repositório**:

  ```bash
  git clone https://github.com/seu-usuario/seu-repositorio.git

  cd seu-repositorio
  ```

- **2. Configure as variáveis de ambiente:**:

- Crie uma cópia do arquivo .env.example e renomeie para .env

- **3. Suba o MySQL com o Docker**:

  ```bash
  docker-compose up -d
  ```

- **4. Instale as dependências:**:

  ```bash
  npm install ou yarn install
  ```

- **5. Execute as migrações do Prisma:**:

  ```bash
  npm db:migrate ou yarn db:migrate
  ```

- **6.Crie as tabelas no banco com Prisma:**:

  ```bash
  npm db:push ou yarn db:push
  ```

- **7.Rode o comando seed para popular o banco:**:

  ```bash
  npm db:seed ou yarn db:seed
  ```

- **8.Inicie o servidor:**:

  ```bash
  npm run dev ou yarn run dev
  ```

## 🛠️ **Comandos úteis**

- **Abrir o Prisma Studio:**:
  Assim é possível visualizar as tabelas do banco e o conteúdo

  ```bash
  npm db:studio ou yarn db:studio
  ```

- **Verificar se o container está rodando:**:
  ```bash
  docker ps
  ```
- **Parar o container do banco:**:
  Se der erro ou quiser limpar as informações do banco
  ```bash
  docker-compose down -v
  ```

## 🤓 **Tecnologias utilizadas**

- Prisma
- MySQL
- Node.js
- Docker e Docker Compose
