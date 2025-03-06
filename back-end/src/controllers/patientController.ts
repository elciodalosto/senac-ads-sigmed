import { Request, Response } from "express"
import { prisma } from "../index"

export const getPatient = async (req: Request, res: Response) => {
  try {
    const { cpf } = req.body

    const patient = await prisma.patient.findUnique({
      where: {
        cpf: cpf
      }
    })

    if (!patient) {
      res.status(404).json({ error: "Paciente não encontrado." })
    }

    res.json(patient)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar paciente." })
  }
}

export const getAllPatients = async (req: Request, res: Response) => {
  try {
    const patients = await prisma.patient.findMany()
    res.status(200).json(patients)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pacientes." })
  }
}
