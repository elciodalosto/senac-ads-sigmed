# SENAC ADS: PROJETO SIGMED

- SENAC SP EAD
- Curso: Análise e Desenvolvimento de Sistemas
- Disciplina: Projeto Integrador
- Projeto mobile de Sistema de Gestão de Medicamentos, Pacientes e Efeitos Colaterais

# Autores/Desenvolvedores

- Aldrin Faustino Pereira
- Elcio Augusto Dalosto
- Giulyano Felipe Santos Silva
- Leonardo Chinelato Coelho
- Murilo Ruiz Pedro

# Estrutura do projeto

```
senac-ads-sigmed/
├── back-end/
│   ├── node_modules/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   └── routes/
│   ├── .env
│   ├── docker-compose.yml
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── front-end/
│   ├── api/
│   ├── app/
│   │   └── pages/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── components/
│   │   ├── tests/
│   │   └── ui/
│   ├── constants/
│   ├── hooks/
│   ├── node_modules/
│   ├── app.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
└── README.md # global
```

# Como rodar o projeto?

---

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/) (>= 18)
- [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## 📦 Configuração do Back-end

A API foi construída utilizando **Node.js + Express + Prisma**.

### 1. Acessar a pasta

```bash
cd back-end
```

## 2. Configurar variáveis de ambiente

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/sigmed"
PORT=3000
```

## 3. Subir os containers do banco

```bash
docker-compose up -d
```

## 4. Instalar dependências

```bash
npm install
```

## 5. Rodar migrations do Prisma (para criar as tabelas no banco)

```bash
npx prisma migrate dev
```

## 6. Rodar servidor

```
npm run dev
```

A API estará disponível em: http://localhost:3000

## 💻 Configuração do Front-end

A interface foi construída em React/Next.js (ou Expo, se for mobile).

## 1. Acessar a pasta

```
cd front-end
```

## 2. Instalar as dependências

```
npm install
```

## 3. Rodar o projeto

```
npm run dev
```

## Acesse o aplicativo (Expo)

```
npx expo start
```
