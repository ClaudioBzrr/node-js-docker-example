import { BcryptPasswordRepository } from "./bcrypt/bcrypt-password-repository";
import { PrismaUserRepository } from "./prisma/prisma-user-repository";

export const userRepository =  new PrismaUserRepository()
export const passwordRepository =  new BcryptPasswordRepository()