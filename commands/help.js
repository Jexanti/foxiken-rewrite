const Discord = require('discord.js')
const config = ('./commands/config.json')
module.exports = {
    name: "help",
    description: "help command",
    async run (bot, message, args) {
        const helpEmbed = {
            color: 0xdd9bb4,
            title: "Foxiken Help",
            description: "Get help!",
            fields: [
                {
                    name: "Here are the commands you can use to get help:",
                    value: "**Fun:**\nType  `f/help  fun` to see these commands.\n\n**Rick Astley:**\nType  `f/help  rick` to see these commands\n\n**Utilities:**\nType  `f/help  utilities` to see these commands\n\n**Text:**\nType  `f/help  text` to view these commands\n\n**Links:**\nType  `f/help  links` to see these commands",
                },
            ],
            timestamp: new Date(),
            footer: {
                text: "The f/help  command was used.",
            },
        }
        message.channel.send({embed : helpEmbed});
        console.log('Command run: f/help embed by user '+message.author);
        msgRespondedTo = true
    }
}