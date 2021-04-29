const admin = require('firebase-admin');

const serviceAccount = require('../config/assignment-11-65e13-firebase-adminsdk-l77a8-f8062f67fe.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
