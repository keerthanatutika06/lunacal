const express = require('express');
const cors = require('cors'); // Add this line
const bcrypt = require('bcrypt');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'userData.db');

const app = express();
app.use(cors()); // Add this line to allow cross-origin requests
app.use(express.json());

let db = null;
const initialiseDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log('server running at http://localhost:3000/');
    });
  } catch (e) {
    console.log('couldn not connect');
  }
};

initialiseDbAndServer();

// API1
// app.post('/register', async (request, response) => {
//   let { username, password} = request.body;

//   let hashedPassword = await bcrypt.hash(password, 10);

//   let checkTheUsername = `
//     SELECT *
//     FROM user
//     WHERE username = '${username}';`;
//   let userData = await db.get(checkTheUsername);
//   if (userData === undefined) {
//     let postNewUserQuery = `
//     INSERT INTO
//     user (username, password)
//     VALUES (
//       '${username}',
//       '${hashedPassword}',
//     );`;
//     if (password.length < 5) {
//       response.status(400);
//       response.send('Password is too short');
//     } else {
//       await db.run(postNewUserQuery);
//       response.status(200);
//       response.send('User created successfully');
//     }
//   } else {
//     response.status(400);
//     response.send('User already exists');
//   }
// });

// API2
app.post('/login', async (request, response) => {
  const { username, password } = request.body;
  const selectUserQuery = `SELECT * FROM user WHERE username = ?`;
  const dbUser = await db.get(selectUserQuery, [username]);

  if (dbUser === undefined) {
    response.status(400).send('Invalid user');
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
    if (isPasswordMatched) {
      response.send('Login success!');
    } else {
      response.status(400).send('Invalid password');
    }
  }
});

// API3
// app.put('/change-password', async (request, response) => {
//   const { username, oldPassword, newPassword } = request.body;
//   const selectUserQuery = `SELECT * FROM user WHERE username = '${username}';`;
//   const dbUser = await db.get(selectUserQuery);

//   if (dbUser === undefined) {
//     response.status(400);
//     response.send('User not registered');
//   } else {
//     const isValidPassword = await bcrypt.compare(oldPassword, dbUser.password);
//     if (isValidPassword) {
//       if (newPassword.length < 5) {
//         response.status(400);
//         response.send('Password is too short');
//       } else {
//         const encryptedPassword = await bcrypt.hash(newPassword, 10);
//         const updateQuery = `UPDATE user SET password = '${encryptedPassword}' WHERE username = '${username}';`;
//         await db.run(updateQuery);
//         response.send('Password updated');
//       }
//     } else {
//       response.status(400);
//       response.send('Invalid current password');
//     }
//   }
// });

module.exports = app;
