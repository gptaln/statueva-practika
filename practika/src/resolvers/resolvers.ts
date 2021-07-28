import {IResolvers} from 'graphql-tools'
import {testResolvers} from './test-resolvers'
import {usersResolvers} from './users-resolvers'

export const resolvers: IResolvers = {
    Query: {
        ...testResolvers.Query,
        ...usersResolvers.Query
    },
    Mutation: {
        ...testResolvers.Mutation,
        ...usersResolvers.Mutation
    }
}