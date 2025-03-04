import express from "express";
import * as EffectController from "../controllers/effectController"; 

const effectRouter = express.Router();

// Criar um novo efeito colateral atrelado a um paciente
effectRouter.post("/create", EffectController.createEffect);

// Buscar todos os efeitos colaterais de um paciente específico
effectRouter.get("/get/:patientId", EffectController.getEffectsByPatient);

export default effectRouter;