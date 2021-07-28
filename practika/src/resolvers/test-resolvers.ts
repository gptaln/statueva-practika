import {database} from '../database'
import {ApolloError} from 'apollo-server-express'

export const testResolvers = {
    Query: {
        async getTestData() {
            try {
                const testData = await database
                    .firestore()
                    .collection('testData')
                    .doc('main')
                    .get()
                return testData.data()
            } catch (error) {
                throw new ApolloError(error)
            }
        },
    },
    Mutation: {
        async addUser(_: null, {str}: { str: string }) {
            try {
                const newData = {
                    testData: str,
                    jopa: 'I`m jopa 3'
                }
                const firestore = database.firestore()
                const doc = firestore.collection('testData').doc('main')
                await doc.set(newData)
                const res = await doc.get()
                return res.data()
            } catch (error) {
                throw new ApolloError(error)
            }
        }
    }
}

export interface Test {
    testData: string
    jopa: string
}