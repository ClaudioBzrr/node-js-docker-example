export type IPasswordRepository = {
    create:(raw:string) => Promise<string>,
    compare:({ password, hash }: { password: string, hash: string }) => Promise<boolean>
}