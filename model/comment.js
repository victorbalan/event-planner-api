const mongoose = require('mongoose');
const {Schema} = mongoose;

const CommentSchema = new Schema({
    body: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Comment', CommentSchema);