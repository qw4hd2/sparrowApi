const User = require("./../models/user/user.js")
const ErrorHandler = require("../utils/errorHandler");
const mongoose = require('mongoose');
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
var bcrypt = require("bcryptjs");
// create user accout
exports.signup=catchAsyncErrors(
    async (req, res, next) => {
        console.log(req.body);
      try{
        const product = await User.create({
            userName : req.body.userName,
            email : req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            role:req.body.role
        })
        return res.status(200).json({status:"success",message:"user has been registered"});
      }catch(err){
        res.status(500).json(err.message);
      }
    }
)