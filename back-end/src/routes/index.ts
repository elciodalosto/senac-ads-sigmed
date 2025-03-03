import userRouter from "./userRouter"
import { Router } from "express"

const router = Router()

router.use("/user", userRouter)

export default router
