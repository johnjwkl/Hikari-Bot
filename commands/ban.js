module.exports = {
	name: 'ban',
	description: 'ban',
	execute(message, args) {
		if (!message.guild.member(message.author).hasPerrmission('BAN_MEMBERS')){
			return message.channel.send('沒權限ban你ma阿'); }
		if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')){
		    return message.channel.send('沒權限ban你ma阿'); }
		let banMember = message.guild.member(message.mentions.users.first());
		if (banMember === message.author){
			return message.channel.send('ban你自己幹嘛 北七喔')
		}
		if (!banMemeber) {
			return message.channel.send('你確定你沒有手抖打錯?');
		}
		banMember.ban().then((member)=> {
			message.channel.send(member.displayName + "這北七被ban掉了啦")
		})
	}
};