const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const HomeSlider = new Schema({
   title:{
        type:String,
        required:true,
   },
   Article:{
        type:String,
        required:true,
   },
   image:[
    {
        url:{
            type: String,
            required:true,
        }
    }
   ]
});
module.exports=mongoose.model('HomeSlider',HomeSlider)
