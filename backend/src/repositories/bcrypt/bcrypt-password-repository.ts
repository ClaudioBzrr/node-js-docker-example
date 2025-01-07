import { IPasswordRepository } from "@/types/repositories/password-repository";
import { hash, compare } from 'bcrypt'
export class BcryptPasswordRepository implements IPasswordRepository{
     async create(raw: string) : Promise<string>{
        try{
            const password = await hash(raw, 10)
            return password
        }catch(err){
            throw new Error(`${err}`)
        }
     }
     async compare({ password, hash }: { password: string, hash: string }):Promise<boolean>{
        try{
            const isValid = await compare(password, hash)
            return isValid
        }catch(err){
            throw new Error(`${err}`)
        }
     }
}