const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Event', EventSchema);