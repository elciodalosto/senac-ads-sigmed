import userRouter from "./userRouter"
import invetoryRouter from "./inventoryRouter"
import { Router } from "express"
import patientRouter from "./patientRouter"; // Importando a rota

router.use("/patients", patientRouter); // Adicionando a rota ao router principal

const router = Router()

router.use("/user", userRouter)
router.use("/inventory", invetoryRouter)

export default router
