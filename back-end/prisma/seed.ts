import { PrismaClient, Gender } from "@prisma/client"; // Import Gender
const prisma = new PrismaClient();

async function main() {
  // Usuários (profissionais de saúde)
  const medicoEmail = "dr.joao@email.com";
  const existingMedico = await prisma.user.findUnique({
    where: {
      email: medicoEmail,
    },
  });

  if (!existingMedico) {
    await prisma.user.create({
      data: {
        name: "Dr. João Silva",
        email: medicoEmail,
        password: "senha123",
        role: "MEDICO",
      },
    });
    console.log("Médico criado!");
  } else {
    console.log("Médico já existe!");
  }

  const enfermeiroEmail = "enf.maria@email.com";
  const existingEnfermeiro = await prisma.user.findUnique({
    where: {
      email: enfermeiroEmail,
    },
  });

  if (!existingEnfermeiro) {
    await prisma.user.create({
      data: {
        name: "Enf. Maria Souza",
        email: enfermeiroEmail,
        password: "senha123",
        role: "ENFERMEIRO",
      },
    });
    console.log("Enfermeiro criado!");
  } else {
    console.log("Enfermeiro já existe!");
  }

  // Pacientes
  const pacientesData = [
    {
      name: "Carlos Oliveira",
      cpf: "635.163.910-73",
      birthDate: new Date("1990-05-10"),
      gender: Gender.MASCULINO, // Use the enum value
      medicalRecord: "MR-12345",
    },
    {
      name: "Ana Souza",
      cpf: "123.456.789-00",
      birthDate: new Date("1985-08-20"),
      gender: Gender.FEMININO, // Use the enum value
      medicalRecord: "MR-54321",
    },
    {
      name: "Pedro Santos",
      cpf: "987.654.321-11",
      birthDate: new Date("2000-02-15"),
      gender: Gender.MASCULINO, // Use the enum value
      medicalRecord: "MR-67890",
    },
  ];

  for (const pacienteData of pacientesData) {
    const existingPaciente = await prisma.patient.findUnique({
      where: {
        cpf: pacienteData.cpf, // Assuming CPF is unique
      },
    });

    if (!existingPaciente) {
      await prisma.patient.create({
        data: pacienteData,
      });
      console.log(`Paciente ${pacienteData.name} criado!`);
    } else {
      console.log(`Paciente com CPF ${pacienteData.cpf} já existe!`);
    }
  }

  // Medicamentos
  const medicamentosData = [
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
  ];

  // Create medications one by one to get their IDs
  const medicamentos = [];
  for (const medicationData of medicamentosData) {
    const medication = await prisma.medication.create({ data: medicationData });
    medicamentos.push(medication);
  }

  console.log("Medicamentos criados!");

  // Inventário
  const inventoryData = medicamentos.map((medication, index) => ({
    medicationId: medication.id,
    quantity: [100, 50, 80, 60, 40, 70, 90, 30, 100, 20][index], // Example quantities
  }));

  await prisma.inventory.createMany({
    data: inventoryData,
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