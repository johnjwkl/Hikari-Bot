module.exports = {
	name: 'spam',
	description: 'spam',
	execute(message, args){
		for (var i = 0; i < 99; i++){
        message.channel.send("@everyone 是時候來點爆炸的藝術\nhttps://i.imgur.com/C64lIvy.gif")
    }
	}
}