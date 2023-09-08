const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'розклад',
    description: 'Надсилає розклад пар'
  },
  {
    name: 'сьогодні',
    description: 'Надсилає пари на сьогодні'
  },
  {
    name: 'завтра',
    description: 'Надсилає пари на завтра'
  },
];

const rest = new REST().setToken(process.env['TOKEN']);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands(process.env['CLIENT_ID'], process.env['GUILD_ID']),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();