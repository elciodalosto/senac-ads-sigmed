import express from "express";
import * as EffectController from "../controllers/effectController"; 

const effectRouter = express.Router();

effectRouter.post("/create", EffectController.createEffect);

effectRouter.get("/get/:patientId", EffectController.getEffectsByPatient);

export default effectRouter;