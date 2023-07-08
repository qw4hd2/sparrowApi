const PopUpPage = require("./../../models/popUpModel/popUpModel");
const catchAsyncErrors = require("./../../middleware/catchAsyncErrors");

exports.CreatepopUp = catchAsyncErrors(
    async (req, res) => {
    try {
        const files = [];
        if (req.files) {
            for (const file of req.files) {
              files.push({ url: 'http://localhost:3000' + '/images/PopUpImages/' + file.filename });
            }
          }
        await PopUpPage.create({
            title: req.body.title,
            description:req.body.description,
            Type: req.body.Type,
            size:req.body.size,
            image:files
        });
        res.status(200).json({ success: true, message: "popup uploaded successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

exports.getpopUpAll = catchAsyncErrors(
    async(req,res)=>{
        try{
            const GetAllPOPUP = await PopUpPage.find();
            if(!GetAllPOPUP){
                return res.status(400).json({"status":false,message:"error in api"});
            }
            return res.status(200).json({"status":true,data:GetAllPOPUP});
        }catch(err){
            res.status(500).json({ success: false, message: err.message });
        }
    }
)


