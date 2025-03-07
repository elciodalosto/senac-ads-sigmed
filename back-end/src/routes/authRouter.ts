import express from "express";
import { sendPasswordResetEmail } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/forgot-password", AuthController.sendPasswordResetEmail);
authRouter.post("/reset-password", AuthController.resetPassword);

export default authRouter;