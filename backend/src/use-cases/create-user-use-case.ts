import { ICreateUserPayload } from "@/entities/Payload";
import { IPasswordRepository } from "@/repositories/password-repository";
import { IUserRepository } from "@/repositories/user-repository";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordRepository: IPasswordRepository
  ) {}

  async execute(data: ICreateUserPayload) {
    data.password = await this.passwordRepository.hash(data.password);
    const user = await this.userRepository.create(data);
    return user;
  }
}
