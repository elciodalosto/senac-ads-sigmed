import userRouter from "./userRouter"
import invetoryRouter from "./inventoryRouter"
import { Router } from "express"
import patientRouter from "./patientRouter"
import { Router } from "express";
import userRouter from "./userRouter";
import authRouter from "./authRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter); 

export default router;

const router = Router()

router.use("/user", userRouter)
router.use("/inventory", invetoryRouter)
router.use("/patient", patientRouter)

export default router
