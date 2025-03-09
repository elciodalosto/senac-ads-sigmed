import { Request, Response } from "express"
import { prisma } from "../index"
import nodemailer from "nodemailer"
import bcrypt from "bcrypt"

// Configuração do transporte de e-mail (substitua com suas credenciais)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Defina no .env
    pass: process.env.EMAIL_PASS // Defina no .env
  }
})

// Enviar e-mail para redefinição de senha
export const sendPasswordResetEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body
    if (!email) {
      res.status(400).json({ error: "Email is required" })
    }

    const resetToken = bcrypt.hashSync(email, 10)

    // Aqui iria a lógica de enviar o e-mail de recuperação...
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`
    await transporter.sendMail({
      to: email,
      subject: "Redefinição de Senha",
      html: `<p>Clique no link para redefinir sua senha:</p><a href="${resetLink}">${resetLink}</a>`
    })

    res.status(200).json({ message: "Password reset email sent" })
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}

// Redefinir senha
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body

    // Busca o usuário pelo token
    const user = await prisma.user.findFirst({
      where: { resetToken: token, tokenExpires: { gt: new Date() } }
    })

    if (!user)
      return res.status(400).json({ error: "Token inválido ou expirado" })

    // Criptografa a nova senha e salva no banco
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword, resetToken: null, tokenExpires: null }
    })

    res.status(200).json({ message: "Senha redefinida com sucesso!" })
  } catch (error) {
    res.status(500).json({ error: "Erro ao redefinir senha" })
  }
}
