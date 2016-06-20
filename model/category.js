const mongoose = require('mongoose');
const {Schema} = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Category', CategorySchema);