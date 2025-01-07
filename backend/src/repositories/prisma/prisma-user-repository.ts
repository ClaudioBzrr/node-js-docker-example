import { prisma } from "@/prisma";
import { IBase } from "@/types/entities/base";
import { IUser } from "@/types/entities/user";
import { IUserRepository } from "@/types/repositories/user-repository";

export class PrismaUserRepository implements IUserRepository{
    async create(data: Omit<IUser, keyof IBase>):Promise<IUser>{
        try{
            const response = await prisma.user.create({data})
            return response
        }catch(err){
            throw new Error(`${err}`)
        }
    }
    async findOne (filter: Partial<IUser>):Promise<IUser>{
        try{
            const response =  await prisma.user.findFirstOrThrow({where:filter})
            return response
        }catch(err){
            throw new Error(`${err}`)
        }
    }
    async findMany(filter?: Partial<IUser>):Promise<IUser[]>{
        try{
            const response = filter? prisma.user.findMany({where:filter}) : prisma.user.findMany()
            return response
        }catch(err){
            throw new Error(`${err}`)
        }
    }
    async update (filter: Partial<IUser>, data: Partial<Omit<IUser, keyof IBase>>):Promise<void>{
        try{
            await prisma.user.updateMany({where:filter, data})
        }catch(err){
            throw new Error(`${err}`)
        }
    }
    async delete(filter: Partial<IUser>):Promise<void>{
        try{
            await prisma.user.deleteMany({where:filter})
        }catch(err){
            throw new Error(`${err}`)
        }
    }
    
}