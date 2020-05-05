module.exports = {
	name: 'eaton',
	description: 'eaton',
	execute(message, args) {
		message.channel.send('Eaton = Potato confirmed',{
			files: [
			"./eaton.png"
			]
		})
	}
};