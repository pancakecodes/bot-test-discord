const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



client.once('ready',  () => {
    console.log('Panquecito is online!');
});



client.login('token_bot_discord');
