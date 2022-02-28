const { Client, Intents, Message, MessageEmbed, User } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (message.content === '핑') {
        message.reply('퐁');
    }

});
client.on('message', async (message) => {
    if (message.content.startsWith('<:')) {
        // var re = message.content.match((/^<a?:[\w]+:[\d]+>$/g));
        var re = message.content.match(/[\d]{18}/g);
        console.log(re)
        await message.delete()
        const EmojiEmbed = new MessageEmbed()
            .setColor('#ffffff')
            .setDescription("<@" + message.author.id + ">")
            .setImage("https://cdn.discordapp.com/emojis/" + re +".png")
            .setThumbnail("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".webp?size=20")
        message.channel.send(EmojiEmbed);
    }
    if (message.content.startsWith('<a:')) {
        // var re = message.content.match((/^<a?:[\w]+:[\d]+>$/g));
        var re = message.content.match(/[\d]{18}/g);
        console.log(re)
        await message.delete()
        const EmojiEmbed = new MessageEmbed()
            .setColor('#ffffff')
            .setDescription("<@" + message.author.id + ">")
            .setImage("https://cdn.discordapp.com/emojis/" + re + ".gif")
        message.channel.send(EmojiEmbed);
    }
});

// Login to Discord with your client's token
client.login(token);