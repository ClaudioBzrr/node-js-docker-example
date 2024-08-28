import { IDefaults } from "./Defaults";

export type IRepostory<T> = {
  create: (data: Omit<T, keyof IDefaults>) => Promise<T>;
  findOne: (filter: Omit<T, "password">) => Promise<T>;
  findMany: (filter?: Omit<T, "password">) => Promise<T[]>;
  update: (
    filter: Omit<T, "password">,
    data: Omit<T, keyof IDefaults>
  ) => Promise<void>;
  delete: (filter: Omit<T, "password">) => Promise<void>;
};
