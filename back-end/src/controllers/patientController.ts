import { Request, Response } from "express"
import { prisma } from "../index"

export const getPatient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const patient = await prisma.patient.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!patient) {
      res.status(404).json({ error: "Paciente não encontrado." })
    }

    res.status(200).json(patient)
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
