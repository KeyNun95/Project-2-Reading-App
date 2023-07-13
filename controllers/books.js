const BookModel = require("../models/book");

module.exports = {
    index,
    show,
    new: newBook,
    create
};

async function index(req, res) {
    const books = await BookModel.find({});
    console.log(books);
    res.render("books/index", {title: "Book List", books});
}

async function show(req, res) {
    const book = await BookModel.findById(req.params.id);
    res.render('books/show', {title: 'Book Detail', book});
}

function newBook(req, res) {
    res.render("books/new", {title: "Add Book", errorMsg: ""});
}

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        const addedBook = await BookModel.create(req.body);
        console.log(addedBook);
        res.redirect(`/books/${addedBook._id}`);
    } catch (err) {
        console.log(err);
        res.render('books/new', {errorMsg: err.message});
    }
}