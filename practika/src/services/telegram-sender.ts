import TelegramBot from 'node-telegram-bot-api'

export class TelegramSender {

    readonly #token = process.env.TELEGRAM_BOT_TOKEN ?? ''
    readonly #chatId = process.env.TELEGRAM_CHAT_ID ?? ''
    private readonly _bot: TelegramBot

    constructor() {

        this._bot = new TelegramBot(this.#token, {
            polling: true
        })

        this._bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message

            const chatId = msg.chat.id
            const resp = !!match ? match[1] : ''  // the captured "whatever"

            // send back the matched "whatever" to the chat
            this.bot.sendMessage(chatId, resp)
        })

        this._bot.on('message', (msg) => {
            const chatId = msg.chat.id

            // send a message to the chat acknowledging receipt of their message
            this.bot.sendMessage(chatId, 'Received your message')
        })
    }

    get bot() {
        return this._bot
    }

    sendMessage(text: string) {
        this.bot.sendMessage(this.#chatId, text)
    }

}