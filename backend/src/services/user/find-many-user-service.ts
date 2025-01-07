import { IFilter } from "@/types/entities/payload";
import { IUser } from "@/types/entities/user";
import { IUserRepository } from "@/types/repositories/user-repository";

export class FindManyUserService{
    constructor(private userRepository:IUserRepository){}

    async exec(payload:IFilter<IUser>){
        try{
            const data = await this.userRepository.findMany(payload)
            return data
        }catch(err){
            throw new Error(`${err}`)
        }
    }
}