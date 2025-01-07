import { UserController } from "@/controllers/user-controller";
import { Router } from "express";

export const userRoutes =  Router()

userRoutes.post('/create-user', new UserController().create)
userRoutes.post('/find-user', new UserController().findOne)
userRoutes.post('/find-users', new UserController().findMany)
userRoutes.put('/update-user', new UserController().update)
userRoutes.delete('/delete-user', new UserController().delete)