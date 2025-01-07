import { ICreateUserPayload, IFilter } from "@/types/entities/payload";
import { IUser } from "@/types/entities/user";
import { IPasswordRepository } from "@/types/repositories/password-repository";
import { IUserRepository } from "@/types/repositories/user-repository";

export class UpdateUserService{
    constructor(private userRepository:IUserRepository, private passwordRepository:IPasswordRepository){}

    async exec(filter:IFilter<IUser>,data:Partial<ICreateUserPayload>){
        try{
            if(data.password) data.password = await this.passwordRepository.create(data.password)
            await this.userRepository.update(filter,data)
        }catch(err){
            throw new Error(`${err}`)
        }
    }
}