"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const test_resolvers_1 = require("./test-resolvers");
const users_resolvers_1 = require("./users-resolvers");
exports.resolvers = {
    Query: {
        ...test_resolvers_1.testResolvers.Query,
        ...users_resolvers_1.usersResolvers.Query
    },
    Mutation: {
        ...test_resolvers_1.testResolvers.Mutation,
        ...users_resolvers_1.usersResolvers.Mutation
    }
};
