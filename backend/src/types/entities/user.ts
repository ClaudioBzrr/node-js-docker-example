import { IBase } from "./base";

 export type IUser = IBase & {
    name:string,
    email:string,
    password:string
 }