const Author = require('../models/Author');
const Book = require('../models/Book');

const queryDataMethods = {
    getListBooks: async (authorId = null) => authorId ? await Book.find(authorId) : await Book.find(),
    getListAuthors: async () => await Author.find(),
    addNewAuthor: async args => {
        const newAuthor = new Author(args);
        return await newAuthor.save();
    },
    addNewBook: async args => {
        const newBook = new Book(args);
        return await newBook.save();
    },
    getBookById: async id => await Book.findById(id),
    getAuthorById: async id => await Author.findById(id),
}

module.exports = queryDataMethods;