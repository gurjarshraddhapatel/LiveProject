const express = require("express");
const bodyParser = require('body-parser');
// const db = require('./db');
const Quiz = require('./models/quizModel');
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./database/db");
app.use(bodyParser.json());

connectDb();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET , POST , DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = 5000;

app.post('/saveQuiz', async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json({ message: 'Quiz saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, (req, res) => {});
