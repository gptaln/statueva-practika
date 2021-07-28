"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramSender = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
class TelegramSender {
    #token = process.env.TELEGRAM_BOT_TOKEN ?? '';
    #chatId = process.env.TELEGRAM_CHAT_ID ?? '';
    _bot;
    constructor() {
        this._bot = new node_telegram_bot_api_1.default(this.#token, {
            polling: true
        });
        this._bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
            const chatId = msg.chat.id;
            const resp = !!match ? match[1] : ''; // the captured "whatever"
            // send back the matched "whatever" to the chat
            this.bot.sendMessage(chatId, resp);
        });
        this._bot.on('message', (msg) => {
            const chatId = msg.chat.id;
            // send a message to the chat acknowledging receipt of their message
            this.bot.sendMessage(chatId, 'Received your message');
        });
    }
    get bot() {
        return this._bot;
    }
    sendMessage(text) {
        this.bot.sendMessage(this.#chatId, text);
    }
}
exports.TelegramSender = TelegramSender;
