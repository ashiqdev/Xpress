const mongoose = require('mongoose');
const { DATABASE } = process.env;

const connectWithDb = () => {
  const mongodbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  mongoose.connect(DATABASE, mongodbOptions, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('db connected');
    }
  });
};

module.exports = { connectWithDb };
