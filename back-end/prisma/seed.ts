import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Usuários (profissionais de saúde)
  const medico = await prisma.user.create({
    data: {
      name: "Dr. João Silva",
      email: "dr.joao@email.com",
      password: "senha123",
      role: "MEDICO",
    },
  });

  const enfermeiro = await prisma.user.create({
    data: {
      name: "Enf. Maria Souza",
      email: "enf.maria@email.com",
      password: "senha123",
      role: "ENFERMEIRO",
    },
  });

  // Paciente
  const paciente = await prisma.patient.create({
    data: {
      name: "Carlos Oliveira",
      cpf: "635.163.910-73",
      birthDate: new Date("1990-05-10"),
      gender: "MASCULINO",
      medicalRecord: "MR-12345",
    },
  });

  // Medicamentos
  const medicamentos = await prisma.medication.createMany({
    data: [
      { name: "Paracetamol", description: "Analgésico e antipirético", dosageForm: "Comprimido", concentration: "500mg" },
      { name: "Ibuprofeno", description: "Anti-inflamatório", dosageForm: "Comprimido", concentration: "400mg" },
      { name: "Dipirona", description: "Analgésico e antitérmico", dosageForm: "Gotas", concentration: "500mg/ml" },
      { name: "Amoxicilina", description: "Antibiótico", dosageForm: "Cápsula", concentration: "500mg" },
      { name: "Omeprazol", description: "Protetor gástrico", dosageForm: "Cápsula", concentration: "20mg" },
      { name: "Losartana", description: "Antipertensivo", dosageForm: "Comprimido", concentration: "50mg" },
      { name: "Metformina", description: "Controle de diabetes", dosageForm: "Comprimido", concentration: "850mg" },
      { name: "Salbutamol", description: "Broncodilatador", dosageForm: "Inalador", concentration: "100mcg/dose" },
      { name: "Cetirizina", description: "Antialérgico", dosageForm: "Comprimido", concentration: "10mg" },
      { name: "Tramadol", description: "Analgésico opioide", dosageForm: "Cápsula", concentration: "50mg" },
    ],
  });

  console.log("Medicamentos criados!");

  // Inventário
  await prisma.inventory.createMany({
    data: [
      { medicationId: 1, quantity: 100 }, // Paracetamol
      { medicationId: 2, quantity: 50 },  // Ibuprofeno
      { medicationId: 3, quantity: 80 },  // Dipirona
      { medicationId: 4, quantity: 60 },  // Amoxicilina
      { medicationId: 5, quantity: 40 },  // Omeprazol
      { medicationId: 6, quantity: 70 },  // Losartana
      { medicationId: 7, quantity: 90 },  // Metformina
      { medicationId: 8, quantity: 30 },  // Salbutamol
      { medicationId: 9, quantity: 100 }, // Cetirizina
      { medicationId: 10, quantity: 20 }, // Tramadol
    ],
  });

  console.log("Inventário atualizado!");

  console.log("Banco de dados populado com sucesso! 🚀");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });