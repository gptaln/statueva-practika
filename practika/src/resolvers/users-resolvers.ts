import {database} from '../database'
import {ApolloError} from 'apollo-server-express'
import {TelegramSender} from '../services/telegram-sender'

export const usersResolvers = {
    Query: {
        async getAllUsers() {
            try {
                const res = await database
                    .firestore()
                    .collection('users')
                    .get()
                return res.docs
                    .map(user => user.data()) as User[]
            } catch (error) {
                throw new ApolloError(error)
            }
        },
    },
    Mutation: {
        async addUser(_: null, {user}: { user: User }) {
            try {
                const firestore = database.firestore()

                const telegramSender = new TelegramSender()
                telegramSender.sendMessage(
                    `Имя: ${user.name}\n`
                    + `Телефон: ${user.phone}`
                    + `${
                            user.message
                                ? `\nСообщение: ${user.message}`
                                : ''
                    }                    
                `)

                const doc = firestore.collection('users').doc()
                await doc.set(user)
                return `Пользовать ${user.name} успешно добавлен`

            } catch (error) {
                throw new ApolloError(error)
            }
        }
    }
}

export interface User {
    name: string
    phone: string
    message?: string
}