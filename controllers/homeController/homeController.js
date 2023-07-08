const catchAsyncErrors = require("./../../middleware/catchAsyncErrors");
const Home = require("./../../models/homeModel/homeSliderModel/HomeSliderModel");

exports.UploadSlider = catchAsyncErrors(async (req, res) => {
    try {
        const files = [];
        if (req.files) {
            for (const file of req.files) {
              files.push({ url: 'http://localhost:3000' + '/images/homeSlider/' + file.filename });
            }
          }
        await Home.create({
            title: req.body.title,
            Article:req.body.Article,
            image:files
        });
        res.status(200).json({ success: true, message: "Slider uploaded successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

exports.getHomeSliderAll = catchAsyncErrors(
    async(req,res)=>{
        try{
            const GetAllSilderDetails = await Home.find();
            if(!GetAllSilderDetails){
                return res.status(400).json({"status":false,message:"error in api"});
            }
            return res.status(200).json({"status":true,data:GetAllSilderDetails});
        }catch(err){
            res.status(500).json({ success: false, message: err.message });
        }
    }
)