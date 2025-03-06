import express from "express"
import * as PatientController from "../controllers/patientController"

const patientRouter = express.Router()

patientRouter.get("/", PatientController.getPatient)
patientRouter.get("/getall", PatientController.getAllPatients)

export default patientRouter
