import express from "express"
import * as SideEffectController from "../controllers/sideEffectController"

const sideEffectRouter = express.Router()

sideEffectRouter.post("/create", SideEffectController.createSideEffect)

sideEffectRouter.get(
  "/get/:patientId",
  SideEffectController.getSideEffectsByPatient
)

sideEffectRouter.put(
  "/update/:patientId",
  SideEffectController.updateSideEffect
)

sideEffectRouter.delete(
  "/delete/:patientId",
  SideEffectController.deleteSideEffect
)

export default sideEffectRouter
