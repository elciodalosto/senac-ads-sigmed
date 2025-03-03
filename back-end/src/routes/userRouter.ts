import express from "express"
import * as UserController from "../controllers/userController"

const userRouter = express.Router()

userRouter.post("/create", UserController.createUser)
userRouter.get("/getall", UserController.getAllUsers)
userRouter.get("/get/:id", UserController.getUser)
userRouter.put("/update/:id", UserController.updateUser)
userRouter.delete("/delete/:id", UserController.deleteUser)

export default userRouter
