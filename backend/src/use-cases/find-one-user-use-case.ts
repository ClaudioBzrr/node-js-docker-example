import { IFilterUser } from "@/entities/Payload";
import { IUserRepository } from "@/repositories/user-repository";

export class FindOneUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(filter: IFilterUser) {
    const user = await this.userRepository.findOne(filter);
    return user;
  }
}
