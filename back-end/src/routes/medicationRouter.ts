import express from "express";
import { getMedicationsByPatient } from "../controllers/medicationController";

const medicationRouter = express.Router();

medicationRouter.get("/patient/:patientId", getMedicationsByPatient);

export default medicationRouter;