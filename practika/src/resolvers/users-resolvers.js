"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersResolvers = void 0;
const database_1 = require("../database");
const apollo_server_express_1 = require("apollo-server-express");
const telegram_sender_1 = require("../services/telegram-sender");
exports.usersResolvers = {
    Query: {
        async getAllUsers() {
            try {
                const res = await database_1.database
                    .firestore()
                    .collection('users')
                    .get();
                return res.docs
                    .map(user => user.data());
            }
            catch (error) {
                throw new apollo_server_express_1.ApolloError(error);
            }
        },
    },
    Mutation: {
        async addUser(_, { user }) {
            try {
                const firestore = database_1.database.firestore();
                const telegramSender = new telegram_sender_1.TelegramSender();
                telegramSender.sendMessage(`Имя: ${user.name}\n`
                    + `Телефон: ${user.phone}`
                    + `${user.message
                        ? `\nСообщение: ${user.message}`
                        : ''}                    
                `);
                const doc = firestore.collection('users').doc();
                await doc.set(user);
                return `Пользовать ${user.name} успешно добавлен`;
            }
            catch (error) {
                throw new apollo_server_express_1.ApolloError(error);
            }
        }
    }
};
