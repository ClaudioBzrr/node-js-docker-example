import { IBase } from "./base";
import { IUser } from "./user";

export type  ICreateUserPayload = Omit<IUser, keyof IBase>
export type IFilter<T> =  Partial<T>