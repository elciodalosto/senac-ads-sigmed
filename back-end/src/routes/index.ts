import userRouter from "./userRouter"
import invetoryRouter from "./inventoryRouter"
import { Router } from "express"
import patientRouter from "./patientRouter"

const router = Router()

router.use("/user", userRouter)
router.use("/inventory", invetoryRouter)
router.use("/patient", patientRouter)

export default router
