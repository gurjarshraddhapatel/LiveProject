const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./database/db");

connectDb();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET , POST , DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = 4000;

app.listen(PORT, (req, res) => {});
