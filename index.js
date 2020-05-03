console.log('Started')
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
//Set up settings
const settings = {
	TOKEN: 'Njk2MjcyNDkxNjkzMzQyNzkx.Xq0TVw.lISvOdSrQey2LwfbufPL8apZ4v4',
	guildName: 'awa R41D3D BY S0M30N3',
	guildID: '706032733507420230',
	prefix: 'h!'
};

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.login(settings.TOKEN)
//Show logged in
client.on('ready',() => {
	console.info(`Logged in as ${client.user.tag}!`);
	console.info(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
});

client.on('message', message => {
	if (!message.content.startsWith(settings.prefix) || message.author.bot) return;
	const args = message.content.slice(settings.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
	client.commands.get(command).execute(message, args);
    } catch (error) {
	console.error(error);
	message.reply('發生了錯誤咯 都怪你啦 :3');
    }
    });