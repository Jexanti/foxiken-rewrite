const Discord = require('discord.js')
const config = ('./commands/config.json')
var botprefix = ('f/')
module.exports = {
    name: "help",
    description: "help command",
    async run (bot, message, args) {
        if(message.content === botprefix+'help fun') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my fun commands:",
                        value: "**"+botprefix+"joke**\nGet one of 4 absolutely terrible jokes.\n\n**"+botprefix+"ikea**\nI mean who doesn't love IKEA?\n\n**@Foxiken**\nPing me to see my response.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help fun command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help fun by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help rick') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my Rick Astley commands:",
                        value: "**"+botprefix+"rickroll**\nRickroll everyone.\n\n**"+botprefix+"rickroll tts**\nRickroll everyone, but everyone focused on the channel will have the chorus read in text to speech.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help rick command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help rick by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help text') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my text commands:",
                        value: "**"+botprefix+"hello**\nWill respond with one of 8 messages, all of which say hi in different ways.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help text command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help text by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help links') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my commands that link to things:",
                        value: "**"+botprefix+"invite**\nInvite me to your server!\n\n**"+botprefix+"website**\nLinks to the homepage of my website.\n\n**"+botprefix+"join**\nJoin the Foxiken Community discord server!\n\n**"+botprefix+"links**\nLinks to my Linktree page.\n\n**"+botprefix+"upvote**\nLinks to all the websites where you can (and hopefully will!) vote for me.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help fun command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help utilities') {
            const commandEmbed = {
                color: 0xdd9bb4,
                title: "Foxiken Help",
                description: "Get help!",
                fields: [
                    {
                        name: "Here are my utility commands:",
                        value: "**prefix**\nGives you my prefix\n\n**"+botprefix+"version**\nTells you which version I am on\n\n**"+botprefix+"test**\nTest if I am working.\n\n**"+botprefix+"suggest**\nSuggest something!\n\n**"+botprefix+"dev**\nApply to become a developer\n\n**"+botprefix+"troubleshoot**\nTroubleshoot me. This also works without the prefix.\n\n**"+botprefix+"changelog**\nLinks to my changelog. This is version 10.3.3, the helpful update.\n\n**"+botprefix+"help**\nLinks to my help website.\n\n**"+botprefix+"help**\n"+botprefix+"help, but as an embed on discord so no website is needed.\n\n**"+botprefix+"changelog embed**\nSee the changelog from within the comfort of your discord client.",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: "The "+botprefix+"help utilities command was used.",
                },
            }
            message.channel.send({embed : commandEmbed});
            console.log('Command run: '+botprefix+'help utilities by user '+message.author);
            msgRespondedTo = true
        }
        if(message.content === botprefix+'help') {
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
            console.log('Command run: f/help by user '+message.author);
            msgRespondedTo = true
        }
    }
}