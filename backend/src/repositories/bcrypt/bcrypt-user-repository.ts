import { IPasswordRepository } from "../password-repository";
import { hash, compare } from "bcrypt";
export class IBcryptUserRepository implements IPasswordRepository {
  async hash(password: string): Promise<string> {
    const saltRounds = 10;
    const data = await hash(password, saltRounds);
    return data;
  }
  async verify(password: string, hash: string): Promise<boolean> {
    const result = await compare(password, hash);
    return result;
  }
}
