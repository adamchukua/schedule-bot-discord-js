const weekdays = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

function dayLessons(day, weekType, schedule, pretext) {
  let result = `**${pretext} ${weekdays[day]} (тиждень ${weekType + 1})**\n\n`;
  let lessonNumber = 1;

  if (schedule[weekType][day].length > 0) {
    for (const lesson of schedule[weekType][day]) {
      if (lesson.length > 0) {
        if (lesson.length > 1) {
          for (const lesson1 of lesson) {
            result += `${lessonNumber}. ${lesson1[0]} - ${lesson1[1]}\n`;
          }
        } else {
          result += `${lessonNumber}. ${lesson[0][0]} - <${lesson[0][1]}>\n`;
        }
      }

      lessonNumber++;
    }
  } else {
    result = "Нічого немає, чіллим... Жартую, у вас курсова 👁👄👁";
  }

  return result;
}

module.exports = {
  weekdays,
  getISOWeek,
  dayLessons,
};
