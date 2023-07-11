const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String
}, {
    timestamps: true
});

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: { type: String, required: true },
    buy: { type: String, required: true },
    listen: { type: String, required: true },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);