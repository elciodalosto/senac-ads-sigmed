import { Request, Response } from "express"
import { prisma } from "../index"
import bcrypt from "bcrypt"
import { HealthcareRole } from "@prisma/client"

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body
    if (!name || !email || !password || !role) {
      res.status(400).json({ error: "Missing required fields" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role as HealthcareRole
      }
    })
    res.status(200).json(newUser)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(user)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, email, password, role } = req.body
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        email,
        password,
        role
      }
    })
    res.status(200).json(updatedUser)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(deletedUser)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
