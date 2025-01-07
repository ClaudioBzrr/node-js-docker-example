import { IBase } from "./base"


export type IRepository<T> = {
    create:(data:Omit<T, keyof IBase>) => Promise<T>
    findOne:(filter:Partial<T>) =>Promise<T>
    findMany:(filter?:Partial<T>) => Promise<T[]>
    update:(filter:Partial<T>, data:Partial<Omit<T, keyof IBase>>) => Promise<void>
    delete:(filter:Partial<T>) => Promise<void>
}