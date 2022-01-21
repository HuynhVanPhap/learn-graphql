const { gql } = require('apollo-server-express');
/**
 * Định nghĩa những kiểu dữ liệu có trong 'gpl'
 * ROOT TYPE : Các type mặc định của graphql, dùng cho mục đích khác nhau
 * "!" hàm ý khi type được gọi field nào sở hữu thì field đó buộc phải được gán giá trị khi query
 */
const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }

    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }

    # ROOT TYPE
    # Lấy danh sách book
    # Lấy book với tham số id phải có giá trị ( Không được none )
    # Lấy danh sách author
    # Lấy author với tham số id phải có giá trị.

    # Dùng để thực thi truy vấn
    type Query {
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author
    }

    # Dùng để add/update dữ liệu
    type Mutation {
        createAuthor(
            name: String
            age: Int
        ): Author
        createBook(
            name: String
            genre: String,
            authorId: ID!
        ): Book
    }
`;

module.exports = typeDefs;