module.exports = {
	name: 'mute',
	description: 'mute',
	execute(message, args){
		let roleName = 'Muted/禁言'
		let role = message.guild.roles.find(x => x.name == roleName);
		var muteMember = message.mentions.members.first();
		if (!message.member.hasPermission('ADMINISTRATOR')){
			return message.reply('你都沒權限 還敢禁別人:>');
	    }
	    else if (muteMember == '<@238607032930795521>'){
	    	return message.reply('不可以把作者禁掉喔>3');
	    }
	    else if (muteMember == message.author){
	    	return message.reply('你不能把自己禁掉oao');
	    }
	    else if (message.mentions.users.size === 0){
	    	return message.reply('麻煩動一下你的臭手 標註一個人嗎')
	    }
	    else if (!role) {
	    	message.reply('請設置一個禁言的身分組\n名字:Muted/禁言\n權限: SEND_MESSAGE = false')
	    	message.guild.createRole({data:{
	    		name: roleName,
	    		color: 'BLACk'
	    		permissions: ["SEND_MESSAGE": false]
	    	}})
	    	return;
	    }
	    else {
	    	muteMember.addRole(role).then((muteMember => {
	    		message.channel.send('阿賀' + muteMember.displayName +'這人現在被剝奪了說話的權利了')
	    	}))
	    }
}
}