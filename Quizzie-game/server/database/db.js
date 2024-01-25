const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

mongoose.connect(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sankalp:lopa9990@cluster0.clkjatq.mongodb.net/Thapar?retryWrites=true&w=majority"
      // "mongodb+srv://sp4600788:sp4600788@quiz.qjc7ati.mongodb.net/quiz?retryWrites=true&w=majority"
    );
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;
