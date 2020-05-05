module.exports = {
	name: 'ban',
	description: 'ban',
	execute(message, args) {
		var banMember = message.mentions.members.first();
		if (banMember == '<@238607032930795521>'){
			message.channel.send('ban你媽逼 沒權利ban作者:>')
			return;
		}
		else if (message.mentions.users.size === 0){
			return message.channel.send('沒人我ban毛線')
		}
		else if (message.member.hasPermission("ADMINISTRATOR")){
			banMember.ban().then((banMember)=>{
				message.channel.send(banMember.displayName + "這垃圾已經被ban掉咯\n" + banMember.id + "這是哪垃圾的id")
			}).catch(()=>{
				message.channel.send("沒管理員ban你ma呢");
			})
		}
		else {
			message.channel.send("沒管理員ban你ma呢");
		}
	}
}