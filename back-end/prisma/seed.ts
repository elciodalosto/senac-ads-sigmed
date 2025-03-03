import { PrismaClient } from "@prisma/client"
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
  await prisma.sideEffect.create({
    data: {
      patientId: paciente.id,
      medicationId: paracetamol.id,
      description: "Náusea leve"
    }
  })

  // Inventário
  await prisma.inventory.createMany({
    data: [
      { medicationId: paracetamol.id, quantity: 100 },
      { medicationId: ibuprofeno.id, quantity: 50 }
    ]
  })

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
