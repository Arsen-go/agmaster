const mongoose = require("mongoose");

const Message = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("message", Message);
