import { IFilterUser } from "@/entities/Payload";
import { IUserRepository } from "@/repositories/user-repository";

export class FindManyUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(filter?: IFilterUser) {
    const users = await this.userRepository.findMany(filter);
    return users;
  }
}
