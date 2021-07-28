const Discord = require('discord.js')
const config = ('./config.json')
var prefix = (config.prefix)
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
                    value: "**Fun:**\nType  `"+prefix+"help  fun` to see these commands.\n\n**Rick Astley:**\nType  `"+prefix+"help  rick` to see these commands\n\n**Utilities:**\nType  `"+prefix+"help  utilities` to see these commands\n\n**Text:**\nType  `"+prefix+"help  text` to view these commands\n\n**Links:**\nType  `"+prefix+"help  links` to see these commands",
                },
            ],
            timestamp: new Date(),
            footer: {
                text: "The "+prefix+"help  command was used.",
            },
        }
        message.channel.send({embed : helpEmbed});
        console.log('Command run: '+prefix+'help embed by user '+message.author);
        msgRespondedTo = true
    }
}
console.log(config.prefix)