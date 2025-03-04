import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Criar um novo efeito colateral
export const createEffect = async (req: Request, res: Response) => {
  try {
    const { patientId, symptom } = req.body;

    if (!patientId || !symptom) {
      return res.status(400).json({ error: "Paciente e sintoma são obrigatórios." });
    }

    const effect = await prisma.effect.create({
      data: {
        patientId,
        symptom,
      },
    });

    res.status(201).json(effect);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao registrar o efeito colateral." });
  }
};

// Buscar efeitos colaterais anteriores de um paciente
export const getEffectsByPatient = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params;

    const effects = await prisma.effect.findMany({
      where: { patientId: Number(patientId) },
      orderBy: { createdAt: "desc" },
    });

    res.json(effects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar os efeitos colaterais." });
  }
};