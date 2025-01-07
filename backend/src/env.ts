import 'dotenv/config'

export const SERVER_PORT= process.env.SERVER_PORT || 3000
export const DATABASE_URL= process.env.DATABASE_URL || 'file:./dev.db'
