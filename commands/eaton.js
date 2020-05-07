module.exports = {
	name: 'eaton',
	description: 'eaton',
	execute(message, args) {
		message.delete(10000)
		if(!message.member.roles.find(role => role.name === "School Assholes"))
			return message.channel.send("Access denied");
		var eaton = Math.round(Math.random()*2+1);
		if (eaton == 1 ){
			return message.channel.send("Eaton = Potato confirmed", {files:["./res/eaton.png"]});
		}
		else{
			return message.channel.send("Eaton now dancing with the coffin team~ ", {files:["./res/eatoncoffin.jpeg"]});
		}
	}
};