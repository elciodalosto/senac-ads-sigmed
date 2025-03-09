import { Request, Response } from "express"
import { prisma } from "../index"

export const createSideEffect = async (req: Request, res: Response) => {
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

export const getSideEffectsByPatient = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params

    const sideEffects = await prisma.sideEffect.findMany({
      where: { patientId: Number(patientId) },
      include: {
        medication: true
      }
    })

    res.json(sideEffects)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao buscar os efeitos colaterais." })
  }
}

export const updateSideEffect = async (req: Request, res: Response) => {
  try {
    const { sideEffectId, description } = req.body

    if (!description) {
      res.status(400).json({ error: "Campos obrigatórios incompletos!" })
    }

    const effect = await prisma.sideEffect.update({
      where: { id: Number(sideEffectId) },
      data: { description }
    })

    res.json(effect)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao atualizar o efeito colateral." })
  }
}

export const deleteSideEffect = async (req: Request, res: Response) => {
  try {
    const { sideEffectId } = req.params

    await prisma.sideEffect.delete({
      where: { id: Number(sideEffectId) }
    })

    res.json({ message: "Efeito colateral deletado com sucesso." })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao deletar o efeito colateral." })
  }
}
