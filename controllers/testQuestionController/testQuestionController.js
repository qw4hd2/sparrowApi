const testQue = require('./../../models/testQuestionModel/testQuestionModel');
const catchAsyncErrors = require('./../../middleware/catchAsyncErrors');

exports.takeAQuestion = catchAsyncErrors(
    async(req,res) => {
        try{
            await testQue.create({
                question:req.body.question
            });
            return res.status(200).json("Question Uploaded Successfully...");
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
)