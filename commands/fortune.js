module.exports = {
	name: 'fortune',
	description: 'fortune',
	execute(message, args){
		var fortune = Math.round(Math.random()*4)
		switch(fortune){
			case 1:
			  message.channel.send("中兇")
			  break;
			case 2:
			  message.channel.send("兇")
			  break;
			case 3:
			  message.channel.send("小兇")
			  break;
			case 4:
			  message.channel.send("小吉")
			  break;
			default:
			  message.channel.send("大兇") 
		}
	}
};