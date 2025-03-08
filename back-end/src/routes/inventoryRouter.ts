import express from "express"
import * as UserController from "../controllers/inventoryController"

const invetoryRouter = express.Router()

invetoryRouter.post("/create", UserController.createInventory)
invetoryRouter.get("/getall", UserController.getAllMedications)
invetoryRouter.put("/update/:id", UserController.updateInventory)
invetoryRouter.delete("/delete/:id", UserController.deleteInventory)

export default invetoryRouter
