module.exports = {
	name: 'clear',
	description: 'clear',
	execute(message, args){
		const amount = args.join(' ');
		if (!message.member.havePermission("MANAGE_MESSAGE")) return
			message.reply('你沒權限刪毛線')
		if (amount > 100 || amount < 1) return
			message.reply('1-100就選一個數字很難嗎?')
		if (!amount || isNaN(amount)) return
		 message.channel.messages.fetch({limit: 15}).then(message => {
			message.bulkDelete(messages)
			});
		message.channel.messages.fetch({limit: amount}).then(message => {
			message.bulkDelete(messages)
		});
    }
}