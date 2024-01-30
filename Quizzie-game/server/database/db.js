const mongoose = require("mongoose");

const SankalpbhaiyaUrl =
  "mongodb+srv://sankalp:lopa9990@cluster0.clkjatq.mongodb.net/Thapar?retryWrites=true&w=majority";
const URI = process.env.MONGO_URI || SankalpbhaiyaUrl;

// mongoose.connect(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(SankalpbhaiyaUrl);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;
