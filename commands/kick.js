module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, args) {
		if (message.member.hasPermission("ADMINISTRATOR")){
			var kickMember = message.mentions.members.first();
			banMember.ban().then((kickMember)=>{
				message.channel.send(kickMember.displayName + "這垃圾已經被踢屁股咯")
			}).catch(()=>{
				message.channel.send("沒管理員踢你ma屁股哦");
			})
		}
	}