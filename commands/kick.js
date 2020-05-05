module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, args) {
		var kickMember = message.mentions.members.first();
		if (kickMember = '238607032930795521'){
			message.channel.send('踢你妹 沒權利踢作者:>')
			return;
		}
		else if (message.member.hasPermission("ADMINISTRATOR")){
			kickMember.kick().then((kickMember)=>{
				message.channel.send(kickMember.displayName + "這垃圾已經被踢屁股咯")
			}).catch(()=>{
				message.channel.send("沒管理員踢你ma屁股哦");
			})
		}
		else {
			message.channel.send("沒管理員踢你ma屁股哦");
		}
	}
}