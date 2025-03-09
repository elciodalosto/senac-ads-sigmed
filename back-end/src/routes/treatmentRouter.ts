import express from "express"
import * as TreatmentController from "../controllers/treatmentController"

const treatmentRouter = express.Router()

treatmentRouter.post("/create", TreatmentController.createTreatment)
treatmentRouter.get(
  "/getall/:patientId",
  TreatmentController.getAllTreatmentsByPatient
)
treatmentRouter.get(
  "/get/:patientId",
  TreatmentController.getAllTreatmentsByPatient
)
treatmentRouter.put("/update/:patientId", TreatmentController.updateTreatment)
treatmentRouter.delete(
  "/delete/:patientId",
  TreatmentController.deleteTreatment
)

export default treatmentRouter
