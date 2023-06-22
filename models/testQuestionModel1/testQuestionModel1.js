const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const testQuestions = new Schema({
    question:{
        type: String,
        required: true
    }
})
module.exports=mongoose.model('testQuestions',testQuestions);