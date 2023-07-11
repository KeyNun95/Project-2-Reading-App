const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: { type: String},
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    userName: String
}, {
    timestamps: true
});

const bookSchema = new mongoose.Schema({
    title: { type: String},
    author: { type: String},
    synopsis: { type: String},
    buy: { type: String},
    listen: { type: String},
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);