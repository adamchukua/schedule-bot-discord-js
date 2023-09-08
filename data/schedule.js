const lessons = require('./lessons.js');

const schedule = [
  [ // 1 тиждень
    [ // понеділок
      [],
      [],
      [],
      [
        lessons["тзпдл"]
      ],
      [
        lessons["мапзл"]
      ],
      [
        lessons["бжп"]
      ],
    ],
    [ // вівторок
      [],
      [],
      [],
      [
        lessons["фт"]
      ],
    ],
    [ // середа
      [],
      [],
      [],
      [
        lessons["англп1"],
      ],
      [
        lessons["фуллл"],
      ],
      [
        lessons["мапзп"]
      ]
    ],
    [ // четвер
      [],
      [],
      [
        //lessons["аокп2"]
      ],
      [
        lessons["аокп1"],
        //lessons["англп2"],
      ],
      [
        lessons["явал"]
      ],
      [
        lessons["фуллп"]
      ],
    ],
    [ // п'ятниця
      [],
      [],
      [
        lessons["аокп1"]
      ],
      [
        lessons["тзпдп"]
      ],
      [
        lessons["явап"]
      ],
    ],
    [],
    []
  ],
  [ // 2 тиждень
    [ // понеділок
      [],
      [],
      [],
      [
        lessons["аокл"]
      ],
      [
        lessons["бжл"]
      ],
    ],
    [ // вівторок
      [],
      [],
      [],
      [
        lessons["фт"]
      ],
    ],
    [ // середа
      [],
      [],
      [],
      [
        lessons["англ1"],
      ],
      [
        lessons["фуллл"],
      ],
      [
        lessons["мапзп"]
      ]
    ],
    [ // четвер
      [],
      [],
      [
        lessons["аокп2"]
      ],
      [
        lessons["аокп1"],
        //lessons["англп2"],
      ],
      [
        lessons["явал"]
      ],
      [
        lessons["фуллл"]
      ],
    ],
    [ // п'ятниця
      [],
      [],
      [
        lessons["аокп2"]
      ],
      [
        lessons["тзпдп"]
      ],
      [
        lessons["явап"]
      ],
    ],
    [],
    []
  ]
]

module.exports = schedule;