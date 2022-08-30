module.exports.help = {
    name: "kick",
    aliases: ["kickar"]
}    
exports.run = async (msg, args) => {
    if(!msg.member.permissions.has('KICK_MEMBERS')) return msg.channel.send(`${msg.author.username}, não tens permissão para executar este comando!`)
    if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.channel.send(`Não tenho permissão para executar esse comando!`)

    let punir = msg.mentions.members.first()

    if(!punir) return msg.channel.send(`Tens de mencionar a pessoa que queres kickar!`)

    if(punir.user.id === msg.guild.ownerID) return msg.channel.send(`Não podes kickar o dono do servidor!`)
    if(punir.user.id === msg.author.id) return msg.channel.send(`Não podes kickar-te!`)
    if(!punir.kickable) return msg.channel.send(`Não posso kickar esse membro!`)

    punir.kick({reason: args.slice(1).join(' ') || 'Desconhecido.'})
    msg.channel.send(`${punir.user.username} kickado com sucesso!`)
}