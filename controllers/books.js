const BookModel = require("../models/book");

module.exports = {
    index,
    new: newBook,
    create
};

async function index(req, res) {
    const books = await BookModel.find({});
    console.log(books);
    res.render("books/index", {title: "Book List", books});
}

function newBook(req, res) {
    res.render("books/new", {title: "Add Book", errorMsg: ""});
}

async function create(req, res) {
    try {
        const addedBook = await BookModel.create(req.body);
        console.log(addedBook);
        res.redirect(`/books/${addedBook._id}`);
    } catch (err) {
        console.log(err);
        res.render("books/new", {errorMsg: err.message});
    }
}