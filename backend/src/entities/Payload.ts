import { IDefaults } from "./Defaults";
import { IUser } from "./User";

export type ICreateUserPayload = Omit<IUser, keyof IDefaults>;
export type IFilterUser = Omit<IUser, "password">;
