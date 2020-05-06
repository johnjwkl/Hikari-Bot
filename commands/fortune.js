module.exports = {
	name: 'fortune',
	description: 'fortune',
	execute(message, args){
		var fortune = Math.round(Math.random()*4)
		switch(fortune){
			case 1:
			  message.reply("中兇")
			  break;
			case 2:
			  message.reply("兇")
			  break;
			case 3:
			  message.reply("小兇")
			  break;
			case 4:
			  message.reply("小吉")
			  break;
			default:
			  message.reply("大兇") 
		}
	}
};