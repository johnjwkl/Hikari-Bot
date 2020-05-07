module.exports = {
	name: 'fgodraw',
	description: 'fgodraw',
	execute(message, args){
		var fgo = Math.round(Math.random()*99)
		if (fgo == 3){
			message.channel.send("恭喜你咯 5*卡 出現了awa", {files: ['./res/padoru.gif']})
		}
		else {
			message.channel.send("果然啊 你還是沒能逃出非洲人的命運")
		}
    }
}