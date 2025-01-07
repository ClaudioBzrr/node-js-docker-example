import { addAliases} from 'module-alias'


addAliases({
    '@': __dirname
})


import express from 'express'
import { SERVER_PORT} from './env'
import cors from 'cors'
import { routes } from './routes'


const server =  express()
server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))