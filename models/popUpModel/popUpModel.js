const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const popUpModel = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true
    },
    image: [
        {
            url: {
                type: String,
                required: true,
            }
        }
    ]
});
module.exports = mongoose.model('popUpModel', popUpModel)
