// create test data

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function makeUsersArray() {
  return [
    {
      id: 1,
      username: 'stickysubject',
      password: 'StickyPassword1',
      date_created: '2020-10-05 12:55:22',
    },
    {
      id: 2,
      username: 'jmoney',
      password: 'Jm0n3yeet!',
      date_created: '2020-10-06 12:55:22',
    },
    {
      id: 3,
      username: 'cheezygordita',
      password: 'Y0queroTacoBell',
      date_created: '2020-04-20 04:20:00',
    }
  ];
}

function makeUserQuestionsArray(users) {
  return [
    {
      id: 1,
      question: 'What did the fish say when it ran into a wall?',
      date_created: '2020-10-16 05:00:00',
      user_id: users[0].id,
    },
    {
      id: 2,
      question: 'Who is the coolest doctor in the hospital?',
      date_created: '2020-10-16 05:00:00',
      user_id: users[1].id,
    },
    {
      id: 3,
      question: 'What do you call a deer with no eyes?',
      date_created: '2020-10-16 12:20:05',
      user_id: users[2].id,
    },
    {
      id: 4,
      questions: 'What is brown and sticky?',
      date_created: '2020-10-16 12:22:30',
      user_id: users[0].id,
    },
  ]
}

function makeUserAnswersArray(questions) {
  return [
    {
      id: 1,
      answer: 'dam',      
      question_id: questions[0].id
    },
    {
      id: 2,
      answer: 'The hip doctor!',      
      question_id: questions[1].id,
    },
    {
      id: 3,
      answer: 'No eye deer!',      
      question_id: questions[2].id,
    },
    {
      id: 4,
      answer: 'A stick!',
      question_id: questions[3].id,
    },
  ]
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('users').insert(preppedUsers)
    .then(() =>
      db.raw(
        `SELECT setval('users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    )
}

module.exports = {
  makeUsersArray,
  seedUsers,
}