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
    },
    password: {
        type: String,
        required: [true, "Enter your password"]
    },
    fieldId:{
        type: String,
        required:[true, "Enter fieldId"]
    },
    image: [
        {
            url: {
                type: String,

            }
        }
    ],
     
});
module.exports=mongoose.model('user',userSchema)
