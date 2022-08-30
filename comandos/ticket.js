module.exports.help = {
    name: "ticket",
    aliases: ["abrir"]
}    
exports.run = async (msg, args) => {
    const discord = require('discord.js')

    let guild = msg.guild
    let find = guild.channels.cache.filter(canal => canal.name === 'ticket-' + msg.author.id)

    if(find.first()) return msg.channel.send(`Já tens um ticket aberto!`)

    let channel = await guild.channels.create(`ticket-${msg.author.id}`, { 
        type: 'text', 
        permissionOverwrites: [
            {
                allow: 'VIEW_CHANNEL',
                id: msg.author.id
            },
            {
                deny: 'VIEW_CHANNEL',
                id: msg.guild.id
            }
        ]
    })

    channel.send(new discord.MessageEmbed()
    .setTitle('Atendimento')
    .setColor('GREEN')
    .setDescription(`Tira aqui a tua dúvida!`)
    )
}