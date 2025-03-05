# 📱 SIGMED - FRONT-END

Bem-vindo ao projeto **SIGMED**! Este é um aplicativo mobile desenvolvido em React Native para a disciplina de projeto integrador de desenvolvimento de sistemas orientado a dispositivos móveis e baseados na web.

## 🚀 Tecnologias

- React Native
- Expo
- TypeScript

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: 22.x ou superior)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) ou [npm](https://www.npmjs.com/get-npm)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (caso utilize Expo)
- Emulador Android ou Xcode (para iOS) configurado
- Baixe o EXPO no seu celular

## 🤖 Passo a passo para rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/elciodalosto/senac-ads-sigmed
```

2. **Entre na pasta do projeto:**

```bash
cd senac-ads-sigmed
```

3. **Instale as dependências:**

```bash
yarn install ou npm install
```

5. **Adicione seu IP na API:**

Entre na pasta api

```bash
cd api
```

Adicione seu IP e mantenha o dispositivo móvel conectado na mesma rede do seu computador

# 🌐 Como Ver o Seu IP?

## 🖥️ Windows

1. Abra o **CMD**.
2. Digite o comando:

   ```bash
   ipconfig
   ```

3. Procure por algo como:

```bash
Endereço IPv4. . . . . . . . . . . . . : 192.168.x.x
```

## 🖥️ Linux

1. Abra o **terminal**.
2. Digite o comando:

   ```bash
   ifconfig
   ```

3. Procure por algo como:

```bash
inet 192.168.x.x
```

4. Adicione seu IP no axios base URL

```bash
export const api_sigmed = Axios.create({
  baseURL: `http://127.20.10.02:9090`
})
```

formato IP:PORTA_DA_API

Obs: 🚨 A porta deve ser igual a da api

5. **Rode o projeto:**

```bash
yarn start ou npm start
```

6. Escanei o QR Code que for exibido no terminal com seu celular
