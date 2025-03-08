import express from "express"
import * as EffectController from "../controllers/sideEffectController"

const sideEffectRouter = express.Router()

sideEffectRouter.post("/create", EffectController.createSideEffect)

sideEffectRouter.get(
  "/get/:patientId",
  EffectController.getSideEffectsByPatient
)

export default sideEffectRouter
