const { getISOWeek, dayLessons } = require('./utils');

function handleCommands(interaction, dayLessons) {
  const commandName = interaction.commandName;
  const weekType = (getISOWeek(new Date()) - getISOWeek(new Date('2023-08-21'))) % 2;
  const weekday = new Date().getDay();
  const schedule = require('./data/schedule.js');

  if (commandName === 'розклад') {
    const result = "😃 1: 9:00-10:20\n\n" +
      "🙂 2: 10:30-11:50\n\n" +
      "🙃 3: 12:30-13:50\n\n" +
      "😶 4: 14:00-15:20\n\n" +
      "😶‍🌫️ 5: 15:30-16:50\n\n" +
      "🫠 6: 17:00-18:20\n\n" +
      "💀 7: 18:30-19:50";
    interaction.reply(result);
  }

  if (commandName === 'сьогодні') {
    const result = dayLessons(weekday - 1, weekType, schedule, 'Сьогодні');
    interaction.reply(result);
  }

  if (commandName === 'завтра') {
    const result = dayLessons(weekday, weekType, schedule, 'Завтра');
    interaction.reply(result);
  }
}

module.exports = {
  handleCommands,
};
