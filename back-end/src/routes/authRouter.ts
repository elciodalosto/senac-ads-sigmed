import express from "express"
import * as AuthController from "../controllers/authController"

const authRouter = express.Router()

authRouter.post("/forgot-password", AuthController.sendPasswordResetEmail)
authRouter.post("/reset-password", AuthController.resetPassword)

export default authRouter
