const keep_alive = require('./keep_alive.js')
//require('./register-commands.js');

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const { dayLessons } = require('./utils');
const { handleCommands } = require('./commands');

client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', interaction => {
  if (!interaction.isChatInputCommand()) return;

  handleCommands(interaction, dayLessons);
});

client.login(process.env['TOKEN']);