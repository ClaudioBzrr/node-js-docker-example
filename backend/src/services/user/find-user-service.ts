import { IFilter } from "@/types/entities/payload";
import { IUser } from "@/types/entities/user";
import { IUserRepository } from "@/types/repositories/user-repository";

export class FindUserService{
    constructor(private userRepository:IUserRepository){}

    async exec(payload:IFilter<IUser>){
        try{
            const data = await this.userRepository.findOne(payload)
            return data
        }catch(err){
            throw new Error(`${err}`)
        }
    }
}