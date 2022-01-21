const { books, authors } = require("../data/static");

/**
 *  parent 
 *  args tham số sẽ được truyền vào theo nguyên tắc từ schema
 *  Tham số thứ 3 sẽ được sử dụng để "hứng" context được truyền từ new ApolloServer()
 */
const resolvers = {
    Query: {
        books: async (parent, args, context) => await context.queryDataMethods.getListBooks(),
        book: async (parent, {id}, {queryDataMethods}) => await queryDataMethods.getBookById(id),
        authors: async (parent, args, {queryDataMethods}) => await queryDataMethods.getListAuthors(),
        author: async (parent, {id}, {queryDataMethods}) => await queryDataMethods.getAuthorById(id),
    },
    Book: {
        author: async (parent, args, {queryDataMethods}) => await queryDataMethods.getAuthorById(parent.authorId),
    },
    Author: {
        books: async (parent, args, {queryDataMethods}) => await queryDataMethods.getListBooks({ authorId: parent.id }),
    },
    Mutation: {
        createAuthor: async (parent, args, {queryDataMethods}) => await queryDataMethods.addNewAuthor(args),
        createBook: async (parent, args, {queryDataMethods}) => await queryDataMethods.addNewBook(args)
    },
};

module.exports = resolvers;