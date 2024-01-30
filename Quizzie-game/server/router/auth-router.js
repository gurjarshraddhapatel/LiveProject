const express = require("express");
const router = express.Router();
const {
  login,
  register,
  home,
  saveQuizToDatabase,
} = require("../controllers/auth-routes");




const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/login").post(login);

router.route("/signup").post(validate(signupSchema), register);

router.route("/").get(home);

router.route("/Quiztable").post(saveQuizToDatabase);



module.exports = router;
