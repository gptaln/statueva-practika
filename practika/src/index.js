"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const apollo_server_express_1 = require("apollo-server-express");
const fs_1 = require("fs");
const resolvers_1 = require("./resolvers/resolvers");
const colors_1 = __importDefault(require("colors"));
// init env-variables
dotenv_1.default.config();
const PORT = process.env.PORT ?? 4200;
async function startApolloServer() {
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: ['test', 'users', 'root'].map(schemaName => fs_1.readFileSync(path_1.default.resolve(__dirname, 'schemas', `${schemaName}.graphql`), {
            encoding: 'utf8'
        })),
        resolvers: resolvers_1.resolvers
    });
    await server.start();
    const app = express_1.default();
    server.applyMiddleware({ app });
    await new Promise((resolve) => app.listen({
        port: PORT,
        graphiql: true
    }, resolve));
    console.log(colors_1.default.cyan(`Server ready at http://localhost:${PORT}${server.graphqlPath}`));
    return { server, app };
}
startApolloServer();
