const BookModel = require("../models/book");

module.exports = {
    index,
    new: newBook
};

async function index(req, res) {
    const books = await BookModel.find({});
    console.log(books);
    res.render("books/index", {title: "Book List", books});
}

function newBook(req, res) {
    res.render("books/new", {title: "Add Book", errorMsg: ""});
}