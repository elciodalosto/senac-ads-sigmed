import userRouter from "./userRouter"
import { Router } from "express"
import patientRouter from "./patientRouter"; // Importando a rota

router.use("/patients", patientRouter); // Adicionando a rota ao router principal

const router = Router()

router.use("/user", userRouter)

export default router
