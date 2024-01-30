const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizName: String,
  quizType: String,
  questions: [
    {
      text: String,
      options: [
        { text: String, imageURL: String },
        { text: String, imageURL: String },
        { text: String, imageURL: String },
        { text: String, imageURL: String },
      ],
      ansOption: Number,
    },
  ],
});

const Quiz = mongoose.model("ShraddhaQuiz", quizSchema);

module.exports = Quiz;
