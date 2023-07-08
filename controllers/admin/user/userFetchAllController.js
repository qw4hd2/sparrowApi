const catchAsyncErrors = require("./../../../middleware/catchAsyncErrors");
const USer = require("./../../../models/user/login");

exports.FetchAllUser = catchAsyncErrors(
    async(req,res)=>{
        try{
            const fetchUser = await USer.find();
            if(!fetchUser){
                return res.status(400).json({status:false,message:"No Registered User"});
            }
            return res.status(200).json({status:true,message:fetchUser});
        }catch(err){
            return res.status(500).json(err.message);
        }
    }
)