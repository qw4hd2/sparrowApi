const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: { type: String, 
        required: [true, "Enter Your user name"],
        unique: true, 
        trim: true
    },
    email: {
        type: String,
        required: [true,"Enter Your email address"],
        unique: true, 
        trim: true
    },
    password: {
        type: String,
        required: [true, "Enter your password"]

    },
    role:{
        type: String,
        required: [true, "Enter your role"]
    }
     
});
module.exports=mongoose.model('user',userSchema)
