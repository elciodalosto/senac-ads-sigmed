# senac-ads-sigmed
Sistema de Gestão de Medicamentos, Pacientes e Efeitos Colaterais - Projeto Integrador

## Autores

- Aldrin Faustino Pereira      - Desenvolvedor
- Elcio Augusto Dalosto        - Desenvolvedor
- Giulyano Felipe Santos Silva - Desenvolvedor
- Leonardo Chinelato Coelho    - Desenvolvedor
- Murilo Ruiz Pedro - Função   - Desenvolvedor



# Estrutura do projeto

my-monorepo/ # Nome do diretório do projeto (senac-ads-sigmed)
├── apps/                     # Main applications
│   ├── mobile/               # React Native / Expo frontend
│   │   ├── App.js            # Main app entry point
│   │   ├── app.json          # Expo configuration
│   │   ├── ...               # Other frontend code, components, screens, etc.
│   │   ├── package.json      # Frontend dependencies
│   │   ├── babel.config.js   # frontend babel configuration
│   │   └── tsconfig.json     # Typescript configuration
│   └── server/               # Node.js / Express backend
│       ├── src/              # Backend source code
│       │   ├── app.ts        # Main backend entry point
│       │   ├── routes/       # API routes
│       │   ├── controllers/  # Logic of each route
│       │   ├── models/       # Business logic
│       │   └── ...           # Other backend code
│       ├── prisma/           # Prisma schema and migrations
│       │   └── schema.prisma # Prisma schema file
│       ├── package.json      # Backend dependencies
│       └── tsconfig.json     # Backend typescript configuration
├── packages/                 # Shared packages / libraries
│   └── ui/                   # Shared UI components (optional)
│   │   ├── Button.tsx        # Example shared component
│   │   └── ...               # Other shared UI components
│   └── utils/                # Shared utils
│       └── helper.ts         # Example shared util
├── .gitignore                # Git ignore file
├── package.json              # Root dependencies and scripts
└── README.md                 # Project documentation
