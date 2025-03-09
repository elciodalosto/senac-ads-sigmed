import userRouter from "./userRouter"
import invetoryRouter from "./inventoryRouter"
import patientRouter from "./patientRouter"
import sideEffectRouter from "./sideEffectRouter"
import authRouter from "./authRouter"

import { Router } from "express"

const router = Router()

router.use("/user", userRouter)
router.use("/inventory", invetoryRouter)
router.use("/patient", patientRouter)
router.use("/sideeffect", sideEffectRouter)
router.use("/auth", authRouter)

export default router
