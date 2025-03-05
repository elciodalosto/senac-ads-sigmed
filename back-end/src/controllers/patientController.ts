import { Request, Response } from "express"
import { prisma } from "../index"

export const searchPatient = async (req: Request, res: Response) => {
  try {
    const { cpf, matricula } = req.query

    if (!cpf && !matricula) {
      res.status(400).json({ error: "Informe CPF ou matrícula para buscar." })
    }

    const patient = await prisma.patient.findFirst({
      where: {
        OR: [
          { cpf: cpf ? String(cpf) : undefined },
          { matricula: matricula ? String(matricula) : undefined }
        ]
      }
    })

    if (!patient) {
      return res.status(404).json({ error: "Paciente não encontrado." })
    }

    return res.json(patient)
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar paciente." })
  }
}
