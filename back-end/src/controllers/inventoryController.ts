import { Request, Response } from "express"
import { prisma } from "../index"

export const createInventory = async (req: Request, res: Response) => {
  try {
    const { medicationId, quantity } = req.body
    if (!medicationId || !quantity) {
      res.status(400).json({ error: "Missing required fields" })
    }
    const newInventoryItem = await prisma.inventory.create({
      data: {
        medicationId,
        quantity
      }
    })
    res.status(200).json(newInventoryItem)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const getAllMedications = async (req: Request, res: Response) => {
  try {
    const inventories = await prisma.inventory.findMany({
      include: {
        medication: true
      }
    })
    res.status(200).json(inventories)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const updateInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { medicationId, quantity } = req.body
    const updatedInvetory = await prisma.inventory.update({
      where: {
        id: Number(id)
      },
      data: {
        medicationId,
        quantity
      }
    })
    res.status(200).json(updatedInvetory)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const deleteInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedInvetory = await prisma.inventory.delete({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(deletedInvetory)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
