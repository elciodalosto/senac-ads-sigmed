import { Request, Response } from "express"
import { prisma } from "../index"

export const createTreatment = async (req: Request, res: Response) => {
  try {
    const { patientId, doctorId, description, startDate, endDate } = req.body
    if (!patientId || !doctorId || !description || !startDate || !endDate) {
      res.status(400).json({ error: "Missing required fields" })
    }
    const newTreatment = await prisma.treatment.create({
      data: {
        patientId,
        doctorId,
        description,
        startDate,
        endDate
      }
    })

    res.status(200).json(newTreatment)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const getTreament = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params
    const treatment = await prisma.treatment.findUnique({
      where: {
        id: Number(patientId)
      }
    })
    res.status(200).json(treatment)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const getAllTreatmentsByPatient = async (
  req: Request,
  res: Response
) => {
  const { patientId } = req.params
  try {
    const treatment = await prisma.treatment.findMany({
      where: {
        patientId: Number(patientId)
      },
      include: {
        prescriptions: {
          include: {
            items: true
          }
        }
      }
    })
    res.status(200).json(treatment)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const updateTreatment = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params
    const { description, startDate, endDate } = req.body
    const updatedTreatment = await prisma.treatment.update({
      where: {
        id: Number(patientId)
      },
      data: {
        description,
        startDate,
        endDate
      }
    })
    res.status(200).json(updatedTreatment)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const deleteTreatment = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params
    const deletedTreament = await prisma.treatment.delete({
      where: {
        id: Number(patientId)
      }
    })
    res.status(200).json(deletedTreament)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
