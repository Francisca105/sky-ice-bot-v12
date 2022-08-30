module.exports.help = {
    name: "fechar",
    aliases: ["close"]
}    
exports.run = async (msg, args) => {
    const {bot} = require('../index');
    const moment = require('moment')
    const fs = require('fs')

    let canal = msg.channel
    if(canal.name.startsWith('ticket-')) {

        await msg.channel.send('O ticket vai ser agora deletado.')
        msg.channel.delete()

    } else return msg.channel.send('Este canal não é de ticket!')


}