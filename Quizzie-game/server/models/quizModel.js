const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: String,
  imageURL: String,
});

const questionSchema = new mongoose.Schema({
  text: String,
  options: [optionSchema],
  ansOption: {
    type: Number,
    min: 0,
    max: 3, // Assuming 0, 1, 2, 3 represent the four options (0-based index)
  },
});

const quizSchema = new mongoose.Schema({
  name: String,
  maxQuestions: {
    type: Number,
    min: 1,
    max: 5,
  },
  pollQuestion: String,
  optionType: {
    type: String,
    enum: ["Text", "Image URL", "Text and Image URL"],
  },
  options: [optionSchema], // Global options applicable to all questions
  timerType: {
    type: String,
    enum: ["5 Sec", "10 Sec", "OFF"],
  },
  questions: [questionSchema],
});

const Quiz = mongoose.model("ShraddhaQuiz", quizSchema);

module.exports = Quiz;