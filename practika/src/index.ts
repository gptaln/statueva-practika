import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import {ApolloServer} from 'apollo-server-express'
import {readFileSync} from 'fs'
import {resolvers} from './resolvers/resolvers'
import colors from 'colors'
import {TelegramSender} from './services/telegram-sender'

// init env-variables
dotenv.config()

const PORT = process.env.PORT ?? 4200

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: ['test', 'users', 'root'].map(
            schemaName => readFileSync(path.resolve(__dirname, 'schemas', `${schemaName}.graphql`), {
                encoding: 'utf8'
            })
        ),
        resolvers
    })

    await server.start()

    const app = express()
    server.applyMiddleware({app})

    await new Promise((resolve: any) => app.listen({
        port: PORT,
        graphiql: true
    }, resolve))
    console.log(colors.cyan(`Server ready at http://localhost:${PORT}${server.graphqlPath}`))

    return {server, app}
}

startApolloServer()