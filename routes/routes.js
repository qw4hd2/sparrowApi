const express = require('express');
const {signup} = require('./../controllers/userController')
const Registration=require("./../models/user/user")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const router = express.Router();
const  checkUnique  = require("./../middleware/checkUniqueEntry")
const {takeAQuestion} = require("./../controllers/testQuestionController/testQuestionController");
// const {takeAQuestion1} = require("./../controllers/testQuestionController1/testQuestionController");
router.post("/auth/signup",checkUnique ,signup);
router.post('/auth/signin', async (req, res) => {
    // Read username and password from request body
    const { email, password  } = req.body;
    const user = await Registration.findOne({
        email: email,
    })
    if (!user) {
      return res.status(404).send({ message: "invalid user" })
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
   
    if (!isMatch) {
      return res.status(404).send({message:"password does not matched"})
    }
    const token =  jwt.sign({ id: user._id }, "madadgar");
    return res.status(200).json({ token: token, user: user._id ,userName:user.fullName});
  });
router.post("/post/question",takeAQuestion);
// router.post("/post/level1",takeAQuestion1);
module.exports=router;