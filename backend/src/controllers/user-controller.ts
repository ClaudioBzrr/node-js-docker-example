import { passwordRepository, userRepository } from "@/repositories";
import { CreateUserService } from "@/services/user/create-user-service";
import { DeleteUserService } from "@/services/user/delete-user-service";
import { FindManyUserService } from "@/services/user/find-many-user-service";
import { FindUserService } from "@/services/user/find-user-service";
import { UpdateUserService } from "@/services/user/update-user-service";
import { Request, Response } from "express";

const createUserService =  new CreateUserService(userRepository,passwordRepository)
const findUserService =  new FindUserService(userRepository)
const findManyUserService =  new FindManyUserService(userRepository)
const updateUserService =  new UpdateUserService(userRepository, passwordRepository)
const deleteUserService =  new DeleteUserService(userRepository)

export class UserController{
    async create(req:Request,res:Response){
        try{
            const payload =  req.body
            const data = await createUserService.exec(payload)
            return res.json(data)
        }catch(err){
            return res.status(404).json(`${err}`)
        }
    }
    async findOne(req:Request,res:Response){
        try{
            const payload =  req.body
            const data = await findUserService.exec(payload)
            return res.json(data)
        }catch(err){
            return res.status(404).json(`${err}`)
        }
    }
    async findMany(req:Request,res:Response){
        try{
            const payload =  req.body
            const data = await findManyUserService.exec(payload)
            return res.json(data)
        }catch(err){
            return res.status(404).json(`${err}`)
        }
    }
    async update(req:Request,res:Response){
        try{
            const {filter , payload} =  req.body
            const data = await updateUserService.exec(filter, payload)
            return res.json(data)
        }catch(err){
            return res.status(404).json(`${err}`)
        }
    }
    async delete(req:Request,res:Response){
        try{
            const payload =  req.body
            const data = await deleteUserService.exec(payload)
            return res.json(data)
        }catch(err){
            return res.status(404).json(`${err}`)
        }
    }
}