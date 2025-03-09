import { PrismaClient, Gender } from "@prisma/client" // Import Gender
const prisma = new PrismaClient()

async function main() {
  // Usuários (profissionais de saúde)
  const medico = await prisma.user.create({
    data: {
      name: "Dr. João Silva",
      email: "dr.joao@email.com",
      password: "senha123",
      role: "MEDICO"
    }
  })

  const enfermeiro = await prisma.user.create({
    data: {
      name: "Enf. Maria Souza",
      email: "enf.maria@email.com",
      password: "senha123",
      role: "ENFERMEIRO"
    }
  })

  // Pacientes
  const paciente = await prisma.patient.create({
    data: {
      name: "Carlos Oliveira",
      cpf: "635.163.910-73",
      birthDate: new Date("1990-05-10"),
      gender: "MASCULINO",
      medicalRecord: "MR-12345"
    }
  })

  // Medicamentos
  const paracetamol = await prisma.medication.create({
    data: {
      name: "Paracetamol",
      description: "Analgésico e antipirético",
      dosageForm: "Comprimido",
      concentration: "500mg"
    }
  })

  const ibuprofeno = await prisma.medication.create({
    data: {
      name: "Ibuprofeno",
      description: "Anti-inflamatório",
      dosageForm: "Comprimido",
      concentration: "400mg"
    }
  })

  // Função auxiliar para criar medicamentos
  const criarMedicamento = async (
    name: string,
    description: string,
    dosageForm: string,
    concentration: string
  ) => {
    return prisma.medication.create({
      data: { name, description, dosageForm, concentration }
    })
  }

  const medicamentos = await Promise.all([
    criarMedicamento(
      "Paracetamol",
      "Analgésico e antipirético",
      "Comprimido",
      "500mg"
    ),
    criarMedicamento("Ibuprofeno", "Anti-inflamatório", "Comprimido", "400mg"),
    criarMedicamento(
      "Dipirona",
      "Analgésico e antitérmico",
      "Gotas",
      "500mg/ml"
    ),
    criarMedicamento("Amoxicilina", "Antibiótico", "Cápsula", "500mg"),
    criarMedicamento("Omeprazol", "Protetor gástrico", "Cápsula", "20mg"),
    criarMedicamento("Losartana", "Antipertensivo", "Comprimido", "50mg")
  ])

  // Prescrição
  const prescricao = await prisma.prescription.create({
    data: {
      patientId: paciente.id,
      doctorId: medico.id,
      items: {
        create: [
          {
            medicationId: paracetamol.id,
            dosage: "1 comprimido",
            frequency: "A cada 8 horas",
            duration: "5 dias"
          },
          {
            medicationId: ibuprofeno.id,
            dosage: "1 comprimido",
            frequency: "A cada 12 horas",
            duration: "3 dias"
          }
        ]
      }
    }
  })

  // Tratamento
  await prisma.treatment.create({
    data: {
      patientId: paciente.id,
      doctorId: medico.id,
      description: "Tratamento para dor de cabeça e inflamação",
      startDate: new Date(),
      prescriptions: {
        connect: { id: prescricao.id }
      }
    }
  })

  // Efeitos Colaterais
  await prisma.sideEffect.createMany({
    data: [
      {
        patientId: paciente.id,
        medicationId: paracetamol.id,
        description: "Náusea leve"
      },
      {
        patientId: paciente.id,
        medicationId: ibuprofeno.id,
        description: "Dor de cabeça"
      }
    ]
  })

  // Inventário
  await prisma.inventory.createMany({
    data: medicamentos.map((medicamento, index) => ({
      medicationId: medicamento.id,
      quantity: (index + 1) * 10
    }))
  })

  console.log("Seed executado com sucesso 🌱")
  console.log("Banco de dados populado com sucesso! 🚀")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
