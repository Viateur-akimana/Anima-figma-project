const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://127.1.0.0:27017/tasks', {
      useNewUrlParser: true,
      useCreateIndex: true,
        useFindAndModify: false,
      useUnifiedTopology: true,
      
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDb;
