import { IDefaults } from "@/entities/Defaults";
import { IUser } from "@/entities/User";
import { IUserRepository } from "../user-repository";
import { prisma } from "@/prisma";

export class PrismaUserRepository implements IUserRepository {
  async create(data: Omit<IUser, keyof IDefaults>): Promise<IUser> {
    const user = await prisma.user.create({ data }).catch((error: any) => {
      throw new Error(String(error));
    });
    return user;
  }
  async findOne(filter: Omit<IUser, "password">): Promise<IUser> {
    const user = await prisma.user
      .findFirstOrThrow({ where: filter })
      .catch((error: any) => {
        throw new Error(String(error));
      });
    return user;
  }
  async findMany(filter?: Omit<IUser, "password">): Promise<IUser[]> {
    const users = filter
      ? await prisma.user.findMany({ where: filter }).catch((error: any) => {
          throw new Error(String(error));
        })
      : await prisma.user.findMany().catch((error: any) => {
          throw new Error(String(error));
        });
    return users;
  }
  async update(
    filter: Omit<IUser, "password">,
    data: Omit<IUser, keyof IDefaults>
  ): Promise<void> {
    await prisma.user
      .updateMany({ where: filter, data })
      .catch((error: any) => {
        throw new Error(String(error));
      });
  }
  async delete(filter: Omit<IUser, "password">): Promise<void> {
    await prisma.user.delete({ where: filter }).catch((error: any) => {
      throw new Error(String(error));
    });
  }
}
