module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}    
exports.run = async (msg, args) => {
    if(!msg.member.permissions.has('BAN_MEMBERS')) return msg.channel.send(`${msg.author.username}, não tens permissão para executar este comando!`)
    if(!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.channel.send(`Não tenho permissão para executar esse comando!`)

    let punir = msg.mentions.members.first()

    if(!punir) return msg.channel.send(`Tens de mencionar a pessoa que queres banir!`)

    if(punir.user.id === msg.guild.ownerID) return msg.channel.send(`Não podes banir o dono do servidor!`)
    if(punir.user.id === msg.author.id) return msg.channel.send(`Não podes banir-te a ti mesmo!`)
    if(!punir.bannable) return msg.channel.send(`Não posso banir esse membro!`)

    punir.ban({reason: args.slice(1).join(' ') || 'Desconhecido.'})
    msg.channel.send(`${punir.user.username} banido com sucesso!`)
}