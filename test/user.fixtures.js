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



// Will need to make test user questions and answers
// to test functionality of user made questions and answers


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