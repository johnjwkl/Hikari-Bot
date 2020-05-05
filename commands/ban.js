module.exports = {
	name: 'ban',
	description: 'ban',
	execute(message, args) {
		var banMember = message.mentions.members.first();
		if (banMember = '238607032930795521'){
			message.channel.send('ban你媽逼 沒權利ban作者:>')
			return;
		}
		else if (message.member.hasPermission("ADMINISTRATOR")){
			banMember.ban().then((banMember)=>{
				message.channel.send(banMember.displayName + "這垃圾已經被ban掉咯")
			}).catch(()=>{
				message.channel.send("沒管理員ban你ma呢");
			})
		}
		else {
			message.channel.send("沒管理員ban你ma呢");
		}
	}
}