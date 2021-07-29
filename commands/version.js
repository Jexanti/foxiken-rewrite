const Discord = require('discord.js')
var botprefix = ('f/')
module.exports = {
    name: "version",
    description: "command name here",
    async run (bot, message, args) {
        message.channel.send('I am currently running **version 10.3.3** *(Nickname: The helpful update)* - Run '+botprefix+'changelog to see what is new!');
		console.log('Command run: '+botprefix+'version by user '+message.author);
    }
}