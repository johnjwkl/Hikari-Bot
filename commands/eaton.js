module.exports = {
	name: 'eaton',
	description: 'eaton',
	execute(message, args) {
		if(!message.member.roles.find(role => role.name === "School Assholes"))
			return message.channel.send("Access denied");
		var eaton = Math.round(Math.random()*2+1);
		if (eaton == 1 ){
			return message.channel.send("Eaton = Potato confirmed", {files:["./res/eaton.png"]});
		}
		if (eaton == 2){
			return message.channel.send("Eaton now dancing with the coffin team~ ", {files:["./res/eatoncoffin.jpeg"]});
		}
	}
};