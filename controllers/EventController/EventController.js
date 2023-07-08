const EventModel = require("./../../models/Event/EventModel");
const catchAsyncErrors = require("./../../middleware/catchAsyncErrors");
const path = require('path');
const fs = require('fs');
exports.CreateEvent = catchAsyncErrors(
    async (req, res) => {
        try {
            const files = [];
            if (req.files) {
                for (const file of req.files) {
                    files.push({ url: 'http://localhost:3000' + '/images/EventImages/' + file.filename });
                }
            }
            await EventModel.create({
                buttonText: req.body.buttonText,
                description: req.body.description,
                dateTillOpen: req.body.dateTillOpen,
                image: files
            });
            res.status(200).json({ success: true, message: "Event Added successfully" });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    });

exports.getEventAll = catchAsyncErrors(
    async (req, res) => {
        try {
            const GetAllEvent = await EventModel.find();
            if (!GetAllEvent) {
                return res.status(400).json({ "status": false, message: "error in api" });
            }
            return res.status(200).json({ "status": true, data: GetAllEvent });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
)

exports.DeleteEvent = catchAsyncErrors(async (req, res) => {
    const eventId = req.params.id;
    try {
        const event = await EventModel.findById(eventId);
        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }
        for (const image of event.image) {
            const fileName = image.url.substring(image.url.lastIndexOf('/') + 1);
            const filePath = path.join(__dirname, '../../images/EventImages', fileName);
            fs.unlinkSync(filePath);
        }
        await EventModel.findByIdAndDelete(eventId);

        res.status(200).json({ success: true, message: 'Event deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

