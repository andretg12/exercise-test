const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coachSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    street: {
        type: String,
    },
    state: {
        type: String,
    },
    phone: {
        type: Number,
        required: true
    },
    locations: {
        type: [String],
        required: true
    },
    recommendations: {
        type: [String]
    },
    picture: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
})