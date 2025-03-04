import express from "express";
import * as PatientController from "../controllers/patientController";

const patientRouter = express.Router();

patientRouter.get("/search", PatientController.searchPatient);

export default patientRouter;