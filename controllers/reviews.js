const BookModel = require('../models/book');

module.exports = {
    create,
    delete: deleteReview
};

async function create(req, res) {
    try {
        const booksListed = await BookModel.findById(req.params.id)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        booksListed.reviews.push(req.body);
        await booksListed.save();
        res.redirect(`/books/${req.params.id}`);
    } catch(err) {
        res.send(err);
    }
}

async function deleteReview(req, res, next) {
    try {
        const bookReview = await BookModel.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
        if(!bookReview) return res.redirect('/books')
        bookReview.reviews.remove(req.params.id);
        await bookReview.save();
        res.redirect(`/books/${bookReview._id}`);
    } catch(err) {
        next(err);
    }
}