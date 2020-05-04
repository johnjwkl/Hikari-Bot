module.exports = {
	name: 'ban',
	description: 'ban',
	execute(message, args) {
		if (message.member.hasPermission("ADMINISTRATOR")){
			var banMember = message.mentions.members.first();
			banMember.ban().then((banMember)=>{
				message.channel.send(banMember.displayName + "這垃圾已經被ban掉咯")
				client.sendMessage(banMember, "可憐哪被ban掉了")
			}).catch(()=>{
				message.channel.send("沒管理員ban你ma呢");
			})
		}
	}
}