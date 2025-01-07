import { IFilter } from "@/types/entities/payload";
import { IUser } from "@/types/entities/user";
import { IUserRepository } from "@/types/repositories/user-repository";

export class DeleteUserService{
    constructor(private userRepository:IUserRepository){}

    async exec(payload:IFilter<IUser>){
        try{
            await this.userRepository.delete(payload)
        }catch(err){
            throw new Error(`${err}`)
        }
    }
}