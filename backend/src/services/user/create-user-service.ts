import { ICreateUserPayload } from "@/types/entities/payload";
import { IPasswordRepository } from "@/types/repositories/password-repository";
import { IUserRepository } from "@/types/repositories/user-repository";


export class CreateUserService{
    constructor(private userRepository:IUserRepository, private passwordRepository:IPasswordRepository){}

    async exec(payload:ICreateUserPayload){
        try{
            const data = await this.userRepository.create(payload)
            data.password = await this.passwordRepository.create(data.password)
            return data
        }catch(err){
            throw new Error(`${err}`)
        }
    }
}