const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Event = new Schema({
    buttonText: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateTillOpen: {
        type: String,
        required: true,
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
module.exports = mongoose.model('Event', Event)
