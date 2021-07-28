"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testResolvers = void 0;
const database_1 = require("../database");
const apollo_server_express_1 = require("apollo-server-express");
exports.testResolvers = {
    Query: {
        async getTestData() {
            try {
                const testData = await database_1.database
                    .firestore()
                    .collection('testData')
                    .doc('main')
                    .get();
                return testData.data();
            }
            catch (error) {
                throw new apollo_server_express_1.ApolloError(error);
            }
        },
    },
    Mutation: {
        async addUser(_, { str }) {
            try {
                const newData = {
                    testData: str,
                    jopa: 'I`m jopa 3'
                };
                const firestore = database_1.database.firestore();
                const doc = firestore.collection('testData').doc('main');
                await doc.set(newData);
                const res = await doc.get();
                return res.data();
            }
            catch (error) {
                throw new apollo_server_express_1.ApolloError(error);
            }
        }
    }
};
