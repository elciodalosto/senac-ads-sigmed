import { Request, Response } from "express"
import { prisma } from "../index"

export const createEffect = async (req: Request, res: Response) => {
  try {
    const { patientId, medicationId, description } = req.body

    if (!patientId || !medicationId || !description) {
      res.status(400).json({ error: "Campos obrigatórios incompletos!" })
    }

    const effect = await prisma.sideEffect.create({
      data: {
        patientId,
        medicationId,
        description
      }
    })

    res.status(201).json(effect)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao registrar o efeito colateral." })
  }
}

export const getEffectsByPatient = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params

    const effects = await prisma.sideEffect.findMany({
      where: { patientId: Number(patientId) }
    })

    res.json(effects)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao buscar os efeitos colaterais." })
  }
}
