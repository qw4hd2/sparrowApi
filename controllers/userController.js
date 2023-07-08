const User = require("./../models/user/login")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
exports.signup=catchAsyncErrors(
    async (req, res, next) => {
      const files = [];
      if (req.files) {
          for (const file of req.files) {
            files.push({ url: 'http://localhost:3000' + '/images/profile/' + file.filename });
          }
        }
      try{
        const userRegistration = await User.create({
            userName : req.body.userName,
            email : req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            fieldId:req.body.fieldId,
            image:files
        })
        return res.status(200).json({status:"success",message:"user has been registered"});
      }catch(err){
        res.status(500).json(err.message);
      }
    }
)

exports.signin= catchAsyncErrors(
  async (req, res) => {
    const { userName  } = req.body;
    const user = await User.findOne({
        userName: userName,
    })
    if (!user) {
      return res.status(404).send({ message: "invalid user" })
    }
  
    const token =  jwt.sign({ id: user._id }, "madadgar");
    return res.status(200).json({ token: token, user: user._id ,userRole:user.role});
  }
)