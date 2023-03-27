const telegramBot = require('node-telegram-bot-api')
const {token, } = require('./addons.')
const bot = new telegramBot(token, {polling: true})

const myId = 732162115
const AuthorId = 451878659

const backToPrList = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Приобрести', url: 'https://t.me/VALERY182'}],
            [{text: 'Вернуться назад', callback_data: 'programs'}]
        ]
    })
}

const start = async () => {

    bot.on("polling_error", console.log);

    bot.on("callback_query", quere => {
        const chatId = quere.message.chat.id
        const messageId = quere.message.message_id
        const data = quere.data
        const user = quere.from.first_name

        switch(data) {


        }
    })

    bot.on("message", async msg => {
        const user = msg.from.first_name
        const text = msg.text
        const chatId = msg.chat.id

        
    })

}