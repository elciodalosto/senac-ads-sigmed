import { Request, Response } from "express";
import { prisma } from "../index";

export const getMedicationsByPatient = async (req: Request, res: Response) => {
  try {
    const { patientId } = req.params;

    const prescriptions = await prisma.prescription.findMany({
      where: { patientId: Number(patientId) },
      include: {
        items: {
          include: {
            medication: true,
          },
        },
      },
    });

    const medicationHistory = prescriptions.map((prescription) => ({
      prescribedAt: prescription.prescribedAt,
      medications: prescription.items.map((item) => ({
        id: item.medication.id,
        name: item.medication.name,
        dosage: item.dosage,
        frequency: item.frequency,
        duration: item.duration,
      })),
    }));

    return res.status(200).json(medicationHistory);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar medicamentos" });
  }
};